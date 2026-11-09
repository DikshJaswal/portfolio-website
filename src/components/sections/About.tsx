'use client';

import React, { useState, useEffect } from 'react';
import { GraduationCap, Award, Target, User, Database, Activity, Cpu, Layout } from 'lucide-react';

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

  const competencies = [
    {
      icon: Database,
      name: "Full-Stack SaaS Architecture",
      description: "Relational (TiDB Serverless MySQL) & Document (MongoDB) data modeling, compound indexing, RBAC security, and automated SLA timers.",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: Activity,
      name: "Synthetic Telemetry & Incident Alerts",
      description: "Distributed HTTP availability probes, p95 latency tracking, state-aware deduplication, and automated Twilio SendGrid / SMS dispatch.",
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: Cpu,
      name: "AST Parsers & In-Browser Execution",
      description: "Abstract Syntax Tree parsing, client-side runtime evaluation, dynamic call frames, variable mutation scopes, and step-debugging engines.",
      color: "from-emerald-500 to-teal-400"
    },
    {
      icon: Layout,
      name: "Modern Reactive UI & Telemetry",
      description: "Next.js 16 (App Router), React 19, Turbopack, Recharts visual analytics, interactive presets, and responsive dark-glass interfaces.",
      color: "from-amber-500 to-orange-400"
    }
  ];

  const stats = [
    { icon: Award, value: "4+", label: "Production Apps", color: "from-blue-500 to-cyan-400" },
    { icon: GraduationCap, value: "Final", label: "Year B.Tech CSE", color: "from-purple-500 to-pink-400" },
    { icon: Target, value: "HPTU", label: "University", color: "from-green-500 to-emerald-400" },
  ];

  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="badge">Engineering Focus</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-[var(--foreground)] opacity-70 text-base md:text-lg max-w-2xl mx-auto">
            Full-stack software developer with a focus on building resilient web applications, distributed monitoring tools, and developer utilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Card - Bio & Education */}
          <div
            className={`card p-6 md:p-8 hover:shadow-2xl hover:shadow-[var(--primary)]/20 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <User className="w-8 h-8 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-white">Dikshit Jaswal</h3>
                <p className="text-[var(--foreground)] opacity-60">Full-Stack Software Developer</p>
              </div>
            </div>

            <p className="text-[var(--foreground)] opacity-80 mb-6 leading-relaxed text-sm md:text-base">
              I am a B.Tech Computer Science student at Himachal Pradesh Technical University, passionate about backend scalability, reliable database persistence, and performant developer interfaces. I build complete end-to-end applications designed for real-world deployment.
            </p>

            <div className="bg-[var(--card-bg)] rounded-xl p-4 md:p-5 mb-6 border border-[var(--border)] hover:border-[var(--primary)]/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-white">Education</h4>
              </div>
              <div className="space-y-1">
                <p className="text-[var(--foreground)] text-sm md:text-base">
                  <strong className="text-[var(--primary)]">Bachelor of Technology in Computer Science & Engineering</strong>
                </p>
                <p className="text-[var(--foreground)] opacity-60 text-xs md:text-sm">
                  Himachal Pradesh Technical University · CGPA: 7.26 / 10.0
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 md:gap-3">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center p-3 md:p-4 bg-[var(--card-bg)] rounded-xl border border-[var(--border)] hover:border-[var(--primary)]/50 hover:shadow-lg transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${100 + index * 50}ms` }}
                >
                  <div className={`w-10 h-10 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-2 shadow-md`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-lg md:text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-[var(--foreground)] opacity-60 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card - Architectural Competencies */}
          <div
            className={`space-y-3.5 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg md:text-xl font-bold text-white">Architectural Specializations</h3>
            </div>

            {competencies.map((comp, index) => (
              <div
                key={comp.name}
                className={`card p-4 md:p-5 border border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--primary)]/50 hover:shadow-xl transition-all duration-300 group ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="flex items-start gap-3.5">
                  <div className={`w-11 h-11 bg-gradient-to-br ${comp.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}>
                    <comp.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm md:text-base text-white group-hover:text-[var(--primary)] transition-colors">
                      {comp.name}
                    </h4>
                    <p className="mt-1 text-xs md:text-sm leading-relaxed text-[var(--muted)]">
                      {comp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
