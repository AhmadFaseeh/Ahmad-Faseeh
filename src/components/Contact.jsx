import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionLabel, BrowserMockup } from './Common';
import { PERSONAL_INFO } from '../utils/data';
import emailjs from '@emailjs/browser';

// ─── EmailJS Config ───────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
// ──────────────────────────────────────────────────────────────────

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);
    setError('');
    try {
      const result = await emailjs.send(
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
      console.log('EmailJS success:', result);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setError(`Error ${err?.status || ''}: ${err?.text || err?.message || 'Send failed — check console'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-container min-h-screen flex flex-col items-center justify-center pt-40">
      <SectionLabel text="Radiate Talent" className="!static mb-20" />
      
      <div className="text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="font-display font-bold text-[clamp(80px,15vw,240px)] leading-none text-white uppercase"
        >
          Radiate<br/>Talent
        </motion.h2>
      </div>

      <div className="w-full max-w-2xl mb-24">
        <BrowserMockup className="w-full aspect-video bg-zinc-900 border-zinc-800 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!showForm ? (
              <motion.div 
                key="welcome"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
              >
                <p className="text-text-warm font-display italic text-2xl md:text-4xl leading-snug mb-8">
                  "I am eager to connect with you<br/>and hear your thoughts."
                </p>
                <div className="flex flex-col md:flex-row gap-4">
                  <motion.button
                    whileHover={{ backgroundColor: '#fff', color: '#000' }}
                    onClick={() => setShowForm(true)}
                    className="px-8 py-3 border border-white text-white font-mono text-[11px] uppercase tracking-widest-plus transition-colors duration-300"
                  >
                    → Contact Me
                  </motion.button>
                  <a 
                    href="/MuhammadAhmadFaseeh.pdf" 
                    download="Muhammad_Ahmad_Faseeh_CV.pdf"
                    className="px-8 py-3 border border-white/20 text-white font-mono text-[11px] uppercase tracking-widest-plus hover:border-white transition-colors duration-300 flex items-center justify-center"
                  >
                    ↓ Download CV
                  </a>
                </div>
              </motion.div>
            ) : isSubmitted ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
              >
                <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center mb-6 text-white text-xl">✓</div>
                <h3 className="font-display text-2xl md:text-3xl text-white mb-3 uppercase tracking-wide">Thank You!</h3>
                <p className="text-zinc-400 text-sm max-w-sm mb-8">
                  Your message has been received. Ahmad will get back to you as soon as possible.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setShowForm(false);
                  }}
                  className="px-6 py-2 border border-white/20 hover:border-white text-white font-mono text-[10px] uppercase tracking-widest transition-colors duration-300"
                >
                  ← Back to Home
                </button>
              </motion.div>
            ) : (
              <motion.div 
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex flex-col p-6 md:p-8 justify-between h-full bg-zinc-950"
              >
                <div className="flex justify-between items-center border-b border-zinc-900 pb-3">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">SEND A MESSAGE</span>
                  <button 
                    onClick={() => setShowForm(false)}
                    className="text-zinc-500 hover:text-white transition-colors font-mono text-[10px] uppercase tracking-widest"
                  >
                    ✕ Close
                  </button>
                </div>
                
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-center gap-3 py-2 max-w-md mx-auto w-full">
                  <div className="flex flex-col gap-1">
                    <input 
                      type="text" 
                      placeholder="YOUR NAME" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-transparent border-b border-zinc-800 focus:border-white py-1.5 text-xs text-white font-mono placeholder-zinc-700 outline-none transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <input 
                      type="email" 
                      placeholder="YOUR EMAIL" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-transparent border-b border-zinc-800 focus:border-white py-1.5 text-xs text-white font-mono placeholder-zinc-700 outline-none transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <textarea 
                      placeholder="YOUR MESSAGE" 
                      required
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-transparent border-b border-zinc-800 focus:border-white py-1.5 text-xs text-white font-mono placeholder-zinc-700 outline-none resize-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-3 px-6 py-2.5 bg-white text-black font-mono text-[10px] uppercase tracking-widest hover:bg-zinc-200 transition-colors duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? 'SENDING...' : '→ SEND MESSAGE'}
                  </button>
                  {error && (
                    <p className="text-red-400 text-[10px] font-mono mt-2 text-center">{error}</p>
                  )}
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </BrowserMockup>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-12 py-12 border-t border-zinc-900">
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600">Email</span>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white text-sm hover:underline">{PERSONAL_INFO.email}</a>
        </div>
        
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600">Location</span>
          <span className="text-white text-sm">{PERSONAL_INFO.location}</span>
        </div>

        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600">Contact</span>
          <a href={`tel:${PERSONAL_INFO.phone}`} className="text-white text-sm hover:underline">{PERSONAL_INFO.phone}</a>
        </div>

        <div className="flex gap-8">
           <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors uppercase font-mono text-[10px] tracking-widest">LinkedIn</a>
           <a href={`https://${PERSONAL_INFO.github}`} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors uppercase font-mono text-[10px] tracking-widest">GitHub</a>
        </div>
      </div>

      <SectionLabel text="Contact" className="!static mt-20 rotate-0" />
    </section>
  );
};

export default Contact;
