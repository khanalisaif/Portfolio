import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'nav-blur bg-dark-900/80 border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('#hero')}
          className="font-display font-bold text-xl tracking-tight"
        >
          <span className="text-gradient">SAK</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="font-mono-custom text-xs tracking-widest uppercase text-slate-400 hover:text-orange-400 transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <a
            href={portfolioData.personal.resumePDF}
            download="Saif_Ali_Khan_Resume.pdf"
            className="btn-primary font-display font-semibold text-sm bg-orange-400 text-dark-900 px-5 py-2 rounded-lg hover:bg-orange-500 transition-all duration-200 glow-orange"
          >
            Resume ↓
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/60 hover:text-orange-400 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark-800/95 nav-blur border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="font-mono-custom text-xs tracking-widest uppercase text-slate-400 hover:text-orange-400 transition-colors text-left"
            >
              {link.label}
            </button>
          ))}
          <a
            href={portfolioData.personal.resumePDF}
            download="Saif_Ali_Khan_Resume.pdf"
            className="btn-primary font-display font-semibold text-sm bg-orange-400 text-dark-900 px-5 py-2.5 rounded-lg text-center hover:bg-orange-500 transition-all duration-200"
          >
            Download Resume ↓
          </a>
        </div>
      )}
    </nav>
  );
}
