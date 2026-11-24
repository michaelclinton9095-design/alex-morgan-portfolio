import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  ProfileData, Project, SkillCategory, Service, Experience, Education, ContactInquiry, SiteSettings
} from '../types';
import {
  initialProfileData, initialProjects, initialSkills, initialServices,
  initialExperience, initialEducation, initialSettings
} from '../data/portfolioData';

interface PortfolioContextType {
  profile: ProfileData;
  updateProfile: (data: Partial<ProfileData>) => void;
  projects: Project[];
  addProject: (project: Omit<Project, 'id'>) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  skills: SkillCategory[];
  updateSkills: (skills: SkillCategory[]) => void;
  services: Service[];
  updateServices: (services: Service[]) => void;
  toggleService: (id: string) => void;
  experience: Experience[];
  addExperience: (exp: Omit<Experience, 'id'>) => void;
  updateExperience: (id: string, exp: Partial<Experience>) => void;
  deleteExperience: (id: string) => void;
  education: Education[];
  addEducation: (edu: Omit<Education, 'id'>) => void;
  updateEducation: (id: string, edu: Partial<Education>) => void;
  deleteEducation: (id: string) => void;
  inquiries: ContactInquiry[];
  submitInquiry: (inquiry: Omit<ContactInquiry, 'id' | 'createdAt' | 'read'>) => void;
  markInquiryRead: (id: string) => void;
  deleteInquiry: (id: string) => void;
  settings: SiteSettings;
  updateSettings: (settings: Partial<SiteSettings>) => void;
  resetToDefault: () => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<ProfileData>(initialProfileData);
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [skills, setSkills] = useState<SkillCategory[]>(initialSkills);
  const [services, setServices] = useState<Service[]>(initialServices);
  const [experience, setExperience] = useState<Experience[]>(initialExperience);
  const [education, setEducation] = useState<Education[]>(initialEducation);
  const [inquiries, setInquiries] = useState<ContactInquiry[]>(() => {
    const saved = localStorage.getItem('portfolio_inquiries');
    return saved ? JSON.parse(saved) : [
      {
        id: 'inq-sample-1',
        name: 'Sarah Jenkins',
        email: 'sarah.j@techventures.io',
        subject: 'Full-Stack E-Commerce Modernization Project',
        message: 'Hello! We reviewed your Redstore platform and are looking for a senior engineer to revamp our multi-tenant storefront with Tailwind and TypeScript. Are you available for a 4-week freelance contract?',
        createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
        read: false
      }
    ];
  });
  const [settings, setSettings] = useState<SiteSettings>(initialSettings);

  // Sync state whenever code in portfolioData.ts is edited and saved (Vite HMR)
  useEffect(() => {
    setProfile(initialProfileData);
  }, [initialProfileData]);

  useEffect(() => {
    setProjects(initialProjects);
  }, [initialProjects]);

  useEffect(() => {
    setSkills(initialSkills);
  }, [initialSkills]);

  useEffect(() => {
    setServices(initialServices);
  }, [initialServices]);

  useEffect(() => {
    setExperience(initialExperience);
  }, [initialExperience]);

  useEffect(() => {
    setEducation(initialEducation);
  }, [initialEducation]);

  useEffect(() => {
    setSettings(initialSettings);
  }, [initialSettings]);

  useEffect(() => {
    localStorage.setItem('portfolio_profile', JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem('portfolio_projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('portfolio_skills', JSON.stringify(skills));
  }, [skills]);

  useEffect(() => {
    localStorage.setItem('portfolio_services', JSON.stringify(services));
  }, [services]);

  useEffect(() => {
    localStorage.setItem('portfolio_experience', JSON.stringify(experience));
  }, [experience]);

  useEffect(() => {
    localStorage.setItem('portfolio_education', JSON.stringify(education));
  }, [education]);

  useEffect(() => {
    localStorage.setItem('portfolio_inquiries', JSON.stringify(inquiries));
  }, [inquiries]);

  useEffect(() => {
    localStorage.setItem('portfolio_settings', JSON.stringify(settings));
  }, [settings]);

  const updateProfile = (data: Partial<ProfileData>) => {
    setProfile(prev => ({ ...prev, ...data }));
  };

  const addProject = (project: Omit<Project, 'id'>) => {
    const newProj: Project = { ...project, id: `proj-${Date.now()}` };
    setProjects(prev => [newProj, ...prev]);
  };

  const updateProject = (id: string, updated: Partial<Project>) => {
    setProjects(prev => prev.map(p => p.id === id ? { ...p, ...updated } : p));
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  const updateSkills = (newSkills: SkillCategory[]) => {
    setSkills(newSkills);
  };

  const updateServices = (newServices: Service[]) => {
    setServices(newServices);
  };

  const toggleService = (id: string) => {
    setServices(prev => prev.map(s => s.id === id ? { ...s, active: !s.active } : s));
  };

  const addExperience = (exp: Omit<Experience, 'id'>) => {
    const newExp: Experience = { ...exp, id: `exp-${Date.now()}` };
    setExperience(prev => [newExp, ...prev]);
  };

  const updateExperience = (id: string, updated: Partial<Experience>) => {
    setExperience(prev => prev.map(e => e.id === id ? { ...e, ...updated } : e));
  };

  const deleteExperience = (id: string) => {
    setExperience(prev => prev.filter(e => e.id !== id));
  };

  const addEducation = (edu: Omit<Education, 'id'>) => {
    const newEdu: Education = { ...edu, id: `edu-${Date.now()}` };
    setEducation(prev => [newEdu, ...prev]);
  };

  const updateEducation = (id: string, updated: Partial<Education>) => {
    setEducation(prev => prev.map(e => e.id === id ? { ...e, ...updated } : e));
  };

  const deleteEducation = (id: string) => {
    setEducation(prev => prev.filter(e => e.id !== id));
  };

  const submitInquiry = (inquiry: Omit<ContactInquiry, 'id' | 'createdAt' | 'read'>) => {
    const newInquiry: ContactInquiry = {
      ...inquiry,
      id: `inq-${Date.now()}`,
      createdAt: new Date().toISOString(),
      read: false
    };
    setInquiries(prev => [newInquiry, ...prev]);
  };

  const markInquiryRead = (id: string) => {
    setInquiries(prev => prev.map(inq => inq.id === id ? { ...inq, read: true } : inq));
  };

  const deleteInquiry = (id: string) => {
    setInquiries(prev => prev.filter(inq => inq.id !== id));
  };

  const updateSettings = (newSettings: Partial<SiteSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  const resetToDefault = () => {
    setProfile(initialProfileData);
    setProjects(initialProjects);
    setSkills(initialSkills);
    setServices(initialServices);
    setExperience(initialExperience);
    setEducation(initialEducation);
    setSettings(initialSettings);
  };

  return (
    <PortfolioContext.Provider value={{
      profile, updateProfile,
      projects, addProject, updateProject, deleteProject,
      skills, updateSkills,
      services, updateServices, toggleService,
      experience, addExperience, updateExperience, deleteExperience,
      education, addEducation, updateEducation, deleteEducation,
      inquiries, submitInquiry, markInquiryRead, deleteInquiry,
      settings, updateSettings, resetToDefault
    }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) throw new Error('usePortfolio must be used within PortfolioProvider');
  return context;
};
