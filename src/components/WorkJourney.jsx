import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from './Common';
import { WORK_EXPERIENCE, JOURNEY } from '../utils/data';

const WorkJourney = () => {
  return (
    <section id="journey" className="section-container min-h-screen">
      <div className="flex flex-col lg:flex-row gap-20">
        
        {/* LEFT — Work */}
        <div className="w-full lg:w-1/2 relative">
          <SectionLabel text="Work" className="!static mb-20 rotate-0" />
          
          <div className="flex flex-col">
            {WORK_EXPERIENCE.map((work, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="py-12 border-b border-zinc-900 group"
              >
                <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-4">
                  {work.company} — {work.period}
                </p>
                <h4 className="text-white text-lg font-mono uppercase tracking-widest mb-4 group-hover:translate-x-2 transition-transform duration-300">
                  {work.role}
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed max-w-md">
                  {work.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT — Journey Timeline */}
        <div className="w-full lg:w-1/2 relative pt-32 lg:pt-0">
          <SectionLabel text="Journey" className="!static mb-20 rotate-0" />
          
          <div className="relative pl-12">
            {/* Vertical Line */}
            <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-zinc-900" />

            {JOURNEY.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="mb-20 last:mb-0 relative"
              >
                {/* Dot */}
                <div className="absolute -left-[51px] top-2 w-2 h-2 bg-zinc-800 rounded-full border border-bg-primary group-hover:bg-white transition-colors" />
                
                <h5 className="text-white font-display font-bold text-4xl mb-4">
                  {item.year}
                </h5>
                <p className="text-text-secondary font-mono text-xs uppercase tracking-widest">
                  {item.event}
                </p>
                
                <div className="w-full h-[1px] bg-zinc-900 mt-6" />
              </motion.div>
            ))}

            <motion.a 
              href="#contact"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="inline-flex items-center gap-4 mt-12 group cursor-pointer"
            >
              <span className="text-[11px] font-mono uppercase tracking-widest text-text-secondary group-hover:text-white transition-colors">•• Enter Journey ••</span>
              <span className="text-white group-hover:translate-x-2 transition-transform">→</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkJourney;
