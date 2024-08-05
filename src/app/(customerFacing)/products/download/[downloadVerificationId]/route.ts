import db from "@/db/db";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";

interface Params {
  params: {
    downloadVerificationId: string;
  };
}

export async function GET(req: NextRequest, { params: { downloadVerificationId } }: Params) {
  try {
    console.log("Fetching data from database...");
    const data = await db.downloadVerification.findUnique({
      where: {
        id: downloadVerificationId,
        expiresAt: { gt: new Date() }
      },
      select: {
        product: {
          select: { filePath: true, name: true }
        }
      }
    });

    if (data == null) {
      console.log("Data not found or expired.");
      return NextResponse.redirect(new URL("/products/download/expired", req.url));
    }

    console.log("Reading file...");
    const { size } = await fs.stat(data.product.filePath);
    const file = await fs.readFile(data.product.filePath);
    const extension = data.product.filePath.split(".").pop();

    console.log("File read successfully.");
    return new NextResponse(file, {
      headers: {
        "Content-Disposition": `attachment; filename="${data.product.name}.${extension}"`,
        "Content-Length": size.toString()
      }
    });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.redirect(new URL("/products/download/error", req.url));
  }
}
