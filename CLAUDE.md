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
- **Framework**: Next.js 16+ with App Router
- **Language**: TypeScript with React 19
- **Styling**: Tailwind CSS 4.1.4 (CSS-first config — no `tailwind.config.js`; see below)
- **Content**: JSON-based data management (no MDX — the MDX toolchain was removed as dead weight; see below)
- **PDF Generation**: @react-pdf/renderer for resume downloads

### Core Architecture Pattern
The live site is a **single self-contained page**, not a multi-route, data-driven site:

1. **`src/app/page.tsx`** is the entire production site — Hero, About, Impact Numbers, Featured Work, Career Timeline, How I Work, Education, and Contact are all defined inline in this one file as local components with hardcoded content arrays. There is no client-side navigation to other routes; `/` is the only page rendered in production (plus `/analytics`, a password-protected internal visitor-tracking dashboard).
2. **`src/data/*.json`** no longer feeds the live page. It exists solely to generate the downloadable PDF resume (the Hero's "Download Resume" button, via `src/utils/downloadUtils.tsx` → `src/components/ResumePDF.tsx`).

**Keep both in sync manually.** Because these are two independent content sources, a copy/number change made only in `page.tsx` will not show up in the downloaded PDF resume, and vice versa. When updating a role, metric, or achievement, update it in *both* `page.tsx` and the corresponding `src/data/*.json` entry.

### Key Directories
```
src/
├── app/                    # Next.js App Router — page.tsx (the site) + analytics/, api/
├── components/             # ResumePDF, RootLayout, SectionTracker
├── data/                   # JSON data files, used only by the PDF resume generator
└── utils/                  # downloadUtils.tsx (PDF generation)
```

### Data Architecture
`src/data/*.json` feeds the PDF resume only (see Core Architecture Pattern above):

- **`profile.json`**: Personal information, summary, contact details
- **`experience.json`**: Work history with quantified achievements
- **`skills.json`**: Technical skills categorized by domain (AI/ML, Product, etc.)
- **`projects.json`**: Case studies with business impact metrics, filtered onto the PDF by matching `company` against the most recent `experience.json` entry
- **`education.json`**: Academic background and certifications

### Critical Components
- **`src/app/page.tsx`**: The entire live site, including its own local components (`CaseCard`, `OutcomeGrid`, `Stat`, `BulletList`, `SmartMovingCaseStudy`, `CapitalOneCaseStudy`, etc.)
- **`ResumePDF`**: Renders `src/data/*.json` into the downloadable PDF resume

### Layout Convention: Full-Width, No Boxed Containers
Sections in `page.tsx` intentionally do **not** use a `container mx-auto max-w-*` wrapper. Each `<section>` fills the full viewport width, with only side padding (e.g. `px-6`) for a gutter — content is not capped to a centered max-width column. When adding new sections or editing existing ones, don't reintroduce `max-w-*`/`container` constraints on the outer wrapper; let it fill the page.

## Development Patterns

### Content Updates
When updating professional information:
1. Modify `src/app/page.tsx` (the live site) — and the matching entry in `src/data/*.json` (the PDF resume) so the two stay in sync
2. Ensure metrics are quantified (revenue, adoption rates, satisfaction scores) and use the same number everywhere that metric appears
3. Add company logos to `public/logos/` if needed
4. Test by running `npm run dev` and clicking "Download Resume" to confirm the PDF matches

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
The site positions Paul as an AI-native product leader with demonstrable business impact:
- **Revenue Generation**: $6M+ ARR growth contributed at SmartMoving
- **Customer Research**: 200+ cumulative customer discovery interviews
- **AI-Native Building**: Claude Code prototyping used across the product lifecycle (Capital One, SmartMoving)
- **Technical Leadership**: API development, system architecture, analytics

## Case Studies Management

There is no `/case-studies` page or screenshot gallery — that route and its supporting components (`ScreenshotModal`, `useScreenshots`, `screenshotUtils`, `/api/screenshots`) were removed because nothing on the live site linked to them. Its MDX-based content layer (`src/utils/blog-utils.ts`, `next-mdx-remote`, `@next/mdx`, `rehype*`/`remark*`, `gray-matter`, and the MDX wiring in `next.config.mjs`) was removed for the same reason — unused, and one of the packages had a high-severity advisory. `framer-motion`, `react-icons`, `@tailwindcss/typography`, and `tailwind.config.js` were removed too — none were imported or referenced anywhere (no `dark:` or `prose` classes exist, and Tailwind v4 auto-detects content without a config file). Separately, `lucide-react` dropped all brand/logo icons in its v1 major release, so the Contact section's LinkedIn icon in `page.tsx` is now a small inline SVG instead of a `lucide-react` import. Case study content today has two independent homes; update both when a story changes:

1. **`src/app/page.tsx`** — the actual Featured Work cards visitors see (`SmartMovingCaseStudy`, `CapitalOneCaseStudy`, and the generic `CaseCard` instances for First Student, EverDriven, Zebra).
2. **`src/data/projects.json`** — the `caseStudies` array that feeds the "Key Projects" section of the downloadable PDF resume. Only case studies whose `company` matches the **most recent** entry in `experience.json` appear in the PDF (see `src/utils/downloadUtils.tsx`), so a new most-recent role generally needs a matching `projects.json` entry to show up there.

### Adding a New Case Study to `projects.json`
```json
{
  "id": "company-project-name",
  "title": "Project Title: Brief Description",
  "subtitle": "One-line value proposition",
  "company": "Company Name (must match experience.json exactly)",
  "industry": "Industry Category",
  "timeline": "YYYY",
  "duration": "X months",
  "heroMetric": "Key quantified result",
  "heroDescription": "Brief project summary",
  "skills": ["Skill1", "Skill2"],
  "solutionVertical": "Category",
  "techStack": "Technology platform",
  "impactType": ["Impact1", "Impact2"],
  "challenge": { "title": "...", "description": "...", "keyProblems": ["..."] },
  "approach": { "title": "...", "description": "...", "methodology": ["..."] },
  "results": {
    "primaryMetrics": [{ "metric": "Quantified result", "description": "What it means" }],
    "businessImpact": "Long-form business impact description",
    "customerFeedback": "Customer quote or feedback"
  },
  "learnings": ["Key insight 1", "Key insight 2"],
  "technologies": ["Tech1", "Tech2"],
  "featured": true
}
```

No screenshots, `filterOptions`, or `marketingLink` fields are needed — those only existed for the removed gallery page. Test by running `npm run dev`, confirming the number/copy on the homepage card, and clicking "Download Resume" in the Hero to confirm the PDF reflects the same content.