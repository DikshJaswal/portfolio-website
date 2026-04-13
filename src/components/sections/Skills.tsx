'use client';

import React from 'react';
import { Code, Cpu, Database, Cloud } from 'lucide-react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      skills: [
        { name: "React", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "TypeScript", level: 75 },
        { name: "JavaScript", level: 85 },
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "Tailwind CSS", level: 80 },
      ]
    },
    {
      title: "Backend",
      icon: Cpu,
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Python", level: 80 },
        { name: "Django", level: 70 },
        { name: "Flask", level: 65 },
        { name: "C++", level: 60 },
      ]
    },
    {
      title: "Database",
      icon: Database,
      skills: [
        { name: "MySQL", level: 75 },
        { name: "PostgreSQL", level: 70 },
        { name: "MongoDB", level: 75 },
        { name: "Supabase", level: 70 },
        { name: "Prisma", level: 75 },
      ]
    },
    {
      title: "Tools",
      icon: Cloud,
      skills: [
        { name: "Git", level: 85 },
        { name: "GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Vercel", level: 80 },
      ]
    }
  ];

  const SkillBar: React.FC<{ skill: any }> = ({ skill }) => (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[var(--foreground)] font-medium text-sm">{skill.name}</span>
        <span className="text-[var(--primary)] text-sm font-semibold">{skill.level}%</span>
      </div>
      <div className="w-full bg-[var(--card-bg)] rounded-full h-2">
        <div
          className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-16 md:py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="badge">Technical Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-[var(--foreground)] opacity-70 text-base md:text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I work with.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="card p-4 md:p-6"
            >
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-xl flex items-center justify-center flex-shrink-0">
                  <category.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
