import { useEffect, useState } from 'react';
export const SectionLabel = ({ text, number, className = "" }) => (
  <div className={`chapter-label ${className}`}>
    {number && <span className="text-espresso-muted font-mono text-[10px]">[{number}]</span>}
    <span className="text-bronze font-mono font-bold tracking-cyber text-[10px] md:text-xs">
     {text}
    </span>
  </div>
);  
export const StitchBadge = ({ children, variant = "default", className = "" }) => {
  const styles = {
    default: "bg-sand-card border-sand-border text-espresso-body hover:border-sand-border-dark font-medium shadow-sm",
    cyan: "bg-sand-badge border-sand-border-dark text-espresso-dark font-bold hover:bg-sand-badge/80 shadow-sm",
    violet: "bg-sand-medium border-sand-border text-espresso-dark hover:bg-sand-medium/80 font-semibold",
    green: "bg-emerald-100/80 border-emerald-300 text-emerald-800 font-semibold",
    dashed: "bg-sand-card border-dashed border-sand-border-dark text-espresso-body hover:border-bronze shadow-sm",
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-mono uppercase tracking-widest border transition-all duration-300 ${styles[variant] || styles.default} ${className}`}>
      {children}
    </span>
  );
};
export const Divider = () => (
  <div className="section-container !py-0">
    <div className="divider-line" />
  </div>
);
export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      const target = e.target;
      if (target) {
        const isClickable = 
          target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.closest('a') || 
          target.closest('button') ||
          window.getComputedStyle(target).cursor === 'pointer';
        setIsPointer(isClickable);
      }
    };
    const handleMouseLeave = () => setIsVisible(false);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  if (!isVisible) return null;
  return (
    <div className="hidden lg:block">
      <div 
        className="cursor-dot"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        }}
      />
      <div 
        className="cursor-circle"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`, 
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.6 : 1})`,
          borderColor: isPointer ? '#A75D2B' : 'rgba(167, 93, 43, 0.4)',
          backgroundColor: isPointer ? 'rgba(167, 93, 43, 0.08)' : 'transparent'
        }}
      />
    </div>
  );
};
export const BrowserMockup = ({ children, title = "SYS_RENDER_VIEW", className = "" }) => (
  <div className={`browser-mockup flex flex-col ${className}`}>
    <div className="browser-header">
      <div className="flex items-center gap-2">
        <span className="ml-3 font-mono text-xs text-espresso-muted uppercase tracking-widest hidden sm:inline font-semibold">
          {title}
        </span>
      </div>
    </div>
    <div className="flex-1 relative w-full h-full min-h-0 overflow-hidden">
      {children}
    </div>
  </div>
);
