'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { VideoModal } from '@/app/components/ui/VideoModal';
import { 
  getBgClass, 
  getIconBgClass, 
  getIconTextClass 
} from '@/app/utils/tailwind-helper';

// Define project types
type Project = {
  id: string;
  title: string;
  description: string;
  keyMetric?: string;
  techStack: string[];
  image?: string;
  videoUrl?: string;
  url?: string;
};

// Project data
const projects: Project[] = [
  {
    id: 'canvasgenie-ai',
    title: 'CanvasGenie.ai',
    description: 'Ecommerce platform for creating wall art through seamless integration between AI image generation and print-on-demand services. Built end-to-end solution from AI image generation to doorstep delivery with seamless Stripe checkout and automated print fulfillment.',
    keyMetric: 'Fraction of traditional custom art costs',
    techStack: ['Next.js', 'OpenAI', 'Vercel Blob', 'Stripe', 'Printful API'],
    image: '/images/projects/canvasgenie.jpg',
    videoUrl: 'https://vimeo.com/1086625243?share=copy',
    url: 'https://canvasgenie.ai'
  },
  {
    id: 'analytics-dashboard',
    title: 'Turnkey Analytics Dashboard',
    description: 'Enterprise-level retail analytics for any business without technical expertise or expensive BI tools. Connects securely to Google Sheets data and delivers comprehensive sales, inventory, and web metrics through intuitive visualizations and filters.',
    keyMetric: 'Enterprise capabilities for any business size',
    techStack: ['Python', 'Streamlit', 'Plotly', 'Google Sheets API'],
    image: '/images/projects/analytics-dashboard.jpg',
    videoUrl: 'https://vimeo.com/manage/videos/1101038303',
    url: 'https://integrated-analytics.streamlit.app'
  },
  {
    id: 'stock-signal-analyzer',
    title: 'Stock Signal Analyzer',
    description: 'Makes complex technical analysis accessible to all traders by translating multiple indicators (Bollinger Bands, RSI, MACD) into clear buy/sell signals and human-readable insights. Features customizable trading presets for different investment strategies.',
    keyMetric: 'Technical analysis made accessible',
    techStack: ['Python', 'Flask', 'yfinance', 'TA Library'],
    image: '/images/projects/stock-screener.jpg',
    videoUrl: 'https://vimeo.com/1101033438?share=copy',
    url: 'https://stock-screener-gaa0.onrender.com/'
  },
  {
    id: 'ai-chatbot',
    title: 'Specialized AI Chatbot',
    description: 'AI-powered customer support chatbot for DIGGS that reduces support costs and improves customer experience. Trained on extensive product and company knowledge base to handle high-frequency inquiries throughout the customer journey.',
    keyMetric: 'Launching July 2025',
    techStack: ['LLM', 'Context Filtering', 'Knowledge Base'],
    image: '/images/projects/ai-chatbot.jpg',
    videoUrl: 'https://vimeo.com/1101049658?share=copy'
  },
  {
    id: 'uncertainty-prevalence',
    title: 'Economic Uncertainty Analysis',
    description: 'Processes millions of global news mentions to analyze economic uncertainty trends without local storage infrastructure. Built with configurable architecture that adapts to analyze any keyword, delivering insights through interactive time series and word cloud visualizations.',
    keyMetric: 'Millions of mentions processed',
    techStack: ['Python', 'React', 'TypeScript', 'GDELT API'],
    image: '/images/uncertainty_prevalence.png',
    url: 'https://uncertainty-prevalence.vercel.app/'
  }
];

// Tech stack badge component
const TechBadge: React.FC<{ tech: string }> = ({ tech }) => (
  <span className="inline-block px-2 py-1 text-xs font-medium bg-base-100 dark:bg-base-700 text-base-700 dark:text-base-300 rounded-md">
    {tech}
  </span>
);

// Project card component
const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-base-800 rounded-xl shadow-md overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow"
    >
      {project.videoUrl ? (
        <div className="aspect-video">
          <VideoModal 
            videoUrl={project.videoUrl}
            thumbnailUrl={project.image}
          />
        </div>
      ) : project.image ? (
        <div className="aspect-video relative">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <div className={`aspect-video ${getBgClass('ai')} flex items-center justify-center`}>
          <div className={`w-16 h-16 rounded-full ${getIconBgClass('ai')} flex items-center justify-center`}>
            <span className={`text-2xl font-bold ${getIconTextClass('ai')}`}>
              {project.title.charAt(0)}
            </span>
          </div>
        </div>
      )}
      
      <div className="p-6 flex-grow flex flex-col">        
        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
        
        {project.keyMetric && (
          <div className="mb-3">
            <span className={`inline-flex items-center px-2 py-1 text-sm font-medium bg-data-dark text-white rounded-md`}>
              💡 {project.keyMetric}
            </span>
          </div>
        )}
        
        <p className="text-base-600 dark:text-base-300 mb-4 leading-relaxed flex-grow">
          {project.description}
        </p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <TechBadge key={i} tech={tech} />
            ))}
          </div>
        </div>
        
        {project.url && (
          <div className="mt-auto">
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium bg-ecommerce-dark text-white hover:opacity-90 transition-opacity`}
            >
              View Live Project
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Project Showcase</h2>
          <p className="text-base-600 dark:text-base-400 max-w-2xl mx-auto">
            Building solutions that solve real problems and deliver measurable value.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};