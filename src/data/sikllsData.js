import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaBootstrap,
  FaPython,
} from 'react-icons/fa'

import {
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiFirebase,
  SiPostman,
  SiVite,
  SiVercel,
  SiFigma,
  SiJsonwebtokens,
  SiSocketdotio,
  SiFramer,
  SiReactrouter,
  SiAxios,
  SiMongoose,
  SiRedis,
  SiDocker,
} from 'react-icons/si'

import {
  HiCog,
  HiColorSwatch,
  HiDatabase,
  HiServer,
  HiSparkles,
} from 'react-icons/hi'

import { VscVscode } from 'react-icons/vsc'

export const CATEGORIES = [
  { id: 'frontend', label: 'Front-End', icon: HiColorSwatch, color: '#06B6D4' },
  { id: 'backend', label: 'Back-End', icon: HiDatabase, color: '#22C55E' },
  { id: 'tools', label: 'Tools', icon: HiCog, color: '#A855F7' },
]

export const SKILLS = [
  // Front-End
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26', category: 'frontend' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', category: 'frontend' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', category: 'frontend' },
  { name: 'React.js', icon: FaReact, color: '#61DAFB', category: 'frontend' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF', category: 'frontend' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'frontend' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', category: 'frontend' },
  { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3', category: 'frontend' },
  { name: 'Redux', icon: SiRedux, color: '#764ABC', category: 'frontend' },
  { name: 'Framer Motion', icon: SiFramer, color: '#FFFFFF', category: 'frontend' },
  { name: 'React Router', icon: SiReactrouter, color: '#F44250', category: 'frontend' },
  { name: 'Axios', icon: SiAxios, color: '#5A29E4', category: 'frontend' },

  // Back-End
  { name: 'Node.js', icon: FaNodeJs, color: '#5FA04E', category: 'backend' },
  { name: 'Express.js', icon: SiExpress, color: '#FFFFFF', category: 'backend' },
  { name: 'Python', icon: FaPython, color: '#3776AB', category: 'backend' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'backend' },
  { name: 'Mongoose', icon: SiMongoose, color: '#880000', category: 'backend' },
  { name: 'Redis', icon: SiRedis, color: '#DC382D', category: 'backend' },
  { name: 'BullMQ', icon: HiCog, color: '#E53935', category: 'backend' },
  { name: 'REST APIs', icon: HiServer, color: '#22C55E', category: 'backend' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', category: 'backend' },
  { name: 'JWT Auth', icon: SiJsonwebtokens, color: '#FB015B', category: 'backend' },
  { name: 'Socket.io', icon: SiSocketdotio, color: '#FFFFFF', category: 'backend' },

  // Tools
  { name: 'Git', icon: FaGitAlt, color: '#F05032', category: 'tools' },
  { name: 'GitHub', icon: FaGithub, color: '#FFFFFF', category: 'tools' },
  { name: 'VS Code', icon: VscVscode, color: '#007ACC', category: 'tools' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37', category: 'tools' },
  { name: 'npm', icon: FaNpm, color: '#CB3837', category: 'tools' },
  { name: 'Vite', icon: SiVite, color: '#646CFF', category: 'tools' },
  { name: 'Vercel', icon: SiVercel, color: '#FFFFFF', category: 'tools' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E', category: 'tools' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED', category: 'tools' },
]

// Learning Now
export const LEARNING_NOW = [
  { name: 'Agentic AI', icon: HiSparkles, color: '#A855F7' },
]