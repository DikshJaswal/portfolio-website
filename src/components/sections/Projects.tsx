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
      title: "Multi-Vendor Marketplace",
      description: "E-commerce platform with multi-vendor support",
      image: "/marketplace-ecommerce.png",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      liveUrl: "https://multi-vendor-marketplace-flax.vercel.app",
      githubUrl: "https://github.com/DikshJaswal/multi-vendor-marketplace",
      category: "web"
    },
    {
      id: 3,
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
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="badge">Featured Projects</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">My Work</span>
          </h2>
          <p className="text-[var(--foreground)] opacity-70 text-lg max-w-2xl mx-auto">
            Innovative projects that showcase technical skills and creative problem-solving.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.id 
                  ? 'bg-[var(--primary)] text-white' 
                  : 'bg-[var(--card-bg)] text-[var(--foreground)] hover:bg-[var(--card-hover)]'
              }`}
            >
              <category.icon className="w-4 h-4 inline mr-2" />
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card overflow-hidden"
            >
              <div className="relative h-56 overflow-hidden bg-[var(--card-bg)]">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {project.featured && (
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-[var(--foreground)] opacity-70 text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/10 border border-[var(--primary)]/30 text-[var(--primary)] text-xs font-medium rounded-full hover:border-[var(--primary)] hover:from-[var(--primary)]/20 hover:to-[var(--secondary)]/20 transition-all duration-200">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[var(--card-bg)] border border-[var(--border)] text-[var(--foreground)] px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover-lift"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[var(--primary)] text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover-lift"
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
