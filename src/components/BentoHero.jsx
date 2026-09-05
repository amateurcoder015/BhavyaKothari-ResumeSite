import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowUpRight, 
  Code2, 
  Terminal, 
  Cpu, 
  TrendingUp, 
  Layers, 
  Sparkles,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Instagram
} from 'lucide-react';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../data/socialLinks';
import ProjectVisual from './ProjectVisual';

export default function BentoHero({ onOpenContact, onSelectProject }) {
  const [currentFocusIndex, setCurrentFocusIndex] = useState(0);

  // Rotating focus items
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFocusIndex((prev) => (prev + 1) % PERSONAL_INFO.currentFocus.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Tech stack list
  const techStack = [
    { name: 'Python', category: 'Backend & ML', highlight: true },
    { name: 'JavaScript', category: 'Web', highlight: true },
    { name: 'React', category: 'Frontend', highlight: true },
    { name: 'FastAPI', category: 'API', highlight: false },
    { name: 'Vite', category: 'Build', highlight: false },
    { name: 'Tailwind CSS', category: 'Style', highlight: false },
    { name: 'Framer Motion', category: 'UI', highlight: false },
    { name: 'Machine Learning', category: 'AI', highlight: true },
    { name: 'Financial Analytics', category: 'Quant', highlight: true },
    { name: 'DCF Valuation', category: 'Finance', highlight: true },
    { name: 'Flutter', category: 'Mobile', highlight: false },
    { name: 'Dart', category: 'Mobile', highlight: false },
    { name: 'Java', category: 'Core', highlight: false },
    { name: 'C', category: 'Systems', highlight: false }
  ];

  return (
    <section id="hero" className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Top Banner Tagline */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between mb-6 pb-4 border-b border-white/10 text-xs text-gray-400 font-mono"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-gray-300">AVAILABLE FOR ROLES & CONSULTING</span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-gray-400">
          <span>PORTFOLIO v2.5</span>
          <span>•</span>
          <span>SOFTWARE × AI × QUANT FINANCE</span>
        </div>
      </motion.div>

      {/* Main Bento Grid Composition */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[minmax(180px,auto)]">
        
        {/* CARD 1: INTRODUCTION CARD (Col 1-8, Row 1-2) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-8 bento-card p-6 sm:p-8 flex flex-col justify-between group"
          data-cursor="ABOUT"
        >
          <div className="bento-card-glow" />
          
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                {PERSONAL_INFO.shortGreeting}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-[1.15] mb-4">
              Building at the intersection of{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                Technology, Data & Finance.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed font-sans">
              {PERSONAL_INFO.tagline}
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-gray-400">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300">
                Full-Stack Systems
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300">
                Machine Learning
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300">
                Quantitative Analytics
              </span>
            </div>
            
            <a 
              href="#work"
              className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
              <span>Explore Selected Work</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* CARD 2: PERSONAL PHOTO (Col 9-12, Row 1-2) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-4 bento-card p-0 min-h-[320px] md:min-h-full group overflow-hidden relative"
          data-cursor="ME"
        >
          <img 
            src="/my_image.jpeg" 
            alt="Bhavya Kothari Portrait" 
            className="w-full h-full object-cover object-top filter brightness-[0.92] contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

          {/* Photo Badge Content */}
          <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel border border-white/15 backdrop-blur-md">
            <div className="flex items-center justify-between mb-1">
              <span className="font-heading font-bold text-sm text-white">BHAVYA KOTHARI</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <p className="text-xs text-gray-300 font-mono">
              Software Engineer & AI Researcher
            </p>
          </div>
        </motion.div>

        {/* CARD 3: CURRENT FOCUS (Col 1-4, Row 3) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="md:col-span-4 bento-card p-6 flex flex-col justify-between group"
          data-cursor="FOCUS"
        >
          <div className="bento-card-glow" />
          
          <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-3">
            <span className="tracking-wider text-purple-400 font-semibold uppercase flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" />
              CURRENTLY EXPLORING
            </span>
            <span className="text-[10px] text-gray-500">0{currentFocusIndex + 1}/05</span>
          </div>

          <div className="h-14 flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFocusIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-xl font-heading font-bold text-white tracking-tight"
              >
                {PERSONAL_INFO.currentFocus[currentFocusIndex]}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden mt-3">
            <motion.div 
              key={currentFocusIndex}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.8, ease: 'linear' }}
              className="h-full bg-purple-500"
            />
          </div>
        </motion.div>

        {/* CARD 4: FEATURED PROJECT VISUAL (Col 5-12, Row 3-4) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:col-span-8 md:row-span-2 bento-card p-6 flex flex-col justify-between group cursor-pointer"
          onClick={() => onSelectProject('01')}
          data-cursor="VIEW PROJECT"
        >
          <div className="bento-card-glow" />
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold">
                FEATURED SYSTEM
              </span>
              <span className="text-xs text-gray-400 font-mono">01 / 06</span>
            </div>

            <div className="flex items-center gap-1 text-xs text-gray-400 group-hover:text-blue-400 font-mono transition-colors">
              <span>Interactive Simulator</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          {/* Interactive SIP Visualizer Component */}
          <div className="flex-1 my-2 min-h-[260px]">
            <ProjectVisual type="sip_chart" />
          </div>

          <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
            <div>
              <h3 className="font-heading font-bold text-lg text-white group-hover:text-blue-300 transition-colors">
                SIP Performance Tracker & Recommendation Engine
              </h3>
              <p className="text-xs text-gray-400 font-sans mt-0.5">
                Mutual fund XIRR returns, rolling benchmark comparison & risk analytics.
              </p>
            </div>
            <span className="px-3 py-1.5 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-300 font-mono text-xs font-medium">
              Python + Quant
            </span>
          </div>
        </motion.div>

        {/* CARD 5: TECH STACK (Col 1-4, Row 4-5) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="md:col-span-4 md:row-span-2 bento-card p-6 flex flex-col justify-between group"
          data-cursor="STACK"
        >
          <div className="bento-card-glow" />

          <div>
            <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-4">
              <span className="tracking-wider text-blue-400 font-semibold uppercase flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5" />
                ACTIVE TECH STACK
              </span>
              <span className="text-[10px] text-gray-500">14 Core Tools</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech.name}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 ${
                    tech.highlight
                      ? 'bg-white/10 border border-white/20 text-white font-semibold shadow-sm hover:bg-white/20'
                      : 'bg-white/5 border border-white/10 text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-gray-400 font-mono">
            <span>Core domains: </span>
            <strong className="text-white">Python, Machine Learning, React, Quantitative Finance</strong>
          </div>
        </motion.div>

        {/* CARD 6: GITHUB / BUILDING (Col 5-7, Row 5) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="md:col-span-3 bento-card p-6 flex flex-col justify-between group cursor-pointer"
          onClick={() => window.open(SOCIAL_LINKS.github, '_blank')}
          data-cursor="REPOS"
        >
          <div className="bento-card-glow" />

          <div className="flex items-center justify-between">
            <Github className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
            <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
          </div>

          <div>
            <div className="text-3xl font-heading font-extrabold text-white tracking-tight group-hover:text-blue-400 transition-colors">
              {PERSONAL_INFO.totalRepos}+
            </div>
            <div className="text-xs text-gray-400 font-mono mt-1">
              Repositories Published
            </div>
          </div>

          <div className="text-[11px] text-blue-400 font-mono font-medium">
            Building. Learning. Iterating.
          </div>
        </motion.div>

        {/* CARD 7: SOCIAL LINKS (Col 8-9, Row 5) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="md:col-span-2 bento-card p-6 flex flex-col justify-between group"
          data-cursor="CONNECT"
        >
          <div className="bento-card-glow" />

          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider font-semibold">
            CONNECT
          </span>

          <div className="grid grid-cols-2 gap-2 my-2">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-all"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-blue-400 hover:bg-white/10 transition-all"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenContact}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-emerald-400 hover:bg-white/10 transition-all"
              title="Email Contact"
            >
              <Mail className="w-4 h-4" />
            </button>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-pink-400 hover:bg-white/10 transition-all"
              title="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          <span className="text-[10px] text-gray-500 font-mono">
            Social & Direct
          </span>
        </motion.div>

        {/* CARD 8: CURRENT PROJECT / NOW (Col 10-12, Row 5) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="md:col-span-3 bento-card p-6 flex flex-col justify-between group cursor-pointer"
          onClick={() => onSelectProject('01')}
          data-cursor="NOW"
        >
          <div className="bento-card-glow" />

          <div className="flex items-center justify-between">
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              {PERSONAL_INFO.currentlyBuilding.status}
            </span>
            <span className="text-[10px] font-mono text-gray-500">NOW</span>
          </div>

          <div className="my-2">
            <div className="text-[11px] text-gray-400 font-mono mb-1">
              Currently Building {PERSONAL_INFO.currentlyBuilding.number}
            </div>
            <h4 className="font-heading font-bold text-sm text-white group-hover:text-emerald-300 transition-colors line-clamp-2">
              {PERSONAL_INFO.currentlyBuilding.title}
            </h4>
          </div>

          <div className="flex items-center justify-between text-[11px] text-emerald-400 font-mono">
            <span>{PERSONAL_INFO.currentlyBuilding.category}</span>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
