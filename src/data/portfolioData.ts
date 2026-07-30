import { PersonalInfo, Project, SkillCategory, ExperienceItem, Certification, LeetCodeStats, GitHubStats, BlogPost } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Govardhan Reddy",
  title: "GenAI Engineer | Full Stack Web Developer (MERN) | Machine Learning Enthusiast",
  subtitles: [
    "Building GenAI & LLM-Powered Applications",
    "Developing Autonomous Desktop AI Agents",
    "Architecting Scalable MERN & REST API Systems",
    "Machine Learning & Data Science Engineering",
    "DSA & Algorithmic Problem Solver"
  ],
  bioSummary: "Information Technology undergraduate at Vishnu Institute of Technology with hands-on experience building full-stack and GenAI-powered web applications using React, Node.js, Express, and SQL. Built and shipped AI coding assistants and desktop agents integrating Google Gemini and Groq LLMs. Machine Learning virtual intern certified, AWS ML trained, and Salesforce Agentforce certified with strong DSA problem-solving skills.",
  location: "Ongole, AP, India",
  email: "govardhanreddy0477@gmail.com",
  phone: "9346450477",
  linkedin: "https://linkedin.com/in/govardhan-reddy-49b904311",
  github: "https://github.com/24pa1a1210-netizen",
  leetcode: "https://leetcode.com/u/GovardhanReddy5",
  availability: "Available for GenAI Engineer & Full Stack Roles",
  avatarUrl: "/assets/profile.jpg",
  resumePdfUrl: "/assets/resume.pdf"
};

export const projectsData: Project[] = [
  {
    id: "algomind-ai",
    title: "AlgoMind.ai",
    subtitle: "AI-Powered GenAI Coding Assistant",
    tagline: "Real-time streaming LLM assistant integrating Google Gemini API to explain complex algorithms, debug code, and guide DSA problem solving through natural-language interaction.",
    category: "GenAI",
    featured: true,
    thumbnail: "/assets/algomind.png",
    demoVideoUrl: "https://assets.mixkit.co/videos/preview/mixkit-coding-on-a-computer-screen-41547-large.mp4",
    liveUrl: "https://algomind-ai.vercel.app",
    githubUrl: "https://github.com/24pa1a1210-netizen/algomind-ai",
    techStack: ["React.js", "Node.js", "Express.js", "SQLite", "Google Gemini API", "Prompt Engineering"],
    architecture: {
      frontend: "React SPA with Server-Sent Events (SSE) streaming state management and monaco code editor",
      backend: "Node.js & Express REST API handling prompt construction & token streaming",
      aiEngine: "Google Gemini 1.5 Flash API with specialized DSA system prompts & response parsing",
      database: "SQLite for persistent user session histories and conversation history"
    },
    metrics: [
      { label: "LLM Response Latency", value: "< 450ms" },
      { label: "Streaming Rate", value: "~60 tok/s" }
    ],
    problem: "Developers often spend hours stuck on algorithmic bugs or struggling to understand complex data structure explanations.",
    solution: "Architected AlgoMind.ai — a specialized pair programming tool leveraging Google Gemini API with streaming server responses, syntax-highlighted code breakdown, and step-by-step hints.",
    challenges: [
      "Implementing chunked buffer streaming from Gemini API through Express to React without UI lag.",
      "Designing robust system prompts that prevent hallucinated syntax across programming languages."
    ],
    keyFeatures: [
      "Real-time token streaming with syntax-highlighted code editor connected to Gemini API",
      "Interactive DSA concept breakdown and automated debugging hints",
      "Persistent chat history indexing with SQLite storage across browser reloads"
    ],
    galleryScreenshots: [
      "/assets/algomind.png",
      "/assets/laptop-agent.png"
    ],
    caseStudy: {
      overview: "AlgoMind.ai was engineered to deliver an intelligent pair programmer in the browser combining React with Express event streams and Gemini's NLU capabilities.",
      diagramDescription: "Client (React UI) ──[SSE Stream]──> Backend API (Express.js) ──> Gemini API Engine ──> SQLite Persistence",
      systemFlow: [
        "User enters prompt or code snippet into the editor.",
        "Express backend validates request and opens chunked HTTP stream with Gemini API.",
        "Tokens stream back in real-time with syntax highlighting.",
        "Chat history is persisted in SQLite database."
      ],
      outcomes: [
        "Processed thousands of natural language code queries with fluid streaming response."
      ],
      futureRoadmap: [
        "Integration of vector embedding database (FAISS/Chroma) for RAG code context."
      ]
    }
  },
  {
    id: "laptop-agent",
    title: "Laptop Agent",
    subtitle: "AI-Powered Desktop Assistant",
    tagline: "Autonomous desktop assistant built with Electron, React, and TypeScript integrating LLM APIs (Gemini/Groq) for file operations and native system telemetry.",
    category: "Desktop AI",
    featured: true,
    thumbnail: "/assets/laptop-agent.png",
    demoVideoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-typing-on-a-laptop-42999-large.mp4",
    liveUrl: "https://github.com/24pa1a1210-netizen/laptop-agent",
    githubUrl: "https://github.com/24pa1a1210-netizen/laptop-agent",
    techStack: ["Electron", "React", "TypeScript", "Node.js", "Groq API", "Google Gemini API"],
    architecture: {
      frontend: "React with TailwindCSS dark mode running inside Electron Renderer Process",
      backend: "Node.js environment running in Electron Main Process with native System Information APIs",
      aiEngine: "Groq LLaMA 3 & Gemini 1.5 Flash for sub-500ms low-latency inference",
      database: "Local File System JSON store with secure diagnostics logging",
      ipc: "Asynchronous Electron IPC Main <-> Renderer channels with contextBridge type safety"
    },
    metrics: [
      { label: "Groq Speed", value: "480+ tok/s" },
      { label: "IPC Latency", value: "< 2ms" }
    ],
    problem: "Browser-based AI tools cannot interact directly with local files, monitor system metrics, or handle desktop file operations.",
    solution: "Architected Laptop Agent using Electron, TypeScript, and React. Combined system-level Node.js modules with LLM APIs to build an OS assistant with telemetry and file control.",
    challenges: [
      "Ensuring strict IPC security boundaries between Electron main and renderer processes using contextBridge."
    ],
    keyFeatures: [
      "Native Desktop GUI built with React & Tailwind dark theme",
      "Real-time OS Telemetry displaying CPU load, RAM usage, Disk space, and Battery status",
      "Smart File management system with folder navigation, search, and file operations",
      "Natural Language OS Assistant powered by Groq & Gemini APIs"
    ],
    galleryScreenshots: [
      "/assets/laptop-agent.png",
      "/assets/algomind.png"
    ],
    caseStudy: {
      overview: "Laptop Agent connects cloud LLMs directly with local operating system APIs in a secure Electron environment.",
      diagramDescription: "Electron Main (Node System APIs) <==[IPC Bridge]==> Electron Renderer (React UI) <==> Groq/Gemini API",
      systemFlow: [
        "User issues natural language command.",
        "System Monitor background process polls hardware metrics.",
        "LLM parses intent and executes safe filesystem operations."
      ],
      outcomes: [
        "Ultra-fast local AI responses under 500ms execution time."
      ],
      futureRoadmap: [
        "Adding local Whisper AI model for offline voice activation."
      ]
    }
  },
  {
    id: "smart-civic-reporter",
    title: "Smart Civic Issue Reporter",
    subtitle: "Civic Issue Reporting Platform",
    tagline: "Responsive full-stack platform enabling citizens to report local infrastructure issues with images, live location, and real-time resolution status tracking.",
    category: "Full Stack",
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1200&auto=format&fit=crop",
    githubUrl: "https://github.com/24pa1a1210-netizen",
    techStack: ["React.js", "Node.js", "Express.js", "Firebase", "Google Maps API"],
    architecture: {
      frontend: "React.js SPA with Google Maps API location tagging UI",
      backend: "Node.js & Express.js REST API endpoints",
      aiEngine: "Firebase Authentication & Cloud Storage Media Uploads",
      database: "Firebase Firestore Database"
    },
    metrics: [
      { label: "Auth & Storage", value: "Firebase" },
      { label: "Location Tagging", value: "Google Maps" }
    ],
    problem: "Citizens struggle to efficiently report local problems and track authority status updates.",
    solution: "Developed a civic issue reporting platform integrating Firebase Auth, Cloud Storage, and Google Maps API for media uploads and location tracking.",
    challenges: ["Integrating Google Maps geolocation with Firebase media storage seamlessly."],
    keyFeatures: [
      "Report local problems with images, descriptions, and live location",
      "Integrated Firebase Authentication and Cloud Storage",
      "Responsive interface with issue status tracking for citizens and authorities"
    ],
    galleryScreenshots: ["/assets/algomind.png"],
    caseStudy: {
      overview: "A civic technology application connecting citizens and authorities for transparent issue tracking.",
      diagramDescription: "React UI -> Google Maps API -> Node/Express Gateway -> Firebase Firestore & Storage",
      systemFlow: ["Citizen reports problem", "Attaches location & image", "System saves to Firebase", "Status tracked"],
      outcomes: ["Enhanced citizen-authority communication transparency."],
      futureRoadmap: ["AI automatic issue categorization & priority scoring"]
    }
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Generative AI & LLMs",
    description: "Architecting intelligent applications powered by modern Foundation Models & APIs",
    skills: [
      { name: "Google Gemini API", level: 95, iconName: "Sparkles", highlight: true },
      { name: "Groq API Integration", level: 92, iconName: "Zap", highlight: true },
      { name: "Prompt Engineering", level: 95, iconName: "BrainCircuit", highlight: true },
      { name: "LLM App Development", level: 92, iconName: "Activity", highlight: true },
      { name: "AI Coding Tools (Cursor, Copilot)", level: 95, iconName: "Code2" }
    ]
  },
  {
    title: "Languages & Core CS",
    description: "Strong fundamentals in object-oriented programming, data structures & algorithms",
    skills: [
      { name: "Java", level: 90, iconName: "Coffee", highlight: true },
      { name: "Python", level: 88, iconName: "FileCode", highlight: true },
      { name: "JavaScript (ES6+)", level: 94, iconName: "Code", highlight: true },
      { name: "TypeScript", level: 90, iconName: "FileJson", highlight: true },
      { name: "SQL", level: 88, iconName: "Database" },
      { name: "Data Structures & Algorithms", level: 92, iconName: "Network", highlight: true }
    ]
  },
  {
    title: "Frontend & Desktop",
    description: "Building responsive web interfaces and desktop applications",
    skills: [
      { name: "React.js", level: 95, iconName: "Atom", highlight: true },
      { name: "Electron", level: 88, iconName: "Monitor", highlight: true },
      { name: "Tailwind CSS", level: 95, iconName: "Palette" },
      { name: "Bootstrap", level: 85, iconName: "Layout" },
      { name: "HTML5 / CSS3", level: 95, iconName: "Layout" },
      { name: "Responsive Web Design", level: 95, iconName: "Smartphone" }
    ]
  },
  {
    title: "Backend & ML/Data Science",
    description: "RESTful APIs, machine learning pipelines, and database management",
    skills: [
      { name: "Node.js", level: 90, iconName: "Server", highlight: true },
      { name: "Express.js", level: 92, iconName: "Cpu", highlight: true },
      { name: "REST API Design", level: 94, iconName: "Globe" },
      { name: "scikit-learn & Pandas", level: 85, iconName: "FileCode" },
      { name: "SQL / SQLite / MySQL", level: 88, iconName: "HardDrive" },
      { name: "Firebase (Firestore, Auth, Storage)", level: 88, iconName: "Flame" }
    ]
  },
  {
    title: "Tools & Deployment",
    description: "Version control, developer tools, and cloud deployment",
    skills: [
      { name: "Git & GitHub", level: 92, iconName: "GitBranch", highlight: true },
      { name: "VS Code & Postman", level: 92, iconName: "Code2" },
      { name: "Vercel & Netlify", level: 90, iconName: "CloudUpload" },
      { name: "Salesforce Agentforce", level: 88, iconName: "ShieldCheck" },
      { name: "AWS ML Fundamentals", level: 85, iconName: "Cloud" }
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "ml-intern",
    role: "Machine Learning Virtual Intern",
    organization: "iStudio Technology — Remote / Virtual",
    period: "2024",
    location: "Remote",
    type: "Achievement",
    description: [
      "Applied supervised learning techniques including classification and regression on structured real-world datasets using Python and scikit-learn.",
      "Executed an end-to-end data preprocessing pipeline: missing-value imputation, label encoding, MinMax scaling, and outlier removal to improve input data quality.",
      "Engineered meaningful features from raw datasets to extract high-signal variables, contributing to improved predictive model performance.",
      "Built, trained, and evaluated predictive models; assessed performance using Accuracy, Precision, Recall, and F1-score metrics.",
      "Documented the full ML workflow — from data ingestion and preprocessing to model training and evaluation — in a structured internship report."
    ],
    skills: ["Python", "scikit-learn", "Pandas", "Feature Engineering", "Model Evaluation"],
    badge: "ML Intern"
  },
  {
    id: "degree",
    role: "B.Tech in Information Technology",
    organization: "Vishnu Institute of Technology, Bhimavaram, Andhra Pradesh",
    period: "2024 – 2028",
    location: "Bhimavaram, AP, India",
    type: "Education",
    description: [
      "Pursuing B.Tech in Information Technology with core emphasis on Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks.",
      "Hands-on focus on Generative AI, Full Stack Web Development (MERN), Machine Learning pipelines, and Cloud infrastructure."
    ],
    skills: ["DSA", "OOP", "DBMS", "OS", "Computer Networks", "Software Engineering"],
    badge: "B.Tech IT"
  },
  {
    id: "algomind-build",
    role: "Creator & Lead Architect — AlgoMind.ai",
    organization: "Personal Production Project",
    period: "2025",
    location: "Remote / Independent",
    type: "Project Leadership",
    description: [
      "Engineered an AI-powered coding assistant utilizing Google Gemini API for real-time LLM token streaming.",
      "Built backend REST APIs in Express.js with SQLite data persistence and zero-delay client stream processing.",
      "Applied prompt engineering techniques to maximize explanation accuracy for DSA problems."
    ],
    skills: ["React.js", "Node.js", "Express.js", "Gemini API", "SQLite"],
    badge: "GenAI Product"
  },
  {
    id: "laptop-agent-build",
    role: "Desktop Systems & AI Developer — Laptop Agent",
    organization: "Personal Production Project",
    period: "2025",
    location: "Remote / Independent",
    type: "Project Leadership",
    description: [
      "Developed an autonomous desktop assistant using Electron, React, and TypeScript integrating Groq & Gemini APIs.",
      "Architected secure IPC communication channels between Electron main and renderer processes.",
      "Implemented local system resource monitoring (CPU, RAM, Disk, Battery) and file management functionality."
    ],
    skills: ["Electron", "React", "TypeScript", "Groq API", "IPC Bridge"],
    badge: "Desktop AI App"
  }
];

export const certificationsData: Certification[] = [
  {
    id: "salesforce-agentforce",
    title: "Salesforce Certified Agentforce Specialist",
    issuer: "Salesforce",
    date: "Dec 31, 2025",
    credentialUrl: "https://sforce.co/verifycerts",
    image: "/assets/cert-salesforce-agentforce.jpg",
    skills: ["Agentforce", "Autonomous Agents", "Salesforce Platform", "Prompt Engineering"]
  },
  {
    id: "aws-ml",
    title: "AWS ML Engineer Associate Curriculum Overview",
    issuer: "AWS Training & Certification",
    date: "Jul 05, 2026",
    image: "/assets/cert-aws-ml.png",
    skills: ["AWS ML Services", "SageMaker", "Model Deployment", "Cloud AI Architecture"]
  },
  {
    id: "genai-hackathon",
    title: "GenAI & Agentic Intelligence Hackathon",
    issuer: "Vishnu Institute of Technology & DataValley",
    date: "Mar 09, 2026",
    image: "/assets/cert-genai-hackathon.jpg",
    skills: ["Agentic AI", "Generative AI", "Hackathon Innovation", "LLM Workflows"]
  },
  {
    id: "udemy-java",
    title: "Java for Beginners - Learn all the Basics of Java",
    issuer: "Udemy",
    date: "Sep 14, 2025",
    credentialUrl: "https://ude.my/UC-1db8b6d9-3ee5-4673-8226-fdc9d48c45f3",
    image: "/assets/cert-udemy-java.jpg",
    skills: ["Java", "Object-Oriented Programming (OOP)", "Core CS", "Basics of Java"]
  },
  {
    id: "infosys-ai",
    title: "Introduction to Artificial Intelligence",
    issuer: "Infosys Springboard",
    date: "Feb 2025",
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=800&auto=format&fit=crop",
    skills: ["Artificial Intelligence", "Machine Learning", "Neural Networks", "NLP"]
  }
];

export const leetCodeData: LeetCodeStats = {
  username: "GovardhanReddy5",
  profileUrl: "https://leetcode.com/u/GovardhanReddy5/",
  totalSolved: 154,
  easySolved: 82,
  mediumSolved: 64,
  hardSolved: 8,
  ranking: "Top 25%",
  topics: [
    { topic: "Arrays & Hashing", solved: 48, color: "#3b82f6" },
    { topic: "Strings & Two Pointers", solved: 34, color: "#a855f7" },
    { topic: "Binary Search", solved: 22, color: "#06b6d4" },
    { topic: "Linked Lists", solved: 18, color: "#10b981" },
    { topic: "Trees & Recursion", solved: 18, color: "#f59e0b" },
    { topic: "Dynamic Programming", solved: 14, color: "#ec4899" }
  ],
  recentAccepted: [
    { problem: "3Sum", difficulty: "Medium", date: "2 days ago" },
    { problem: "Binary Tree Level Order Traversal", difficulty: "Medium", date: "4 days ago" },
    { problem: "Search in Rotated Sorted Array", difficulty: "Medium", date: "1 week ago" },
    { problem: "Merge Two Sorted Lists", difficulty: "Easy", date: "1 week ago" },
    { problem: "LRU Cache", difficulty: "Hard", date: "2 weeks ago" }
  ]
};

export const gitHubData: GitHubStats = {
  username: "24pa1a1210-netizen",
  profileUrl: "https://github.com/24pa1a1210-netizen",
  publicRepos: 14,
  totalStars: 28,
  contributionsThisYear: 420,
  pinnedRepos: [
    {
      name: "algomind-ai",
      description: "AI-Powered GenAI Coding Assistant using React, Express, and Google Gemini API.",
      language: "TypeScript",
      stars: 18,
      forks: 5,
      url: "https://github.com/24pa1a1210-netizen/algomind-ai"
    },
    {
      name: "laptop-agent",
      description: "AI Desktop Assistant built with Electron, React, and Groq/Gemini LLMs.",
      language: "TypeScript",
      stars: 10,
      forks: 3,
      url: "https://github.com/24pa1a1210-netizen/laptop-agent"
    }
  ],
  languages: [
    { name: "TypeScript / JS", percentage: 55, color: "#3178c6" },
    { name: "Java", percentage: 22, color: "#b07219" },
    { name: "Python", percentage: 15, color: "#3572A5" },
    { name: "HTML/CSS", percentage: 8, color: "#e34c26" }
  ]
};

export const blogPostsData: BlogPost[] = [
  {
    id: "llm-streaming-react-express",
    title: "Architecting Real-Time LLM Token Streaming in React & Express",
    slug: "llm-streaming-react-express",
    date: "July 2026",
    readTime: "5 min read",
    category: "GenAI & LLMs",
    summary: "How to handle Server-Sent Events (SSE) and chunked buffers when streaming Gemini LLM outputs to a React frontend without UI thread blocking.",
    tags: ["React", "Express", "Gemini API", "Streaming", "WebSockets"],
    content: `
# Architecting Real-Time LLM Token Streaming in React & Express

When building Generative AI applications, waiting 4 to 8 seconds for a complete LLM response causes terrible user friction. Users expect immediate visual feedback, token by token, similar to ChatGPT or Claude.

In this deep dive, we'll explore how I engineered the streaming architecture behind **AlgoMind.ai** using Node.js/Express on the backend and React on the client.

## 1. Setting up Server-Sent Events (SSE) in Express

Instead of standard JSON responses, SSE allows the server to keep a long-lived HTTP connection open and push chunks of data as soon as the Google Gemini API yields them.

\`\`\`javascript
// express-server.js
app.get('/api/ai/stream', async (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  const { prompt } = req.query;
  const result = await model.generateContentStream(prompt);

  for await (const chunk of result.stream) {
    const chunkText = chunk.text();
    res.write(\`data: \${JSON.stringify({ text: chunkText })}\\n\\n\`);
  }

  res.write('data: [DONE]\\n\\n');
  res.end();
});
\`\`\`

## 2. Consuming SSE Chunks in React

On the React client, we read the stream using the native \`fetch\` API and a \`ReadableStreamDefaultReader\` to avoid main UI thread blocking:

\`\`\`typescript
const response = await fetch(\`/api/ai/stream?prompt=\${encodeURIComponent(userInput)}\`);
const reader = response.body?.getReader();
const decoder = new TextDecoder();

let accumulatedText = "";

while (true) {
  const { done, value } = await reader!.read();
  if (done) break;

  const chunk = decoder.decode(value);
  accumulatedText += chunk;
  setStreamedContent(accumulatedText);
}
\`\`\`

## Key Takeaways
- Always send initial headers with \`text/event-stream\`.
- Buffer decoding prevents broken UTF-8 characters across chunk boundaries.
- Render streamed markdown efficiently with memoized syntax highlighters.
`
  },
  {
    id: "electron-desktop-ai-agent",
    title: "Building Autonomous Desktop AI Agents with Electron & Groq",
    slug: "electron-desktop-ai-agent",
    date: "June 2026",
    readTime: "7 min read",
    category: "Desktop Engineering",
    summary: "Combining sub-500ms Groq LLaMA 3 inference with native Node.js IPC bindings to inspect local hardware state and organize desktop files.",
    tags: ["Electron", "React", "TypeScript", "Groq", "System API"],
    content: `
# Building Autonomous Desktop AI Agents with Electron & Groq

Web applications are restricted by browser sandboxing. By leveraging Electron, we can connect ultra-fast LLM inference directly with local operating system APIs.

In **Laptop Agent**, I combined Electron's main process capabilities with Groq's 500+ token/second inference engine.

## 1. Secure Context-Isolated IPC Bridge

Electron requires strict context isolation so rendering code cannot directly run arbitrary shell commands.

\`\`\`typescript
// preload.ts
import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
  getSystemMetrics: () => ipcRenderer.invoke('get-system-metrics'),
  executeFileAction: (actionData) => ipcRenderer.invoke('execute-file-action', actionData)
});
\`\`\`

## 2. Real-time Hardware Telemetry

In the Electron main process, Node.js libraries like \`systeminformation\` inspect CPU usage, RAM allocation, and battery status:

\`\`\`typescript
ipcMain.handle('get-system-metrics', async () => {
  const cpu = await si.currentLoad();
  const mem = await si.mem();
  const battery = await si.battery();
  return {
    cpuLoad: Math.round(cpu.currentLoad),
    ramUsedGB: (mem.active / (1024 ** 3)).toFixed(1),
    batteryPercent: battery.percent
  };
});
\`\`\`

## Conclusion
Building hybrid desktop AI applications unlocks productivity workflows that traditional browser tools simply cannot match!
`
  }
];

export const aiAssistantKnowledgeBase = {
  greetings: "Hello! I am Govardhan's AI Assistant. Ask me anything about his projects, skills, education, resume, or background!",
  sampleQuestions: [
    "Tell me about Govardhan Reddy.",
    "What are his key projects?",
    "Where is he studying?",
    "What GenAI skills does he possess?",
    "How can I contact or hire him?"
  ],
  responses: {
    bio: "Govardhan Reddy is a GenAI Engineer and Full Stack Web Developer studying B.Tech in Information Technology at Vishnu Institute of Technology, Bhimavaram. He builds production-grade LLM applications, streaming web tools, and Electron desktop agents.",
    projects: "Govardhan's key projects are:\n1. AlgoMind.ai - AI-Powered GenAI Coding Assistant with real-time Gemini API token streaming.\n2. Laptop Agent - AI-Powered Desktop Assistant built with Electron, React, and Groq/Gemini LLMs for OS telemetry & file control.\n3. Smart Civic Issue Reporter - Civic issue reporting platform with React, Express, Firebase, and Google Maps API.",
    education: "B.Tech in Information Technology at Vishnu Institute of Technology, Bhimavaram, Andhra Pradesh (2024 - 2028).",
    skills: "Core technical superpowers:\n- Generative AI / LLMs: Google Gemini API, Groq API, Prompt Engineering, LLM App Development\n- Languages: Java, Python, JavaScript, TypeScript, SQL\n- Frontend & Desktop: React.js, Electron, Tailwind CSS, Bootstrap\n- Backend & ML: Node.js, Express.js, scikit-learn, Pandas, SQLite, Firebase\n- Certifications: Salesforce Agentforce Specialist, AWS ML Engineer Overview, Infosys AI, Udemy Java",
    contact: "Contact Govardhan:\n- Email: govardhanreddy0477@gmail.com\n- Phone: 9346450477\n- LinkedIn: linkedin.com/in/govardhan-reddy-49b904311\n- GitHub: github.com/24pa1a1210-netizen\n- LeetCode: leetcode.com/u/GovardhanReddy5"
  }
};
