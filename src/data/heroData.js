import {
  FaReact,
  FaNodeJs,
} from 'react-icons/fa'

import {
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
} from 'react-icons/si'

export const ROLES = [
  'MERN Stack Developer',
  'Front-End Developer',
  'React.js Developer',
  'Next.js Developer',
  'UI / UX Enthusiast',
]

export const TECH_STACK = [
  {
    icon: FaReact,
    label: 'React',
    color: 'text-cyan-500',
    className: '-top-2 -left-4 sm:left-0',
  },
  {
    icon: SiNextdotjs,
    label: 'Next.js',
    color: 'text-gray-800 dark:text-gray-200',
    className: 'top-8 -right-4 sm:right-0',
  },
  {
    icon: FaNodeJs,
    label: 'Node.js',
    color: 'text-green-600',
    className: 'bottom-16 -left-4 sm:left-4',
  },
  {
    icon: SiMongodb,
    label: 'MongoDB',
    color: 'text-green-500',
    className: 'bottom-4 -right-4 sm:right-0',
  },
  {
    icon: SiTailwindcss,
    label: 'Tailwind',
    color: 'text-cyan-400',
    className: '-top-8 left-1/2 -translate-x-1/2',
  },
  {
    icon: SiJavascript,
    label: 'JavaScript',
    color: 'text-yellow-500',
    className: 'bottom-28 right-0 sm:right-8',
  },
]