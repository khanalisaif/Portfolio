import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, BookOpen } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Education() {
  const { education, courses } = portfolioData;
  const [ref, visible] = useScrollReveal();

  return (
    <section id="education" className="py-28 relative">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-3">05 — Background</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Education & <span className="text-gradient">Courses</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-lg bg-orange-400/10 border border-orange-400/20 flex items-center justify-center">
                <GraduationCap size={16} className="text-orange-400" />
              </div>
              <h3 className="font-display text-xl font-semibold text-white">Academic Education</h3>
            </div>

            <div className="space-y-4">
              {education.map((edu, i) => (
                <div key={i} className="gradient-border p-5 card-hover">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="font-display font-semibold text-white">{edu.degree}</h4>
                      <p className="text-slate-400 text-sm mt-0.5">{edu.institution}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="font-mono-custom text-xs text-orange-400 bg-orange-400/10 border border-orange-400/20 px-2.5 py-1 rounded-lg">
                        {edu.year}
                      </span>
                      {edu.percentage && (
                        <div className="font-mono-custom text-xs text-slate-500 mt-1.5">{edu.percentage}</div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-lg bg-blue-400/10 border border-blue-400/20 flex items-center justify-center">
                <BookOpen size={16} className="text-blue-400" />
              </div>
              <h3 className="font-display text-xl font-semibold text-white">Certifications & Courses</h3>
            </div>

            <div className="space-y-4">
              {courses.map((course, i) => (
                <div key={i} className="gradient-border p-5 card-hover">
                  <h4 className="font-display font-semibold text-white">{course.title}</h4>
                  <p className="font-mono-custom text-xs text-orange-400/70 tracking-wider mt-1 mb-3">{course.institution}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{course.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
