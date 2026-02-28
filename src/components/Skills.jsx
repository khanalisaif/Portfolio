import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  Code2, Monitor, Server, Database, Zap,
  Plug, Wrench, Brain, Rocket
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const iconMap = { Code2, Monitor, Server, Database, Zap, Plug, Wrench, Brain, Rocket };

export default function Skills() {
  const { skills } = portfolioData;
  const [ref, visible] = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <section id="skills" className="py-28 relative">
      <div className="absolute inset-0 bg-dark-800/20 pointer-events-none" />

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-3">02 — What I know</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Technical <span className="text-gradient">Skills</span>
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Code2;
            const isActive = activeCategory === i;

            return (
              <div
                key={i}
                className={`gradient-border p-6 cursor-pointer transition-all duration-300 ${
                  isActive ? 'border-orange-400/40' : ''
                } card-hover`}
                onClick={() => setActiveCategory(isActive ? null : i)}
                style={{
                  animationDelay: `${i * 80}ms`,
                }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${cat.color}15`, border: `1px solid ${cat.color}30` }}
                  >
                    <Icon size={18} style={{ color: cat.color }} />
                  </div>
                  <h3 className="font-display font-semibold text-white text-sm">{cat.category}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, j) => (
                    <span
                      key={j}
                      className="skill-tag font-mono-custom text-xs px-2.5 py-1 rounded-lg border"
                      style={{
                        backgroundColor: `${cat.color}08`,
                        borderColor: `${cat.color}25`,
                        color: `${cat.color}`,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Count */}
                <div className="mt-4 pt-4 border-t border-white/5">
                  <span className="font-mono-custom text-xs text-slate-600">
                    {cat.items.length} technologies
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Total count */}
        <div className="mt-12 text-center">
          <span className="font-mono-custom text-sm text-slate-500">
            Total:{' '}
            <span className="text-orange-400 font-semibold">
              {skills.reduce((acc, cat) => acc + cat.items.length, 0)}
            </span>{' '}
            technologies across{' '}
            <span className="text-orange-400 font-semibold">{skills.length}</span> categories
          </span>
        </div>
      </div>
    </section>
  );
}
