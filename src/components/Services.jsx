import { motion } from 'framer-motion';
import { SectionLabel, StitchBadge } from './Common';
import { SERVICES, TECH_STACK, PERSONAL_INFO } from '../utils/data';

const Services = () => {
  return (
    <section id="services" className="section-container relative bg-sand-medium/30">
      <SectionLabel text="ARCHITECTURAL CAPABILITIES // 06" className="mb-8" />

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
        <div>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-[#231709] leading-tight">
            WHAT I BRING TO <br/>
            <span className="text-[#A75D2B]">YOUR ENGINEERING TEAM</span>
          </h2>
          <p className="text-[#4A3525] text-sm md:text-base font-sans mt-3 max-w-xl font-medium">
            From low-latency FastAPI backend microservices to autonomous AI agents and responsive React frontends.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <StitchBadge variant="cyan">END-TO-END OWNERSHIP</StitchBadge>
          <StitchBadge variant="dashed">PRODUCTION GRADE</StitchBadge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        
        {/* Left Side: Services List (Col 7) */}
        <div className="lg:col-span-7 space-y-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 md:p-8 rounded-2xl bg-white border border-[#DECFC0] hover:border-[#A75D2B] shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#231709] font-bold bg-[#EADBCC] px-2.5 py-1 rounded border border-[#B89F88]">
                    {service.num}
                  </span>
                  <h3 className="text-[#231709] text-lg md:text-xl font-mono font-bold group-hover:text-[#A75D2B] transition-colors">
                    {service.title}
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-[#7D634E] uppercase tracking-widest hidden sm:inline font-semibold">
                  {service.tagline}
                </span>
              </div>

              <p className="text-[#4A3525] text-xs md:text-sm leading-relaxed mb-4 font-sans pl-2 border-l-2 border-[#DECFC0]">
                {service.description}
              </p>

              {/* Deliverable Tags */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3 border-t border-[#DECFC0]/60">
                {service.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 text-[10px] font-mono text-[#4A3525] font-semibold">
                    <span className="text-[#A75D2B] font-bold">▹</span>
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Side: Architectural Blueprint & System Overview (Col 5) */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full relative p-6 md:p-8 rounded-3xl bg-white border border-[#DECFC0] shadow-xl flex flex-col justify-between">
            
            {/* Stitched Header */}
            <div className="w-full flex justify-between items-center pb-4 mb-6 border-b border-[#DECFC0] text-[9px] font-mono text-[#7D634E] uppercase tracking-widest font-bold">
              <span className="flex items-center gap-1.5 text-[#231709]">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                SYSTEM BLUEPRINT // ARCH_V2
              </span>
              <span>DEV_SPECS</span>
            </div>

            {/* Architectural Highlights */}
            <div className="space-y-4 mb-6 font-mono text-xs">
              <div className="p-4 rounded-xl bg-[#F5EFEB] border border-[#DECFC0]">
                <div className="flex justify-between items-center text-[10px] uppercase text-[#7D634E] mb-1 font-semibold">
                  <span>Backend Architecture</span>
                  <span className="text-[#A75D2B] font-bold">P99 &lt; 45ms</span>
                </div>
                <p className="text-[#231709] font-bold">FastAPI · Node.js · Microservices</p>
                <p className="text-[#5C4433] text-[10px] mt-1 font-sans">Layered Services, DTOs, Repository Pattern & PostgreSQL indexing.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#F5EFEB] border border-[#DECFC0]">
                <div className="flex justify-between items-center text-[10px] uppercase text-[#7D634E] mb-1 font-semibold">
                  <span>Agentic AI & Vector RAG</span>
                  <span className="text-emerald-800 font-bold">Autonomous</span>
                </div>
                <p className="text-[#231709] font-bold">LangChain · CrewAI · Vector DBs</p>
                <p className="text-[#5C4433] text-[10px] mt-1 font-sans">Multi-agent routing engines, semantic search, and Flowise pipelines.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#F5EFEB] border border-[#DECFC0]">
                <div className="flex justify-between items-center text-[10px] uppercase text-[#7D634E] mb-1 font-semibold">
                  <span>DevOps & Deployment</span>
                  <span className="text-[#A75D2B] font-bold">99.9% Uptime</span>
                </div>
                <p className="text-[#231709] font-bold">Docker · Redis · Cloudflare · Vercel</p>
                <p className="text-[#5C4433] text-[10px] mt-1 font-sans">Standardized multi-stage container builds and edge caching.</p>
              </div>
            </div>

            {/* Core Tech Badges */}
            <div className="w-full pt-4 border-t border-[#DECFC0] flex flex-wrap justify-center gap-2 text-[9px] font-mono">
              <span className="px-2.5 py-1 rounded bg-[#EADBCC] text-[#231709] font-bold border border-[#B89F88]">Python / FastAPI</span>
              <span className="px-2.5 py-1 rounded bg-[#EDE5DC] text-[#231709] font-semibold border border-[#DECFC0]">Docker DevOps</span>
              <span className="px-2.5 py-1 rounded bg-white text-[#4A3525] font-semibold border border-[#DECFC0]">Agentic AI (RAG)</span>
              <span className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-900 font-semibold border border-emerald-300">React / Next.js</span>
            </div>

            <p className="text-[10px] font-mono text-[#7D634E] text-center mt-4 font-semibold">
              Ready for high-throughput production deployment.
            </p>
          </div>
        </div>

      </div>

      {/* Infinite Animated Tech Marquee */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white py-8 overflow-hidden border-y border-[#DECFC0] shadow-sm">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((tech, i) => (
            <span key={i} className="text-xl md:text-2xl font-mono uppercase tracking-ultra-wide text-[#7D634E] mx-8 flex items-center gap-4 hover:text-[#231709] transition-colors cursor-default font-bold">
              <span>{tech}</span>
              <span className="text-[#A75D2B] text-xs opacity-80">◈</span>
            </span>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Services;
