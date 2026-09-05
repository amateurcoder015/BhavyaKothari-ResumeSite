import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../data/socialLinks';
import { Mail, Copy, Check, Github, Linkedin, Instagram, ArrowUpRight, Send, Sparkles } from 'lucide-react';

export default function ContactSection({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SOCIAL_LINKS.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormState({ name: '', email: '', message: '' });
      if (onClose) onClose();
    }, 3000);
  };

  return (
    <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 relative">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="bento-card p-8 sm:p-14 relative overflow-hidden">
        <div className="bento-card-glow" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text & Contact Buttons */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-widest block">
              SECTION 08 — CONTACT & COLLABORATION
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.1]">
              Let's Build Something{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                Interesting.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-300 font-sans leading-relaxed max-w-xl">
              Have an interesting software challenge, quantitative finance project, machine learning research idea, or engineering role? Let's talk.
            </p>

            {/* Email CTA Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-mono font-bold text-sm shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                data-cursor="EMAIL"
              >
                <Mail className="w-5 h-5" />
                <span>{SOCIAL_LINKS.email}</span>
                <ArrowUpRight className="w-4 h-4 text-blue-200" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-5 py-4 rounded-2xl bg-white/10 border border-white/15 text-gray-200 font-mono text-xs font-semibold hover:bg-white/20 transition-all"
                title="Copy Email Address"
                data-cursor="COPY"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Verified Social Icons */}
            <div className="pt-6 flex items-center gap-3">
              <span className="text-xs font-mono text-gray-400 mr-2">VERIFIED PROFILES:</span>
              
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:scale-110 transition-all"
                title="GitHub"
                data-cursor="GITHUB"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-blue-400 hover:bg-white/10 hover:scale-110 transition-all"
                title="LinkedIn"
                data-cursor="LINKEDIN"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-pink-400 hover:bg-white/10 hover:scale-110 transition-all"
                title="Instagram"
                data-cursor="INSTAGRAM"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column Direct Message Form */}
          <div className="lg:col-span-5 bg-[#0a0a0a]/90 p-6 sm:p-8 rounded-2xl border border-white/10 backdrop-blur-md">
            
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                SEND DIRECT MESSAGE
              </span>
              <span className="text-[10px] font-mono text-gray-400">BHAVYA KOTHARI</span>
            </div>

            {formSent ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-lg text-white">Message Transmitted!</h4>
                <p className="text-xs text-gray-400 font-sans">
                  Thank you for reaching out. I'll get back to you promptly at your provided email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-mono text-gray-400 mb-1">YOUR NAME</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#141414] border border-white/10 rounded-xl text-xs font-mono text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-gray-400 mb-1">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#141414] border border-white/10 rounded-xl text-xs font-mono text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-gray-400 mb-1">MESSAGE / PROJECT DETAILS</label>
                  <textarea
                    required
                    rows="4"
                    placeholder="Tell me about your idea, role, or collaboration..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#141414] border border-white/10 rounded-xl text-xs font-mono text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 transition-all active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>

      {/* Footer copyright */}
      <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-gray-400 gap-4">
        <div>
          © {new Date().getFullYear()} BHAVYA KOTHARI. ALL RIGHTS RESERVED.
        </div>
        <div className="flex items-center gap-4">
          <a href="#hero" className="hover:text-white transition-colors">BACK TO TOP ↑</a>
          <span>•</span>
          <a href={SOCIAL_LINKS.oldPortfolio} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">OLD PORTFOLIO ARCHIVE</a>
        </div>
      </div>

    </section>
  );
}
