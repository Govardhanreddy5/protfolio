import React, { useState } from 'react';
import { ParticleField } from './components/3d/ParticleField';
import { CustomCursor } from './components/common/CustomCursor';
import { ScrollProgress } from './components/common/ScrollProgress';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';

import { HeroSection } from './components/sections/HeroSection';
import { LiveStatsSection } from './components/sections/LiveStatsSection';
import { AboutSection } from './components/sections/AboutSection';
import { TechStackSection } from './components/sections/TechStackSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { LeetCodeSection } from './components/sections/LeetCodeSection';
import { GitHubSection } from './components/sections/GitHubSection';
import { BlogSection } from './components/sections/BlogSection';
import { ContactSection } from './components/sections/ContactSection';

import { CommandPalette } from './components/modals/CommandPalette';
import { TerminalModal } from './components/modals/TerminalModal';
import { AIChatModal } from './components/modals/AIChatModal';
import { ResumeViewerModal } from './components/modals/ResumeViewerModal';
import { CaseStudyModal } from './components/modals/CaseStudyModal';
import { CertificateLightbox } from './components/modals/CertificateLightbox';

import { useLenis } from './hooks/useLenis';
import { useAudio } from './hooks/useAudio';
import { useCommandPalette } from './hooks/useCommandPalette';
import { useKonamiCode } from './hooks/useKonamiCode';
import { Project, Certification } from './types';
import confetti from 'canvas-confetti';

export function App() {
  // Initialize Lenis Smooth Scroll
  useLenis();

  // Audio system hook
  const { soundEnabled, toggleSound, playHover, playClick, playSuccess } = useAudio();

  // Modal States
  const { isOpen: isCommandOpen, toggle: toggleCommand, setIsOpen: setCommandOpen } = useCommandPalette();
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  // Konami Code Trigger
  useKonamiCode(() => {
    playSuccess();
    confetti({ particleCount: 200, spread: 90, origin: { y: 0.5 } });
    alert("🎮 KONAMI CODE UNLOCKED! Cyberpunk Matrix mode activated.");
  });

  return (
    <div className="min-h-screen bg-background text-white selection:bg-electric-500 selection:text-white relative overflow-x-hidden font-sans">
      
      {/* Background Interactive Particle Field Canvas */}
      <ParticleField />

      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Custom Electric Blue/Purple Glowing Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar
        onOpenCommandPalette={() => setCommandOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenAIChat={() => setIsAIChatOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
        onPlayHover={playHover}
        onPlayClick={playClick}
      />

      {/* Main Sections */}
      <main className="relative z-10 space-y-12">
        <HeroSection
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenTerminal={() => setIsTerminalOpen(true)}
          onOpenAIChat={() => setIsAIChatOpen(true)}
          onPlayHover={playHover}
          onPlayClick={playClick}
        />
        <LiveStatsSection />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection
          onSelectProject={(proj) => setSelectedProject(proj)}
          onPlayHover={playHover}
          onPlayClick={playClick}
        />
        <ExperienceSection />
        <CertificationsSection
          onSelectCert={(cert) => setSelectedCert(cert)}
          onPlayHover={playHover}
          onPlayClick={playClick}
        />
        <LeetCodeSection />
        <GitHubSection />
        <BlogSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onPlayHover={playHover}
        onPlayClick={playClick}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Interactive Modals */}
      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setCommandOpen(false)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenAIChat={() => setIsAIChatOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
        onSelectProject={(projId) => {
          setCommandOpen(false);
          const projEl = document.getElementById('projects');
          projEl?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <AIChatModal
        isOpen={isAIChatOpen}
        onClose={() => setIsAIChatOpen(false)}
      />

      <ResumeViewerModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <CertificateLightbox
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />

    </div>
  );
}

export default App;
