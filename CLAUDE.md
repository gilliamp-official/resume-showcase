# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a Next.js 15+ professional portfolio website for Paul Gilliam, a Senior Product Manager specializing in AI-powered B2B SaaS solutions. The site showcases quantified professional achievements, technical expertise, and business impact.

## Development Commands

### Essential Commands
```bash
npm run dev          # Development server (localhost:3000)
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint code linting
```

### Docker Development
```bash
docker-compose up    # Run with Docker Compose
docker build -t resume-showcase .  # Build Docker image
```

## Architecture Overview

### Technology Stack
- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript with React 19
- **Styling**: Tailwind CSS 4.1.4
- **Content**: JSON-based data management + MDX support
- **PDF Generation**: @react-pdf/renderer for resume downloads
- **Animations**: Framer Motion for interactive elements

### Core Architecture Pattern
This is a **data-driven static site** that separates content from presentation:

1. **Data Layer**: Structured JSON files in `src/data/` contain all professional information
2. **Component Layer**: Reusable React components consume and display data
3. **Page Layer**: Next.js App Router pages orchestrate components and data

### Key Directories
```
src/
├── app/                    # Next.js App Router pages
├── components/             # Reusable UI components
├── data/                   # JSON data files (profile, experience, skills, projects)
└── utils/                  # Utility functions
```

### Data Architecture
The site uses a **JSON-based content management system**:

- **`profile.json`**: Personal information, summary, contact details
- **`experience.json`**: Work history with quantified achievements
- **`skills.json`**: Technical skills categorized by domain (AI/ML, Product, etc.)
- **`projects.json`**: Portfolio projects with business impact metrics
- **`education.json`**: Academic background and certifications

### Critical Components
- **`CareerTimeline`**: Visual timeline of professional experience
- **`SkillsVisualization`**: Interactive skills display with proficiency levels
- **`ProjectShowcase`**: Portfolio with quantified business impact
- **`ResumePDF`**: Dynamic PDF generation for download

## Development Patterns

### Content Updates
When updating professional information:
1. Modify relevant JSON files in `src/data/`
2. Ensure metrics are quantified (revenue, adoption rates, satisfaction scores)
3. Add company logos to `public/logos/` if needed
4. Test component rendering with new data

### Component Development
- Use TypeScript interfaces for all props
- Follow mobile-first responsive design with Tailwind
- Maintain professional tone focused on business impact
- Include proper accessibility attributes

### Professional Branding Requirements
- Emphasize AI/ML expertise and customer-driven development
- Highlight quantifiable business impact (revenue, adoption, satisfaction)
- Focus on cross-functional leadership and technical business acumen
- Maintain consistent professional messaging across all content

## Performance Considerations
- Use Next.js Image component for all images
- Optimize logos and profile images (WebP when possible)
- Keep page components focused and lightweight
- JSON data files are statically imported at build time

## Content Strategy
The site positions Paul as an AI/ML product leader with demonstrable business impact:
- **Revenue Generation**: $5M+ in documented product revenue
- **Customer Research**: 20+ monthly customer interviews
- **Technical Leadership**: API development, system architecture, analytics
- **AI/ML Integration**: 3+ years of AI-powered solution experience

## Case Studies Management

### Adding New Case Studies
Case studies are stored in `src/data/projects.json` in the `caseStudies` array. Each case study follows a structured format:

#### 1. Required Fields
```json
{
  "id": "company-project-name",
  "title": "Project Title: Brief Description",
  "subtitle": "One-line value proposition",
  "company": "Company Name",
  "industry": "Industry Category",
  "timeline": "YYYY",
  "duration": "X months",
  "heroMetric": "Key quantified result",
  "heroDescription": "Brief project summary",
  "skills": ["Skill1", "Skill2"],
  "solutionVertical": "Category from filterOptions",
  "techStack": "Technology platform",
  "impactType": ["Impact1", "Impact2"],
  "featured": true/false
}
```

#### 2. Optional Detailed Sections
Add these sections for comprehensive case studies:

**Challenge Section:**
```json
"challenge": {
  "title": "Problem statement",
  "description": "Detailed problem context",
  "keyProblems": ["Problem 1", "Problem 2", "Problem 3"]
}
```

**Approach Section:**
```json
"approach": {
  "title": "Solution approach",
  "description": "How you tackled the problem",
  "methodology": ["Step 1", "Step 2", "Step 3"]
}
```

**Results Section:**
```json
"results": {
  "primaryMetrics": [
    {
      "metric": "Quantified result",
      "description": "What this metric means"
    }
  ],
  "businessImpact": "Long-form business impact description",
  "customerFeedback": "Customer quote or feedback"
}
```

**Learnings:**
```json
"learnings": [
  "Key insight 1",
  "Key insight 2",
  "Key insight 3"
]
```

#### 3. Screenshots and Marketing Links
Add password-protected screenshots and optional marketing links:

```json
"screenshots": {
  "password": "companyname"
},
"marketingLink": "https://company.com/feature-page"
```

#### 4. Password Convention
Use lowercase company names for screenshot passwords:
- **SmartMoving**: `smartmoving`
- **Zebra**: `zebra`
- **First Student**: `firststudent`
- **New Companies**: `[companyname]` (all lowercase, no spaces)

#### 5. Screenshot File Organization
1. Create directory: `public/case-studies/[case-study-id]/`
2. Add screenshots: `screenshot-1.png`, `screenshot-2.png`, etc.
3. System automatically detects and loads images from folders
4. No need to hardcode image arrays in JSON - just add files to directories

#### 6. Filter Options Maintenance
Update `filterOptions` in projects.json when adding new categories:
- **skills**: Add new skills to the array
- **solutionVerticals**: Add new solution types
- **techStacks**: Add new technology platforms
- **industries**: Add new industry categories
- **impactTypes**: Add new impact categories

#### 7. Case Study Best Practices
- **Quantify Everything**: Include specific metrics (revenue, adoption, time saved)
- **Business Impact**: Focus on measurable business outcomes
- **Customer Voice**: Include customer feedback when possible
- **Technical Depth**: Balance technical details with business impact
- **Professional Tone**: Maintain consistent professional messaging
- **Confidentiality**: Use company-specific passwords for sensitive screenshots

#### 8. Testing New Case Studies
After adding a case study:
1. Run `npm run dev` to test locally
2. Navigate to `/case-studies` page
3. Test filters with new categories
4. Verify screenshot modal functionality
5. Check marketing links open correctly
6. Ensure password protection works

### Screenshot Guidelines
- **Resolution**: Minimum 1920x1080 for clarity
- **Format**: PNG preferred for UI screenshots
- **Content**: Focus on key interface elements and results
- **Captions**: Write clear, descriptive captions
- **Descriptions**: Provide context for what's shown
- **Redaction**: Remove sensitive customer data if needed