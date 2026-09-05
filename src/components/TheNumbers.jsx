import React from 'react';
import { motion } from 'framer-motion';
import { Code, GitBranch, Terminal, ShieldCheck, Database, Zap } from 'lucide-react';

export default function TheNumbers() {
  const stats = [
    {
      label: "Published GitHub Repositories",
      value: "32+",
      sub: "Active open-source codebases & research labs",
      accent: "blue"
    },
    {
      label: "Core Engineering Disciplines",
      value: "04",
      sub: "Software, AI, ML & Quantitative Finance",
      accent: "purple"
    },
    {
      label: "Analytical & FinTech Engines",
      value: "10+",
      sub: "DCF, SIP XIRR, Yield Curves & BERT Agents",
      accent: "green"
    },
    {
      label: "Empirical Code Integrity",
      value: "100%",
      sub: "Real math, real datasets & verified logic",
      accent: "blue"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-widest block mb-2">
          SECTION 05 — METRICS
        </span>
        <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
          By The Numbers.
        </h2>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bento-card p-6 flex flex-col justify-between text-center group"
            data-cursor="METRIC"
          >
            <div className="bento-card-glow" />

            <div className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight group-hover:scale-105 transition-transform duration-300 mb-2">
              <span className={
                stat.accent === 'green'
                  ? 'text-emerald-400'
                  : stat.accent === 'purple'
                  ? 'text-purple-400'
                  : 'text-blue-400'
              }>
                {stat.value}
              </span>
            </div>

            <div>
              <div className="text-sm font-heading font-bold text-gray-200 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-400 font-sans">
                {stat.sub}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-center gap-1.5 text-[10px] text-gray-500 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>VERIFIED GITHUB ACTIVITY</span>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
