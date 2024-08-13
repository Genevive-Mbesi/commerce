import db from "@/db/db";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";

export async function GET(
  req: NextRequest,
  {
    params: { downloadVerificationId },
  }: { params: { downloadVerificationId: string } }
) {
  // Log the downloadVerificationId for debugging purposes
  console.log('DownloadVerification ID:', downloadVerificationId);

  // Attempt to retrieve the DownloadVerification record
  const data = await db.downloadVerification.findUnique({
    where: {
      id: downloadVerificationId,
      expiresAt: { gt: new Date() }, // Ensure the download link is still valid
    },
    select: {
      product: { select: { filePath: true, name: true } },
    },
  });

  // If no data is found, redirect to an expired page
  if (!data || !data.product?.filePath) {
    console.warn('Download verification not found or file path missing');
    return NextResponse.redirect(new URL("/products/download/expired", req.url));
  }

  try {
    // Attempt to get file statistics and read the file
    const { size } = await fs.stat(data.product.filePath);
    const file = await fs.readFile(data.product.filePath);
    const extension = data.product.filePath.split(".").pop();

    // Return the file as a response with appropriate headers
    return new NextResponse(file, {
      headers: {
        "Content-Disposition": `attachment; filename="${data.product.name}.${extension}"`,
        "Content-Length": size.toString(),
      },
    });
  } catch (error) {
    // Log the error and redirect to an error page
    console.error('File operation error:', error);
    return NextResponse.redirect(new URL("/products/download/error", req.url));
  }
}
