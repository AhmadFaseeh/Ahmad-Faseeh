
import { motion } from 'framer-motion';
import { SectionLabel, BrowserMockup } from './Common';
import { PROJECTS } from '../utils/data';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="bg-bg-card border border-zinc-900 rounded-lg overflow-hidden transition-all duration-500 group-hover:border-zinc-700 group-hover:-translate-y-2">
        <div className="p-4 md:p-8">
           <BrowserMockup className="aspect-video bg-zinc-900 overflow-hidden relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 to-bg-card opacity-40 group-hover:opacity-10 transition-opacity z-10" />
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
             <div 
               className="image-fallback absolute inset-0 flex items-center justify-center text-[10px] font-mono text-zinc-700 uppercase tracking-widest z-0"
               style={{ display: project.image ? 'none' : 'flex' }}
             >
               {project.title} Preview
             </div>
           </BrowserMockup>
        </div>
        
        <div className="p-8 pt-0">
          <h3 className="text-white text-xl font-bold mb-3">{project.title}</h3>
          <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-2">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <span key={t} className="px-2 py-0.5 border border-zinc-800 text-[9px] font-mono uppercase text-zinc-500">
                {t}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-6 pt-4 border-t border-zinc-900/50">
            {project.demoLink ? (
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono uppercase tracking-widest text-white hover:underline">Live Demo →</a>
            ) : (
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 cursor-not-allowed">In Development</span>
            )}
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">GitHub →</a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-container min-h-screen">
      <SectionLabel text="Projects Showcase" className="!static mb-10" />
      
      <div className="flex flex-col lg:flex-row gap-12 items-start mb-20">
        <div className="w-full lg:w-3/4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display font-bold text-4xl md:text-6xl text-white leading-tight"
          >
            User-centered Development Approach Enhances<br/>
            Productivity and Drives Revenue Growth
          </motion.h2>
        </div>
        <div className="w-full lg:w-1/4 pt-4 lg:text-right">
           <span className="text-text-secondary font-mono text-[10px] uppercase tracking-widest">Projects</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
