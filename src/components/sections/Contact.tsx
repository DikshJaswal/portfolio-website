'use client';

import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import toast from 'react-hot-toast';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('contact');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const emailData = {
        service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        template_params: {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Dikshit Jaswal',
          reply_to: formData.email
        }
      };

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
        toast.success('Message sent successfully!');
      } else {
        const errorData = await response.text();
        throw new Error(`EmailJS error: ${errorData}`);
      }

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      if (errorMessage.includes('EmailJS')) {
        toast.error('Email service not configured. Please contact directly at dikshitjaswal1922@gmail.com');
      } else {
        toast.error('Failed to send message. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'dikshitjaswal1922@gmail.com', color: 'from-blue-500 to-cyan-400' },
    { icon: Phone, label: 'Phone', value: '+91 9317084250', color: 'from-green-500 to-emerald-400' },
    { icon: MapPin, label: 'Location', value: 'Hamirpur, Himachal Pradesh, India', color: 'from-purple-500 to-pink-400' }
  ];

  return (
    <section id="contact" className="section-shell py-20 md:py-28">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <span className="badge">Let&apos;s connect</span>
          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">Have a project in <span className="gradient-text">mind?</span></h2>
          <p className="mt-5 text-base leading-7 text-[var(--muted)] sm:text-lg">
            I&apos;m open to internships, collaborations, and conversations about building useful products.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-[1.1fr_0.9fr] md:gap-8">
          {/* Contact Form */}
          <div
            className={`card p-5 sm:p-8 hover:shadow-2xl hover:shadow-[var(--primary)]/20 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {isSubmitted ? (
              <div className="text-center py-12 animate-fade-in">
                <div className="w-20 h-20 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Send className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-[var(--foreground)] opacity-70">Thank you for reaching out. I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label htmlFor="name" className="block text-[var(--foreground)] mb-2 font-semibold group-hover:text-[var(--primary)] transition-colors duration-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[var(--card-bg)] border border-[var(--border)] px-4 py-3 rounded-xl focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all duration-300 hover:border-[var(--primary)]/50"
                    placeholder="Your Name"
                  />
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-[var(--foreground)] mb-2 font-semibold group-hover:text-[var(--primary)] transition-colors duration-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[var(--card-bg)] border border-[var(--border)] px-4 py-3 rounded-xl focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all duration-300 hover:border-[var(--primary)]/50"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-[var(--foreground)] mb-2 font-semibold group-hover:text-[var(--primary)] transition-colors duration-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-[var(--card-bg)] border border-[var(--border)] px-4 py-3 rounded-xl focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all duration-300 hover:border-[var(--primary)]/50 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-[var(--primary)]/30 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div
            className={`space-y-5 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="mb-6">
              <p className="eyebrow mb-2">Direct line</p>
              <h3 className="text-2xl font-bold">Contact information</h3>
            </div>
            {contactInfo.map((info, index) => (
              <div
                key={info.label}
                className={`flex items-center gap-4 bg-[var(--card-bg)] p-5 rounded-xl border border-[var(--border)] hover:border-[var(--primary)]/50 hover:shadow-lg hover:shadow-[var(--primary)]/10 hover:-translate-x-1 transition-all duration-300 cursor-pointer group ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-[var(--foreground)] opacity-60 text-sm font-medium mb-1">
                    {info.label}
                  </div>
                  <div className="break-all text-sm font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors duration-300 sm:text-base">
                    {info.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
