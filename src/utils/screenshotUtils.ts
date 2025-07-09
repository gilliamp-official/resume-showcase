interface ScreenshotImage {
  filename: string;
  caption: string;
  description: string;
}

interface ScreenshotData {
  password: string;
  images: ScreenshotImage[];
}

/**
 * Checks if a case study has any image files
 * @param caseStudyId - The ID of the case study
 * @returns Promise<boolean> - True if any images exist
 */
export async function hasScreenshots(caseStudyId: string): Promise<boolean> {
  try {
    // Try to fetch the directory listing via API route
    const response = await fetch(`/api/screenshots/${caseStudyId}`);
    if (response.ok) {
      const data = await response.json();
      return data.hasImages || false;
    }
  } catch {
    // Fallback to manual checking if API route doesn't exist
  }
  
  // Fallback: Try a few common patterns to see if any exist
  const commonExtensions = ['png', 'jpg', 'jpeg', 'webp', 'gif'];
  const commonNames = ['screenshot', 'image', 'photo', 'pic'];
  
  for (let i = 1; i <= 5; i++) {
    for (const name of commonNames) {
      for (const ext of commonExtensions) {
        const filename = `${name}-${i}.${ext}`;
        const imagePath = `/case-studies/${caseStudyId}/${filename}`;
        try {
          const response = await fetch(imagePath, { method: 'HEAD' });
          if (response.ok) {
            return true;
          }
        } catch {
          // Continue checking
        }
      }
    }
  }
  
  // Check for files without numbers
  for (const name of commonNames) {
    for (const ext of commonExtensions) {
      const filename = `${name}.${ext}`;
      const imagePath = `/case-studies/${caseStudyId}/${filename}`;
      try {
        const response = await fetch(imagePath, { method: 'HEAD' });
        if (response.ok) {
          return true;
        }
      } catch {
        // Continue checking
      }
    }
  }
  
  return false;
}

/**
 * Dynamically loads screenshots from the case study directory
 * @param caseStudyId - The ID of the case study
 * @returns Promise<ScreenshotImage[]> - Array of screenshot objects
 */
export async function loadCaseStudyScreenshots(caseStudyId: string): Promise<ScreenshotImage[]> {
  try {
    // Try to fetch the directory listing via API route
    const response = await fetch(`/api/screenshots/${caseStudyId}`);
    if (response.ok) {
      const data = await response.json();
      return data.images || [];
    }
  } catch {
    // Fallback to manual discovery
  }
  
  const screenshots: ScreenshotImage[] = [];
  const commonExtensions = ['png', 'jpg', 'jpeg', 'webp', 'gif'];
  const commonNames = ['screenshot', 'image', 'photo', 'pic'];
  
  // Try numbered patterns
  for (let i = 1; i <= 10; i++) {
    for (const name of commonNames) {
      for (const ext of commonExtensions) {
        const filename = `${name}-${i}.${ext}`;
        const imagePath = `/case-studies/${caseStudyId}/${filename}`;
        try {
          const response = await fetch(imagePath, { method: 'HEAD' });
          if (response.ok) {
            screenshots.push({
              filename,
              caption: `${name.charAt(0).toUpperCase() + name.slice(1)} ${i}`,
              description: `${name} ${i} for ${caseStudyId}`
            });
          }
        } catch {
          // Continue checking
        }
      }
    }
  }
  
  return screenshots;
}

/**
 * Loads screenshot data with dynamic image loading
 * @param caseStudyId - The ID of the case study
 * @param password - The password for the screenshots
 * @returns Promise<ScreenshotData> - Screenshot data object
 */
export async function loadScreenshotData(caseStudyId: string, password: string): Promise<ScreenshotData> {
  const images = await loadCaseStudyScreenshots(caseStudyId);
  
  return {
    password,
    images
  };
}