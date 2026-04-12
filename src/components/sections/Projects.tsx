'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Play, Code, Zap, Star, Sparkles, Rocket, Eye, GitBranch, Calendar, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import toast from 'react-hot-toast';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  category: 'web' | 'mobile' | 'ai' | 'design';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  completion: number;
}

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [filterAnimation, setFilterAnimation] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "API Sentinel",
      description: "API monitoring and security tool for web applications",
      image: "/api-sentinel-dashboard.png",
      tech: ["Next.js", "TypeScript", "Node.js"],
      liveUrl: "https://api-sentinel-nljitkp9l-djs-projects-1fb4898a.vercel.app",
      githubUrl: "https://github.com/DikshJaswal/api-sentinel",
      featured: true,
      category: "web",
      difficulty: "advanced",
      completion: 95
    },
    {
      id: 2,
      title: "Multi-Vendor Marketplace",
      description: "E-commerce platform with multi-vendor support",
      image: "/marketplace-ecommerce.png",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      liveUrl: "https://multi-vendor-marketplace-9u97xgs5y-djs-projects-1fb4898a.vercel.app",
      githubUrl: "https://github.com/DikshJaswal/multi-vendor-marketplace",
      category: "web",
      difficulty: "advanced",
      completion: 100
    },
    {
      id: 3,
      title: "CodeFlow Debugger",
      description: "JavaScript debugging and code analysis tool",
      image: "/codeflow-debugger.png",
      tech: ["JavaScript", "TypeScript", "React"],
      liveUrl: "https://codeflow-javascript-debugger-4cokuv4ev-djs-projects-1fb4898a.vercel.app",
      githubUrl: "https://github.com/DikshJaswal/codeflow-javascript-debugger",
      category: "web",
      difficulty: "advanced",
      completion: 90
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: Sparkles },
    { id: 'web', label: 'Web Apps', icon: Zap }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleCategoryChange = (categoryId: string) => {
    setFilterAnimation(true);
    setTimeout(() => setFilterAnimation(false), 300);
    setSelectedCategory(categoryId);
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <motion.span
              className="gradient-text-animated inline-block"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Featured Projects
            </motion.span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-8"
          >
            Innovative projects that showcase advanced technical skills and creative problem-solving
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`relative px-6 py-3 rounded-full transition-all duration-300 overflow-hidden ${
                selectedCategory === category.id 
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg' 
                  : 'glass hover:bg-purple-500/20 text-gray-300 hover:text-white'
              }`}
            >
              <div className="flex items-center">
                <category.icon className="w-4 h-4 mr-2" />
                <span>{category.label}</span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ 
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="group"
                layout
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-800 transform-gpu">
                  {/* Status badges */}
                  <div className="absolute top-4 right-4 z-10 flex gap-2">
                    {project.featured && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                        className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1"
                      >
                        <Star className="w-3 h-3" fill="currentColor" />
                        Featured
                      </motion.div>
                    )}
                    {project.completion === 100 && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                        className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1"
                      >
                        <GitBranch className="w-3 h-3" fill="currentColor" />
                        Complete
                      </motion.div>
                    )}
                  </div>
                  
                  {/* Project image */}
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1, rotate: 1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    
                    {/* Animated gradient overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                    
                    {/* Overlay with view hint */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <motion.div
                        initial={{ y: 30, opacity: 0, scale: 0.9 }}
                        whileHover={{ y: 0, opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-xl p-4 text-center shadow-2xl border border-white/20 dark:border-gray-700/50"
                      >
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="mb-2"
                        >
                          <Rocket className="w-6 h-6 text-purple-600 dark:text-purple-400 mx-auto" />
                        </motion.div>
                                              </motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {/* Title */}
                      <motion.h3 
                        className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300"
                        whileHover={{ color: "rgb(147, 51, 234)" }}
                      >
                        {project.title}
                      </motion.h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                        {project.description}
                      </p>
                      
                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.tech.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + techIndex * 0.05 }}
                            whileHover={{ 
                              scale: 1.05,
                              backgroundColor: "rgb(147, 51, 234)",
                              color: "white"
                            }}
                            className="px-3 py-1 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 text-xs font-medium rounded-lg border border-purple-200 dark:border-purple-700/50 transition-all duration-200 cursor-pointer"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                      
                      {/* Project stats */}
                      <div className="grid grid-cols-2 gap-4 mb-5">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                            <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Progress</p>
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">{project.completion}%</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                            <TrendingUp className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Difficulty</p>
                            <p className="text-sm font-semibold text-gray-900 dark:text-white capitalize">{project.difficulty}</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Action buttons */}
                      <div className="flex gap-3">
                        <motion.button
                          whileHover={{ 
                            scale: 1.05,
                            backgroundColor: "rgb(147, 51, 234)",
                            color: "white"
                          }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                        toast.success('Opening GitHub repository...', { duration: 2000 });
                        window.open(project.githubUrl, '_blank');
                      }}
                          className="flex-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 border border-gray-200 dark:border-gray-700"
                        >
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <Github className="w-4 h-4" />
                          </motion.div>
                          View Code
                        </motion.button>
                        
                        {project.liveUrl && (
                          <motion.button
                            whileHover={{ 
                              scale: 1.05,
                              boxShadow: "0 10px 30px rgba(147, 51, 234, 0.5)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                            toast.success('Opening live demo...', { duration: 2000 });
                            window.open(project.liveUrl, '_blank');
                          }}
                            className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                          >
                            <motion.div
                              whileHover={{ x: 2 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ExternalLink className="w-4 h-4" />
                            </motion.div>
                            Live Demo
                          </motion.button>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
