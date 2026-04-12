'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/DikshJaswal', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/dikshit-jaswal-a0172a379', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:dikshitjaswal1922@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Dikshit Jaswal</h3>
            <p className="text-gray-400">
              BTech student passionate about web development and creating digital solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <motion.a
                key="github"
                href="https://github.com/DikshJaswal"
                target="_blank"
                className="social-icon hover:text-white transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                key="linkedin"
                href="https://www.linkedin.com/in/dikshit-jaswal-a0172a379"
                target="_blank"
                className="social-icon hover:text-white transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                key="email"
                href="mailto:dikshitjaswal1922@gmail.com"
                className="social-icon hover:text-white transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2026 Dikshit Jaswal. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Created with passion and dedication
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
