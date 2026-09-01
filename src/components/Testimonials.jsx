import { motion } from 'framer-motion';
import { SectionLabel, StitchBadge } from './Common';
import { RECOGNITIONS } from '../utils/data';

const RecognitionCard = ({ title, issuer, date, badge, note, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="p-8 rounded-2xl bg-sand-card border border-sand-border hover:border-bronze shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
  >
    <div className="absolute -top-12 -right-12 w-24 h-24 bg-amber-200/40 rounded-full blur-xl group-hover:bg-amber-300/50 transition-all" />

    <div>
      <div className="flex justify-between items-start mb-6">
        <span className="px-2.5 py-1 rounded bg-sand-badge border border-sand-border-dark text-espresso-dark font-mono text-[9px] uppercase tracking-widest font-bold">
          {badge}
        </span>
        <span className="text-espresso-muted font-mono text-[10px] uppercase tracking-widest font-semibold">
          {date}
        </span>
      </div>

      <h3 className="text-espresso-dark font-mono font-bold text-xl md:text-2xl mb-3 leading-snug group-hover:text-bronze transition-colors">
        {title}
      </h3>

      <p className="text-espresso-body font-mono text-xs mb-4 font-bold">
        {issuer}
      </p>

      <p className="text-espresso-body text-xs leading-relaxed font-sans border-l-2 border-sand-border pl-3">
        {note}
      </p>
    </div>

    <div className="pt-6 mt-6 border-t border-sand-border/60 flex justify-between items-center text-[10px] font-mono text-espresso-muted uppercase tracking-widest font-semibold">
      <span>Verified Milestone</span>
      <span className="text-bronze font-bold group-hover:translate-x-1.5 transition-transform">→</span>
    </div>
  </motion.div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-container relative bg-sand-light">
      <SectionLabel text="HONORS & RECOGNITIONS // 07" className="mb-8" />

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
        <div>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-espresso-dark leading-tight">
            INDUSTRY <span className="text-bronze">RECOGNITIONS</span> &<br/>
            TRACK RECORD
          </h2>
          <p className="text-espresso-body text-sm md:text-base font-sans mt-3 max-w-xl font-medium">
            Key milestones acknowledging technical excellence in full-stack architecture, API optimization, and agentic workflows.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <StitchBadge variant="cyan">VERIFIED MILESTONES</StitchBadge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {RECOGNITIONS.map((award, i) => (
          <RecognitionCard key={i} {...award} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
