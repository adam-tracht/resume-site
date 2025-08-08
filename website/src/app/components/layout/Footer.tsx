'use client';

import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:Adamtracht1@gmail.com" 
                  className="text-foreground/80 hover:text-primary transition-colors flex items-center"
                >
                  <EmailIcon className="w-4 h-4 mr-2" />
                  Adamtracht1@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+18023494232" 
                  className="text-foreground/80 hover:text-primary transition-colors flex items-center"
                >
                  <PhoneIcon className="w-4 h-4 mr-2" />
                  (802) 349-4232
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/in/adam-tracht" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-foreground/80 hover:text-primary transition-colors flex items-center"
                >
                  <LinkedInIcon className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="#experience" 
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link 
                  href="#projects" 
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  href="#ai-work" 
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  AI Work
                </Link>
              </li>
              <li>
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
          
          {/* Expertise Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Expertise</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">
                Ecommerce
              </span>
              <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">
                Digital Product
              </span>
              <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">
                UX Research
              </span>
              <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">
                A/B Testing
              </span>
              <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">
                AI Implementation
              </span>
              <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">
                Data Analysis
              </span>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-border text-center text-sm text-foreground/60">
          <p>© {currentYear} Adam Tracht. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// Icon components
function EmailIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
