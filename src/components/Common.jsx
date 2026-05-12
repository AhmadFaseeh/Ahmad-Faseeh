import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const SectionLabel = ({ text, className = "" }) => (
  <div className={`chapter-label ${className}`}>
    <span className="dot-pair text-white">{text}</span>
  </div>
);

export const Divider = () => (
  <div className="section-container !py-0">
    <div className="divider-line" />
  </div>
);

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div 
        className="cursor-dot"
        style={{ left: `${position.x}px`, top: `${position.y}px`, transform: 'translate(-50%, -50%)' }}
      />
      <div 
        className="cursor-circle"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`, 
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
          borderColor: isPointer ? '#fff' : 'rgba(255,255,255,0.3)'
        }}
      />
    </>
  );
};

export const BrowserMockup = ({ children, className = "" }) => (
  <div className={`browser-mockup ${className}`}>
    <div className="browser-header">
      <div className="dot-btn bg-red-500/50" />
      <div className="dot-btn bg-yellow-500/50" />
      <div className="dot-btn bg-green-500/50" />
      <div className="ml-4 h-4 w-32 bg-zinc-800 rounded-full" />
    </div>
    <div className="relative">
      {children}
    </div>
  </div>
);
