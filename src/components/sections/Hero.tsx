'use client';

import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Code2, Zap, Download, MapPin, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/DikshJaswal', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/dikshit-jaswal-a0172a379', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:dikshitjaswal1922@gmail.com', label: 'Email' },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-20 lg:h-screen lg:min-h-0 lg:pt-16"
    >
      <div className="absolute inset-0 hero-grid opacity-70" />
      <div className="absolute inset-0 hero-vignette" />
      <div className="hero-orb absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="hero-orb-delayed absolute bottom-20 -right-32 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute left-[12%] top-1/3 hidden h-px w-24 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent lg:block" />
      <div className="absolute right-[8%] top-[27%] hidden h-px w-20 rotate-90 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent lg:block" />

      {/* Content */}
      <div className="relative z-10 grid w-full max-w-6xl items-center gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:py-8">
        {/* Badge */}
        <div className="text-center lg:text-left">
          <div className="mb-6 flex items-center justify-center gap-3 lg:justify-start">
            <span className="badge">Available for opportunities</span>
            <span className="hidden items-center gap-1 text-xs text-[var(--muted)] sm:flex"><Sparkles className="h-3.5 w-3.5 text-[var(--accent)]" /> Open to learn</span>
          </div>

          {/* Main Heading */}
          <p className="eyebrow mb-4">Hello, I&apos;m Dikshit</p>
          <h1 className="mb-5 text-5xl font-bold leading-[1.02] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl">
            Building useful <span className="gradient-text">web experiences.</span>
          </h1>

          {/* Subtitle */}
          <div className="mb-6 flex items-center justify-center gap-3 text-lg font-medium text-[var(--foreground)] sm:text-xl lg:justify-start">
            <Code2 className="h-5 w-5 text-[var(--primary)]" />
            <span>Full-stack developer & BTech student</span>
          </div>

          {/* Description */}
          <p className="mx-auto mb-6 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg lg:mx-0">
            I build responsive products with React, Next.js, Node.js, and modern databases — from API monitoring tools to real-world finance and support platforms.
          </p>

          {/* CTA Buttons */}
          <div className="mb-6 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
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
          <div className="flex justify-center gap-3 lg:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card-bg)] text-[var(--muted)] hover-lift hover:text-[var(--primary)]"
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-[var(--muted)] lg:justify-start">
            <span className="mr-1 font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">Working with</span>
            {['React', 'Node.js', 'MongoDB', 'SQL'].map((item) => (
              <span key={item} className="rounded-full border border-[var(--border)] bg-white/[0.04] px-3 py-1.5 transition-colors hover:border-[var(--primary)]/50 hover:text-[var(--foreground)]">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="hero-card card relative overflow-hidden p-5 sm:p-6">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/15 blur-2xl" />
            <div className="absolute -bottom-16 -left-12 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="relative mb-6 flex items-center justify-between">
              <div>
                <p className="eyebrow mb-2">Current focus</p>
                <h2 className="text-2xl font-bold sm:text-3xl">Turning ideas into products</h2>
              </div>
              <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white shadow-lg shadow-blue-500/20">
                <Zap className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-4 ring-[#111827]" />
              </div>
            </div>
            <div className="space-y-3">
              {['React & Next.js interfaces', 'Express REST APIs', 'MongoDB & SQL data layers'].map((item, index) => (
                <div key={item} className="group flex items-center gap-3 rounded-xl border border-[var(--border)] bg-white/[0.03] p-3 text-sm text-[var(--muted)] transition-all hover:-translate-y-0.5 hover:border-[var(--primary)]/40 hover:bg-white/[0.06]">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-400/10 text-xs font-bold text-[var(--primary)]">0{index + 1}</span>
                  {item}
                  <span className="hero-line ml-auto h-1.5 w-1.5 rounded-full bg-cyan-300" />
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2 border-t border-[var(--border)] pt-5 text-sm text-[var(--muted)]">
              <MapPin className="h-4 w-4 text-[var(--accent)]" /> Hamirpur, Himachal Pradesh, India
            </div>
            <div className="relative mt-5 flex items-center justify-between rounded-xl border border-cyan-400/15 bg-cyan-400/[0.04] px-3 py-2.5 text-xs text-[var(--muted)]">
              <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" /> Building and learning</span>
              <span className="font-medium text-cyan-300">2026</span>
            </div>
          </div>
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
