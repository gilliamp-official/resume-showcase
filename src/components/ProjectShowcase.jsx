import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ExternalLink, X } from 'lucide-react';

// The projects data will be passed as props rather than imported directly

const ProjectShowcase = ({ projects }) => {
  const [activeProject, setActiveProject] = useState(null);
  const [filterTag, setFilterTag] = useState(null);
  const modalRef = useRef(null);

  // All unique skills/technologies for filtering
  const allTags = [...new Set(
    projects.flatMap(project => [...(project.skills || []), ...(project.technologies || [])])
  )].sort();

  // Filtered projects
  const filteredProjects = filterTag 
    ? projects.filter(project => 
        (project.skills && project.skills.includes(filterTag)) || 
        (project.technologies && project.technologies.includes(filterTag))
      )
    : projects;

  // Modal functions
  const openModal = (project) => {
    setActiveProject(project);
    document.body.classList.add('overflow-hidden');
  };

  const closeModal = () => {
    setActiveProject(null);
    document.body.classList.remove('overflow-hidden');
  };

  // Close modal if clicked outside content
  const handleModalClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  return (
    <div>
      {/* Filter tags */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <button
            onClick={() => setFilterTag(null)}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              filterTag === null 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Projects
          </button>
          
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilterTag(tag)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                filterTag === tag 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        
        {filterTag && (
          <p className="text-center text-gray-600">
            Showing {filteredProjects.length} projects using <span className="font-medium">{filterTag}</span>
            <button 
              onClick={() => setFilterTag(null)}
              className="ml-2 text-blue-600 hover:text-blue-800"
            >
              Clear filter
            </button>
          </p>
        )}
      </div>
      
      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <div 
            key={project.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => openModal(project)}
          >
            <div className="relative h-48">
              <Image 
                src={project.image || `/images/project-placeholder.jpg`}
                alt={project.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-blue-600 mb-3 text-sm">{project.company} · {project.period}</p>
              <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
              
              {/* Technologies/Skills tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies && project.technologies.slice(0, 3).map(tech => (
                  <span key={tech} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">
                    {tech}
                  </span>
                ))}
                {project.technologies && project.technologies.length > 3 && (
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>
              
              {/* Animated view details button */}
              <div className="group flex items-center text-blue-600 hover:text-blue-800 font-medium">
                View Details 
                <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Project detail modal */}
      {activeProject && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={handleModalClick}
        >
          <div 
            ref={modalRef}
            className="bg-white rounded-lg max-w-5xl max-h-[90vh] w-full overflow-y-auto relative"
          >
            {/* Close button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 z-10"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Project header */}
            <div className="relative h-64 md:h-80">
              <Image 
                src={activeProject.image || `/images/project-placeholder.jpg`}
                alt={activeProject.title}
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">{activeProject.title}</h2>
                <p className="text-white/90">{activeProject.company} · {activeProject.period}</p>
              </div>
            </div>
            
            {/* Project content */}
            <div className="p-6 md:p-8">
              {/* Description */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Project Overview</h3>
                <p className="text-gray-700 mb-4">{activeProject.longDescription || activeProject.description}</p>
                
                <div className="text-gray-700 mb-4">
                  <span className="font-medium">Role:</span> {activeProject.role}
                </div>
              </div>
              
              {/* Challenges and achievements */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Challenges */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Challenges</h3>
                  <ul className="space-y-2">
                    {activeProject.challenges && activeProject.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-red-600"></div>
                        </div>
                        <span className="text-gray-700">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Achievements */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Achievements</h3>
                  <ul className="space-y-2">
                    {activeProject.achievements && activeProject.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-green-600"></div>
                        </div>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Skills and technologies */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Skills */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Skills Applied</h3>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.skills && activeProject.skills.map(skill => (
                      <span 
                        key={skill} 
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Technologies */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies && activeProject.technologies.map(tech => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* External links */}
              {activeProject.links && activeProject.links.length > 0 && (
                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Project Links</h3>
                  <div className="flex flex-wrap gap-3">
                    {activeProject.links.map(link => (
                      <a 
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        {link.text} <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Navigation between projects */}
              <div className="border-t border-gray-200 pt-6 mt-6 flex justify-between">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = projects.findIndex(p => p.id === activeProject.id);
                    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
                    setActiveProject(projects[prevIndex]);
                  }}
                  className="flex items-center text-blue-600 hover:text-blue-800"
                >
                  <ChevronLeft className="w-5 h-5 mr-1" /> Previous Project
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = projects.findIndex(p => p.id === activeProject.id);
                    const nextIndex = (currentIndex + 1) % projects.length;
                    setActiveProject(projects[nextIndex]);
                  }}
                  className="flex items-center text-blue-600 hover:text-blue-800"
                >
                  Next Project <ChevronRight className="w-5 h-5 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectShowcase;