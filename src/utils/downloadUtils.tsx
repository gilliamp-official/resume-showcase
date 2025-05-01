// This function handles downloading the resume PDF
export const downloadResume = () => {
    // Create a link element
    const link = document.createElement('a');
    
    // Set the href to the path of your resume PDF in the public directory
    // Assuming your resume is in the public folder
    link.href = '/resume.pdf';
    
    // Set download attribute to suggest filename when downloading
    link.download = 'resume.pdf';
    
    // Append link to the body
    document.body.appendChild(link);
    
    // Trigger the download
    link.click();
    
    // Clean up - remove the link from the DOM
    document.body.removeChild(link);
  };