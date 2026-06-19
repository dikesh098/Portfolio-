export interface Project {
  id: string;
  num: string;
  name: string;
  cat: string;
  desc: string;
  detail: string;
  techs: string[];
  metric?: string;
  metricLabel?: string;
  link?: string;
  github?: string;
  featured?: boolean;
  tag: 'web' | 'ml' | 'mobile' | 'data';
}

export interface Experience {
  date: string;
  company: string;
  role: string;
  location: string;
  points: string[];
  tags: string[];
}

export interface Education {
  date: string;
  school: string;
  degree: string;
  grade: string;
  points: string[];
  tags: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  icon: string;
  year: string;
  domain: string;
}

export interface SkillGroup {
  title: string;
  icon: string;
  tags: string[];
}

export interface SkillBar {
  name: string;
  pct: number;
  desc: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}
