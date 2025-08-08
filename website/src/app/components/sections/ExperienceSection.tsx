'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ColorCategory, 
  getBgClass, 
  getBorderClass,
  getBaseBg,
} from '@/app/utils/tailwind-helper';

// Career data from resume
const careerData = [
  {
    id: 'diggs-senior',
    company: 'DIGGS',
    location: 'New York, NY',
    title: 'Senior Ecommerce & Digital Product Manager',
    period: 'March 2022 – Present',
    achievements: [
      'Manage a team of 5+ developers and own the digital product roadmap across a headless Shopify stack, driving product and user experience enhancements and improved operational efficiency across multiple regional storefronts.',
      'Lead CRO and A/B testing strategy, launching up to 10 tests per month across PDPs, checkout, and landing pages, leading to a 28% increase in average basket size and measurable funnel improvements.',
      'Collaborate with designers to develop high-fidelity mockups, leveraging Claude-generated prototypes and code to streamline development, expedite deployments, and significantly reduce reliance on developer resources.',
      'Partner cross-functionally with Marketing/Growth and CX to translate behavioral data and user feedback into roadmap priorities, UX improvements and campaign optimizations.',
      'Launched a fully rebranded website and CMS back end in less than three months with a budget under $10k, resulting in reduced dev dependency, improved site performance, and faster content deployment.',
      'Synthesize website analytics, heatmapping data, and CX feedback to identify friction points improve the customer journey.',
      'Partner with Marketing and Growth to improve email and advertising campaigns to drive customer acquisition and retention.',
      'Write and test PDP content and messaging in collaboration with Marketing and Product Development, including experiments on positioning and value prop clarity.',
      'Implemented multiple AI-powered tools, including an internal AI chatbot integrated with company and product knowledge base, now used across the organization for training, onboarding, and documentation, and a web-based analytics dashboard (coded via Claude) making sales insights to leadership.',
      'Advocate for and lead adoption of AI technologies across departments to streamline processes, improve decision-making, and scale output efficiently.'
    ],
    color: 'ecommerce' as ColorCategory,
  },
  {
    id: 'thrasio',
    company: 'Thrasio',
    location: 'New York, NY',
    title: 'Ecommerce Specialist, UX & Site Merchandising',
    period: 'February 2021 – March 2022',
    achievements: [
      'Continuously optimize all aspects of the user experience such as information architecture, user flows, form submission, upsell/cross-sells, value messaging, pricing and position, and more.',
      'Generate wireframes to inform high fidelity assets from UI and Graphic Designers, leveraging visual content and storytelling to better convey value propositions and improve ease of use.',
      'Manage product roadmap across stakeholders by developing, prioritizing, facilitating, and ideating upon A/B tests or direct implementations as direct line of communication between business owners and developers.',
      'Perform UX audits on potential acquisition targets to inform due diligence process.',
      'Pivot to ensure site levers in place support business objectives & goals across channels at all times.',
      'Design conversion funnels and best in-class landing pages to drive high conversion.',
      'Perform extensive QA to ensure that all deployments produce the expected result across all customer touch points.',
      'Monitor data flow including Google Analytics, Google Tag Manager, and pixel integrations.'
    ],
    color: 'ux' as ColorCategory,
  },
  {
    id: 'walmart',
    company: 'Walmart eCommerce',
    location: 'Hoboken, NJ',
    title: 'Category Specialist I & II',
    period: 'June 2018 – November 2021',
    achievements: [
      'Owned end-to-end digital experience across $5M portfolio of 1,000 SKUs across 3 websites.',
      'Defined in-category experience including taxonomy, navigation, and attribution across 20 digital shelves.',
      'Increased revenue by 800% by utilizing customer behavior and trends to strategically expand SKU assortment.',
      'Drove 300BPS increase in conversion by continually A/B testing product placement, taxonomy and pricing.',
      'Increased net profit by 1,500% through cost negotiations and effective stakeholder management.',
      'Built and distributed SEM reporting enabling team of 40+ to increase ROAS by 56% within two months by reallocating spend based on customer intent.',
      'Helped brand partners increase sales by 30% per account by utilizing targeted internal marketing campaigns.',
      'Manage supply chain logistics across 7 distribution centers for import and domestic shipments at Fortune 1 scale.'
    ],
    color: 'data' as ColorCategory,
  },
  {
    id: 'electrona',
    company: 'Electrona Robotics',
    location: 'Boston, MA',
    title: 'Consultant, Go-To-Market Strategy',
    period: 'December 2017 – June 2018',
    achievements: [
      'Collaborated directly with CEO of robotics hardware startup and team of 3 additional researchers.',
      'Deliverables included competitive analysis, usability report, and go-to-market strategies for 5 industry verticals.',
      'Identified key vulnerabilities to unique value proposition and proposed strategic pivot to core business model.',
      'Performed qualitative user research on >30 participants ranging from end users to competing executives to determine and evaluate desired and competitive features for each target segment.'
    ],
    color: 'leadership' as ColorCategory,
  },
  {
    id: 'tufts',
    company: 'Tufts University Entrepreneurship Society',
    location: 'Medford, MA',
    title: 'Undergraduate Consultant',
    period: 'December 2016 – May 2017',
    achievements: [
      'Drove product development and roadmaps utilizing key insights from user and market research (150+ participants).',
      'Built marketing, sales and customer acquisition plans based on identified personas.',
      'Executed revised site messaging and imagery to reflect customer insights and increase conversion.',
      'Designed and deployed quantitative and qualitative research methods such as interviews, surveys, usability testing, card sorting and more to define strategic value proposition, target market segments and positioning.',
      'Collaborated with stakeholders including developers, C-suite and founding members.'
    ],
    color: 'ecommerce' as ColorCategory,
  },
];

export function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className={`py-20 bg-base-950`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="max-w-5xl mx-auto">
          <div className="relative min-h-[500px]">
            {/* Main vertical timeline bar that spans the entire timeline */}
            <div 
              className="absolute left-1/2 top-0 bottom-0 w-1 transform md:-translate-x-1/2" 
              style={{ 
                backgroundColor: 'var(--border)',
                height: '100%',
                minHeight: '100%',
                zIndex: 0 /* Ensure it's behind the cards */
              }} 
            />
            
            {careerData.map((entry, index) => (
              <TimelineEntry
                key={entry.id}
                entry={entry}
                index={index}
                isExpanded={expandedId === entry.id}
                toggleExpanded={() => toggleExpanded(entry.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface TimelineEntryProps {
  entry: {
    id: string;
    company: string;
    location: string;
    title: string;
    period: string;
    achievements: string[];
    color: ColorCategory;
  };
  index: number;
  isExpanded: boolean;
  toggleExpanded: () => void;
}

function TimelineEntry({ entry, index, isExpanded, toggleExpanded }: TimelineEntryProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex flex-col md:flex-row items-start mb-12 relative ${
        isEven ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Timeline dot */}
      <div className={`absolute left-3 md:left-1/2 top-1/2 transform md:-translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-background z-10 ${getBgClass(entry.color)}`} />

      {/* Content */}
      <div className={`w-full md:w-1/2 ${
        isEven 
          ? 'md:pl-0 md:pr-8 lg:pr-12' 
          : 'md:pl-8 lg:pl-12 md:pr-0'
        } pl-10`}>
        <div 
          className={`bg-timeline-bg p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden mt-0 ${
            isEven ? 'md:ml-6' : 'md:mr-6'
          }`}
          onClick={toggleExpanded}
          style={{ position: 'relative', zIndex: 1 }}
        >
          <div 
            className={`absolute top-0 left-0 h-1 w-full ${getBgClass(entry.color)}`}
          />
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-bold">{entry.title}</h3>
              <p className="text-lg font-medium">{entry.company}</p>
              <p className="text-sm text-foreground/60">{entry.location}</p>
            </div>
            <span className="text-sm text-foreground/60 ml-2">{entry.period}</span>
          </div>
          
          {entry.achievements.length > 0 && (
            <div className="mt-4 flex">
              <button 
                className={`flex items-center px-3 py-1.5 rounded-md text-sm font-medium transition-all ${getBgClass(entry.color)} bg-opacity-10 hover:bg-opacity-20 ${getBorderClass(entry.color)} border cursor-pointer`}
                aria-expanded={isExpanded}
              >
                <span>{isExpanded ? 'See less' : 'Read more'}</span>
                <ChevronIcon className={`ml-1.5 h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
              </button>
            </div>
          )}

          <AnimatePresence>
            {isExpanded && entry.achievements.length > 0 && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 overflow-hidden"
              >
                <ul className="list-disc pl-5 space-y-2 text-foreground/80">
                  {entry.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: i * 0.05 }}
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

function ChevronIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
