import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import educationData from '../data/education.json';

// Register a clean sans-serif font
Font.register({
  family: 'sans',
  fonts: [
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf' },
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-700.ttf', fontWeight: 'bold' }
  ]
});

// Types for data structures
interface Social {
  network: string;
  url: string;
}

interface BasicInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin?: string;
  summary: string;
}

interface Profile {
  basics: BasicInfo;
  social: Social[];
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

interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  duration: string;
  location: string;
  type: string;
  status: string;
  description: string;
  relevantCoursework: string[];
  skills: string[];
  gpa?: string;
  honors?: string[];
}

// Types for props
interface ResumePDFProps {
  profile: Profile;
  experience: Experience;
  skills: Skills;
  projects: Projects;
}

const styles = StyleSheet.create({
  page: {
    fontFamily: 'sans',
    fontSize: 11,
    padding: 32,
    backgroundColor: '#fff',
    color: '#222',
    lineHeight: 1.5,
  },
  header: {
    borderBottom: '2px solid #2563eb',
    marginBottom: 16,
    paddingBottom: 8,
    width: '100%',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: 2,
    lineHeight: 1.1,
  },
  title: {
    fontSize: 13,
    color: '#222',
    marginBottom: 6,
    lineHeight: 1.1,
  },
  contact: {
    fontSize: 10,
    color: '#444',
    marginBottom: 2,
    lineHeight: 1.2,
  },
  summarySection: {
    marginTop: 8,
    marginBottom: 16,
    width: '100%',
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  summary: {
    fontSize: 10,
    marginBottom: 8,
    color: '#222',
  },
  main: {
    flexDirection: 'row',
    width: '100%',
    gap: 24,
  },
  sidebar: {
    width: '34%',
    minWidth: 180,
    maxWidth: 220,
    paddingRight: 16,
    borderRight: '1px solid #e5e7eb',
  },
  content: {
    flex: 1,
    paddingLeft: 24,
  },
  section: {
    marginTop: 12,
    marginBottom: 8,
  },
  skillBarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  skillBarLabel: {
    fontSize: 10,
    width: 70,
    color: '#1e40af',
    marginRight: 6,
    fontWeight: 'bold',
  },
  skillBarTrack: {
    height: 8,
    width: 60,
    backgroundColor: '#e0e7ff',
    borderRadius: 4,
    marginRight: 6,
    overflow: 'hidden',
  },
  skillBarFill: {
    height: 8,
    backgroundColor: '#2563eb',
    borderRadius: 4,
  },
  skillBarValue: {
    fontSize: 9,
    color: '#222',
    width: 18,
    textAlign: 'right',
  },
  edu: {
    marginBottom: 8,
  },
  job: {
    marginBottom: 12,
    breakInside: 'avoid',
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    fontSize: 11,
    breakInside: 'avoid',
  },
  jobTitle: {
    fontWeight: 'bold',
    color: '#2563eb',
    breakInside: 'avoid',
  },
  jobCompany: {
    fontWeight: 'bold',
    color: '#222',
    breakInside: 'avoid',
  },
  jobDates: {
    fontSize: 10,
    color: '#666',
    breakInside: 'avoid',
  },
  bullet: {
    marginLeft: 10,
    fontSize: 10,
    marginBottom: 2,
  },
  description: {
    fontSize: 10,
    color: '#444',
    marginBottom: 2,
  },
  project: {
    marginBottom: 10,
    breakInside: 'avoid',
  },
  projectTitle: {
    fontWeight: 'bold',
    fontSize: 11,
    color: '#2563eb',
    breakInside: 'avoid',
  },
  projectCompany: {
    fontSize: 10,
    color: '#1e293b',
    marginBottom: 1,
  },
  projectPeriod: {
    fontSize: 9,
    color: '#666',
    marginBottom: 1,
  },
  projectAchievements: {
    fontSize: 9,
    color: '#444',
    marginLeft: 8,
    marginBottom: 1,
  },
  projectMetrics: {
    fontSize: 9,
    color: '#444',
    marginLeft: 8,
    marginBottom: 1,
  },
  fullWidthSection: {
    marginTop: 16,
    width: '100%',
    breakInside: 'avoid',
  },
  projectGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 8,
  },
  projectCard: {
    width: '48%',
    marginBottom: 12,
    breakInside: 'avoid',
  },
});

const noHyphen = { hyphenationCallback: (word: string) => [word] };

const ResumePDF: React.FC<ResumePDFProps> = ({ profile, experience, skills, projects }) => {
  const basics = profile.basics || {};
  // Use education from education.json
  const education = (educationData.education && educationData.education.length > 0)
    ? educationData.education
    : [];
  const linkedin = (profile.social || []).find((s: Social) => s.network === 'LinkedIn')?.url || basics.linkedin || '';
  const allExperience = experience.experience || [];
  // Only show the four most recent jobs
  const lastFourExperience = allExperience.slice(0, 4);
  const firstExperience = lastFourExperience.length > 0 ? [lastFourExperience[0]] : [];
  const remainingExperience = lastFourExperience.length > 1 ? lastFourExperience.slice(1) : [];

  // Get projects from the most recent position
  const recentProjects = projects.projects.filter(project => 
    project.company === firstExperience[0]?.company
  );

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name} {...noHyphen}>{basics.name || 'Name'}</Text>
          <Text style={styles.title} {...noHyphen}>{basics.title || ''}</Text>
          <Text style={styles.contact} {...noHyphen}>
            {basics.location || ''} | {basics.email || ''} | {basics.phone || ''} | {linkedin || ''}
          </Text>
        </View>
        {/* Summary across the top */}
        <View style={styles.summarySection}>
          <Text style={styles.sectionTitle} {...noHyphen}>Summary</Text>
          <Text style={styles.summary} {...noHyphen}>{basics.summary || 'No summary available.'}</Text>
        </View>
        {/* Two-column section: Product Skills + Education | First Experience */}
        <View style={styles.main}>
          {/* Sidebar */}
          <View style={styles.sidebar}>
            {/* All Skills by Category */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle} {...noHyphen}>Skills</Text>
              {skills.categories && skills.categories.length > 0 ? (
                skills.categories.map((cat: SkillCategory, cidx: number) => (
                  <View key={cat.name + cidx} style={{ marginBottom: 8 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 11, color: '#1e40af', marginBottom: 2 }} {...noHyphen}>{cat.name}</Text>
                    {cat.skills.map((skill: Skill, sidx: number) => (
                      <Text key={skill.name + sidx} style={{ fontSize: 10, marginLeft: 8, marginBottom: 1 }} {...noHyphen}>
                        {skill.name}
                      </Text>
                    ))}
                  </View>
                ))
              ) : <Text {...noHyphen}>No skills data available.</Text>}
            </View>
            {/* Education from education.json */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle} {...noHyphen}>Education</Text>
              {education.map((edu: Education, idx: number) => (
                <View key={edu.institution + idx} style={styles.edu}>
                  <Text style={{ fontWeight: 'bold', fontSize: 11 }} {...noHyphen}>{edu.institution}</Text>
                  <Text style={{ fontSize: 10 }} {...noHyphen}>{edu.degree} in {edu.field}</Text>
                  <Text style={{ fontSize: 9, color: '#666' }} {...noHyphen}>{edu.startDate} - {edu.endDate}</Text>
                  {edu.gpa && <Text style={{ fontSize: 9, color: '#666' }} {...noHyphen}>GPA: {edu.gpa}</Text>}
                  {edu.honors && edu.honors.map((honor: string, hidx: number) => (
                    <Text key={honor + hidx} style={{ fontSize: 9, color: '#666' }} {...noHyphen}>{honor}</Text>
                  ))}
                </View>
              ))}
            </View>
          </View>
          
          {/* Main Content */}
          <View style={styles.content}>
            {/* First Experience */}
            {firstExperience.map((job: ExperienceItem, idx: number) => (
              <View key={job.id + idx} style={styles.job} wrap={false}>
                <View style={styles.jobHeader}>
                  <Text style={styles.jobTitle} {...noHyphen}>{job.title}</Text>
                  <Text style={styles.jobDates} {...noHyphen}>{job.startDate} - {job.endDate}</Text>
                </View>
                <Text style={styles.jobCompany} {...noHyphen}>{job.company} · {job.location}</Text>
                <Text style={styles.description} {...noHyphen}>{job.description}</Text>
                {job.achievements.map((achievement: string, aidx: number) => (
                  <Text key={achievement + aidx} style={styles.bullet} {...noHyphen}>• {achievement}</Text>
                ))}
              </View>
            ))}
            
            {/* Remaining Experience */}
            {remainingExperience.map((job: ExperienceItem, idx: number) => (
              <View key={job.id + idx} style={styles.job} wrap={false}>
                <View style={styles.jobHeader}>
                  <Text style={styles.jobTitle} {...noHyphen}>{job.title}</Text>
                  <Text style={styles.jobDates} {...noHyphen}>{job.startDate} - {job.endDate}</Text>
                </View>
                <Text style={styles.jobCompany} {...noHyphen}>{job.company} · {job.location}</Text>
                <Text style={styles.description} {...noHyphen}>{job.description}</Text>
                {job.achievements.map((achievement: string, aidx: number) => (
                  <Text key={achievement + aidx} style={styles.bullet} {...noHyphen}>• {achievement}</Text>
                ))}
              </View>
            ))}
          </View>
        </View>

        {/* Key Projects Section - Full Width */}
        {recentProjects.length > 0 && (
          <View style={styles.fullWidthSection}>
            <Text style={styles.sectionTitle} {...noHyphen}>Key Projects at {firstExperience[0]?.company}</Text>
            <View style={styles.projectGrid}>
              {recentProjects.map((project: Project, pidx: number) => (
                <View key={project.id + pidx} style={styles.projectCard}>
                  <Text style={styles.projectTitle} {...noHyphen}>{project.title}</Text>
                  <Text style={styles.projectPeriod} {...noHyphen}>{project.period}</Text>
                  <Text style={styles.description} {...noHyphen}>{project.description}</Text>
                  {project.achievements.map((achievement: string, aidx: number) => (
                    <Text key={achievement + aidx} style={styles.projectAchievements} {...noHyphen}>• {achievement}</Text>
                  ))}
                </View>
              ))}
            </View>
          </View>
        )}
      </Page>
    </Document>
  );
};

export default ResumePDF; 