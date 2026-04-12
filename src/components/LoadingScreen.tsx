'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Sparkles } from 'lucide-react';

export const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) return 100;
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-background to-background/95"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl"
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Main loading content */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center max-w-md mx-auto px-6"
      >
        {/* Logo/Avatar */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="relative mb-8"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-purple-500/25">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-white font-bold text-2xl">DJ</span>
            </motion.div>
          </div>
          
          {/* Orbiting sparkles */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <Sparkles className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 w-4 h-4 text-purple-400" />
            <Sparkles className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 w-4 h-4 text-blue-400" />
            <Sparkles className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 w-4 h-4 text-purple-400" />
            <Sparkles className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 w-4 h-4 text-blue-400" />
          </motion.div>
        </motion.div>
        
        {/* Name and title */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Dikshit Jaswal
            </span>
          </h1>
          
          <div className="flex items-center justify-center space-x-2 text-foreground/70">
            <Code2 className="w-5 h-5 text-purple-400" />
            <p className="text-lg font-medium">
              Full Stack Web Developer
            </p>
          </div>
        </motion.div>

        {/* Loading progress */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-8 space-y-3"
        >
          <div className="w-full bg-foreground/10 rounded-full h-2 overflow-hidden backdrop-blur-sm">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${Math.min(loadingProgress, 100)}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
          <p className="text-sm text-foreground/60">
            {Math.min(Math.floor(loadingProgress), 100)}% Loading...
          </p>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute top-10 left-10"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 bg-purple-400 rounded-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute top-20 right-16"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="w-3 h-3 bg-blue-400 rounded-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="absolute bottom-20 left-20"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 2.2, repeat: Infinity }}
            className="w-2 h-2 bg-purple-300 rounded-full"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
