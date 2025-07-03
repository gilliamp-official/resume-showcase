'use client'
import React, { ReactNode } from 'react';
import Navbar from './NavBar';
import profileData from '@/data/profile.json';
import { downloadResume } from '@/utils/downloadUtils';
import { Linkedin, Mail, FileText } from 'lucide-react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  // Custom GitHub icon since Lucide's GitHub icon is deprecated
  const GitHubIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      
      <main className="pt-16">
        {children}
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold">{profileData.basics.name}</h3>
              <p className="text-gray-400">{profileData.basics.title}</p>
            </div>
            
            <div className="flex space-x-6">
              {profileData.social.map((social, index) => {
                if (social.network === 'LinkedIn') {
                  return (
                    <a 
                      key={index}
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  );
                } else if (social.network === 'GitHub') {
                  return (
                    <a 
                      key={index}
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <GitHubIcon className="w-5 h-5" />
                    </a>
                  );
                } else {
                  return (
                    <a 
                      key={index}
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  );
                }
              })}
              {/* Resume Download Button in Footer */}
              <button 
                onClick={downloadResume}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Download Resume"
                title="Download Resume"
              >
                <FileText className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className=" border-gray-800 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} {profileData.basics.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}