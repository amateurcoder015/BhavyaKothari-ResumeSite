import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Compass, Hammer, Lightbulb, Sparkles } from 'lucide-react';

export default function PersonalCurrently() {
  const focusCards = [
    {
      label: "LEARNING",
      icon: BookOpen,
      accent: "blue",
      title: "Advanced Financial Analytics & Portfolio Risk Theory",
      desc: "Diving deeper into fixed income term-structure modeling, derivative pricing mechanics, and algorithmic portfolio rebalancing strategies."
    },
    {
      label: "EXPLORING",
      icon: Compass,
      accent: "purple",
      title: "Agentic AI & Multi-Agent Orchestration",
      desc: "Investigating state-machine architectures for autonomous LLM agents that execute self-healing runtime diagnostics and complex task decomposition."
    },
    {
      label: "BUILDING",
      icon: Hammer,
      accent: "green",
      title: "Data-Driven Applications & Financial Engines",
      desc: "Refining mutual fund SIP recommendation models, benchmark alpha attribution tools, and clean production React interfaces."
    },
    {
      label: "THINKING ABOUT",
      icon: Lightbulb,
      accent: "blue",
      title: "Simplifying Complex Quantitative Decisions",
      desc: "How clear visual design, intuitive data abstraction, and transparent analytics can empower individuals to make smarter financial choices."
    }
  ];

  return (
    <section id="currently" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-widest block mb-2">
            SECTION 07 — PERSPECTIVE
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Currently.
          </h2>
        </div>
        <p className="text-sm sm:text-base text-gray-400 max-w-xl font-sans leading-relaxed">
          A view into what is capturing my active intellectual bandwidth, current engineering projects, and research pursuits.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {focusCards.map((card, idx) => {
          const IconComponent = card.icon;
          return (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bento-card p-6 sm:p-8 flex flex-col justify-between group"
              data-cursor="PERSONAL"
            >
              <div className="bento-card-glow" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider ${
                    card.accent === 'green'
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      : card.accent === 'purple'
                      ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                      : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                  }`}>
                    {card.label}
                  </span>

                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    card.accent === 'green'
                      ? 'bg-emerald-950/80 text-emerald-400'
                      : card.accent === 'purple'
                      ? 'bg-purple-950/80 text-purple-400'
                      : 'bg-blue-950/80 text-blue-400'
                  }`}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white group-hover:text-blue-300 transition-colors mb-3">
                  {card.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 text-[10px] font-mono text-gray-500 flex items-center justify-between">
                <span>ACTIVE FOCUS 2026</span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
