'use client'

import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, FileText, Mail, ChevronRight } from 'lucide-react';

// Import JSON data
import profileData from '@/data/profile.json';
import experienceData from '@/data/experience.json';



export default function Home() {
  // Get latest job
  const latestJob = experienceData.experience[0];
  

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-blue-600">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-800 to-blue-600 opacity-90"></div>
        
        {/* Animated background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.15) 2%, transparent 0%)`,
            backgroundSize: '50px 50px' 
          }}></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{profileData.basics.name}</h1>
          <p className="text-xl md:text-2xl font-light text-white/90 mb-8">AI Product Leader - $5M+ Revenue Growth</p>
          <p className="text-lg text-white/80 mb-10 leading-relaxed">
            I lead AI-powered product strategies that deliver measurable business impact for Fortune 500 companies. 
            Specializing in custom ML solutions, LLM integration, and transforming enterprise operations through intelligent automation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
            <Link href="/about" className="px-8 py-3 bg-white text-blue-700 rounded-full font-medium hover:bg-blue-50 transition-colors shadow-lg">
              View My Impact
            </Link>
            <Link href="/contact" className="px-8 py-3 border border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors">
              Let&apos;s Talk Revenue
            </Link>
          </div>
          
          <div className="animate-bounce mt-8">
            <ArrowDown className="w-6 h-6 text-white" />
          </div>
        </div>
      </section>

      {/* Revenue Impact Overview */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600">
            Proven Revenue Results
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/me.jpg" 
                  alt={profileData.basics.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                  priority
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">$5M+ in Product Revenue</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Based in {profileData.basics.location}, I specialize in building AI-powered B2B SaaS products that generate substantial revenue growth. 
                My approach combines deep technical expertise with customer-centric development to deliver solutions that solve real business problems.
              </p>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Recent Revenue Achievements</h4>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-gray-700"><strong>$2M ACH payments product</strong> delivered in 8 months at SmartMoving</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-gray-700"><strong>$350K ARR OpenAPI platform</strong> enabling ecosystem expansion</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-gray-700"><strong>$1M→$5M revenue scale</strong> for transportation platform at First Student</span>
                </li>
              </ul>
              
              <Link href="/experience" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                View Complete Revenue History <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Current Role Impact */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 relative pb-4 inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:w-full after:h-1 after:bg-blue-600">
              Current Impact at SmartMoving
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Leading product strategy for high-growth B2B SaaS platform, driving revenue through AI-powered solutions
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{latestJob.title}</h3>
                  <p className="text-blue-600 font-medium">{latestJob.company}</p>
                </div>
                <div className="text-gray-600 mt-2 md:mt-0">
                  {latestJob.startDate} - {latestJob.endDate} · {latestJob.duration}
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                {latestJob.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Revenue Achievements</h4>
                <ul className="space-y-2">
                  {latestJob.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-green-600"></div>
                      </div>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {latestJob.skills.slice(0, 5).map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="text-center">
                <Link href="/experience" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  See Complete Experience History <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Leadership Expertise */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 relative pb-4 inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:w-full after:h-1 after:bg-blue-600">
              AI Product Leadership
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Leading AI-powered product strategies that deliver measurable business impact and revenue growth
            </p>
          </div>
          
          {/* Top 3 AI skills cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="relative bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-blue-200">
              <span className="absolute top-4 right-4 px-3 py-0.5 text-xs font-semibold bg-blue-600 text-white rounded-full leading-tight max-w-fit">
                3+ years
              </span>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">AI/ML Strategy & Implementation</h3>
              <p className="text-gray-600 mb-4">Leading AI-powered product initiatives that deliver measurable business impact</p>
              <div className="text-sm text-blue-700 font-medium mb-1">Key Achievement:</div>
              <p className="text-sm text-gray-600">45% improvement in inventory planning through AI implementation</p>
            </div>

            <div className="relative bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-blue-200">
              <span className="absolute top-4 right-4 px-3 py-0.5 text-xs font-semibold bg-blue-600 text-white rounded-full leading-tight max-w-fit">
                3+ years
              </span>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">AI Product Operations & Integration</h3>
              <p className="text-gray-600 mb-4">Operationalizing AI solutions and integrating them into existing product ecosystems</p>
              <div className="text-sm text-blue-700 font-medium mb-1">Key Achievement:</div>
              <p className="text-sm text-gray-600">Custom ML pipeline architecture for retail forecasting</p>
            </div>

            <div className="relative bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-blue-200">
              <span className="absolute top-4 right-4 px-3 py-0.5 text-xs font-semibold bg-blue-600 text-white rounded-full leading-tight max-w-fit">
                2+ years
              </span>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">LLMs & Generative AI</h3>
              <p className="text-gray-600 mb-4">Practical application of LLMs and generative AI in product development</p>
              <div className="text-sm text-blue-700 font-medium mb-1">Key Achievement:</div>
              <p className="text-sm text-gray-600">AI-powered automation workflows with 30% adoption</p>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/skills" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
              Explore All AI & Technical Capabilities <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured AI Case Study */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 relative pb-4 inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:w-full after:h-1 after:bg-blue-600">
              AI Product Leadership in Action
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transforming Fortune 500 retail operations through custom AI/ML solutions and strategic product leadership
            </p>
          </div>
          
          {/* Highlight the top AI case study */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 border border-blue-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">Featured AI Case Study</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">Fortune 500</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-3">AI-Driven Inventory Planning Revolution</h3>
                <p className="text-gray-600 mb-4 text-sm">Zebra Technologies · Nov 2022 – Jan 2024</p>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Led the development of custom ML forecasting systems that eliminated spreadsheet-based planning for Fortune 500 retailers, 
                  implementing LLM-powered insights and automated data pipelines.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="text-2xl font-bold text-blue-600">45%</div>
                    <div className="text-sm text-gray-600">Planning Accuracy</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-2xl font-bold text-green-600">$4M</div>
                    <div className="text-sm text-gray-600">Client Savings</div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">AI/ML Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Custom ML Pipelines</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">LLM Integration</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">YAML ETL</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Predictive Analytics</span>
                  </div>
                </div>
                
                <Link href="/projects#project-ai-inventory-planning" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  View Complete AI Case Study <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
              
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 lg:p-10 text-white">
                <h4 className="text-lg font-semibold mb-6">AI Product Management Impact</h4>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-white mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-sm">Conducted deep customer discovery with retail planners to identify AI automation opportunities</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-white mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-sm">Designed custom ML pipeline architecture tailored to Fortune 500 data patterns</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-white mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-sm">Integrated LLMs to bridge complex data interpretation with human decision-making</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-white mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-sm">Delivered measurable ROI through 80% reduction in manual planning time</p>
                  </div>
                </div>
                
                <div className="border-t border-white/20 pt-4">
                  <p className="text-xs text-white/80 italic">
                    &ldquo;This project showcases the strategic intersection of AI technology and product management, 
                    delivering enterprise value through customer-centric ML solutions.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/projects" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
              View All AI & Product Innovation Case Studies <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-6 relative pb-4 inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:w-full after:h-1 after:bg-blue-300">
            Ready to Scale with AI Product Leadership?
          </h2>
          <p className="text-blue-100 mb-10 max-w-xl mx-auto">
            Let&apos;s discuss how my proven AI/ML expertise and $5M+ in product revenue can transform your business 
            through intelligent automation, custom ML solutions, and strategic product innovation.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact"
              className="px-6 py-3 bg-white text-blue-700 hover:bg-blue-50 rounded-lg transition-colors flex items-center shadow-md"
            >
              <Mail className="w-5 h-5 mr-2" /> Discuss Revenue Opportunities
            </Link>
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white hover:bg-white/10 rounded-lg transition-colors flex items-center"
            >
              <FileText className="w-5 h-5 mr-2" /> Download Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
}