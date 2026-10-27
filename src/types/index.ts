export interface Project {
  id: string;
  number: string;
  title: string;
  role: string;
  techStack: string[];
  year: string;
  summary: string;
  impactMetric: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: "Web Application" | "Design System" | "Performance" | "Creative Frontend";
}

export interface CapabilitySpec {
  specNumber: string;
  title: string;
  focusArea: string;
  deliverables: string[];
  techAlignment: string[];
}

export interface ExperienceItem {
  period: string;
  company: string;
  role: string;
  bullets: string[];
}

export interface ProfileData {
  name: string;
  title: string;
  location: string;
  timezone: string;
  availability: string;
  experienceYears: string;
  projectsDelivered: string;
  statement: string;
  subStatement: string;
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
}
