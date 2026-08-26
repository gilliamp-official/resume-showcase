'use client'

import { useState, ReactNode, MouseEvent } from 'react'
import {
  ArrowDown, Mail, TrendingUp, Users, Award,
  GraduationCap, Zap, Shield, Video, Bus,
  ChevronDown, ChevronUp, BarChart2, Download,
} from 'lucide-react'
import SectionTracker from '@/components/SectionTracker'
import { downloadResume } from '@/utils/downloadUtils'

const NAVY       = '#1a2b4a'
const AMBER      = '#d97706'
const AMBER_DARK = '#b45309'
const OFF_WHITE  = '#f8f7f4'

// lucide-react dropped brand/logo icons (LinkedIn included) in v1 — inlined here
// rather than pulling in a whole icon library for one glyph.
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
    </svg>
  )
}

interface OutcomeItem  { label: string; value: string }
interface ExtraLink    { href: string; label: string }
interface TagProps     { children: ReactNode; amber?: boolean }
interface StatProps    { value: string; label: string; accent?: boolean }
interface OutcomeGridProps { items: OutcomeItem[] }
interface CaseCardProps {
  tag: string; tagAmber?: boolean; title: string; company: string
  date: string; stat: string; statLabel: string; children: ReactNode
  outcomeItems: OutcomeItem[]; extraLink?: ExtraLink
}
interface TimelineJob  { icon: ReactNode; title: string; company: string; period: string; detail: string; featured?: boolean }
interface SkillGroup   { label: string; tags: string[] }
interface EducationItem{ degree: string; school: string; detail: string }
interface HeroStat     { value: string; label: string }
interface Pillar       { title: string; body: string }
interface Capability   { label: string; description: string }

function Tag({ children, amber = false }: TagProps) {
  return (
    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${amber ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-600'}`}>
      {children}
    </span>
  )
}

function Stat({ value, label, accent = false }: StatProps) {
  return (
    <div>
      <div className="text-2xl font-bold" style={{ color: accent ? AMBER : NAVY }}>{value}</div>
      <div className="text-xs text-slate-500 mt-0.5">{label}</div>
    </div>
  )
}

function OutcomeGrid({ items }: OutcomeGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm rounded-lg p-4" style={{ backgroundColor: OFF_WHITE }}>
      {items.map((item) => (
        <div key={item.label}>
          <strong className="text-slate-700">{item.label}:</strong>
          <p className="text-slate-500 mt-0.5">{item.value}</p>
        </div>
      ))}
    </div>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="text-slate-700 text-sm leading-relaxed space-y-2.5 mb-6 list-disc pl-5 marker:text-amber-600">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  )
}

function CaseCard({ tag, tagAmber = false, title, company, date, stat, statLabel, children, outcomeItems, extraLink }: CaseCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap gap-2 mb-3"><Tag amber={tagAmber}>{tag}</Tag></div>
          <h3 className="text-lg font-bold mb-1" style={{ color: NAVY }}>{title}</h3>
          <p className="text-slate-500 text-sm">{company} · {date}</p>
        </div>
        <div className="flex-shrink-0">
          <div className="text-2xl font-bold" style={{ color: AMBER }}>{stat}</div>
          <div className="text-xs text-slate-500 mt-0.5">{statLabel}</div>
        </div>
      </div>
      <div className="text-slate-700 text-sm leading-relaxed mb-5 space-y-3">{children}</div>
      <OutcomeGrid items={outcomeItems} />
      {extraLink && (
        <div className="mt-4">
          <a href={extraLink.href} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors" style={{ color: AMBER }}>
            <Video className="w-4 h-4" />{extraLink.label}
          </a>
        </div>
      )}
    </div>
  )
}
 
function SmartMovingCaseStudy() {
  const [expanded, setExpanded] = useState(false)

  const capabilities: Capability[] = [
    { label: 'Dispatch at Scale', description: 'Rebuilt core dispatching workflows to handle high-volume moving operations across multiple locations, giving operators visibility they never had before.' },
    { label: 'Claims Management', description: 'Designed and shipped a centralized claims module that replaced a fragmented, manual process, reducing resolution time and giving ops teams a single source of truth.' },
    { label: 'Smart Insights Analytics', description: 'Built a full-stack analytics prototype and tested it directly with customers before committing engineering resources. Achieved 100% paid beta retention and earned the national Inc. Magazine Innovation Award.' },
    { label: 'Automation Framework', description: 'Started lightweight and scaled with customer needs, letting actual workflows drive what got automated rather than automating for its own sake.' },
    { label: 'ACH Payments', description: 'Identified a gap in how movers collected payments and built a native ACH platform that contributed over $1M in ARR.' },
    { label: 'OpenAPI Ecosystem', description: 'Opened the platform to third-party integrations through a structured API strategy, generating $100K in third-party integration revenue and expanding reach beyond direct customers.' },
    { label: 'Trade Show and Sales Support', description: 'Attended industry conferences and joined key sales calls to stay close to the market, support deals, and bring real customer signal back into the product process.' },
  ]

  const bullets: string[] = [
    'Identified that 63% of customers were outside the ideal profile and consuming disproportionate support with low expansion potential. Led a strategic ICP realignment through 200+ cumulative customer interviews and monthly on-site visits with operators, shifting the mix from 37% in ICP to 80% in ICP over two years and directly contributing to $6M in ARR growth.',
    'Used AI to rapidly build and deploy lightweight prototypes before engineering was ever involved, sending one-time links to customers to measure whether they completed expected flows and whether they were in enough pain to try something new at all. Built a rapid context engine that synthesized those sessions into structured roadmap inputs, so customer insights went directly into prioritization rather than sitting in notes.',
    'Convinced leadership to invest in an embedded analytics platform, testing each solution with real customers, negotiating contracts, and presenting a vendor option 10x cheaper than the internal build estimate, redirecting engineering toward differentiated product work.',
    'Personally led discovery, market sizing, pricing, and GTM across every major capability added to the platform including automation, claims management, dispatch improvements, an ACH payments platform that contributed over $1M in ARR, and an OpenAPI ecosystem that generated $100K in third-party integration revenue.',
    'Hired and mentored 2 PMs, established every product and engineering process from scratch, and led 3 engineering teams across concurrent workstreams. Conducted over 200 customer discovery interviews, made 8 in-person trips to moving companies.',
  ]

  return (
    <div className="bg-white rounded-2xl shadow-sm border-2 overflow-hidden" style={{ borderColor: NAVY }}>
      <div className="px-6 sm:px-8 py-4 flex flex-wrap gap-2 items-center" style={{ backgroundColor: NAVY }}>
        <Tag amber>Inc. Magazine Innovation Award</Tag>
        <Tag>Platform Transformation</Tag>
      </div>
      <div className="p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl font-bold mb-1" style={{ color: NAVY }}>SmartMoving: From Niche CRM to Operations Platform</h3>
            <p className="text-slate-500 text-sm">SmartMoving Software · Jan 2024 – Jan 2026</p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 rounded-xl p-4 sm:p-5 border border-slate-100" style={{ backgroundColor: OFF_WHITE }}>
          <Stat value="$6M+" label="ARR Contributed" accent />
          <Stat value="80%" label="ICP Mix (from 37%)" accent />
          <Stat value="$1M+" label="Payments ARR" />
          <Stat value="200+" label="Customer Sessions" />
        </div>
        <p className="text-slate-700 text-sm leading-relaxed mb-6">
          Partnered directly with the founder/CEO and VP of Product to transform a vertical SaaS CRM into a full operating system for movers. Owned product strategy, discovery, roadmap, commercialization, and team building end-to-end across seven capability areas, personally contributing to $6M in ARR growth over two years.
        </p>
        <BulletList items={bullets} />
        <div className="mt-4 mb-2">
          <a href="https://www.youtube.com/watch?v=oX2n4CgRtnE" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors" style={{ color: AMBER }}>
            <Video className="w-4 h-4" />Watch the Smart Insights product demo
          </a>
        </div>
      </div>
      <div className="px-6 sm:px-8 pb-6 sm:pb-8">
        <button onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-sm font-semibold transition-colors" style={{ color: NAVY }}>
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          {expanded ? 'Hide capability breakdown' : 'See all 7 capabilities shipped'}
        </button>
        {expanded && (
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {capabilities.map((cap, i) => (
              <div key={i} className="rounded-xl p-4 border border-slate-100" style={{ backgroundColor: OFF_WHITE }}>
                <div className="text-sm font-semibold text-slate-800 mb-1">{cap.label}</div>
                <p className="text-sm text-slate-500">{cap.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function CapitalOneCaseStudy() {
  const [expanded, setExpanded] = useState(false)

  const capabilities: Capability[] = [
    { label: 'Scaling Beyond a Single Team', description: 'Aligned engineering, design, risk, and architecture around a reusable standard, turning a single-team POC into infrastructure enterprises could adopt broadly.' },
    { label: 'AI Across the Product Lifecycle', description: 'Used AI (Claude Code) to synthesize research, build business cases, and prototype solutions, compressing weeks of analysis into days of validated, data-backed decisions, and scaled the solution across 4 other lines of business.' },
    { label: 'New AI Intelligence Layer (Early Discovery)', description: 'Leading early discovery on a new AI-focused intelligence layer POC to help enterprises make security decisions up to 30% better, tying together security policy context and the tools that enforce it, which today live in separate systems and create enforcement gaps.' },
  ]

  const outcomeItems: OutcomeItem[] = [
    { label: 'The Strategic Problem', value: 'A gap across 8+ teams left enterprises confused about how to improve their data security and cost optimization posture, with no shared way to define or measure the problem.' },
    { label: 'How I Approached It', value: 'Built the business case from scratch, led detailed discovery, and used Claude Code to create lightweight prototypes that verified the problem and solution before committing engineering resources.' },
    { label: 'Business Outcome', value: 'A semantic layer that cut delivery time from 3 months to 1 hour, reduced duplicate and poorly defined metrics by 30%, and scaled across 4 lines of business.' },
  ]

  return (
    <div className="bg-white rounded-2xl shadow-sm border-2 overflow-hidden" style={{ borderColor: NAVY }}>
      <div className="px-6 sm:px-8 py-4 flex flex-wrap gap-2 items-center" style={{ backgroundColor: NAVY }}>
        <Tag amber>AI-Native Product Build</Tag>
        <Tag>Enterprise Data Platform</Tag>
      </div>
      <div className="p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl font-bold mb-1" style={{ color: NAVY }}>Capital One: A Semantic Layer for Enterprise Data Security &amp; Optimization</h3>
            <p className="text-slate-500 text-sm">Capital One Software · Jan 2026 – Present</p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 rounded-xl p-4 sm:p-5 border border-slate-100" style={{ backgroundColor: OFF_WHITE }}>
          <Stat value="3 Mo &#8594; 1 Hr" label="Delivery Time Cut" accent />
          <Stat value="30%" label="Duplicate Metrics Cut" accent />
          <Stat value="4" label="Lines of Business Scaled" />
          <Stat value="8+" label="Teams Aligned" />
        </div>
        <p className="text-slate-700 text-sm leading-relaxed mb-6">
          Built a new AI-ready data security and optimization intelligence platform to help enterprises improve their data security and cost optimization postures. Identified a gap across 8+ teams causing confusion for enterprises trying to optimize their businesses, built the business case from scratch, led detailed discovery, and leveraged Claude Code to create lightweight prototypes that verified the problem and solution. This led to a semantic layer solution that reduced delivery time from 3 months to 1 hour and cut duplicate and poorly defined metrics by 30%.
        </p>
        <OutcomeGrid items={outcomeItems} />
      </div>
      <div className="px-6 sm:px-8 pb-6 sm:pb-8">
        <button onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-sm font-semibold transition-colors" style={{ color: NAVY }}>
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          {expanded ? 'Hide the full breakdown' : 'See how this scaled beyond one team'}
        </button>
        {expanded && (
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {capabilities.map((cap, i) => (
              <div key={i} className="rounded-xl p-4 border border-slate-100" style={{ backgroundColor: OFF_WHITE }}>
                <div className="text-sm font-semibold text-slate-800 mb-1">{cap.label}</div>
                <p className="text-sm text-slate-500">{cap.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function handleAmberHover(e: MouseEvent<HTMLAnchorElement>) { e.currentTarget.style.backgroundColor = AMBER_DARK }
function handleAmberLeave(e: MouseEvent<HTMLAnchorElement>) { e.currentTarget.style.backgroundColor = AMBER }

export default function Home() {
  const heroStats: HeroStat[] = [
    { value: 'Inc. Award', label: 'National Innovation' },
    { value: '$6M+',      label: 'ARR Growth Contributed' },
    { value: '200+',      label: 'Customer Interviews' },
    { value: '40+',       label: 'Person Teams Led' },
  ]

  const impactStats: HeroStat[] = [
    { value: '$6M+', label: 'ARR Growth Contributed' },
    { value: '80%',  label: 'SmartMoving ICP Mix (from 37%)' },
    { value: '100%', label: 'Beta Retention on Smart Insights' },
    { value: '200+', label: 'Customer Discovery Sessions' },
  ]

  const aboutPillars: Pillar[] = [
    {
      title: 'Discovery before development',
      body: "I don't write requirements until I've talked to customers. Assumptions are expensive. Conversations are cheap.",
    },
    {
      title: 'Teams rally around problems, not features',
      body: "The best product decisions I've made came from getting engineering, sales, marketing, and ops in the same room around the same customer problem.",
    },
    {
      title: 'Value for the customer first',
      body: "Every feature, every metric, every decision gets filtered through one question: does this make life meaningfully better for the person using it?",
    },
  ]

  const timelineJobs: TimelineJob[] = [
    {
      icon: <BarChart2 className="w-5 h-5" />,
      title: 'Senior Manager, Product Management',
      company: 'Capital One Software',
      period: 'Jan 2026 – Present',
      detail: 'Leading strategy for an AI-ready enterprise data security and optimization platform, using Claude Code prototyping to turn a single-team proof of concept into a semantic layer standard adopted across 4 lines of business.',
      featured: true,
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: 'Senior Product Manager',
      company: 'SmartMoving Software',
      period: 'Jan 2024 – Jan 2026',
      detail: 'Built an Inc. Award-winning analytics platform from scratch with 100% beta retention. Led a strategic ICP realignment from 37% to 80% and helped drive $6M ARR growth through customer-led discovery and cross-functional execution.',
      featured: true,
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: 'Senior Product Manager',
      company: 'Zebra Technologies',
      period: 'Nov 2022 – Jan 2024',
      detail: 'Embedded with sales and data science teams at major retailers to turn AI/ML outputs into tools assortment planners actually used, improving forecast accuracy by 17% across roughly 1,000 variables.',
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: 'Product Manager',
      company: 'Koddi',
      period: 'Jun 2022 – Nov 2022',
      detail: 'Embedded with engineering, program management, and Booking.com teams to simplify targeted ad creation for hoteliers inside KoddiOne, driving a 15% improvement in ad targeting accuracy through customer-led discovery.',
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Senior Product Manager',
      company: 'First Student',
      period: 'Sep 2021 – Jun 2022',
      detail: 'Hand-selected to build a new vertical from zero. Traveled to school bus depots, embedded with 3 pilot districts, and led 40 contractors to ship a $1M platform serving 1,000+ students.',
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Senior Business Analyst',
      company: 'EZLynx',
      period: 'Aug 2020 – Aug 2021',
      detail: 'Led growth of an insurance platform integration marketplace, scaled the product ecosystem, and helped grow the product team capabilities alongside the product itself.',
    },
    {
      icon: <Bus className="w-5 h-5" />,
      title: 'Product Manager',
      company: 'EverDriven',
      period: '2018 – 2020',
      detail: 'Helped found the product department. Built dispatcher planning tools and executive dashboards that reduced operational waste by 30%, starting from an empathetic QA mindset and growing into a full product function.',
    },
  ]

  const skillGroups: SkillGroup[] = [
    {
      label: 'Product Leadership',
      tags: ['Customer Discovery', 'Jobs-to-be-Done', 'Continuous Discovery', 'OKRs', 'Market Validation', 'Roadmap Strategy', 'Beta Program Design', 'Willingness-to-Pay Research'],
    },
    {
      label: 'Cross-Functional Execution',
      tags: ['Sales Enablement', 'GTM Planning', 'Executive Alignment', 'Stakeholder Reporting', 'Customer Success Partnerships', 'Trade Show Strategy', 'Roadmap Communication'],
    },
    {
      label: 'AI and Data Fluency',
      tags: ['Claude Code', 'AI Prototyping', 'Agent Design', 'Data Storytelling', 'Embedded Analytics', 'Snowflake', 'SQL', 'Power BI', 'Behavioral Analytics', 'Generative AI'],
    },
    {
      label: 'Team and Process Building',
      tags: ['PM Team Development', 'Hiring and Leveling', 'Onboarding Design', 'Workflow Automation', 'Shape Up', 'Figma / FigJam', 'Productboard', 'Miro'],
    },
  ]

  const education: EducationItem[] = [
    {
      degree: 'MBA — Business Management',
      school: 'Quantic School of Business and Technology',
      detail: 'Platform Economics · Competitive Analysis · Strategic Market Development',
    },
    {
      degree: 'B.S. Information Systems and Business',
      school: 'University of Colorado Colorado Springs · 4.0 GPA, Summa Cum Laude',
      detail: 'Enterprise Platform Architecture · Strategic Systems Design',
    },
  ]

  return (
    <>
      <SectionTracker />

      {/* Hero */}
      <section id="section-hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: NAVY }}>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(ellipse at 25% 65%, rgba(217,119,6,0.08) 0%, transparent 55%),
                            radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.03) 0%, transparent 50%)`,
        }} />
        <div className="relative z-10 px-6 w-full py-20 sm:py-24">
          <div className="w-full">
            <p className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-6 sm:mb-8">
              Paul Gilliam · Product Leader · Teams, Strategy, and Outcomes That Scale
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 sm:mb-8" style={{ letterSpacing: '-0.02em' }}>
              I Rally Teams
              <br />
              <span style={{ color: AMBER }}>Around Problems</span>
              <br />
              Worth Solving.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-4">
              Not problems that look good in a roadmap. Problems validated in the field, shaped with customers, and worth paying for.
            </p>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-10 sm:mb-12">
              I&#8217;ve spent 8+ years working the way founders do: in customer interviews, on sales calls, at trade shows, and in the data. Then I build cross-functional teams around a clear story and ship something that moves the business.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-12 sm:mb-16">
              <a href="#contact"
                className="px-7 py-3 text-white text-sm font-semibold rounded-full text-center transition-colors"
                style={{ backgroundColor: AMBER }}
                onMouseOver={handleAmberHover}
                onMouseOut={handleAmberLeave}>
                Get in Touch
              </a>
              <button type="button" onClick={downloadResume}
                className="px-7 py-3 border border-slate-600 text-slate-300 text-sm font-semibold rounded-full text-center hover:border-slate-400 hover:text-white transition-colors inline-flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />Download Resume
              </button>
              <a href="https://linkedin.com/in/pgilliam2" target="_blank" rel="noopener noreferrer"
                className="px-7 py-3 border border-slate-600 text-slate-300 text-sm font-semibold rounded-full text-center hover:border-slate-400 hover:text-white transition-colors">
                LinkedIn Profile
              </a>
            </div>
            <div className="border-t border-slate-700 pt-6 sm:pt-8 grid grid-cols-2 sm:flex sm:flex-wrap gap-6 sm:gap-10">
              {heroStats.map((s, i) => (
                <div key={i}>
                  <div className="text-xl sm:text-2xl font-bold text-white">{s.value}</div>
                  <div className="text-xs text-slate-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-5 h-5 text-slate-600" />
        </div>
      </section>

      {/* About */}
      <section id="section-about" className="py-20 sm:py-24 px-6 bg-white">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-12 items-start">
            <div className="md:col-span-3">
              <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: AMBER }}>About</p>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 leading-snug" style={{ color: NAVY }}>
                The best products start with the right problem and the right people around it.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5 text-sm sm:text-base">
                The best products I&#8217;ve shipped didn&#8217;t start with a roadmap. They started with a conversation, usually in a customer&#8217;s office, on a sales call, or at a trade show booth where someone finally said what they actually needed.
              </p>
              <p className="text-slate-600 leading-relaxed mb-5 text-sm sm:text-base">
                I&#8217;ve conducted 200+ customer discovery interviews, personally supported key sales deals, attended industry conferences to stay close to the market, and rallied cross-functional teams of 10+ to turn insight into something real. At SmartMoving I led the adoption of AI prototyping as a core part of how we aligned executives and validated ideas before committing engineering resources, collapsing cycles that used to take months.
              </p>
              <p className="text-slate-600 leading-relaxed mb-5 text-sm sm:text-base">
                Today I continue pushing that edge, using AI to accelerate discovery, sharpen strategy, and build faster than ever. I write about it at <a href="https://theproductpipeline.substack.com" target="_blank" rel="noopener noreferrer" style={{ color: AMBER }} className="font-medium hover:underline">The Product Pipeline on Substack</a>.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                What drives me is the moment a product clicks for someone. When a dispatcher finally has a clear view of their day. When an assortment planner stops second-guessing a forecast. When a moving company operator can explain their own business using data you helped build. <em>That&#8217;s</em> why I do this.
              </p>
            </div>
            <div className="md:col-span-2 space-y-5 md:pt-14">
              {aboutPillars.map((item, i) => (
                <div key={i} className="border-l-2 pl-5" style={{ borderColor: AMBER }}>
                  <div className="text-sm font-semibold text-slate-800 mb-1">{item.title}</div>
                  <p className="text-sm text-slate-500">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section id="section-impact" className="py-14 px-6" style={{ backgroundColor: OFF_WHITE }}>
        <div className="w-full">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {impactStats.map((s, i) => (
              <div key={i} className="text-center p-5 bg-white rounded-xl border border-slate-100 shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: i % 2 === 0 ? NAVY : AMBER }}>{s.value}</div>
                <div className="text-xs sm:text-sm text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="section-work" className="py-16 sm:py-20 px-6 bg-white">
        <div className="w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3" style={{ color: NAVY }}>Featured Work</h2>
          <p className="text-center text-slate-500 mb-10 sm:mb-14 text-sm">
            Products built by getting close to the customer and rallying teams around a shared vision.
          </p>
          <div className="space-y-6 sm:space-y-8">
            <SmartMovingCaseStudy />

            <CapitalOneCaseStudy />

            <CaseCard
              tag="0 to 1 Platform Build"
              title="Special Needs Student Transportation Platform"
              company="First Student"
              date="2021 – 2022"
              stat="40"
              statLabel="Person Team Led"
              outcomeItems={[
                { label: 'The Strategic Problem', value: 'First Student had no platform for special needs transportation. Districts were managing complex, high-stakes logistics with fragmented tools and no operational visibility.' },
                { label: 'How I Approached It', value: 'Traveled to school bus depots, partnered with 3 pilot districts before writing a requirement, then led a 40-person contractor team through full delivery with GTM alignment alongside sales and marketing.' },
                { label: 'Business Outcome', value: 'Launched a $1M platform spanning a web app and 2 mobile apps, serving 1,000+ students across 10+ districts, on time and on budget.' },
              ]}
            >
              <p>Hand-selected to build a new vertical from the ground up, traveling to school bus depots, embedding with districts, and leading a 40-person contractor team to launch a $1M special needs transportation platform serving 1,000+ students across 10+ districts. Reported directly under a VP of growth and strategy to lead meaningful change.</p>
              <BulletList items={[
                'Defined the full platform strategy spanning a web app, two mobile apps, and cloud infrastructure, owning the vision from concept through launch',
                'Traveled directly to school bus depots and met with district stakeholders to understand operational realities before defining requirements, focusing on being discovery led, not assumption led',
                'Partnered with 3 pilot districts to validate the platform in real-world conditions, using their feedback to shape the product roadmap',
                'Partnered with marketing and sales to define the go-to-market strategy and positioning for broader district expansion',
                'Led a cross-functional team of 40 contractors, coordinating across engineering, operations, and external partners to deliver on time and on budget',
              ]} />
            </CaseCard>

            <CaseCard
              tag="Founding Product Role"
              title="Building a Product Department from the Ground Up"
              company="EverDriven"
              date="2018 – 2020"
              stat="30%"
              statLabel="Ops Waste Reduced"
              outcomeItems={[
                { label: 'The Strategic Problem', value: 'No product department existed. Engineering and ops made decisions in isolation, with no customer-facing function advocating for better solutions or a coherent product vision.' },
                { label: 'How I Approached It', value: 'Started as a QA advocate to deeply understand user pain, then built the product function from scratch including processes, tools, and a cross-functional culture centered on the customer.' },
                { label: 'Business Outcome', value: '30% reduction in operational waste, dispatcher and coordinator workflows transformed, and a fully functioning product department established where none existed before.' },
              ]}
            >
              <p>Joined as a QA advocate and helped found the product department, building the processes, culture, and cross-functional relationships from scratch. Became a driver of better technical solutions for dispatchers, coordinators, and executive teams, turning unstructured operational data into tools people actually relied on.</p>
            </CaseCard>

            <CaseCard
              tag="Enterprise Sales Partnership"
              title="Retail Assortment Planning: Making AI Usable"
              company="Zebra Technologies"
              date="2022 – 2024"
              stat="17%"
              statLabel="Planning Accuracy Gained"
              outcomeItems={[
                { label: 'The Strategic Problem', value: 'Enterprise retailers could not trust their forecasts. AI/ML models produced raw outputs that assortment planners at JCPenney, The Children\'s Place, and Evereve had no way to interpret or act on.' },
                { label: 'How I Approached It', value: 'Embedded directly with pre-sales, sales, and data science teams to run discovery with planners in their actual workflow, then reframed the product from a data dump into actionable business intelligence.' },
                { label: 'Business Outcome', value: '17% improvement in forecast accuracy across nearly 1,000 variables, with a platform planners could trust and act on.' },
              ]}
            >
              <p>Worked embedded with pre-sales, sales, and data science teams to make the life of a retail assortment planner easier, turning complex AI/ML outputs into intuitive, actionable intelligence inside a larger integrated platform.</p>
              <BulletList items={[
                "Partnered with pre-sales and sales teams on enterprise deals with clients including JCPenney, The Children's Place, and Evereve, translating customer pain points directly into product requirements",
                'Recognized that raw data access was creating decision paralysis for assortment planners and led the reframe toward actionable business intelligence, reducing noise and surfacing what actually mattered',
                'Collaborated with data science teams to shape AI/ML forecasting models that improved retail planning accuracy by 17% across nearly 1,000 variables',
                'Conducted extensive user research with assortment planners to identify workflow gaps and prioritize features that differentiated the platform from legacy competitors',
              ]} />
            </CaseCard>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section id="section-timeline" className="py-16 sm:py-20 px-6" style={{ backgroundColor: OFF_WHITE }}>
        <div className="w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-14" style={{ color: NAVY }}>Career Timeline</h2>
          <div className="space-y-4">
            {timelineJobs.map((job, i) => (
              <div key={i} className={`flex items-start gap-4 p-4 sm:p-5 rounded-xl border ${job.featured ? 'bg-white shadow-sm border-slate-200' : 'bg-white border-slate-100'}`}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: job.featured ? NAVY : '#f1f5f9', color: job.featured ? '#ffffff' : '#64748b' }}>
                  {job.icon}
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-0.5">
                    <h3 className="font-semibold text-sm text-slate-800">{job.title}</h3>
                    {job.featured === true && (
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: '#fef3c7', color: '#92400e' }}>Featured</span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 mb-1">{job.company} · {job.period}</p>
                  <p className="text-sm text-slate-600">{job.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section id="section-howwork" className="py-16 sm:py-20 px-6 bg-white">
        <div className="w-full">
          <h2 className="text-2xl font-bold text-center mb-2" style={{ color: NAVY }}>How I Work</h2>
          <p className="text-slate-500 text-center mb-10 sm:mb-12 text-sm">The frameworks, methods, and tools I reach for to build products that matter.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {skillGroups.map((group, i) => (
              <div key={i} className="rounded-xl p-5 border border-slate-100" style={{ backgroundColor: OFF_WHITE }}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: AMBER }} />
                  <h3 className="font-semibold text-slate-800 text-xs uppercase tracking-wide">{group.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.tags.map((t) => (
                    <span key={t} className="px-3 py-1 bg-white text-slate-600 rounded-full text-xs border border-slate-200">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="section-education" className="py-14 px-6" style={{ backgroundColor: OFF_WHITE }}>
        <div className="w-full">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: NAVY }}>Education</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {education.map((ed, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-slate-100">
                <GraduationCap className="w-5 h-5 mb-3" style={{ color: NAVY }} />
                <h4 className="font-semibold text-slate-800 mb-1">{ed.degree}</h4>
                <p className="text-slate-500 text-sm">{ed.school}</p>
                <p className="text-xs text-slate-400 mt-2">{ed.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="section-contact" className="py-20 sm:py-24 px-6" style={{ backgroundColor: NAVY }}>
        <div className="w-full">
          <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: AMBER }}>
            Let&#8217;s Work Together
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-snug text-white">
            If you&#8217;re building something<br />worth building, let&#8217;s talk.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
            I&#8217;m drawn to senior and director-level roles where getting close to the customer is the strategy, not an afterthought. Where cross-functional teams rally around a real problem and ship something that makes someone&#8217;s day better.
          </p>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10 sm:mb-12">
            If that&#8217;s the kind of product team you&#8217;re building, I&#8217;d love to be part of it.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-10 sm:mb-12">
            <a href="mailto:gilliamp2@gmail.com"
              className="text-white px-7 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-colors text-sm"
              style={{ backgroundColor: AMBER }}
              onMouseOver={handleAmberHover}
              onMouseOut={handleAmberLeave}>
              <Mail className="w-4 h-4" />gilliamp2@gmail.com
            </a>
            <a href="https://linkedin.com/in/pgilliam2" target="_blank" rel="noopener noreferrer"
              className="border border-slate-600 text-slate-300 px-7 py-4 rounded-full font-semibold hover:border-slate-400 hover:text-white transition-colors flex items-center justify-center gap-2 text-sm">
              <LinkedinIcon className="w-4 h-4" />LinkedIn
            </a>
          </div>
          <div className="border-t border-slate-700 pt-6 sm:pt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm text-slate-500">
            <span>McKinney, TX</span>
            <span>Open to hybrid and remote</span>
            <span>paul.gilliamclan.com</span>
          </div>
        </div>
      </section>
    </>
  )
}