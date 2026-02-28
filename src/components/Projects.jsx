import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Github, ChevronRight, Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Projects() {
  const { projects } = portfolioData;
  const [ref, visible] = useScrollReveal();
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute inset-0 bg-dark-800/20 pointer-events-none" />

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-3">04 — What I've built</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <div key={i} className={`gradient-border overflow-hidden card-hover ${project.featured ? 'border-orange-400/20' : ''}`}>
              <div className="p-7 lg:p-8">
                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {project.featured && <Star size={12} className="text-orange-400 fill-orange-400" />}
                      <span className="font-mono-custom text-xs text-orange-400/70 tracking-widest uppercase">{project.subtitle}</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white">{project.title}</h3>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-mono-custom text-xs text-orange-400 border border-orange-400/30 px-4 py-2 rounded-lg hover:bg-orange-400/10 transition-all"
                      >
                        <ExternalLink size={13} />
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-mono-custom text-xs text-slate-400 border border-white/10 px-4 py-2 rounded-lg hover:border-white/20 hover:text-white transition-all"
                    >
                      <Github size={13} />
                      Code
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, j) => (
                    <span key={j} className="font-mono-custom text-xs bg-white/5 text-slate-400 border border-white/8 px-2.5 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Toggle features */}
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="flex items-center gap-1.5 font-mono-custom text-xs text-orange-400/70 hover:text-orange-400 transition-colors"
                >
                  <ChevronRight
                    size={14}
                    className={`transition-transform duration-200 ${expanded === i ? 'rotate-90' : ''}`}
                  />
                  {expanded === i ? 'Hide' : 'Show'} features ({project.features.length})
                </button>

                {/* Features (expanded) */}
                {expanded === i && (
                  <div className="mt-5 grid sm:grid-cols-2 gap-2">
                    {project.features.map((feat, j) => (
                      <div key={j} className="flex items-start gap-2 text-slate-400 text-sm">
                        <span className="text-orange-400 mt-0.5">▹</span>
                        <span className="leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 text-center">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-display font-medium text-slate-400 hover:text-orange-400 border border-white/10 hover:border-orange-400/30 px-8 py-3.5 rounded-xl transition-all duration-200"
          >
            <Github size={18} />
            View All Repositories on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
