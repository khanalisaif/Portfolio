import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-display font-bold text-lg">
        </div>
        <p className="font-mono-custom text-xs text-slate-600 text-center">
          © {year} {personal.name}. Built with React + Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <a href={personal.github} target="_blank" rel="noopener noreferrer"
            className="font-mono-custom text-xs text-slate-500 hover:text-orange-400 transition-colors">
            GitHub
          </a>
          <span className="text-slate-700">·</span>
          <a href={`mailto:${personal.email}`}
            className="font-mono-custom text-xs text-slate-500 hover:text-orange-400 transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
