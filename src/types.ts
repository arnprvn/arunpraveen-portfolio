export interface Project {
  id: string;
  title: string;
  description: string;
  category: "all" | "web" | "ai-ml" | "iot" | "mobile";
  tech: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Internship {
  id: string;
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
  skills: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
}

export interface Education {
  institution: string;
  degree: string;
  gpa: string;
  period: string;
  location: string;
}

export interface SkillGroup {
  category: string;
  skills: { name: string; level: number }[]; // level out of 100
}
