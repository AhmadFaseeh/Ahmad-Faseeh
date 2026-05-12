import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel, BrowserMockup } from './Common';
import { PERSONAL_INFO } from '../utils/data';

const Contact = () => {
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
        <BrowserMockup className="w-full aspect-video bg-zinc-900 border-zinc-800">
           <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <p className="text-text-warm font-display italic text-2xl md:text-4xl leading-snug mb-8">
                "I am eager to connect with you<br/>and hear your thoughts."
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <motion.button
                  whileHover={{ backgroundColor: '#fff', color: '#000' }}
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
           </div>
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
