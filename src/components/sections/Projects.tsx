'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Github, Sparkles, Layers, ShieldCheck } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  highlightBadge?: string;
  category: 'saas' | 'systems';
}

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "API Sentinel",
      description: "Distributed synthetic health monitoring platform with multi-service telemetry, p95 latency tracking, and automated Twilio SendGrid & SMS incident alerts.",
      image: "/api-sentinel-dashboard.png",
      tech: ["Next.js 16", "React 19", "TypeScript", "Twilio / SendGrid", "Chart.js", "Tailwind CSS"],
      liveUrl: "https://api-sentinel-psi.vercel.app/dashboard",
      githubUrl: "https://github.com/DikshJaswal/api-sentinel",
      featured: true,
      highlightBadge: "Twilio Alerts & SLA",
      category: "systems"
    },
    {
      id: 2,
      title: "RESOLVE",
      description: "Enterprise IT service desk platform featuring SLA escalation timers, multi-role RBAC, ticket conversation threads, Cloudinary uploads, and TiDB Cloud serverless MySQL.",
      image: "/Resolve.png",
      tech: ["React", "TypeScript", "Node.js", "Express", "TiDB Cloud (MySQL)", "Cloudinary", "Tailwind CSS"],
      liveUrl: "https://resolve-pink-eight.vercel.app/",
      githubUrl: "https://github.com/DikshJaswal/RESOLVE",
      featured: true,
      highlightBadge: "⚡ 1-Click Recruiter Demo",
      category: "saas"
    },
    {
      id: 3,
      title: "CodeFlow JS Debugger",
      description: "Client-side JavaScript execution engine and AST step-debugger with dynamic call stacks, object mutations, adjustable playback speeds, and algorithmic presets.",
      image: "/codeflow-debugger.png",
      tech: ["Next.js 16", "React 19", "TypeScript", "AST Engine", "Turbopack", "Vitest"],
      liveUrl: "https://codeflow-javascript-debugger.vercel.app/",
      githubUrl: "https://github.com/DikshJaswal/codeflow-javascript-debugger",
      highlightBadge: "AST Engine & Presets",
      category: "systems"
    },
    {
      id: 4,
      title: "FinPilot",
      description: "Personal finance and monthly budget management SaaS with compound-indexed MongoDB queries, Recharts telemetry, proactive spending alerts, and CSV statement exports.",
      image: "/FinPilot.png",
      tech: ["React", "Node.js", "Express", "MongoDB Atlas", "Recharts", "Helmet", "JWT"],
      liveUrl: "https://fin-pilot-zeta-dun.vercel.app/",
      githubUrl: "https://github.com/DikshJaswal/FinPilot",
      highlightBadge: "⚡ 1-Click Demo & CSV",
      category: "saas"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects (4)', icon: Sparkles },
    { id: 'saas', label: 'Full-Stack SaaS', icon: ShieldCheck },
    { id: 'systems', label: 'DevOps & Tooling', icon: Layers }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="section-shell py-20 md:py-28">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="badge">Production Portfolio</span>
            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">Things I&apos;ve <span className="gradient-text">built.</span></h2>
            <p className="mt-5 text-base leading-7 text-[var(--muted)] sm:text-lg">
              Live full-stack applications with authenticated recruiter demo access, automated tests, and real-world infrastructure.
            </p>
          </div>
          <span className="text-sm font-medium text-[var(--muted)]">{projects.length} verified live systems</span>
        </div>

        {/* Dynamic Category Filter */}
        <div className="mb-10 flex flex-wrap gap-2.5">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                selectedCategory === category.id 
                  ? 'border-[var(--primary)] bg-[var(--primary)] text-white shadow-lg shadow-blue-500/20'
                  : 'border-[var(--border)] bg-[var(--card-bg)] text-[var(--muted)] hover:border-[var(--primary)]/50 hover:text-[var(--foreground)]'
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card group flex h-full flex-col overflow-hidden border border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--primary)]/40 transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {project.highlightBadge && (
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-full text-[11px] font-bold shadow-lg border border-white/20">
                    {project.highlightBadge}
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-2 text-xl font-bold text-white group-hover:text-[var(--primary)] transition-colors">
                  {project.title}
                </h3>
                <p className="mb-5 text-sm leading-6 text-[var(--muted)] flex-1">
                  {project.description}
                </p>
                
                <div className="mb-6 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-[var(--border)] bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-[var(--muted)] transition-colors hover:border-[var(--primary)]/50 hover:text-[var(--primary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto grid grid-cols-2 gap-2 pt-2 border-t border-[var(--border)]">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-white/[0.03] px-3 py-2.5 text-xs font-bold text-[var(--foreground)] hover-lift transition hover:bg-white/[0.08]"
                    >
                      <Github className="w-3.5 h-3.5" />
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-3 py-2.5 text-xs font-bold text-white hover-lift shadow-md shadow-blue-500/20"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
