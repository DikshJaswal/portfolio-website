'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Code, 
  Cpu, 
  Database, 
  Cloud, 
  GitBranch,
  Palette,
  Smartphone,
  Shield
} from 'lucide-react';

export const Skills: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      skills: [
        { name: "React", level: 85, color: "from-cyan-400 to-blue-500" },
        { name: "Next.js", level: 80, color: "from-gray-100 to-gray-900" },
        { name: "TypeScript", level: 75, color: "from-blue-400 to-blue-600" },
        { name: "JavaScript", level: 85, color: "from-yellow-400 to-yellow-600" },
        { name: "HTML", level: 90, color: "from-orange-400 to-orange-600" },
        { name: "CSS", level: 85, color: "from-blue-400 to-blue-500" },
        { name: "Tailwind CSS", level: 80, color: "from-cyan-400 to-teal-500" },
        { name: "Bootstrap", level: 70, color: "from-purple-400 to-purple-600" },
      ]
    },
    {
      title: "Backend",
      icon: Cpu,
      skills: [
        { name: "Node.js", level: 75, color: "from-green-400 to-green-600" },
        { name: "Python", level: 80, color: "from-blue-400 to-yellow-400" },
        { name: "Django", level: 70, color: "from-green-500 to-green-700" },
        { name: "Flask", level: 65, color: "from-blue-500 to-blue-700" },
        { name: "C++", level: 60, color: "from-blue-600 to-blue-800" },
      ]
    },
    {
      title: "Database",
      icon: Database,
      skills: [
        { name: "MySQL", level: 75, color: "from-blue-400 to-blue-600" },
        { name: "PostgreSQL", level: 70, color: "from-blue-500 to-blue-700" },
        { name: "MongoDB", level: 75, color: "from-green-500 to-green-700" },
        { name: "Supabase", level: 70, color: "from-green-400 to-emerald-600" },
        { name: "Neon DB", level: 65, color: "from-purple-400 to-purple-600" },
        { name: "Prisma", level: 75, color: "from-indigo-400 to-indigo-600" },
        { name: "Redis", level: 60, color: "from-red-400 to-red-600" },
      ]
    },
    {
      title: "Tools & DevOps",
      icon: Cloud,
      skills: [
        { name: "Git", level: 85, color: "from-orange-400 to-red-500" },
        { name: "GitHub", level: 85, color: "from-gray-600 to-gray-900" },
        { name: "VS Code", level: 90, color: "from-blue-400 to-blue-600" },
        { name: "Vercel", level: 80, color: "from-gray-900 to-gray-700" },
        { name: "Docker", level: 65, color: "from-blue-500 to-cyan-600" },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const SkillBar: React.FC<{ skill: any; index: number }> = ({ skill, index }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      className="mb-4"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex justify-between items-center mb-2">
        <motion.span 
          className="text-white font-medium"
          whileHover={{ scale: 1.05, color: "#8b5cf6" }}
        >
          {skill.name}
        </motion.span>
        <motion.span 
          className="text-gray-400 text-sm"
          whileHover={{ scale: 1.1, color: "#3b82f6" }}
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2 relative overflow-hidden">
        <motion.div
          className={`h-2 bg-gradient-to-r ${skill.color} rounded-full relative`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1.2, delay: 0.5 + index * 0.1, ease: "easeOut" }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 0 10px rgba(139, 92, 246, 0.5)"
          }}
        >
          {/* Shimmer effect on skill bar */}
          <div className="absolute inset-0 shimmer opacity-60" />
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text-animated">Technical Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and tools I work with
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
              }}
              className="glass-enhanced rounded-xl p-6 hover:scale-105 transition-all duration-300"
            >
              <motion.div 
                className="flex items-center mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <category.icon className="w-8 h-8 text-purple-400 mr-3" />
                </motion.div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </motion.div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skill.name} skill={skill} index={skillIndex} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { icon: Smartphone, label: "Responsive Design" },
            { icon: GitBranch, label: "Version Control" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.9 + index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                boxShadow: "0 15px 30px rgba(139, 92, 246, 0.3)"
              }}
              className="glass-enhanced rounded-lg p-4 text-center hover:scale-105 transition-all duration-300"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: index * 0.5
                }}
              >
                <item.icon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              </motion.div>
              <span className="text-gray-300 text-sm">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
