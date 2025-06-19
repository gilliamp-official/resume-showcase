import { saveAs } from 'file-saver';
import { pdf } from '@react-pdf/renderer';
import ResumePDF from '@/components/ResumePDF';
import profileData from '@/data/profile.json';
import experienceData from '@/data/experience.json';
import skillsData from '@/data/skills.json';
import projectsData from '@/data/projects.json';

// Types for data structures
interface Social {
  network: string;
  username: string;
  url: string;
}

interface BasicInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  website: string;
  summary: string;
}

interface Profile {
  basics: BasicInfo;
  social: Social[];
  highlights: string[];
  keywords: string[];
  interests: string[];
}

interface Skill {
  name: string;
  level: number;
  description: string;
  usedAt: string[];
  achievements: string[];
}

interface SkillCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  skills: Skill[];
}

interface Skills {
  categories: SkillCategory[];
  tools: {
    category: string;
    items: string[];
  }[];
  highlights: string[];
}

interface ExperienceItem {
  id: string;
  company: string;
  title: string;
  logo: string;
  location: string;
  type: string;
  startDate: string;
  endDate: string;
  duration: string;
  description: string;
  achievements: string[];
  skills: string[];
}

interface Experience {
  experience: ExperienceItem[];
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
  skills: string[];
  impactType: string[];
  featured: boolean;
  challenge?: {
    title: string;
    description: string;
    keyProblems: string[];
  };
  approach?: {
    title: string;
    description: string;
    methodology: string[];
  };
  solution?: {
    title: string;
    description: string;
    keyFeatures: string[];
  };
  results?: {
    primaryMetrics: Array<{
      metric: string;
      description: string;
    }>;
    businessImpact: string;
    customerFeedback: string;
  };
  learnings?: string[];
  technologies?: string[];
}

interface Project {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  image: string;
  role: string;
  achievements: string[];
  skills: string[];
  technologies: string[];
}

interface Projects {
  projects: Project[];
}

interface ProjectsData {
  caseStudies: CaseStudy[];
  filterOptions?: {
    skills: string[];
    industries: string[];
    impactTypes: string[];
  };
  summary?: {
    totalRevenue: string;
    totalProjects: number;
    aiMlProjects: number;
    yearsExperience: string;
  };
}

// Type assertions for imported data
const typedProfileData = profileData as Profile;
const typedExperienceData = experienceData as Experience;
const typedSkillsData = skillsData as Skills;
const typedProjectsData = projectsData as unknown as ProjectsData;

export const downloadResume = async (): Promise<void> => {
  try {
    // Transform caseStudies to match the old projects structure expected by ResumePDF
    const transformedProjects = {
      projects: typedProjectsData.caseStudies.map(caseStudy => ({
        id: caseStudy.id,
        title: caseStudy.title,
        company: caseStudy.company,
        period: caseStudy.timeline,
        description: caseStudy.heroDescription,
        image: '', // No image in new structure
        role: 'Product Manager', // Default role
        achievements: caseStudy.results?.primaryMetrics.map(m => `${m.metric} - ${m.description}`) || [],
        skills: caseStudy.skills,
        technologies: caseStudy.technologies || []
      }))
    };

    // Create the PDF document using the ResumePDF component and data
    const doc = <ResumePDF 
      profile={typedProfileData}
      experience={typedExperienceData}
      skills={typedSkillsData}
      projects={transformedProjects as Projects}
    />;
    // Generate the PDF blob
    const asPdf = pdf(doc);
    const blob = await asPdf.toBlob();
    // Download the PDF
    saveAs(blob, `${profileData.basics.name.replace(/\s+/g, '_')}_Resume.pdf`);
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw new Error('Failed to generate PDF resume');
  }
};