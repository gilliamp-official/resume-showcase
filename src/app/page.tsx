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
          <p className="text-xl md:text-2xl font-light text-white/90 mb-8">{profileData.basics.title}</p>
          <p className="text-lg text-white/80 mb-10 leading-relaxed">{profileData.basics.summary}</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
            <Link href="/about" className="px-8 py-3 bg-white text-blue-700 rounded-full font-medium hover:bg-blue-50 transition-colors shadow-lg">
              Learn More
            </Link>
            <Link href="/contact" className="px-8 py-3 border border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors">
              Get in Touch
            </Link>
          </div>
          
          <div className="animate-bounce mt-8">
            <ArrowDown className="w-6 h-6 text-white" />
          </div>
        </div>
      </section>

      {/* Quick About Preview */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-16">About Me</h2>
          
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
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Product Leader & Innovator</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Based in {profileData.basics.location}, I&apos;m a product leader with a passion for
                building innovative solutions that combine technical excellence with exceptional user experiences.
              </p>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Professional Highlights</h4>
              <ul className="space-y-3 mb-8">
                {profileData.highlights.slice(0, 3).map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
                    </div>
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/about" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                More About Me <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Experience Preview */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Current Role</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A glimpse at my most recent professional experience
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
              
              <p className="text-gray-700 mb-6">{latestJob.description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {latestJob.achievements.slice(0, 3).map((achievement, index) => (
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
                {latestJob.skills.slice(0, 5).map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="text-center">
                <Link href="/experience" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  View Full Experience <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Skills Preview */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Core Competencies</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              My unique combination of skills allows me to bridge the gap between 
              technical implementation, product strategy, and business objectives.
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
              View All Skills <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Highlighting some of my most impactful work
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
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  <Link href={`/projects#project-${project.id}`} className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                    View Details <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/projects" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
              View All Projects <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-blue-700 text-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-6">Let&apos;s Connect</h2>
          <p className="text-blue-100 mb-10 max-w-xl mx-auto">
            Interested in working together or learning more about my experience?
            I&apos;m always open to discussing new projects and opportunities.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact"
              className="px-6 py-3 bg-white text-blue-700 hover:bg-blue-50 rounded-lg transition-colors flex items-center shadow-md"
            >
              <Mail className="w-5 h-5 mr-2" /> Contact Me
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