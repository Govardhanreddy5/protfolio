import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, projectsData, leetCodeData, skillCategories } from '../../data/portfolioData';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

interface CommandHistory {
  cmd: string;
  output: React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose, onOpenResume }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      cmd: 'welcome',
      output: (
        <div className="space-y-1 text-emerald-400 font-mono text-xs">
          <p>Govardhan Reddy CLI v2.4.0 (x86_64-pc-linux-gnu)</p>
          <p>Type <span className="text-amber-300 font-bold">help</span> to view available commands.</p>
        </div>
      )
    }
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim().toLowerCase();
    if (!trimmed) return;

    let output: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs font-mono text-gray-300">
            <p className="text-electric-400 font-bold">Available Commands:</p>
            <p><span className="text-amber-300 font-semibold">whoami</span> - About Govardhan Reddy</p>
            <p><span className="text-amber-300 font-semibold">cat resume</span> - View full ATS resume details</p>
            <p><span className="text-amber-300 font-semibold">skills</span> - Display key technical superpowers</p>
            <p><span className="text-amber-300 font-semibold">projects</span> - List production GenAI & desktop projects</p>
            <p><span className="text-amber-300 font-semibold">leetcode</span> - Show LeetCode statistics & solved stats</p>
            <p><span className="text-amber-300 font-semibold">contact</span> - Display email, phone, and social URLs</p>
            <p><span className="text-amber-300 font-semibold">sudo hire</span> - Direct offer pipeline trigger 🎉</p>
            <p><span className="text-amber-300 font-semibold">clear</span> - Clear terminal screen</p>
          </div>
        );
        break;

      case 'whoami':
        output = (
          <div className="text-xs font-mono text-gray-300 space-y-1">
            <p className="text-electric-400 font-bold">{personalInfo.name}</p>
            <p>{personalInfo.title} | {personalInfo.location}</p>
            <p>{personalInfo.bioSummary}</p>
          </div>
        );
        break;

      case 'cat resume':
        output = (
          <div className="text-xs font-mono text-gray-300 space-y-1">
            <p className="text-emerald-400 font-bold">[PDF RESUME LOADED]</p>
            <p>Opening visual ATS viewer...</p>
          </div>
        );
        onOpenResume();
        break;

      case 'skills':
        output = (
          <div className="text-xs font-mono text-gray-300 space-y-2">
            {skillCategories.map(cat => (
              <div key={cat.title}>
                <p className="text-cyberpurple-400 font-bold"># {cat.title}:</p>
                <p className="text-gray-400">{cat.skills.map(s => s.name).join(', ')}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="text-xs font-mono text-gray-300 space-y-2">
            {projectsData.map(p => (
              <div key={p.id} className="border-l-2 border-electric-500 pl-2">
                <p className="text-electric-400 font-bold">{p.title} - {p.subtitle}</p>
                <p className="text-gray-400">{p.tagline}</p>
                <p className="text-amber-300">Stack: {p.techStack.join(', ')}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'leetcode':
        output = (
          <div className="text-xs font-mono text-gray-300 space-y-1">
            <p className="text-emerald-400 font-bold">LeetCode Handle: {leetCodeData.username}</p>
            <p>Total Solved: <span className="text-amber-300 font-bold">{leetCodeData.totalSolved}</span></p>
            <p>Easy: {leetCodeData.easySolved} | Medium: {leetCodeData.mediumSolved} | Hard: {leetCodeData.hardSolved}</p>
            <p>Global Ranking: {leetCodeData.ranking}</p>
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="text-xs font-mono text-gray-300 space-y-1">
            <p>Email: <a href={`mailto:${personalInfo.email}`} className="text-electric-400 underline">{personalInfo.email}</a></p>
            <p>Phone: <span className="text-emerald-400">{personalInfo.phone}</span></p>
            <p>LinkedIn: <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-blue-400 underline">{personalInfo.linkedin}</a></p>
            <p>GitHub: <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-cyberpurple-400 underline">{personalInfo.github}</a></p>
          </div>
        );
        break;

      case 'sudo hire':
      case 'sudo hire govardhan':
        confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
        output = (
          <div className="text-xs font-mono text-emerald-400 space-y-1 font-bold">
            <p>🚀 ACCESS GRANTED! INITIATING RECRUITER INTERVIEW PIPELINE...</p>
            <p>Redirecting to contact dispatch...</p>
          </div>
        );
        setTimeout(() => {
          onClose();
          const contactEl = document.getElementById('contact');
          contactEl?.scrollIntoView({ behavior: 'smooth' });
        }, 1200);
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        output = (
          <div className="text-xs font-mono text-red-400">
            Command not recognized: '{trimmed}'. Type <span className="text-amber-300 font-bold">help</span> for command list.
          </div>
        );
        break;
    }

    setHistory(prev => [...prev, { cmd: input, output }]);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-3xl bg-surface-50 border border-white/20 rounded-2xl shadow-glow-combined overflow-hidden flex flex-col h-[550px]">
        {/* Terminal Header */}
        <div className="px-4 py-3 bg-surface-200/80 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" onClick={onClose} />
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="ml-2 font-mono text-xs text-gray-300 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-cyberpurple-400" />
              govardhan@engineering-workstation:~
            </span>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-4 font-mono text-xs overflow-y-auto space-y-4 bg-black/90">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-emerald-400 font-bold">govardhan@dev:~$</span>
                <span className="text-white">{item.cmd}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Bar */}
        <form onSubmit={handleCommand} className="p-3 bg-surface-200/60 border-t border-white/10 flex items-center gap-2">
          <span className="font-mono text-xs text-emerald-400 font-bold">govardhan@dev:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a command (try 'whoami', 'skills', 'projects', 'sudo hire')..."
            className="flex-1 bg-transparent font-mono text-xs text-white focus:outline-none placeholder-gray-500"
          />
        </form>
      </div>
    </div>
  );
};
