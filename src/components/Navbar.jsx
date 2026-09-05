import React, { useState, useEffect } from 'react';
import { SOCIAL_LINKS } from '../data/socialLinks';
import { ArrowUpRight, Github, Mail, Sparkles, Terminal } from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Selected Work', href: '#work' },
    { name: 'Capabilities', href: '#skills' },
    { name: 'Repos', href: '#repos' },
    { name: 'Currently', href: '#currently' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-[#080808]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a 
            href="#hero" 
            className="flex items-center gap-3 group focus:outline-none"
            data-cursor="HOME"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-[1px] shadow-lg shadow-blue-500/10 group-hover:shadow-blue-500/20 transition-all duration-300">
              <div className="w-full h-full bg-[#0d0d0d] rounded-[11px] flex items-center justify-center font-heading font-extrabold text-sm tracking-wider text-white group-hover:bg-[#141414] transition-colors">
                BK
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm text-white tracking-wide group-hover:text-blue-400 transition-colors">
                BHAVYA KOTHARI
              </span>
              <span className="text-[10px] text-gray-400 font-mono tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                ONLINE / BUILDING
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#121212]/80 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA Buttons */}
          <div className="flex items-center gap-2.5">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center justify-center w-9 h-9 rounded-xl bg-[#141414] border border-white/10 text-gray-300 hover:text-white hover:border-white/20 hover:bg-[#1a1a1a] transition-all"
              title="GitHub Profile"
              data-cursor="CODE"
            >
              <Github className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenContact}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium text-xs tracking-wide shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              data-cursor="CONTACT"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-blue-200" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
