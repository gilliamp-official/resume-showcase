'use client'
import React, { useState, useEffect, ReactNode } from 'react';
import Link from 'next/link';
import { Menu, X, Linkedin, Mail, FileText } from 'lucide-react';
import profileData from '@/data/profile.json';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <html lang="en">
      <head>
        <title>{profileData.basics.name} - {profileData.basics.title}</title>
        <meta name="description" content={profileData.basics.summary} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Header */}
        <header 
          className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${
            scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-6'
          }`}
        >
          <div className="container mx-auto px-6 flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
                {profileData.basics.name.split(' ').map(name => name[0]).join('')}
              </div>
              <span className={`font-semibold ${scrolled ? 'text-gray-800' : 'text-gray-800'}`}>
                {profileData.basics.name}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/#about" className={`transition-colors ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
                About
              </Link>
              <Link href="/#experience" className={`transition-colors ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
                Experience
              </Link>
              <Link href="/#skills" className={`transition-colors ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
                Skills
              </Link>
              <Link href="/#projects" className={`transition-colors ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
                Projects
              </Link>
              <Link href="/#contact" className={`transition-colors ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
                Contact
              </Link>
            </nav>

            {/* Social links - desktop */}
            <div className="hidden md:flex space-x-4">
              {profileData.social.map((social, index) => {
                if (social.network === 'LinkedIn') {
                  return (
                    <a 
                      key={index}
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`transition-colors ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
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
                      className={`transition-colors ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                    >
                      <GitHubIcon className="w-5 h-5" />
                    </a>
                  );
                } else if (social.network === 'Twitter') {
                  return (
                    <a 
                      key={index}
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`transition-colors ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                    >
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
                        className="w-5 h-5"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                    </a>
                  );
                } else {
                  return (
                    <a 
                      key={index}
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`transition-colors ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  );
                }
              })}
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="container mx-auto px-6 py-4">
                <nav className="flex flex-col space-y-4">
                  <Link href="/#about" className="text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>
                    About
                  </Link>
                  <Link href="/#experience" className="text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>
                    Experience
                  </Link>
                  <Link href="/#skills" className="text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>
                    Skills
                  </Link>
                  <Link href="/#projects" className="text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>
                    Projects
                  </Link>
                  <Link href="/#contact" className="text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>
                    Contact
                  </Link>
                </nav>

                <div className="flex space-x-4 mt-6">
                  {profileData.social.map((social, index) => {
                    if (social.network === 'LinkedIn') {
                      return (
                        <a 
                          key={index}
                          href={social.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-gray-700 hover:text-blue-600"
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
                          className="text-gray-700 hover:text-blue-600"
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
                          className="text-gray-700 hover:text-blue-600"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          )}
        </header>

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
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FileText className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
              <p>&copy; {new Date().getFullYear()} {profileData.basics.name}. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}