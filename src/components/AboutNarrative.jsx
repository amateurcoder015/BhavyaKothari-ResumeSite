import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, LineChart, Layers, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';

export default function AboutNarrative() {
  const steps = [
    {
      id: "01",
      phase: "THE FOUNDATION",
      title: "Software Development & Systems",
      icon: Terminal,
      accent: "blue",
      badge: "Core Engineering",
      desc: "Began by engineering foundational web applications, mobile interfaces with Flutter & Dart, and core algorithms in Python, C, and Java. Developed a deep respect for clean code structure, performance optimization, and robust APIs.",
      highlights: ["Data Structures & Algorithms", "Full-Stack Web (React & FastAPI)", "Mobile Applications (Flutter)"]
    },
    {
      id: "02",
      phase: "THE EXPLORATION",
      title: "Machine Learning & AI Architectures",
      icon: Cpu,
      accent: "purple",
      badge: "Artificial Intelligence",
      desc: "Expanded into deep learning, computer vision (CNNs), and Transformer NLP models (BERT). Focused heavily on model explainability (SHAP & LIME) and autonomous agentic workflows designed for error detection and self-healing system recovery.",
      highlights: ["BERT & Transformer Fine-tuning", "Autonomous Multi-Agent AI", "Explainable AI (SHAP / LIME)"]
    },
    {
      id: "03",
      phase: "THE INTERSECTION",
      title: "Finance + Data + Technology",
      icon: LineChart,
      accent: "green",
      badge: "Quantitative Analytics",
      desc: "Fused software engineering with quantitative financial principles. Engineered multi-stage DCF valuation models, mutual fund SIP return analytics engines (XIRR/CAGR), and fixed income risk sensitivity frameworks for Indian debt markets.",
      highlights: ["Multi-Stage DCF Valuation", "Exact XIRR / CAGR Calculation", "Fixed Income & Yield Curve Modeling"]
    },
    {
      id: "04",
      phase: "NOW",
      title: "Building Analytical Systems & Products",
      icon: Layers,
      accent: "blue",
      badge: "Current Mission",
      desc: "Dedicated to solving real-world quantitative and technical challenges. Building high-performance analytical tools, intelligent automated systems, and clean digital products that make complex data actionable.",
      highlights: ["Production-Ready Financial Analytics", "Intelligent Support Agents", "Scalable Full-Stack Engineering"]
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-widest block mb-2">
            SECTION 02 — EVOLUTION & STORY
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Beyond the Code.
          </h2>
        </div>
        <p className="text-sm sm:text-base text-gray-400 max-w-xl font-sans leading-relaxed">
          I don't just write code — I build structured analytical systems. Here is how my technical identity evolved from general software engineering to artificial intelligence and quantitative finance.
        </p>
      </div>

      {/* Visual Evolution Grid Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => {
          const IconComponent = step.icon;
          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bento-card p-6 flex flex-col justify-between group relative"
              data-cursor="EVOLUTION"
            >
              <div className="bento-card-glow" />

              <div>
                {/* Top Badge & Step Number */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-gray-500">
                    {step.id} / 04
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold ${
                    step.accent === 'green'
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      : step.accent === 'purple'
                      ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                      : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                  }`}>
                    {step.badge}
                  </span>
                </div>

                {/* Phase & Title */}
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                    step.accent === 'green'
                      ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30'
                      : step.accent === 'purple'
                      ? 'bg-purple-950/80 text-purple-400 border border-purple-500/30'
                      : 'bg-blue-950/80 text-blue-400 border border-blue-500/30'
                  }`}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase block">
                      {step.phase}
                    </span>
                    <h3 className="font-heading font-bold text-base text-white group-hover:text-blue-300 transition-colors">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-gray-300 font-sans leading-relaxed my-4">
                  {step.desc}
                </p>
              </div>

              {/* Highlights Bullet List */}
              <div className="pt-4 border-t border-white/10 space-y-1.5 font-mono text-[11px] text-gray-400">
                {step.highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      step.accent === 'green' ? 'bg-emerald-400' : step.accent === 'purple' ? 'bg-purple-400' : 'bg-blue-400'
                    }`} />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
