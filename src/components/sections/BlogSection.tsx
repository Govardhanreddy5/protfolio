import React, { useState } from 'react';
import { BookOpen, Search, Clock, ArrowRight, X, Sparkles, Tag } from 'lucide-react';
import { blogPostsData } from '../../data/portfolioData';
import { BlogPost } from '../../types';
import { GlassCard } from '../common/GlassCard';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPostsData.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section id="blog" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyberpurple-500/10 border border-cyberpurple-500/20 text-cyberpurple-400 text-xs font-mono">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Engineering Insights & Articles</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Technical Writing & Thought Leadership
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Deep dives into Generative AI streaming architectures, desktop electron agent IPC security, and high-performance full stack development.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles by title or tag (e.g., Streaming, Electron, Groq)..."
              className="w-full bg-surface-200/60 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-electric-500"
            />
          </div>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <GlassCard key={post.id} glow="blue" className="p-6 flex flex-col justify-between space-y-6">
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-electric-400">
                  <span>{post.category}</span>
                  <span className="flex items-center gap-1 text-gray-400"><Clock className="w-3 h-3" /> {post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white hover:text-electric-400 transition-colors cursor-pointer" onClick={() => setSelectedPost(post)}>
                  {post.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">{post.summary}</p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-white/5 text-gray-300 border border-white/10">
                      #{tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedPost(post)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-electric-600/80 hover:bg-electric-500 text-white font-semibold text-xs transition-all shadow-glow-blue"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </GlassCard>
          ))}
        </div>

        {/* Full Article Reader Modal */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
            <div className="w-full max-w-4xl bg-surface-100 border border-white/20 rounded-2xl shadow-glow-combined overflow-hidden flex flex-col h-[85vh]">
              <div className="px-6 py-4 bg-surface-200 border-b border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-electric-400">{selectedPost.category}</span>
                  <h3 className="text-lg font-bold text-white">{selectedPost.title}</h3>
                </div>
                <button onClick={() => setSelectedPost(null)} className="p-1.5 text-gray-400 hover:text-white rounded-lg">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 p-8 overflow-y-auto font-sans text-xs text-gray-300 leading-relaxed space-y-4 whitespace-pre-line bg-black/90">
                {selectedPost.content}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
