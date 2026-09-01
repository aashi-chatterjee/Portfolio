export type SkillCategory = 
  | 'all' 
  | 'product_design' 
  | 'ui_design' 
  | 'tools' 
  | 'technology' 
  | 'ai_data' 
  | 'frontend' 
  | 'backend' 
  | 'cloud' 
  | 'architecture' 
  | 'ai_tools';

export interface SkillItem {
  id: string;
  name: string;
  category: 
    | 'product_design' 
    | 'ui_design' 
    | 'tools' 
    | 'technology' 
    | 'ai_data' 
    | 'frontend' 
    | 'backend' 
    | 'cloud' 
    | 'architecture' 
    | 'ai_tools';
  level: 'Expert' | 'Advanced' | 'Intermediate' | 'Developing' | 'Proficient';
  proficiency: number; // 0 to 100
  years: number;
  iconName: string;
  featured: boolean;
  description?: string;
}

export type ProjectCategory = 
  | 'all' 
  | 'product_design' 
  | 'ai_product' 
  | 'ai_ml' 
  | 'fullstack' 
  | 'frontend' 
  | 'cloud_devops';

export interface ProjectItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'product_design' | 'ai_product' | 'ai_ml' | 'fullstack' | 'frontend' | 'cloud_devops';
  tags: string[];
  metrics?: string;
  accentColor?: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  architecture?: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    infrastructure?: string[];
  };
  keyFeatures: string[];
  challengesSolved?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  type: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  year?: string;
  category?: string;
  tags?: string[];
  iconName?: string;
  highlightBadge?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  period: string;
  honors?: string;
  relevantCoursework?: string[];
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter?: string;
  email: string;
  calendarUrl?: string;
  location: string;
}

export type ThemeId = 'bronze' | 'graphite' | 'emerald' | 'midnight' | 'paper';

export interface ProfileMetrics {
  yearsExperience: number | string;
  projectsCompleted: number | string;
  userCenteredFocus: string;
  specialization: string;
  openSourceContributions?: number | string;
  codeCommits?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  availability: string;
  statusType: 'available' | 'busy' | 'consulting';
  bioSummary: string;
  fullBiography: string[];
  metrics: ProfileMetrics;
  socialLinks: SocialLinks;
  skills: SkillItem[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  achievements: AchievementItem[];
  education: EducationItem[];
  philosophy: {
    title: string;
    description: string;
    icon: string;
  }[];
}
