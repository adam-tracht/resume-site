# Adam Tracht - Resume Website

A modern, interactive resume website showcasing Adam Tracht's experience as an ecommerce and digital product leader with strong UX and AI implementation expertise.

## Tech Stack

- **Framework**: Next.js 15 with React Server Components and App Router
- **State Management**: Zustand
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion, GSAP, Three.js
- **Testing**: Vitest (unit), Playwright (E2E)
- **Documentation**: Storybook

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                  # Next.js App Router
│   ├── components/       # React components
│   │   ├── layout/       # Layout components (header, footer, etc.)
│   │   ├── sections/     # Page sections (hero, projects, etc.)
│   │   └── ui/           # Reusable UI components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Libraries and integrations
│   ├── styles/           # Global styles and Tailwind config
│   └── utils/            # Utility functions
├── test/                 # Test setup and utilities
└── types/                # TypeScript type definitions
```

## Features

- Professional hero section with animation
- Interactive career timeline
- Expertise areas visualization
- Project showcase with detailed case studies
- AI implementation highlights
- Contact section
- Resume download option
- Dark/light mode with system preference detection

## Setting Up the Contact Form

The contact form uses SendGrid to send emails. To set it up:

1. Create a SendGrid account at [sendgrid.com](https://sendgrid.com)
2. Create an API key in your SendGrid dashboard
3. Create a `.env.local` file in the root directory with the following variables:
   ```
   SENDGRID_API_KEY=your_sendgrid_api_key_here
   RECIPIENT_EMAIL=your_email@example.com
   ```
4. Make sure to add a verified sender in your SendGrid account
5. Update the "from" email in the contact API route if needed

Without these environment variables, the form will work in development mode but won't actually send emails.

## Testing

- Run unit tests: `npm test`
- Run E2E tests: `npm run test:e2e`

## Deployment

This site is deployed on Vercel with Edge Functions and CDN optimization.

When deploying to Vercel or another hosting provider, make sure to set the environment variables in their dashboard.
