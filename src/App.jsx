import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppPopup from './components/WhatsAppPopup';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-slate-200 antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <WhatsAppPopup />
    </div>
  );
}
