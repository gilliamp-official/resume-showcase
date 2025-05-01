import React, { useState } from 'react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Cell
} from 'recharts';
import { motion } from 'framer-motion';
import skillsData from '@/data/skills.json';
import { FaCode, FaChartLine, FaPalette, FaUsers, FaBriefcase, FaStar, FaFilter, FaSearchPlus } from 'react-icons/fa';

const SkillsVisualization = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [viewMode, setViewMode] = useState('categories'); // categories, metrics, achievements
  const [showAllAchievements, setShowAllAchievements] = useState(false);

  // Icon mapping for categories
  const categoryIcons = {
    product: <FaChartLine className="text-blue-500 text-xl" />,
    technical: <FaCode className="text-green-500 text-xl" />,
    design: <FaPalette className="text-purple-500 text-xl" />,
    leadership: <FaUsers className="text-red-500 text-xl" />,
    business: <FaBriefcase className="text-orange-500 text-xl" />,
    soft: <FaStar className="text-yellow-500 text-xl" />
  };

  // Color mapping for categories
  const categoryColors = {
    product: '#3b82f6',
    technical: '#22c55e',
    design: '#a855f7',
    leadership: '#ef4444',
    business: '#f97316',
    soft: '#eab308'
  };

  // Group top skills for radar chart
  const getTopSkillsForRadar = () => {
    let allSkills = [];
    
    skillsData.categories.forEach(category => {
      category.skills.forEach(skill => {
        if (skill.level >= 85) { // Only include high-proficiency skills
          allSkills.push({
            name: skill.name,
            level: skill.level,
            category: category.id
          });
        }
      });
    });
    
    // Sort by level and take top 8
    return allSkills
      .sort((a, b) => b.level - a.level)
      .slice(0, 8)
      .map(skill => ({
        subject: skill.name,
        A: skill.level,
        fullMark: 100,
        category: skill.category
      }));
  };

  // Filter skills based on active category
  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return skillsData.categories;
    }
    return skillsData.categories.filter(category => category.id === activeCategory);
  };

  // Get skills grouped by business value metrics
  const getBusinessValueSkills = () => {
    const metrics = [
      { 
        id: 'revenue', 
        name: 'Revenue Generation', 
        description: 'Skills that directly contribute to revenue growth',
        skills: []
      },
      { 
        id: 'efficiency', 
        name: 'Operational Efficiency', 
        description: 'Skills that improve processes and reduce costs',
        skills: []
      },
      { 
        id: 'experience', 
        name: 'User Experience', 
        description: 'Skills that enhance customer satisfaction and adoption',
        skills: []
      },
      { 
        id: 'innovation', 
        name: 'Technical Innovation', 
        description: 'Skills that drive technical advancement and differentiation',
        skills: []
      }
    ];
    
    // Map skills to metrics based on keywords and achievements
    skillsData.categories.forEach(category => {
      category.skills.forEach(skill => {
        // Revenue generation skills
        if (skill.keywords && skill.keywords.some(k => ['Revenue', 'Monetization', 'Sales', 'Growth'].some(term => k.includes(term))) ||
            (skill.achievements && skill.achievements.some(a => a.includes('revenue') || a.includes('$')))) {
          metrics[0].skills.push({...skill, category: category.id});
        }
        
        // Efficiency skills
        if (skill.keywords && skill.keywords.some(k => ['Operations', 'Process', 'Efficiency', 'Optimization'].some(term => k.includes(term))) ||
            (skill.achievements && skill.achievements.some(a => a.includes('reduced') || a.includes('improved') || a.includes('efficiency')))) {
          metrics[1].skills.push({...skill, category: category.id});
        }
        
        // User experience skills
        if (skill.keywords && skill.keywords.some(k => ['User', 'Experience', 'Design', 'Customer'].some(term => k.includes(term))) ||
            (skill.achievements && skill.achievements.some(a => a.includes('customer') || a.includes('user') || a.includes('satisfaction')))) {
          metrics[2].skills.push({...skill, category: category.id});
        }
        
        // Technical innovation skills
        if (skill.keywords && skill.keywords.some(k => ['AI', 'Machine Learning', 'Technical', 'Innovation', 'Development'].some(term => k.includes(term))) ||
            (skill.achievements && skill.achievements.some(a => a.includes('AI') || a.includes('technical') || a.includes('developed')))) {
          metrics[3].skills.push({...skill, category: category.id});
        }
      });
    });
    
    return metrics;
  };

  // Generate skill detail view for selected skill
  const renderSkillDetail = () => {
    if (!selectedSkill) return null;
    
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-lg p-6 mt-8"
      >
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-bold mb-2">{selectedSkill.name}</h3>
            <div className="text-sm text-gray-500 mb-4 flex items-center">
              {categoryIcons[selectedSkill.category]}
              <span className="ml-2">{skillsData.categories.find(c => c.id === selectedSkill.category)?.name}</span>
            </div>
          </div>
          <button 
            onClick={() => setSelectedSkill(null)}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex items-center mb-6">
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div 
              className="h-4 rounded-full" 
              style={{ 
                width: `${selectedSkill.level}%`,
                backgroundColor: categoryColors[selectedSkill.category] 
              }}
            ></div>
          </div>
          <span className="ml-4 font-bold">{selectedSkill.level}/100</span>
        </div>
        
        <p className="text-gray-700 mb-6">{selectedSkill.description}</p>
        
        {selectedSkill.achievements && (
          <div className="mb-6 bg-gray-50 p-4 rounded-lg border border-gray-100">
            <h4 className="text-lg font-semibold mb-3">Key Achievements</h4>
            <ul className="list-disc pl-5 space-y-2">
              {selectedSkill.achievements.slice(0, showAllAchievements ? selectedSkill.achievements.length : 3).map((achievement, idx) => (
                <li key={idx} className="text-gray-700">{achievement}</li>
              ))}
            </ul>
            {selectedSkill.achievements.length > 3 && (
              <button 
                onClick={() => setShowAllAchievements(!showAllAchievements)} 
                className="mt-3 text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                {showAllAchievements ? 'Show Less' : `Show ${selectedSkill.achievements.length - 3} More`}
              </button>
            )}
          </div>
        )}
        
        {selectedSkill.keywords && (
          <div className="flex flex-wrap gap-2 mb-6">
            {selectedSkill.keywords.map((keyword, idx) => (
              <span 
                key={idx}
                className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
              >
                {keyword}
              </span>
            ))}
          </div>
        )}
        
        {selectedSkill.usedAt && (
          <div className="mt-4 bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h4 className="text-lg font-semibold mb-3">Applied At</h4>
            <div className="flex flex-wrap gap-2">
              {selectedSkill.usedAt.map((company, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <div className="mt-6 flex justify-center">
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
            onClick={() => {
              // This would link to related projects
              // For demo, just close the detail view
              setSelectedSkill(null);
            }}
          >
            View Related Projects
          </button>
        </div>
      </motion.div>
    );
  };

  // Render view mode toggle
  const renderViewModeToggle = () => {
    return (
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm">
          <button
            type="button"
            className={`py-2 px-4 text-sm font-medium rounded-l-lg border ${
              viewMode === 'categories'
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
            onClick={() => setViewMode('categories')}
          >
            <FaFilter className="inline mr-2" />
            By Category
          </button>
          <button
            type="button"
            className={`py-2 px-4 text-sm font-medium border-t border-b ${
              viewMode === 'metrics'
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
            onClick={() => setViewMode('metrics')}
          >
            <FaChartLine className="inline mr-2" />
            By Business Impact
          </button>
          <button
            type="button"
            className={`py-2 px-4 text-sm font-medium rounded-r-lg border ${
              viewMode === 'achievements'
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
            onClick={() => setViewMode('achievements')}
          >
            <FaSearchPlus className="inline mr-2" />
            Top Skills
          </button>
        </div>
      </div>
    );
  };

  // Render category-based skills view
  const renderCategoryView = () => {
    const filteredCategories = getFilteredSkills();
    
    return (
      <>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <button
            className={`px-4 py-2 rounded-full ${
              activeCategory === 'all'
                ? 'bg-gray-800 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            onClick={() => setActiveCategory('all')}
          >
            All Skills
          </button>
          {skillsData.categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full flex items-center ${
                activeCategory === category.id
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="mr-2">{categoryIcons[category.id]}</span>
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div 
                className="p-4 text-white font-bold text-lg flex items-center"
                style={{ backgroundColor: categoryColors[category.id] }}
              >
                <span className="mr-2">{categoryIcons[category.id]}</span>
                {category.name}
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="cursor-pointer" onClick={() => setSelectedSkill({...skill, category: category.id})}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-800">{skill.name}</span>
                        <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="h-2.5 rounded-full"
                          style={{
                            width: `${skill.level}%`,
                            backgroundColor: categoryColors[category.id],
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </>
    );
  };

  // Render business metrics view
  const renderBusinessMetricsView = () => {
    const businessMetrics = getBusinessValueSkills();
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {businessMetrics.map((metric) => (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-4 bg-gray-800 text-white font-bold text-lg">
              {metric.name}
            </div>
            <div className="p-4">
              <p className="text-gray-600 mb-4">{metric.description}</p>
              <div className="space-y-3">
                {metric.skills.slice(0, 5).map((skill) => (
                  <div 
                    key={skill.name} 
                    className="p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    onClick={() => setSelectedSkill(skill)}
                  >
                    <div className="flex items-center">
                      <div className="mr-3">
                        {categoryIcons[skill.category]}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">{skill.name}</h4>
                        <p className="text-sm text-gray-600">
                          {skill.description.substring(0, 80)}
                          {skill.description.length > 80 ? '...' : ''}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    );
  };

  // Render top skills with achievements view
  const renderTopSkillsView = () => {
    const topSkillsData = getTopSkillsForRadar();
    
    // Prepare data for bar chart
    const barChartData = topSkillsData.map(item => ({
      name: item.subject,
      Proficiency: item.A,
      category: item.category
    }));
    
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-4"
        >
          <h3 className="text-xl font-bold mb-4 text-center text-gray-800">Top Skills Radar</h3>
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart outerRadius={150} data={topSkillsData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#1F2937', fontSize: 12 }} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#4B5563' }} />
              <Radar
                name="Skill Level"
                dataKey="A"
                stroke="#2563eb"
                fill="#3b82f6"
                fillOpacity={0.6}
              />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-4"
        >
          <h3 className="text-xl font-bold mb-4 text-center text-gray-800">Proficiency Levels</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={barChartData}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 60, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} tick={{ fill: '#4B5563' }} />
              <YAxis type="category" dataKey="name" width={150} tick={{ fill: '#1F2937', fontSize: 12 }} />
              <Tooltip />
              <Bar
                dataKey="Proficiency"
                barSize={20}
                radius={[0, 4, 4, 0]}
              >
                {barChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={categoryColors[entry.category]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    );
  };

  // Main render
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Professional Skills</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Combining technical expertise and business acumen to drive product success and innovation
        </p>
      </div>
      
      {renderViewModeToggle()}
      
      <div className="mb-12">
        {viewMode === 'categories' && renderCategoryView()}
        {viewMode === 'metrics' && renderBusinessMetricsView()}
        {viewMode === 'achievements' && renderTopSkillsView()}
      </div>
      
      {selectedSkill && renderSkillDetail()}
      
      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Tools & Technologies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {skillsData.tools && skillsData.tools.map((toolCategory) => (
            <div key={toolCategory.category} className="bg-white rounded-lg shadow p-4">
              <h4 className="font-bold mb-3 text-gray-800">{toolCategory.category}</h4>
              <div className="flex flex-wrap gap-2">
                {toolCategory.items.map((tool, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.certifications && skillsData.certifications.map((cert) => (
            <div key={cert.name} className="bg-white rounded-lg shadow p-4">
              <h4 className="font-bold mb-1 text-gray-800">{cert.name}</h4>
              <p className="text-gray-600 text-sm mb-2">
                {cert.issuer} | {cert.date}
              </p>
              <p className="text-gray-700">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsVisualization;