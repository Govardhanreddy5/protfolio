# Govardhan Reddy — Enterprise Portfolio Website

> **Ultra-Premium, Production-Grade Portfolio for GenAI & Full Stack Software Engineering**

[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8.svg)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-R3F-purple.svg)](https://threejs.org/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black.svg)](https://vercel.com/)

---

## 🌟 Executive Overview

This repository contains the source code for the enterprise-grade portfolio website of **Govardhan Reddy** (GenAI Engineer & Full Stack Web Developer). Designed to emulate the polished aesthetics of OpenAI, Vercel, Linear, and Stripe, this portfolio is built to maximize recruiter conversion within 15 seconds of interaction.

### ✨ Key Features

- **Massive Typography & Dynamic Typewriter**: Real-time rotating role titles highlighting GenAI engineering, LLM products, Electron desktop agents, and DSA problem-solving.
- **3D Tech Orbit & Particle Canvas**: Powered by `@react-three/fiber`, `@react-three/drei`, and custom HTML5 canvas particles.
- **Product Launch Showcase**: Detailed product presentations for **AlgoMind.ai** (AI Coding Assistant with LLM streaming) and **Laptop Agent** (Electron Desktop AI Assistant with hardware telemetry).
- **Interactive Case Study Engine**: Full-screen architectural deep-dives with system topology, problem/solution matrices, and execution flow.
- **Interactive AI Chatbot ("Govardhan AI")**: Embedded simulated Gemini LLM assistant enabling recruiters to ask questions about Govardhan's background, skills, projects, and CGPA.
- **Developer CLI Terminal Mode (`Ctrl + \``)**: Interactive in-browser terminal supporting commands like `whoami`, `cat resume`, `skills`, `projects`, `leetcode`, and `sudo hire`.
- **Command Palette (`Ctrl + K`)**: Keyboard-driven global search and action launcher.
- **ATS-Optimized Resume Viewer**: High-fidelity visual viewer with 1-click PDF download and print support.
- **Synthesized UI Sound System**: Web Audio API sci-fi sound feedback on hover & click interactions (with instant mute toggle).
- **LeetCode & GitHub Analytics**: Interactive stats heatmaps, topic distribution bars, and live repository cards.
- **Konami Code Easter Egg**: Secret keyboard shortcut (`↑ ↑ ↓ ↓ ← → ← → B A`) unlocking Cyberpunk Matrix mode and celebratory confetti.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend Framework** | React 18 (TypeScript) |
| **Build Tool** | Vite |
| **Styling** | TailwindCSS v3 + Custom HSL Tokens & Glassmorphism |
| **3D Graphics** | Three.js, `@react-three/fiber`, `@react-three/drei` |
| **Animations** | Framer Motion & GSAP |
| **Scroll Physics** | `@studio-freight/lenis` (Lenis Smooth Scroll) |
| **Icons** | Lucide React |
| **Audio System** | Native Web Audio API |
| **Deployment** | Vercel / Netlify |

---

## 🚀 Quick Start & Development

### Prerequisites

- Node.js v18.0.0 or higher
- npm or yarn

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/24pa1a1210-netizen/protfolio.git
   cd protfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:5173`.

---

## ⚙️ Building for Production

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 📂 Project Architecture

```
protfolio/
├── public/
│   ├── assets/
│   │   └── profile.jpg
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── 3d/          # Three.js & Particle Canvas
│   │   ├── ai/          # Govardhan AI Chatbot
│   │   ├── common/      # Navbar, Footer, CustomCursor, ScrollProgress
│   │   ├── modals/      # CommandPalette, TerminalModal, CaseStudyModal, ResumeViewerModal
│   │   └── sections/    # Hero, Stats, About, TechStack, Projects, LeetCode, GitHub, Blog, Contact
│   ├── data/
│   │   └── portfolioData.ts  # Single source of truth for portfolio content
│   ├── hooks/           # useAudio, useLenis, useCommandPalette, useKonamiCode
│   ├── types/           # TypeScript interfaces
│   ├── utils/           # Class merge & analytics helpers
│   ├── App.tsx          # Master App Layout
│   ├── index.css        # Tailwind & Cyber CSS tokens
│   └── main.tsx         # React root entry
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 📬 Contact & Connect

- **Name**: Govardhan Reddy
- **Role**: GenAI Engineer & Full Stack Web Developer
- **Email**: [govardhanreddy0477@gmail.com](mailto:govardhanreddy0477@gmail.com)
- **Phone**: +91 9346450477
- **LinkedIn**: [linkedin.com/in/govardhan-reddy](https://linkedin.com/in/govardhan-reddy-49b904311)
- **GitHub**: [github.com/24pa1a1210-netizen](https://github.com/24pa1a1210-netizen)
- **LeetCode**: [leetcode.com/u/Govardhan_Reddy_5](https://leetcode.com/u/Govardhan_Reddy_5/)
