import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SKILLS_CATEGORIES } from '../data/skills';
import { Code2, Cpu, TrendingUp, Wrench, CheckCircle2, Sparkles, Filter } from 'lucide-react';

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = SKILLS_CATEGORIES;

  const iconMap = {
    Code2,
    Cpu,
    TrendingUp,
    Wrench
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-widest block mb-2">
            SECTION 04 — TECHNICAL CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight uppercase">
            WHAT I WORK WITH.
          </h2>
        </div>
        <p className="text-sm sm:text-base text-gray-400 max-w-xl font-sans leading-relaxed">
          Technical stack directly used across my production projects, AI model training, quantitative finance research, and open-source repositories.
        </p>
      </div>

      {/* Domain Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/10">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
            activeTab === 'all'
              ? 'bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/20'
              : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
          }`}
        >
          All Domains
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              activeTab === cat.id
                ? 'bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/20'
                : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Category Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories
          .filter((cat) => activeTab === 'all' || activeTab === cat.id)
          .map((cat, catIdx) => {
            const IconComp = iconMap[cat.iconName] || Code2;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIdx * 0.1 }}
                className="bento-card p-6 sm:p-8 flex flex-col justify-between group"
                data-cursor="SKILLS"
              >
                <div className="bento-card-glow" />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        cat.accentColor === 'green'
                          ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30'
                          : cat.accentColor === 'purple'
                          ? 'bg-purple-950/80 text-purple-400 border border-purple-500/30'
                          : 'bg-blue-950/80 text-blue-400 border border-blue-500/30'
                      }`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="font-heading font-extrabold text-base text-white tracking-wider">
                        {cat.title}
                      </h3>
                    </div>

                    <span className="text-xs font-mono text-gray-500">
                      {cat.skills.length} Technologies
                    </span>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {cat.skills.map((s, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.05] transition-all group/skill"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-heading font-bold text-xs text-white group-hover/skill:text-blue-300 transition-colors">
                            {s.name}
                          </span>
                          <span className="text-[10px] font-mono text-gray-400 px-1.5 py-0.5 rounded bg-white/5">
                            {s.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-gray-400 font-sans leading-tight">
                          {s.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
      </div>

    </section>
  );
}
