'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Linkedin, FileText, Mail } from 'lucide-react';
import profileData from '@/data/profile.json';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom GitHub icon since Lucide's GitHub icon might be missing
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

  // Navigation links
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/experience', label: 'Experience' },
    { href: '/skills', label: 'Skills' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  // The key fix: Add a base text color that's visible regardless of scroll position
  const getTextColor = (isActive: boolean) => {
    if (isActive) return 'text-blue-600 font-medium';
    if (scrolled || pathname !== '/') return 'text-gray-700 hover:text-blue-600';
    return 'text-gray-100 hover:text-white'; // Lighter text on hero section that's still visible
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || pathname !== '/' ? 'bg-white shadow-md py-2' : 'bg-blue-600/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
            {profileData.basics.name.split(' ').map(name => name[0]).join('')}
          </div>
          <span className={`font-semibold ${scrolled || pathname !== '/' ? 'text-gray-800' : 'text-white'}`}>
            {profileData.basics.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`transition-colors ${getTextColor(pathname === link.href)}`}
            >
              {link.label}
            </Link>
          ))}
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
                  className={`transition-colors ${scrolled || pathname !== '/' ? 'text-gray-700 hover:text-blue-600' : 'text-gray-100 hover:text-white'}`}
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
                  className={`transition-colors ${scrolled || pathname !== '/' ? 'text-gray-700 hover:text-blue-600' : 'text-gray-100 hover:text-white'}`}
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
            className={`transition-colors ${scrolled || pathname !== '/' ? 'text-gray-700 hover:text-blue-600' : 'text-gray-100 hover:text-white'}`}
            aria-label="Email Contact"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a 
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors ${scrolled || pathname !== '/' ? 'text-gray-700 hover:text-blue-600' : 'text-gray-100 hover:text-white'}`}
            aria-label="Resume Download"
          >
            <FileText className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden ${scrolled || pathname !== '/' ? 'text-gray-700 hover:text-blue-600' : 'text-gray-100 hover:text-white'}`}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-slideDown">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={`${pathname === link.href ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
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
                      className="text-gray-700 hover:text-blue-600"
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
                className="text-gray-700 hover:text-blue-600"
                aria-label="Email Contact"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600"
                aria-label="Resume Download"
              >
                <FileText className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}