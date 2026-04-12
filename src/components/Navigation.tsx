'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Moon, Sun, Mail, Globe, Code, User, Briefcase, Sparkles, ChevronRight } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [activeSection, setActiveSection] = useState('home');
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navItems = [
    { name: 'Home', href: '#home', icon: Globe, description: 'Start here' },
    { name: 'About', href: '#about', icon: User, description: 'Who I am' },
    { name: 'Projects', href: '#projects', icon: Briefcase, description: 'My work' },
    { name: 'Skills', href: '#skills', icon: Code, description: 'Technologies' },
    { name: 'Contact', href: '#contact', icon: Mail, description: 'Get in touch' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  }, [theme]);

  const handleNavClick = useCallback((e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  }, []);

  return (
    <>
      {/* Premium Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled 
            ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl border-b border-gray-200/30 dark:border-gray-700/30 shadow-xl shadow-black/5' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Premium Logo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center space-x-4"
            >
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-12 h-12 bg-gradient-to-br from-violet-600 via-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-2xl">
                  DJ
                </div>
              </motion.div>
              <motion.div
                className="cursor-pointer"
                whileHover={{ scale: 1.02 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Diksh Jaswal
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Full Stack Developer</p>
              </motion.div>
            </motion.div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.substring(1);
                const Icon = item.icon;
                
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className="relative"
                    onHoverStart={() => setIsHovered(item.name)}
                    onHoverEnd={() => setIsHovered(null)}
                  >
                    <motion.a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`group relative px-5 py-3 rounded-2xl font-medium transition-all duration-300 flex items-center space-x-3 ${
                        isActive
                          ? 'text-white bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 shadow-xl shadow-purple-500/25'
                          : scrolled
                          ? 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-purple-400 hover:bg-purple-50/50 dark:hover:bg-purple-900/20'
                          : 'text-gray-700 dark:text-gray-300 hover:text-black hover:bg-white/10 dark:hover:bg-white/5'
                      }`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        animate={{ 
                          rotate: isActive || isHovered === item.name ? 360 : 0,
                          scale: isActive ? 1.1 : 1
                        }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        <Icon className="w-4 h-4" />
                      </motion.div>
                      <span className="relative z-10">{item.name}</span>
                      
                      {/* Active indicator with smooth animation */}
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 rounded-2xl -z-10"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.8 }}
                        />
                      )}
                      
                      {/* Hover tooltip */}
                      <AnimatePresence>
                        {isHovered === item.name && !isActive && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-white dark:bg-gray-800 text-black dark:text-white text-xs rounded-lg shadow-xl whitespace-nowrap z-50 border border-gray-300 dark:border-gray-600"
                          >
                            {item.description}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-white dark:bg-gray-800 border-r border-t border-gray-300 dark:border-gray-600" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.a>
                  </motion.div>
                );
              })}
              
              {/* Enhanced Theme Toggle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="ml-6"
              >
                <motion.button
                  onClick={toggleTheme}
                  className={`relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group ${
                    scrolled
                      ? 'bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 hover:from-purple-100 hover:to-purple-200 dark:hover:from-purple-900/30 dark:hover:to-purple-800/30'
                      : 'bg-white/20 dark:bg-white/10 text-white hover:bg-white/30 dark:hover:bg-white/20'
                  }`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 180,
                    boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div
                    animate={{ rotate: theme === 'dark' ? 360 : 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    {theme === 'light' ? (
                      <Sun className="w-6 h-6" />
                    ) : (
                      <Moon className="w-6 h-6" />
                    )}
                  </motion.div>
                </motion.button>
              </motion.div>
              
            </div>

            {/* Enhanced Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={`relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                  scrolled
                    ? 'bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300'
                    : 'bg-white/20 dark:bg-white/10 text-white'
                }`}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)"
                }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  animate={{ rotate: isOpen ? 135 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {isOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>

          {/* Premium Mobile Navigation Panel */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="lg:hidden mt-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-gray-200/30 dark:border-gray-700/30 overflow-hidden"
              >
                <div className="p-6 space-y-3">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.href.substring(1);
                    const Icon = item.icon;
                    
                    return (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`group flex items-center space-x-4 px-5 py-4 rounded-2xl font-medium transition-all duration-300 ${
                          isActive
                            ? 'bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 text-white shadow-xl shadow-purple-500/25'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-purple-50/50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400'
                        }`}
                        whileHover={{ 
                          scale: 1.02,
                          x: 10
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <motion.div
                          animate={{ 
                            rotate: isActive ? 360 : 0,
                            scale: isActive ? 1.2 : 1
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className="w-5 h-5" />
                        </motion.div>
                        <div className="flex-1">
                          <div className="font-semibold">{item.name}</div>
                          <div className={`text-xs ${isActive ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}`}>
                            {item.description}
                          </div>
                        </div>
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-3 h-3 bg-white rounded-full"
                          />
                        )}
                      </motion.a>
                    );
                  })}
                  
                  {/* Mobile Actions */}
                  <div className="pt-6 mt-6 border-t border-gray-200/50 dark:border-gray-700/50 flex items-center justify-between">
                    <motion.button
                      onClick={toggleTheme}
                      className="flex items-center space-x-3 px-5 py-3 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 hover:from-purple-100 hover:to-purple-200 dark:hover:from-purple-900/30 dark:hover:to-purple-800/30 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {theme === 'light' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                      <span className="font-medium">{theme === 'light' ? 'Light' : 'Dark'}</span>
                    </motion.button>
                    
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
};
