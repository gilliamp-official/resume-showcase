'use client'

import { useState, ReactNode, MouseEvent } from 'react'
import {
  ArrowDown, Mail, Linkedin, TrendingUp, Users, Award,
  GraduationCap, Zap, Shield, Video, Bus,
  ChevronDown, ChevronUp, BarChart2,
} from 'lucide-react'
import SectionTracker from '@/components/SectionTracker'

const NAVY       = '#1a2b4a'
const AMBER      = '#d97706'
const AMBER_DARK = '#b45309'
const OFF_WHITE  = '#f8f7f4'

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
    { label: 'Smart Insights Analytics', description: 'Validated a $1.2M market opportunity through 200+ discovery sessions alongside Sales and CS. Achieved 100% paid beta retention and earned the national Inc. Magazine Innovation Award.' },
    { label: 'Automation Framework', description: 'Started lightweight and scaled with customer needs. Reached 20% platform adoption with a 4.5/5 satisfaction score by letting actual workflows drive what got automated.' },
    { label: 'ACH Payments', description: 'Identified a gap in how movers collected payments and built a native ACH platform that generated over $1M in new revenue.' },
    { label: 'OpenAPI Ecosystem', description: 'Opened the platform to third-party integrations through a structured API strategy, capturing $100K from external partners and expanding reach beyond direct customers.' },
    { label: 'Trade Show and Sales Support', description: 'Attended industry conferences and joined key sales calls to stay close to the market, support deals, and bring real customer signal back into the product process.' },
  ]

  const outcomeItems: OutcomeItem[] = [
    { label: 'The Strategic Problem', value: 'Known only as a sales CRM, the platform lacked the operational depth to move upmarket. Larger movers did not see themselves in the product.' },
    { label: 'How I Approached It', value: 'Trade show discovery, 200+ customer sessions with sales and CS, AI prototypes to align executives, and seven capabilities shipped to tell a new platform story.' },
    { label: 'Business Outcome', value: 'Contributed to $6M ARR growth, $1M+ from payments alone, and a national Inc. Magazine Innovation Award for Smart Insights.' },
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
          <Stat value="$1M+" label="Payments Revenue" accent />
          <Stat value="20%" label="Automation Adoption" />
          <Stat value="200+" label="Customer Sessions" />
        </div>
        <p className="text-slate-700 text-sm leading-relaxed mb-3">
          SmartMoving was built by a founder who was a salesperson at heart, and the product reflected that. It was genuinely great at opportunity management and everyone in the moving industry knew it as &#8220;the CRM for movers.&#8221; The problem was the company wanted to move upmarket to serve larger operators, and a CRM reputation wasn&#8217;t going to get them there.
        </p>
        <p className="text-slate-700 text-sm leading-relaxed mb-6">
          When I joined, the bigger challenge wasn&#8217;t just adding features. The existing pieces didn&#8217;t clearly connect into a coherent platform story for enterprise buyers. I spent time at industry trade shows talking directly to movers who had never considered SmartMoving for their operation because they didn&#8217;t know it could do more. That field research shaped everything. Over two years I led the expansion into seven new capability areas, rallying a cross-functional team of 10+ and working alongside sales and CS to make sure every decision was grounded in what larger operators actually needed.
        </p>
        <OutcomeGrid items={outcomeItems} />
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
    { value: '$6M+',  label: 'ARR Growth Contributed' },
    { value: '$1.2M', label: 'Market Opportunity Validated' },
    { value: '100%',  label: 'Beta Retention on Smart Insights' },
    { value: '200+',  label: 'Customer Discovery Sessions' },
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
      detail: 'Leading product strategy for an enterprise data platform, analyzing customer requirements to ensure product teams have the infrastructure and solutions needed to solve complex data and storytelling problems worth selling. Focused on enabling teams and their customers to tell the right data stories by turning complex data into clear answers that drive decisions.',
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: 'Senior Product Manager',
      company: 'SmartMoving Software',
      period: 'Jan 2024 – Jan 2026',
      detail: 'Built an Inc. Award-winning analytics platform from scratch. Validated a $1.2M opportunity with 100% beta retention. Helped drive $6M ARR growth through customer-led discovery and cross-functional execution.',
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
      detail: 'Worked directly with Booking.com to simplify targeted ad creation for hoteliers. Discovery-led improvements resulted in 15% better ad targeting accuracy.',
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
      tags: ['AI Prototyping', 'Data Storytelling', 'Embedded Analytics', 'Snowflake', 'SQL', 'Power BI', 'Behavioral Analytics', 'Generative AI'],
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
        <div className="relative z-10 px-6 max-w-5xl mx-auto w-full py-20 sm:py-24">
          <div className="max-w-3xl">
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
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mb-4">
              Not problems that look good in a roadmap. Problems validated in the field, shaped with customers, and worth paying for.
            </p>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mb-10 sm:mb-12">
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
        <div className="container mx-auto max-w-4xl">
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
        <div className="container mx-auto max-w-5xl">
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
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3" style={{ color: NAVY }}>Featured Work</h2>
          <p className="text-center text-slate-500 mb-10 sm:mb-14 max-w-2xl mx-auto text-sm">
            Products built by getting close to the customer and rallying teams around a shared vision.
          </p>
          <div className="space-y-6 sm:space-y-8">
            <SmartMovingCaseStudy />

            <CaseCard
              tag="0 to 1 Platform Build"
              title="Special Needs Student Transportation Platform"
              company="First Student"
              date="2021 – 2022"
              stat="40"
              statLabel="Person Team Led"
              outcomeItems={[
                { label: 'The Strategic Problem', value: 'First Student had no platform for special needs transportation. Districts were managing complex, high-stakes logistics with fragmented tools and no operational visibility.' },
                { label: 'How I Approached It', value: 'Traveled to school bus depots, embedded with 3 pilot districts before writing a requirement, then led a 40-person contractor team through full delivery with GTM alignment alongside sales and marketing.' },
                { label: 'Business Outcome', value: 'Launched a $1M platform spanning a web app and 2 mobile apps, serving 1,000+ students across 10+ districts, on time and on budget.' },
              ]}
            >
              <p>Hand-selected to build an entirely new vertical from scratch. I traveled to school bus depots, sat with district administrators, and embedded myself in the day-to-day before writing a single requirement. Then I led a 40-person contractor team to ship a web app, two mobile apps, and cloud infrastructure serving 1,000+ students across 10+ districts.</p>
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
                { label: 'How I Approached It', value: 'Embedded directly with pre-sales, sales, and data science teams to run discovery with planners in their actual workflow, then reframed the product from a data output into a decision-support tool.' },
                { label: 'Business Outcome', value: '17% improvement in forecast accuracy across roughly 1,000 variables, 19% reduction in manual planning work, and time-to-market accelerated by 30%.' },
              ]}
            >
              <p>Embedded with pre-sales and data science teams to solve a real user problem: assortment planners at major retailers were drowning in raw model outputs with no way to act on them. I led discovery with planners at JCPenney, The Children&#8217;s Place, and Evereve to understand their actual workflow, then reframed the product from a data dump into something they could trust and use.</p>
            </CaseCard>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section id="section-timeline" className="py-16 sm:py-20 px-6" style={{ backgroundColor: OFF_WHITE }}>
        <div className="container mx-auto max-w-3xl">
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
        <div className="container mx-auto max-w-4xl">
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
        <div className="container mx-auto max-w-3xl">
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
        <div className="container mx-auto max-w-2xl">
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
              <Linkedin className="w-4 h-4" />LinkedIn
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