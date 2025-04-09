import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/NavBar';
import profileData from '@/data/profile.json';
import { Linkedin, FileText, Mail } from 'lucide-react';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `${profileData.basics.name} - ${profileData.basics.title}`,
  description: profileData.basics.summary,
};

// Custom GitHub icon component
const GitHubIcon = ({ className }: { className?: string }) => (
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-gray-50 to-blue-50`}>
        <Navbar />
        
        <main className="pt-20">
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
                        aria-label="LinkedIn Profile"
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
                        aria-label="GitHub Profile"
                      >
                        <GitHubIcon className="w-5 h-5" />
                      </a>
                    );
                  } 
                  return null;
                })}
                <a 
                  href={`mailto:${profileData.basics.email}`}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Email Me"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a 
                  href="/resume.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Download Resume"
                >
                  <FileText className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
              <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <Link href="/about" className="hover:text-white transition-colors">About</Link>
                <Link href="/experience" className="hover:text-white transition-colors">Experience</Link>
                <Link href="/skills" className="hover:text-white transition-colors">Skills</Link>
                <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              </div>
              <p className="mt-4">&copy; {new Date().getFullYear()} {profileData.basics.name}. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}