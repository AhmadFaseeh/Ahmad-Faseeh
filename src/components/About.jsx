import { useEffect, useRef } from 'react';
import { SectionLabel, StitchBadge } from './Common';
import { PERSONAL_INFO } from '../utils/data';
import { animateCounter } from '../utils/gsapAnimations';

const About = () => {
  const statRefs = useRef([]);

  useEffect(() => {
    statRefs.current.forEach((el, index) => {
      if (el) {
        const numeric = PERSONAL_INFO.stats[index]?.numeric || 0;
        animateCounter(el, numeric, 1.8);
      }
    });
  }, []);

  return (
    <section id="about" className="section-container relative bg-[#EDE5DC]/40">
      <SectionLabel text="ENGINEERING PHILOSOPHY // 02" className="mb-8" />
      <div className="absolute top-10 right-0 pointer-events-none select-none overflow-hidden text-right opacity-[0.03] z-0">
        <span className="font-display font-bold text-[22vw] leading-none text-[#231709]">
          ARCHITECT
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 pt-4">
        
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="text-[100px] md:text-[130px] font-display font-bold text-[#B89F88]/30 leading-none mb-6">
              01
            </div>

            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#231709] leading-tight mb-6">
              ENGINEERED FOR <br/>
              <span className="text-[#A75D2B]">SCALE & SPEED.</span>
            </h2>

            <p className="text-[#4A3525] text-sm md:text-base leading-relaxed mb-10 font-medium">
              Clean architecture isn't just a pattern it's a commitment to long-term maintainability, sub-second API latencies, and predictable deployments.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#DECFC0]">
            {PERSONAL_INFO.stats.map((stat, i) => (
              <div 
                key={i} 
                className="p-5 rounded-xl bg-white border border-[#DECFC0] backdrop-blur-md relative group hover:border-[#A75D2B] hover:shadow-md transition-all shadow-sm"
              >
                <div className="flex items-baseline gap-1 text-3xl md:text-4xl font-display font-bold text-[#231709] mb-1">
                  <span ref={el => statRefs.current[i] = el}>{stat.numeric}</span>
                  <span className="text-[#A75D2B]">{stat.value.replace(/[0-9.]/g, '')}</span>
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#7D634E] font-bold">
                  {stat.label}
                </div>
                <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-[#DECFC0] group-hover:bg-[#A75D2B] transition-colors" />
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7 space-y-8">
          <div className="p-8 rounded-2xl bg-white border border-[#DECFC0] shadow-sm backdrop-blur-xl relative">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#DECFC0]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#A75D2B]" />
                <span className="font-mono text-xs text-[#231709] uppercase tracking-widest font-bold">
                  Summary & Technical Rationale
                </span>
              </div>
              <StitchBadge variant="cyan">Software Engineer</StitchBadge>
            </div>

            <p className="text-[#4A3525] text-base md:text-lg leading-relaxed mb-6 font-normal">
              {PERSONAL_INFO.bio}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#DECFC0] text-xs font-mono">
              <div className="flex items-start gap-2 text-[#4A3525]">
                <span className="text-[#A75D2B] font-bold">▹</span>
                <span><strong>FastAPI & Python:</strong> High concurrency, async I/O workflows, Pydantic schemas.</span>
              </div>
              <div className="flex items-start gap-2 text-[#4A3525]">
                <span className="text-[#A75D2B] font-bold">▹</span>
                <span><strong>Docker Containerization:</strong> Standardized multi-stage builds & Cloudflare edge.</span>
              </div>
              <div className="flex items-start gap-2 text-[#4A3525]">
                <span className="text-[#A75D2B] font-bold">▹</span>
                <span><strong>React & Next.js:</strong> Component reusability, SSR caching, fluid GSAP animations.</span>
              </div>
              <div className="flex items-start gap-2 text-[#4A3525]">
                <span className="text-[#A75D2B] font-bold">▹</span>
                <span><strong>AI & Vector Systems:</strong> Agentic orchestration with LangChain, CrewAI & RAG.</span>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-[#231709] border border-[#4A3525] overflow-hidden font-mono text-xs shadow-xl">
            <div className="px-4 py-2.5 bg-[#231709]/95 border-b border-[#4A3525]/60 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="ml-2 text-[10px] text-[#EADBCC]/70">ahmad@dev-box: ~/specs.json</span>
              </div>
              <span className="text-[10px] text-[#C67D43] font-bold">JSON_CONFIG</span>
            </div>

            <div className="p-6 text-[#EADBCC] space-y-1.5 leading-relaxed overflow-x-auto">
              <p><span className="text-purple-300">const</span> <span className="text-[#C67D43]">engineerProfile</span> = &#123;</p>
              <p className="pl-4"><span className="text-[#EADBCC]">"name"</span>: <span className="text-emerald-300">"Muhammad Ahmad Faseeh"</span>,</p>
              <p className="pl-4"><span className="text-[#EADBCC]">"role"</span>: <span className="text-emerald-300">"Software Engineer (Python/FastAPI, Docker, Full-Stack)"</span>,</p>
              <p className="pl-4"><span className="text-[#EADBCC]">"location"</span>: <span className="text-emerald-300">"{PERSONAL_INFO.location}"</span>,</p>
              <p className="pl-4"><span className="text-[#EADBCC]">"patterns"</span>: [<span className="text-emerald-300">"Layered Architecture"</span>, <span className="text-emerald-300">"DTOs"</span>, <span className="text-emerald-300">"Repository Pattern"</span>],</p>
              <p className="pl-4"><span className="text-[#EADBCC]">"status"</span>: <span className="text-emerald-300">"READY_FOR_DEPLOYMENT"</span></p>
              <p>&#125;;</p>
            </div>
          </div>

          <div className="flex items-center gap-6 pt-2">
            <a href="#journey" className="inline-flex items-center gap-3 text-[#A75D2B] font-mono text-xs uppercase tracking-widest font-bold group">
              <span>View Experience Timeline</span>
              <span className="group-hover:translate-x-1.5 transition-transform">→</span>
            </a>
            <span className="text-[#B89F88] font-mono text-xs">/</span>
            <a href="#skills" className="inline-flex items-center gap-3 text-[#7D634E] hover:text-[#231709] font-mono text-xs uppercase tracking-widest transition-colors font-bold">
              <span>Explore Technical Skills</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
