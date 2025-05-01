'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, FileText, Mail, ChevronRight } from 'lucide-react';

// Import JSON data
import profileData from '@/data/profile.json';
import experienceData from '@/data/experience.json';
import skillsData from '@/data/skills.json';
import projectsData from '@/data/projects.json';

export default function Home() {
  // Get latest job
  const latestJob = experienceData.experience[0];
  
  // Get top featured projects (first 3)
  const featuredProjects = projectsData.projects.slice(0, 3);

  // For featured skills section
  const [activeSkillCategory, setActiveSkillCategory] = useState('product');
  
  // Get featured skills (top 3 skills from selected category)
  const getFeaturedSkills = () => {
    const category = skillsData.categories.find(cat => cat.id === activeSkillCategory);
    if (!category) return [];
    
    // Sort by level and take top 3
    return [...category.skills].sort((a, b) => b.level - a.level).slice(0, 3);
  };

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
        
        <div className="relative z-10 text-center px-6 max-w-3xl flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{profileData.basics.name}</h1>
          <p className="text-xl md:text-2xl font-light text-white/90 mb-8">Outcome-Driven Product Leader</p>
          <p className="text-lg text-white/80 mb-10 leading-relaxed">
            I transform business objectives into customer-centered solutions that create measurable impact. 
            My approach focuses on aligning stakeholder goals with user needs to build products that deliver genuine value, 
            not just features.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
            <Link href="/about" className="px-8 py-3 bg-white text-blue-700 rounded-full font-medium hover:bg-blue-50 transition-colors shadow-lg">
              My Approach
            </Link>
            <Link href="/contact" className="px-8 py-3 border border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors">
              Start a Conversation
            </Link>
          </div>
          
          <div className="animate-bounce mt-8">
            <ArrowDown className="w-6 h-6 text-white" />
          </div>
        </div>
      </section>

      {/* Value-Based Philosophy */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          {/* Updated header styling */}
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600">
            Value-Driven Approach
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
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Outcomes Over Outputs</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Based in {profileData.basics.location}, I specialize in creating strategic alignment between business goals and customer needs. 
                I focus on outcomes—what actually changes for users and stakeholders—rather than output-driven metrics or feature checklists.
              </p>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-3">My Value Principles</h4>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
                  </div>
                  <span className="text-gray-700">Aligning customer success with business objectives to create sustainable value</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
                  </div>
                  <span className="text-gray-700">Measuring impact through operational improvements and customer outcomes, not feature delivery</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
                  </div>
                  <span className="text-gray-700">Creating adaptive roadmaps that prioritize value creation over rigid feature schedules</span>
                </li>
              </ul>
              
              <Link href="/about" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                Explore My Methodology <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Experience Preview */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            {/* Updated header styling */}
            <h2 className="text-3xl font-bold mb-4 text-gray-900 relative pb-4 inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:w-full after:h-1 after:bg-blue-600">
              Value Creation in Action
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              How I&apos;m currently driving measurable impact and business outcomes
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
                In my current role, I lead customer-centered initiatives that deliver quantifiable business value. 
                By focusing on strategic outcomes rather than just shipping features, I&apos;ve helped transform how 
                the organization aligns product development with customer success metrics.
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Business Outcomes</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-green-600"></div>
                    </div>
                    <span className="text-gray-700">Increased customer retention by 25% through value-driven product enhancements targeted at solving core user pain points</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-green-600"></div>
                    </div>
                    <span className="text-gray-700">Reduced operational costs by 30% by aligning development priorities with customer success metrics and business value</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-green-600"></div>
                    </div>
                    <span className="text-gray-700">Established outcome-based success metrics that created strategic alignment between engineering, design, and business teams</span>
                  </li>
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
                  See My Value Creation History <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Competencies */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            {/* Updated header styling */}
            <h2 className="text-3xl font-bold mb-4 text-gray-900 relative pb-4 inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:w-full after:h-1 after:bg-blue-600">
              Strategic Competencies
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              My ability to transform business objectives into customer value is built on a foundation of skills that 
              bridge strategy, execution, and measurement.
            </p>
          </div>
          
          {/* Skill category tabs */}
          <div className="flex flex-wrap justify-center mb-10">
            {skillsData.categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveSkillCategory(category.id)}
                className={`px-4 py-2 m-2 rounded-full transition-colors ${
                  activeSkillCategory === category.id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Featured skills cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {getFeaturedSkills().map(skill => (
              <div key={skill.name} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
                  <span className="text-sm font-medium px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                    {skill.level}%
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{skill.description}</p>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-1">
                  <div 
                    className="bg-blue-600 h-1.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/skills" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
              Explore My Complete Skillset <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Showcase */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            {/* Updated header styling */}
            <h2 className="text-3xl font-bold mb-4 text-gray-900 relative pb-4 inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:w-full after:h-1 after:bg-blue-600">
              Outcome-Driven Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Projects where I&apos;ve aligned business goals with customer success to create measurable impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image 
                    src={project.image || `/images/project-placeholder-${index + 1}.jpg`}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-blue-600 mb-3 text-sm">{project.company} · {project.period}</p>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {/* Replace with outcome-focused descriptions */}
                    {index === 0 ? 
                      "Created 40% efficiency improvements by aligning customer workflows with business processes, resulting in measurable ROI for both customers and the organization." :
                      index === 1 ?
                      "Turned customer pain points into a 35% revenue growth opportunity by shifting from feature-based to outcome-based product development." :
                      "Established a value-based product strategy that increased customer success metrics by 45% while reducing development cycles by 30%."
                    }
                  </p>
                  <Link href={`/projects#project-${project.id}`} className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                    View Business Impact <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/projects" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
              See All Value-Driven Solutions <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Value Partnership */}
      <section className="py-16 px-6 bg-blue-700 text-white">
        <div className="container mx-auto max-w-5xl text-center">
          {/* Updated header styling - lighter underline for contrast on dark background */}
          <h2 className="text-3xl font-bold mb-6 relative pb-4 inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:w-full after:h-1 after:bg-blue-300">
            Creating Value Together
          </h2>
          <p className="text-blue-100 mb-10 max-w-xl mx-auto">
            Let&apos;s discuss how my outcome-based approach can help transform your business objectives 
            into solutions that deliver measurable value for both your customers and stakeholders.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact"
              className="px-6 py-3 bg-white text-blue-700 hover:bg-blue-50 rounded-lg transition-colors flex items-center shadow-md"
            >
              <Mail className="w-5 h-5 mr-2" /> Start a Value Conversation
            </Link>
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white hover:bg-white/10 rounded-lg transition-colors flex items-center"
            >
              <FileText className="w-5 h-5 mr-2" /> View My Impact History
            </a>
          </div>
        </div>
      </section>
    </>
  );
}