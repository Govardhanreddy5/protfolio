import React from 'react';
import { X, Download, Printer, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeViewerModal: React.FC<ResumeViewerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-4xl bg-surface-100 border border-white/20 rounded-2xl shadow-glow-combined overflow-hidden flex flex-col h-[90vh]">
        
        {/* Header Actions */}
        <div className="px-6 py-4 bg-surface-200 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              <ShieldCheck className="w-4 h-4" />
              <span>ATS Resume (100% Verified)</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-300 hover:text-white bg-surface-300 rounded-lg transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print</span>
            </button>
            <a
              href={personalInfo.resumePdfUrl}
              download="Govardhan_Reddy_Resume.pdf"
              className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-electric-600 hover:bg-electric-500 rounded-lg shadow-glow-blue transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
            <button onClick={onClose} className="p-1.5 text-gray-400 hover:text-white rounded-lg">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="flex-1 p-8 overflow-y-auto bg-white text-gray-900 font-sans text-xs space-y-5">
          
          {/* Header */}
          <div className="border-b border-gray-300 pb-3 text-center">
            <h1 className="text-2xl font-bold text-gray-900 tracking-wide uppercase">{personalInfo.name}</h1>
            <p className="font-semibold text-gray-700 text-xs mt-0.5">{personalInfo.title}</p>
            <div className="flex flex-wrap justify-center gap-3 text-[11px] text-gray-600 mt-1.5">
              <span>{personalInfo.phone}</span>
              <span>•</span>
              <span>{personalInfo.email}</span>
              <span>•</span>
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex flex-wrap justify-center gap-3 text-[11px] text-blue-700 font-medium mt-1">
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/govardhan-reddy-49b904311</a>
              <span>•</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer">github.com/24pa1a1210-netizen</a>
              <span>•</span>
              <a href={personalInfo.leetcode} target="_blank" rel="noreferrer">leetcode.com/u/GovardhanReddy5</a>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-bold text-gray-900 uppercase border-b border-gray-400 pb-1 mb-1.5 tracking-wider">
              SUMMARY
            </h2>
            <p className="text-gray-800 leading-relaxed">
              Information Technology undergraduate with hands-on experience building full-stack and GenAI powered web applications using React, Node.js, Express, and SQL. Built and shipped an AI coding assistant that integrates the Google Gemini API to deliver real-time, LLM-generated responses, combining full-stack engineering with practical prompt engineering. Completed a Machine Learning virtual internship applying scikit-learn and Pandas to real-world datasets. AWS-trained in ML fundamentals and Salesforce Agentforce certified. Quick learner with strong DSA problem-solving skills, eager to grow as a GenAI Engineer building LLM-powered applications, RAG pipelines, and AI agents.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold text-gray-900 uppercase border-b border-gray-400 pb-1 mb-1.5 tracking-wider">
              EDUCATION
            </h2>
            <div className="flex justify-between font-bold text-gray-900">
              <span>B.Tech – Information Technology</span>
              <span className="font-normal text-xs text-gray-600">2024 – 2028</span>
            </div>
            <p className="text-gray-700">Vishnu Institute of Technology, Bhimavaram, Andhra Pradesh</p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold text-gray-900 uppercase border-b border-gray-400 pb-1 mb-1.5 tracking-wider">
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-1 text-gray-800">
              <p><strong className="text-gray-900">Generative AI / LLMs:</strong> Google Gemini API & Groq API integration, Prompt Engineering, LLM-powered application development, AI-assisted coding (ChatGPT, GitHub Copilot, Cursor)</p>
              <p><strong className="text-gray-900">Languages:</strong> Java, Python, JavaScript, TypeScript, SQL, HTML5, CSS3</p>
              <p><strong className="text-gray-900">Frontend / Desktop:</strong> React.js, Tailwind CSS, Bootstrap, Electron, Responsive Web Design</p>
              <p><strong className="text-gray-900">Backend:</strong> Node.js, Express.js, REST API Design</p>
              <p><strong className="text-gray-900">ML / Data Science:</strong> scikit-learn, Pandas, NumPy, Feature Engineering, Model Evaluation</p>
              <p><strong className="text-gray-900">Databases:</strong> SQL, MySQL, SQLite, Firebase (Firestore, Auth, Cloud Storage)</p>
              <p><strong className="text-gray-900">Deployment:</strong> Vercel, Netlify, Firebase Hosting</p>
              <p><strong className="text-gray-900">Core Concepts:</strong> OOP, Data Structures & Algorithms, REST APIs, Operating Systems, DBMS, Computer Networks</p>
              <p><strong className="text-gray-900">Tools:</strong> Git, GitHub, VS Code, Postman</p>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold text-gray-900 uppercase border-b border-gray-400 pb-1 mb-1.5 tracking-wider">
              EXPERIENCE
            </h2>
            <div>
              <div className="flex justify-between font-bold text-gray-900 text-xs">
                <span>Machine Learning Virtual Intern</span>
                <span className="font-normal text-xs text-gray-600">2024</span>
              </div>
              <p className="text-[11px] text-gray-600 italic">iStudio Technology — Remote / Virtual</p>
              <ul className="list-disc list-inside space-y-1 mt-1 text-gray-800">
                <li>Applied supervised learning techniques including classification and regression on structured real-world datasets using Python and scikit-learn.</li>
                <li>Executed an end-to-end data preprocessing pipeline: missing-value imputation, label encoding, MinMax scaling, and outlier removal to improve input data quality.</li>
                <li>Engineered meaningful features from raw datasets to extract high-signal variables, contributing to improved predictive model performance.</li>
                <li>Built, trained, and evaluated predictive models; assessed performance using Accuracy, Precision, Recall, and F1-score metrics.</li>
                <li>Documented the full ML workflow — from data ingestion and preprocessing to model training and evaluation — in a structured internship report.</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold text-gray-900 uppercase border-b border-gray-400 pb-1 mb-1.5 tracking-wider">
              PROJECTS
            </h2>
            <div className="space-y-3">
              <div>
                <div className="font-bold text-gray-900">AlgoMind.ai — AI-Powered GenAI Coding Assistant</div>
                <p className="text-[11px] text-gray-600 italic">React.js | Node.js | Express.js | SQLite | Google Gemini API | REST APIs | GitHub</p>
                <ul className="list-disc list-inside space-y-0.5 mt-1 text-gray-800">
                  <li>Built a full-stack, GenAI-powered coding assistant integrating Google Gemini API to help users understand programming concepts, debug code, and solve DSA problems through natural-language interaction.</li>
                  <li>Designed and implemented RESTful API endpoints for prompt construction, real-time AI response streaming, and conversation session management using Node.js and Express.js.</li>
                  <li>Enabled persistent chat history with SQLite storage, allowing users to resume and review prior sessions across browser reloads.</li>
                  <li>Engineered Gemini response parsing to deliver structured, syntax-highlighted code explanations and step-by-step debugging hints.</li>
                  <li>Built a fully responsive React.js UI with clean client-server architecture supporting consistent experience across desktop and mobile breakpoints.</li>
                </ul>
              </div>

              <div>
                <div className="font-bold text-gray-900">Laptop Agent — AI-Powered Desktop Assistant</div>
                <p className="text-[11px] text-gray-600 italic">Electron | React | TypeScript | Node.js | AI APIs (Gemini / Groq)</p>
                <ul className="list-disc list-inside space-y-0.5 mt-1 text-gray-800">
                  <li>Developed an AI-powered desktop application using Electron, React, and TypeScript, integrating LLM APIs (Gemini/Groq) for natural language interaction and AI assistance.</li>
                  <li>Built a file management system with folder navigation, search, and file operations, plus system monitoring to display CPU, RAM, disk, and battery information.</li>
                  <li>Designed secure IPC communication between Electron's main and renderer processes, and developed a modular, responsive desktop UI with reusable React components.</li>
                </ul>
              </div>

              <div>
                <div className="font-bold text-gray-900">Smart Civic Issue Reporter</div>
                <p className="text-[11px] text-gray-600 italic">React.js | Node.js | Express.js | Firebase | Google Maps API | GitHub</p>
                <ul className="list-disc list-inside space-y-0.5 mt-1 text-gray-800">
                  <li>Developed a civic issue reporting platform enabling users to report local problems with images, descriptions, and live location.</li>
                  <li>Integrated Firebase Authentication, Cloud Storage, and Google Maps API for secure authentication, media uploads, and location tracking.</li>
                  <li>Designed a responsive interface with issue status tracking to improve communication between citizens and authorities.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-bold text-gray-900 uppercase border-b border-gray-400 pb-1 mb-1.5 tracking-wider">
              CERTIFICATIONS
            </h2>
            <ul className="list-disc list-inside space-y-0.5 text-gray-800">
              <li>Salesforce Certified Agentforce Specialist — Dec 2025</li>
              <li>Introduction to Artificial Intelligence, Infosys Springboard — Feb 2025</li>
              <li>AWS ML Engineer Associate Curriculum Overview, AWS Training & Certification — Jul 2026</li>
              <li>Complete Web Development Bootcamp, Udemy — 2024</li>
              <li>Machine Learning Virtual Internship Certificate, iStudio Technology — 2024</li>
            </ul>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="text-xs font-bold text-gray-900 uppercase border-b border-gray-400 pb-1 mb-1.5 tracking-wider">
              ACHIEVEMENTS
            </h2>
            <ul className="list-disc list-inside space-y-0.5 text-gray-800">
              <li>Solved 150+ problems on LeetCode spanning Arrays, Strings, Binary Search, Linked Lists, DP, Trees, Graphs, and Backtracking.</li>
              <li>Built and shipped a GenAI application (AlgoMind.ai) integrating a large language model into a full-stack product.</li>
              <li>Delivered 3 production-ready projects integrating LLM and third-party APIs (Google Gemini, Groq, Firebase, Google Maps).</li>
              <li>Earned Salesforce Associate certification.</li>
            </ul>
          </div>

          {/* Relevant Coursework */}
          <div>
            <h2 className="text-xs font-bold text-gray-900 uppercase border-b border-gray-400 pb-1 mb-1.5 tracking-wider">
              RELEVANT COURSEWORK
            </h2>
            <p className="text-gray-800">
              Data Structures & Algorithms · Machine Learning · Object-Oriented Programming · Database Management Systems · Operating Systems · Computer Networks · Software Engineering · REST API Design
            </p>
          </div>

          {/* Hobbies & Interests */}
          <div>
            <h2 className="text-xs font-bold text-gray-900 uppercase border-b border-gray-400 pb-1 mb-1.5 tracking-wider">
              HOBBIES & INTERESTS
            </h2>
            <ul className="list-disc list-inside space-y-0.5 text-gray-800">
              <li>Strength training and fitness conditioning</li>
              <li>Reading books</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};
