import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#journey' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <motion.nav 
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#F5EFEB]/95 backdrop-blur-2xl border-b border-[#DECFC0] py-3 shadow-[0_4px_20px_-5px_rgba(35,23,9,0.08)]' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 flex justify-between items-center">
                <a href="#hero" className="flex items-center gap-3 group cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-[#231709] border border-[#4A3525] flex items-center justify-center font-mono text-xs font-bold text-white shadow-sm group-hover:bg-[#A75D2B] transition-colors">
            AF
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-xs font-bold tracking-widest text-[#231709] flex items-center gap-1.5">
              AHMAD FASEEH
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#A75D2B] animate-pulse" />
            </span>
            <span className="font-mono text-[8px] text-[#7D634E] uppercase tracking-widest font-semibold">
              Software Engineer
            </span>
          </div>
        </a>
        <div className="hidden lg:flex items-center gap-1 bg-white/90 border border-[#DECFC0] rounded-full px-4 py-1.5 backdrop-blur-xl shadow-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a 
                key={link.name} 
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-widest transition-all duration-300 relative ${
                  isActive 
                    ? 'text-[#231709] font-bold bg-[#EADBCC] border border-[#B89F88] shadow-sm' 
                    : 'text-[#4A3525] hover:text-[#231709] hover:bg-[#EDE5DC] border border-transparent font-semibold'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="/Muhammad_Ahmad_Fasih.pdf" 
            download="Muhammad_Ahmad_Fasih.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-md border border-[#A75D2B] bg-[#A75D2B] text-white hover:bg-[#231709] font-mono text-[10px] uppercase tracking-widest transition-all duration-300 shadow-md font-bold cursor-pointer"
          >
            Download CV ↓
          </a>
        </div>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-white border border-[#DECFC0] text-[#231709] focus:outline-none shadow-sm"
          aria-label="Toggle Menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-[#F5EFEB]/98 backdrop-blur-2xl border-b border-[#DECFC0] px-6 py-6"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-4 rounded-lg text-xs font-mono uppercase tracking-widest text-[#4A3525] hover:text-[#231709] hover:bg-[#EADBCC] transition-colors font-semibold"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="/Muhammad_Ahmad_Fasih.pdf" 
              download="Muhammad_Ahmad_Fasih.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 py-2.5 px-4 text-center rounded-md border border-[#A75D2B] bg-[#A75D2B] text-white font-mono text-xs uppercase tracking-widest font-bold shadow-md cursor-pointer"
            >
              Download CV ↓
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};
export default Navbar;
