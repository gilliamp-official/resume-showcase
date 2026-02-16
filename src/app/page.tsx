'use client'

import { ArrowDown, Mail, Linkedin, Github, Target, TrendingUp, Users, Award, GraduationCap, Zap, BarChart3, Shield, Code, Database, Layers, Video } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 opacity-95"></div>
        
        {/* Animated background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.1) 2%, transparent 0%)`,
            backgroundSize: '50px 50px' 
          }}></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Paul Gilliam</h1>
          <h2 className="text-2xl font-light text-white/90 mb-6">Analytics & Solutions Leader | Transportation & B2B SaaS</h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
          I use data to prove value before companies spend millions building. Through analytics, forecasting models, and systematic business validation, I turn technical possibilities into revenue-generating realities.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 text-center mb-10">
            <div>
              <div className="text-3xl font-bold text-white">National Award</div>
              <div className="text-sm text-white/80">Inc. Magazine Innovation</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">17%</div>
              <div className="text-sm text-white/80">Forecasting Accuracy Gain (AI/ML)</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">$1.2M</div>
              <div className="text-sm text-white/80">Market Validated Through Data</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">200+</div>
              <div className="text-sm text-white/80">Business Validation Sessions</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#contact" className="px-8 py-3 bg-white text-blue-700 rounded-full font-medium hover:bg-blue-50 transition-colors shadow-lg">
              Contact
            </a>
            <a href="https://linkedin.com/in/pgilliam2" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors">
              LinkedIn
            </a>
          </div>
          
          <div className="animate-bounce mt-8">
            <ArrowDown className="w-6 h-6 text-white" />
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600">
            How I Deliver Results
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="text-4xl text-blue-600 mb-4 flex justify-center">
                <Database className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Analytics Validation</h3>
              <p className="text-gray-600 mb-4 text-center">I use analytics to prove business value before companies commit resources. Built forecasting models with 17% accuracy improvements, created behavioral analytics mapping customer segments to revenue, validated $1.2M opportunities with data.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>Predictive modeling & forecasting</li>
                <li>Customer behavioral analytics</li>
                <li>Market validation through data</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="text-4xl text-green-600 mb-4 flex justify-center">
                <TrendingUp className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Business Value Mapping</h3>
              <p className="text-gray-600 mb-4 text-center">My MBA trained me to connect technical solutions to business outcomes. I quantify value through data—from ROI models to usage analytics to market sizing—ensuring every solution maps to revenue or cost savings.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>ROI & value quantification</li>
                <li>Market opportunity analysis</li>
                <li>Revenue impact modeling</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="text-4xl text-purple-600 mb-4 flex justify-center">
                <Code className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Technical Implementation</h3>
              <p className="text-gray-600 mb-4 text-center">Deep expertise with Snowflake, Azure ML/AI, Power BI, Python. I don't just recommend tools—I architect data warehouses, build ETL pipelines, deploy cloud solutions, and create the analytics that drive decisions.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>Snowflake data architecture</li>
                <li>Azure ML/AI deployment</li>
                <li>ETL pipeline development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data Platform Expertise */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600">
            Technical Stack & Expertise
          </h2>
          <p className="text-xl text-center text-gray-700 mb-16 max-w-3xl mx-auto">
            Years of hands-on experience with modern data platforms and analytics tools—not just surface-level knowledge, but deep implementation and architecture experience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Database className="w-6 h-6 text-blue-600" />
                Data Platforms & Warehousing
              </h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <div className="font-semibold mb-1">Snowflake</div>
                  <p className="text-sm text-gray-600">Owned and managed SmartMoving's data warehouse. Built custom data models, optimized queries, architected data integration strategy.</p>
                </div>
                <div>
                  <div className="font-semibold mb-1">Azure (Synapse, Data Factory, Foundry)</div>
                  <p className="text-sm text-gray-600">Deployed full-stack analytics applications, built ETL pipelines, implemented ML/AI solutions at Zebra Technologies.</p>
                </div>
                <div>
                  <div className="font-semibold mb-1">Power BI & Sigma Computing</div>
                  <p className="text-sm text-gray-600">Extensive experience across multiple companies. CEOs seek my advice on implementation. Personally sold Sigma licenses to enterprise customers.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Code className="w-6 h-6 text-green-600" />
                Analytics & Development
              </h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <div className="font-semibold mb-1">Python</div>
                  <p className="text-sm text-gray-600">Built analytics apps, APIs, custom ETL logic. Used for rapid prototyping and data analysis across SmartMoving and Zebra.</p>
                </div>
                <div>
                  <div className="font-semibold mb-1">SQL & Data Modeling</div>
                  <p className="text-sm text-gray-600">Created custom data models mapping to business concepts, wrote complex queries, optimized performance for customer-facing dashboards.</p>
                </div>
                <div>
                  <div className="font-semibold mb-1">Customer Analytics</div>
                  <p className="text-sm text-gray-600">Built behavioral dashboards modeling customer usage by revenue tier. Portfolio companies use these models for strategic planning.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600">
            Impact & Results
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-200">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">$5M+</div>
              <div className="text-sm text-gray-600">Revenue Growth Driven</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-200">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">$10M+</div>
              <div className="text-sm text-gray-600">ACH Transactions Managed</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-200">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">100%</div>
              <div className="text-sm text-gray-600">Beta Product Retention</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-200">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent mb-2">200+</div>
              <div className="text-sm text-gray-600">Customer Discovery Interviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600">
            Featured Projects
          </h2>
          
          <div className="space-y-8">
            {/* Smart Insights */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-3">
                    <Award className="w-6 h-6 text-yellow-600" />
                    Smart Insights: Moving Operations Intelligence
                  </h3>
                  <p className="text-gray-600 mb-4">SmartMoving Software 2024 • Inc. Magazine Innovation Award Winner</p>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-gray-500">Beta Retention</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Won national innovation award for analytics platform that validated $1.2M market opportunity through data. Built behavioral analytics models, Snowflake integrations, and customer usage dashboards that proved business value before engineering commitment.</p>
              
              <div className="bg-blue-50 rounded-xl p-6 mt-4 border-2 border-blue-200">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Database className="w-5 h-5 text-blue-600" />
                  Analytics & Validation Approach
                </h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>Architected Snowflake data warehouse integration with custom ETL pipelines</li>
                  <li>Built behavioral analytics dashboards modeling customer segments by revenue tier</li>
                  <li>Created data models mapping warehouse data to moving industry business metrics</li>
                  <li>Conducted 200+ business validation sessions analyzing usage patterns and ROI</li>
                  <li>Quantified value through retention metrics, usage analytics, and willingness-to-pay data</li>
                  <li>Validated $1.2M opportunity with 100% paid beta retention using analytics evidence</li>
                </ul>
              </div>

              <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <a href="https://www.youtube.com/watch?v=oX2n4CgRtnE" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-blue-600 hover:text-blue-800 font-semibold">
                  <Video className="w-5 h-5" />
                  Watch Technical Demo & Business Presentation
                </a>
                <p className="text-sm text-gray-600 mt-2">See how I present data-driven solutions to business stakeholders</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mt-4">
                <div>
                  <strong className="text-gray-800">Market Validation:</strong>
                  <p className="text-gray-600">$1.2M opportunity proven through usage analytics</p>
                </div>
                <div>
                  <strong className="text-gray-800">Data-Driven Approach:</strong>
                  <p className="text-gray-600">Behavioral models, ROI analysis, retention metrics</p>
                </div>
                <div>
                  <strong className="text-gray-800">Recognition:</strong>
                  <p className="text-gray-600">Inc. Magazine National Innovation Award</p>
                </div>
              </div>
            </div>

            {/* Zebra Technologies Forecasting */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                    AI/ML Forecasting: Fashion Retail Planning
                  </h3>
                  <p className="text-gray-600 mb-4">Zebra Technologies 2023-2024</p>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <div className="text-2xl font-bold text-purple-600">17%</div>
                  <div className="text-sm text-gray-500">Accuracy Improvement</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Developed AI/ML forecasting algorithms for fashion retail assortment planning using Azure ML. Improved forecast accuracy by 17% in early models while accounting for ~1000 variables across inventory, seasonality, and market trends.</p>
              
              <div className="bg-purple-50 rounded-xl p-6 mt-4 border-2 border-purple-200">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Code className="w-5 h-5 text-purple-600" />
                  Technical & Business Approach
                </h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>Built machine learning models using Azure Synapse, Data Factory, and Foundry</li>
                  <li>Processed ~1000 variables including inventory levels, seasonal patterns, historical sales</li>
                  <li>Validated models against retail planning teams to ensure business applicability</li>
                  <li>Achieved 17% forecasting accuracy improvement, reducing manual planning work by 19%</li>
                  <li>Partnered with retail operations to translate model outputs into actionable insights</li>
                </ul>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mt-4">
                <div>
                  <strong className="text-gray-800">Technical Stack:</strong>
                  <p className="text-gray-600">Azure Synapse, Data Factory, ML Foundry, Python</p>
                </div>
                <div>
                  <strong className="text-gray-800">Business Impact:</strong>
                  <p className="text-gray-600">19% reduction in manual planning work</p>
                </div>
                <div>
                  <strong className="text-gray-800">Model Complexity:</strong>
                  <p className="text-gray-600">~1000 variables across retail operations</p>
                </div>
              </div>
            </div>

            {/* ACH Payment Platform */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-3">
                    <Shield className="w-6 h-6 text-green-600" />
                    ACH Payment Platform
                  </h3>
                  <p className="text-gray-600 mb-4">SmartMoving Software 2024</p>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <div className="text-2xl font-bold text-blue-600">$10M+</div>
                  <div className="text-sm text-gray-500">Transactions Managed</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Launched and operationalized ACH platform handling $10M+ in transactions. Executed full compliance lifecycle, achieved first-try audit success, and directly reduced processing costs for customers.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong className="text-gray-800">Platform Launch:</strong>
                  <p className="text-gray-600">$10M+ transaction volume handling</p>
                </div>
                <div>
                  <strong className="text-gray-800">Compliance Excellence:</strong>
                  <p className="text-gray-600">First-try audit success with full lifecycle execution</p>
                </div>
                <div>
                  <strong className="text-gray-800">Revenue Impact:</strong>
                  <p className="text-gray-600">$1M ARR generated through strategic partnership</p>
                </div>
              </div>
            </div>

            {/* Platform Transformation */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-3">
                    <Layers className="w-6 h-6 text-purple-600" />
                    Platform Transformation Through Behavioral Analytics
                  </h3>
                  <p className="text-gray-600 mb-4">SmartMoving Software 2024-2025</p>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <div className="text-2xl font-bold text-purple-600">1000+</div>
                  <div className="text-sm text-gray-500">Hours Saved (Quantified)</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Used behavioral analytics and customer segmentation data to drive platform evolution from basic CRM to comprehensive operations hub. Built data models identifying feature gaps, quantified business value, and enabled enterprise expansion.</p>
              
              <div className="bg-purple-50 rounded-xl p-6 mt-4 border-2 border-purple-200">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-purple-600" />
                  Analytics-Driven Strategy
                </h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>Built behavioral analytics dashboard modeling customer usage by revenue tier</li>
                  <li>Created data models to identify feature adoption patterns and usage gaps</li>
                  <li>Quantified business impact: 1000+ hours saved annually (calculated from usage data)</li>
                  <li>Validated enterprise opportunities through customer segmentation analysis</li>
                  <li>Used analytics to prioritize features with highest ROI potential</li>
                </ul>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mt-4">
                <div>
                  <strong className="text-gray-800">Dispatch Analytics:</strong>
                  <p className="text-gray-600">80% adoption rate measured through usage data</p>
                </div>
                <div>
                  <strong className="text-gray-800">Claims Module:</strong>
                  <p className="text-gray-600">100% enterprise usage validated through analytics</p>
                </div>
                <div>
                  <strong className="text-gray-800">Automation ROI:</strong>
                  <p className="text-gray-600">1000+ hours saved (quantified via customer data)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600">
            Experience
          </h2>
          
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-xl shadow-md border border-gray-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-800">Senior Product Manager</h3>
                <p className="text-gray-600">SmartMoving Software Jan 2024 - Jan 2026</p>
                <div className="text-sm text-gray-500 mt-3 space-y-2">
                  <p><strong>Data platform ownership:</strong> Owned Snowflake data warehouse, built ETL pipelines, created custom data models for analytics products</p>
                  <p><strong>Solutions delivery:</strong> Built full-stack analytics app in Azure, presented technical solutions to customers, personally sold licenses to enterprise accounts</p>
                  <p><strong>Business impact:</strong> Won national innovation award (Inc. Magazine), validated $1.2M market opportunity with 100% beta retention, drove platform expansion</p>
                </div>
              </div>
              <div className="text-center flex-shrink-0">
                <div className="text-lg font-bold text-green-600">$5M+</div>
                <div className="text-xs text-gray-500">Value Created</div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-xl shadow-md border border-gray-200">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-800">Senior Product Manager</h3>
                <p className="text-gray-600">Zebra Technologies Nov 2022 - Jan 2024</p>
                <p className="text-sm text-gray-500 mt-2">Built AI/ML forecasting models using Azure Synapse, Data Factory, and Foundry. Improved retail planning forecast accuracy by 17% while processing ~1000 variables. Reduced manual work by 19%.</p>
              </div>
              <div className="text-center flex-shrink-0">
                <div className="text-lg font-bold text-purple-600">17%</div>
                <div className="text-xs text-gray-500">Accuracy Gain</div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-xl shadow-md border border-gray-200">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-800">Product Manager</h3>
                <p className="text-gray-600">Koddi Jun 2022 - Nov 2022</p>
                <p className="text-sm text-gray-500 mt-2">Enhanced digital advertising platform for enterprise clients. Created ad workflow for Booking.com saving hotel users 20 minutes per session with 21% improved targeting rate.</p>
              </div>
              <div className="text-center flex-shrink-0">
                <div className="text-lg font-bold text-orange-600">20 min</div>
                <div className="text-xs text-gray-500">Time Saved</div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-xl shadow-md border border-gray-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-800">Product Manager</h3>
                <p className="text-gray-600">First Student Sep 2021 - Jun 2022</p>
                <p className="text-sm text-gray-500 mt-2">Led strategic transformation coordinating 40+ engineers delivering platform consolidation with $20M projected revenue impact.</p>
              </div>
              <div className="text-center flex-shrink-0">
                <div className="text-lg font-bold text-blue-600">$20M</div>
                <div className="text-xs text-gray-500">Projected Revenue</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Platforms */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600">
            Tools & Platforms
          </h2>
          <p className="text-xl text-center text-gray-700 mb-16 max-w-3xl mx-auto">
            Years of hands-on experience with industry-leading data platforms and analytics tools
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <img src="https://cdn.brandfetch.io/snowflake.com/w/400/h/400" alt="Snowflake" className="h-12 w-12 object-contain mb-2" onError={(e) => (e.target as HTMLImageElement).style.display = 'none'} />
              <span className="text-sm font-semibold text-gray-700">Snowflake</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <img src="https://cdn.brandfetch.io/microsoft.com/w/400/h/400" alt="Azure" className="h-12 w-12 object-contain mb-2" onError={(e) => (e.target as HTMLImageElement).style.display = 'none'} />
              <span className="text-sm font-semibold text-gray-700">Azure</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <img src="https://cdn.brandfetch.io/powerbi.microsoft.com/w/400/h/400" alt="Power BI" className="h-12 w-12 object-contain mb-2" onError={(e) => (e.target as HTMLImageElement).style.display = 'none'} />
              <span className="text-sm font-semibold text-gray-700">Power BI</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <img src="https://cdn.brandfetch.io/sigmacomputing.com/w/400/h/400" alt="Sigma Computing" className="h-12 w-12 object-contain mb-2" onError={(e) => (e.target as HTMLImageElement).style.display = 'none'} />
              <span className="text-sm font-semibold text-gray-700">Sigma</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <img src="https://cdn.brandfetch.io/python.org/w/400/h/400" alt="Python" className="h-12 w-12 object-contain mb-2" onError={(e) => (e.target as HTMLImageElement).style.display = 'none'} />
              <span className="text-sm font-semibold text-gray-700">Python</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <img src="https://cdn.brandfetch.io/tableau.com/w/400/h/400" alt="Tableau" className="h-12 w-12 object-contain mb-2" onError={(e) => (e.target as HTMLImageElement).style.display = 'none'} />
              <span className="text-sm font-semibold text-gray-700">Tableau</span>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Database className="w-5 h-5 text-blue-600" />
                Data Platforms
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li><strong>Snowflake:</strong> Warehouse ownership, data modeling, query optimization</li>
                <li><strong>Azure:</strong> Synapse, Data Factory, ML Foundry deployment</li>
                <li><strong>SQL:</strong> Complex queries, performance tuning, ETL development</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-green-600" />
                Analytics & Visualization
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li><strong>Power BI / Tableau:</strong> Dashboard development, DAX, advanced viz</li>
                <li><strong>Sigma Computing:</strong> Implementation, sales, enterprise deployment</li>
                <li><strong>Python:</strong> Data analysis, ML models, API development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Recognition */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600">
            Foundation & Recognition
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-blue-600" />
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">MBA - Business Management</h4>
                  <p className="text-gray-600">Quantic School of Business and Technology</p>
                  <p className="text-sm text-gray-500">Platform Economics, Competitive Analysis, Strategic Market Development</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">B.S. Information Systems & Business</h4>
                  <p className="text-gray-600">University of Colorado Colorado Springs 4.0 GPA, Summa Cum Laude</p>
                  <p className="text-sm text-gray-500">Enterprise Platform Architecture, Strategic Systems Design</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-yellow-600" />
                Recognition & Impact
              </h3>
              <div className="space-y-4 text-sm">
                <div className="text-gray-700">Inc. Magazine Innovation Award (Smart Insights)</div>
                <div className="text-gray-700">Strategic Entrepreneurship Recognition</div>
                <div className="text-gray-700">Published Strategic Framework Development</div>
                <div className="text-gray-700">5-Year Community Leadership (600+ Homes)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="py-16 px-6 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6 relative pb-4 inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:w-full after:h-1 after:bg-blue-300">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-blue-100 mb-8">I bring deep data platform expertise, customer discovery skills, and the ability to bridge technical execution with business strategy.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-3xl mb-2">📊</div>
              <div className="font-bold mb-2">I Analyze</div>
              <div className="text-sm text-white/80">Snowflake, Power BI, Python, behavioral analytics</div>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-3xl mb-2">🎯</div>
              <div className="font-bold mb-2">I Validate</div>
              <div className="text-sm text-white/80">Customer discovery, market testing, data-driven decisions</div>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-3xl mb-2">💼</div>
              <div className="font-bold mb-2">I Deliver</div>
              <div className="text-sm text-white/80">Build, present, and sell solutions to customers</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="mailto:gilliamp2@protonmail.com" className="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              gilliamp2@protonmail.com
            </a>
          </div>
          
          <div className="mt-8 flex justify-center gap-6">
            <a href="https://linkedin.com/in/pgilliam2" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/gilliamp-official" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}