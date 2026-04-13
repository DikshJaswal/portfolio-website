'use client';

import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Code2, Zap, Download } from 'lucide-react';

export const Hero: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/DikshJaswal', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/dikshit-jaswal-a0172a379', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:dikshitjaswal1922@gmail.com', label: 'Email' },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-transparent to-[var(--background)]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="flex items-center justify-center mb-8">
          <div className="badge">
            Available for opportunities
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="gradient-text">Dikshit Jaswal</span>
        </h1>

        {/* Subtitle */}
        <div className="text-xl md:text-2xl text-[var(--foreground)] mb-8 font-medium flex items-center justify-center gap-3">
          <Code2 className="w-6 h-6 text-[var(--primary)]" />
          <span>Full Stack Web Developer</span>
        </div>

        {/* Description */}
        <p className="text-[var(--foreground)] opacity-80 max-w-2xl mx-auto mb-10 text-lg">
          BTech student passionate about crafting exceptional digital experiences with modern technologies.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary flex items-center justify-center gap-2"
          >
            <Zap className="w-5 h-5" />
            View My Work
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary"
          >
            Get In Touch
          </button>
          <a
            href="/resume.pdf"
            download
            className="btn-secondary flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg flex items-center justify-center hover-lift"
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <ArrowDown className="w-5 h-5 text-[var(--foreground)] opacity-60" />
          <span className="text-xs text-[var(--foreground)] opacity-60">Scroll</span>
        </div>
      </div>
    </section>
  );
};
