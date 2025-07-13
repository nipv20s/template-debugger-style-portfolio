import { Project, Skill, Register } from '../types';

export const projects: Project[] = [
  {
    id: 'e-commerce-platform',
    name: 'E-Commerce_Platform',
    address: '0x0010',
    size: '45 KB',
    permissions: 'READ/EXEC',
    description: 'Full-stack e-commerce solution with real-time inventory management',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe'],
    achievements: [
      'Built scalable microservices architecture handling 50K+ daily users',
      'Implemented real-time inventory sync reducing oversells by 95%',
      'Optimized database queries improving page load times by 60%'
    ],
    links: {
      github: 'https://github.com/username/ecommerce-platform',
      demo: 'https://ecommerce-demo.example.com'
    },
    status: 'running'
  },
  {
    id: 'task-management-app',
    name: 'Task_Manager_Pro',
    address: '0x0020',
    size: '32 KB',
    permissions: 'READ/WRITE',
    description: 'Collaborative task management application with real-time updates',
    techStack: ['Vue.js', 'TypeScript', 'Firebase', 'Tailwind CSS', 'PWA'],
    achievements: [
      'Designed intuitive drag-and-drop interface increasing user engagement by 40%',
      'Implemented offline-first architecture with seamless sync',
      'Built progressive web app with native-like performance'
    ],
    links: {
      github: 'https://github.com/username/task-manager',
      demo: 'https://taskmanager-demo.example.com'
    },
    status: 'loaded'
  },
  {
    id: 'ai-chatbot',
    name: 'AI_Assistant_Bot',
    address: '0x0030',
    size: '58 KB',
    permissions: 'EXEC',
    description: 'Intelligent chatbot with natural language processing capabilities',
    techStack: ['Python', 'TensorFlow', 'FastAPI', 'Docker', 'OpenAI API'],
    achievements: [
      'Trained custom NLP model achieving 92% accuracy in intent recognition',
      'Integrated with multiple messaging platforms (Slack, Discord, Teams)',
      'Reduced customer support workload by 70% through automation'
    ],
    links: {
      github: 'https://github.com/username/ai-chatbot',
      case: 'https://case-study.example.com'
    },
    status: 'stopped'
  },
  {
    id: 'data-visualization',
    name: 'Analytics_Dashboard',
    address: '0x0040',
    size: '38 KB',
    permissions: 'READ/EXEC',
    description: 'Interactive data visualization dashboard for business intelligence',
    techStack: ['D3.js', 'React', 'Express', 'MongoDB', 'Chart.js'],
    achievements: [
      'Created dynamic charts processing 1M+ data points in real-time',
      'Built custom visualization components used across 5+ products',
      'Improved decision-making speed by 50% through intuitive data presentation'
    ],
    links: {
      github: 'https://github.com/username/analytics-dashboard'
    },
    status: 'loaded'
  },
  {
    id: 'mobile-fitness-app',
    name: 'Fitness_Tracker',
    address: '0x0050',
    size: '42 KB',
    permissions: 'READ/WRITE',
    description: 'Cross-platform mobile fitness tracking application',
    techStack: ['React Native', 'Expo', 'SQLite', 'Redux', 'Health APIs'],
    achievements: [
      'Developed cross-platform app deployed to both iOS and Android stores',
      'Integrated with health APIs for comprehensive fitness tracking',
      'Achieved 4.8/5 star rating with 10K+ downloads in first month'
    ],
    links: {
      github: 'https://github.com/username/fitness-tracker',
      demo: 'https://fitness-app.example.com'
    },
    status: 'running'
  }
];

export const skills: Skill[] = [
  {
    id: 'javascript',
    name: 'JavaScript/ES6+',
    level: 95,
    frameAddress: '0x01',
    description: 'Modern JavaScript development with advanced patterns and frameworks',
    projects: ['e-commerce-platform', 'task-management-app', 'data-visualization']
  },
  {
    id: 'react',
    name: 'React.js',
    level: 92,
    frameAddress: '0x02',
    description: 'Component-based UI development with hooks and state management',
    projects: ['e-commerce-platform', 'data-visualization']
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    level: 88,
    frameAddress: '0x03',
    description: 'Server-side JavaScript and API development',
    projects: ['e-commerce-platform', 'data-visualization']
  },
  {
    id: 'python',
    name: 'Python',
    level: 90,
    frameAddress: '0x04',
    description: 'Backend development, data science, and machine learning',
    projects: ['ai-chatbot']
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    level: 87,
    frameAddress: '0x05',
    description: 'Type-safe development for large-scale applications',
    projects: ['task-management-app']
  },
  {
    id: 'databases',
    name: 'Database Design',
    level: 85,
    frameAddress: '0x06',
    description: 'SQL and NoSQL database architecture and optimization',
    projects: ['e-commerce-platform', 'data-visualization', 'mobile-fitness-app']
  },
  {
    id: 'cloud',
    name: 'Cloud Platforms',
    level: 83,
    frameAddress: '0x07',
    description: 'AWS, Google Cloud, and containerization with Docker',
    projects: ['ai-chatbot', 'e-commerce-platform']
  },
  {
    id: 'mobile',
    name: 'Mobile Development',
    level: 80,
    frameAddress: '0x08',
    description: 'Cross-platform mobile app development',
    projects: ['mobile-fitness-app']
  }
];

export const registers: Register[] = [
  { name: 'ROLE', value: 'Full Stack Developer', description: 'Primary development role' },
  { name: 'EXP', value: '3+ Years', description: 'Professional experience' },
  { name: 'LOC', value: 'Remote/Hybrid', description: 'Work location preference' },
  { name: 'CERT', value: 'AWS/Docker', description: 'Technical certifications' }
];