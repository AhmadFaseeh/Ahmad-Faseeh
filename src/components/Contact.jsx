import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { SectionLabel, BrowserMockup, StitchBadge } from './Common';
import { PERSONAL_INFO } from '../utils/data';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_portfolio';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_portfolio';
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'user_portfolio';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#231709', '#a75d2b', '#c67d43', '#eadbcc']
      });
    } catch (e) {
      console.log('Confetti triggered', e);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);
    setError('');

    try {
      if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY && EMAILJS_SERVICE_ID !== 'service_portfolio') {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name:  formData.name,
            from_email: formData.email,
            message:    formData.message,
            reply_to:   formData.email,
          },
          EMAILJS_PUBLIC_KEY
        );
      } else {
        await new Promise(resolve => setTimeout(resolve, 800));
      }
      
      setIsSubmitted(true);
      triggerConfetti();
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setError(`Error ${err?.status || ''}: ${err?.text || err?.message || 'Send failed please try direct email'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-container relative pt-32 pb-20 bg-sand-medium/30">
      <SectionLabel text="GET IN TOUCH // 08" className="mb-8" />
      <div className="text-center mb-16 relative">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="font-display font-bold text-[clamp(60px,12vw,180px)] leading-none text-espresso-dark uppercase select-none"
        >
          LET'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-espresso-dark via-espresso-body to-bronze">BUILD</span>
        </motion.h2>
        <p className="text-espresso-body text-sm md:text-base font-sans mt-4 max-w-xl mx-auto font-medium">
          Have an engineering opening, a high-throughput backend to scale, or an AI agent to build? Let's connect.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        
        <div className="lg:col-span-5 space-y-6">
          
          <div className="p-8 rounded-2xl bg-sand-card border border-sand-border shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-sand-border">
              <span className="font-mono text-xs uppercase tracking-widest text-espresso-dark font-bold">
                Direct Channels
              </span>
              <StitchBadge variant="green">Online</StitchBadge>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-espresso-muted block font-semibold">
                Primary Email
              </span>
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="text-espresso-dark font-mono text-sm md:text-base font-semibold hover:text-bronze transition-colors break-all flex items-center gap-2"
              >
                <span>{PERSONAL_INFO.email}</span>
                <span className="text-bronze text-xs font-bold">↗</span>
              </a>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-espresso-muted block font-semibold">
                Phone / WhatsApp
              </span>
              <a 
                href={`tel:${PERSONAL_INFO.phone}`} 
                className="text-espresso-dark font-mono text-sm md:text-base font-semibold hover:text-bronze transition-colors flex items-center gap-2"
              >
                <span>+92 320 6493816</span>
                <span className="text-bronze text-xs font-bold">↗</span>
              </a>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-espresso-muted block font-semibold">
                Location & Coordinates
              </span>
              <p className="text-espresso-body font-mono text-sm font-medium">
                {PERSONAL_INFO.location} <span className="text-espresso-muted">({PERSONAL_INFO.coordinates})</span>
              </p>
            </div>
            <div className="pt-4 border-t border-sand-border/60">
              <a 
                href="/Muhammad_Ahmad_Fasih.pdf" 
                download="Muhammad_Ahmad_Fasih.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-lg bg-sand-medium border border-sand-border hover:border-bronze text-espresso-dark font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-sand-badge/60 transition-all font-bold group shadow-sm cursor-pointer"
              >
                <span>Download Curriculum Vitae (PDF)</span>
                <span className="text-bronze group-hover:translate-y-0.5 transition-transform font-bold">↓</span>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <a 
              href={PERSONAL_INFO.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="p-4 rounded-xl bg-sand-card border border-sand-border hover:border-bronze text-espresso-dark font-mono text-xs uppercase tracking-widest flex items-center justify-between group transition-all font-bold shadow-sm"
            >
              <span>LinkedIn</span>
              <span className="text-bronze group-hover:translate-x-1 transition-transform font-bold">↗</span>
            </a>
            <a 
              href={PERSONAL_INFO.github} 
              target="_blank" 
              rel="noreferrer"
              className="p-4 rounded-xl bg-sand-card border border-sand-border hover:border-bronze text-espresso-dark font-mono text-xs uppercase tracking-widest flex items-center justify-between group transition-all font-bold shadow-sm"
            >
              <span>GitHub</span>
              <span className="text-bronze group-hover:translate-x-1 transition-transform font-bold">↗</span>
            </a>
          </div>
        </div>
        <div className="lg:col-span-7">
          <BrowserMockup title="TERMINAL_MESSAGE_TRANSMISSION" className="w-full bg-sand-card border-sand-border">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-10 text-center flex flex-col items-center justify-center min-h-[380px]"
                >
                  <div className="w-16 h-16 rounded-full bg-sand-badge border border-bronze flex items-center justify-center mb-6 text-espresso-dark text-2xl font-bold shadow-md">
                    ✓
                  </div>
                  <h3 className="font-display font-bold text-3xl text-espresso-dark mb-2 uppercase">
                    Transmission Received!
                  </h3>
                  <p className="text-espresso-body font-sans text-sm max-w-sm mb-8 leading-relaxed font-medium">
                    Thank you! Your message has been sent to Muhammad Ahmad Faseeh. I will respond to your inquiry shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-lg border border-sand-border-dark hover:border-bronze text-espresso-dark font-mono text-xs uppercase tracking-widest transition-all font-bold"
                  >
                    ← Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.div 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-6 md:p-8"
                >
                  <div className="mb-6 pb-3 border-b border-sand-border flex items-center justify-between text-[10px] font-mono text-espresso-muted uppercase tracking-widest font-semibold">
                    <span>SYS_INPUT // ENTER DISPATCH PAYLOAD</span>
                    <span className="text-bronze font-bold">SECURE_TRANSMIT</span>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-espresso-muted mb-1.5 font-bold">
                        Your Full Name *
                      </label>
                      <input 
                        type="text" 
                        placeholder="e.g. Alex Morgan" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-sand-medium/50 border border-sand-border focus:border-bronze rounded-lg px-4 py-2.5 text-xs text-espresso-dark font-mono placeholder-espresso-muted/60 outline-none transition-all font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-espresso-muted mb-1.5 font-bold">
                        Your Email Address *
                      </label>
                      <input 
                        type="email" 
                        placeholder="e.g. alex@company.com" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-sand-medium/50 border border-sand-border focus:border-bronze rounded-lg px-4 py-2.5 text-xs text-espresso-dark font-mono placeholder-espresso-muted/60 outline-none transition-all font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-espresso-muted mb-1.5 font-bold">
                        Your Message / Project Specs *
                      </label>
                      <textarea 
                        placeholder="Describe your project, role opportunity, or architectural requirements..." 
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-sand-medium/50 border border-sand-border focus:border-bronze rounded-lg px-4 py-2.5 text-xs text-espresso-dark font-mono placeholder-espresso-muted/60 outline-none resize-none transition-all font-medium"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-4 py-3 rounded-lg bg-espresso-dark text-sand-badge font-mono text-xs uppercase tracking-widest font-bold hover:bg-bronze hover:text-white transition-all duration-300 shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>TRANSMITTING DATA...</span>
                      ) : (
                        <>
                          <span>Transmit Message</span>
                          <span>→</span>
                        </>
                      )}
                    </button>

                    {error && (
                      <p className="text-rose-600 text-[10px] font-mono mt-2 text-center">{error}</p>
                    )}
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </BrowserMockup>
        </div>

      </div>
    </section>
  );
};

export default Contact;
