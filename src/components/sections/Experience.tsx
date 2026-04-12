'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';

export const Experience: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const experiences = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "work",
      description: "Leading development of scalable web applications using modern technologies."
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      location: "New York, NY",
      period: "2020 - 2022",
      type: "work",
      description: "Developed and maintained multiple client projects using React, Node.js, and cloud technologies."
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Creative Agency",
      location: "Los Angeles, CA",
      period: "2018 - 2020",
      type: "work",
      description: "Built responsive websites and interactive user interfaces for various clients."
    },
    {
      id: 4,
      title: "Bachelor of Computer Science",
      company: "Stanford University",
      location: "Stanford, CA",
      period: "2014 - 2018",
      type: "education",
      description: "Graduated Magna Cum Laude with focus on Software Engineering and Web Technologies."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return <Briefcase className="w-5 h-5 text-purple-400" />;
      case 'education':
        return <GraduationCap className="w-5 h-5 text-blue-400" />;
      default:
        return <Calendar className="w-5 h-5 text-green-400" />;
    }
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience & Education</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 to-blue-500" />
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-background border-4 border-purple-500 rounded-full z-10" />
                
                {/* Content card */}
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)"
                  }}
                  className={`glass rounded-xl p-6 w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:ml-auto md:mr-8' : 'md:mr-auto md:ml-8'
                  } hover:scale-105 transition-all duration-300`}
                >
                  <div className="flex items-center mb-4">
                    {getIcon(exp.type)}
                    <div className="ml-3">
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-purple-400 font-medium">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-400 mb-3">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{exp.location}</span>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <Calendar className="w-4 h-4 mr-2 text-purple-400" />
                    <span className="text-gray-300">{exp.period}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
