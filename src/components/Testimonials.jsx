import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from './Common';

const RecognitionCard = ({ title, issuer, date, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-white p-8 md:p-12 aspect-[4/3] flex flex-col justify-between group cursor-pointer hover:shadow-[0_0_50px_rgba(255,255,255,0.1)] transition-all"
  >
    <div className="flex justify-between items-start">
      <div className="text-zinc-900 font-mono text-[10px] uppercase tracking-widest">{date}</div>
      <div className="text-zinc-300 font-mono text-4xl">••</div>
    </div>
    
    <div>
      <h3 className="text-black font-display font-bold text-3xl mb-4 leading-tight group-hover:text-zinc-700 transition-colors">
        {title}
      </h3>
      <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.2em]">
        {issuer}
      </p>
    </div>
    
    <div className="pt-8 border-t border-zinc-100 flex justify-between items-center">
      <span className="text-zinc-900 font-bold text-sm italic">Verified recognition</span>
      <span className="text-black group-hover:translate-x-2 transition-transform">→</span>
    </div>
  </motion.div>
);

const Testimonials = () => {
  const awards = [
    { title: "Outstanding Full-Stack Performance", issuer: "IT KUMAIL", date: "2025" },
    { title: "Mobile Innovation Award", issuer: "App Developers Hub", date: "2024" },
    { title: "Excellence in UI/UX Design", issuer: "Creative Collective", date: "2024" }
  ];

  return (
    <section id="testimonials" className="section-container bg-zinc-900/10">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
        <div>
          <SectionLabel text="Recognition Awards" className="!static mb-8" />
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white">
            Testimonials and Recognitions
          </h2>
        </div>
        <div className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest pb-2">
           Honors & Awards
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {awards.map((award, i) => (
          <RecognitionCard key={i} {...award} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
