import React, { useState } from 'react';
import { 
  ExternalLink, 
  Play, 
  Layers, 
  Sparkles
} from 'lucide-react';
import { GithubIcon } from '../common/SocialIcons';
import { projectsData } from '../../data/portfolioData';
import { Project } from '../../types';
import { GlassCard } from '../common/GlassCard';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
  onPlayHover?: () => void;
  onPlayClick?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  onPlayHover,
  onPlayClick,
}) => {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Product Launches & Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Engineering Projects
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
            Production-grade applications engineered with LLM integrations, desktop automation, and full-stack MERN architectures.
          </p>
        </div>

        {/* Compact Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, idx) => (
            <GlassCard
              key={project.id}
              glow={idx % 2 === 0 ? 'blue' : 'purple'}
              className="p-0 overflow-hidden border-white/15 flex flex-col justify-between group"
            >
              {/* Media Preview Container */}
              <div className="relative bg-black h-48 overflow-hidden">
                {playingVideoId === project.id && project.demoVideoUrl ? (
                  <video
                    src={project.demoVideoUrl}
                    controls
                    autoPlay
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-100 via-transparent to-transparent" />
                    
                    {/* Video Demo Overlay Trigger */}
                    {project.demoVideoUrl && (
                      <button
                        onClick={() => {
                          onPlayClick?.();
                          setPlayingVideoId(project.id);
                        }}
                        onMouseEnter={onPlayHover}
                        className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-electric-600/90 text-white flex items-center justify-center shadow-glow-blue opacity-90 group-hover:scale-110 transition-transform cursor-pointer"
                        title="Play Product Demo Video"
                      >
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </button>
                    )}

                    {/* Top Category Badge */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-black/75 backdrop-blur-md text-electric-400 border border-white/10">
                        {project.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Information Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                
                <div className="space-y-2">
                  <div className="text-[11px] font-mono text-electric-400 font-semibold">{project.subtitle}</div>
                  <h3 className="text-lg font-bold text-white group-hover:text-electric-300 transition-colors">{project.title}</h3>
                  <p className="text-xs text-gray-300 leading-snug line-clamp-3">{project.tagline}</p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.slice(0, 5).map((tech) => (
                    <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-gray-300 border border-white/10">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-gray-400">
                      +{project.techStack.length - 5}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 pt-2">
                  <button
                    onClick={() => {
                      onPlayClick?.();
                      onSelectProject(project);
                    }}
                    onMouseEnter={onPlayHover}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-gradient-to-r from-electric-600 to-cyberpurple-600 hover:from-electric-500 hover:to-cyberpurple-500 text-white font-semibold text-xs shadow-glow-blue transition-all"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Case Study</span>
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      onMouseEnter={onPlayHover}
                      className="p-2 rounded-lg bg-surface-200 hover:bg-surface-300 text-gray-200 hover:text-white border border-white/10 transition-all"
                      title="Live Application Demo"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-electric-400" />
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={onPlayHover}
                    className="p-2 rounded-lg bg-surface-200 hover:bg-surface-300 text-gray-200 hover:text-white border border-white/10 transition-all"
                    title="GitHub Repository"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-cyberpurple-400" />
                  </a>
                </div>

              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
};
