'use client'

import React from 'react';
import { FileText } from 'lucide-react';
import CareerTimeline from '@/components/CareerTimeline';
import experienceData from '@/data/experience.json';

// Import the download function
import { downloadResume } from '@/utils/downloadUtils';

export default function ExperiencePage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-20 px-6 bg-blue-700 text-white">
        <div className="container mx-auto max-w-5xl text-center">
          {/* Updated header styling for dark background */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 relative pb-4 inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:w-full after:h-1 after:bg-blue-300">
            Professional Experience
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            My career journey as a product leader, with a focus on B2B SaaS, AI-powered platforms, and customer-driven innovation.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={downloadResume}
              className="px-6 py-3 bg-white text-blue-700 hover:bg-blue-50 rounded-lg transition-colors flex items-center shadow-md"
            >
              <FileText className="w-5 h-5 mr-2" /> Download Resume
            </button>
          </div>
        </div>
      </section>

      {/* Key Career Stats */}
      <section className="py-12 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 border rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">6</div>
              <div className="text-gray-600">Industries Served</div>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">7+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-600">Successful Projects</div>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">$2M+</div>
              <div className="text-gray-600">Revenue Generated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Summary */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          {/* Updated header styling */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6 relative pb-3 inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:w-full after:h-0.5 after:bg-blue-600">
            Career Summary
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              I&apos;ve dedicated my career to leveraging advanced technologies to solve complex business challenges
              in B2B SaaS environments. My approach focuses on translating customer needs into scalable, high-value 
              solutions through strategic product development and cross-functional leadership.
            </p>
            <p className="text-gray-700 mb-4">
              At SmartMoving, I currently lead the development of AI-powered automation workflows using 
              cloud technologies, while implementing RESTful API frameworks and integrated payment solutions 
              that have generated substantial revenue growth.
            </p>
            <p className="text-gray-700">
              Throughout my career at companies like Zebra Technologies, Koddi, and First Student, I&apos;ve 
              consistently delivered products that improve operational efficiency and generate measurable 
              business outcomes, while building and scaling successful product teams.
            </p>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          {/* Updated header styling */}
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600">
            Career Timeline
          </h2>
          <CareerTimeline experience={experienceData.experience} />
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          {/* Updated header styling */}
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600">
            Education
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Master of Business Administration (MBA)</h3>
              <p className="text-blue-600 mb-2">Quantic School of Business and Technology</p>
              <p className="text-gray-600 mb-4">September 2022 - November 2023</p>
              <p className="text-gray-700">
                Advanced business education with focuses on strategic management, finance, and entrepreneurship.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Bachelor of Science - Information Technology</h3>
              <p className="text-blue-600 mb-2">University of Colorado Colorado Springs</p>
              <p className="text-gray-600 mb-4">Graduated December 2018</p>
              <div className="text-gray-700">
                <p className="mb-2">Graduated Summa Cum Laude with a 4.0 GPA</p>
                <p>Dean&apos;s Top Student Award</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Certifications */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          {/* Updated header styling */}
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600">
            Leadership & Certifications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Leadership Roles</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
                  </div>
                  <span className="text-gray-700">HighPoint HOA President</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
                  </div>
                  <span className="text-gray-700">Mentor for Junior Product Professionals</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
                  </div>
                  <span className="text-gray-700">Texas DECA 2025 State CDC Volunteer</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Awards & Certifications</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-gray-700">LEAP (Leadership Acceleration Program) Manager Training</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-gray-700">International DECA Winner Award - Entrepreneurship Series</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-gray-700">Ronald Reagan Leadership Award Honoree </span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-gray-700">International Collegiate DECA Finalist</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}