'use client'
'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, FileText, Mail, Target, Search, Zap, Rocket, Users, TrendingUp, RotateCcw, X, LucideIcon } from 'lucide-react';
import profileData from '@/data/profile.json';
import { downloadResume } from '@/utils/downloadUtils';

interface ProcessStep {
  id: number;
  title: string;
  icon: LucideIcon;
  color: string;
  borderColor: string;
  summary: string;
  description: string;
  tools: string[];
  departments: string[];
  outcome: string;
}

interface RoadmapColumn {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  color: string;
  borderColor: string;
  items: Array<{
    title: string;
    description: string;
  }>;
  criteria: string;
  details: {
    description: string;
    principles: string[];
    examples: string[];
  };
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Business Alignment",
    icon: Target,
    color: "bg-blue-600",
    borderColor: "border-blue-600",
    summary: "Executive SMART goals & OKRs",
    description: "Work with top executives to pinpoint a specific theme and measurable for my team to achieve. This is generally in the form of a SMART goal or OKR. It is focused and simple, but highly impactful.",
    tools: ["Executive dashboards", "OKR frameworks", "Business metrics"],
    departments: ["Executive Leadership", "Finance", "Strategy", "Operations"],
    outcome: "Clear, measurable business objectives aligned with company strategy"
  },
  {
    id: 2,
    title: "Signal",
    icon: Search,
    color: "bg-purple-600",
    borderColor: "border-purple-600",
    summary: "AI-powered customer insight analysis",
    description: "Leverage AI platforms like Dovetail or Claude projects to inject context from sales CRMs, support desk tickets, and feature request boards to look for patterns in customer feedback loops to identify problems that customers have related to our business goal.",
    tools: ["Dovetail AI", "Claude Projects", "CRM analysis", "Support ticket mining"],
    departments: ["Sales", "Customer Success", "Support", "Data Analytics"],
    outcome: "Data-driven problem identification with quantified customer pain points"
  },
  {
    id: 3,
    title: "Filter & Prototype",
    icon: Zap,
    color: "bg-green-600",
    borderColor: "border-green-600",
    summary: "Rapid AI-assisted validation",
    description: "Leverage AI to create rapid prototypes (CLI claude code and simple web apps I know how to code) to validate ideas with customers. Partner with engineering and design to rapidly improve designs and architecture.",
    tools: ["Claude Code CLI", "Custom web apps", "Design partnerships", "Customer validation"],
    departments: ["Engineering", "Design/UX", "Customer Success", "Sales"],
    outcome: "Validated prototypes with customer feedback and technical feasibility"
  },
  {
    id: 4,
    title: "Deliver Fast",
    icon: Rocket,
    color: "bg-orange-600",
    borderColor: "border-orange-600",
    summary: "Vertical slice engineering with clear outcomes",
    description: "After a week of discovery, create engineering documentation to deliver solution, broken down into small vertical slices for the engineering team to deliver. Align on a customer outcome to achieve success (i.e. create 4 reports in the new system or use at least twice a day). Also align on a clear (smaller) business outcome to know if we're successful as business.",
    tools: ["Engineering docs", "Vertical slicing", "Outcome tracking", "Team alignment"],
    departments: ["Engineering", "QA", "DevOps", "Data Analytics"],
    outcome: "Clear development roadmap with defined success metrics"
  },
  {
    id: 5,
    title: "Beta Feedback",
    icon: Users,
    color: "bg-red-600",
    borderColor: "border-red-600",
    summary: "Analytics-driven beta optimization",
    description: "Work with the marketing + CS teams to get a beta message and support base in place. Setup tracking in a product analytics tool to measure usage and collect feedback via surveys (and conduct interviews with customers as needed). Measure customer outcomes.",
    tools: ["Product analytics", "Customer surveys", "Beta programs", "Usage tracking"],
    departments: ["Marketing", "Customer Success", "Support", "Sales"],
    outcome: "Validated customer outcomes with quantified usage metrics"
  },
  {
    id: 6,
    title: "Scale & Optimize",
    icon: TrendingUp,
    color: "bg-indigo-600",
    borderColor: "border-indigo-600",
    summary: "Scale to GA with continuous optimization",
    description: "Once the customer outcome is achieved for Beta, work with product marketing and sales to scale the product to GA and get it used by a lot of customers. Continue to monitor and report on performance. Leverage platforms like Loom to create interactive lessons and videos for customers and internal teams.",
    tools: ["Product marketing", "Sales enablement", "Loom videos", "Performance monitoring"],
    departments: ["Product Marketing", "Sales", "Customer Success", "Training"],
    outcome: "Successful GA launch with scaled adoption and documented ROI"
  },
  {
    id: 7,
    title: "Monitor & Iterate",
    icon: RotateCcw,
    color: "bg-teal-600",
    borderColor: "border-teal-600",
    summary: "Continuous improvement cycle",
    description: "Start the process over again looking for improvements to the existing solution or if a new problem is more worth solving.",
    tools: ["Performance analysis", "Opportunity assessment", "Process iteration"],
    departments: ["Data Analytics", "Finance", "Customer Success", "Executive Leadership"],
    outcome: "Ongoing optimization and strategic pivoting based on results"
  }
];

const achievements: string[] = [
  "Delivered $2.35M in documented revenue through AI-powered product development",
  "Built $2M ACH payments solution in 8 months using rapid prototyping process",
  "Created $350K ARR OpenAPI platform through customer signal analysis",
  "Improved inventory planning accuracy by 45% with AI-driven solutions",
  "Conducted 20+ monthly customer interviews for continuous feedback loops",
  "Led cross-functional teams of 40+ contractors through structured delivery process"
];

export default function AboutPage(): React.ReactElement {
  const [selectedStep, setSelectedStep] = useState<ProcessStep | null>(null);
  const [selectedRoadmapColumn, setSelectedRoadmapColumn] = useState<RoadmapColumn | null>(null);

  const selectStep = (step: ProcessStep): void => {
    setSelectedStep(step);
  };

  const selectRoadmapColumn = (column: RoadmapColumn): void => {
    setSelectedRoadmapColumn(column);
  };

  const closeRoadmapModal = (): void => {
    setSelectedRoadmapColumn(null);
  };

  const roadmapColumns: RoadmapColumn[] = [
    {
      id: 'now',
      title: 'NOW',
      subtitle: 'Current quarter execution',
      icon: Target,
      color: 'bg-blue-600',
      borderColor: 'border-blue-500',
      items: [
        { title: 'Increase Product Adoption', description: '25% increase in DAU' },
        { title: 'Onboarding Optimization', description: 'Validated & in progress' },
        { title: 'In-app Tutorial', description: 'Engineering sprint 3' }
      ],
      criteria: 'Validated, feasible, currently executing',
      details: {
        description: 'Items in NOW are validated through customer research, have clear success metrics, and are actively being developed. These represent our highest confidence bets.',
        principles: [
          'Customer validation completed through interviews/surveys',
          'Engineering feasibility confirmed with clear estimates',
          'Success metrics defined and tracking implemented',
          'Cross-functional team aligned and actively working'
        ],
        examples: [
          'User onboarding flow improvements based on 20+ customer interviews',
          'API rate limiting implementation to support enterprise customers',
          'Mobile responsive design for key user workflows'
        ]
      }
    },
    {
      id: 'next',
      title: 'NEXT',
      subtitle: 'Next 1-2 quarters',
      icon: Rocket,
      color: 'bg-orange-600',
      borderColor: 'border-orange-500',
      items: [
        { title: 'Expand Market Reach', description: 'Enter 2 new segments' },
        { title: 'Mobile App Launch', description: 'Discovery planned' },
        { title: 'API Monetization', description: 'Business case ready' }
      ],
      criteria: 'Research completed, business case clear',
      details: {
        description: 'NEXT items have solid business cases and preliminary research completed. They\'re ready for detailed planning and resource allocation once NOW items are delivered.',
        principles: [
          'Market research and competitive analysis completed',
          'Business case with revenue projections validated',
          'Technical architecture review and feasibility assessment done',
          'Resource requirements and timeline estimates available'
        ],
        examples: [
          'Mobile app development after user research shows 60% mobile usage',
          'Enterprise SSO integration based on 5+ enterprise prospect requests',
          'Advanced analytics dashboard for power users segment'
        ]
      }
    },
    {
      id: 'later',
      title: 'LATER',
      subtitle: 'Future vision (6+ months)',
      icon: TrendingUp,
      color: 'bg-purple-600',
      borderColor: 'border-purple-500',
      items: [
        { title: 'AI-Powered Innovation', description: '45% workflow automation' },
        { title: 'Predictive Analytics', description: 'Market assessment' },
        { title: 'Enterprise Suite', description: 'Vision exploration' }
      ],
      criteria: 'Strategic alignment, market opportunity',
      details: {
        description: 'LATER represents our strategic vision and emerging opportunities. These items align with long-term company goals but may shift based on market conditions and learning from NOW/NEXT deliveries.',
        principles: [
          'Aligns with company\'s 3-5 year strategic vision',
          'Represents significant market opportunity or competitive advantage',
          'Technology trends and customer behavior support future viability',
          'Flexible timing based on resource availability and market readiness'
        ],
        examples: [
          'AI-powered workflow automation based on emerging GPT capabilities',
          'Blockchain integration for data verification in regulated industries',
          'AR/VR features for immersive product experiences'
        ]
      }
    }
  ];

  return (
    <>
      {/* Page Header */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AI-Powered Product Leadership</h1>
          <p className="text-blue-100 max-w-3xl mx-auto text-lg">
            Senior Product Manager with a proven 7-step process that delivers $5M+ in revenue through AI-enhanced customer discovery, rapid prototyping, and data-driven iteration.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Left Sidebar - Profile & Contact */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 mb-6">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image 
                    src="/me.jpg" 
                    alt={profileData.basics.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-full"
                    priority
                  />
                </div>
                
                <h3 className="text-xl font-bold text-center mb-4">Contact</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-blue-600" />
                    <a href={`mailto:${profileData.basics.email}`} className="hover:text-blue-600">
                      {profileData.basics.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{profileData.basics.location}</span>
                  </div>
                  {profileData.social.map((social, index) => {
                    if (social.network === 'LinkedIn') {
                      return (
                        <div key={index} className="flex items-center">
                          <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                          <a href={social.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                            LinkedIn Profile
                          </a>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
                
                <div className="mt-6 space-y-2">
                  <button
                    type="button"
                    onClick={downloadResume}
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <FileText className="w-4 h-4 mr-2" /> Resume
                  </button>
                  <Link 
                    href="/contact"
                    className="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center"
                  >
                    <Mail className="w-4 h-4 mr-2" /> Contact
                  </Link>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-800 mb-4">Proven Results</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Revenue Generated</span>
                    <span className="font-semibold">$5M+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Process Iterations</span>
                    <span className="font-semibold">100+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">AI Improvement</span>
                    <span className="font-semibold">45%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Customer Interviews</span>
                    <span className="font-semibold">20+/month</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              
              {/* Process Overview */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">My AI-Enhanced Product Process</h2>
                <p className="text-gray-700 text-lg mb-8">
                  A systematic 7-step methodology that leverages AI tools and data-driven insights. Click any step below to see detailed breakdown.
                </p>
                
                {/* Process Timeline */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  {/* Timeline Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-gray-800">Process Timeline</h3>
                      <div className="flex items-center text-sm text-gray-600">
                        <RotateCcw className="w-4 h-4 mr-1" />
                        Continuous cycle
                      </div>
                    </div>
                    
                    {/* Timeline */}
                    <div className="relative">
                      {/* Timeline line */}
                      <div className="absolute top-6 left-6 right-6 h-0.5 bg-gray-300"></div>
                      
                      {/* Timeline steps */}
                      <div className="flex justify-between">
                        {processSteps.map((step: ProcessStep) => {
                          const Icon = step.icon;
                          const isSelected = selectedStep?.id === step.id;
                          
                          return (
                            <button
                              key={step.id}
                              onClick={() => selectStep(step)}
                              className={`relative flex flex-col items-center group ${isSelected ? 'z-10' : ''}`}
                            >
                              {/* Timeline dot */}
                              <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center mb-2 transition-transform duration-200 ${
                                isSelected ? 'scale-110 ring-4 ring-blue-200' : 'group-hover:scale-105'
                              }`}>
                                <Icon className="w-6 h-6 text-white" />
                              </div>
                              
                              {/* Step info */}
                              <div className="text-center">
                                <div className="text-xs font-bold text-gray-500 mb-1">STEP {step.id}</div>
                                <div className={`text-xs font-medium ${isSelected ? 'text-gray-800' : 'text-gray-600'} max-w-16 leading-tight`}>
                                  {step.title}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  
                  {/* Step Details */}
                  {selectedStep ? (
                    <div className="bg-white rounded-lg p-6 border border-gray-200">
                      <div className="flex items-center mb-4">
                        <div className={`w-10 h-10 ${selectedStep.color} rounded-lg flex items-center justify-center mr-3`}>
                          <selectedStep.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-gray-500">STEP {selectedStep.id}</div>
                          <h4 className="text-xl font-bold text-gray-800">{selectedStep.title}</h4>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-6 leading-relaxed">{selectedStep.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-3">Tools & Methods</h5>
                          <ul className="space-y-2">
                            {selectedStep.tools.map((tool: string, idx: number) => (
                              <li key={idx} className="flex items-center text-sm text-gray-600">
                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                                {tool}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-3">Cross-Functional Partners</h5>
                          <ul className="space-y-2">
                            {selectedStep.departments.map((dept: string, idx: number) => (
                              <li key={idx} className="flex items-center text-sm text-gray-600">
                                <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                                {dept}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-3">Key Outcome</h5>
                          <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">{selectedStep.outcome}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-white rounded-lg p-8 border border-gray-200 text-center">
                      <div className="text-gray-400 mb-4">
                        <Target className="w-12 h-12 mx-auto" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-600 mb-2">Select a Step Above</h4>
                      <p className="text-gray-500">Click any step in the timeline to see detailed information about tools, partners, and outcomes.</p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Roadmapping Approach */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Strategic Roadmapping: Now-Next-Later Framework</h3>
                <p className="text-gray-700 mb-8">
                  I use outcome-driven Now-Next-Later roadmaps that embrace uncertainty and maintain agility. Click any column to see detailed breakdown.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {roadmapColumns.map((column) => {
                      const Icon = column.icon;
                      return (
                        <button 
                          key={column.id}
                          onClick={() => selectRoadmapColumn(column)} 
                          className={`bg-white rounded-lg p-5 border-2 ${column.borderColor} hover:shadow-lg transition-all duration-200 text-left group`}
                        >
                          <div className="flex items-center mb-4">
                            <div className={`w-10 h-10 ${column.color} rounded-lg flex items-center justify-center mr-3`}>
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h4 className="text-lg font-bold text-gray-800">{column.title}</h4>
                              <p className="text-sm text-gray-600">{column.subtitle}</p>
                            </div>
                          </div>
                          
                          <div className="space-y-3 mb-4">
                            {column.items.map((item, idx) => (
                              <div key={idx} className={`${column.id === 'now' ? 'bg-blue-50' : column.id === 'next' ? 'bg-orange-50' : 'bg-purple-50'} p-3 rounded-lg`}>
                                <div className={`text-sm font-semibold ${column.id === 'now' ? 'text-blue-800' : column.id === 'next' ? 'text-orange-800' : 'text-purple-800'} mb-1`}>{item.title}</div>
                                <div className={`text-xs ${column.id === 'now' ? 'text-blue-700' : column.id === 'next' ? 'text-orange-700' : 'text-purple-700'}`}>{item.description}</div>
                              </div>
                            ))}
                          </div>
                          
                          <div className={`text-xs text-gray-600 group-hover:${column.id === 'now' ? 'text-blue-600' : column.id === 'next' ? 'text-orange-600' : 'text-purple-600'} transition-colors`}>
                            Click to see detailed criteria →
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  
                  {/* Quick Summary */}
                  <div className="mt-6 bg-white p-4 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <div className="flex items-center text-sm text-gray-600">
                          <div className="w-3 h-3 bg-blue-500 rounded mr-2"></div>
                          <span>Validated & executing</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <div className="w-3 h-3 bg-orange-500 rounded mr-2"></div>
                          <span>Researched & planned</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <div className="w-3 h-3 bg-purple-500 rounded mr-2"></div>
                          <span>Strategic vision</span>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <RotateCcw className="w-4 h-4 mr-1" />
                        <span>6-week review cycle</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Key Achievements */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Quantified Achievements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievements.map((achievement: string, index: number) => (
                    <div key={index} className="flex items-start p-4 bg-blue-50 rounded-lg">
                      <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>
                      <span className="text-gray-700 text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold mb-2">Ready to Scale Your Product Revenue?</h3>
                    <p className="text-blue-100">Let&apos;s discuss how this proven process can drive measurable growth for your products.</p>
                  </div>
                  <Link 
                    href="/contact"
                    className="px-8 py-3 bg-white text-blue-700 rounded-lg hover:bg-blue-50 transition-colors flex items-center font-semibold whitespace-nowrap"
                  >
                    Schedule a Call <ChevronRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Modal */}
      {selectedRoadmapColumn && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className={`w-12 h-12 ${selectedRoadmapColumn.color} rounded-lg flex items-center justify-center mr-4`}>
                    <selectedRoadmapColumn.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{selectedRoadmapColumn.title}</h2>
                    <p className="text-gray-600">{selectedRoadmapColumn.subtitle}</p>
                  </div>
                </div>
                <button
                  onClick={closeRoadmapModal}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Overview</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedRoadmapColumn.details.description}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Selection Criteria</h3>
                  <ul className="space-y-2">
                    {selectedRoadmapColumn.details.principles.map((principle: string, idx: number) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <div className={`w-2 h-2 ${selectedRoadmapColumn.id === 'now' ? 'bg-blue-600' : selectedRoadmapColumn.id === 'next' ? 'bg-orange-600' : 'bg-purple-600'} rounded-full mr-3 mt-2`}></div>
                        {principle}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Real Examples</h3>
                  <ul className="space-y-2">
                    {selectedRoadmapColumn.details.examples.map((example: string, idx: number) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <div className={`w-2 h-2 ${selectedRoadmapColumn.id === 'now' ? 'bg-blue-600' : selectedRoadmapColumn.id === 'next' ? 'bg-orange-600' : 'bg-purple-600'} rounded-full mr-3 mt-2`}></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Process Step Modal */}
      {selectedStep && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className={`w-12 h-12 ${selectedStep.color} rounded-lg flex items-center justify-center mr-4`}>
                    <selectedStep.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-500">STEP {selectedStep.id}</div>
                    <h2 className="text-2xl font-bold text-gray-800">{selectedStep.title}</h2>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedStep(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Process Description</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedStep.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Tools & Methods</h3>
                    <ul className="space-y-2">
                      {selectedStep.tools.map((tool: string, idx: number) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Cross-Functional Partners</h3>
                    <ul className="space-y-2">
                      {selectedStep.departments.map((dept: string, idx: number) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                          {dept}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Key Outcome</h3>
                  <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">{selectedStep.outcome}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}