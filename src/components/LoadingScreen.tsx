'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

export const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) return 100;
        return prev + Math.random() * 10;
      });
    }, 150);

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
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--background)]"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-center max-w-md mx-auto px-6"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-6"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-2xl flex items-center justify-center mx-auto">
            <span className="text-white font-bold text-2xl">DJ</span>
          </div>
        </motion.div>
        
        {/* Name */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="text-3xl font-bold mb-2"
        >
          <span className="gradient-text">Dikshit Jaswal</span>
        </motion.h1>
        
        {/* Title */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="flex items-center justify-center space-x-2 text-[var(--foreground)] opacity-70 mb-6"
        >
          <Code2 className="w-4 h-4 text-[var(--primary)]" />
          <p className="text-sm font-medium">
            Full Stack Web Developer
          </p>
        </motion.div>

        {/* Loading progress */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="space-y-2"
        >
          <div className="w-full bg-[var(--card-bg)] rounded-full h-2">
            <motion.div
              className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${Math.min(loadingProgress, 100)}%` }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />
          </div>
          <p className="text-xs text-[var(--foreground)] opacity-60">
            {Math.min(Math.floor(loadingProgress), 100)}%
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
