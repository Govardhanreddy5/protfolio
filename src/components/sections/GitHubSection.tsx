import React from 'react';
import { ExternalLink, GitBranch, Star } from 'lucide-react';
import { GithubIcon } from '../common/SocialIcons';
import { gitHubData } from '../../data/portfolioData';
import { GlassCard } from '../common/GlassCard';

export const GitHubSection: React.FC = () => {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs font-mono">
            <GithubIcon className="w-3.5 h-3.5" />
            <span>Open Source & Version Control</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            GitHub Activity & Repositories
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Exploring code repositories, commits, and project contributions.
          </p>
        </div>

        {/* Pinned Repos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {gitHubData.pinnedRepos.map((repo) => (
            <GlassCard key={repo.name} glow="blue" className="p-6 space-y-4 flex flex-col justify-between">
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <GitBranch className="w-4 h-4 text-electric-400" />
                    <h3 className="text-base font-bold text-white font-mono">{repo.name}</h3>
                  </div>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-surface-200 hover:bg-surface-300 text-gray-300 hover:text-white"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">{repo.description}</p>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-gray-400 pt-3 border-t border-white/10">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-electric-400" />
                  {repo.language}
                </span>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 text-amber-400" /> {repo.stars}</span>
                  <span className="flex items-center gap-1"><GitBranch className="w-3.5 h-3.5 text-cyberpurple-400" /> {repo.forks}</span>
                </div>
              </div>

            </GlassCard>
          ))}
        </div>

        {/* GitHub Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <GlassCard glow="purple" className="p-6 text-center">
            <div className="text-xs font-mono text-gray-400 uppercase">Public Repositories</div>
            <div className="text-3xl font-extrabold text-white font-mono mt-1">{gitHubData.publicRepos}</div>
          </GlassCard>

          <GlassCard glow="blue" className="p-6 text-center">
            <div className="text-xs font-mono text-gray-400 uppercase">Yearly Contributions</div>
            <div className="text-3xl font-extrabold text-electric-400 font-mono mt-1">{gitHubData.contributionsThisYear}+</div>
          </GlassCard>

          <GlassCard glow="purple" className="p-6 text-center">
            <div className="text-xs font-mono text-gray-400 uppercase">Primary Language</div>
            <div className="text-3xl font-extrabold text-cyberpurple-400 font-mono mt-1">TypeScript</div>
          </GlassCard>
        </div>

      </div>
    </section>
  );
};
