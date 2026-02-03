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
          <p className="text-xl md:text-2xl font-light text-white/90 mb-8">Strategic Product Leader - Platform Innovation & Market Category Creation</p>
          <p className="text-lg text-white/80 mb-10 leading-relaxed">
            I identify and capture untapped market opportunities through strategic platform thinking that creates sustainable competitive advantages. 
            Specializing in market category creation, platform economics, and transforming $100M+ opportunities into strategic business value.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
            <Link href="/about" className="px-8 py-3 bg-white text-blue-700 rounded-full font-medium hover:bg-blue-50 transition-colors shadow-lg">
              View Strategic Impact
            </Link>
            <Link href="/contact" className="px-8 py-3 border border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors">
              Discuss Market Opportunities
            </Link>
          </div>
          
          <div className="animate-bounce mt-8">
            <ArrowDown className="w-6 h-6 text-white" />
          </div>
        </div>
      </section>

      {/* Strategic Impact Overview */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600">
            Strategic Market Impact
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
              <h3 className="text-2xl font-bold text-gray-800 mb-4">$5M+ Platform Transformation + $100M+ Market Opportunities</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Based in {profileData.basics.location}, I specialize in identifying untapped market opportunities and building strategic platforms that create sustainable competitive advantages. 
                My approach combines systematic market analysis with platform economics thinking to capture opportunities competitors systematically miss.
              </p>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Strategic Market Achievements</h4>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-gray-700"><strong>$100M+ van line market opportunity</strong> identified through platform economics analysis</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-gray-700"><strong>$1.2M market category created</strong> for moving operations intelligence</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div>
                  </div>
                  <span className="text-gray-700"><strong>$5M+ platform transformation</strong> creating multiple revenue streams and ecosystem advantages</span>
                </li>
              </ul>
              
              <Link href="/experience" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                View Complete Strategic Impact <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Current Strategic Role */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 relative pb-4 inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:w-full after:h-1 after:bg-blue-600">
              Current Strategic Leadership at SmartMoving
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Leading platform transformation and market category creation for high-growth B2B SaaS platform
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
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Strategic Market Achievements</h4>
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
                {["Market Category Creation", "Platform Economics", "Strategic Analysis", "Competitive Intelligence", "Revenue Stream Innovation"].map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="text-center">
                <Link href="/experience" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  See Complete Strategic Experience <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Capabilities */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 relative pb-4 inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:w-full after:h-1 after:bg-blue-600">
              Strategic Leadership Capabilities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Core VP/CPO capabilities that identify and capture market opportunities creating sustainable competitive advantages
            </p>
          </div>
          
          {/* Top 3 strategic capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="relative bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-blue-200">
              <span className="absolute top-4 right-4 px-3 py-0.5 text-xs font-semibold bg-blue-600 text-white rounded-full leading-tight max-w-fit">
                6+ years
              </span>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Market Category Creation</h3>
              <p className="text-gray-600 mb-4">Identifying and creating new market categories that establish sustainable competitive advantages</p>
              <div className="text-sm text-blue-700 font-medium mb-1">Key Achievement:</div>
              <p className="text-sm text-gray-600">$1.2M market category created for moving operations intelligence</p>
            </div>

            <div className="relative bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-blue-200">
              <span className="absolute top-4 right-4 px-3 py-0.5 text-xs font-semibold bg-blue-600 text-white rounded-full leading-tight max-w-fit">
                6+ years
              </span>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Platform Economics & Strategy</h3>
              <p className="text-gray-600 mb-4">Understanding platform business models, network effects, and ecosystem monetization strategies</p>
              <div className="text-sm text-blue-700 font-medium mb-1">Key Achievement:</div>
              <p className="text-sm text-gray-600">$100M+ van line market disruption opportunity through platform economics analysis</p>
            </div>

            <div className="relative bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-blue-200">
              <span className="absolute top-4 right-4 px-3 py-0.5 text-xs font-semibold bg-blue-600 text-white rounded-full leading-tight max-w-fit">
                6+ years
              </span>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Strategic Customer Discovery</h3>
              <p className="text-gray-600 mb-4">Systematic customer discovery programs that identify market opportunities and validate strategic direction</p>
              <div className="text-sm text-blue-700 font-medium mb-1">Key Achievement:</div>
              <p className="text-sm text-gray-600">25+ monthly executive interviews revealing opportunities competitors systematically miss</p>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/skills" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
              Explore All Strategic Leadership Capabilities <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Strategic Case Study */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 relative pb-4 inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:w-full after:h-1 after:bg-blue-600">
              Strategic Leadership in Action
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transforming market opportunities through systematic analysis and strategic platform thinking
            </p>
          </div>
          
          {/* Highlight the van line strategic analysis */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 border border-blue-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">Featured Strategic Analysis</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">$100M+ Opportunity</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Platform Economics Revolution: Van Line Market Disruption</h3>
                <p className="text-gray-600 mb-4 text-sm">SmartMoving Software · Strategic Analysis 2025</p>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Conducted systematic industry analysis identifying $100M+ platform economics opportunity to disrupt van line market through strategic positioning, 
                  network effects, and superior technology experience.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="text-2xl font-bold text-blue-600">$100M+</div>
                    <div className="text-sm text-gray-600">Market Opportunity</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-2xl font-bold text-green-600">10% vs 25-40%</div>
                    <div className="text-sm text-gray-600">Disruptive Pricing</div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Strategic Analysis Framework:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Platform Economics</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Market Intelligence</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Network Effects</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Competitive Analysis</span>
                  </div>
                </div>
                
                <Link href="/projects#smartmoving-van-line-platform-strategy" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  View Complete Strategic Analysis <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
              
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 lg:p-10 text-white">
                <h4 className="text-lg font-semibold mb-6">Strategic Market Analysis Process</h4>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-white mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-sm">Conducted trade show intelligence gathering identifying market inefficiencies worth $100M+</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-white mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-sm">Analyzed 200,000+ interstate moves for systematic platform economics modeling</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-white mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-sm">Identified network effects opportunity leveraging 1000+ company distribution</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-white mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-sm">Created strategic partnership framework for DOT compliance and tracking capabilities</p>
                  </div>
                </div>
                
                <div className="border-t border-white/20 pt-4">
                  <p className="text-xs text-white/80 italic">
                    &ldquo;When my boss said &apos;figure out&apos; the van line integration, I identified a potential market transformation 
                    that could redefine an entire industry segment.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/projects" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
              View All Strategic Market Analysis Case Studies <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-6 relative pb-4 inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:w-full after:h-1 after:bg-blue-300">
            Ready for Strategic Product Leadership?
          </h2>
          <p className="text-blue-100 mb-10 max-w-xl mx-auto">
            Let&apos;s discuss how my proven market opportunity identification and $5M+ platform transformation experience can drive 
            strategic competitive advantages and sustainable business growth for your organization.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact"
              className="px-6 py-3 bg-white text-blue-700 hover:bg-blue-50 rounded-lg transition-colors flex items-center shadow-md"
            >
              <Mail className="w-5 h-5 mr-2" /> Discuss Strategic Opportunities
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