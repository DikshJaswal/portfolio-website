'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Code2, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { ParticleBackground } from '../ui/ParticleBackground';

export const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const backgroundX = useSpring(useTransform(mouseX, [0, 1], [-20, 20]));
  const backgroundY = useSpring(useTransform(mouseY, [0, 1], [-20, 20]));

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect();
      if (rect) {
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/DikshJaswal', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/dikshit-jaswal-a0172a379', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:dikshitjaswal1922@gmail.com', label: 'Email' },
  ];

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <ParticleBackground />
      
      {/* Enhanced Animated Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.4) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
                           radial-gradient(circle at 40% 20%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 60% 70%, rgba(16, 185, 129, 0.2) 0%, transparent 50%)`,
          x: backgroundX,
          y: backgroundY,
        }}
      />

      {/* Enhanced floating orbs */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute w-96 h-96 bg-purple-600/30 rounded-full blur-3xl floating"
          style={{ top: '20%', left: '10%' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute w-64 h-64 bg-blue-600/30 rounded-full blur-2xl floating"
          style={{ bottom: '20%', right: '10%', animationDelay: '2s' }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute w-80 h-80 bg-pink-600/20 rounded-full blur-3xl floating"
          style={{ top: '50%', left: '60%', animationDelay: '4s' }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="flex items-center justify-center mb-4">
          <Sparkles className="w-6 h-6 text-purple-400 mr-2" />
          <h2 className="text-lg md:text-xl text-gray-400 font-medium">
            Hello, I'm
          </h2>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="gradient-text-animated">Dikshit Jaswal</span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="text-xl md:text-2xl lg:text-3xl text-gray-400 mb-8 font-light flex items-center justify-center"
        >
          <Code2 className="w-6 h-6 mr-2 text-blue-400" />
          <span className="typing-animation">
            Full Stack Web Developer
          </span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg leading-relaxed"
        >
          BTech student passionate about web development and creating digital solutions.
          Learning modern technologies and building real-world projects.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="glow-purple magnetic"
            >
              View My Work
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="secondary"
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="glow-blue magnetic"
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 p-3 rounded-full glass-enhanced hover:scale-110"
              whileHover={{ 
                scale: 1.2, 
                rotate: 5,
                boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)"
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <link.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </motion.div>

      <style jsx>{`
        .typing-animation {
          display: inline-block;
          overflow: hidden;
          border-right: 2px solid #8b5cf6;
          white-space: nowrap;
          animation: typing 3s steps(20, end), blink-caret 0.75s step-end infinite;
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #8b5cf6 }
        }
      `}</style>
    </section>
  );
};
