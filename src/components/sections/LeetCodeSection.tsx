import React from 'react';
import { Terminal, ExternalLink, CheckCircle2, Award, Zap, Code2 } from 'lucide-react';
import { leetCodeData } from '../../data/portfolioData';
import { GlassCard } from '../common/GlassCard';

export const LeetCodeSection: React.FC = () => {
  return (
    <section id="leetcode" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono">
            <Terminal className="w-3.5 h-3.5" />
            <span>Algorithmic Problem Solving & DSA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            LeetCode Analytics
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Consistently practicing Data Structures & Algorithms with a focus on low-overhead space/time algorithmic complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Solved Breakdown Summary */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard glow="blue" className="p-6 space-y-6">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <h3 className="text-xl font-extrabold text-white font-mono">{leetCodeData.totalSolved} Problems</h3>
                  <p className="text-xs text-gray-400">Total Solved Problems</p>
                </div>
                <a
                  href={leetCodeData.profileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono hover:bg-amber-500/20 transition-colors"
                >
                  <span>{leetCodeData.username}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Easy / Medium / Hard Progress Pills */}
              <div className="space-y-4">
                
                {/* Easy */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-emerald-400 font-bold">Easy ({leetCodeData.easySolved})</span>
                    <span className="text-gray-400">53%</span>
                  </div>
                  <div className="w-full h-2.5 bg-surface-300 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400" style={{ width: '53%' }} />
                  </div>
                </div>

                {/* Medium */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-amber-400 font-bold">Medium ({leetCodeData.mediumSolved})</span>
                    <span className="text-gray-400">42%</span>
                  </div>
                  <div className="w-full h-2.5 bg-surface-300 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-400" style={{ width: '42%' }} />
                  </div>
                </div>

                {/* Hard */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-red-400 font-bold">Hard ({leetCodeData.hardSolved})</span>
                    <span className="text-gray-400">5%</span>
                  </div>
                  <div className="w-full h-2.5 bg-surface-300 rounded-full overflow-hidden">
                    <div className="h-full bg-red-400" style={{ width: '5%' }} />
                  </div>
                </div>

              </div>

              <div className="pt-2 text-xs font-mono text-gray-400 flex items-center justify-between">
                <span>Global Ranking: <strong className="text-white">{leetCodeData.ranking}</strong></span>
              </div>
            </GlassCard>
          </div>

          {/* Topic Distribution Grid */}
          <div className="lg:col-span-7 space-y-6">
            <GlassCard glow="purple" className="p-6 space-y-4">
              <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">Top DSA Topic Focus Areas</h3>
              <div className="space-y-3">
                {leetCodeData.topics.map((top) => (
                  <div key={top.topic} className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-gray-200">{top.topic}</span>
                      <span className="text-electric-400 font-bold">{top.solved} Solved</span>
                    </div>
                    <div className="w-full h-2 bg-surface-300 rounded-full overflow-hidden">
                      <div
                        className="h-full transition-all duration-700"
                        style={{ width: `${(top.solved / 50) * 100}%`, backgroundColor: top.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

        </div>

      </div>
    </section>
  );
};
