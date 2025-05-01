import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp, Building, MapPin } from 'lucide-react';

const CareerTimeline = ({ experience }) => {
  // State to track which experience items are expanded
  const [expandedItems, setExpandedItems] = useState({});

  // Toggle expanded state for an item
  const toggleItem = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  // Reordering job display for mobile
  const renderMobileLogo = (job) => (
    <div className="md:hidden flex justify-center mb-4">
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-lg overflow-hidden border-3 sm:border-4 border-white bg-white flex items-center justify-center">
        {job.logo ? (
          <Image 
            src={`/logos/${job.logo}`} 
            alt={`${job.company} logo`}
            fill
            style={{ objectFit: 'contain', padding: '5px' }}
          />
        ) : (
          <div className="text-base sm:text-lg font-bold text-blue-600">
            {job.company.split(' ').map(word => word[0]).join('')}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="relative">
      {/* Timeline center line */}
      <div className="absolute left-4 sm:left-6 md:left-1/2 h-full w-0.5 bg-blue-200 transform -translate-x-1/2 md:translate-x-0"></div>
      
      <div className="space-y-12 md:space-y-0">
        {experience.map((job, index) => {
          // Determine if this is an even (left) or odd (right) item
          const isEven = index % 2 === 0;
          
          return (
            <div 
              key={job.id} 
              className="md:flex md:items-center md:justify-center md:mb-16 relative"
            >
              {/* Mobile logo at the top of each experience on mobile */}
              {renderMobileLogo(job)}
              
              {/* Timeline dot - adjusted for better mobile positioning */}
              <div className="absolute left-4 sm:left-6 md:left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-full transform -translate-x-1/2 z-20"></div>
              
              {/* Left column - Either logo (even rows) or content (odd rows) */}
              <div className={`md:w-1/2 md:pr-8 relative ${isEven ? 'md:flex md:justify-end' : 'md:text-right'}`}>
                {isEven ? (
                  /* Content card on left side */
                  <div className="ml-8 sm:ml-12 md:ml-0 md:max-w-lg rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow bg-white z-10">
                    <div className="p-4 sm:p-6">
                      {/* Job Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">{job.title}</h3>
                      
                      {/* Company */}
                      <div className="flex items-center mb-2 text-blue-600 font-medium">
                        <Building className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                        <span className="text-sm sm:text-base">{job.company}</span>
                      </div>
                      
                      {/* Location */}
                      <div className="flex flex-wrap items-center mb-2 text-gray-600">
                        <div className="flex items-center mr-2">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                          <span className="text-sm sm:text-base">{job.location}</span>
                        </div>
                        <span className="mt-1 sm:mt-0 px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">{job.type}</span>
                      </div>
                      
                      {/* Date Range */}
                      <div className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm">
                        {job.startDate} - {job.endDate}
                      </div>
                      
                      {/* Brief description */}
                      <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">{job.description}</p>
                      
                      {/* Expand/collapse button */}
                      <button 
                        onClick={() => toggleItem(job.id)}
                        className="flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base"
                      >
                        {expandedItems[job.id] ? (
                          <>
                            <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1" /> 
                            Show Less
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 mr-1" /> 
                            Show More
                          </>
                        )}
                      </button>
                      
                      {/* Expanded content */}
                      {expandedItems[job.id] && (
                        <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200 animate-fadeIn">
                          {/* Achievements */}
                          {job.achievements && job.achievements.length > 0 && (
                            <div className="mb-4 sm:mb-6">
                              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">Key Achievements</h4>
                              <ul className="space-y-2">
                                {job.achievements.map((achievement, i) => (
                                  <li key={i} className="flex items-start">
                                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-100 flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-600"></div>
                                    </div>
                                    <span className="text-sm sm:text-base text-gray-700">{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          {/* Skills */}
                          {job.skills && job.skills.length > 0 && (
                            <div>
                              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">Skills Applied</h4>
                              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                {job.skills.map((skill, i) => (
                                  <span key={i} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-100 text-blue-800 text-xs sm:text-sm rounded-full">
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  /* Logo on left side for odd rows */
                  <div className="hidden md:flex md:justify-end md:items-center">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full shadow-lg overflow-hidden border-4 border-white bg-white flex items-center justify-center">
                      {job.logo ? (
                        <Image 
                          src={`/logos/${job.logo}`} 
                          alt={`${job.company} logo`}
                          fill
                          style={{ objectFit: 'contain', padding: '6px' }}
                        />
                      ) : (
                        <div className="text-base sm:text-lg md:text-xl font-bold text-blue-600">
                          {job.company.split(' ').map(word => word[0]).join('')}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Right column - Either logo (odd rows) or content (even rows) */}
              <div className={`md:w-1/2 md:pl-8 ${!isEven ? '' : 'md:flex md:justify-start'}`}>
                {!isEven ? (
                  /* Content card on right side */
                  <div className="ml-8 sm:ml-12 md:ml-0 md:max-w-lg rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow bg-white z-10">
                    <div className="p-4 sm:p-6">
                      {/* Job Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">{job.title}</h3>
                      
                      {/* Company */}
                      <div className="flex items-center mb-2 text-blue-600 font-medium">
                        <Building className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                        <span className="text-sm sm:text-base">{job.company}</span>
                      </div>
                      
                      {/* Location */}
                      <div className="flex flex-wrap items-center mb-2 text-gray-600">
                        <div className="flex items-center mr-2">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                          <span className="text-sm sm:text-base">{job.location}</span>
                        </div>
                        <span className="mt-1 sm:mt-0 px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">{job.type}</span>
                      </div>
                      
                      {/* Date Range */}
                      <div className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm">
                        {job.startDate} - {job.endDate}
                      </div>
                      
                      {/* Brief description */}
                      <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">{job.description}</p>
                      
                      {/* Expand/collapse button */}
                      <button 
                        onClick={() => toggleItem(job.id)}
                        className="flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base"
                      >
                        {expandedItems[job.id] ? (
                          <>
                            <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1" /> 
                            Show Less
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 mr-1" /> 
                            Show More
                          </>
                        )}
                      </button>
                      
                      {/* Expanded content */}
                      {expandedItems[job.id] && (
                        <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200 animate-fadeIn">
                          {/* Achievements */}
                          {job.achievements && job.achievements.length > 0 && (
                            <div className="mb-4 sm:mb-6">
                              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">Key Achievements</h4>
                              <ul className="space-y-2">
                                {job.achievements.map((achievement, i) => (
                                  <li key={i} className="flex items-start">
                                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-100 flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-600"></div>
                                    </div>
                                    <span className="text-sm sm:text-base text-gray-700">{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          {/* Skills */}
                          {job.skills && job.skills.length > 0 && (
                            <div>
                              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">Skills Applied</h4>
                              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                {job.skills.map((skill, i) => (
                                  <span key={i} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-100 text-blue-800 text-xs sm:text-sm rounded-full">
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  /* Logo on right side for even rows */
                  <div className="hidden md:flex md:justify-start md:items-center">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full shadow-lg overflow-hidden border-4 border-white bg-white flex items-center justify-center">
                      {job.logo ? (
                        <Image 
                          src={`/logos/${job.logo}`} 
                          alt={`${job.company} logo`}
                          fill
                          style={{ objectFit: 'contain', padding: '6px' }}
                        />
                      ) : (
                        <div className="text-base sm:text-lg md:text-xl font-bold text-blue-600">
                          {job.company.split(' ').map(word => word[0]).join('')}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
              
              {/* This section is now handled by the renderMobileLogo function */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CareerTimeline;