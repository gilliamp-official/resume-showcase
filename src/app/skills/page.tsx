'use client'

import React from 'react';
import SkillsVisualization from '@/components/SkillsVisualization';
import skillsData from '@/data/skills.json';

export default function SkillsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-20 px-6 bg-blue-700 text-white">
        <div className="container mx-auto max-w-5xl text-center">
          {/* Updated header styling for dark background */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 relative pb-4 inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:w-full after:h-1 after:bg-blue-300">
            Skills & Expertise
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            My technical and business capabilities that enable me to deliver successful products and lead high-performing teams.
          </p>
        </div>
      </section>

      {/* Skills Philosophy */}
      <section className="py-12 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            {/* Updated header styling */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4 relative pb-3 inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:w-full after:h-0.5 after:bg-blue-600">
              My Approach to Skills Development
            </h2>
            <p className="text-gray-700 mb-4">
              I believe in continuous learning and the importance of maintaining a diverse skill set that spans technical knowledge, 
              business acumen, and leadership capabilities. Throughout my career, I&apos;ve intentionally developed expertise in areas that 
              enable me to bridge the gap between complex technical challenges and business objectives.
            </p>
            <p className="text-gray-700">
              My unique combination of product management, data analysis, and AI implementation skills allows me to identify opportunities 
              for innovation and translate them into practical, valuable solutions. I&apos;m passionate about staying current with emerging technologies 
              and methodologies, applying them strategically to create meaningful impact.
            </p>
          </div>
        </div>
      </section>

      {/* Skill Categories Overview */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          {/* Updated header styling */}
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600">
            Skill Categories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillsData.categories.map(category => (
              <div key={category.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                
                <div className="space-y-3">
                  {category.skills.sort((a, b) => b.level - a.level).slice(0, 3).map(skill => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-xs font-medium text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1">
                        <div 
                          className="bg-blue-600 h-1 rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                  <div className="text-sm text-gray-500 mt-4">
                    {category.skills.length > 3 && `+ ${category.skills.length - 3} more skills`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Skills Visualization */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          {/* Updated header styling */}
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600">
            Detailed Skills Analysis
          </h2>
          <SkillsVisualization />
        </div>
      </section>

      {/* Technical Skills Overview */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          {/* Updated header styling */}
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600">
            Technical Proficiencies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">AI & Data Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {['Azure Cognitive Services', 'Machine Learning', 'Large Language Models', 'AI Forecasting', 
                  'Data Analysis', 'Business Intelligence', 'Predictive Analytics', 'Python', 'SQL'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Development & Integration</h3>
              <div className="flex flex-wrap gap-2">
                {['API Development', 'RESTful Services', 'Integration Architecture', 'React', 
                  'JavaScript/TypeScript', 'OpenAPI/Swagger', 'Cloud Services', 'CI/CD', 'Agile Development'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Product Management</h3>
              <div className="flex flex-wrap gap-2">
                {['Product Strategy', 'Roadmap Development', 'User Research', 'Customer Discovery', 
                  'Agile Methodologies', 'Product Metrics', 'A/B Testing', 'Feature Prioritization', 'Product Operations'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Business & Leadership</h3>
              <div className="flex flex-wrap gap-2">
                {['Cross-Functional Leadership', 'Stakeholder Management', 'B2B SaaS Strategy', 
                  'Team Building', 'Revenue Generation', 'Business Development', 'Market Analysis', 
                  'Executive Presentations', 'Mentorship'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications and Continuing Education */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          {/* Updated header styling */}
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600">
            Continuing Education
          </h2>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Learning Focus</h3>
            
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg bg-white">
                <h4 className="font-semibold text-gray-800 mb-2">Advanced AI Implementation for B2B SaaS</h4>
                <p className="text-gray-600">Focusing on practical applications of AI technologies in enterprise software environments, including LLMs, AI-assisted workflows, and predictive analytics.</p>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg bg-white">
                <h4 className="font-semibold text-gray-800 mb-2">API Platform Strategy</h4>
                <p className="text-gray-600">Expanding knowledge of API ecosystem development, including developer experience, monetization strategies, and integration architecture.</p>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg bg-white">
                <h4 className="font-semibold text-gray-800 mb-2">Enterprise Product Growth Models</h4>
                <p className="text-gray-600">Studying advanced approaches to B2B product-led growth strategies and implementation of metrics-driven development frameworks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}