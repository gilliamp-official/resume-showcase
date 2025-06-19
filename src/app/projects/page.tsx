'use client'
import React, { useState } from 'react';
import type { JSX } from 'react';
import { ChevronLeft, ChevronRight, DollarSign, Zap, Users, Brain, Target, TrendingUp } from 'lucide-react';
import caseStudiesData from '@/data/projects.json';

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
  impactType?: string[];
  challenge?: CaseStudySection;
  approach?: CaseStudySection;
  solution?: CaseStudySection;
  results?: CaseStudyResults;
  learnings?: string[];
  technologies?: string[];
  featured?: boolean;
}

interface FilterOptions {
  skills?: string[];
  industries?: string[];
  impactTypes?: string[];
}

interface Summary {
  totalRevenue?: string;
  totalProjects?: string | number;
  aiMlProjects?: string | number;
  yearsExperience?: string;
}

interface ProjectsData {
  caseStudies: CaseStudy[];
  filterOptions?: FilterOptions;
  summary?: Summary;
}

// Type assertion for imported JSON data  
const typedCaseStudiesData = caseStudiesData as unknown as ProjectsData;

export default function ProjectsPage(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const caseStudies: CaseStudy[] = typedCaseStudiesData?.caseStudies || [];

  const nextSlide = (): void => {
    setCurrentSlide(prev => (prev + 1) % caseStudies.length);
  };

  const prevSlide = (): void => {
    setCurrentSlide(prev => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  const getImpactIcon = (impactType: string): JSX.Element => {
    switch (impactType) {
      case 'Revenue Generation': 
        return <DollarSign className="w-4 h-4" />;
      case 'Operational Efficiency': 
        return <Zap className="w-4 h-4" />;
      case 'Customer Experience': 
        return <Users className="w-4 h-4" />;
      case 'Strategic Innovation': 
        return <Brain className="w-4 h-4" />;
      default: 
        return <Target className="w-4 h-4" />;
    }
  };

  if (caseStudies.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">No Projects Available</h2>
          <p className="text-gray-600">Check your data configuration.</p>
        </div>
      </div>
    );
  }

  const currentProject: CaseStudy = caseStudies[currentSlide];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Project Case Studies</h1>
          <p className="text-blue-100">AI-driven product solutions delivering measurable impact</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white border-b py-4">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex gap-2">
            {caseStudies.map((_: CaseStudy, index: number) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          <div className="text-sm text-gray-600">
            {currentSlide + 1} of {caseStudies.length}
          </div>
        </div>
      </div>

      {/* Main Content - Slide View */}
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={caseStudies.length <= 1}
            className="absolute -left-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            disabled={caseStudies.length <= 1}
            className="absolute -right-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Project Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 border-b">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {currentProject.company}
                    </span>
                    <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {currentProject.industry}
                    </span>
                    <span className="text-gray-500 text-sm">{currentProject.timeline}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">{currentProject.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">{currentProject.subtitle}</p>
                </div>
                <div className="text-center lg:text-right">
                  <div className="bg-white rounded-lg p-6 shadow-md border border-blue-200">
                    <div className="text-3xl font-bold text-blue-600 mb-1">{currentProject.heroMetric}</div>
                    <div className="text-gray-600 text-sm">Key Impact</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Skills */}
                  {currentProject.skills && (
                    <div>
                      <h3 className="text-lg font-bold text-blue-600 mb-3">Core Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {currentProject.skills.map((skill: string) => (
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
                      <h3 className="text-lg font-bold text-blue-600 mb-3">Impact Areas</h3>
                      <div className="space-y-2">
                        {currentProject.impactType.map((impact: string) => (
                          <div key={impact} className="flex items-center gap-2">
                            {getImpactIcon(impact)}
                            <span className="text-gray-700">{impact}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Key Metrics */}
                  {currentProject.results?.primaryMetrics && (
                    <div>
                      <h3 className="text-lg font-bold text-blue-600 mb-3">Key Results</h3>
                      <div className="space-y-3">
                        {currentProject.results.primaryMetrics.slice(0, 3).map((metric: CaseStudyMetric, index: number) => (
                          <div key={index} className="bg-gray-50 rounded-lg p-4">
                            <div className="text-2xl font-bold text-gray-900">{metric.metric}</div>
                            <div className="text-sm text-gray-600">{metric.description}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Technologies */}
                  {currentProject.technologies && (
                    <div>
                      <h3 className="text-lg font-bold text-blue-600 mb-3">Tech Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {currentProject.technologies.slice(0, 6).map((tech: string) => (
                          <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">
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
                <p className="text-gray-700 leading-relaxed">{currentProject.heroDescription}</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-600 text-white py-12">
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