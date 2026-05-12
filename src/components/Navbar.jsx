import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navLinks = ['Work', 'About', 'Journey', 'Services', 'Projects', 'Contact'];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 border-b border-zinc-900 bg-bg-primary/85 backdrop-blur-xl"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-20 py-6 flex justify-between items-center">
        <div className="font-mono text-sm tracking-widest flex items-center gap-2 cursor-pointer">
          <span className="text-white">••</span>
          <span className="font-bold">AF.</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className="text-[11px] font-mono uppercase tracking-widest-plus text-text-secondary hover:text-white transition-colors relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a 
            href="/MuhammadAhmadFaseeh.pdf" 
            download="Muhammad_Ahmad_Faseeh_CV.pdf"
            className="px-4 py-1.5 border border-white/20 text-[10px] font-mono uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all"
          >
            Download CV
          </a>
        </div>
        
        {/* Mobile menu could be added here, but prompt says NO hamburger menu on desktop */}
      </div>
    </motion.nav>
  );
};

export default Navbar;
