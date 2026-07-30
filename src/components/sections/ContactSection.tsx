import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../../data/portfolioData';
import { GlassCard } from '../common/GlassCard';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs font-mono">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Recruiter Channel</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something Amazing
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Interested in hiring or discussing GenAI engineering roles? Reach out directly via the form or email below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <GlassCard glow="blue" className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-electric-500/10 text-electric-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-gray-400">Email Address</div>
                    <a href={`mailto:${personalInfo.email}`} className="text-sm font-bold text-white hover:text-electric-400 transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="p-2 rounded-lg bg-surface-200 hover:bg-surface-300 text-gray-400 hover:text-white transition-colors"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </GlassCard>

            {/* Phone Card */}
            <GlassCard glow="purple" className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyberpurple-500/10 text-cyberpurple-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-gray-400">Phone Number</div>
                    <a href={`tel:${personalInfo.phone}`} className="text-sm font-bold text-white hover:text-cyberpurple-400 transition-colors">
                      +91 {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  className="p-2 rounded-lg bg-surface-200 hover:bg-surface-300 text-gray-400 hover:text-white transition-colors"
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </GlassCard>

            {/* Location Card */}
            <GlassCard glow="blue" className="p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-gray-400">Location</div>
                  <div className="text-sm font-bold text-white">{personalInfo.location}</div>
                </div>
              </div>
            </GlassCard>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <GlassCard glow="purple" className="p-8">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-glow-blue">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Dispatched!</h3>
                  <p className="text-xs text-gray-300 max-w-sm mx-auto">
                    Thank you for getting in touch. Govardhan will respond to your email within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-gray-300">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Recruiter / Hiring Manager"
                        className="w-full bg-surface-200/80 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-electric-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono text-gray-300">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="hiring@company.com"
                        className="w-full bg-surface-200/80 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-electric-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-300">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Govardhan, we were impressed by your AlgoMind.ai & Laptop Agent projects and would love to invite you for an interview..."
                      className="w-full bg-surface-200/80 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-electric-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-electric-600 via-cyberpurple-600 to-electric-500 hover:from-electric-500 hover:to-cyberpurple-500 text-white font-bold text-xs uppercase tracking-wider shadow-glow-combined hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Dispatch Message</span>
                  </button>

                </form>
              )}
            </GlassCard>
          </div>

        </div>

      </div>
    </section>
  );
};
