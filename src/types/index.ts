export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: 'GenAI' | 'Full Stack' | 'Desktop AI' | 'Developer Tools';
  featured: boolean;
  thumbnail: string;
  demoVideoUrl?: string;
  liveUrl?: string;
  githubUrl: string;
  techStack: string[];
  architecture: {
    frontend: string;
    backend: string;
    aiEngine: string;
    database: string;
    ipc?: string;
  };
  metrics: { label: string; value: string }[];
  problem: string;
  solution: string;
  challenges: string[];
  keyFeatures: string[];
  galleryScreenshots: string[];
  caseStudy: {
    overview: string;
    diagramDescription: string;
    systemFlow: string[];
    outcomes: string[];
    futureRoadmap: string[];
  };
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0-100
    iconName: string;
    highlight?: boolean;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: 'Education' | 'Certification' | 'Project Leadership' | 'Achievement';
  description: string[];
  skills: string[];
  badge?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image: string;
  skills: string[];
}

export interface LeetCodeStats {
  username: string;
  profileUrl: string;
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: string;
  cgpa?: string;
  topics: { topic: string; solved: number; color: string }[];
  recentAccepted: { problem: string; difficulty: 'Easy' | 'Medium' | 'Hard'; date: string }[];
}

export interface GitHubStats {
  username: string;
  profileUrl: string;
  publicRepos: number;
  totalStars: number;
  contributionsThisYear: number;
  pinnedRepos: {
    name: string;
    description: string;
    language: string;
    stars: number;
    forks: number;
    url: string;
  }[];
  languages: { name: string; percentage: number; color: string }[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  readTime: string;
  category: string;
  summary: string;
  content: string;
  tags: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitles: string[];
  bioSummary: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  leetcode: string;
  cgpa?: string;
  availability: string;
  avatarUrl: string;
  resumePdfUrl: string;
}
