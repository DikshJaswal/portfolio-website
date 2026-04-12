'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Database, Globe, Smartphone, Zap, Users } from 'lucide-react';

export const About: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const skills = [
    { icon: Code2, name: "Frontend Development", level: 75 },
    { icon: Database, name: "Backend Development", level: 65 },
    { icon: Globe, name: "Web Design", level: 60 }
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

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            I'm a passionate full-stack developer with expertise in modern web technologies.
            Currently pursuing BTech and building real-world projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-black mb-4">
                Hi, I'm Dikshit Jaswal
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                I'm a passionate Full Stack Web Developer pursuing BTech at Himachal Pradesh Technical University. 
                I love creating beautiful, functional, and user-centered digital experiences 
                that solve real-world problems.
              </p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-black mb-2">Education</h4>
                <p className="text-gray-400">
                  <strong>Bachelor of Technology</strong> (2023 - 2027)<br />
                  Currently Pursuing<br />
                  Himachal Pradesh Technical University
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">3</div>
                  <div className="text-gray-400 text-sm">Real Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">3rd</div>
                  <div className="text-gray-400 text-sm">Year Student</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">HPTU</div>
                  <div className="text-gray-400 text-sm">University</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="glass rounded-xl p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <skill.icon className="w-6 h-6 text-purple-400" />
                    <span className="text-white font-medium">{skill.name}</span>
                  </div>
                  <span className="text-purple-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
