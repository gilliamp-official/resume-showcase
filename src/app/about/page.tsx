'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, FileText, Mail, Target, Search, Zap, Rocket, Users, TrendingUp, RotateCcw, X, LucideIcon, Brain, ChartBar, Building } from 'lucide-react';
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
    title: "Strategic Alignment",
    icon: Target,
    color: "bg-blue-600",
    borderColor: "border-blue-600",
    summary: "Market opportunity alignment with business objectives",
    description: "Work with executive leadership to identify strategic market opportunities and align them with measurable business objectives. This creates the foundation for all tactical execution by ensuring every initiative drives competitive advantage and sustainable growth.",
    tools: ["Market opportunity analysis", "Strategic frameworks", "OKR alignment", "Competitive intelligence"],
    departments: ["Executive Leadership", "Strategy", "Finance", "Business Development"],
    outcome: "Clear strategic direction with measurable business objectives aligned to market opportunities"
  },
  {
    id: 2,
    title: "Customer Intelligence",
    icon: Search,
    color: "bg-purple-600",
    borderColor: "border-purple-600",
    summary: "Systematic discovery revealing opportunities competitors miss",
    description: "Conduct systematic customer discovery through 25+ monthly executive interviews, trade show intelligence gathering, and pattern analysis across sales, support, and market data. This reveals strategic opportunities and validates market positioning that competitors systematically miss.",
    tools: ["Executive interviews", "Trade show intelligence", "Customer pattern analysis", "Market validation", "Competitive gap analysis"],
    departments: ["Sales", "Customer Success", "Marketing", "Strategy"],
    outcome: "Strategic customer insights identifying market opportunities worth millions in potential revenue"
  },
  {
    id: 3,
    title: "Validation",
    icon: Zap,
    color: "bg-green-600",
    borderColor: "border-green-600",
    summary: "Market opportunity validation through strategic prototyping",
    description: "Validate strategic opportunities through rapid prototyping, paid beta programs, and systematic market testing. Focus on proving strategic value propositions and competitive advantages before major resource investment.",
    tools: ["Rapid prototyping", "Paid beta programs", "Market testing", "Strategic validation", "Competitive positioning"],
    departments: ["Engineering", "Design", "Customer Success", "Product Marketing"],
    outcome: "Validated strategic opportunities with proven market demand and competitive differentiation"
  },
  {
    id: 4,
    title: "Platform Development",
    icon: Rocket,
    color: "bg-orange-600",
    borderColor: "border-orange-600",
    summary: "Strategic platform implementation creating competitive advantages",
    description: "Execute strategic platform development that creates sustainable competitive advantages through ecosystem thinking, network effects, and strategic partnerships. Focus on building moats competitors cannot easily replicate.",
    tools: ["Platform architecture", "Strategic partnerships", "Ecosystem development", "Network effects", "Competitive moats"],
    departments: ["Engineering", "Partnerships", "Business Development", "Technical Architecture"],
    outcome: "Strategic platform capabilities creating sustainable competitive advantages and market differentiation"
  },
  {
    id: 5,
    title: "Market Penetration",
    icon: Users,
    color: "bg-red-600",
    borderColor: "border-red-600",
    summary: "Strategic market penetration with systematic adoption tracking",
    description: "Execute strategic go-to-market initiatives focusing on market category creation and competitive positioning. Use systematic adoption tracking and customer outcome measurement to optimize market penetration strategies.",
    tools: ["Strategic GTM", "Market category positioning", "Adoption analytics", "Customer outcome tracking", "Strategic messaging"],
    departments: ["Product Marketing", "Sales", "Customer Success", "Marketing"],
    outcome: "Strategic market penetration with validated customer outcomes and competitive market positioning"
  },
  {
    id: 6,
    title: "Scale & Monetization",
    icon: TrendingUp,
    color: "bg-indigo-600",
    borderColor: "border-indigo-600",
    summary: "Strategic scaling with ecosystem monetization and revenue optimization",
    description: "Scale strategic initiatives through ecosystem monetization, strategic partnerships, and platform revenue models. Focus on sustainable growth that creates long-term competitive advantages and market leadership.",
    tools: ["Ecosystem monetization", "Strategic partnerships", "Revenue optimization", "Market expansion", "Platform scaling"],
    departments: ["Business Development", "Partnerships", "Finance", "Strategic Operations"],
    outcome: "Strategic scaling with ecosystem monetization and sustainable competitive market positioning"
  },
  {
    id: 7,
    title: "Strategic Iteration",
    icon: RotateCcw,
    color: "bg-teal-600",
    borderColor: "border-teal-600",
    summary: "Strategic portfolio optimization and opportunity identification",
    description: "Continuously assess strategic portfolio performance and identify new market opportunities. Use systematic analysis to optimize existing strategic initiatives and identify next-generation competitive advantages.",
    tools: ["Strategic portfolio analysis", "Market opportunity assessment", "Competitive intelligence", "Strategic optimization"],
    departments: ["Strategy", "Executive Leadership", "Business Intelligence", "Market Research"],
    outcome: "Continuous strategic optimization and next-generation market opportunity identification"
  }
];

const achievements: string[] = [
  "Identified $100M+ market disruption opportunities through comprehensive platform economics analysis",
  "Created $1.2M market category for operational intelligence solutions with 100% beta retention",
  "Generated $5M+ platform transformation through strategic market positioning and ecosystem development",
  "Built strategic customer discovery program with 25+ monthly executive interviews",
  "Led strategic partnership execution delivering $1M+ weekly transaction volume with first-try compliance",
  "Managed 40+ engineer strategic transformation creating sustainable competitive advantages"
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
      subtitle: 'Strategic execution (current quarter)',
      icon: Target,
      color: 'bg-blue-600',
      borderColor: 'border-blue-500',
      items: [
        { title: 'Market Category Creation', description: 'Operational intelligence leadership' },
        { title: 'Platform Monetization', description: 'Ecosystem revenue optimization' },
        { title: 'Strategic Partnerships', description: 'Competitive advantage development' }
      ],
      criteria: 'Validated strategic opportunities with competitive advantages',
      details: {
        description: 'NOW represents strategic initiatives with validated market opportunities, proven competitive advantages, and clear execution paths. These drive immediate business impact while building long-term strategic positioning.',
        principles: [
          'Market opportunity validated through systematic customer discovery and competitive analysis',
          'Strategic competitive advantages identified and proven through market testing',
          'Clear business impact with measurable outcomes and strategic positioning benefits',
          'Cross-functional strategic alignment with executive sponsorship and resource commitment'
        ],
        examples: [
          'Platform disruption strategy based on comprehensive market opportunity analysis',
          'Operational intelligence category creation with 100% beta retention validation',
          'API ecosystem development unlocking enterprise market with $150K+ ARR potential'
        ]
      }
    },
    {
      id: 'next',
      title: 'NEXT',
      subtitle: 'Strategy Development (next 1-2 quarters)',
      icon: Rocket,
      color: 'bg-orange-600',
      borderColor: 'border-orange-500',
      items: [
        { title: 'Platform Economics Expansion', description: 'Network effects and ecosystem growth' },
        { title: 'Strategic Market Expansion', description: 'Adjacent market penetration' },
        { title: 'Competitive Moat Development', description: 'Sustainable advantage creation' }
      ],
      criteria: 'Strategic opportunities with preliminary validation and business cases',
      details: {
        description: 'NEXT contains strategic opportunities with preliminary market validation, competitive analysis, and business case development. These represent our pipeline of strategic initiatives ready for detailed planning and resource allocation.',
        principles: [
          'Market research and competitive intelligence analysis completed with strategic implications',
          'Business case development with platform economics modeling and revenue projections',
          'Strategic positioning analysis and competitive advantage assessment completed',
          'Resource requirements and strategic partnership opportunities identified'
        ],
        examples: [
          'International market expansion based on platform economics and network effects analysis',
          'Adjacent industry penetration through strategic partnership ecosystem development',
          'Next-generation platform capabilities creating competitive moats unavailable from competitors'
        ]
      }
    },
    {
      id: 'later',
      title: 'LATER',
      subtitle: 'Strategic vision (future market opportunities)',
      icon: TrendingUp,
      color: 'bg-purple-600',
      borderColor: 'border-purple-500',
      items: [
        { title: 'Market Transformation', description: 'Industry-wide disruption opportunities' },
        { title: 'Strategic Innovation', description: 'Next-generation competitive advantages' },
        { title: 'Ecosystem Leadership', description: 'Platform dominance and market control' }
      ],
      criteria: 'Strategic vision aligned with long-term competitive positioning',
      details: {
        description: 'LATER represents strategic vision and emerging market transformation opportunities. These align with long-term competitive positioning but may shift based on market evolution and strategic learning from current initiatives.',
        principles: [
          'Aligns with strategic vision for market leadership and competitive dominance',
          'Represents significant market transformation or industry disruption opportunities',
          'Technology trends and market evolution support long-term strategic viability',
          'Flexible strategic timing based on market readiness and competitive positioning'
        ],
        examples: [
          'Industry-wide platform transformation creating market category dominance',
          'Strategic technology adoption enabling next-generation competitive advantages',
          'Market ecosystem control through platform economics and network effect amplification'
        ]
      }
    }
  ];

  return (
    <>
      {/* Page Header */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Strategic Product Leadership</h1>
          <p className="text-blue-100 max-w-3xl mx-auto text-lg">
            Strategic Product Leader with a proven methodology that identifies $100M+ market opportunities and builds sustainable competitive advantages through systematic market analysis and platform thinking.
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
                
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{profileData.basics.name}</h3>
                  <p className="text-blue-600 font-medium">Strategic Product Leader</p>
                  <p className="text-gray-600 text-sm mt-1">Platform Innovation & Market Category Creation</p>
                </div>
                
                <div className="space-y-3 text-sm mb-6">
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
                
                <div className="space-y-2">
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

              {/* Strategic Impact Metrics */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-800 mb-4">Strategic Impact</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Market Opportunities</span>
                    <span className="font-semibold">$100M+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Platform Transformation</span>
                    <span className="font-semibold">$5M+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Market Categories Created</span>
                    <span className="font-semibold">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Strategic Experience</span>
                    <span className="font-semibold">6+ years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Executive Interviews</span>
                    <span className="font-semibold">25+/month</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              
              {/* Strategic Philosophy */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Strategic Product Leadership Philosophy</h2>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-8">
                  <p className="text-gray-700 text-lg leading-relaxed italic">
                    &ldquo;When my boss at SmartMoving asked me to &apos;figure out&apos; a complex integration challenge, I didn&apos;t just build a feature, I identified a $100M+ market disruption opportunity through systematic industry analysis and platform economics thinking. This is the difference between tactical execution and strategic leadership.&rdquo;
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-6 bg-white border border-gray-200 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">Strategic Thinking</h3>
                    <p className="text-gray-600 text-sm">Market opportunity identification and competitive advantage creation through systematic analysis</p>
                  </div>
                  
                  <div className="text-center p-6 bg-white border border-gray-200 rounded-lg">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <ChartBar className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">Platform Economics</h3>
                    <p className="text-gray-600 text-sm">Understanding network effects, ecosystem monetization, and sustainable competitive moats</p>
                  </div>
                  
                  <div className="text-center p-6 bg-white border border-gray-200 rounded-lg">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">Market Category Creation</h3>
                    <p className="text-gray-600 text-sm">Building new market categories that establish competitive differentiation and market leadership</p>
                  </div>
                </div>
              </div>
              
              {/* Strategic Process Overview */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Strategic Product Leadership Methodology</h2>
                <p className="text-gray-700 text-lg mb-8">
                  A systematic 7-step methodology that layers strategic thinking above tactical execution. GM Financial loved how business objective alignment drives all tactical delivery while maintaining strategic oversight for continuous optimization.
                </p>
                
                {/* Process Timeline */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  {/* Timeline Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-gray-800">Strategic Process Framework</h3>
                      <div className="flex items-center text-sm text-gray-600">
                        <RotateCcw className="w-4 h-4 mr-1" />
                        Continuous strategic optimization
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
                          <h5 className="font-semibold text-gray-800 mb-3">Strategic Tools & Methods</h5>
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
                          <h5 className="font-semibold text-gray-800 mb-3">Strategic Partners</h5>
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
                          <h5 className="font-semibold text-gray-800 mb-3">Strategic Outcome</h5>
                          <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">{selectedStep.outcome}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-white rounded-lg p-8 border border-gray-200 text-center">
                      <div className="text-gray-400 mb-4">
                        <Target className="w-12 h-12 mx-auto" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-600 mb-2">Select a Strategic Step Above</h4>
                      <p className="text-gray-500">Click any step in the timeline to see detailed strategic framework, tools, and business outcomes.</p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Strategic Roadmapping Approach */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Strategic Roadmapping: Now-Next-Later Framework</h3>
                <p className="text-gray-700 mb-8">
                  I use outcome-driven strategic roadmaps that prioritize market opportunities and competitive advantages. This framework embraces strategic uncertainty while maintaining execution agility. Click any column to see detailed strategic criteria.
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
                            Click to see strategic criteria →
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  
                  {/* Strategic Framework Summary */}
                  <div className="mt-6 bg-white p-4 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <div className="flex items-center text-sm text-gray-600">
                          <div className="w-3 h-3 bg-blue-500 rounded mr-2"></div>
                          <span>Validated strategic opportunities</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <div className="w-3 h-3 bg-orange-500 rounded mr-2"></div>
                          <span>Strategic development pipeline</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <div className="w-3 h-3 bg-purple-500 rounded mr-2"></div>
                          <span>Strategic market vision</span>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <RotateCcw className="w-4 h-4 mr-1" />
                        <span>Quarterly strategic review</span>
                        </div>
                   </div>
                 </div>
               </div>
             </div>
             
             {/* Strategic Achievements */}
             <div className="mb-12">
               <h3 className="text-2xl font-bold text-gray-800 mb-6">Strategic Leadership Achievements</h3>
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

             {/* Strategic Leadership Experience */}
             <div className="mb-12">
               <h3 className="text-2xl font-bold text-gray-800 mb-6">Strategic Leadership Background</h3>
               <div className="bg-white border border-gray-200 rounded-xl p-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div>
                     <h4 className="font-bold text-gray-800 mb-4">Professional Foundation</h4>
                     <div className="space-y-3 text-sm">
                       <div>
                         <div className="font-semibold text-gray-700">Founded First Product Department (2019)</div>
                         <div className="text-gray-600">Built strategic product capabilities from ground up, establishing frameworks for market opportunity identification and competitive advantage creation</div>
                       </div>
                       <div>
                         <div className="font-semibold text-gray-700">6+ Years Strategic Leadership</div>
                         <div className="text-gray-600">Consistent track record of market opportunity identification, platform transformation, and competitive advantage development</div>
                       </div>
                       <div>
                         <div className="font-semibold text-gray-700">Cross-Industry Strategic Impact</div>
                         <div className="text-gray-600">Transportation, retail technology, FinTech, and logistics - proven ability to apply strategic thinking across diverse markets</div>
                       </div>
                     </div>
                   </div>
                   
                   <div>
                     <h4 className="font-bold text-gray-800 mb-4">Strategic Credentials</h4>
                     <div className="space-y-3 text-sm">
                       <div>
                         <div className="font-semibold text-gray-700">MBA Strategic Business Management</div>
                         <div className="text-gray-600">Quantic School - Advanced strategic frameworks and platform economics expertise</div>
                       </div>
                       <div>
                         <div className="font-semibold text-gray-700">Elite Academic Foundation</div>
                         <div className="text-gray-600">Harvard/Stanford/MIT offers, #1 Graduate (4.0 GPA), International competition excellence</div>
                       </div>
                       <div>
                         <div className="font-semibold text-gray-700">Strategic Competition Recognition</div>
                         <div className="text-gray-600">International DECA winner, strategic business analysis and market positioning expertise</div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             
             {/* Call to Action */}
             <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl">
               <div className="flex flex-col md:flex-row items-center justify-between">
                 <div className="mb-4 md:mb-0">
                   <h3 className="text-2xl font-bold mb-2">Ready for Strategic Product Leadership?</h3>
                   <p className="text-blue-100">Let&apos;s discuss how this proven strategic methodology can identify market opportunities and create competitive advantages for your organization.</p>
                 </div>
                 <Link 
                   href="/contact"
                   className="px-8 py-3 bg-white text-blue-700 rounded-lg hover:bg-blue-50 transition-colors flex items-center font-semibold whitespace-nowrap"
                 >
                   Discuss Strategic Opportunities <ChevronRight className="w-4 h-4 ml-2" />
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
                 <h3 className="font-semibold text-gray-800 mb-3">Strategic Framework</h3>
                 <p className="text-gray-700 leading-relaxed">{selectedRoadmapColumn.details.description}</p>
               </div>
               
               <div>
                 <h3 className="font-semibold text-gray-800 mb-3">Strategic Selection Criteria</h3>
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
                 <h3 className="font-semibold text-gray-800 mb-3">Strategic Examples</h3>
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
                   <div className="text-sm font-bold text-gray-500">STRATEGIC STEP {selectedStep.id}</div>
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
                 <h3 className="font-semibold text-gray-800 mb-3">Strategic Framework</h3>
                 <p className="text-gray-700 leading-relaxed">{selectedStep.description}</p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <h3 className="font-semibold text-gray-800 mb-3">Strategic Tools & Methods</h3>
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
                   <h3 className="font-semibold text-gray-800 mb-3">Strategic Partners</h3>
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
                 <h3 className="font-semibold text-gray-800 mb-3">Strategic Business Outcome</h3>
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