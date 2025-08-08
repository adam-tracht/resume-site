# Adam Tracht - Professional Resume Website

A modern, interactive portfolio website showcasing Adam Tracht's experience as an ecommerce and digital product leader with expertise in UX and AI implementation.

## Project Overview

This website serves as a professional portfolio highlighting:
- 7+ years of ecommerce and digital product leadership experience
- UX research and design expertise
- AI implementation and adoption projects
- Professional journey and key achievements

## Technology Stack

### Frontend
- **Framework**: Next.js 14 with React Server Components and App Router
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion, GSAP, and selective Three.js elements
- **State Management**: Zustand

### Backend Features
- **API Routes**: Next.js API routes for serverless functions
- **Email Integration**: Resend.com for contact form submissions

### Development Tools
- **Type Safety**: TypeScript with strict mode
- **Testing**: Vitest, Playwright, and Storybook
- **Linting/Formatting**: ESLint, Prettier

## Getting Started

### Prerequisites
- Node.js 18.x or later
- npm or pnpm package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/resume-site.git
cd resume-site
```

2. Install dependencies
```bash
cd website
npm install
# or with pnpm
pnpm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
# Edit .env.local with your values
```

4. Run development server
```bash
npm run dev
# or with pnpm
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This site is optimized for deployment on Vercel:

```bash
npm run build
# or with pnpm
pnpm build
```

## Project Structure

```
website/
├── public/         # Static assets
├── src/
│   ├── app/        # Next.js App Router pages
│   ├── components/ # React components
│   ├── lib/        # Utility functions and API clients
│   ├── styles/     # Global styles and Tailwind config
│   └── types/      # TypeScript type definitions
└── tests/          # Test files
```

## License

© 2025 Adam Tracht. All rights reserved.
