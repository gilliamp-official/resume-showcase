'use client'

import React from 'react';
import { FileText, Target, TrendingUp, Building, Award } from 'lucide-react';
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 relative pb-4 inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:w-full after:h-1 after:bg-blue-300">
            Strategic Leadership Experience
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            6+ years of strategic product leadership focused on market opportunity identification, platform transformation, and competitive advantage creation across diverse industries.
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

      {/* Strategic Impact Stats */}
      <section className="py-12 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 border rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">$100M+</div>
              <div className="text-gray-600">Market Opportunities Identified</div>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">$5M+</div>
              <div className="text-gray-600">Platform Transformation Value</div>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">3</div>
              <div className="text-gray-600">Market Categories Created</div>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">6+</div>
              <div className="text-gray-600">Years Strategic Leadership</div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Leadership Philosophy */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 relative pb-3 inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:w-full after:h-0.5 after:bg-blue-600">
            Strategic Leadership Philosophy
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Market Opportunity Identification</h3>
                <p className="text-gray-600 text-sm">Systematic analysis identifying untapped market opportunities worth millions</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Platform Economics Thinking</h3>
                <p className="text-gray-600 text-sm">Understanding network effects, ecosystem monetization, and competitive moats</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Competitive Advantage Creation</h3>
                <p className="text-gray-600 text-sm">Building sustainable strategic advantages through market category creation</p>
              </div>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-6 bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-700 italic mb-4">
                &ldquo;I don&apos;t just execute product requirements—I identify market transformation opportunities. When my boss said &apos;figure out&apos; van line integration, I discovered a $100M+ market disruption opportunity through platform economics analysis. This is the difference between tactical execution and strategic leadership.&rdquo;
              </p>
              <p className="text-gray-700">
                My approach layers strategic thinking above tactical execution, ensuring every initiative drives competitive advantage while maintaining systematic customer discovery that reveals opportunities competitors systematically miss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600">
            Strategic Leadership Timeline
          </h2>
          <CareerTimeline experience={experienceData.experience} />
        </div>
      </section>

      {/* Strategic Credentials */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600">
            Strategic Education & Credentials
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">MBA - Strategic Business Management</h3>
              <p className="text-blue-600 mb-2">Quantic School of Business and Technology</p>
              <p className="text-gray-600 mb-4">November 2022 - December 2023</p>
              <p className="text-gray-700">
                Advanced strategic business education focusing on platform economics, competitive advantage development, and market category creation for technology leaders.
              </p>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800 font-medium">Key Focus Areas:</p>
                <p className="text-sm text-blue-700">Platform Strategy, Market Economics, Competitive Intelligence, Strategic Investment Planning</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">B.S. Information Systems & Business Administration</h3>
              <p className="text-blue-600 mb-2">University of Colorado, Colorado Springs</p>
              <p className="text-gray-600 mb-4">August 2016 - December 2018</p>
              <div className="text-gray-700 mb-4">
                <p className="mb-2"><strong>Summa Cum Laude, 4.0 GPA</strong></p>
                <p className="mb-2">Dean&apos;s Top Student Award</p>
                <p>International Strategic Competition Excellence</p>
              </div>
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800 font-medium">Elite Academic Recognition:</p>
                <p className="text-sm text-green-700">Harvard, Stanford, MIT scholarship offers - Strategic business analysis and market positioning expertise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Leadership & Recognition */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600">
            Strategic Leadership & Recognition
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <Building className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Strategic Leadership Roles</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-700">Founded First Product Department (2019)</div>
                    <div className="text-sm text-gray-600">Built strategic product capabilities from ground up, establishing market opportunity identification frameworks</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-700">HOA President - Strategic Community Leadership</div>
                    <div className="text-sm text-gray-600">5+ years leading community strategic initiatives and operational excellence</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-700">Strategic Business Competition Leadership</div>
                    <div className="text-sm text-gray-600">Texas DECA strategic competition oversight and strategic mentorship development</div>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Strategic Excellence Recognition</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-700">International Strategic Competition Excellence (2018)</div>
                    <div className="text-sm text-gray-600">International finalist recognition for strategic business analysis and competitive market positioning</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-700">International Entrepreneurship Strategy Recognition (2014)</div>
                    <div className="text-sm text-gray-600">International-level recognition for strategic market innovation and competitive business development</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-700">Ronald Reagan Strategic Leadership Award (2014)</div>
                    <div className="text-sm text-gray-600">National recognition for exceptional strategic leadership capabilities and market impact development</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-700">Executive Leadership Development Certification</div>
                    <div className="text-sm text-gray-600">LEAP (Leadership Acceleration Program) - Advanced strategic leadership and cross-functional team management</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Strategic Product Leadership?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            6+ years of proven strategic leadership experience identifying $100M+ market opportunities and building sustainable competitive advantages. Let&apos;s discuss how this strategic expertise can drive transformation for your organization.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={downloadResume}
              className="px-8 py-3 bg-white text-blue-700 hover:bg-blue-50 rounded-lg transition-colors flex items-center justify-center shadow-md"
            >
              <FileText className="w-5 h-5 mr-2" /> Download Strategic Resume
            </button>
            <a 
              href="/contact"
              className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-blue-700 rounded-lg transition-colors flex items-center justify-center"
            >
              Discuss Strategic Opportunities
            </a>
          </div>
        </div>
      </section>
    </>
  );
}