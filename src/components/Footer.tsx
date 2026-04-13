'use client';

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/DikshJaswal', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/dikshit-jaswal-a0172a379', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:dikshitjaswal1922@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="py-12 border-t border-[var(--border)]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-3">Dikshit Jaswal</h3>
            <p className="text-[var(--foreground)] opacity-70 text-sm">
              BTech student passionate about web development and creating digital solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-[var(--foreground)] mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-[var(--foreground)] opacity-70 hover:opacity-100 hover:text-[var(--primary)] transition-all duration-200 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-[var(--foreground)] mb-3">Connect</h4>
            <div className="flex space-x-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg flex items-center justify-center hover-lift"
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-[var(--border)] pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[var(--foreground)] opacity-60 text-sm mb-4 md:mb-0">
              © 2026 Dikshit Jaswal. All rights reserved.
            </p>
            <p className="text-[var(--foreground)] opacity-60 text-sm">
              Built with Next.js & React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
