export interface Project {
  id: string;
  name: string;
  address: string;
  size: string;
  permissions: string;
  description: string;
  techStack: string[];
  achievements: string[];
  links: {
    github?: string;
    demo?: string;
    case?: string;
  };
  status: 'loaded' | 'running' | 'stopped';
}

export interface Skill {
  id: string;
  name: string;
  level: number;
  frameAddress: string;
  description: string;
  projects: string[];
}

export interface Register {
  name: string;
  value: string;
  description: string;
}