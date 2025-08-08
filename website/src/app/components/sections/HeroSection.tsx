'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { ColorCategory, getBgClass, getIconTextClass } from '@/app/utils/tailwind-helper';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-base-950 via-background to-base-900 z-0" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          {/* Text content - takes 3 columns on md screens */}
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                <span className="text-foreground">Hi, I'm Adam</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-xl md:text-3xl font-medium text-primary mb-4">
                Data Enthusiast - AI Maximalist - Builder - Ecommerce Expert
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-base md:text-lg text-foreground/80 mb-6 max-w-2xl">
              A Vermonter who traded maple syrup for Brooklyn bagels. I've spent 7+ years helping ecommerce companies optimize their user experiences and product strategies. Since the emergence of mainstream genAI tools, I've been obsessively learning and building with AI. Now, I'm combining that passion with my product expertise to solve real problems for businesses and individuals.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="#contact" 
                className={`px-5 py-2.5 bg-ecommerce-dark text-white rounded-md hover:bg-ecommerce transition-colors font-medium shadow-sm flex items-center gap-2`}
              >
                <span className="relative">Get in Touch</span>
              </a>
              <a 
                href="#projects" 
                className={`px-5 py-2.5 bg-ai-dark text-white rounded-md hover:bg-ai transition-colors font-medium shadow-sm flex items-center gap-2`}
              >
                <span className="relative">View Projects</span>
              </a>
            </motion.div>
          </div>
          
          {/* Image - takes 2 columns on md screens */}
          <motion.div 
            className="md:col-span-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary/20">
              {/* Replace with your actual image path */}
              <div className="absolute inset-0 flex items-center justify-center bg-base-800 text-foreground/50">
                <p className="text-sm">Your image here</p>
                {<Image 
                  src="/images/headshot.jpeg" 
                  alt="Adam Tracht" 
                  fill 
                  className="object-cover"
                  priority
                />}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Key metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <MetricCard 
            value="50+" 
            label="A/B Tests" 
            description="Implemented & analyzed"
            color="var(--color-data)"
          />
          <MetricCard 
            value="5+" 
            label="Websites" 
            description="Redesigned & optimized"
            color="var(--color-ux)"
          />
          <MetricCard 
            value="20+" 
            label="Landing Pages" 
            description="built & converted"
            color="var(--color-ecommerce)"
          />
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={() => {
          // Find the next section and scroll to it
          const nextSection = document.querySelector('section:nth-of-type(2)');
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        aria-label="Scroll to next section"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            const nextSection = document.querySelector('section:nth-of-type(2)');
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }}
      >
        <div className="flex flex-col items-center">
          <motion.div 
            className="text-foreground/70 text-2xl"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            ↓
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function MetricCard({ value, label, description, color }: { 
  value: string; 
  label: string; 
  description: string;
  color: string;
}) {
  return (
    <motion.div 
      className="bg-card p-6 rounded-lg shadow-sm border border-border relative overflow-hidden"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div 
        className="absolute top-0 left-0 h-1 w-full" 
        style={{ backgroundColor: color }}
      />
      <h3 className="text-3xl md:text-4xl font-mono font-bold" style={{ color }}>
        {value}
      </h3>
      <p className="text-lg font-medium mt-2">{label}</p>
      <p className="text-sm text-foreground/60 mt-1">{description}</p>
    </motion.div>
  );
}
