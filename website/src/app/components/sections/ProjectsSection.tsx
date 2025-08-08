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
  challenge: string;
  approach: string;
  outcomes: string[];
  image?: string;
  videoUrl?: string;  // URL to YouTube, Vimeo, or direct video file
  url?: string;      // Optional URL to the live project
};

// Project data
const projects: Project[] = [
  {
    id: 'canvasgenie-ai',
    title: 'CanvasGenie.ai',
    description: 'Built an ecommerce platform for creating wall art through seamless integration between AI image generation and print-on-demand services.',
    challenge: 'Creating custom artwork traditionally requires expensive professional artists or photographers. The challenge was building an end-to-end solution that handles AI image generation, storage, product visualization, cavnas selection and print fulfillment while managing complex API integrations and asynchronous processes.',
    approach: 'Developed a Next.js application with OpenAI gpt-image-1 integration for image generation, implemented Vercel Blob Storage for image persistence, and created a custom product mockup system. Built a complete e-commerce flow with Printful API integration for product catalog management and Stripe for secure checkout. ',
    outcomes: [
      'Created an accessible platform for generating custom artwork at a fraction of traditional costs',
      'Built a scalable image processing pipeline with efficient storage management',
      'Implemented seamless integration with a print-on-demand fulfillment service',
      'Developed interactive product visualization with multiple canvas and print options',
      'Streamlined the user journey from idea to finished product on their wall'
    ],
    image: '/images/projects/canvasgenie.jpg',
    videoUrl: 'https://vimeo.com/1086625243?share=copy',
    url: 'https://canvasgenie.ai'
  },
  {
    id: 'analytics-dashboard',
    title: 'Turnkey Analytics Dashboard',
    description: 'Developed a comprehensive, interactive analytics dashboard using Python, Streamlit, and Plotly that delivers multi-dimensional sales, inventory, and web metrics intelligence from Google Sheets data.',
    challenge: 'Business stakeholders needed real-time access to complex retail analytics without relying on data specialists or expensive BI tools. Traditional reporting solutions were slow to implement, inflexible, and required technical expertise.',    
    approach: "Built a scalable, universally adaptable retail analytics dashboard utilizing a standardized Google Sheets template that connects securely through service account authentication with simple sharing permissions. Built with python and advanced Plotly visualizations for trend analysis, distribution breakdowns, and comparative metrics.",
    outcomes: [
      'Created a turnkey analytics solution enabling companies of any size to gain enterprise-level capabilities without technical expertise',
      'Improved data accessibility through intuitive filters and visualizations, empowering non-technical stakeholders',
      'Developed tabs for multi-dimensional analysis across sales, returns, inventory, and web metrics, and filters for retailer, product, date, and category',
      'Delivered scalable, cloud-ready architecture supporting scheduled refreshes and multi-user access',
      'Enabled secure access through service account authentication with simple sharing permissions',
      'Developed tabs for multi-dimensional analysis across sales, returns, inventory, and web metrics',
    ],
    image: '/images/projects/analytics-dashboard.jpg',
    videoUrl: 'https://vimeo.com/manage/videos/1101038303',
    url: 'https://integrated-analytics.streamlit.app'
  },
  {
    id: 'stock-signal-analyzer',
    title: 'Stock Signal Analyzer',
    description: 'Developed a web application that analyzes stock tickers using technical indicators to identify potential buy and sell signals for more informed trading decisions.',
    challenge: 'Traders often struggle to efficiently analyze multiple technical indicators simultaneously, leading to missed opportunities or poor timing decisions. The challenge was creating an accessible platform that could process complex financial data, apply multiple technical indicators, and deliver actionable insights through clear visualizations and verbal summaries.',
    approach: 'Built a Flask web application with Python backend that leverages yfinance API for market data. Implemented comprehensive technical analysis using the TA library for indicators like Bollinger Bands, RSI, and MACD. Created customizable trading presets for different investment strategies and developed a natural language processing system to translate technical indicators into human-readable insights.',
    outcomes: [
      'Created a responsive web interface that allows traders to quickly analyze stocks with customizable technical indicators',
      'Implemented adjustable trading presets for both long-term and short-term trading strategies',
      'Developed a verbal summary engine that translates complex technical indicators into actionable insights',
      'Built an intuitive visualization system showing key indicators and signal strength',
      'Designed a user-friendly experience for traders of all experience levels to make data-driven decisions'
    ],
    image: '/images/projects/stock-screener.jpg',
    videoUrl: 'https://vimeo.com/1101033438?share=copy',
    url: 'https://stock-screener-gaa0.onrender.com/'
  },
  {
    id: 'ai-chatbot',
    title: 'Specialized AI Chatbot',
    description: 'Built a specialized AI chatbot for DIGGS integrated with an extensive product and company knowledge base, trained to address a wide variety of high frequency customer inquiries.',
    challenge: 'DIGGS products have a high consideration window and customers need quick access to product and policy information throughout their purchase journey. Customer support costs and return rates were high, and ticket resolution times left room for improvement.',
    approach: 'Built an AI-powered chatbot leveraging large language models with advanced context filtering for cost-effective knowledge retrieval, acting as a conversational sales and support agent.',
    outcomes: [
      'TBD - will be updated after launch (July 2025)'
    ],
    image: '/images/projects/ai-chatbot.jpg',
    videoUrl: 'https://vimeo.com/1101049658?share=copy'
  },
  {
    id: 'uncertainty-prevalence',
    title: 'Economic Uncertainty Analysis Dashboard',
    description: 'Built a web application analyzing economic uncertainty mentions in global news media, with a scalable backend architecture adaptable to any term analysis.',
    challenge: 'Analyzing the prevalence of "uncertainty" in economic news coverage required processing massive GDELT datasets from global sources without local storage infrastructure or excessive database usage, while creating an intuitive dashboard for exploring trends and correlations.',
    approach: 'Developed a Python backend that streams GDELT Web NGrams 3.0 data in real-time, processing millions of news mentions without local storage. Built the analysis scripts to be configurable for any keyword through command-line parameters. Created a React/TypeScript dashboard with interactive time series charts, word clouds.',
    outcomes: [
      'Successfully analyzed economic uncertainty patterns across major news outlets',
      'Built streaming architecture that processes millions of mentions without local storage',
      'Created reusable analysis framework adaptable to any term via command-line configuration',
      'Delivered interactive dashboard with time series analysis and co-occurrence insights',
      'Established scalable foundation for future media monitoring projects'
    ],
    image: '/images/uncertainty_prevalence.png',
    url: 'https://uncertainty-prevalence.vercel.app/'
  }
];

// Project card component
const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-base-800 rounded-xl shadow-md overflow-hidden flex flex-col h-full"
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
      
      <div className="p-6 flex-grow">        
        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
        <p className="text-base-600 dark:text-base-300 mb-4">{project.description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-1">Challenge:</h4>
          <p className="text-sm text-base-600 dark:text-base-400">{project.challenge}</p>
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-1">Approach:</h4>
          <p className="text-sm text-base-600 dark:text-base-400">{project.approach}</p>
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-1">Outcomes:</h4>
          <ul className="list-disc pl-5 text-sm text-base-600 dark:text-base-400">
            {project.outcomes.map((outcome, i) => (
              <li key={i} className="mb-1">{outcome}</li>
            ))}
          </ul>
        </div>
        
        {project.url && (
          <div className="mt-4">
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium ${getIconBgClass('ai')} ${getIconTextClass('ai')} hover:opacity-90 transition-opacity`}
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
            Explore my key projects and achievements across ecommerce, UX, and data-driven growth initiatives.
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
