import { motion } from 'framer-motion';
import { SectionLabel, BrowserMockup, StitchBadge } from './Common';
import { PROJECTS } from '../utils/data';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="bg-sand-card border border-sand-border rounded-2xl overflow-hidden transition-all duration-400 hover:border-bronze hover:-translate-y-2 hover:shadow-xl flex flex-col h-full shadow-sm">
        
        {/* Preview Header & Mockup */}
        <div className="p-4 md:p-6 pb-0 bg-sand-medium/40">
          <BrowserMockup title={project.id.toUpperCase()} className="aspect-[16/10] bg-sand-medium overflow-hidden relative shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-t from-espresso-dark/20 via-transparent to-transparent opacity-40 z-10 pointer-events-none" />
            
            {project.image ? (
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover object-top z-0 transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none';
                  const fallback = e.target.parentElement.querySelector('.image-fallback');
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
            ) : null}

            {/* Fallback */}
            <div 
              className="image-fallback absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-sand-medium"
              style={{ display: project.image ? 'none' : 'flex' }}
            >
              <span className="font-mono text-bronze text-2xl mb-2">⚡</span>
              <span className="font-mono text-xs text-espresso-dark font-bold uppercase tracking-widest">
                {project.title}
              </span>
              <span className="font-mono text-[9px] text-espresso-muted mt-1">
                {project.subtitle}
              </span>
            </div>

            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-3 right-3 z-20">
                <span className="px-2.5 py-1 rounded bg-espresso-dark text-sand-badge font-mono text-[9px] font-bold uppercase tracking-widest shadow-md">
                  FEATURED ARCHITECTURE
                </span>
              </div>
            )}
          </BrowserMockup>
        </div>
        
        {/* Project Details */}
        <div className="p-4 sm:p-6 md:p-8 flex-1 flex flex-col justify-between bg-sand-card">
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-bronze font-bold leading-tight">
                {project.category}
              </span>
              <span className="text-[9px] font-mono text-espresso-muted font-semibold shrink-0">
                PROJ_{String(index + 1).padStart(2, '0')}
              </span>
            </div>

            <h3 className="text-espresso-dark text-lg sm:text-xl md:text-2xl font-mono font-bold mb-2 group-hover:text-bronze transition-colors leading-tight">
              {project.title}
            </h3>

            <p className="text-espresso-body text-xs md:text-sm leading-relaxed mb-4 font-sans">
              {project.description}
            </p>

            {/* Metrics Chips */}
            {project.metrics && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-4">
                {project.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className="px-2.5 py-1 rounded bg-sand-medium/60 border border-sand-border text-[9px] font-mono text-espresso-body flex items-center gap-1.5 font-medium">
                    <span className="text-bronze font-bold">✓</span>
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-4">
              {project.tech.map((t) => (
                <span key={t} className="px-1.5 sm:px-2 py-0.5 rounded border border-sand-border text-[9px] font-mono uppercase text-espresso-body bg-sand-medium font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
          
          {/* Action Links */}
          <div className="flex items-center justify-between pt-3 border-t border-sand-border">
            <div className="flex items-center gap-4">
              {project.demoLink ? (
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-espresso-dark hover:text-bronze font-bold flex items-center gap-1.5 transition-colors"
                >
                  <span>Live Demo</span>
                  <span>↗</span>
                </a>
              ) : (
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-espresso-muted flex items-center gap-1">
                  <span className="text-bronze">◈</span>
                  <span>{project.category.includes('WordPress') ? 'WordPress Build' : 'Backend Core / SaaS'}</span>
                </span>
              )}
            </div>

            {project.githubLink && (
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-espresso-body hover:text-espresso-dark font-semibold transition-colors flex items-center gap-1"
              >
                <span>Source</span>
                <span>→</span>
              </a>
            )}
          </div>

        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-container relative bg-sand-light">
      <SectionLabel text="FEATURED PROJECTS // 05" className="mb-8" />
      
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
        <div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-6xl text-espresso-dark leading-tight">
            ENGINEERED <span className="text-bronze">SYSTEMS</span> &<br/>
            PRODUCTION PLATFORMS
          </h2>
          <p className="text-espresso-body text-xs sm:text-sm md:text-base font-sans mt-3 max-w-xl font-medium">
            Selected SaaS systems, CRM platforms, WordPress builds, catalog architectures, API engines, and e-commerce applications built for performance.
          </p>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <StitchBadge variant="cyan">12 PRODUCTION SHIPPED</StitchBadge>
          <StitchBadge variant="dashed">CLEAN CODEBASE</StitchBadge>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id || i} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
