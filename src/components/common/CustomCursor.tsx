import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('interactive')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-100 ease-out hidden lg:block"
        style={{
          transform: `translate3d(${position.x - 6}px, ${position.y - 6}px, 0)`
        }}
      >
        <div className="w-3 h-3 bg-electric-400 rounded-full shadow-glow-blue" />
      </div>

      <div
        className="fixed pointer-events-none z-50 transition-all duration-300 ease-out hidden lg:block"
        style={{
          transform: `translate3d(${position.x - (isHovered ? 24 : 16)}px, ${
            position.y - (isHovered ? 24 : 16)
          }px, 0)`
        }}
      >
        <div
          className={`rounded-full border border-electric-400/50 backdrop-blur-[1px] transition-all duration-200 ${
            isHovered
              ? 'w-12 h-12 bg-cyberpurple-500/10 border-cyberpurple-400 scale-110 shadow-glow-purple'
              : 'w-8 h-8 bg-electric-500/5'
          }`}
        />
      </div>
    </>
  );
};
