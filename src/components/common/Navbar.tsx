import React, { useState, useEffect } from 'react';
import { 
  Bot, 
  Terminal, 
  Search, 
  Volume2, 
  VolumeX, 
  FileDown, 
  Menu, 
  X,
  Code2,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

interface NavbarProps {
  onOpenCommandPalette: () => void;
  onOpenTerminal: () => void;
  onOpenAIChat: () => void;
  onOpenResume: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onPlayHover: () => void;
  onPlayClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCommandPalette,
  onOpenTerminal,
  onOpenAIChat,
  onOpenResume,
  soundEnabled,
  onToggleSound,
  onPlayHover,
  onPlayClick,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Tech Orbit', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'LeetCode', href: '#leetcode' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-surface-50/80 backdrop-blur-xl border-b border-white/10 shadow-glass'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#hero"
            onMouseEnter={onPlayHover}
            onClick={onPlayClick}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-electric-500 to-cyberpurple-500 flex items-center justify-center font-bold text-white shadow-glow-blue group-hover:scale-105 transition-transform duration-300">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-white group-hover:text-electric-400 transition-colors">
                Govardhan Reddy
              </span>
              <span className="text-[10px] font-mono text-gray-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                GenAI & Full Stack
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full bg-surface-100/60 border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={onPlayHover}
                onClick={onPlayClick}
                className="px-3.5 py-1.5 text-xs font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Command Palette Trigger */}
            <button
              onClick={() => {
                onPlayClick();
                onOpenCommandPalette();
              }}
              onMouseEnter={onPlayHover}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-gray-400 bg-surface-200/60 hover:bg-surface-300 border border-white/10 rounded-lg transition-all"
              title="Command Palette (Ctrl + K)"
            >
              <Search className="w-3.5 h-3.5 text-electric-400" />
              <span className="hidden xl:inline">Search</span>
              <kbd className="px-1.5 py-0.5 text-[10px] bg-black/40 border border-white/10 rounded text-gray-300">
                ⌘K
              </kbd>
            </button>

            {/* Terminal Toggle */}
            <button
              onClick={() => {
                onPlayClick();
                onOpenTerminal();
              }}
              onMouseEnter={onPlayHover}
              className="p-2 text-gray-300 hover:text-white bg-surface-200/60 hover:bg-surface-300 border border-white/10 rounded-lg transition-all"
              title="Open Terminal (Ctrl + `)"
            >
              <Terminal className="w-4 h-4 text-cyberpurple-400" />
            </button>

            {/* Audio Toggle */}
            <button
              onClick={() => {
                onToggleSound();
                onPlayClick();
              }}
              onMouseEnter={onPlayHover}
              className="p-2 text-gray-300 hover:text-white bg-surface-200/60 hover:bg-surface-300 border border-white/10 rounded-lg transition-all"
              title={soundEnabled ? 'Mute Sound FX' : 'Enable Sound FX'}
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-emerald-400" />
              ) : (
                <VolumeX className="w-4 h-4 text-gray-500" />
              )}
            </button>

            {/* AI Assistant Chatbot Modal */}
            <button
              onClick={() => {
                onPlayClick();
                onOpenAIChat();
              }}
              onMouseEnter={onPlayHover}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-gradient-to-r from-electric-600 to-cyberpurple-600 hover:from-electric-500 hover:to-cyberpurple-500 rounded-lg shadow-glow-blue transition-all transform hover:scale-105"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" />
              <span>Ask AI</span>
            </button>

            {/* ATS Resume Modal */}
            <button
              onClick={() => {
                onPlayClick();
                onOpenResume();
              }}
              onMouseEnter={onPlayHover}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-200 hover:text-white bg-surface-200 border border-white/10 rounded-lg hover:border-electric-400/50 transition-all"
            >
              <FileDown className="w-3.5 h-3.5 text-electric-400" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => {
                onPlayClick();
                onOpenAIChat();
              }}
              className="p-2 bg-gradient-to-r from-electric-600 to-cyberpurple-600 text-white rounded-lg"
            >
              <Bot className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white bg-surface-200 rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-100/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-wrap gap-2 pt-2 pb-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="flex-1 flex items-center justify-center gap-2 py-2 text-xs bg-surface-200 border border-white/10 rounded-lg text-gray-300"
            >
              <Search className="w-4 h-4 text-electric-400" />
              Search (⌘K)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="flex-1 flex items-center justify-center gap-2 py-2 text-xs bg-surface-200 border border-white/10 rounded-lg text-gray-300"
            >
              <Terminal className="w-4 h-4 text-cyberpurple-400" />
              Terminal
            </button>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="w-full mt-2 flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-electric-600 rounded-lg"
          >
            <FileDown className="w-4 h-4" />
            Download ATS Resume
          </button>
        </div>
      )}
    </header>
  );
};
