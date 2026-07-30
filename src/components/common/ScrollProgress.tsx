import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-surface-200/50">
      <div
        className="h-full bg-gradient-to-r from-electric-500 via-cyberpurple-500 to-electric-400 transition-all duration-150 ease-out shadow-glow-blue"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};
