import React, { useState } from 'react';
import { User, Target, Lightbulb, GraduationCap, Compass, CheckCircle } from 'lucide-react';
import { GlassCard } from '../common/GlassCard';
import { personalInfo } from '../../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'philosophy' | 'vision' | 'education'>('philosophy');

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs font-mono">
            <User className="w-3.5 h-3.5" />
            <span>Story & Engineering Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            I Build Software That Performs At Scale.
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            From low-latency token streaming LLM interfaces to cross-platform desktop automation, my mission is to deliver high-quality, product-oriented software.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center gap-2 mb-10">
          {[
            { id: 'philosophy', label: 'Engineering Philosophy', icon: Lightbulb },
            { id: 'vision', label: 'Career Vision & Goals', icon: Target },
            { id: 'education', label: 'Academic Foundation', icon: GraduationCap },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-electric-600 to-cyberpurple-600 text-white shadow-glow-blue scale-105'
                  : 'bg-surface-200 text-gray-400 hover:text-white border border-white/10'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Cards Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7">
            <GlassCard glow="blue" className="p-8 space-y-6">
              {activeTab === 'philosophy' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-amber-300" />
                    How I Approach Building Software
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Great engineering is not just about writing code; it is about solving human problems efficiently. When building AI products like <strong className="text-white">AlgoMind.ai</strong> and <strong className="text-white">Laptop Agent</strong>, I prioritize low latency, clean client-server boundaries, robust error handling, and fluid user experiences.
                  </p>
                  <div className="space-y-2 pt-2">
                    {[
                      "Zero-placeholder production execution",
                      "Low-latency LLM token streaming with Server-Sent Events (SSE)",
                      "Type-safe IPC bridge design for cross-platform desktop security",
                      "Obsessive focus on algorithmic efficiency & clean data structures"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-gray-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'vision' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Target className="w-5 h-5 text-electric-400" />
                    Generative AI & Software Career Vision
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    As AI transitions from simple prompt wrappers to autonomous agentic workflows and retrieval pipelines, my goal is to lead the engineering of scalable LLM systems. I aim to join engineering teams building world-class products alongside top talent.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-surface-200/50 border border-white/10">
                      <div className="text-xs font-bold text-electric-400">Short-Term Goal</div>
                      <div className="text-[11px] text-gray-400 mt-1">Ship high-impact GenAI tools & RAG systems as a dedicated Software Engineer.</div>
                    </div>
                    <div className="p-3 rounded-xl bg-surface-200/50 border border-white/10">
                      <div className="text-xs font-bold text-cyberpurple-400">Long-Term Goal</div>
                      <div className="text-[11px] text-gray-400 mt-1">Architect enterprise autonomous agent frameworks & AI developer platforms.</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'education' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-cyberpurple-400" />
                    Information Technology Academic Foundation
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Pursuing B.Tech in Information Technology at Vishnu Institute of Technology, Bhimavaram, Andhra Pradesh (2024 – 2028).
                  </p>
                  <div className="p-4 rounded-xl bg-surface-200/60 border border-white/10 space-y-2">
                    <div className="flex justify-between font-bold text-xs text-white">
                      <span>B.Tech Information Technology</span>
                      <span className="text-emerald-400 font-mono">2024 – 2028</span>
                    </div>
                    <div className="text-[11px] text-gray-400">Relevant Coursework: Data Structures & Algorithms, Machine Learning, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks, Software Engineering, REST API Design.</div>
                  </div>
                </div>
              )}
            </GlassCard>
          </div>

          {/* Right Cards: Quick Highlight Pills */}
          <div className="lg:col-span-5 space-y-4">
            <GlassCard glow="purple" className="p-6">
              <div className="text-xs font-mono text-cyberpurple-400 uppercase tracking-wider">Degree & Institution</div>
              <div className="text-xl font-bold text-white mt-1 font-mono">B.Tech IT</div>
              <p className="text-[11px] text-gray-400 mt-1">Vishnu Institute of Technology (2024 – 2028).</p>
            </GlassCard>

            <GlassCard glow="blue" className="p-6">
              <div className="text-xs font-mono text-electric-400 uppercase tracking-wider">Data Structures & Algorithms</div>
              <div className="text-xl font-bold text-white mt-1 font-mono">LeetCode Practice</div>
              <p className="text-[11px] text-gray-400 mt-1">Active problem solver focusing on optimal time & space complexity.</p>
            </GlassCard>

            <GlassCard glow="purple" className="p-6">
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">GenAI & ML Credentials</div>
              <div className="text-lg font-bold text-white mt-1">Salesforce & AWS ML</div>
              <p className="text-[11px] text-gray-400 mt-1">Agentforce Specialist & AWS ML Engineer Overview certified.</p>
            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
};
