'use client';

import React, { useState, useEffect } from 'react';
import { Code2, GraduationCap, Award, Target, User } from 'lucide-react';

export const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const skills = [
    { icon: Code2, name: "Frontend Development", level: 75, color: "from-blue-500 to-cyan-400" },
    { icon: Code2, name: "Backend Development", level: 65, color: "from-purple-500 to-pink-400" },
    { icon: Code2, name: "Web Design", level: 60, color: "from-green-500 to-emerald-400" }
  ];

  const stats = [
    { icon: Award, value: "3+", label: "Real Projects", color: "from-blue-500 to-cyan-400" },
    { icon: GraduationCap, value: "3rd", label: "Year Student", color: "from-purple-500 to-pink-400" },
    { icon: Target, value: "HPTU", label: "University", color: "from-green-500 to-emerald-400" },
  ];

  return (
    <section id="about" className="py-16 md:py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="badge">Get To Know Me</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-[var(--foreground)] opacity-70 text-base md:text-lg max-w-2xl mx-auto">
            I'm a passionate full-stack developer with expertise in modern web technologies.
            Currently pursuing BTech and building real-world projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Card - Bio */}
          <div
            className={`card p-6 md:p-8 hover:shadow-2xl hover:shadow-[var(--primary)]/20 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <User className="w-8 h-8 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl md:text-2xl font-bold">Dikshit Jaswal</h3>
                <p className="text-[var(--foreground)] opacity-60">Full Stack Web Developer</p>
              </div>
            </div>

            <p className="text-[var(--foreground)] opacity-80 mb-6 leading-relaxed text-sm md:text-base">
              I'm a passionate Full Stack Web Developer pursuing BTech at Himachal Pradesh Technical University.
              I love creating beautiful, functional, and user-centered digital experiences.
            </p>

            <div className="bg-[var(--card-bg)] rounded-xl p-4 md:p-5 mb-6 border border-[var(--border)] hover:border-[var(--primary)]/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold">Education</h4>
              </div>
              <div className="space-y-1">
                <p className="text-[var(--foreground)] text-sm md:text-base">
                  <strong className="text-[var(--primary)]">Bachelor of Technology</strong> (2023 - 2027)
                </p>
                <p className="text-[var(--foreground)] opacity-60 text-xs md:text-sm">Himachal Pradesh Technical University</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 md:gap-3">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center p-3 md:p-4 bg-[var(--card-bg)] rounded-xl border border-[var(--border)] hover:border-[var(--primary)]/50 hover:shadow-lg hover:shadow-[var(--primary)]/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer group ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${100 + index * 50}ms` }}
                >
                  <div className={`w-10 h-10 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-2 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-lg md:text-xl font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors duration-300">{stat.value}</div>
                  <div className="text-[var(--foreground)] opacity-60 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card - Skills */}
          <div
            className={`space-y-3 md:space-y-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-xl flex items-center justify-center shadow-lg">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold">Core Competencies</h3>
            </div>

            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`card p-4 md:p-5 hover:shadow-2xl hover:shadow-[var(--primary)]/20 hover:-translate-x-1 transition-all duration-300 group ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-semibold text-sm md:text-base group-hover:text-[var(--primary)] transition-colors duration-300">{skill.name}</span>
                  </div>
                  <span className="text-lg md:text-xl font-bold text-[var(--primary)]">{skill.level}%</span>
                </div>
                <div className="w-full bg-[var(--card-bg)] rounded-full h-3 overflow-hidden border border-[var(--border)]">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative`}
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${300 + index * 100}ms`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};
