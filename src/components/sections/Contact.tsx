'use client';

import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, Send, Copy, Check } from 'lucide-react';
import toast from 'react-hot-toast';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
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

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('dikshitjaswal1922@gmail.com');
    setCopied(true);
    toast.success('Email address copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // Fallback: Open mailto with filled parameters
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(`Hi Dikshit,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`);
      window.location.href = `mailto:dikshitjaswal1922@gmail.com?subject=${subject}&body=${body}`;
      toast.success('Opening your default email app with your message pre-filled!');
      setIsSubmitting(false);
      return;
    }

    try {
      const emailData = {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
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
        throw new Error('Email service response error');
      }
    } catch {
      // Fallback
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(`Hi Dikshit,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`);
      window.location.href = `mailto:dikshitjaswal1922@gmail.com?subject=${subject}&body=${body}`;
      toast.success('Opening your default email client to send message!');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'dikshitjaswal1922@gmail.com',
      action: copyEmailToClipboard,
      actionLabel: copied ? 'Copied!' : 'Click to copy',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9317084250',
      action: () => { window.location.href = 'tel:+919317084250'; },
      actionLabel: 'Click to call',
      color: 'from-green-500 to-emerald-400'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hamirpur, Himachal Pradesh, India',
      action: undefined,
      actionLabel: undefined,
      color: 'from-purple-500 to-pink-400'
    }
  ];

  return (
    <section id="contact" className="section-shell py-20 md:py-28">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <span className="badge">Let&apos;s connect</span>
          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">Have an opportunity in <span className="gradient-text">mind?</span></h2>
          <p className="mt-5 text-base leading-7 text-[var(--muted)] sm:text-lg">
            I am open to software engineering internships, junior developer roles, and technical collaborations.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-[1.1fr_0.9fr] md:gap-8">
          {/* Contact Form */}
          <div
            className={`card p-5 sm:p-8 hover:shadow-2xl hover:shadow-[var(--primary)]/20 transition-all duration-500 border border-[var(--border)] bg-[var(--card-bg)] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {isSubmitted ? (
              <div className="text-center py-12 animate-fade-in">
                <div className="w-20 h-20 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Send className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">Message Sent!</h3>
                <p className="text-[var(--foreground)] opacity-70">Thank you for reaching out. I&apos;ll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="group">
                  <label htmlFor="name" className="block text-[var(--foreground)] mb-2 font-semibold text-xs uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/40 border border-[var(--border)] px-4 py-3 rounded-xl focus:border-[var(--primary)] outline-none text-white text-sm transition"
                    placeholder="e.g., Alex Mercer"
                  />
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-[var(--foreground)] mb-2 font-semibold text-xs uppercase tracking-wider">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/40 border border-[var(--border)] px-4 py-3 rounded-xl focus:border-[var(--primary)] outline-none text-white text-sm transition"
                    placeholder="alex@company.com"
                  />
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-[var(--foreground)] mb-2 font-semibold text-xs uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-black/40 border border-[var(--border)] px-4 py-3 rounded-xl focus:border-[var(--primary)] outline-none text-white text-sm transition resize-none"
                    placeholder="Hi Dikshit, I came across your portfolio and wanted to discuss..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-blue-500/25 transition disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div
            className={`space-y-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="mb-4">
              <p className="eyebrow mb-1">Direct Contact</p>
              <h3 className="text-2xl font-bold text-white">Reach out directly</h3>
            </div>

            {contactInfo.map((info, index) => (
              <div
                key={info.label}
                onClick={info.action}
                role={info.action ? 'button' : undefined}
                tabIndex={info.action ? 0 : undefined}
                className={`flex items-center gap-4 bg-[var(--card-bg)] p-4 rounded-xl border border-[var(--border)] hover:border-[var(--primary)]/50 transition-all duration-300 ${
                  info.action ? 'cursor-pointer hover:bg-white/[0.04]' : ''
                } ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center shadow-md flex-shrink-0 text-white`}>
                  <info.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--foreground)] opacity-60 text-xs font-semibold uppercase tracking-wider">
                      {info.label}
                    </span>
                    {info.actionLabel && (
                      <span className="text-[11px] text-[var(--primary)] flex items-center gap-1 font-semibold">
                        {copied && info.label === 'Email' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        {info.actionLabel}
                      </span>
                    )}
                  </div>
                  <div className="truncate text-sm font-bold text-white sm:text-base mt-0.5">
                    {info.value}
                  </div>
                </div>
              </div>
            ))}

            {/* Quick Resume Download Callout */}
            <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-4 mt-6">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-400">Looking for my resume?</p>
              <p className="text-xs text-gray-300 mt-1">
                You can download my verified ATS-friendly resume directly:
              </p>
              <a
                href="/resume.pdf"
                download
                className="mt-3 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-xs font-bold text-white shadow-md hover:bg-blue-500 transition"
              >
                Download ATS Resume (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
