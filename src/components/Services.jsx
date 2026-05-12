import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from './Common';
import { SERVICES, TECH_STACK } from '../utils/data';

const TechIntegration = () => {
  const techs = [
    { name: 'Node.js', icon: 'N' },
    { name: 'React', icon: 'R' },
    { name: 'Flutter', icon: 'F' },
    { name: 'PostgreSQL', icon: 'P' },
    { name: 'OpenAI', icon: 'AI' },
    { name: 'Docker', icon: 'D' },
    { name: 'Stripe', icon: 'S' },
    { name: 'n8n', icon: '8' }
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center my-32">
      {/* Center Circle */}
      <div className="w-24 h-24 rounded-full border border-white flex items-center justify-center bg-bg-primary z-20 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
        <span className="font-mono font-bold text-xl">AF</span>
      </div>

      {/* Orbiting Icons */}
      {techs.map((tech, i) => {
        const angle = (i * 360) / techs.length;
        const radius = 150; // pixels
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        return (
          <React.Fragment key={i}>
            {/* Connecting Line */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className="absolute h-[1px] bg-zinc-900 origin-left z-10"
              style={{ 
                width: `${radius}px`,
                left: '50%',
                top: '50%',
                rotate: `${angle}deg`
              }}
            />
            
            {/* Tech Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
              className="absolute w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[10px] font-mono z-20"
              style={{ 
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              {tech.name}
            </motion.div>
          </React.Fragment>
        );
      })}

      {/* Rotating Ring */}
      <div className="absolute inset-0 border border-zinc-900 rounded-full animate-spin [animation-duration:20s]" />
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="section-container min-h-screen">
      <SectionLabel text="Services" className="lg:float-right lg:static lg:rotate-0" />
      
      <div className="pt-20">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display font-bold text-[clamp(36px,5vw,72px)] text-white leading-tight mb-20 max-w-4xl"
        >
          Craft Unforgettable and Impactful<br/>
          Websites, Web Applications, and Mobile Apps
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-20">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col divide-y divide-zinc-900">
              {SERVICES.map((service, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="py-10 flex gap-8 group cursor-default"
                >
                  <span className="text-zinc-700 font-mono text-sm">0{i+1}.</span>
                  <h3 className="text-white text-2xl font-body font-light group-hover:translate-x-4 transition-transform duration-500">
                    {service}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
            <div className="text-center mb-12">
              <h4 className="text-white font-display text-4xl mb-4">Integration</h4>
              <p className="text-text-secondary text-sm font-mono uppercase tracking-widest">Striving to build complete applications</p>
            </div>
            
            <TechIntegration />
          </div>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-zinc-900/30 py-12 overflow-hidden border-y border-zinc-900 mt-20">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
            <span key={i} className="text-2xl font-mono uppercase tracking-ultra-wide text-zinc-500 mx-12 flex items-center gap-6">
              {tech} <span className="text-white opacity-20 text-xs">••</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
