import React from 'react';
import { X, Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { Certification } from '../../types';

interface CertificateLightboxProps {
  cert: Certification | null;
  onClose: () => void;
}

export const CertificateLightbox: React.FC<CertificateLightboxProps> = ({ cert, onClose }) => {
  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-3xl bg-surface-100 border border-white/20 rounded-2xl shadow-glow-combined overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 bg-surface-200 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-electric-500 to-cyberpurple-500 flex items-center justify-center text-white">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">{cert.title}</h3>
              <p className="text-[11px] text-gray-400">{cert.issuer} • {cert.date}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 text-gray-400 hover:text-white rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Image Preview */}
        <div className="p-6 bg-black/90 flex flex-col items-center justify-center space-y-4">
          <div className="relative rounded-xl overflow-hidden border border-white/20 max-h-[400px]">
            <img src={cert.image} alt={cert.title} className="w-full h-full object-contain" />
          </div>

          {/* Skill Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {cert.skills.map((skill) => (
              <span key={skill} className="px-3 py-1 text-xs rounded-full bg-electric-500/10 border border-electric-500/30 text-electric-400 font-mono">
                {skill}
              </span>
            ))}
          </div>

          {cert.credentialUrl && (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyberpurple-600 hover:bg-cyberpurple-500 text-white text-xs font-semibold transition-colors shadow-glow-purple"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verify Official Credential</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
