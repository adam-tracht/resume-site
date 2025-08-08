'use client';

import { motion } from 'framer-motion';
import { 
  getIconBgClass, 
  getIconTextClass, 
  ColorCategory
} from '@/app/utils/tailwind-helper';

// Expertise data
const expertiseData = [
  {
    id: 'ecommerce',
    title: 'Ecommerce & Digital Product Management',
    description: 'Driving growth through strategic product development, optimization, and user-centric design.',
    skills: [
      'Product Roadmap Development',
      'Conversion Rate Optimization',
      'Headless Shopify Architecture',
      'Digital Product Strategy',
      'Merchandising & Catalog Management',
    ],
    color: 'ecommerce' as ColorCategory,
    icon: EcommerceIcon,
  },
  {
    id: 'ux',
    title: 'UX Research & Design',
    description: 'Creating intuitive, engaging user experiences through research-driven design methodologies.',
    skills: [
      'User Research & Testing',
      'Information Architecture',
      'Wireframing & Prototyping',
      'User Journey Mapping',
      'Usability Heuristics',
    ],
    color: 'ux' as ColorCategory,
    icon: UXIcon,
  },
  {
    id: 'testing',
    title: 'A/B Testing & CRO',
    description: 'Optimizing digital experiences through data-driven experimentation and analysis.',
    skills: [
      'Hypothesis Development',
      'Test Design & Implementation',
      'Statistical Analysis',
      'Multivariate Testing',
      'Conversion Funnel Optimization',
    ],
    color: 'data' as ColorCategory,
    icon: TestingIcon,
  },
  {
    id: 'ai',
    title: 'AI Implementation & Adoption',
    description: 'Leveraging AI technologies to solve complex problems and improve business efficiency.',
    skills: [
      'AI Tool Integration',
      'Prompt Engineering',
      'AI-Powered Analytics',
      'Process Automation',
      'AI Adoption Strategy',
    ],
    color: 'ai' as ColorCategory,
    icon: AIIcon,
  },
  {
    id: 'data',
    title: 'Data Analysis & Reporting',
    description: 'Transforming raw data into actionable insights to drive strategic decision-making.',
    skills: [
      'Analytics Implementation',
      'Dashboard Development',
      'KPI Tracking & Analysis',
      'Data Visualization',
      'Performance Reporting',
    ],
    color: 'data' as ColorCategory,
    icon: DataIcon,
  },
  {
    id: 'leadership',
    title: 'Cross-functional Leadership',
    description: 'Building and leading high-performing teams across multiple disciplines.',
    skills: [
      'Team Management',
      'Stakeholder Communication',
      'Project Management',
      'Strategic Planning',
      'Vendor Management',
    ],
    color: 'leadership' as ColorCategory,
    icon: LeadershipIcon,
  },
];

export function ExpertiseSection() {
  return (
    <section id="expertise" className={`py-20`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">Areas of Expertise</h2>
          <p className="text-foreground/70 text-center max-w-2xl mx-auto mb-12">
            My core competencies across ecommerce, UX, data analysis, and AI implementation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseData.map((expertise, index) => (
            <ExpertiseCard 
              key={expertise.id} 
              expertise={expertise} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ExpertiseCardProps {
  expertise: {
    id: string;
    title: string;
    description: string;
    skills: string[];
    color: ColorCategory;
    icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
  };
  index: number;
}

function ExpertiseCard({ expertise, index }: ExpertiseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-base-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center mb-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${getIconBgClass(expertise.color)}`}>
          <expertise.icon className={`w-5 h-5 ${getIconTextClass(expertise.color)}`} />
        </div>
        <h3 className="text-xl font-bold">{expertise.title}</h3>
      </div>
      <p className="text-foreground/70 mb-6">{expertise.description}</p>
      <div className="flex flex-wrap gap-2">
        {expertise.skills.map((skill, skillIndex) => (
          <SkillTag
            key={skill}
            name={skill}
            color={expertise.color}
            index={skillIndex}
          />
        ))}
      </div>
    </motion.div>
  );
}

interface SkillTagProps {
  name: string;
  color: ColorCategory;
  index: number;
}

function SkillTag({ name, color, index }: SkillTagProps) {
  // Map color category to the appropriate dark background class
  const bgClass = color === 'ecommerce' ? 'bg-ecommerce-dark' :
                 color === 'ux' ? 'bg-ux-dark' :
                 color === 'ai' ? 'bg-ai-dark' :
                 color === 'data' ? 'bg-data-dark' :
                 color === 'leadership' ? 'bg-leadership-dark' : 'bg-gray-700';

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.1 + (index * 0.05) }}
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-white shadow-md ${bgClass}`}
    >
      {name}
    </motion.div>
  );
}

// Icon components
function EcommerceIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function UXIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  );
}

function TestingIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function AIIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12 2a8 8 0 0 0-8 8c0 1.5.4 2.9 1.1 4.1.3.5.5 1 .8 1.5l.17.29c.2.35.4.7.59 1.05.2.34.37.67.52 1 .31.7.5 1.32.5 1.87 0 .7.67.99 1.31.99h6c.64 0 1.31-.29 1.31-.99 0-.55.19-1.17.5-1.87.15-.33.32-.66.52-1 .19-.35.39-.7.59-1.05l.17-.29c.3-.5.6-1 .8-1.5A7.93 7.93 0 0 0 20 10a8 8 0 0 0-8-8z" />
      <path d="m12.55 18.54-.39.31-.4-.31c-.2-.16-.4-.33-.6-.51A9.59 9.59 0 0 1 9.3 16.2a7.17 7.17 0 0 1-1.81-4.7 4.51 4.51 0 0 1 9 0 7.17 7.17 0 0 1-1.81 4.7 9.59 9.59 0 0 1-1.86 1.84c-.2.18-.4.35-.6.51z" />
    </svg>
  );
}

function DataIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7.5" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h18" />
      <path d="M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <path d="m22 22-1.5-1.5" />
    </svg>
  );
}

function LeadershipIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
