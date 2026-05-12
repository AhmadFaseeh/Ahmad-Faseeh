import React from 'react';
import { PERSONAL_INFO } from '../utils/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-[1400px] mx-auto px-6 md:px-20 lg:px-32 py-20 border-t border-zinc-900">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-20">
        <div className="font-mono text-sm tracking-widest flex items-center gap-2">
          <span className="text-white">••</span>
          <span className="font-bold">AF.</span>
          <span className="text-zinc-700 ml-4 hidden lg:inline">{PERSONAL_INFO.name}</span>
        </div>

        <div className="flex flex-wrap gap-8">
          {['Work', 'About', 'Journey', 'Projects', 'Contact'].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-8 text-[10px] font-mono uppercase tracking-widest text-zinc-700">
        <div className="flex gap-4 items-center">
          <span>UI/UX Designer</span>
          <span className="text-white opacity-10">/</span>
          <span>Project Published</span>
          <span className="text-white opacity-10">/</span>
          <span>Aug 31st, 2024</span>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:items-center">
           <div className="flex gap-6">
             <a href={`https://${PERSONAL_INFO.linkedin}`} className="hover:text-zinc-500 transition-colors">LinkedIn</a>
             <a href={`https://${PERSONAL_INFO.github}`} className="hover:text-zinc-500 transition-colors">GitHub</a>
             <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-zinc-500 transition-colors">Email</a>
           </div>
           <span>© {currentYear} {PERSONAL_INFO.name}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
