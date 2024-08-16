import db from "@/db/db";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import mime from "mime";

export async function GET(
  req: NextRequest,
  {
    params: { downloadVerificationId },
  }: { params: { downloadVerificationId: string } }
) {
  try {
    const data = await db.downloadVerification.findFirst({
      where: {
        id: downloadVerificationId,
        expiresAt: { gt: new Date() },
      },
      select: { product: { select: { filePath: true, name: true } } },
    });

    if (!data) {
      return NextResponse.redirect(
        new URL("/products/download/expired", req.url)
      );
    }

    const resolvedPath = path.resolve(data.product.filePath);
    const { size } = await fs.stat(resolvedPath);
    const file = await fs.readFile(resolvedPath);
    const extension = path.extname(resolvedPath).substring(1);
    const mimeType = mime.getType(extension) || "application/octet-stream";

    return new NextResponse(file, {
      headers: {
        "Content-Disposition": `attachment; filename="${data.product.name}.${extension}"`,
        "Content-Length": size.toString(),
        "Content-Type": mimeType,
      },
    });
  } catch (error) {
    console.error("Error handling file download:", error);
    return NextResponse.redirect("/500");
  }
}
