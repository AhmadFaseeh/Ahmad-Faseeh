import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionLabel, StitchBadge } from './Common';
import { WORK_EXPERIENCE, EDUCATION } from '../utils/data';

const WorkJourney = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section id="journey" className="section-container relative bg-sand-medium/30">
      <SectionLabel text="CAREER & EDUCATION // 04" className="mb-8" />

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
        <div>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-espresso-dark leading-tight">
            WORK EXPERIENCE & <br/>
            <span className="text-bronze">EDUCATION</span>
          </h2>
          <p className="text-espresso-body text-sm md:text-base font-sans mt-3 max-w-xl font-medium">
            A chronological trajectory of software engineering roles, full-stack deliveries, and academic foundations.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <StitchBadge variant="cyan">PROVEN IMPACT</StitchBadge>
          <StitchBadge variant="default">LAHORE & REMOTE</StitchBadge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Work Experience (Col 7) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-sand-border">
            <h3 className="font-mono text-xs uppercase tracking-widest text-espresso-dark font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-bronze" />
              Professional Experience
            </h3>
            <span className="font-mono text-[10px] text-espresso-muted font-semibold">2025 – PRESENT</span>
          </div>

          <div className="space-y-6">
            {WORK_EXPERIENCE.map((work, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-6 md:p-8 rounded-2xl bg-sand-card border transition-all duration-300 ${
                    isExpanded 
                      ? 'border-bronze shadow-lg ring-1 ring-bronze/30' 
                      : 'border-sand-border hover:border-sand-border-dark shadow-sm'
                  }`}
                >
                  <div 
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 cursor-pointer select-none"
                    onClick={() => setExpandedIndex(isExpanded ? -1 : index)}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-espresso-dark font-mono text-base font-bold">
                          {work.role}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[9px] font-mono uppercase tracking-widest bg-sand-badge text-espresso-dark font-bold border border-sand-border-dark">
                          {work.type}
                        </span>
                      </div>
                      <p className="text-espresso-body font-mono text-xs">
                        {work.company} · <span className="text-espresso-muted">{work.location}</span>
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-espresso-body bg-sand-medium px-3 py-1 rounded-md border border-sand-border font-medium">
                        {work.period}
                      </span>
                      <button className="text-bronze font-mono text-xs p-1 font-bold">
                        {isExpanded ? '▲' : '▼'}
                      </button>
                    </div>
                  </div>

                  {/* Highlights Bullet Points */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 pt-6 border-t border-sand-border"
                      >
                        <ul className="space-y-3 mb-6">
                          {work.highlights.map((point, pIdx) => (
                            <li key={pIdx} className="text-espresso-body text-xs md:text-sm leading-relaxed flex items-start gap-2.5 font-sans">
                              <span className="text-bronze mt-1 text-xs font-bold">▹</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-sand-border">
                          {work.tech.map((t) => (
                            <span 
                              key={t} 
                              className="px-2 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider bg-sand-medium text-espresso-body border border-sand-border font-medium"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Academic Education (Col 5) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-sand-border">
            <h3 className="font-mono text-xs uppercase tracking-widest text-espresso-dark font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-caramel" />
              Academic Background
            </h3>
            <span className="font-mono text-[10px] text-espresso-muted font-semibold">DEGREE & HIGHER SECONDARY</span>
          </div>

          <div className="space-y-6">
            {EDUCATION.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="p-6 md:p-8 rounded-2xl bg-sand-card border border-sand-border hover:border-bronze shadow-sm transition-all duration-300 relative group"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-espresso-dark font-bold bg-sand-badge px-2.5 py-1 rounded border border-sand-border-dark">
                    {edu.status}
                  </span>
                  <span className="text-xs font-mono text-espresso-muted font-medium">
                    {edu.period}
                  </span>
                </div>

                <h4 className="text-espresso-dark font-mono text-base font-bold mb-1 group-hover:text-bronze transition-colors">
                  {edu.degree}
                </h4>

                <p className="text-espresso-body font-mono text-xs mb-4">
                  {edu.institution} · <span className="text-espresso-muted">{edu.location}</span>
                </p>

                <p className="text-espresso-body text-xs leading-relaxed font-sans border-l-2 border-sand-border pl-3">
                  {edu.description}
                </p>
              </motion.div>
            ))}

            {/* Tactical Code Commitment Card */}
            <div className="p-6 rounded-2xl bg-sand-card border border-dashed border-sand-border-dark text-xs font-mono shadow-sm">
              <div className="flex items-center gap-2 text-bronze mb-2">
                <span>⚡</span>
                <span className="font-bold">CONTINUOUS LEARNING</span>
              </div>
              <p className="text-espresso-body leading-relaxed font-sans text-xs">
                Actively expanding expertise in Autonomous AI agents (LangChain, CrewAI), Distributed Systems, and Microservices containerization.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkJourney;
