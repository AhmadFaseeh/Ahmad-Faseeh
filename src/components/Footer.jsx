import { PERSONAL_INFO } from '../utils/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 py-16 border-t border-sand-border relative bg-sand-light">
      
      {/* Top Footer Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
        
        {/* Brand & Status */}
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-lg bg-espresso-dark border border-espresso-body flex items-center justify-center font-mono text-xs font-bold text-sand-badge shadow-sm">
            AF
          </div>
          <div>
            <span className="font-mono text-sm font-bold text-espresso-dark block">
              {PERSONAL_INFO.name}
            </span>
            <span className="font-mono text-[9px] text-espresso-muted uppercase tracking-widest font-semibold">
              Software Engineer · Python / FastAPI · Docker · Full-Stack React
            </span>
          </div>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap gap-6 text-[10px] font-mono uppercase tracking-widest text-espresso-body font-semibold">
          {['Hero', 'About', 'Skills', 'Journey', 'Projects', 'Services', 'Contact'].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className="hover:text-bronze transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-lg bg-sand-card border border-sand-border hover:border-bronze text-espresso-body hover:text-bronze font-mono text-xs transition-all flex items-center gap-2 font-bold shadow-sm"
          aria-label="Back to Top"
        >
          <span>TOP</span>
          <span>▲</span>
        </button>

      </div>

      {/* Bottom Telemetry & Copyright */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8 border-t border-sand-border/60 text-[10px] font-mono text-espresso-muted uppercase tracking-widest font-semibold">
        <div className="flex flex-wrap items-center gap-4">
          <span className="flex items-center gap-1.5 text-espresso-dark font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            STITCH SYSTEM V2.6
          </span>
          <span>•</span>
          <span>3D THREE.JS ACTIVE</span>
          <span>•</span>
          <span>GSAP SCROLL ENGINE</span>
        </div>

        <div className="flex items-center gap-6">
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-bronze transition-colors">LinkedIn</a>
          <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-bronze transition-colors">GitHub</a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-bronze transition-colors">Email</a>
          <span className="font-bold text-espresso-dark">© {currentYear} {PERSONAL_INFO.firstName}.</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
