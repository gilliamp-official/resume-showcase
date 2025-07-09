'use client'
import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, DollarSign, Zap, Users, Brain, Target, TrendingUp, X, ChevronDown, Filter, Lightbulb, Wrench, MessageCircle, Award, Code, Rocket, Camera, ExternalLink } from 'lucide-react';
import caseStudiesData from '@/data/projects.json';
import ScreenshotModal from '@/components/ScreenshotModal';
import { useScreenshots } from '@/hooks/useScreenshots';

interface CaseStudyMetric {
  metric: string;
  description: string;
}

interface CaseStudySection {
  title: string;
  description: string;
  keyProblems?: string[];
  methodology?: string[];
  keyFeatures?: string[];
}

interface CaseStudyResults {
  primaryMetrics?: CaseStudyMetric[];
  businessImpact?: string;
  customerFeedback?: string;
}

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  company: string;
  industry: string;
  timeline: string;
  duration: string;
  heroMetric: string;
  heroDescription: string;
  skills?: string[];
  solutionVertical?: string;
  techStack?: string;
  impactType?: string[];
  challenge?: CaseStudySection;
  approach?: CaseStudySection;
  solution?: CaseStudySection;
  results?: CaseStudyResults;
  learnings?: string[];
  technologies?: string[];
  featured?: boolean;
  screenshots?: {
    password: string;
  };
  marketingLink?: string;
}

interface FilterOptions {
  skills?: string[];
  solutionVerticals?: string[];
  techStacks?: string[];
  industries?: string[];
  impactTypes?: string[];
}

interface ProjectsData {
  caseStudies: CaseStudy[];
  filterOptions?: FilterOptions;
  summary?: {
    totalProjects: number;
    totalRevenue: string;
    avgDuration: string;
  };
}

const typedCaseStudiesData = caseStudiesData as unknown as ProjectsData;

// Screenshot Button Component
function ScreenshotButton({ caseStudyId, onClick }: { caseStudyId: string; onClick: () => void }) {
  const { hasScreens, loading } = useScreenshots(caseStudyId);
  
  if (loading) {
    return (
      <div className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4">
        <div className="flex items-center gap-3">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
          <span className="text-gray-600 text-sm">Checking for screenshots...</span>
        </div>
      </div>
    );
  }
  
  if (!hasScreens) {
    return null;
  }
  
  return (
    <button
      onClick={onClick}
      className="w-full bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl p-4 text-left transition-colors group"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Camera className="w-5 h-5 text-blue-600" />
          <div>
            <h4 className="font-bold text-blue-800">Screenshots</h4>
            <p className="text-sm text-blue-600">View project images</p>
          </div>
        </div>
        <div className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-sm">Protected</span>
        </div>
      </div>
    </button>
  );
}

export default function ProjectsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeDrawer, setActiveDrawer] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    skills: [] as string[],
    solutionVertical: [] as string[],
    techStack: [] as string[],
    impactType: [] as string[]
  });
  const [showFilters, setShowFilters] = useState(false);
  const [showScreenshotModal, setShowScreenshotModal] = useState(false);

  const caseStudies = useMemo(() => typedCaseStudiesData?.caseStudies || [], []);
  const filterOptions = typedCaseStudiesData?.filterOptions || {};

  // Filter case studies based on active filters
  const filteredCaseStudies = useMemo(() => {
    return caseStudies.filter(study => {
      const matchesSkills = filters.skills.length === 0 || 
        filters.skills.some(skill => study.skills?.includes(skill));
      const matchesSolutionVertical = filters.solutionVertical.length === 0 || 
        filters.solutionVertical.includes(study.solutionVertical || '');
      const matchesTechStack = filters.techStack.length === 0 || 
        filters.techStack.includes(study.techStack || '');
      const matchesImpactType = filters.impactType.length === 0 || 
        filters.impactType.some(impact => study.impactType?.includes(impact));
      
      return matchesSkills && matchesSolutionVertical && matchesTechStack && matchesImpactType;
    });
  }, [caseStudies, filters]);

  const currentProject = filteredCaseStudies[currentSlide] || caseStudies[0];

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % filteredCaseStudies.length);
  }, [filteredCaseStudies.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + filteredCaseStudies.length) % filteredCaseStudies.length);
  }, [filteredCaseStudies.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'Escape') {
        setActiveDrawer(null);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [prevSlide, nextSlide]);



  const toggleFilter = (filterType: keyof typeof filters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(item => item !== value)
        : [...prev[filterType], value]
    }));
    setCurrentSlide(0); // Reset to first slide when filters change
  };

  const clearFilters = () => {
    setFilters({
      skills: [],
      solutionVertical: [],
      techStack: [],
      impactType: []
    });
    setCurrentSlide(0);
  };

  const getImpactIcon = (impactType: string) => {
    switch (impactType) {
      case 'Revenue Generation': return <DollarSign className="w-4 h-4" />;
      case 'Operational Efficiency': return <Zap className="w-4 h-4" />;
      case 'Customer Experience': return <Users className="w-4 h-4" />;
      case 'Strategic Innovation': return <Brain className="w-4 h-4" />;
      default: return <Target className="w-4 h-4" />;
    }
  };

  const getVerticalIcon = (vertical: string) => {
    switch (vertical) {
      case 'Marketing Tech': return <Target className="w-5 h-5" />;
      case 'FinTech': return <DollarSign className="w-5 h-5" />;
      case 'Analytics': return <TrendingUp className="w-5 h-5" />;
      case 'API Platform': return <Code className="w-5 h-5" />;
      case 'Transportation': return <Rocket className="w-5 h-5" />;
      default: return <Wrench className="w-5 h-5" />;
    }
  };

  const activeFilterCount = Object.values(filters).flat().length;

  if (filteredCaseStudies.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">No Case Studies Match Your Filters</h2>
          <p className="text-gray-600 mb-4">Try adjusting your filter criteria</p>
          <button 
            onClick={clearFilters}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header with Filters */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Case Study Portfolio</h1>
              <p className="text-gray-600 text-sm">
                {filteredCaseStudies.length} of {caseStudies.length} case studies
                {activeFilterCount > 0 && ` • ${activeFilterCount} filters active`}
              </p>
            </div>
            <div className="flex items-center gap-4">
              {activeFilterCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Clear filters
                </button>
              )}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                  showFilters ? 'bg-blue-50 border-blue-200 text-blue-700' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Filter className="w-4 h-4" />
                Filters
                {activeFilterCount > 0 && (
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    {activeFilterCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide-out Filter Panel */}
      {showFilters && (
        <div 
          className="fixed inset-0 bg-black/30 z-50 transition-opacity duration-300"
          onClick={() => setShowFilters(false)}
        >
          <div 
            className={`fixed right-0 top-0 h-full w-96 bg-white shadow-xl transform transition-transform duration-300 ${
              showFilters ? 'translate-x-0' : 'translate-x-full'
            }`}
            onClick={e => e.stopPropagation()}
          >
            {/* Filter Panel Header */}
            <div className="flex items-center justify-between p-6 border-b bg-gray-50">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Filter Case Studies</h3>
                <p className="text-sm text-gray-600">
                  {filteredCaseStudies.length} of {caseStudies.length} matching
                </p>
              </div>
              <button
                onClick={() => setShowFilters(false)}
                className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Filter Content */}
            <div className="p-6 overflow-y-auto h-full pb-20">
              <div className="space-y-6">
                
                {/* Skills Filter */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Award className="w-4 h-4 text-blue-600" />
                    Skills ({filters.skills.length} selected)
                  </h4>
                  <div className="space-y-2 max-h-40 overflow-y-auto bg-gray-50 rounded-lg p-3">
                    {filterOptions.skills?.map(skill => (
                      <label key={skill} className="flex items-center gap-3 text-sm hover:bg-white rounded px-2 py-1 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.skills.includes(skill)}
                          onChange={() => toggleFilter('skills', skill)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-gray-700">{skill}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Solution Vertical Filter */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4 text-orange-600" />
                    Solution Type ({filters.solutionVertical.length} selected)
                  </h4>
                  <div className="space-y-2 max-h-40 overflow-y-auto bg-gray-50 rounded-lg p-3">
                    {filterOptions.solutionVerticals?.map(vertical => (
                      <label key={vertical} className="flex items-center gap-3 text-sm hover:bg-white rounded px-2 py-1 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.solutionVertical.includes(vertical)}
                          onChange={() => toggleFilter('solutionVertical', vertical)}
                          className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                        />
                        <span className="text-gray-700">{vertical}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Filter */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Code className="w-4 h-4 text-green-600" />
                    Tech Stack ({filters.techStack.length} selected)
                  </h4>
                  <div className="space-y-2 max-h-40 overflow-y-auto bg-gray-50 rounded-lg p-3">
                    {filterOptions.techStacks?.map(tech => (
                      <label key={tech} className="flex items-center gap-3 text-sm hover:bg-white rounded px-2 py-1 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.techStack.includes(tech)}
                          onChange={() => toggleFilter('techStack', tech)}
                          className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                        />
                        <span className="text-gray-700">{tech}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Impact Type Filter */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-purple-600" />
                    Impact Type ({filters.impactType.length} selected)
                  </h4>
                  <div className="space-y-2 max-h-40 overflow-y-auto bg-gray-50 rounded-lg p-3">
                    {filterOptions.impactTypes?.map(impact => (
                      <label key={impact} className="flex items-center gap-3 text-sm hover:bg-white rounded px-2 py-1 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.impactType.includes(impact)}
                          onChange={() => toggleFilter('impactType', impact)}
                          className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="text-gray-700">{impact}</span>
                      </label>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Filter Panel Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t">
              <div className="flex gap-3">
                <button
                  onClick={clearFilters}
                  disabled={activeFilterCount === 0}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Clear All
                </button>
                <button
                  onClick={() => setShowFilters(false)}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Slide Content with Navigation */}
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-7xl mx-auto relative">
          
          {/* Navigation Arrows - Positioned outside slide area */}
          <button
            onClick={prevSlide}
            disabled={filteredCaseStudies.length <= 1}
            className="absolute -left-20 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:shadow-xl disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            disabled={filteredCaseStudies.length <= 1}
            className="absolute -right-20 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:shadow-xl disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
          {/* Slide Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                      {currentProject.company}
                    </span>
                    <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                      {currentProject.timeline}
                    </span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-3">{currentProject.title}</h2>
                  <p className="text-xl text-blue-100 leading-relaxed">{currentProject.subtitle}</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="text-3xl font-bold mb-2">{currentProject.heroMetric}</div>
                    <div className="text-blue-100 text-sm">Key Impact</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Left Column - Context */}
                <div className="space-y-6">
                  {/* Solution Vertical */}
                  {currentProject.solutionVertical && (
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        {getVerticalIcon(currentProject.solutionVertical)}
                        <h3 className="text-lg font-bold text-blue-800">Solution Type</h3>
                      </div>
                      <p className="text-blue-700 font-medium">{currentProject.solutionVertical}</p>
                      <p className="text-blue-600 text-sm mt-1">Tech Stack: {currentProject.techStack}</p>
                    </div>
                  )}

                  {/* Skills */}
                  {currentProject.skills && (
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <Award className="w-5 h-5 text-blue-600" />
                        Core Skills
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {currentProject.skills.map(skill => (
                          <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Impact Areas */}
                  {currentProject.impactType && (
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3">Impact Areas</h3>
                      <div className="space-y-2">
                        {currentProject.impactType.map(impact => (
                          <div key={impact} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                            {getImpactIcon(impact)}
                            <span className="text-gray-700 font-medium">{impact}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Center Column - Key Metrics */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    Key Results
                  </h3>
                  {currentProject.results?.primaryMetrics && (
                    <div className="space-y-4">
                      {currentProject.results.primaryMetrics.slice(0, 4).map((metric, index) => (
                        <div key={index} className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
                          <div className="text-2xl font-bold text-green-800 mb-1">{metric.metric}</div>
                          <div className="text-sm text-green-700">{metric.description}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right Column - Interactive Elements */}
                <div className="space-y-4">
                  {/* Screenshot and Marketing Links */}
                  <ScreenshotButton 
                    caseStudyId={currentProject.id} 
                    onClick={() => setShowScreenshotModal(true)}
                  />

                  {currentProject.marketingLink && (
                    <a
                      href={currentProject.marketingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-green-50 hover:bg-green-100 border border-green-200 rounded-xl p-4 text-left transition-colors group block"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <ExternalLink className="w-5 h-5 text-green-600" />
                          <div>
                            <h4 className="font-bold text-green-800">Marketing Page</h4>
                            <p className="text-sm text-green-600">View public information</p>
                          </div>
                        </div>
                        <div className="text-green-600 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      </div>
                    </a>
                  )}

                  {/* Interactive Cards */}
                  {currentProject.learnings && (
                    <button
                      onClick={() => setActiveDrawer(activeDrawer === 'learnings' ? null : 'learnings')}
                      className="w-full bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-xl p-4 text-left transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Lightbulb className="w-5 h-5 text-purple-600" />
                          <div>
                            <h4 className="font-bold text-purple-800">Key Learnings</h4>
                            <p className="text-sm text-purple-600">{currentProject.learnings.length} insights</p>
                          </div>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-purple-600 transition-transform ${activeDrawer === 'learnings' ? 'rotate-180' : ''}`} />
                      </div>
                    </button>
                  )}

                  {currentProject.approach && (
                    <button
                      onClick={() => setActiveDrawer(activeDrawer === 'approach' ? null : 'approach')}
                      className="w-full bg-orange-50 hover:bg-orange-100 border border-orange-200 rounded-xl p-4 text-left transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Wrench className="w-5 h-5 text-orange-600" />
                          <div>
                            <h4 className="font-bold text-orange-800">Approach</h4>
                            <p className="text-sm text-orange-600">{currentProject.approach.methodology?.length || 0} methods</p>
                          </div>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-orange-600 transition-transform ${activeDrawer === 'approach' ? 'rotate-180' : ''}`} />
                      </div>
                    </button>
                  )}

                  {currentProject.results?.businessImpact && (
                    <button
                      onClick={() => setActiveDrawer(activeDrawer === 'impact' ? null : 'impact')}
                      className="w-full bg-green-50 hover:bg-green-100 border border-green-200 rounded-xl p-4 text-left transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <MessageCircle className="w-5 h-5 text-green-600" />
                          <div>
                            <h4 className="font-bold text-green-800">Business Impact</h4>
                            <p className="text-sm text-green-600">Full story</p>
                          </div>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-green-600 transition-transform ${activeDrawer === 'impact' ? 'rotate-180' : ''}`} />
                      </div>
                    </button>
                  )}

                  {currentProject.technologies && (
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <Code className="w-4 h-4" />
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {currentProject.technologies.slice(0, 6).map(tech => (
                          <span key={tech} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Summary */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
                  {currentProject.heroDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Drawer Overlay */}
      {activeDrawer && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setActiveDrawer(null)}>
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-xl font-bold">
                {activeDrawer === 'learnings' && 'Key Learnings'}
                {activeDrawer === 'approach' && 'Approach & Methodology'}
                {activeDrawer === 'impact' && 'Business Impact & Feedback'}
              </h3>
              <button onClick={() => setActiveDrawer(null)} className="p-2 hover:bg-gray-100 rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              {activeDrawer === 'learnings' && currentProject.learnings && (
                <ul className="space-y-3">
                  {currentProject.learnings.map((learning, index) => (
                    <li key={index} className="flex gap-3">
                      <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{learning}</p>
                    </li>
                  ))}
                </ul>
              )}
              
              {activeDrawer === 'approach' && currentProject.approach && (
                <div className="space-y-4">
                  <p className="text-gray-700">{currentProject.approach.description}</p>
                  {currentProject.approach.methodology && (
                    <div>
                      <h4 className="font-bold text-gray-800 mb-3">Methodology</h4>
                      <ul className="space-y-2">
                        {currentProject.approach.methodology.map((method, index) => (
                          <li key={index} className="flex gap-3">
                            <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                              {index + 1}
                            </div>
                            <p className="text-gray-700">{method}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
              
              {activeDrawer === 'impact' && currentProject.results && (
                <div className="space-y-4">
                  {currentProject.results.businessImpact && (
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Business Impact</h4>
                      <p className="text-gray-700">{currentProject.results.businessImpact}</p>
                    </div>
                  )}
                  {currentProject.results.customerFeedback && (
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Customer Feedback</h4>
                      <p className="text-gray-700 italic">&ldquo;{currentProject.results.customerFeedback}&rdquo;</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Screenshot Modal */}
      <ScreenshotModal
        isOpen={showScreenshotModal}
        onClose={() => setShowScreenshotModal(false)}
        password={currentProject.screenshots?.password || currentProject.company.toLowerCase().replace(/\s+/g, '')}
        caseStudyId={currentProject.id}
        marketingLink={currentProject.marketingLink}
      />

      {/* CTA Footer */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to discuss your next challenge?</h2>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
          >
            <TrendingUp className="w-4 h-4" />
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
}