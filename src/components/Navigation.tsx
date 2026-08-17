'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Mail, Globe, Code, User, Briefcase } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home', icon: Globe },
  { name: 'About', href: '#about', icon: User },
  { name: 'Projects', href: '#projects', icon: Briefcase },
  { name: 'Skills', href: '#skills', icon: Code },
  { name: 'Contact', href: '#contact', icon: Mail }
];

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      if (window.scrollY < 160) setActiveSection('home');
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: '-22% 0px -58% 0px', threshold: [0.05, 0.2, 0.5] }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.href.substring(1));
      if (section) observer.observe(section);
    });

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 112;
      const anchor = href === '#home' ? element : (element.querySelector('.badge') ?? element);
      const top = href === '#home'
        ? 0
        : anchor.getBoundingClientRect().top + window.scrollY - offset;
      setActiveSection(href.substring(1));
      window.scrollTo({ top, behavior: 'smooth' });
      setIsOpen(false);
    }
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)]/70 bg-[var(--background)]/95 backdrop-blur-xl transition-all duration-300 ${
          scrolled ? 'shadow-xl shadow-black/10' : 'shadow-lg shadow-black/5'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div
              className="flex items-center gap-3 cursor-pointer group"
              role="button"
              tabIndex={0}
              aria-label="Back to top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform duration-200">
                DJ
              </div>
              <h1 className="text-xl font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors duration-200">
                Dikshit Jaswal
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                const Icon = item.icon;
                
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="relative group"
                  >
                    <div className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                      isActive 
                        ? 'text-[var(--primary)] bg-[var(--card-bg)] shadow-md' 
                        : 'text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--card-bg)]/50 hover:-translate-y-0.5'
                    }`}>
                      <Icon className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
                      <span>{item.name}</span>
                    </div>
                    {isActive && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 bg-[var(--card-bg)] border border-[var(--border)] rounded-xl flex items-center justify-center group hover:border-[var(--primary)] hover:scale-105 transition-all duration-200"
            >
              <div className={`transition-transform duration-200 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
                {isOpen ? <X className="w-5 h-5 text-[var(--primary)]" /> : <Menu className="w-5 h-5" />}
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden border-t border-[var(--border)] bg-[var(--background)]/98 backdrop-blur-xl mt-2 rounded-2xl transition-all duration-200">
              <div className="py-4 space-y-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.substring(1);
                  const Icon = item.icon;
                  
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:translate-x-1 ${
                        isActive
                          ? 'bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white shadow-md'
                          : 'text-[var(--foreground)] hover:bg-[var(--card-bg)] hover:text-[var(--primary)]'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
