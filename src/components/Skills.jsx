import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionLabel, StitchBadge } from './Common';
import { TECHNICAL_SKILLS } from '../utils/data';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'cloudDevOps', label: 'Cloud & Docker' },
    { id: 'frontend', label: 'Frontend & 3D' },
    { id: 'databases', label: 'Databases & Vector' },
    { id: 'languages', label: 'Languages' },
    { id: 'practices', label: 'Engineering Practices' },
  ];

  const getFilteredSkills = () => {
    if (activeTab === 'all') {
      return Object.entries(TECHNICAL_SKILLS).flatMap(([cat, skills]) => 
        skills.map(s => ({ ...s, category: cat }))
      );
    }
    return (TECHNICAL_SKILLS[activeTab] || []).map(s => ({ ...s, category: activeTab }));
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section id="skills" className="section-container relative bg-[#F5EFEB]">
      <SectionLabel text="SKILLS MATRIX // 03" className="mb-8" />

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
        <div>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-[#231709] leading-tight">
            TECHNICAL <span className="text-[#A75D2B]">ARSENAL</span>
          </h2>
          <p className="text-[#4A3525] text-sm md:text-base font-sans mt-3 max-w-2xl font-medium">
            A comprehensive overview of tools, frameworks, and architectural methodologies applied across production-grade applications.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <StitchBadge variant="cyan">PRODUCTION VERIFIED</StitchBadge>
          <StitchBadge variant="dashed">25+ TECHNOLOGIES</StitchBadge>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-[#DECFC0]">
        {categories.map((cat) => {
          const isActive = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-[#231709] text-white font-bold shadow-md ring-2 ring-[#A75D2B]/40'
                  : 'bg-white text-[#4A3525] border border-[#DECFC0] hover:border-[#A75D2B] hover:text-[#231709] font-semibold shadow-sm'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Skills Grid with Animated Cards and Dynamic Progress Bars */}
      <motion.div 
        layout 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill, index) => (
            <motion.div
              layout
              key={`${activeTab}-${skill.name}`}
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: -10 }}
              transition={{ duration: 0.35, delay: index * 0.02 }}
              className="p-5 rounded-xl bg-white border border-[#DECFC0] hover:border-[#A75D2B] hover:shadow-md transition-all duration-300 group shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-[#231709] font-mono text-sm font-bold group-hover:text-[#A75D2B] transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[10px] font-mono text-[#7D634E] uppercase tracking-widest font-bold">
                      {skill.tag}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#231709] bg-[#EADBCC] px-2.5 py-0.5 rounded border border-[#B89F88]">
                    {skill.level}%
                  </span>
                </div>
              </div>

              {/* Robust Animated Level Bar */}
              <div className="w-full h-2.5 bg-[#EDE5DC] rounded-full overflow-hidden border border-[#DECFC0] mt-2 relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, delay: 0.1 + (index * 0.02), ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-[#A75D2B] via-[#C67D43] to-[#8C4B1F] rounded-full relative"
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Highlights Banner */}
      <div className="mt-12 p-6 rounded-2xl bg-white border border-dashed border-[#B89F88] flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-mono text-[#382618] font-semibold shadow-sm">
        <div className="flex items-center gap-3">
          <span className="text-[#A75D2B] text-base font-bold">⚙</span>
          <span>FastAPI Backend Services with sub-50ms latency & robust Pydantic validation.</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[#231709] text-base font-bold">✦</span>
          <span>Autonomous AI Agentic Routing & Vector RAG with LangChain & CrewAI.</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-emerald-800 text-base font-bold">✓</span>
          <span>Docker Compose environments deployed with 99.9% uptime.</span>
        </div>
      </div>

    </section>
  );
};

export default Skills;
