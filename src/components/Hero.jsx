import React, { useEffect, useState, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Github, Mail, Download, ArrowDown } from 'lucide-react';

const TypeWriter = ({ roles }) => {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < current.length) {
          setDisplayText(current.substring(0, charIndex + 1));
          setCharIndex(c => c + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(current.substring(0, charIndex - 1));
          setCharIndex(c => c - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex(i => (i + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, roles]);

  return (
    <span className="text-orange-400">
      {displayText}
      <span className="inline-block w-0.5 h-[1em] bg-orange-400 ml-1 animate-pulse align-middle" />
    </span>
  );
};

// Floating particles
const Particles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 10}s`,
    duration: `${8 + Math.random() * 12}s`,
    size: `${1 + Math.random() * 3}px`,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
};

export default function Hero() {
  const { personal, roles, stats } = portfolioData;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <Particles />
      </div>

      <div className={`relative z-10 max-w-6xl mx-auto px-6 py-24 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <div className="order-2 lg:order-1">
            <p className="section-label mb-4">Available for work</p>

            <h1 className="font-display text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-4 tracking-tight">
              {personal.name.split(' ').map((word, i) => (
                <span key={i} className={i === 2 ? 'text-gradient block' : 'block'}>
                  {word}
                </span>
              ))}
            </h1>

            <div className="font-display text-xl lg:text-2xl text-slate-300 mb-6 h-8">
              <TypeWriter roles={roles} />
            </div>

            <p className="text-slate-400 text-base leading-relaxed mb-10 max-w-lg">
              {personal.summary.substring(0, 200)}...
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href={personal.resumePDF}
                download="Saif_Ali_Khan_Resume.pdf"
                className="btn-primary flex items-center gap-2 font-display font-semibold bg-orange-400 text-dark-900 px-7 py-3.5 rounded-xl hover:bg-orange-500 transition-all duration-200 glow-orange hover:glow-orange-strong"
              >
                <Download size={18} />
                Download Resume
              </a>
              <button
                onClick={() => scrollTo('#contact')}
                className="flex items-center gap-2 font-display font-semibold text-slate-300 border border-white/10 px-7 py-3.5 rounded-xl hover:border-orange-400/40 hover:text-orange-400 hover:bg-orange-400/5 transition-all duration-200"
              >
                <Mail size={18} />
                Hire Me
              </button>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-500 hover:text-orange-400 transition-colors duration-200"
              >
                <Github size={20} />
                <span className="font-mono-custom text-xs tracking-wider">GitHub</span>
              </a>
              <span className="text-slate-700">|</span>
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2 text-slate-500 hover:text-orange-400 transition-colors duration-200"
              >
                <Mail size={20} />
                <span className="font-mono-custom text-xs tracking-wider">{personal.email}</span>
              </a>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Rotating ring */}
              <div className="absolute inset-0 rounded-full border border-orange-400/20 animate-spin-slow" style={{ margin: '-20px' }} />
              <div className="absolute inset-0 rounded-full border border-orange-400/10 animate-spin-slow" style={{ margin: '-40px', animationDirection: 'reverse', animationDuration: '12s' }} />

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-orange-500/15 blur-3xl scale-110" />

              {/* Photo */}
              <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-orange-400/30 glow-orange">
                <img
                  src={personal.profilePhoto}
                  alt={personal.name}
                  className="w-full h-full object-cover object-top"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/40 via-transparent to-transparent" />
              </div>

              {/* Badge */}
             
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="gradient-border p-5 text-center card-hover">
              <div className="font-display text-3xl font-bold text-gradient mb-1">{stat.value}</div>
              <div className="font-mono-custom text-xs text-slate-500 tracking-wider uppercase">{stat.label}</div>
              <div className="font-mono-custom text-xs text-orange-400/60">{stat.unit}</div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="mt-16 flex justify-center">
          <button onClick={() => scrollTo('#about')} className="text-slate-600 hover:text-orange-400 transition-colors animate-bounce">
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
