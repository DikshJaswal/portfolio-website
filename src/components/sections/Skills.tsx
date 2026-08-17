'use client';

import React from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  Braces, Code2, Database, FileCode2, GitBranch, Github, Globe2, KeyRound,
  LayoutDashboard, Layers, Network, Paintbrush, Route, Send, Server, Table2,
  Terminal, Wind
} from 'lucide-react';

const skillIcons: Record<string, LucideIcon> = {
  React: Code2,
  'Next.js': Layers,
  JavaScript: Braces,
  TypeScript: Braces,
  HTML5: FileCode2,
  CSS3: Paintbrush,
  'Tailwind CSS': Wind,
  'Node.js': Server,
  'Express.js': Route,
  Python: Terminal,
  Django: LayoutDashboard,
  'REST APIs': Network,
  'JWT Auth': KeyRound,
  MongoDB: Database,
  MySQL: Table2,
  PostgreSQL: Database,
  Supabase: Send,
  'Prisma ORM': Database,
  SQL: Table2,
  Git: GitBranch,
  GitHub: Github,
  'VS Code': Code2,
  Vercel: Globe2,
  Postman: Send,
  'C++': Terminal,
};

export const Skills: React.FC = () => {
  const skillCategories = [
    { title: 'Frontend', description: 'Interfaces that feel clear, fast, and responsive.', icon: Code2, color: 'from-blue-500 to-cyan-400', skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
    { title: 'Backend', description: 'Reliable APIs and server-side application logic.', icon: Server, color: 'from-violet-500 to-fuchsia-400', skills: ['Node.js', 'Express.js', 'Python', 'Django', 'REST APIs', 'JWT Auth'] },
    { title: 'Data', description: 'Data models and persistence for real-world products.', icon: Database, color: 'from-emerald-500 to-teal-400', skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Supabase', 'Prisma ORM', 'SQL'] },
    { title: 'Workflow', description: 'Tools I use to build, test, and ship consistently.', icon: GitBranch, color: 'from-orange-500 to-amber-400', skills: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Postman', 'C++'] }
  ];

  return (
    <section id="skills" className="section-shell py-20 md:py-28">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <span className="badge">Technical toolkit</span>
          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">The tools behind my <span className="gradient-text">work.</span></h2>
          <p className="mt-5 text-base leading-7 text-[var(--muted)] sm:text-lg">Technologies I use across coursework, personal builds, and production-style projects.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category) => (
            <div key={category.title} className="card group p-5 sm:p-6">
              <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${category.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                <category.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">{category.title}</h3>
              <p className="mt-2 min-h-12 text-sm leading-6 text-[var(--muted)]">{category.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border)] bg-white/[0.04] px-2.5 py-1.5 text-xs font-medium text-[var(--foreground)] transition-colors hover:border-[var(--primary)]/50 hover:text-[var(--primary)]">
                    {React.createElement(skillIcons[skill], { className: 'h-3.5 w-3.5 text-[var(--primary)]' })}
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
