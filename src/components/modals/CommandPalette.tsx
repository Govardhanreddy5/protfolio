import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Code2, 
  Cpu, 
  FileText, 
  Terminal, 
  Sparkles, 
  X, 
  FolderGit2, 
  ExternalLink,
  Award,
  BookOpen
} from 'lucide-react';
import { projectsData, skillCategories, personalInfo } from '../../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTerminal: () => void;
  onOpenAIChat: () => void;
  onOpenResume: () => void;
  onSelectProject: (projectId: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenTerminal,
  onOpenAIChat,
  onOpenResume,
  onSelectProject,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickActions = [
    {
      id: 'ask-ai',
      title: 'Ask Govardhan AI Assistant',
      description: 'Interact with simulated Gemini LLM to learn about Govardhan',
      icon: Sparkles,
      action: () => { onClose(); onOpenAIChat(); }
    },
    {
      id: 'open-terminal',
      title: 'Launch Developer CLI Terminal',
      description: 'Run commands like cat resume, skills, projects',
      icon: Terminal,
      action: () => { onClose(); onOpenTerminal(); }
    },
    {
      id: 'view-resume',
      title: 'View & Download ATS Resume',
      description: 'Preview exact formatted PDF resume',
      icon: FileText,
      action: () => { onClose(); onOpenResume(); }
    }
  ];

  const filteredProjects = projectsData.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.techStack.some(t => t.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="w-full max-w-2xl bg-surface-100/90 border border-white/20 rounded-2xl shadow-glow-combined overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="flex items-center px-4 py-3 border-b border-white/10 bg-surface-200/50">
          <Search className="w-5 h-5 text-electric-400 mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command, project name, or skill (e.g. AlgoMind, Electron, Gemini)..."
            className="w-full bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none"
            autoFocus
          />
          <button onClick={onClose} className="p-1 text-gray-400 hover:text-white rounded">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Command Options List */}
        <div className="p-3 overflow-y-auto space-y-4">
          
          {/* Quick Actions */}
          {!query && (
            <div>
              <p className="px-2 pb-2 text-[10px] font-mono uppercase tracking-wider text-gray-400">Quick Actions</p>
              <div className="space-y-1">
                {quickActions.map((item) => (
                  <button
                    key={item.id}
                    onClick={item.action}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-white/10 text-left transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-electric-500/10 text-electric-400 group-hover:bg-electric-500 group-hover:text-white transition-colors">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">{item.title}</div>
                        <div className="text-[11px] text-gray-400">{item.description}</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-gray-500">Run ↵</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Featured Projects */}
          <div>
            <p className="px-2 pb-2 text-[10px] font-mono uppercase tracking-wider text-gray-400">Projects</p>
            <div className="space-y-1">
              {filteredProjects.map((proj) => (
                <button
                  key={proj.id}
                  onClick={() => {
                    onClose();
                    onSelectProject(proj.id);
                  }}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-white/10 text-left transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyberpurple-500/10 text-cyberpurple-400 group-hover:bg-cyberpurple-500 group-hover:text-white transition-colors">
                      <FolderGit2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">{proj.title}</div>
                      <div className="text-[11px] text-gray-400">{proj.subtitle}</div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {proj.techStack.slice(0, 3).map(tech => (
                      <span key={tech} className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-surface-200/50 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400 font-mono">
          <span>Navigate with ⬆ ⬇ keys</span>
          <span>Press ESC to exit</span>
        </div>
      </div>
    </div>
  );
};
