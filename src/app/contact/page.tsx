'use client'

import React from 'react';
import { Mail, Linkedin, FileText } from 'lucide-react';
import Link from 'next/link';
import profileData from '@/data/profile.json';

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-20 px-6 bg-blue-700 text-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            I&apos;d love to hear from you about opportunities, projects, or just to connect.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-10 h-10 text-blue-600" />
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Email Me</h2>
              <p className="text-gray-600 mb-6">
                The best way to reach me is through email. I typically respond within 24-48 hours.
              </p>
              
              <a 
                href="mailto:gilliamp2@protonmail.com" 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center mx-auto"
              >
                <Mail className="w-5 h-5 mr-2" />
                gilliamp2@protonmail.com
              </a>
            </div>
            
            <div className="border-t border-gray-200 pt-12">
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Other Ways to Connect</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <Linkedin className="w-8 h-8 text-blue-600 mb-4" />
                  <h4 className="font-semibold text-gray-800 mb-2">LinkedIn</h4>
                  <p className="text-gray-600 mb-4 text-sm">
                    Connect with me professionally or follow my updates on LinkedIn.
                  </p>
                  {profileData.social.map((social, index) => {
                    if (social.network === 'LinkedIn') {
                      return (
                        <a 
                          key={index}
                          href={social.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline text-sm"
                        >
                          Visit LinkedIn Profile →
                        </a>
                      );
                    }
                    return null;
                  })}
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <FileText className="w-8 h-8 text-blue-600 mb-4" />
                  <h4 className="font-semibold text-gray-800 mb-2">Resume</h4>
                  <p className="text-gray-600 mb-4 text-sm">
                    Download my resume for a detailed overview of my experience.
                  </p>
                  <a 
                    href="/resume.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Download Resume →
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto mt-12 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Looking for Something Else?</h3>
            <p className="text-gray-600 mb-6">
              Explore my website to learn more about my experience, skills, and projects.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/experience"
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Experience
              </Link>
              <Link 
                href="/skills"
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Skills
              </Link>
              <Link 
                href="/projects"
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Projects
              </Link>
              <Link 
                href="/about"
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                About Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}