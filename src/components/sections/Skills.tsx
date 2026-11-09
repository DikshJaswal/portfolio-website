'use client';

import React from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  Braces, Code2, Database, FileCode2, GitBranch, Github, Globe2, KeyRound,
  LayoutDashboard, Layers, Network, Paintbrush, Route, Send, Server, Table2,
  Terminal, Wind, Zap, CheckCircle2, Cloud
} from 'lucide-react';

const skillIcons: Record<string, LucideIcon> = {
  React: Code2,
  'Next.js 16': Layers,
  JavaScript: Braces,
  TypeScript: Braces,
  HTML5: FileCode2,
  CSS3: Paintbrush,
  'Tailwind CSS': Wind,
  Recharts: LayoutDashboard,
  'Node.js': Server,
  'Express.js': Route,
  'Twilio SendGrid': Send,
  'REST APIs': Network,
  'JWT Auth': KeyRound,
  Python: Terminal,
  'TiDB Cloud': Cloud,
  MongoDB: Database,
  MySQL: Table2,
  PostgreSQL: Database,
  'Prisma ORM': Database,
  SQL: Table2,
  Git: GitBranch,
  GitHub: Github,
  Vitest: CheckCircle2,
  Turbopack: Zap,
  Vercel: Globe2,
  Postman: Send,
};

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      description: 'Interfaces that feel clear, fast, and responsive.',
      icon: Code2,
      color: 'from-blue-500 to-cyan-400',
      skills: ['React', 'Next.js 16', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Recharts', 'HTML5', 'CSS3']
    },
    {
      title: 'Backend & APIs',
      description: 'Scalable server-side logic, microservices, and alerts.',
      icon: Server,
      color: 'from-violet-500 to-fuchsia-400',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'Twilio SendGrid', 'JWT Auth', 'Python']
    },
    {
      title: 'Data & Databases',
      description: 'Distributed persistence and ACID storage models.',
      icon: Database,
      color: 'from-emerald-500 to-teal-400',
      skills: ['TiDB Cloud', 'MySQL', 'MongoDB', 'PostgreSQL', 'Prisma ORM', 'SQL']
    },
    {
      title: 'DevOps & Testing',
      description: 'Modern tooling to build, test, and ship reliably.',
      icon: GitBranch,
      color: 'from-orange-500 to-amber-400',
      skills: ['Vitest', 'Turbopack', 'Git', 'GitHub', 'Vercel', 'Postman']
    }
  ];

  return (
    <section id="skills" className="section-shell py-20 md:py-28">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <span className="badge">Technical Toolkit</span>
          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">The tools behind my <span className="gradient-text">work.</span></h2>
          <p className="mt-5 text-base leading-7 text-[var(--muted)] sm:text-lg">
            Technologies and frameworks implemented across deployed full-stack SaaS, AST parsers, and monitoring platforms.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category) => (
            <div key={category.title} className="card group p-5 sm:p-6 border border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--primary)]/40 transition-all duration-300">
              <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${category.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                <category.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">{category.title}</h3>
              <p className="mt-2 min-h-12 text-sm leading-6 text-[var(--muted)]">{category.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {category.skills.map((skill) => {
                  const Icon = skillIcons[skill] || Code2;
                  return (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border)] bg-white/[0.04] px-2.5 py-1.5 text-xs font-medium text-[var(--foreground)] transition-colors hover:border-[var(--primary)]/50 hover:text-[var(--primary)]"
                    >
                      <Icon className="h-3.5 w-3.5 text-[var(--primary)]" />
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
