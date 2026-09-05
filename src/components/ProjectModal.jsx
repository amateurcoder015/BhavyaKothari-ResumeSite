import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, ArrowRight, Code, ShieldCheck, Sparkles, Layers } from 'lucide-react';
import ProjectVisual from './ProjectVisual';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#0d0d0d] border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Top Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 border border-white/10 text-gray-300 hover:text-white hover:bg-white/20 flex items-center justify-center transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="p-6 sm:p-8 bg-gradient-to-b from-[#141414] to-[#0d0d0d] border-b border-white/10">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-semibold">
                {project.category}
              </span>
              <span className="text-xs font-mono text-gray-400">
                PROJECT {project.id} / 06
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-8 max-h-[70vh] overflow-y-auto no-scrollbar">
            
            {/* Visual Simulator Representation */}
            <div className="h-72 w-full rounded-2xl overflow-hidden shadow-xl">
              <ProjectVisual type={project.visualType} project={project} />
            </div>

            {/* Key Metrics Grid */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-3">
                KEY TECHNICAL METRICS & SYSTEM DESIGN
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.metrics?.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="text-xs text-gray-400 font-mono mb-1">{m.label}</div>
                    <div className="text-sm font-heading font-bold text-white">{m.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Full Project Description */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                SYSTEM ARCHITECTURE & OVERVIEW
              </h3>
              <p className="text-sm text-gray-300 font-sans leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/5">
                {project.description}
              </p>
            </div>

            {/* Technologies Used */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-3">
                TECHNOLOGY STACK
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer CTA */}
          <div className="p-6 bg-[#121212] border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verified Open-Source Repository</span>
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white font-mono text-xs font-semibold hover:bg-white/20 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
