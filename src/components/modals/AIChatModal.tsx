import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Sparkles, User, RefreshCw, Zap } from 'lucide-react';
import { aiAssistantKnowledgeBase, personalInfo } from '../../data/portfolioData';

interface AIChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

export const AIChatModal: React.FC<AIChatModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'ai',
      text: "👋 Hi! I am Govardhan's GenAI Assistant. I can answer any questions about his projects (AlgoMind.ai, Laptop Agent, Smart Civic Reporter), skills, DSA achievements, or availability!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (!isOpen) return null;

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input.trim();
    if (!query) return;

    const userMsg: Message = {
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let replyText = aiAssistantKnowledgeBase.responses.bio;
      const lower = query.toLowerCase();

      if (lower.includes('project') || lower.includes('algomind') || lower.includes('laptop')) {
        replyText = aiAssistantKnowledgeBase.responses.projects;
      } else if (lower.includes('education') || lower.includes('college')) {
        replyText = aiAssistantKnowledgeBase.responses.education;
      } else if (lower.includes('skill') || lower.includes('ai') || lower.includes('tech') || lower.includes('stack')) {
        replyText = aiAssistantKnowledgeBase.responses.skills;
      } else if (lower.includes('contact') || lower.includes('email') || lower.includes('phone') || lower.includes('hire')) {
        replyText = aiAssistantKnowledgeBase.responses.contact;
      }

      const aiMsg: Message = {
        sender: 'ai',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-2xl bg-surface-100/95 border border-white/20 rounded-2xl shadow-glow-combined overflow-hidden flex flex-col h-[600px]">
        {/* Header */}
        <div className="px-5 py-3.5 bg-surface-200/80 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-electric-500 to-cyberpurple-500 flex items-center justify-center text-white shadow-glow-blue">
              <Sparkles className="w-5 h-5 animate-pulse text-amber-300" />
            </div>
            <div>
              <div className="font-bold text-sm text-white flex items-center gap-2">
                Govardhan AI Assistant
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Gemini Powered
                </span>
              </div>
              <div className="text-[11px] text-gray-400">Ask recruiter & technical questions</div>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-white/10">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat History */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-surface-50/50">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-3 ${
                msg.sender === 'user' ? 'flex-row-reverse' : ''
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  msg.sender === 'user'
                    ? 'bg-electric-600 text-white'
                    : 'bg-gradient-to-tr from-electric-500 to-cyberpurple-500 text-white'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>
              <div
                className={`max-w-[80%] rounded-2xl p-3.5 text-xs leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-electric-600 text-white rounded-tr-none'
                    : 'bg-surface-200/80 border border-white/10 text-gray-200 rounded-tl-none whitespace-pre-line'
                }`}
              >
                {msg.text}
                <div className="text-[9px] opacity-60 mt-1 text-right">{msg.timestamp}</div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-cyberpurple-600 flex items-center justify-center text-white">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-surface-200 border border-white/10 rounded-2xl p-3 text-xs text-gray-400 flex items-center gap-2">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-electric-400" />
                Processing response...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Pills */}
        <div className="px-4 py-2 bg-surface-200/40 border-t border-white/10 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {aiAssistantKnowledgeBase.sampleQuestions.map((q, i) => (
            <button
              key={i}
              onClick={() => handleSend(q)}
              className="text-[11px] font-medium whitespace-nowrap px-3 py-1 rounded-full bg-white/5 hover:bg-electric-500/20 hover:text-electric-400 border border-white/10 text-gray-300 transition-colors"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-3 bg-surface-200/80 border-t border-white/10 flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about AlgoMind.ai, Electron agent, projects, or DSA background..."
            className="flex-1 bg-surface-100 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-electric-500"
          />
          <button
            type="submit"
            className="p-2.5 rounded-xl bg-gradient-to-r from-electric-600 to-cyberpurple-600 text-white hover:from-electric-500 hover:to-cyberpurple-500 transition-all shadow-glow-blue"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
