import React from 'react';
import { Terminal, Award, Code2, Cpu } from 'lucide-react';
import { AnimatedCounter } from '../common/AnimatedCounter';
import { GlassCard } from '../common/GlassCard';

export const LiveStatsSection: React.FC = () => {
  const stats = [
    {
      id: 'shipped-projects',
      label: 'Shipped Engineering Projects',
      value: 3,
      suffix: ' Apps',
      description: 'AlgoMind.ai, Laptop Agent & Smart Civic Reporter',
      icon: Code2,
      color: 'text-electric-400',
      borderGlow: 'blue' as const
    },
    {
      id: 'certifications',
      label: 'Verified Certifications',
      value: 5,
      suffix: ' Certs',
      description: 'Salesforce Agentforce, AWS ML, Udemy & Infosys AI',
      icon: Award,
      color: 'text-cyberpurple-400',
      borderGlow: 'purple' as const
    },
    {
      id: 'tech-tools',
      label: 'Core Technologies',
      value: 12,
      suffix: '+ Tools',
      description: 'React, Node, Express, Python, Java, SQL, Firebase',
      icon: Cpu,
      color: 'text-emerald-400',
      borderGlow: 'blue' as const
    },
    {
      id: 'leetcode',
      label: 'DSA Problem Solving',
      customText: 'Problem Solver',
      description: 'Arrays, Strings, Search, Trees, DP & Backtracking',
      icon: Terminal,
      color: 'text-amber-400',
      borderGlow: 'purple' as const
    }
  ];

  return (
    <section className="py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <GlassCard key={stat.id} glow={stat.borderGlow} className="flex flex-col justify-between">
              <div className="flex items-center justify-between pb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-gray-400">{stat.label}</span>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono my-2 truncate">
                {stat.customText ? stat.customText : <AnimatedCounter value={stat.value!} suffix={stat.suffix} />}
              </div>
              <p className="text-[11px] text-gray-400 leading-snug">{stat.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
