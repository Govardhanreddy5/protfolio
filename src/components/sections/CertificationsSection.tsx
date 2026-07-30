import React from 'react';
import { Award, ExternalLink, ShieldCheck, Eye } from 'lucide-react';
import { certificationsData } from '../../data/portfolioData';
import { Certification } from '../../types';
import { GlassCard } from '../common/GlassCard';

interface CertificationsSectionProps {
  onSelectCert: (cert: Certification) => void;
  onPlayHover?: () => void;
  onPlayClick?: () => void;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  onSelectCert,
  onPlayHover,
  onPlayClick,
}) => {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyberpurple-500/10 border border-cyberpurple-500/20 text-cyberpurple-400 text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Industry Certifications
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Verified expertise in Autonomous Agentic Frameworks, Artificial Intelligence, and Cloud Machine Learning.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert) => (
            <GlassCard key={cert.id} glow="purple" className="p-0 overflow-hidden group flex flex-col justify-between">
              
              {/* Image Preview */}
              <div className="relative h-48 overflow-hidden bg-black">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-100 via-transparent to-transparent" />
                
                {/* View Lightbox Overlay button */}
                <button
                  onClick={() => {
                    onPlayClick?.();
                    onSelectCert(cert);
                  }}
                  onMouseEnter={onPlayHover}
                  className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-cyberpurple-600/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-glow-purple"
                  title="View Certificate"
                >
                  <Eye className="w-5 h-5" />
                </button>
              </div>

              {/* Information */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-cyberpurple-400">
                    <span>{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-electric-400 transition-colors">{cert.title}</h3>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/10">
                      {skill}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    onPlayClick?.();
                    onSelectCert(cert);
                  }}
                  onMouseEnter={onPlayHover}
                  className="w-full mt-4 flex items-center justify-center gap-2 py-2 rounded-xl bg-surface-200 hover:bg-surface-300 border border-white/10 text-xs font-semibold text-gray-200 transition-colors"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Verify Credential</span>
                </button>
              </div>

            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
};
