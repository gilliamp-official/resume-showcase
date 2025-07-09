import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ caseStudyId: string }> }
) {
  try {
    const { caseStudyId } = await params;
    const directoryPath = path.join(process.cwd(), 'public', 'case-studies', caseStudyId);

    // Check if directory exists
    try {
      await fs.access(directoryPath);
    } catch {
      return NextResponse.json({ hasImages: false, images: [] });
    }

    // Read directory contents
    const files = await fs.readdir(directoryPath);
    
    // Filter for image files
    const imageExtensions = ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg'];
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return imageExtensions.includes(ext);
    });

    // Create image objects
    const images = imageFiles.map((filename, index) => ({
      filename,
      caption: `Screenshot ${index + 1}`,
      description: `Screenshot ${index + 1} for ${caseStudyId}`
    }));

    return NextResponse.json({
      hasImages: imageFiles.length > 0,
      images: images
    });

  } catch (error) {
    console.error('Error reading screenshot directory:', error);
    return NextResponse.json({ hasImages: false, images: [] });
  }
}