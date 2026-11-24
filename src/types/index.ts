export interface FeatureVideo {
  id: string;
  title: string;
  url: string;
  duration: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'E-Commerce' | 'Content Management' | 'Real-Time / Social' | 'Full-Stack';
  techStack: string[];
  features: string[];
  githubUrl: string;
  demoUrl?: string;
  adminUrl?: string;
  backendUrl?: string;
  database?: string;
  videoUrl?: string;
  featureVideos?: FeatureVideo[];
  imageUrl: string;
  featured: boolean;
  status: 'Completed' | 'In Progress' | 'Maintained';
  architectureNotes?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: {
    name: string;
    level: 'Advanced' | 'Proficient' | 'Familiar';
    highlight?: boolean;
  }[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  deliverables: string[];
  active: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string; // editable placeholder
  location: string;
  description: string[];
  skills: string[];
  current: boolean;
}

export interface Education {
  id: string;
  degree: string;
  institution: string; // editable placeholder
  year: string; // editable placeholder
  details: string;
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  read: boolean;
  replied?: boolean;
}

export interface ProfileData {
  name: string;
  avatarUrl?: string;
  title: string;
  organization: string;
  designation: string;
  qualification: string;
  bioIntro: string;
  aboutDetails: string[];
  location: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl?: string;
  availableForFreelance: boolean;
}

export interface SiteSettings {
  siteTitle: string;
  siteDescription: string;
  contactEmail: string;
  seoKeywords: string[];
  themeDefault: 'system' | 'dark' | 'light';
}
