import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Experience() {
  const { experience } = portfolioData;
  const [ref, visible] = useScrollReveal();

  return (
    <section id="experience" className="py-28 relative">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-3">03 — Where I've worked</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 lg:left-8 top-0 bottom-0 w-px timeline-line hidden sm:block" />

          <div className="space-y-10">
            {experience.map((exp, i) => (
              <div key={i} className="relative pl-0 sm:pl-20 lg:pl-24">
                {/* Dot */}
                <div className="hidden sm:flex absolute left-0 lg:left-8 top-6 w-4 h-4 -translate-x-1.5 rounded-full bg-orange-400 border-2 border-dark-900 items-center justify-center shadow-[0_0_12px_rgba(255,107,53,0.5)]">
                </div>

                {/* Card */}
                <div className="gradient-border p-7 card-hover">
                  {/* Badge */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={14} className="text-orange-400" />
                        <span className="font-mono-custom text-xs text-orange-400 tracking-widest uppercase">{exp.type}</span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-white">{exp.role}</h3>
                      <p className="font-display text-lg text-slate-400">{exp.company}</p>
                    </div>
                    <span className="font-mono-custom text-xs text-slate-500 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  {/* Points */}
                  <ul className="space-y-2.5">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-3 text-slate-400 text-sm">
                        <ChevronRight size={14} className="text-orange-400 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
