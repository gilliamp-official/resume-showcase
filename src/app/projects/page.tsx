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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Project Portfolio</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            A showcase of significant projects that demonstrate my expertise in product management,
            AI integration, and creating innovative solutions that drive business value.
          </p>
        </div>
      </section>

      {/* Key Metrics & Impact */}
      <section className="py-12 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 border border-blue-100 rounded-lg shadow-sm bg-gradient-to-br from-blue-50 to-white">
              <div className="text-4xl font-bold text-blue-600 mb-2">{projectsData.projects.length}+</div>
              <div className="text-gray-600">Major Projects</div>
            </div>
            <div className="p-6 border border-green-100 rounded-lg shadow-sm bg-gradient-to-br from-green-50 to-white">
              <div className="text-4xl font-bold text-green-600 mb-2">$1M+</div>
              <div className="text-gray-600">Revenue Generated</div>
            </div>
            <div className="p-6 border border-purple-100 rounded-lg shadow-sm bg-gradient-to-br from-purple-50 to-white">
              <div className="text-4xl font-bold text-purple-600 mb-2">30%</div>
              <div className="text-gray-600">Avg. Efficiency Gain</div>
            </div>
            <div className="p-6 border border-amber-100 rounded-lg shadow-sm bg-gradient-to-br from-amber-50 to-white">
              <div className="text-4xl font-bold text-amber-600 mb-2">4.5/5</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Philosophy */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">My Approach to Projects</h2>
              <p className="text-gray-700 mb-4">
                I approach each project with a focus on delivering measurable business value while creating 
                exceptional user experiences. My methodology combines deep customer discovery, data-driven 
                decision making, and cross-functional collaboration.
              </p>
              <p className="text-gray-700">
                The projects showcased here represent significant milestones across my career, including 
                AI-powered platforms, innovative API strategies, and business-critical integrations that 
                transformed operations and generated substantial revenue.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-white rounded-lg shadow-md border-l-4 border-blue-600">
                <h3 className="font-semibold text-gray-800 mb-2">Customer-Centered</h3>
                <p className="text-gray-600 text-sm">Products built on deep customer insights and validated through continuous feedback.</p>
              </div>
              
              <div className="p-5 bg-white rounded-lg shadow-md border-l-4 border-green-600">
                <h3 className="font-semibold text-gray-800 mb-2">Data-Driven</h3>
                <p className="text-gray-600 text-sm">Decisions guided by metrics and analytics to ensure meaningful impact.</p>
              </div>
              
              <div className="p-5 bg-white rounded-lg shadow-md border-l-4 border-purple-600">
                <h3 className="font-semibold text-gray-800 mb-2">Collaboration</h3>
                <p className="text-gray-600 text-sm">Cross-functional alignment to bring diverse perspectives to problem-solving.</p>
              </div>
              
              <div className="p-5 bg-white rounded-lg shadow-md border-l-4 border-amber-600">
                <h3 className="font-semibold text-gray-800 mb-2">Innovation</h3>
                <p className="text-gray-600 text-sm">Leveraging emerging technology to create differentiated solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-12 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">Project Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-b from-blue-50 to-white p-6 rounded-lg shadow-md border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">AI & Automation</h3>
              <p className="text-gray-600 mb-4">
                Projects that leverage artificial intelligence and machine learning to automate processes, 
                enhance decision-making, and create intelligent user experiences.
              </p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• AI-powered workflows</li>
                <li>• Predictive analytics systems</li>
                <li>• Intelligent automation frameworks</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-b from-green-50 to-white p-6 rounded-lg shadow-md border border-green-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">API & Integration</h3>
              <p className="text-gray-600 mb-4">
                Projects focused on building scalable API platforms, third-party integrations, and 
                ecosystem expansion strategies that extend product capabilities.
              </p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• OpenAPI platforms</li>
                <li>• Payment integrations</li>
                <li>• Partner ecosystem development</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-b from-purple-50 to-white p-6 rounded-lg shadow-md border border-purple-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Business Intelligence</h3>
              <p className="text-gray-600 mb-4">
                Projects that transform data into actionable insights through analytics platforms, 
                reporting systems, and visualization tools for better decision-making.
              </p>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Embedded analytics</li>
                <li>• Data visualization dashboards</li>
                <li>• Real-time operational metrics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-16">Featured Projects</h2>
          <ProjectShowcase projects={projectsData.projects} />
        </div>
      </section>

      {/* Project Methodology */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">My Project Methodology</h2>
          
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
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Discovery & Research</h3>
                    <p className="text-gray-600">
                      I begin every project with comprehensive customer research and market analysis to identify unmet needs and 
                      opportunities. This involves stakeholder interviews, competitive assessments, and data analysis to establish 
                      clear project objectives.
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
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Strategic Planning</h3>
                    <p className="text-gray-600">
                      With insights in hand, I develop a comprehensive product strategy and roadmap, identifying key features, 
                      technical requirements, and success metrics. This phase includes cross-functional alignment and resource planning 
                      to ensure smooth execution.
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
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Agile Implementation</h3>
                    <p className="text-gray-600">
                      I lead development using agile methodologies, facilitating iterative progress and continuous feedback. 
                      This approach ensures quality, maintains project momentum, and allows for adaptation as we learn more 
                      through the development process.
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
                    <h3 className="text-xl font-bold text-gray-800 mb-3">User-Centered Design</h3>
                    <p className="text-gray-600">
                      Throughout the process, I maintain a focus on user experience, conducting usability testing and gathering 
                      feedback to ensure the solution is intuitive and meets user needs. This focus on the user drives adoption 
                      and satisfaction.
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
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Launch & Iteration</h3>
                    <p className="text-gray-600">
                      After launch, I closely monitor performance metrics and user feedback to identify opportunities for improvement. 
                      This ongoing refinement ensures the product continues to deliver value and meet evolving user needs over time.
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
          <h2 className="text-3xl font-bold mb-6">Have a Project in Mind?</h2>
          <p className="text-blue-100 mb-10 max-w-xl mx-auto">
            I&apos;m always interested in discussing new opportunities and challenges. Let&apos;s explore how 
            my expertise can help bring your ideas to life.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contact" 
              className="px-6 py-3 bg-white text-blue-700 hover:bg-blue-50 rounded-lg transition-colors flex items-center shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Start a Conversation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}