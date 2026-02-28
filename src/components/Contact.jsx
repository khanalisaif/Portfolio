import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin, Github, MessageCircle, Download } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const { personal } = portfolioData;
  const [ref, visible] = useScrollReveal();

  const whatsappUrl = `https://wa.me/${personal.whatsapp}?text=Hi%20Saif!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.`;

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/3 to-dark-900 pointer-events-none" />

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="section-label mb-3">06 — Get in touch</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto">
            Open to full-time roles, freelance projects, and collaboration. Don't hesitate to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div className="space-y-5">
            {[
              { icon: <Mail size={20} />, label: 'Email', value: personal.email, href: `mailto:${personal.email}`, color: '#FF6B35' },
              { icon: <Phone size={20} />, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}`, color: '#10B981' },
              { icon: <MapPin size={20} />, label: 'Location', value: personal.location, href: null, color: '#6366F1' },
              { icon: <Github size={20} />, label: 'GitHub', value: personal.github.replace('https://', ''), href: personal.github, color: '#A855F7' },
            ].map((item, i) => (
              <div key={i} className="gradient-border p-5 card-hover">
                <div className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                  >
                    <span style={{ color: item.color }}>{item.icon}</span>
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono-custom text-xs text-slate-500 uppercase tracking-widest">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                        className="text-slate-200 text-sm hover:text-orange-400 transition-colors truncate block mt-0.5">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-slate-200 text-sm">{item.value}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA card */}
          <div className="gradient-border p-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-orange-400/10 border border-orange-400/20 flex items-center justify-center mx-auto mb-6">
              <MessageCircle size={28} className="text-orange-400" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-3">Ready to work together?</h3>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">
              I'm always excited to discuss new projects and opportunities. Send me a message on WhatsApp for the fastest response!
            </p>
            <div className="space-y-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 font-display font-semibold bg-green-500 text-white px-7 py-3.5 rounded-xl hover:bg-green-600 transition-all duration-200 w-full shadow-[0_0_30px_rgba(34,197,94,0.2)]"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
              <a
                href={personal.resumePDF}
                download="Saif_Ali_Khan_Resume.pdf"
                className="flex items-center justify-center gap-2.5 font-display font-semibold text-orange-400 border border-orange-400/30 px-7 py-3.5 rounded-xl hover:bg-orange-400/10 transition-all duration-200 w-full"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
