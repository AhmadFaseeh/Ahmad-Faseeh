import { motion } from 'framer-motion';
import { SectionLabel, StitchBadge } from './Common';
const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-[#F5EFEB]">
      <div className="section-container relative z-10 w-full">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-[#DECFC0] pb-4">
          <SectionLabel text="SYSTEM PROFILE // 01" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex flex-wrap gap-2 mb-6">
                <StitchBadge variant="cyan">
                  Software Engineer
                </StitchBadge>
                <StitchBadge variant="dashed">
                  Python · FastAPI · Docker
                </StitchBadge>
              </div>
              <h1 className="font-display font-bold text-[#231709] leading-[0.9] tracking-tight mb-6 select-none">
                <span className="block text-[clamp(54px,8vw,110px)] text-[#231709]">
                  MUHAMMAD
                </span>
                <span className="block text-[clamp(54px,8vw,110px)] text-transparent bg-clip-text bg-gradient-to-r from-[#231709] via-[#4A3525] to-[#A75D2B]">
                  AHMAD FASEEH
                </span>
              </h1>
              <div className="max-w-xl mb-8 space-y-4">
                <p className="text-[#382618] text-lg md:text-xl font-medium leading-relaxed">
                  Building resilient <span className="text-[#A75D2B] font-bold">backend architectures</span>, containerized <span className="text-[#231709] font-bold">Docker</span> microservices, and high-performance <span className="text-[#231709] font-bold">React / Next.js</span> web applications.
                </p>
                <p className="text-[#5C4433] text-sm leading-relaxed font-sans border-l-2 border-[#A75D2B] pl-4 font-medium">
                  Hands-on experience developing asynchronous RESTful/GraphQL APIs in FastAPI & Node.js, vector-based AI agentic workflows (RAG), and high-availability database designs.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-10 max-w-lg">
                {[
                  'Python / FastAPI',
                  'Docker & CI/CD',
                  'Node.js & React',
                  'PostgreSQL & Redis',
                  'LangChain / CrewAI',
                  'Clean Architecture'
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white border border-[#DECFC0] rounded-md text-[10px] font-mono text-[#382618] hover:border-[#A75D2B] hover:text-[#A75D2B] transition-all font-semibold shadow-sm"
                  >
                    + {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-lg bg-[#231709] text-white font-mono text-xs uppercase tracking-widest font-bold hover:bg-[#A75D2B] transition-all duration-300 shadow-md flex items-center gap-2 group"
                >
                  <span>Explore Projects</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-lg bg-white border border-[#DECFC0] text-[#231709] font-mono text-xs uppercase tracking-widest hover:border-[#A75D2B] hover:bg-[#EDE5DC] transition-all duration-300 flex items-center gap-2 shadow-sm font-bold"
                >
                  <span>Contact Architect</span>
                </a>
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative w-full max-w-md mx-auto"
            >
              <div className="relative bg-white border border-[#DECFC0] rounded-2xl p-4 shadow-xl backdrop-blur-xl">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#DECFC0] text-[9px] font-mono text-[#7D634E] uppercase tracking-widest font-bold">
                  <span className="flex items-center gap-1.5 text-[#231709]">
                    STATUS: ACTIVE
                  </span>
                </div>
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#EDE5DC] border border-[#DECFC0] group">
                  <img
                    src="/portrait_original.png"
                    alt="Muhammad Ahmad Faseeh"
                    className="w-full h-full object-cover object-top transition-all duration-700 "
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3 mt-16 text-[10px] font-mono text-[#7D634E] uppercase tracking-widest font-bold">
          <span>Scroll to explore</span>
          <div className="w-4 h-7 rounded-full border border-[#B89F88] flex justify-center pt-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-1 rounded-full bg-[#A75D2B]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
