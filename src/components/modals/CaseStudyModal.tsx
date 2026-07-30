import React, { useState } from 'react';
import { X, ExternalLink, Layers, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../common/SocialIcons';
import { Project } from '../../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'flow' | 'gallery'>('overview');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-5xl bg-surface-100/95 border border-white/20 rounded-2xl shadow-glow-combined overflow-hidden flex flex-col h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-4 bg-surface-200 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-electric-500 to-cyberpurple-500 flex items-center justify-center text-white font-bold">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-electric-400 font-semibold">{project.category}</span>
                <span className="text-gray-500">•</span>
                <span className="text-xs text-amber-300 font-mono">Product Launch Case Study</span>
              </div>
              <h2 className="text-lg font-bold text-white">{project.title}</h2>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-electric-600 hover:bg-electric-500 rounded-lg shadow-glow-blue transition-all"
              >
                <span>Live Launch</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-300 hover:text-white bg-surface-300 rounded-lg transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Source</span>
            </a>
            <button onClick={onClose} className="p-1.5 text-gray-400 hover:text-white rounded-lg">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 py-2 bg-surface-200/50 border-b border-white/10 flex gap-2">
          {(['overview', 'architecture', 'flow', 'gallery'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium capitalize transition-all ${
                activeTab === tab
                  ? 'bg-electric-500 text-white shadow-glow-blue'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Body */}
        <div className="flex-1 p-6 overflow-y-auto space-y-6 text-xs text-gray-300">
          
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Top Banner metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-surface-200/60 border border-white/10 text-center">
                    <div className="text-base font-bold text-electric-400 font-mono">{m.value}</div>
                    <div className="text-[10px] text-gray-400 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Problem vs Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20 space-y-2">
                  <h4 className="text-xs font-bold text-red-400 uppercase tracking-wider">The Engineering Problem</h4>
                  <p className="leading-relaxed">{project.problem}</p>
                </div>
                <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 space-y-2">
                  <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">The Architectural Solution</h4>
                  <p className="leading-relaxed">{project.solution}</p>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Core Product Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-200/40 border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-surface-200/60 border border-white/10 space-y-3">
                <h4 className="text-xs font-bold text-cyberpurple-400 font-mono uppercase">System Topology & Data Flow</h4>
                <div className="p-3 bg-black/60 rounded-lg font-mono text-emerald-400 text-[11px] leading-relaxed border border-white/10">
                  {project.caseStudy.diagramDescription}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-surface-200/60 border border-white/10 space-y-2">
                  <span className="text-[10px] font-mono text-electric-400">Frontend Layer</span>
                  <p className="text-white font-semibold">{project.architecture.frontend}</p>
                </div>
                <div className="p-4 rounded-xl bg-surface-200/60 border border-white/10 space-y-2">
                  <span className="text-[10px] font-mono text-cyberpurple-400">Backend Layer</span>
                  <p className="text-white font-semibold">{project.architecture.backend}</p>
                </div>
                <div className="p-4 rounded-xl bg-surface-200/60 border border-white/10 space-y-2">
                  <span className="text-[10px] font-mono text-amber-300">AI Foundation Model Engine</span>
                  <p className="text-white font-semibold">{project.architecture.aiEngine}</p>
                </div>
                <div className="p-4 rounded-xl bg-surface-200/60 border border-white/10 space-y-2">
                  <span className="text-[10px] font-mono text-emerald-400">Database & Persistence</span>
                  <p className="text-white font-semibold">{project.architecture.database}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'flow' && (
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Step-By-Step Execution Sequence</h4>
              <div className="space-y-3">
                {project.caseStudy.systemFlow.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-200/50 border border-white/10">
                    <div className="w-6 h-6 rounded-full bg-electric-500/20 text-electric-400 font-mono font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </div>
                    <p className="text-gray-200 leading-relaxed pt-0.5">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'gallery' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.galleryScreenshots.map((img, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden border border-white/10 bg-surface-200">
                  <img src={img} alt={`Screenshot ${idx + 1}`} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
