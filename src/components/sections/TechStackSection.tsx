import React, { useState } from 'react';
import { 
  Sparkles, 
  Code, 
  Monitor, 
  Server, 
  Cloud, 
  Zap, 
  Database, 
  BrainCircuit, 
  Activity, 
  CheckCircle,
  Layers
} from 'lucide-react';
import { skillCategories } from '../../data/portfolioData';
import { GlassCard } from '../common/GlassCard';

export const TechStackSection: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyberpurple-500/10 border border-cyberpurple-500/20 text-cyberpurple-400 text-xs font-mono">
            <BrainCircuit className="w-3.5 h-3.5" />
            <span>Interactive Tech Orbit & Skill Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Superpowers & Technical Stack
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Categorized technical capabilities spanning Foundation Models, Desktop Systems, Full Stack Web Development, and Databases.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategoryIndex(idx)}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeCategoryIndex === idx
                  ? 'bg-gradient-to-r from-electric-600 to-cyberpurple-600 text-white shadow-glow-blue scale-105'
                  : 'bg-surface-200 text-gray-400 hover:text-white border border-white/10'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Selected Category Skills Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories[activeCategoryIndex].skills.map((skill) => (
            <GlassCard
              key={skill.name}
              glow={skill.highlight ? 'purple' : 'blue'}
              className="p-5 flex flex-col justify-between space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl ${
                    skill.highlight
                      ? 'bg-gradient-to-tr from-electric-500 to-cyberpurple-500 text-white shadow-glow-purple'
                      : 'bg-surface-200 text-electric-400'
                  }`}>
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{skill.name}</h4>
                    {skill.highlight && (
                      <span className="text-[9px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                        Primary Superpower
                      </span>
                    )}
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-electric-400">{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1">
                <div className="w-full h-2 bg-surface-300 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-electric-500 to-cyberpurple-500 transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
};
