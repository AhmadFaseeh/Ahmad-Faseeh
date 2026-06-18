import { motion } from 'framer-motion';
import { SectionLabel } from './Common';
import { PERSONAL_INFO } from '../utils/data';

const Hero = () => {
  return (
    <section id="hero" className="section-container min-h-screen flex flex-col justify-center pt-32">
      <SectionLabel text="Developer" />
      
      <div className="flex flex-col lg:flex-row gap-12 items-end">
        <div className="w-full lg:w-3/5">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-text-secondary mb-6 flex items-center gap-2">
              <span className="text-white">••</span> {PERSONAL_INFO.role} <span className="text-white">••</span>
            </p>
            
            <h1 className="font-display font-bold text-white leading-[0.9] mb-8 select-none">
              <span className="block text-[clamp(80px,12vw,160px)]">AHMAD</span>
              <span className="block text-[clamp(80px,12vw,160px)] -mt-2">FASEEH</span>
            </h1>

            <div className="flex flex-wrap gap-4 mb-8">
              {['AI Engineering', 'AI Automation (AIA)', 'Backend Architecture', 'Mobile Apps'].map((tag) => (
                <span key={tag} className="px-3 py-1 border border-zinc-800 text-[10px] font-mono uppercase tracking-widest text-text-secondary">
                  {tag}
                </span>
              ))}
            </div>

            <div className="max-w-md">
              <p className="text-text-warm text-lg mb-4 font-light italic">
                Engineering intelligent, scalable digital solutions.
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>
            </div>
          </motion.div>
        </div>

        <div className="w-full lg:w-2/5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative z-10 w-full max-w-md mx-auto lg:mx-0 aspect-[4/5] bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl group"
          >
            <img 
              src="/portrait.png" 
              alt="Muhammad Ahmad Faseeh" 
              className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700" 
            />
          </motion.div>

          {/* Background Decorative Dots */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-dots opacity-20" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="w-[1px] h-12 bg-zinc-800 relative">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
