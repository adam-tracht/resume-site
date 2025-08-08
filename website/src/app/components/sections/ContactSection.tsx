'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Script from 'next/script';

// Form field component
const FormField: React.FC<{
  label: string;
  type: string;
  name: string;
  placeholder: string;
  required?: boolean;
  as?: 'input' | 'textarea';
  rows?: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}> = ({ label, type, name, placeholder, required = true, as = 'input', rows = 4, value, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {as === 'input' ? (
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-2 border border-base-300 dark:border-base-700 rounded-md 
                   focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                   bg-white dark:bg-base-800 text-base-900 dark:text-base-100"
        />
      ) : (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          required={required}
          rows={rows}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-2 border border-base-300 dark:border-base-700 rounded-md 
                   focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                   bg-white dark:bg-base-800 text-base-900 dark:text-base-100"
        />
      )}
    </div>
  );
};

// Contact method component
const ContactMethod: React.FC<{
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
  index: number;
}> = ({ icon, title, value, href, index }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex items-center p-4 bg-white dark:bg-base-800 rounded-lg shadow-sm 
                hover:shadow-md transition-all group"
    >
      <div className="mr-4 text-primary-500 dark:text-primary-400 text-2xl group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-medium text-base-500 dark:text-base-400">{title}</h3>
        <p className="font-medium">{value}</p>
      </div>
    </motion.a>
  );
};

export const ContactSection: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // Form status state
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null as string | null,
    isDevelopment: false
  });

  // EmailJS service ID, template ID, and public key
  const emailjsServiceId = 'service_m90oq7y';
  const emailjsTemplateId = 'template_85jh2qb';
  const emailjsPublicKey = 'y4LhZDF0aEE6V1_pC';
  
  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Set submitting state
    setStatus({ submitting: true, success: false, error: null, isDevelopment: false });
    
    try {
      // Check if emailjs is loaded
      if (typeof window.emailjs === 'undefined') {
        throw new Error('EmailJS not loaded. Please try again later.');
      }
      
      console.log('Sending email with parameters:', {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      });
      
      // Send email using EmailJS
      // Make sure these parameter names match exactly what's in your EmailJS template
      const response = await window.emailjs.send(
        emailjsServiceId,
        emailjsTemplateId,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email,
          to_name: 'Adam Tracht'
        },
        emailjsPublicKey
      );
      
      console.log('EmailJS response:', response);
      
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Set success state
      setStatus({
        submitting: false,
        success: true,
        error: null,
        isDevelopment: false
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);
      
    } catch (error) {
      console.error('EmailJS error:', error);
      // Set error state
      setStatus({
        submitting: false,
        success: false,
        error: error instanceof Error ? error.message : 'An error occurred',
        isDevelopment: false
      });
    }
  };

  return (
    <>
      {/* Load EmailJS SDK */}
      <Script 
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        strategy="lazyOnload"
        onLoad={() => {
          window.emailjs.init(emailjsPublicKey);
          console.log('EmailJS initialized');
        }}
      />
      
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-base-600 dark:text-base-400 max-w-2xl mx-auto">
              Interested in discussing potential opportunities or collaborations? Feel free to reach out through any of the channels below or use the contact form.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
            {/* Contact Methods */}
            <div className="lg:col-span-2 space-y-4">
              <ContactMethod
                icon={<EmailIcon />}
                title="Email"
                value="Adamtracht1@gmail.com"
                href="mailto:Adamtracht1@gmail.com"
                index={0}
              />
              <ContactMethod
                icon={<PhoneIcon />}
                title="Phone"
                value="(802) 349-4232"
                href="tel:+18023494232"
                index={1}
              />
              <ContactMethod
                icon={<LinkedInIcon />}
                title="LinkedIn"
                value="Adam Tracht"
                href="https://www.linkedin.com/in/adamtracht/"
                index={2}
              />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md 
                           shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 
                           focus:ring-offset-2 focus:ring-primary-500 transition-colors w-full justify-center"
                >
                  <DownloadIcon className="mr-2 h-5 w-5" />
                  Download Resume (PDF)
                </a>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-3 bg-white dark:bg-base-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>
              
              {/* Success Message */}
              {status.success && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-md">
                  <p className="font-medium">
                    Thank you for your message! I will get back to you soon.
                  </p>
                </div>
              )}
              
              {/* Error Message */}
              {status.error && (
                <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 rounded-md">
                  <p className="font-medium">Error: {status.error}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    label="Name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <FormField
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <FormField
                  label="Subject"
                  type="text"
                  name="subject"
                  placeholder="What is this regarding?"
                  value={formData.subject}
                  onChange={handleChange}
                />
                <FormField
                  label="Message"
                  type="text"
                  name="message"
                  placeholder="Your message"
                  as="textarea"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                />
                <div className="mt-6">
                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium 
                             rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none 
                             focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors disabled:opacity-70 
                             disabled:cursor-not-allowed"
                  >
                    {status.submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

// Add TypeScript declaration for EmailJS
declare global {
  interface Window {
    emailjs: {
      init: (publicKey: string) => void;
      send: (
        serviceId: string,
        templateId: string,
        templateParams: Record<string, unknown>,
        publicKey: string
      ) => Promise<unknown>;
    };
  }
}

// Icons
const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const DownloadIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);
