'use client'

import React, { useState } from 'react';
import skillsData from '@/data/skills.json';

interface Skill {
  name: string;
  level: number;
  description: string;
  usedAt: string[];
  yearsExperience: string;
  achievements: string[];
  category?: string;
}

export default function SkillsPage() {
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  // Color mapping functions
  const getExperienceColor = (experience: string) => {
    switch (experience) {
      case '5+': return 'bg-emerald-600 text-white'; // Green for most experienced
      case '4+': return 'bg-blue-600 text-white'; // Blue for solid experience  
      case '3+': return 'bg-amber-600 text-white'; // Amber for developing
      case '2+': return 'bg-purple-600 text-white'; // Purple for emerging
      default: return 'bg-gray-600 text-white';
    }
  };

  const getCategoryColor = (categoryName: string, isClickable: boolean = false) => {
    const baseColors = {
      'AI & Machine Learning': isClickable ? 'bg-purple-100 text-purple-800 hover:bg-purple-200 cursor-pointer' : 'bg-purple-100 text-purple-800',
      'Product Leadership': isClickable ? 'bg-blue-100 text-blue-800 hover:bg-blue-200 cursor-pointer' : 'bg-blue-100 text-blue-800',
      'Technical Expertise': isClickable ? 'bg-green-100 text-green-800 hover:bg-green-200 cursor-pointer' : 'bg-green-100 text-green-800',
      'Leadership & Operations': isClickable ? 'bg-amber-100 text-amber-800 hover:bg-amber-200 cursor-pointer' : 'bg-amber-100 text-amber-800',
      'Business Acumen': isClickable ? 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200 cursor-pointer' : 'bg-indigo-100 text-indigo-800',
    };
    return baseColors[categoryName as keyof typeof baseColors] || (isClickable ? 'bg-gray-100 text-gray-800 hover:bg-gray-200 cursor-pointer' : 'bg-gray-100 text-gray-800');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Quick reference guide organized by years of experience. Click any category chip to filter.
          </p>
          {categoryFilter && (
            <div className="mt-4">
              <button
                onClick={() => setCategoryFilter(null)}
                className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                ← Show All Skills
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Skills Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Skills Content */}
            <div className="lg:col-span-3">
              {categoryFilter && (
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {categoryFilter} Skills
                  </h2>
                  <p className="text-gray-600">
                    Filtered to show only {categoryFilter} related skills
                  </p>
                </div>
              )}

              {/* Skills List */}
              <div className="mb-8">
            {(() => {
              // Flatten all skills with their experience levels
              const allSkillsWithExperience: Skill[] = skillsData.categories.flatMap(category => 
                category.skills.map(skill => ({
                  ...skill,
                  category: category.name
                } as Skill))
              );

              // Filter by category if a filter is active
              const filteredSkills = categoryFilter 
                ? allSkillsWithExperience.filter(skill => skill.category === categoryFilter)
                : allSkillsWithExperience;

              // Group by experience level
              const experienceGroups = {
                '5+': filteredSkills.filter(skill => skill.yearsExperience === '5+'),
                '4+': filteredSkills.filter(skill => skill.yearsExperience === '4+'),
                '3+': filteredSkills.filter(skill => skill.yearsExperience === '3+'),
                '2+': filteredSkills.filter(skill => skill.yearsExperience === '2+')
              };

              return (
                <div className="space-y-8">
                  {Object.entries(experienceGroups).map(([experience, skills]) => (
                    skills.length > 0 && (
                      <div key={experience} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center gap-3 mb-4">
                          <span className={`${getExperienceColor(experience)} px-3 py-1 rounded-full text-sm font-medium`}>
                            {experience} years
                          </span>
                          <h3 className="text-lg font-bold text-gray-900">
                            {skills.length} skill{skills.length !== 1 ? 's' : ''}
                          </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {skills.map(skill => (
                            <div key={skill.name} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                              <h4 className="text-gray-800 font-medium text-sm mb-2">{skill.name}</h4>
                              <p className="text-gray-600 text-xs leading-relaxed mb-3">{skill.description}</p>
                              <div className="flex justify-start">
                                <button
                                  onClick={() => setCategoryFilter(categoryFilter === skill.category ? null : skill.category || null)}
                                  className={`${getCategoryColor(skill.category || '', true)} px-2 py-1 rounded text-xs font-medium transition-all`}
                                  title={`Click to ${categoryFilter === skill.category ? 'show all' : 'filter by'} ${skill.category}`}
                                >
                                  {skill.category}
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  ))}
                </div>
              );
            })()}
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              {/* Tools & Technologies */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 sticky top-4">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Tools & Technologies</h3>
                
                {(() => {
                  if (!categoryFilter) {
                    // Show all tools when no filter is selected
                    return (
                      <div className="space-y-4">
                        {skillsData.tools.map(toolCategory => (
                          <div key={toolCategory.category}>
                            <h4 className="text-sm font-semibold text-blue-600 mb-2">{toolCategory.category}</h4>
                            <div className="flex flex-wrap gap-1">
                              {toolCategory.items.map(tool => (
                                <span key={tool} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    );
                  } else {
                    // Show relevant tools for the selected category
                    const categoryToolMap: Record<string, string[]> = {
                      'AI & Machine Learning': ['AI & Machine Learning'],
                      'Product Leadership': ['Product Management'],
                      'Technical Expertise': ['Development & APIs', 'Analytics & Data'],
                      'Leadership & Operations': ['Business Tools', 'Product Management'],
                      'Business Acumen': ['Business Tools', 'Analytics & Data']
                    };
                    
                    const relevantToolCategories = categoryToolMap[categoryFilter] || [];
                    const filteredTools = skillsData.tools.filter(toolCategory => 
                      relevantToolCategories.includes(toolCategory.category)
                    );

                    return filteredTools.length > 0 ? (
                      <div className="space-y-4">
                        {filteredTools.map(toolCategory => (
                          <div key={toolCategory.category}>
                            <h4 className="text-sm font-semibold text-blue-600 mb-2">{toolCategory.category}</h4>
                            <div className="flex flex-wrap gap-1">
                              {toolCategory.items.map(tool => (
                                <span key={tool} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center text-gray-500 py-4">
                        <p className="text-sm">No tools mapped to {categoryFilter}</p>
                      </div>
                    );
                  }
                })()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}