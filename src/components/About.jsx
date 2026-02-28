import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { MapPin, Mail, Phone, User } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const { personal, languages } = portfolioData;
  const [ref, visible] = useScrollReveal();

  return (
    <section id="about" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/30 to-dark-900 pointer-events-none" />

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {/* Section header */}
        <div className="mb-16">
          <p className="section-label mb-3">01 — Who I am</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Summary */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              {personal.summary}
            </p>

            {/* Quick facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[
                { icon: <User size={16} />, label: 'Name', value: personal.name },
                { icon: <MapPin size={16} />, label: 'Location', value: personal.location },
                { icon: <Mail size={16} />, label: 'Email', value: personal.email },
                { icon: <Phone size={16} />, label: 'Phone', value: personal.phone },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-dark-700/40 border border-white/5">
                  <span className="text-orange-400 mt-0.5">{item.icon}</span>
                  <div>
                    <div className="font-mono-custom text-xs text-slate-500 uppercase tracking-widest">{item.label}</div>
                    <div className="text-slate-200 text-sm mt-0.5 break-all">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="flex items-center gap-3 mt-4">
              <span className="font-mono-custom text-xs text-slate-500 uppercase tracking-widest">Languages:</span>
              {languages.map((lang, i) => (
                <span key={i} className="font-mono-custom text-xs bg-orange-400/10 text-orange-400 border border-orange-400/20 px-3 py-1 rounded-full">
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Right: experience bar */}
          <div className="lg:col-span-2 space-y-6">
            <div className="gradient-border p-6">
              <h3 className="font-display text-lg font-semibold text-white mb-6">Tech Proficiency</h3>
              {[
                { skill: 'React.js / Next.js', pct: 90 },
                { skill: 'Node.js / Express', pct: 85 },
                { skill: 'MongoDB', pct: 85 },
                { skill: 'TypeScript', pct: 75 },
                { skill: 'REST API Design', pct: 88 },
                { skill: 'PostgreSQL / SQL', pct: 70 },
              ].map((item, i) => (
                <div key={i} className="mb-4">
                  <div className="flex justify-between mb-1.5">
                    <span className="font-mono-custom text-xs text-slate-400">{item.skill}</span>
                    <span className="font-mono-custom text-xs text-orange-400">{item.pct}%</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-500 to-orange-300 rounded-full transition-all duration-1000"
                      style={{ width: visible ? `${item.pct}%` : '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
