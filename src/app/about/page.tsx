'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, FileText, Mail } from 'lucide-react';
import profileData from '@/data/profile.json';
import { downloadResume } from '@/utils/downloadUtils';

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-20 px-6 bg-blue-700 text-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Senior Product Manager with 8+ years delivering $5M+ in product revenue through AI-powered B2B SaaS solutions.
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
                  <button
                    type="button"
                    onClick={downloadResume}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                  >
                    <FileText className="w-4 h-4 mr-2" /> Resume
                  </button>
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
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Revenue-Driving Product Leader</h2>
              
              <div className="prose max-w-none text-gray-700 mb-10">
                <p className="mb-4">
                  I&apos;m a Senior Product Manager with 9+ years delivering $5M+ in documented product revenue through 
                  AI-powered B2B SaaS solutions. I own products end-to-end from technical architecture to business strategy, 
                  translating customer needs into scalable, profitable solutions that drive measurable business outcomes.
                </p>
                <p className="mb-4">
                  At SmartMoving, I&apos;ve delivered $2.35M in revenue through strategic product development including a $2M ACH 
                  payments solution in 8 months and a $350K ARR OpenAPI platform. I conduct 20+ monthly customer interviews, 
                  creating data-driven roadmaps that consistently drive adoption and customer satisfaction.
                </p>
                <p className="mb-4">
                  My unique strength lies in bridging complex technical solutions with clear business value. Whether implementing 
                  AI-driven inventory planning systems that improve accuracy by 45% or leading cross-functional teams of 40+ 
                  contractors, I consistently deliver products that solve real problems and generate sustainable revenue growth.
                </p>
                <p>
                  Prior experience at Zebra Technologies, First Student, and other innovative companies has given me deep expertise 
                  in AI integration, API monetization, and scaling products across diverse industries including retail, transportation, 
                  and insurance.
                </p>
              </div>
              
              {/* Core Values */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Strategic Approach</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Revenue-First Product Strategy</h4>
                  <p className="text-gray-700">
                    I develop product roadmaps that directly drive business growth. Every feature is evaluated for its potential 
                    to increase adoption, retention, or revenue, ensuring products deliver measurable business value.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">AI-Powered Innovation</h4>
                  <p className="text-gray-700">
                    I specialize in implementing AI solutions that solve complex business problems, from inventory planning 
                    to routing optimization, consistently delivering 30-45% performance improvements through intelligent automation.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Customer-Centric Development</h4>
                  <p className="text-gray-700">
                    Through 20+ monthly customer interviews and deep analytical feedback loops, I ensure products address real 
                    customer pain points while maintaining 4.5/5 satisfaction ratings across delivered solutions.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Technical-to-Business Leadership</h4>
                  <p className="text-gray-700">
                    I bridge technical complexity with business strategy, leading cross-functional teams from API architecture 
                    to go-to-market execution, ensuring seamless delivery of complex technical products.
                  </p>
                </div>
              </div>
              
              {/* Professional Highlights */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Achievements</h3>
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
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Leadership & Community</h3>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-10">
                <p className="text-gray-700 mb-4">
                  Beyond my professional achievements, I&apos;m committed to developing future product leaders and supporting my community. 
                  I apply product management principles to drive organizational success across various leadership roles and initiatives.
                </p>
                <p className="text-gray-700">
                  I actively mentor junior product professionals and volunteer with Texas DECA to support young entrepreneurs, 
                  drawing from my experience as an International DECA winner and Colorado State Champion. This leadership experience 
                  reinforces my ability to guide teams and drive organizational success.
                </p>
              </div>
              
              {/* Call to Action */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-blue-600 text-white p-6 rounded-lg">
                <div>
                  <h3 className="text-xl font-bold mb-2">Ready to Drive Revenue Together?</h3>
                  <p className="text-blue-100">Let&apos;s discuss how my proven track record can accelerate your product growth.</p>
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