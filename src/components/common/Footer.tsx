import React from 'react';
import { Mail, Phone, Code, ArrowUp, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../../data/portfolioData';

interface FooterProps {
  onPlayHover?: () => void;
  onPlayClick?: () => void;
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onPlayHover, onPlayClick, onOpenTerminal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-surface-50 border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-electric-500 to-cyberpurple-500 flex items-center justify-center font-bold text-white shadow-glow-blue">
                <Code className="w-4 h-4" />
              </div>
              <span className="font-bold text-lg text-white">Govardhan Reddy</span>
            </div>
            <p className="text-sm text-gray-400 max-w-md leading-relaxed">
              GenAI Engineer & Full Stack Web Developer. Specializing in LLM streaming applications, RAG pipelines, Electron desktop agents, and high-performance software.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for GenAI & Full Stack Engineering roles</span>
            </div>
          </div>

          {/* Col 2: Navigation & Tools */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-300">Quick Tools</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <button
                  onClick={() => { onPlayClick?.(); onOpenTerminal(); }}
                  onMouseEnter={onPlayHover}
                  className="hover:text-cyberpurple-400 flex items-center gap-1.5 transition-colors"
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Developer CLI Terminal</span>
                </button>
              </li>
              <li><a href="#projects" className="hover:text-white transition-colors">Featured Projects</a></li>
              <li><a href="#leetcode" className="hover:text-white transition-colors">LeetCode Stats (150+)</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Technical Articles</a></li>
            </ul>
          </div>

          {/* Col 3: Connect & Social */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-300">Connect</h4>
            <div className="flex flex-col space-y-2 text-xs text-gray-400">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={onPlayHover}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-electric-400" />
                <span>github.com/24pa1a1210-netizen</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={onPlayHover}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
                <span>linkedin.com/in/govardhan-reddy</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                onMouseEnter={onPlayHover}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-cyberpurple-400" />
                <span>{personalInfo.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                onMouseEnter={onPlayHover}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+91 {personalInfo.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Govardhan Reddy. Engineered with React, Three.js & TailwindCSS.</p>
          <div className="flex items-center gap-4">
            <span>Location: {personalInfo.location}</span>
            <button
              onClick={scrollToTop}
              onMouseEnter={onPlayHover}
              className="p-2.5 rounded-full bg-surface-200 hover:bg-surface-300 text-gray-300 hover:text-white border border-white/10 transition-all hover:scale-110"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
