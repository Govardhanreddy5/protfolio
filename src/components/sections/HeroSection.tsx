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
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-electric-600/20 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyberpurple-600/20 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-200/80 border border-white/10 backdrop-blur-md shadow-glass">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-mono text-gray-300">
                Open for GenAI & Full Stack Engineering Roles
              </span>
            </div>

            {/* Massive Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-tight">
                Govardhan <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-400 via-cyberpurple-400 to-electric-500">
                  Reddy
                </span>
              </h1>
              
              {/* Typewriter text */}
              <div className="h-10 flex items-center text-xl sm:text-2xl font-mono text-gray-300">
                <span className="text-electric-400 mr-2">&gt;</span>
                <span className="text-white font-semibold">{currentText}</span>
                <span className="w-2.5 h-6 bg-electric-400 ml-1 animate-pulse" />
              </div>
            </div>

            {/* Sub-headline */}
            <p className="text-base text-gray-400 max-w-2xl leading-relaxed">
              GenAI & Full Stack Engineer specializing in shipping production-grade <strong className="text-white">GenAI LLM Applications</strong>, <strong className="text-white">Electron Desktop AI Agents</strong>, and <strong className="text-white">Full Stack MERN Systems</strong>.
            </p>

            {/* Action Buttons Grid */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              
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
            <div className="flex items-center gap-4 pt-4 text-gray-400 text-xs font-mono">
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

          {/* Right Column: 3D Interactive Canvas & Profile Avatar */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full relative">
              
              {/* Profile Card Container with Glow */}
              <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden p-1 bg-gradient-to-tr from-electric-500 via-cyberpurple-500 to-emerald-400 shadow-glow-combined transform hover:scale-105 transition-all duration-500">
                <div className="w-full h-full rounded-[22px] overflow-hidden relative bg-surface-100">
                  <img
                    src={personalInfo.avatarUrl}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-center filter brightness-105 contrast-105"
                  />
                </div>
              </div>

              {/* Background 3D Canvas Sphere */}
              <div className="absolute inset-0 -z-10 opacity-70 pointer-events-none scale-125">
                <HeroGlobe />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
