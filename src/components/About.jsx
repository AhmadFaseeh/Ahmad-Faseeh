import { motion } from 'framer-motion';
import { SectionLabel } from './Common';
import { PERSONAL_INFO } from '../utils/data';

const About = () => {
  return (
    <section id="about" className="section-container min-h-screen">
      <SectionLabel text="About" />

      {/* Massive Background Watermark */}
      <div className="absolute top-20 right-0 pointer-events-none select-none overflow-hidden w-full text-right opacity-[0.05]">
        <h2 className="font-display font-bold text-[30vw] leading-none translate-x-20">
          ABOUT
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-20 relative z-10 pt-20">
        {/* LEFT block (40%) */}
        <div className="w-full lg:w-2/5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-[120px] font-display font-bold text-zinc-900 leading-none mb-10">
              01
            </div>

            <div className="grid grid-cols-2 gap-8 pt-10 border-t border-zinc-900">
              {PERSONAL_INFO.stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-display font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT block (60%) */}
        <div className="w-full lg:w-3/5">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display font-bold text-[clamp(60px,10vw,120px)] text-white leading-none mb-12">
              Vision
            </h3>

            <div className="w-full pt-4">
              <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mb-8">
                {PERSONAL_INFO.bio}
              </p>
              <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mb-10">
                Based in {PERSONAL_INFO.location}, I focus on the intersection of design and technology, ensuring that every line of code translates into a meaningful user experience.
              </p>

              <a href="#journey" className="inline-flex items-center gap-4 group">
                <span className="text-[11px] font-mono uppercase tracking-widest text-white">Here</span>
                <div className="w-12 h-[1px] bg-white group-hover:w-20 transition-all duration-500" />
                <span className="text-white">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
