'use client'

import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, Mail, Phone, Linkedin, Github, ChevronRight, Crown, Cpu, Zap, TrendingUp, Users, Target, Award, GraduationCap } from 'lucide-react';

// Import JSON data
import profileData from '@/data/profile.json';
import experienceData from '@/data/experience.json';
import skillsData from '@/data/skills.json';

export default function StrategicOperations() {
  // Get latest job
  const latestJob = experienceData.experience[0];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-800 to-blue-600 opacity-90"></div>
        
        {/* Animated background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.15) 2%, transparent 0%)`,
            backgroundSize: '50px 50px' 
          }}></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Paul Gilliam</h1>
                          <h2 className="text-2xl font-light text-white/90 mb-6">Operations Excellence & Business Leadership</h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            "I identify systematic business opportunities and build the operational frameworks to capture them"
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 text-center mb-10">
            <div>
              <div className="text-3xl font-bold text-white">$5M+</div>
              <div className="text-sm text-white/80">Platform Value Created</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">$150K+</div>
              <div className="text-sm text-white/80">ARR Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">40+</div>
              <div className="text-sm text-white/80">Team Leadership</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/contact" className="px-8 py-3 bg-white text-blue-700 rounded-full font-medium hover:bg-blue-50 transition-colors shadow-lg">
              Contact
            </Link>
            <a href="https://linkedin.com/in/pgilliam2" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors">
              LinkedIn
            </a>
          </div>
          
          <div className="animate-bounce mt-8">
            <ArrowDown className="w-6 h-6 text-white" />
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600">
            Operations Excellence
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="text-4xl text-blue-600 mb-4 flex justify-center">
                <Crown className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Business Architecture & Market Intelligence</h3>
              <p className="text-gray-600 mb-4 text-center">Systematic market analysis identifying revenue opportunities through platform economics and competitive intelligence.</p>
                                      <ul className="text-sm text-gray-500 space-y-1">
                          <li>• Market category creation</li>
                          <li>• Platform consolidation analysis</li>
                          <li>• Competitive advantage development</li>
                        </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="text-4xl text-green-600 mb-4 flex justify-center">
                <Cpu className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Operational Excellence Through Technology</h3>
                                      <p className="text-gray-600 mb-4 text-center">$1M+ weekly transaction volume through partnerships and technical implementation.</p>
                        <ul className="text-sm text-gray-500 space-y-1">
                          <li>• FinTech partnership execution</li>
                          <li>• API platform development</li>
                          <li>• Process automation implementation</li>
                        </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="text-4xl text-purple-600 mb-4 flex justify-center">
                <Users className="w-12 h-12" />
              </div>
                                      <h3 className="text-xl font-bold mb-4 text-center">Leadership & Transformation</h3>
                        <p className="text-gray-600 mb-4 text-center">Cross-functional leadership driving organizational transformation and sustainable competitive advantages.</p>
                        <ul className="text-sm text-gray-500 space-y-1">
                          <li>• 40+ engineer team leadership</li>
                          <li>• Executive stakeholder management</li>
                          <li>• Vision execution</li>
                        </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600">
            Business Impact & Results
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-200">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">$150K</div>
              <div className="text-sm text-gray-600">ARR API Ecosystem</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-200">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">100%</div>
              <div className="text-sm text-gray-600">Beta Retention Rate</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-200">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">$1M+</div>
              <div className="text-sm text-gray-600">Weekly Transaction Volume</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-200">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">60%</div>
              <div className="text-sm text-gray-600">Operational Efficiency Gain</div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Case Studies */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600">
            Operations Leadership Experience
          </h2>
          
          <div className="space-y-8">
            {/* SmartMoving Platform Transformation */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Platform Transformation & Market Category Creation</h3>
                  <p className="text-gray-600 mb-4">SmartMoving Software • 2024</p>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <div className="text-2xl font-bold text-green-600">$5M+</div>
                  <div className="text-sm text-gray-500">Platform Value</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Transformed traditional SaaS into differentiated platform ecosystem through $2M ACH payment infrastructure, analytics licensing, and API marketplace development. Created first comprehensive moving operations intelligence platform establishing new market category.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                            <div>
                              <strong className="text-gray-800">Innovation:</strong>
                              <p className="text-gray-600">Market category creation through systematic customer discovery</p>
                            </div>
                            <div>
                              <strong className="text-gray-800">Operational Excellence:</strong>
                              <p className="text-gray-600">$150K ARR API ecosystem with 100% enterprise retention</p>
                            </div>
                            <div>
                              <strong className="text-gray-800">Market Impact:</strong>
                              <p className="text-gray-600">Platform transformation enabling competitive differentiation</p>
                            </div>
              </div>
            </div>

            {/* First Student Platform Revolution */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Large-Scale Platform Consolidation & Team Leadership</h3>
                  <p className="text-gray-600 mb-4">First Student • 2021-2022</p>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <div className="text-2xl font-bold text-blue-600">$20M</div>
                  <div className="text-sm text-gray-500">Projected Revenue</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Led 40+ engineer transformation delivering platform consolidation from fragmented 5-tool market approach to unified solution. Identified critical market opportunity where competitors required $300 manual labor per operation vs. modern automation possibilities.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                            <div>
                              <strong className="text-gray-800">Leadership:</strong>
                              <p className="text-gray-600">40+ engineers managed across complex platform development</p>
                            </div>
                            <div>
                              <strong className="text-gray-800">Market Disruption:</strong>
                              <p className="text-gray-600">5-to-1 tool consolidation creating competitive advantage</p>
                            </div>
                            <div>
                              <strong className="text-gray-800">Operational Impact:</strong>
                              <p className="text-gray-600">60% reduction in manual operations vs. competitors</p>
                            </div>
              </div>
            </div>

            {/* FinTech Partnership Excellence */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                <div>
                                          <h3 className="text-2xl font-bold text-gray-800 mb-2">Partnership Execution & Compliance Excellence</h3>
                  <p className="text-gray-600 mb-4">SmartMoving Software • 2024</p>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <div className="text-2xl font-bold text-purple-600">$1M+</div>
                  <div className="text-sm text-gray-500">Weekly Volume</div>
                </div>
              </div>
                                      <p className="text-gray-700 mb-4">Executed complex FinTech partnership delivering $1M+ weekly transaction volume with exceptional compliance execution achieving rare first-try audit success. Vendor selection and regulatory execution critical for platform success.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong className="text-gray-800">Partnership Excellence:</strong>
                  <p className="text-gray-600">First-try compliance audit success (rare achievement)</p>
                </div>
                <div>
                  <strong className="text-gray-800">Operational Scale:</strong>
                  <p className="text-gray-600">$1M+ weekly transaction processing volume</p>
                </div>
                <div>
                  <strong className="text-gray-800">Customer Impact:</strong>
                  <p className="text-gray-600">60%+ customer take rate improvement through cost reduction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600">
            Leadership Experience
          </h2>
          
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-xl shadow-md border border-gray-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-800">Senior Product Manager - Moving Operations</h3>
                <p className="text-gray-600">SmartMoving Software • Jan 2024 - Present</p>
                <p className="text-sm text-gray-500 mt-2">Platform transformation and market category expansion for moving operations software serving 8,000+ users through systematic customer discovery and competitive intelligence.</p>
              </div>
              <div className="text-center flex-shrink-0">
                <div className="text-lg font-bold text-green-600">$5M+</div>
                <div className="text-xs text-gray-500">Value Created</div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-xl shadow-md border border-gray-200">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Cpu className="w-8 h-8 text-purple-600" />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-800">Senior Product Manager - Retail Operations</h3>
                <p className="text-gray-600">Zebra Technologies • Nov 2022 - Jan 2024</p>
                <p className="text-sm text-gray-500 mt-2">Market opportunity assessment and competitive positioning for retail technology business unit, conducting analysis for AI-driven inventory planning platform.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-xl shadow-md border border-gray-200">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-800">Product Manager - Retail Media Operations</h3>
                <p className="text-gray-600">Koddi • Jun 2022 - Dec 2022</p>
                <p className="text-sm text-gray-500 mt-2">Enhanced digital advertising platform operations for enterprise clients including Kroger and Hotels.com, focusing on competitive optimization and customer discovery.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-xl shadow-md border border-gray-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-800">Product Manager - Transportation Operations</h3>
                <p className="text-gray-600">First Student • Sep 2021 - Jun 2022</p>
                <p className="text-sm text-gray-500 mt-2">Led 40+ engineer team delivering $20M projected revenue through market consolidation and platform transformation for 5,000+ daily operations.</p>
              </div>
              <div className="text-center flex-shrink-0">
                <div className="text-lg font-bold text-blue-600">$20M</div>
                <div className="text-xs text-gray-500">Projected Revenue</div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-xl shadow-md border border-gray-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-800">Senior Business Analyst - Insurance Operations</h3>
                <p className="text-gray-600">EZLynx • Aug 2020 - Sep 2021</p>
                <p className="text-sm text-gray-500 mt-2">Enhanced core insurance platform and built revenue-scaling marketplace through competitive analysis and customer discovery, leading cross-functional teams.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-xl shadow-md border border-gray-200">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-teal-600" />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-800">Product Manager - Business Operations Innovation</h3>
                <p className="text-gray-600">ALC Schools (Everdriven) • Aug 2019 - Aug 2020</p>
                <p className="text-sm text-gray-500 mt-2">Scaled educational technology platform to 1000+ districts through systematic customer discovery and operational excellence frameworks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Credentials */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600">
            Foundation & Credentials
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                                      <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                          <GraduationCap className="w-6 h-6 text-blue-600" />
                          Education
                        </h3>
              <div className="space-y-4">
                                            <div>
                              <h4 className="font-semibold text-gray-800">MBA - Business Management</h4>
                              <p className="text-gray-600">Quantic School of Business and Technology</p>
                              <p className="text-sm text-gray-500">Platform Economics, Competitive Analysis, Market Category Creation</p>
                            </div>
                <div>
                  <h4 className="font-semibold text-gray-800">B.S. Information Systems & Business</h4>
                  <p className="text-gray-600">University of Colorado Colorado Springs • 4.0 GPA, Summa Cum Laude</p>
                                                <p className="text-sm text-gray-500">Enterprise Platform Architecture, Systems Design</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                                      <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                          <Award className="w-6 h-6 text-yellow-600" />
                          Recognition
                        </h3>
              <div className="space-y-4 text-sm">
                                            <div className="flex items-center justify-between">
                              <span className="text-gray-700">International Business Competition Excellence</span>
                              <span className="text-gray-500">2018</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-700">International Entrepreneurship Recognition</span>
                              <span className="text-gray-500">2014</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-700">Ronald Reagan Leadership Award</span>
                              <span className="text-gray-500">2014</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-700">Colorado Business Champion</span>
                              <span className="text-gray-500">2015</span>
                            </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6 relative pb-4 inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:w-full after:h-1 after:bg-blue-300">
            Ready to Drive Operational Transformation
          </h2>
          <p className="text-xl text-blue-100 mb-8">Let's discuss how platform thinking and systematic analysis can transform your organization's competitive position.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact" className="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              gilliamp2@protonmail.com
            </Link>
            <a href="tel:719-322-1477" className="border border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              719-322-1477
            </a>
          </div>
          
          <div className="mt-8 flex justify-center gap-6">
            <a href="https://linkedin.com/in/pgilliam2" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/gilliamp-official" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
} 