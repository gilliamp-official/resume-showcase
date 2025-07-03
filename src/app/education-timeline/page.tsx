'use client'
import React, { useState } from 'react';

// Define TypeScript interfaces for our data structures
interface KeyPoint {
  id: string;
  title: string;
  short: string;
  expanded: string;
}

interface EffectivenessData {
  strengths: string[];
  weaknesses: string[];
}

interface SectionData {
  title: string;
  content: string;
  timeline: string;
  keyPoints: KeyPoint[];
  effectiveness: EffectivenessData;
}

interface SectionsType {
  [key: string]: SectionData;
}

const EducationExplorer: React.FC = () => {
  const [activeSection, setActiveSection] = useState('industrial');
  const [expandedPoints, setExpandedPoints] = useState<{[key: string]: boolean}>({}); 

  const togglePoint = (id: string): void => {
    setExpandedPoints(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const sections: SectionsType = {
    industrial: {
      title: "Industrial Revolution Origins",
      content: "Modern education systems were largely shaped during the Industrial Revolution (1760-1840).",
      timeline: "1760-1840",
      keyPoints: [
        {
          id: "factory",
          title: "Factory Model of Education",
          short: "Schools designed to produce standardized workers",
          expanded: "Schools began to resemble factories, with standardized schedules, bells signaling transitions, and batch processing of students by age. The goal was to create disciplined workers who could follow instructions and function within industrial society."
        },
        {
          id: "prussia",
          title: "Prussian Influence",
          short: "Widespread adoption of the Prussian education system",
          expanded: "The Prussian education system, which emphasized obedience, standardized curriculum, and state control, was widely adopted in the United States and other countries in the 19th century. This system implemented mandatory attendance, specific training for teachers, and standardized testing."
        },
        {
          id: "efficiency",
          title: "Scientific Management",
          short: "Frederick Taylor's efficiency principles applied to education",
          expanded: "By the early 20th century, Frederick Taylor's principles of scientific management were applied to schools, emphasizing efficiency, measurable outcomes, and standardized procedures - reinforcing lecture-based instruction, homework for independent practice, and testing for assessment."
        }
      ],
      effectiveness: {
        strengths: ["Created universal education systems", "Established consistent basic knowledge across populations", "Prepared workers for industrial economy jobs"],
        weaknesses: ["Prioritized conformity over creativity", "Emphasized memorization over critical thinking", "One-size-fits-all approach ignored individual learning needs"]
      }
    },
    standardization: {
      title: "Standardization Movement",
      content: "Throughout the 20th century, education became increasingly standardized.",
      timeline: "1900-1970s",
      keyPoints: [
        {
          id: "testing",
          title: "Rise of Standardized Testing",
          short: "IQ tests and achievement tests became prevalent",
          expanded: "The development of IQ tests in the early 1900s and achievement tests in the mid-20th century reinforced the idea that student learning could be quantitatively measured, leading to greater emphasis on test preparation."
        },
        {
          id: "curriculum",
          title: "Standardized Curriculum",
          short: "Development of uniform curriculum across schools",
          expanded: "The push for standardized curriculum materials and textbooks ensured that schools taught similar content in similar ways, reinforcing lecture-based instruction as the dominant teaching method."
        },
        {
          id: "efficiency2",
          title: "Administrative Progressivism",
          short: "School systems organized for maximum efficiency",
          expanded: "Administrative progressives implemented business-like management approaches to education, creating hierarchical systems with administrators overseeing curriculum and instruction, further reinforcing standardized approaches."
        }
      ],
      effectiveness: {
        strengths: ["Created common educational experiences", "Allowed for comparison across schools and districts", "Established measurable outcomes"],
        weaknesses: ["Narrowed curriculum to testable content", "Reduced teacher autonomy", "Created achievement gaps between different populations"]
      }
    },
    reform: {
      title: "Modern Reform Movements",
      content: "Despite numerous reform movements, the lecture-homework-test model persists.",
      timeline: "1970s-Present",
      keyPoints: [
        {
          id: "alternatives",
          title: "Alternative Approaches",
          short: "Montessori, project-based learning, and other models",
          expanded: "Alternative educational approaches like Montessori, Waldorf, project-based learning, and experiential education have demonstrated success but remain exceptions rather than the norm in public education."
        },
        {
          id: "policy",
          title: "Policy Reinforcement",
          short: "Testing-based accountability strengthened traditional model",
          expanded: "Policies like No Child Left Behind (2001) and subsequent accountability movements increased the emphasis on standardized testing, inadvertently reinforcing lecture-based teaching methods aligned with test preparation."
        },
        {
          id: "technology",
          title: "Technology Integration",
          short: "Digital tools often reinforce rather than transform",
          expanded: "Despite hopes that technology would transform education, digital tools have often been integrated into existing pedagogical frameworks, digitizing rather than reimagining the lecture-homework-test model."
        }
      ],
      effectiveness: {
        strengths: ["Provides clear metrics for stakeholders", "Creates accountability systems", "Ensures exposure to common knowledge base"],
        weaknesses: ["Fails to develop 21st century skills like creativity and collaboration", "Creates high stress environments", "Doesn't accommodate diverse learning styles and needs"]
      }
    },
    effectiveness: {
      title: "Effectiveness Analysis",
      content: "Research on learning shows mixed results for the traditional model.",
      timeline: "Research Findings",
      keyPoints: [
        {
          id: "retention",
          title: "Knowledge Retention",
          short: "Passive learning leads to poor retention",
          expanded: "Research shows that passive learning (lectures) results in approximately 5-10% retention rates after 24 hours, while active learning approaches can increase retention to 75-90%."
        },
        {
          id: "engagement",
          title: "Student Engagement",
          short: "Traditional models show declining engagement",
          expanded: "Studies consistently show declining student engagement as students progress through traditional education systems, with highest engagement in kindergarten and lowest in high school."
        },
        {
          id: "outcomes",
          title: "Learning Outcomes",
          short: "Mixed results depending on measurement metrics",
          expanded: "Traditional education shows mixed results: reasonable performance on knowledge-based assessments but poor performance on measures of creativity, critical thinking, and problem-solving ability."
        }
      ],
      effectiveness: {
        strengths: ["Efficient for transmitting large amounts of information", "Clear structure helps some students thrive", "Provides measurable outcomes for accountability"],
        weaknesses: ["Focuses on compliance over engagement", "Prioritizes test performance over deeper learning", "Fails to prepare students for modern workplace needs"]
      }
    },
    future: {
      title: "Future Directions",
      content: "Emerging approaches that challenge the traditional model.",
      timeline: "Emerging Trends",
      keyPoints: [
        {
          id: "personalization",
          title: "Personalized Learning",
          short: "Adapting education to individual needs",
          expanded: "Adaptive technologies and personalized learning approaches tailor education to individual student needs, learning styles, and interests, moving away from the one-size-fits-all model."
        },
        {
          id: "competency",
          title: "Competency-Based Education",
          short: "Advancement based on mastery, not time",
          expanded: "Competency-based models allow students to progress based on demonstrated mastery rather than seat time, challenging the age-based cohort model of traditional education."
        },
        {
          id: "realworld",
          title: "Real-World Learning",
          short: "Connecting education to authentic contexts",
          expanded: "Project-based, problem-based, and work-based learning approaches connect academic content to real-world contexts, increasing relevance and engagement while developing critical thinking skills."
        }
      ],
      effectiveness: {
        strengths: ["Increases student agency and motivation", "Develops broader range of skills", "Prepares students for complex, changing environments"],
        weaknesses: ["Implementation challenges in existing systems", "Requires significant teacher retraining", "Difficult to scale and standardize"]
      }
    }
  };

  const EffectivenessChart: React.FC<EffectivenessData> = ({ strengths, weaknesses }) => (
    <div className="mt-4 border rounded-lg overflow-hidden bg-gray-50">
      <div className="grid grid-cols-2 gap-1">
        <div className="p-3 bg-green-100">
          <h4 className="font-semibold text-green-800">Strengths</h4>
          <ul className="list-disc pl-5 mt-2 text-sm">
            {strengths.map((item, i) => (
              <li key={i} className="text-green-800">{item}</li>
            ))}
          </ul>
        </div>
        <div className="p-3 bg-red-100">
          <h4 className="font-semibold text-red-800">Limitations</h4>
          <ul className="list-disc pl-5 mt-2 text-sm">
            {weaknesses.map((item, i) => (
              <li key={i} className="text-red-800">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">The Evolution of Modern Education: Lecture, Homework, Test</h1>
      
      <div className="flex overflow-x-auto pb-2 mb-4">
        {Object.keys(sections).map(key => (
          <button
            key={key}
            onClick={() => setActiveSection(key)}
            className={`px-4 py-2 mx-1 rounded-full whitespace-nowrap text-sm font-medium ${
              activeSection === key 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
            }`}
          >
            {sections[key].title}
          </button>
        ))}
      </div>
      
      <div className="bg-gray-100 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-blue-800">{sections[activeSection].title}</h2>
          <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
            {sections[activeSection].timeline}
          </span>
        </div>
        
        <p className="mb-4 text-gray-900 font-medium">{sections[activeSection].content}</p>
        
        <div className="space-y-3 mb-6">
          {sections[activeSection].keyPoints.map(point => (
            <div 
              key={point.id} 
              className="border rounded-lg overflow-hidden bg-white shadow-sm"
            >
              <div 
                className="flex justify-between items-center p-3 cursor-pointer hover:bg-gray-50"
                onClick={() => togglePoint(point.id)}
              >
                <h3 className="font-semibold text-blue-800">{point.title}</h3>
                <div className="flex items-center">
                  <span className="text-sm text-gray-800 font-medium mr-2">{!expandedPoints[point.id] ? point.short : "Show less"}</span>
                  <svg 
                    className={`w-4 h-4 transition-transform ${expandedPoints[point.id] ? 'transform rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              {expandedPoints[point.id] && (
                <div className="p-3 border-t bg-blue-50 text-gray-900">
                  {point.expanded}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <h3 className="text-lg font-bold text-blue-900 mb-2">Effectiveness Analysis</h3>
        <EffectivenessChart 
          strengths={sections[activeSection].effectiveness.strengths} 
          weaknesses={sections[activeSection].effectiveness.weaknesses} 
        />
      </div>
      
      <div className="mt-6 text-center text-sm text-gray-800 font-medium">
        <p>Click on each era to explore the evolution of the lecture-homework-test model and its effectiveness</p>
      </div>
    </div>
  );
};

export default EducationExplorer;