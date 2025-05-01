'use client'

import React from 'react';
import ProjectShowcase from '@/components/ProjectShowcase';
import projectsData from '@/data/projects.json';

export default function ProjectsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative py-20 px-6 bg-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Outcomes-Driven Solutions</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            I build software that creates measurable impact by aligning business objectives with customer needs,
            focusing on the outcomes that truly matter rather than just delivering features.
          </p>
        </div>
      </section>

      {/* Value Metrics & Business Impact */}
      <section className="py-12 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 border border-blue-100 rounded-lg shadow-sm bg-gradient-to-br from-blue-50 to-white">
              <div className="text-4xl font-bold text-blue-600 mb-2">{projectsData.projects.length}+</div>
              <div className="text-gray-600">Value-Driven Solutions</div>
            </div>
            <div className="p-6 border border-green-100 rounded-lg shadow-sm bg-gradient-to-br from-green-50 to-white">
              <div className="text-4xl font-bold text-green-600 mb-2">$1M+</div>
              <div className="text-gray-600">Customer Value Created</div>
            </div>
            <div className="p-6 border border-purple-100 rounded-lg shadow-sm bg-gradient-to-br from-purple-50 to-white">
              <div className="text-4xl font-bold text-purple-600 mb-2">30%</div>
              <div className="text-gray-600">Business Growth Enabled</div>
            </div>
            <div className="p-6 border border-amber-100 rounded-lg shadow-sm bg-gradient-to-br from-amber-50 to-white">
              <div className="text-4xl font-bold text-amber-600 mb-2">4.5/5</div>
              <div className="text-gray-600">Customer Success Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes-Based Philosophy */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Outcomes Over Outputs</h2>
              <p className="text-gray-700 mb-4">
                I believe that successful software isn&apos;t about delivering features—it&apos;s about creating 
                meaningful outcomes that transform how businesses operate and how customers achieve their goals. 
                My approach focuses on the impact of technology, not just its implementation.
              </p>
              <p className="text-gray-700">
                Each project begins by identifying the core business objectives and customer needs, 
                then carefully aligning them to create solutions that deliver genuine value for all 
                stakeholders. This outcomes-driven methodology ensures that every line of code contributes 
                to measurable business success and customer satisfaction.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-white rounded-lg shadow-md border-l-4 border-blue-600">
                <h3 className="font-semibold text-gray-800 mb-2">Value Creation</h3>
                <p className="text-gray-600 text-sm">Focusing on business outcomes that generate measurable ROI and strategic advantage.</p>
              </div>
              
              <div className="p-5 bg-white rounded-lg shadow-md border-l-4 border-green-600">
                <h3 className="font-semibold text-gray-800 mb-2">Customer Success</h3>
                <p className="text-gray-600 text-sm">Prioritizing solutions that help customers achieve their goals more effectively.</p>
              </div>
              
              <div className="p-5 bg-white rounded-lg shadow-md border-l-4 border-purple-600">
                <h3 className="font-semibold text-gray-800 mb-2">Strategic Alignment</h3>
                <p className="text-gray-600 text-sm">Connecting business objectives with customer needs to create aligned incentives.</p>
              </div>
              
              <div className="p-5 bg-white rounded-lg shadow-md border-l-4 border-amber-600">
                <h3 className="font-semibold text-gray-800 mb-2">Adaptability</h3>
                <p className="text-gray-600 text-sm">Evolving solutions based on real-world impact rather than rigid feature roadmaps.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value-Driven Categories */}
      <section className="py-12 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">Value Creation Areas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-b from-blue-50 to-white p-6 rounded-lg shadow-md border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Operational Excellence</h3>
              <p className="text-gray-600 mb-4">
                Solutions that transform business operations by eliminating inefficiencies, enhancing productivity, 
                and creating measurable improvements in organizational performance.
              </p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• 40% average process efficiency gains</li>
                <li>• 60% reduction in manual workflows</li>
                <li>• 25% improvement in resource utilization</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-b from-green-50 to-white p-6 rounded-lg shadow-md border border-green-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Customer Experience</h3>
              <p className="text-gray-600 mb-4">
                Initiatives that enhance how customers interact with products and services, creating 
                loyalty, advocacy, and sustainable growth through exceptional experiences.
              </p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• 35% increase in user engagement</li>
                <li>• 45% higher customer retention</li>
                <li>• 3x improvement in satisfaction scores</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-b from-purple-50 to-white p-6 rounded-lg shadow-md border border-purple-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Strategic Innovation</h3>
              <p className="text-gray-600 mb-4">
                Forward-looking solutions that create new market opportunities, establish competitive 
                advantages, and position organizations for long-term growth and relevance.
              </p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• 5 new revenue streams created</li>
                <li>• 20% market share expansion</li>
                <li>• $500K+ in new annual revenue</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-16">Impact Showcase</h2>
          <ProjectShowcase projects={projectsData.projects} />
        </div>
      </section>

      {/* Outcome-Based Methodology */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">My Outcome-Based Approach</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform md:-translate-x-1/2"></div>
            
            <div className="space-y-12">
              {/* Phase 1 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex items-center justify-center md:w-1/2 md:justify-end md:pr-8 mb-4 md:mb-0">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center z-10">1</div>
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Business Objective Mapping</h3>
                    <p className="text-gray-600">
                      I start by identifying the key business metrics and objectives that matter most to stakeholders.
                      This includes establishing clear success criteria, understanding financial targets, and defining
                      strategic priorities that will guide the entire project.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Phase 2 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="order-1 md:order-2 flex items-center justify-center md:w-1/2 md:justify-start md:pl-8 mb-4 md:mb-0">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center z-10">2</div>
                </div>
                <div className="order-2 md:order-1 md:w-1/2 md:pr-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Customer Outcome Research</h3>
                    <p className="text-gray-600">
                      I conduct deep research into customer needs, goals, and pain points to understand what success
                      looks like from their perspective. This involves user interviews, journey mapping, and behavioral
                      analysis to identify the outcomes that will drive genuine customer value.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Phase 3 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex items-center justify-center md:w-1/2 md:justify-end md:pr-8 mb-4 md:mb-0">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center z-10">3</div>
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Strategic Alignment</h3>
                    <p className="text-gray-600">
                      I identify where business objectives and customer outcomes naturally align, then design solutions
                      that serve both simultaneously. This creates a virtuous cycle where helping customers achieve their
                      goals directly contributes to business success and stakeholder value.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Phase 4 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="order-1 md:order-2 flex items-center justify-center md:w-1/2 md:justify-start md:pl-8 mb-4 md:mb-0">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center z-10">4</div>
                </div>
                <div className="order-2 md:order-1 md:w-1/2 md:pr-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Adaptive Implementation</h3>
                    <p className="text-gray-600">
                      Rather than rigidly following a predetermined feature list, I employ an adaptive approach that
                      continuously evaluates our progress against the desired outcomes. This means prioritizing initiatives
                      based on their impact, not just their complexity or scope.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Phase 5 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex items-center justify-center md:w-1/2 md:justify-end md:pr-8 mb-4 md:mb-0">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center z-10">5</div>
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Value Measurement & Iteration</h3>
                    <p className="text-gray-600">
                      I establish clear metrics to measure the actual outcomes being achieved, not just features delivered.
                      This data-driven approach enables us to continuously refine our strategies, amplify what&apos;s working, and
                      pivot from what isn&apos;t—maximizing the overall value created.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-blue-700 text-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Create Meaningful Outcomes?</h2>
          <p className="text-blue-100 mb-10 max-w-xl mx-auto">
                          Let&apos;s discuss how we can align your business objectives with customer success to create 
            software that delivers genuine value and transforms how your organization operates.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contact" 
              className="px-6 py-3 bg-white text-blue-700 hover:bg-blue-50 rounded-lg transition-colors flex items-center shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Start a Value Conversation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}