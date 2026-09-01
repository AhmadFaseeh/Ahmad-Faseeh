import { PERSONAL_INFO } from '../utils/data';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 py-12 border-t border-sand-border relative bg-sand-light">
      <div className="flex items-center justify-between gap-4 pb-6 border-b border-sand-border/60">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 shrink-0 rounded-lg bg-espresso-dark border border-espresso-body flex items-center justify-center font-mono text-xs font-bold text-sand-badge shadow-sm">
            AF
          </div>
          <div>
            <span className="font-mono text-sm font-bold text-espresso-dark block leading-tight">
              {PERSONAL_INFO.name}
            </span>
            <span className="font-mono text-[9px] text-espresso-muted uppercase tracking-wider font-semibold">
              Software Engineer · Python · Docker · React
            </span>
          </div>
        </div>

        <button
          onClick={scrollToTop}
          className="shrink-0 px-3 py-2 rounded-lg bg-sand-card border border-sand-border hover:border-bronze text-espresso-body hover:text-bronze font-mono text-xs transition-all flex items-center gap-1.5 font-bold shadow-sm"
          aria-label="Back to Top"
        >
          <span>TOP</span>
          <span>▲</span>
        </button>
      </div>
      <div className="py-6 flex flex-wrap items-center justify-center sm:justify-start gap-x-5 gap-y-2.5 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-espresso-body font-semibold">
        {['Hero', 'About', 'Skills', 'Journey', 'Projects', 'Services', 'Contact'].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="hover:text-bronze transition-colors py-0.5"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Bottom Bar: System status & Socials */}
      <div className="pt-6 border-t border-sand-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-espresso-muted uppercase tracking-wider font-semibold text-center sm:text-left">
        <div className="flex flex-wrap items-center justify-center gap-4 text-espresso-body">
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
