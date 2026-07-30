import React from 'react';
import { cn } from '../../utils/cn';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glow?: 'blue' | 'purple' | 'none';
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  glow = 'blue',
  hoverEffect = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative rounded-2xl bg-surface-100/60 backdrop-blur-xl border border-white/10 p-6 shadow-glass overflow-hidden transition-all duration-300",
        hoverEffect && "hover:border-electric-500/50 hover:shadow-glow-blue hover:-translate-y-1",
        glow === 'purple' && hoverEffect && "hover:border-cyberpurple-500/50 hover:shadow-glow-purple",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-noise-pattern pointer-events-none opacity-40" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
