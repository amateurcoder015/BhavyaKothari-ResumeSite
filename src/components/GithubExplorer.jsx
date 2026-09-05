import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GITHUB_REPOS } from '../data/githubRepos';
import { SOCIAL_LINKS } from '../data/socialLinks';
import { Github, ExternalLink, Star, GitFork, ArrowUpRight, Search, Code2 } from 'lucide-react';

export default function GithubExplorer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLang, setSelectedLang] = useState('All');

  const languages = ['All', 'Python', 'JavaScript', 'Jupyter Notebook', 'Dart'];

  const filteredRepos = GITHUB_REPOS.filter((repo) => {
    const matchesSearch = 
      repo.displayName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      repo.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      repo.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesLang = selectedLang === 'All' || repo.language === selectedLang;

    return matchesSearch && matchesLang;
  });

  return (
    <section id="repos" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-widest block mb-2">
            SECTION 06 — OPEN SOURCE REPOSITORIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            From the Repository.
          </h2>
        </div>
        <p className="text-sm sm:text-base text-gray-400 max-w-xl font-sans leading-relaxed">
          Curated index of open-source projects, machine learning models, financial tools, and mobile software published on GitHub.
        </p>
      </div>

      {/* Search & Language Filter Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 p-4 rounded-2xl bg-[#121212] border border-white/10">
        
        {/* Search Input */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute left-3 top.1/2 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search repositories or tech..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-[#080808] border border-white/10 rounded-xl text-xs font-mono text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        {/* Language Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto no-scrollbar">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLang(lang)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all whitespace-nowrap ${
                selectedLang === lang
                  ? 'bg-blue-600 text-white font-bold'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

      </div>

      {/* Repositories Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRepos.map((repo, idx) => (
          <motion.div
            key={repo.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="bento-card p-6 flex flex-col justify-between group cursor-pointer"
            onClick={() => window.open(repo.url, '_blank')}
            data-cursor="GITHUB"
          >
            <div className="bento-card-glow" />

            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-mono font-bold text-gray-300">
                    {repo.language}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              {/* Title & Description */}
              <h3 className="font-heading font-bold text-base text-white group-hover:text-blue-300 transition-colors mb-2 line-clamp-1">
                {repo.displayName}
              </h3>
              <p className="text-xs text-gray-400 font-sans leading-relaxed mb-4 line-clamp-3">
                {repo.description}
              </p>
            </div>

            <div>
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {repo.tags.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[10px] font-mono text-gray-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Footer Row */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span className="text-gray-400">Updated {repo.updated}</span>
                <span className="text-blue-400 font-semibold flex items-center gap-1">
                  <span>View Code</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>

          </motion.div>
        ))}
      </div>

      {/* CTA Button to main GitHub Profile */}
      <div className="mt-12 text-center">
        <a
          href={SOCIAL_LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white/10 border border-white/20 text-white font-mono text-xs font-semibold hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-200 shadow-xl shadow-black/50"
          data-cursor="ALL REPOS"
        >
          <Github className="w-4 h-4 text-blue-400" />
          <span>Explore all 32+ repositories on GitHub</span>
          <ArrowUpRight className="w-4 h-4 text-blue-300" />
        </a>
      </div>

    </section>
  );
}
