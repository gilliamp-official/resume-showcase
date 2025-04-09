'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, FileText, Mail } from 'lucide-react';
import profileData from '@/data/profile.json';

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-20 px-6 bg-blue-700 text-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Learn more about my background, approach to product management, and professional journey.
          </p>
        </div>
      </section>

      {/* Profile Overview */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Left Column - Profile Image & Contact */}
            <div className="md:sticky md:top-24">
              <div className="relative w-full aspect-square max-w-sm mx-auto rounded-lg overflow-hidden shadow-xl mb-8">
                <Image 
                  src="/me.jpg" 
                  alt={profileData.basics.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                  priority
                />
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Details</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${profileData.basics.email}`} className="hover:text-blue-600">
                      {profileData.basics.email}
                    </a>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{profileData.basics.location}</span>
                  </li>
                  {profileData.social.map((social, index) => {
                    if (social.network === 'LinkedIn') {
                      return (
                        <li key={index} className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                            <rect width="4" height="12" x="2" y="9" strokeWidth={2} />
                            <circle cx="4" cy="4" r="2" strokeWidth={2} />
                          </svg>
                          <a href={social.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                            LinkedIn Profile
                          </a>
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
                
                <div className="mt-6 flex gap-3">
                  <a 
                    href="/resume.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                  >
                    <FileText className="w-4 h-4 mr-2" /> Resume
                  </a>
                  <Link 
                    href="/contact"
                    className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors flex items-center"
                  >
                    <Mail className="w-4 h-4 mr-2" /> Contact
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Right Column - About Content */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Professional Background</h2>
              
              <div className="prose max-w-none text-gray-700 mb-10">
                <p className="mb-4">
                  I am a results-oriented product leader with extensive experience driving innovation in B2B SaaS environments. 
                  With over 7 years in the industry, I&apos;ve built a reputation for translating complex customer needs into 
                  scalable, high-value solutions through strategic product development and cross-functional leadership.
                </p>
                <p className="mb-4">
                  Currently working as a Senior Product Manager at SmartMoving, I lead the development of AI-powered 
                  solutions that improve operational efficiency for moving companies. My work has directly contributed 
                  to significant revenue growth through the successful delivery of integrated payment solutions, API 
                  platforms, and embedded analytics.
                </p>
                <p className="mb-4">
                  My approach to product management combines deep technical expertise with strong business acumen, allowing 
                  me to bridge the gap between customer needs, technical feasibility, and business objectives. I excel at 
                  building and leading high-performing product teams that consistently deliver exceptional results.
                </p>
                <p>
                  Prior to my current role, I held positions at Zebra Technologies, Koddi, First Student, and EZLynx, 
                  where I consistently demonstrated my ability to drive product innovation and deliver measurable business outcomes.
                </p>
              </div>
              
              {/* Core Values */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Core Values & Approach</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Customer-Centered Innovation</h4>
                  <p className="text-gray-700">
                    I believe that truly successful products start with a deep understanding of customer needs. I conduct 
                    regular customer interviews and feedback sessions to ensure products solve real problems effectively.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Data-Driven Decision Making</h4>
                  <p className="text-gray-700">
                    I use metrics and analytics to guide product decisions, creating feedback loops that inform roadmap 
                    priorities and validate that we&apos;re delivering real value to users and the business.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Cross-Functional Collaboration</h4>
                  <p className="text-gray-700">
                    Success comes from effective teamwork. I excel at bringing together diverse perspectives from engineering, 
                    design, marketing, and sales to create cohesive product experiences.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Technical Excellence</h4>
                  <p className="text-gray-700">
                    With a background in information technology and experience implementing AI solutions, I ensure that 
                    products are built on solid technical foundations that can scale and evolve.
                  </p>
                </div>
              </div>
              
              {/* Professional Highlights */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Professional Highlights</h3>
              <ul className="space-y-3 mb-10">
                {profileData.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
                    </div>
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
              
              {/* Personal Interests */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Beyond Work</h3>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-10">
                <p className="text-gray-700 mb-4">
                  Outside of my professional life, I&apos;m passionate about technology, continuous learning, and community involvement. 
                  I currently serve as the HighPoint HOA President and volunteer for DECA events to support young entrepreneurs.
                </p>
                <p className="text-gray-700">
                  I&apos;m an avid reader on topics ranging from product strategy to emerging technologies, and I enjoy mentoring 
                  junior product professionals. These activities not only provide personal fulfillment but also enrich my 
                  professional perspective.
                </p>
              </div>
              
              {/* Call to Action */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-blue-600 text-white p-6 rounded-lg">
                <div>
                  <h3 className="text-xl font-bold mb-2">Interested in Working Together?</h3>
                  <p className="text-blue-100">Let&apos;s discuss how my experience can add value to your team.</p>
                </div>
                <Link 
                  href="/contact"
                  className="px-6 py-3 bg-white text-blue-700 rounded-lg hover:bg-blue-50 transition-colors flex items-center shadow-md whitespace-nowrap"
                >
                  Get In Touch <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}