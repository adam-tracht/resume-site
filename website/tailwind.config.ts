import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Expertise area colors - using CSS variables
        ecommerce: 'var(--color-ecommerce)',
        'ecommerce-light': 'var(--color-ecommerce-light)',
        'ecommerce-dark': 'var(--color-ecommerce-dark)',
        'ecommerce-bg': 'var(--color-ecommerce-bg)',
        
        ux: 'var(--color-ux)',
        'ux-light': 'var(--color-ux-light)',
        'ux-dark': 'var(--color-ux-dark)',
        'ux-bg': 'var(--color-ux-bg)',
        
        ai: 'var(--color-ai)',
        'ai-light': 'var(--color-ai-light)',
        'ai-dark': 'var(--color-ai-dark)',
        'ai-bg': 'var(--color-ai-bg)',
        
        data: 'var(--color-data)',
        'data-light': 'var(--color-data-light)',
        'data-dark': 'var(--color-data-dark)',
        'data-bg': 'var(--color-data-bg)',
        
        leadership: 'var(--color-leadership)',
        'leadership-light': 'var(--color-leadership-light)',
        'leadership-dark': 'var(--color-leadership-dark)',
        'leadership-bg': 'var(--color-leadership-bg)',
        
        // Custom UI colors
        'timeline-bg': 'var(--color-timeline-bg)',
        
        // Primary colors
        primary: {
          '50': 'var(--color-primary-50)',
          '100': 'var(--color-primary-100)',
          '200': 'var(--color-primary-200)',
          '300': 'var(--color-primary-300)',
          '400': 'var(--color-primary-400)',
          '500': 'var(--color-primary-500)',
          '600': 'var(--color-primary-600)',
          '700': 'var(--color-primary-700)',
          '800': 'var(--color-primary-800)',
          '900': 'var(--color-primary-900)',
        },
        
        // Neutral colors
        base: {
          '50': 'var(--color-base-50)',
          '100': 'var(--color-base-100)',
          '200': 'var(--color-base-200)',
          '300': 'var(--color-base-300)',
          '400': 'var(--color-base-400)',
          '500': 'var(--color-base-500)',
          '600': 'var(--color-base-600)',
          '700': 'var(--color-base-700)',
          '800': 'var(--color-base-800)',
          '900': 'var(--color-base-900)',
          '950': 'var(--color-base-950)',
        },
      },
      fontFamily: {
        // Sans-serif for readability
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        // Monospace for metrics and technical elements
        mono: ['var(--font-roboto-mono)', 'monospace'],
      },
      spacing: {
        // Custom spacing system with mathematical proportions
        '4xs': '0.125rem', // 2px
        '3xs': '0.25rem',  // 4px
        '2xs': '0.5rem',   // 8px
        'xs': '0.75rem',   // 12px
        'sm': '1rem',      // 16px
        'md': '1.5rem',    // 24px
        'lg': '2rem',      // 32px
        'xl': '3rem',      // 48px
        '2xl': '4rem',     // 64px
        '3xl': '6rem',     // 96px
        '4xl': '8rem',     // 128px
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'slide-left': 'slideLeft 0.5s ease-out',
        'slide-right': 'slideRight 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'skill': '0 1px 2px rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.3', transform: 'scale(1.1)' },
        },
      },
      gridTemplateColumns: {
        // Asymmetric grid system
        'asymmetric-1': '1fr 1.618fr',
        'asymmetric-2': '1.618fr 1fr',
        'asymmetric-3': '1fr 1fr 1.618fr',
        'asymmetric-4': '1.618fr 1fr 1fr',
      },
    },
  },
  plugins: [
    // Custom plugin to ensure dynamic classes are generated
    plugin(function({ addUtilities }) {
      // This is just a dummy function to make sure the classes are generated
      // The actual utility classes are defined in the theme.extend.colors section
    })
  ],
};

export default config;
