import React from 'react';
import { Briefcase, GraduationCap, Award, Code2, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { experienceData } from '../../data/portfolioData';
import { GlassCard } from '../common/GlassCard';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Timeline & Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education, Leadership & Milestones
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            A chronological timeline of academic excellence, product development, and algorithmic problem-solving achievements.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-32 space-y-12">
          {experienceData.map((item, idx) => (
            <div key={item.id} className="relative pl-8 sm:pl-12 group">
              
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-electric-500 border-4 border-black group-hover:scale-125 group-hover:bg-cyberpurple-400 transition-transform shadow-glow-blue" />
              
              {/* Floating Period Badge */}
              <div className="hidden sm:block absolute -left-32 top-1 w-24 text-right text-xs font-mono text-electric-400">
                {item.period}
              </div>

              <GlassCard glow={idx % 2 === 0 ? 'blue' : 'purple'} className="p-6 space-y-4">
                
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                  <div>
                    <span className="sm:hidden text-xs font-mono text-electric-400 block mb-1">{item.period}</span>
                    <h3 className="text-lg font-bold text-white">{item.role}</h3>
                    <p className="text-xs font-semibold text-gray-300 mt-0.5">{item.organization}</p>
                  </div>
                  {item.badge && (
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-electric-500/10 border border-electric-500/30 text-electric-400">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Bullet Points */}
                <div className="space-y-2 text-xs text-gray-300">
                  {item.description.map((desc, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{desc}</span>
                    </div>
                  ))}
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.skills.map((skill) => (
                    <span key={skill} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/10">
                      {skill}
                    </span>
                  ))}
                </div>

              </GlassCard>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
