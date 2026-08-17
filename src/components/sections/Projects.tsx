'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Github, Sparkles, Zap } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  category: 'web';
}

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "API Sentinel",
      description: "API monitoring and security tool for web applications",
      image: "/api-sentinel-dashboard.png",
      tech: ["Next.js", "TypeScript", "Node.js"],
      liveUrl: "https://api-sentinel-psi.vercel.app",
      githubUrl: "https://github.com/DikshJaswal/api-sentinel",
      featured: true,
      category: "web"
    },
    {
      id: 2,
      title: "FinPilot",
      description: "Full-stack personal finance tracker with budgets, transactions, and analytics",
      image: "/FinPilot.png",
      tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT"],
      liveUrl: "https://fin-pilot-zeta-dun.vercel.app/",
      githubUrl: "https://github.com/DikshJaswal/FinPilot",
      category: "web"
    },
    {
      id: 3,
      title: "Resolve",
      description: "Role-based customer support workspace for tickets, conversations, and team workflows",
      image: "/Resolve.png",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Express", "MySQL", "Cloudinary"],
      liveUrl: "https://resolve-pink-eight.vercel.app/",
      githubUrl: "https://github.com/DikshJaswal/RESOLVE",
      category: "web"
    },
    {
      id: 4,
      title: "CodeFlow Debugger",
      description: "JavaScript debugging and code analysis tool",
      image: "/codeflow-debugger.png",
      tech: ["JavaScript", "TypeScript", "React"],
      liveUrl: "https://codeflow-javascript-debugger.vercel.app",
      githubUrl: "https://github.com/DikshJaswal/codeflow-javascript-debugger",
      category: "web"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: Sparkles },
    { id: 'web', label: 'Web Apps', icon: Zap }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="section-shell py-20 md:py-28">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="badge">Selected work</span>
            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">Things I&apos;ve <span className="gradient-text">built.</span></h2>
            <p className="mt-5 text-base leading-7 text-[var(--muted)] sm:text-lg">
              Real applications that solve a problem, exercise a full stack, and keep me learning.
            </p>
          </div>
          <span className="text-sm font-medium text-[var(--muted)]">{projects.length} projects · full stack</span>
        </div>

        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
                className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.id 
                  ? 'border-[var(--primary)] bg-[var(--primary)] text-white shadow-lg shadow-blue-500/20'
                  : 'border-[var(--border)] bg-[var(--card-bg)] text-[var(--muted)] hover:border-[var(--primary)]/50 hover:text-[var(--foreground)]'
              }`}
            >
              <category.icon className="w-4 h-4 inline mr-2" />
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card group flex h-full flex-col overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[var(--card-bg)]">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {project.featured && (
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                    Featured
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="mb-5 text-sm leading-6 text-[var(--muted)]">
                  {project.description}
                </p>
                
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-lg border border-[var(--border)] bg-white/[0.04] px-2.5 py-1.5 text-xs font-medium text-[var(--muted)] transition-colors hover:border-[var(--primary)]/50 hover:text-[var(--primary)]">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto grid grid-cols-2 gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-white/[0.03] px-3 py-2.5 text-sm font-medium text-[var(--foreground)] hover-lift"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-3 py-2.5 text-sm font-medium text-white hover-lift"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
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
