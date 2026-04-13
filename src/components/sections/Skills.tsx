'use client';

import React from 'react';
import { Code, Cpu, Database, Cloud } from 'lucide-react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      color: "from-blue-500 to-cyan-400",
      bgColor: "from-blue-500/10 to-cyan-400/10",
      borderColor: "from-blue-500/50 to-cyan-400/50",
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
      color: "from-purple-500 to-pink-400",
      bgColor: "from-purple-500/10 to-pink-400/10",
      borderColor: "from-purple-500/50 to-pink-400/50",
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
      color: "from-green-500 to-emerald-400",
      bgColor: "from-green-500/10 to-emerald-400/10",
      borderColor: "from-green-500/50 to-emerald-400/50",
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
      color: "from-orange-500 to-amber-400",
      bgColor: "from-orange-500/10 to-amber-400/10",
      borderColor: "from-orange-500/50 to-amber-400/50",
      skills: [
        { name: "Git", level: 85 },
        { name: "GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Vercel", level: 80 },
      ]
    }
  ];

  const SkillBar: React.FC<{ skill: any; color: string }> = ({ skill, color }) => (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[var(--foreground)] font-medium text-sm">{skill.name}</span>
        <span className={`text-sm font-semibold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>{skill.level}%</span>
      </div>
      <div className="w-full bg-[var(--card-bg)] rounded-full h-2 overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${color} rounded-full relative overflow-hidden`}
          style={{ width: `${skill.level}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
        </div>
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
              className={`card p-4 md:p-6 bg-gradient-to-br ${category.bgColor} border border-gradient-to-r ${category.borderColor} hover:shadow-2xl hover:shadow-${category.color}/20 transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} color={category.color} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
