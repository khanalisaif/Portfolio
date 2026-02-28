import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { MessageCircle, X, Send } from 'lucide-react';

export default function WhatsAppPopup() {
  const { personal } = portfolioData;
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [message, setMessage] = useState('Hi Saif! I saw your portfolio and would like to connect. 👋');

  // Show notification bubble after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = () => {
    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/${personal.whatsapp}?text=${encodedMsg}`, '_blank');
  };

  return (
    <>
      {/* Popup card */}
      {isOpen && (
        <div className="fixed bottom-28 right-5 z-50 w-80 animate-slide-up">
          <div className="bg-dark-700 border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-green-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20">
                  <img src={personal.profilePhoto} alt="Saif" className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <div className="font-display font-semibold text-white text-sm">{personal.name}</div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse" />
                    <span className="text-green-200 text-xs">Online — typically replies instantly</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat bubble */}
            <div className="p-4 bg-dark-800">
              <div className="bg-dark-600 rounded-2xl rounded-tl-sm p-3 inline-block max-w-full">
                <p className="text-slate-300 text-xs leading-relaxed">
                  Hey there! 👋 I'm Saif, a MERN Full Stack Developer. Feel free to message me about any project or opportunity!
                </p>
                <p className="text-slate-500 text-xs mt-1">just now</p>
              </div>
            </div>

            {/* Input area */}
            <div className="p-4 border-t border-white/5">
              <div className="flex gap-2">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={2}
                  className="flex-1 bg-dark-600 border border-white/10 rounded-xl px-3 py-2 text-slate-300 text-xs resize-none focus:outline-none focus:border-green-500/40 placeholder-slate-600"
                  placeholder="Type a message..."
                />
                <button
                  onClick={handleSend}
                  className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors shadow-lg shadow-green-500/20 self-end"
                >
                  <Send size={16} className="text-white" />
                </button>
              </div>
              <p className="font-mono-custom text-xs text-slate-600 mt-2 text-center">
                Opens WhatsApp to send message
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Floating button */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
        {/* Notification bubble */}
        {showBubble && !isOpen && (
          <div className="bg-dark-700 border border-white/10 rounded-xl px-3 py-2 text-xs text-slate-300 animate-fade-in max-w-44 text-center shadow-xl">
            👋 Let's talk!
            <div className="absolute bottom-0 right-5 w-0 h-0" />
          </div>
        )}

        <button
          onClick={() => { setIsOpen(!isOpen); setShowBubble(false); }}
          className={`relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
            isOpen
              ? 'bg-dark-600 border border-white/20 rotate-0 scale-100'
              : 'bg-green-500 hover:bg-green-600 hover:scale-110 shadow-green-500/30'
          }`}
          style={{ boxShadow: isOpen ? undefined : '0 0 30px rgba(34, 197, 94, 0.35)' }}
        >
          {isOpen ? (
            <X size={22} className="text-white" />
          ) : (
            <>
              <MessageCircle size={24} className="text-white fill-white" />
              {/* Ping ring */}
              <span className="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-20" />
            </>
          )}
        </button>
      </div>
    </>
  );
}
