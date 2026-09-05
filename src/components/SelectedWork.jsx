import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../data/projects';
import ProjectVisual from './ProjectVisual';
import ProjectModal from './ProjectModal';
import { ArrowUpRight, Github, ExternalLink, Sparkles, Layers, ChevronRight } from 'lucide-react';

export default function SelectedWork({ activeModalProjectId, setActiveModalProjectId }) {
  const [activeProject, setActiveProject] = useState(null);

  const handleOpenModal = (proj) => {
    setActiveProject(proj);
  };

  const handleCloseModal = () => {
    setActiveProject(null);
    if (setActiveModalProjectId) setActiveModalProjectId(null);
  };

  // Sync if parent passes project ID trigger
  React.useEffect(() => {
    if (activeModalProjectId) {
      const found = PROJECTS_DATA.find((p) => p.id === activeModalProjectId);
      if (found) setActiveProject(found);
    }
  }, [activeModalProjectId]);

  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-widest block mb-2">
            SECTION 03 — PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Selected Work.
          </h2>
        </div>
        <p className="text-sm sm:text-base text-gray-400 max-w-xl font-sans leading-relaxed">
          A collection of systems, quantitative engines, and intelligent software applications turned into working products.
        </p>
      </div>

      {/* Asymmetrical Bento Work Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {PROJECTS_DATA.map((project, index) => {
          // Layout grid span logic
          // 01: full width (12 cols)
          // 02: 6 cols
          // 03: 6 cols
          // 04: full width (12 cols)
          // 05: 6 cols
          // 06: 6 cols
          const isFullWidth = project.id === '01' || project.id === '04';
          const colSpan = isFullWidth ? 'md:col-span-12' : 'md:col-span-6';

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.15 }}
              className={`${colSpan} bento-card p-6 sm:p-8 flex flex-col justify-between group cursor-pointer`}
              onClick={() => handleOpenModal(project)}
              data-cursor="EXPLORE"
            >
              <div className="bento-card-glow" />

              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-gray-500">
                      {project.id} / 06
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold ${
                      project.badgeColor === 'green'
                        ? 'badge-green'
                        : project.badgeColor === 'purple'
                        ? 'badge-purple'
                        : 'badge-blue'
                    }`}>
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-gray-400 group-hover:text-white font-mono transition-colors">
                    <span>Inspect</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white tracking-tight group-hover:text-blue-300 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed mb-6">
                  {project.subtitle}
                </p>
              </div>

              {/* Embedded Custom Visualizer */}
              <div className="my-4 h-64 sm:h-72 w-full rounded-2xl overflow-hidden">
                <ProjectVisual type={project.visualType} project={project} />
              </div>

              {/* Bottom Tech Badges & GitHub Direct Link */}
              <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 4).map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 rounded-lg bg-white/5 text-[11px] font-mono text-gray-400">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                <div 
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.githubUrl, '_blank');
                  }}
                  className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white font-mono p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                  title="GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>

      {/* Modal Render */}
      <ProjectModal project={activeProject} onClose={handleCloseModal} />

    </section>
  );
}
