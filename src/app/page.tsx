'use client'

import { ArrowDown, Mail, Linkedin, Github, Target, Lightbulb, TrendingUp, Users, Award, GraduationCap, Zap, BarChart3, Shield, Truck, Cloud } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 opacity-95"></div>
        
        {/* Animated background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.1) 2%, transparent 0%)`,
            backgroundSize: '50px 50px' 
          }}></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Paul Gilliam</h1>
          <h2 className="text-2xl font-light text-white/90 mb-6">Senior Product Leader & Platform Strategist</h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
          I see the patterns that unlock million-dollar platform opportunities.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 text-center mb-10">
            <div>
              <div className="text-3xl font-bold text-white">8 Years</div>
              <div className="text-sm text-white/80">Product Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">$5M+</div>
              <div className="text-sm text-white/80">Revenue Growth</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-sm text-white/80">Market Fit Achieved</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">5</div>
              <div className="text-sm text-white/80">Verticals Transformed</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#contact" className="px-8 py-3 bg-white text-blue-700 rounded-full font-medium hover:bg-blue-50 transition-colors shadow-lg">
              Contact
            </a>
            <a href="https://linkedin.com/in/pgilliam2" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors">
              LinkedIn
            </a>
          </div>
          
          <div className="animate-bounce mt-8">
            <ArrowDown className="w-6 h-6 text-white" />
          </div>
        </div>
      </section>

      {/* Core Strategic Capabilities */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600">
            Strategic Product Leadership
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="text-4xl text-blue-600 mb-4 flex justify-center">
                <Lightbulb className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Market Category Creation</h3>
              <p className="text-gray-600 mb-4 text-center">Systematic market analysis identifying platform opportunities through competitive intelligence and customer discovery.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Platform economics analysis</li>
                <li>• Competitive differentiation strategy</li>
                <li>• Market gap identification</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="text-4xl text-green-600 mb-4 flex justify-center">
                <Target className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Platform Strategy & Execution</h3>
              <p className="text-gray-600 mb-4 text-center">Transform traditional SaaS into competitive platform ecosystems with measurable revenue impact.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• API ecosystem development</li>
                <li>• Partnership strategy execution</li>
                <li>• Revenue stream diversification</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="text-4xl text-purple-600 mb-4 flex justify-center">
                <Users className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Cross-Functional Leadership</h3>
              <p className="text-gray-600 mb-4 text-center">Strategic influence across engineering, sales, and marketing to drive platform transformation initiatives.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Engineering team coordination</li>
                <li>• Executive stakeholder management</li>
                <li>• Strategic vision alignment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600">
            Strategic Impact & Results
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-200">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">8</div>
              <div className="text-sm text-gray-600">Years Product Experience</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-200">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">$5M+</div>
              <div className="text-sm text-gray-600">Revenue Growth</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-200">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">100%</div>
              <div className="text-sm text-gray-600">Market Fit Achieved</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-200">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent mb-2">5</div>
              <div className="text-sm text-gray-600">Verticals Transformed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Case Studies */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600">
            Platform Leadership Experience
          </h2>
          
          <div className="space-y-8">
            {/* Moving Operations Intelligence */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-3">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                    Moving Operations Intelligence (Smart Insights)
                  </h3>
                  <p className="text-gray-600 mb-4">SmartMoving Software • 2024</p>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-gray-500">Beta Retention</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Identified market opportunity for embedded analytics through systematic customer discovery. Executed paid beta program achieving 100% retention and exceeded initial sales targets, demonstrating strong product-market fit for new analytics category.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong className="text-gray-800">Market Validation:</strong>
                  <p className="text-gray-600">100% paid beta retention with immediate sales traction</p>
                </div>
                <div>
                  <strong className="text-gray-800">Customer Discovery:</strong>
                  <p className="text-gray-600">Systematic market research identifying embedded analytics opportunity</p>
                </div>
                <div>
                  <strong className="text-gray-800">Category Creation:</strong>
                  <p className="text-gray-600">New analytics category with strong product-market fit</p>
                </div>
              </div>
            </div>

            {/* Fintech Partnership */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-3">
                    <Shield className="w-6 h-6 text-green-600" />
                    Fintech Partnership Execution
                  </h3>
                  <p className="text-gray-600 mb-4">SmartMoving Software • 2024</p>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <div className="text-2xl font-bold text-blue-600">$1M+</div>
                  <div className="text-sm text-gray-500">Weekly Volume</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Launched and operationalized ACH platform handling $1M+ weekly volume. Executed full compliance lifecycle, achieved first-try audit success, and directly reduced processing costs for customers.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong className="text-gray-800">Platform Launch:</strong>
                  <p className="text-gray-600">$1M+ weekly transaction volume handling</p>
                </div>
                <div>
                  <strong className="text-gray-800">Compliance Excellence:</strong>
                  <p className="text-gray-600">First-try audit success with full lifecycle execution</p>
                </div>
                <div>
                  <strong className="text-gray-800">Cost Optimization:</strong>
                  <p className="text-gray-600">Direct processing cost reduction for customers</p>
                </div>
              </div>
            </div>

            {/* Alternative Transportation Platform */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-3">
                    <Truck className="w-6 h-6 text-orange-600" />
                    Alternative Transportation Software Platform
                  </h3>
                  <p className="text-gray-600 mb-4">First Student • 2021-2022</p>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <div className="text-2xl font-bold text-blue-600">$20M</div>
                  <div className="text-sm text-gray-500">Projected Revenue</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Led platform strategy for new alternative transportation vertical, coordinating 40+ team of cross-functional leaders and consultants to consolidate fragmented 5-tool market into unified solution. Conducted executive stakeholder discovery across multiple locations to align business requirements with technical architecture, delivering integrated 4-application platform with $20M projected revenue impact.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong className="text-gray-800">Platform Strategy:</strong>
                  <p className="text-gray-600">5-to-1 tool consolidation with market disruption potential</p>
                </div>
                <div>
                  <strong className="text-gray-800">Team Leadership:</strong>
                  <p className="text-gray-600">40+ cross-functional leaders and consultants coordinated</p>
                </div>
                <div>
                  <strong className="text-gray-800">Revenue Impact:</strong>
                  <p className="text-gray-600">$20M projected revenue from integrated platform solution</p>
                </div>
              </div>
            </div>

            {/* Corporate IT Architecture */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-3">
                    <Cloud className="w-6 h-6 text-purple-600" />
                    Corporate IT Architecture Overhaul
                  </h3>
                  <p className="text-gray-600 mb-4">First Student • 2021-2022</p>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <div className="text-2xl font-bold text-purple-600">Azure</div>
                  <div className="text-sm text-gray-500">Cloud Migration</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Led a company-wide IT and product architecture transformation to align technology systems with mission-critical operational goals. Directed migration of all systems to Azure Cloud in partnership with a third-party consulting firm, eliminating infrastructure bottlenecks and enabling scalability. Efforts focused on reducing overhead labor, aligning features with user workflows, and improving visibility across dispatch and support operations.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong className="text-gray-800">Architecture Strategy:</strong>
                  <p className="text-gray-600">Company-wide transformation aligning technology with operations</p>
                </div>
                <div>
                  <strong className="text-gray-800">Cloud Migration:</strong>
                  <p className="text-gray-600">Complete Azure migration eliminating infrastructure bottlenecks</p>
                </div>
                <div>
                  <strong className="text-gray-800">Operational Impact:</strong>
                  <p className="text-gray-600">Reduced overhead labor with improved workflow visibility</p>
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
            Product Leadership Experience
          </h2>
          
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-xl shadow-md border border-gray-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-800">Senior Product Manager</h3>
                <p className="text-gray-600">SmartMoving Software • Jan 2024 - Present</p>
                <p className="text-sm text-gray-500 mt-2">Platform transformation and market category expansion through systematic customer discovery, competitive intelligence, and strategic partnership execution serving 8,000+ users.</p>
              </div>
              <div className="text-center flex-shrink-0">
                <div className="text-lg font-bold text-green-600">$5M+</div>
                <div className="text-xs text-gray-500">Value Created</div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-xl shadow-md border border-gray-200">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-800">Senior Product Manager</h3>
                <p className="text-gray-600">Zebra Technologies • Nov 2022 - Jan 2024</p>
                <p className="text-sm text-gray-500 mt-2">Market opportunity assessment and competitive positioning for retail technology business unit, conducting strategic analysis for AI-driven inventory planning platform.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-xl shadow-md border border-gray-200">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-800">Product Manager</h3>
                <p className="text-gray-600">Koddi • Jun 2022 - Dec 2022</p>
                <p className="text-sm text-gray-500 mt-2">Enhanced digital advertising platform operations for enterprise clients including Kroger and Hotels.com, focusing on competitive optimization and customer discovery.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-xl shadow-md border border-gray-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-800">Product Manager</h3>
                <p className="text-gray-600">First Student • Sep 2021 - Jun 2022</p>
                <p className="text-sm text-gray-500 mt-2">Led strategic transformation coordinating 40+ engineers delivering platform consolidation with $20M projected revenue impact.</p>
              </div>
              <div className="text-center flex-shrink-0">
                <div className="text-lg font-bold text-blue-600">$20M</div>
                <div className="text-xs text-gray-500">Projected Revenue</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Credentials */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600">
            Foundation & Recognition
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-blue-600" />
                Education & Development
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">MBA - Business Management</h4>
                  <p className="text-gray-600">Quantic School of Business and Technology</p>
                  <p className="text-sm text-gray-500">Platform Economics, Competitive Analysis, Strategic Market Development</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">B.S. Information Systems & Business</h4>
                  <p className="text-gray-600">University of Colorado Colorado Springs • 4.0 GPA, Summa Cum Laude</p>
                  <p className="text-sm text-gray-500">Enterprise Platform Architecture, Strategic Systems Design</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-yellow-600" />
                Strategic Recognition
              </h3>
              <div className="space-y-4 text-sm">
                <div className="text-gray-700">International Business Competition Excellence</div>
                <div className="text-gray-700">Strategic Entrepreneurship Recognition</div>
                <div className="text-gray-700">Elite Academic Institution Offers (Harvard, Stanford, MIT)</div>
                <div className="text-gray-700">Published Strategic Framework Development</div>
                <div className="text-gray-700">5-Year Community Leadership Excellence (600+ Homes)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="py-16 px-6 bg-gradient-to-r from-blue-800 to-blue-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6 relative pb-4 inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:w-full after:h-1 after:bg-blue-300">
            Ready to Drive Platform Transformation?
          </h2>
          <p className="text-xl text-blue-100 mb-8">Let&apos;s discuss how strategic market analysis and platform thinking can accelerate your organization&apos;s competitive position.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="mailto:gilliamp2@protonmail.com" className="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              gilliamp2@protonmail.com
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