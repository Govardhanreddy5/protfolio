import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Code2, 
  Mail, 
  Sparkles, 
  ArrowRight, 
  Terminal
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import { HeroGlobe } from '../3d/HeroGlobe';
import { personalInfo } from '../../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
  onOpenAIChat: () => void;
  onPlayHover?: () => void;
  onPlayClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenResume,
  onOpenTerminal,
  onOpenAIChat,
  onPlayHover,
  onPlayClick,
}) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "GenAI Engineer",
    "Full Stack Web Developer",
    "Machine Learning Enthusiast",
    "Prompt Engineering Specialist",
    "DSA & Algorithmic Problem Solver"
  ];

  useEffect(() => {
    const target = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === target) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setCurrentText(
          target.substring(0, isDeleting ? currentText.length - 1 : currentText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden">
      
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-electric-600/20 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyberpurple-600/20 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />

      {/* Background 3D Canvas Sphere */}
      <div className="absolute inset-0 -z-10 opacity-40 pointer-events-none flex items-center justify-center scale-125">
        <HeroGlobe />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center flex flex-col items-center">
        
        {/* Status Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-200/80 border border-white/10 backdrop-blur-md shadow-glass">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-mono text-gray-300">
            Open for GenAI & Full Stack Engineering Roles
          </span>
        </div>

        {/* Massive Heading */}
        <div className="space-y-2 mt-6">
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Govardhan Reddy
          </h1>
          
          {/* Typewriter text */}
          <div className="h-10 flex items-center justify-center text-xl sm:text-2xl font-mono text-gray-300">
            <span className="text-electric-400 mr-2">&gt;</span>
            <span className="text-white font-semibold">{currentText}</span>
            <span className="w-2.5 h-6 bg-electric-400 ml-1 animate-pulse" />
          </div>
        </div>

        {/* Sub-headline */}
        <p className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed mt-4">
          GenAI & Full Stack Engineer specializing in shipping production-grade <strong className="text-white">GenAI LLM Applications</strong>, <strong className="text-white">Electron Desktop AI Agents</strong>, and <strong className="text-white">Full Stack MERN Systems</strong>.
        </p>

        {/* Action Buttons Grid */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-6">
          
          {/* Primary CTA */}
          <a
            href="#projects"
            onMouseEnter={onPlayHover}
            onClick={onPlayClick}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-electric-600 to-cyberpurple-600 hover:from-electric-500 hover:to-cyberpurple-500 text-white font-semibold text-sm shadow-glow-combined hover:scale-105 transition-all"
          >
            <span>Let's Build Something Amazing</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* View Projects */}
          <a
            href="#projects"
            onMouseEnter={onPlayHover}
            onClick={onPlayClick}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-surface-200 hover:bg-surface-300 border border-white/10 text-gray-200 text-sm font-medium transition-all"
          >
            <Code2 className="w-4 h-4 text-electric-400" />
            <span>Featured Projects</span>
          </a>

          {/* Resume Button */}
          <button
            onClick={() => { onPlayClick?.(); onOpenResume(); }}
            onMouseEnter={onPlayHover}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-surface-200 hover:bg-surface-300 border border-white/10 text-gray-200 text-sm font-medium transition-all"
          >
            <FileText className="w-4 h-4 text-cyberpurple-400" />
            <span>ATS Resume</span>
          </button>

          {/* Ask AI Chatbot */}
          <button
            onClick={() => { onPlayClick?.(); onOpenAIChat(); }}
            onMouseEnter={onPlayHover}
            className="flex items-center gap-2 px-4 py-3 rounded-xl bg-surface-200 hover:bg-surface-300 border border-white/10 text-amber-300 text-sm font-medium transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>Govardhan AI</span>
          </button>
        </div>

        {/* Social Links Row */}
        <div className="flex items-center justify-center gap-4 pt-6 text-gray-400 text-xs font-mono">
          <span>Connect:</span>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={onPlayHover}
            className="p-2 rounded-lg bg-surface-200/60 hover:bg-surface-300 hover:text-white transition-colors"
            title="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4 text-electric-400" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={onPlayHover}
            className="p-2 rounded-lg bg-surface-200/60 hover:bg-surface-300 hover:text-white transition-colors"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4 text-blue-400" />
          </a>
          <a
            href={personalInfo.leetcode}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={onPlayHover}
            className="p-2 rounded-lg bg-surface-200/60 hover:bg-surface-300 hover:text-amber-400 transition-colors"
            title="LeetCode Profile"
          >
            <Terminal className="w-4 h-4 text-amber-400" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            onMouseEnter={onPlayHover}
            className="p-2 rounded-lg bg-surface-200/60 hover:bg-surface-300 hover:text-emerald-400 transition-colors"
            title="Email Direct"
          >
            <Mail className="w-4 h-4 text-cyberpurple-400" />
          </a>
        </div>

      </div>
    </section>
  );
};
