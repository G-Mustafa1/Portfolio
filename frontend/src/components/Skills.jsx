import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  SiVscodium,
  SiFigma,
  SiJsonwebtokens,
  SiSocketdotio,
} from 'react-icons/si'
import { HiCode, HiDatabase, HiCog, HiColorSwatch } from 'react-icons/hi'

// ── Skill data ─────────────────────────────────────────────────────────────
const CATEGORIES = [
  { id: 'all',      label: 'All Skills',  icon: HiCode         },
  { id: 'frontend', label: 'Front-End',   icon: HiColorSwatch  },
  { id: 'backend',  label: 'Back-End',    icon: HiDatabase     },
  { id: 'tools',    label: 'Tools',       icon: HiCog          },
]

const SKILLS = [
  // ── Front-End ──────────────────────────────────────────────────────────
  {
    name:     'HTML5',
    icon:     FaHtml5,
    color:    'text-orange-500',
    bg:       'bg-orange-50 dark:bg-orange-900/20',
    border:   'border-orange-200 dark:border-orange-800/50',
    category: 'frontend',
  },
  {
    name:     'CSS3',
    icon:     FaCss3Alt,
    color:    'text-blue-500',
    bg:       'bg-blue-50 dark:bg-blue-900/20',
    border:   'border-blue-200 dark:border-blue-800/50',
    category: 'frontend',
  },
  {
    name:     'JavaScript',
    icon:     FaJs,
    color:    'text-yellow-500',
    bg:       'bg-yellow-50 dark:bg-yellow-900/20',
    border:   'border-yellow-200 dark:border-yellow-800/50',
    category: 'frontend',
  },
  {
    name:     'React.js',
    icon:     FaReact,
    color:    'text-cyan-500',
    bg:       'bg-cyan-50 dark:bg-cyan-900/20',
    border:   'border-cyan-200 dark:border-cyan-800/50',
    category: 'frontend',
  },
  {
    name:     'Next.js',
    icon:     SiNextdotjs,
    color:    'text-gray-800 dark:text-gray-200',
    bg:       'bg-gray-100 dark:bg-gray-800/60',
    border:   'border-gray-200 dark:border-gray-700',
    category: 'frontend',
  },
  {
    name:     'TypeScript',
    icon:     SiTypescript,
    color:    'text-blue-600',
    bg:       'bg-blue-50 dark:bg-blue-900/20',
    border:   'border-blue-200 dark:border-blue-800/50',
    category: 'frontend',
  },
  {
    name:     'Tailwind CSS',
    icon:     SiTailwindcss,
    color:    'text-cyan-400',
    bg:       'bg-cyan-50 dark:bg-cyan-900/20',
    border:   'border-cyan-200 dark:border-cyan-800/50',
    category: 'frontend',
  },
  {
    name:     'Bootstrap',
    icon:     FaBootstrap,
    color:    'text-purple-600',
    bg:       'bg-purple-50 dark:bg-purple-900/20',
    border:   'border-purple-200 dark:border-purple-800/50',
    category: 'frontend',
  },
  {
    name:     'Redux',
    icon:     SiRedux,
    color:    'text-purple-500',
    bg:       'bg-purple-50 dark:bg-purple-900/20',
    border:   'border-purple-200 dark:border-purple-800/50',
    category: 'frontend',
  },
  // ── Back-End ──────────────────────────────────────────────────────────
  {
    name:     'Node.js',
    icon:     FaNodeJs,
    color:    'text-green-600',
    bg:       'bg-green-50 dark:bg-green-900/20',
    border:   'border-green-200 dark:border-green-800/50',
    category: 'backend',
  },
  {
    name:     'Express.js',
    icon:     SiExpress,
    color:    'text-gray-700 dark:text-gray-300',
    bg:       'bg-gray-100 dark:bg-gray-800/60',
    border:   'border-gray-200 dark:border-gray-700',
    category: 'backend',
  },
  {
    name:     'MongoDB',
    icon:     SiMongodb,
    color:    'text-green-500',
    bg:       'bg-green-50 dark:bg-green-900/20',
    border:   'border-green-200 dark:border-green-800/50',
    category: 'backend',
  },
  {
    name:     'Firebase',
    icon:     SiFirebase,
    color:    'text-orange-400',
    bg:       'bg-orange-50 dark:bg-orange-900/20',
    border:   'border-orange-200 dark:border-orange-800/50',
    category: 'backend',
  },
  {
    name:     'JWT Auth',
    icon:     SiJsonwebtokens,
    color:    'text-pink-500',
    bg:       'bg-pink-50 dark:bg-pink-900/20',
    border:   'border-pink-200 dark:border-pink-800/50',
    category: 'backend',
  },
  {
    name:     'Socket.io',
    icon:     SiSocketdotio,
    color:    'text-gray-700 dark:text-gray-300',
    bg:       'bg-gray-100 dark:bg-gray-800/60',
    border:   'border-gray-200 dark:border-gray-700',
    category: 'backend',
  },
  // ── Tools ─────────────────────────────────────────────────────────────
  {
    name:     'Git',
    icon:     FaGitAlt,
    color:    'text-orange-600',
    bg:       'bg-orange-50 dark:bg-orange-900/20',
    border:   'border-orange-200 dark:border-orange-800/50',
    category: 'tools',
  },
  {
    name:     'GitHub',
    icon:     FaGithub,
    color:    'text-gray-800 dark:text-gray-200',
    bg:       'bg-gray-100 dark:bg-gray-800/60',
    border:   'border-gray-200 dark:border-gray-700',
    category: 'tools',
  },
  {
    name:     'VS Code',
    icon:     SiVscodium,
    color:    'text-blue-500',
    bg:       'bg-blue-50 dark:bg-blue-900/20',
    border:   'border-blue-200 dark:border-blue-800/50',
    category: 'tools',
  },
  {
    name:     'Postman',
    icon:     SiPostman,
    color:    'text-orange-500',
    bg:       'bg-orange-50 dark:bg-orange-900/20',
    border:   'border-orange-200 dark:border-orange-800/50',
    category: 'tools',
  },
  {
    name:     'npm',
    icon:     FaNpm,
    color:    'text-red-500',
    bg:       'bg-red-50 dark:bg-red-900/20',
    border:   'border-red-200 dark:border-red-800/50',
    category: 'tools',
  },
  {
    name:     'Vite',
    icon:     SiVite,
    color:    'text-purple-500',
    bg:       'bg-purple-50 dark:bg-purple-900/20',
    border:   'border-purple-200 dark:border-purple-800/50',
    category: 'tools',
  },
  {
    name:     'Vercel',
    icon:     SiVercel,
    color:    'text-gray-800 dark:text-gray-200',
    bg:       'bg-gray-100 dark:bg-gray-800/60',
    border:   'border-gray-200 dark:border-gray-700',
    category: 'tools',
  },
  {
    name:     'Figma',
    icon:     SiFigma,
    color:    'text-pink-500',
    bg:       'bg-pink-50 dark:bg-pink-900/20',
    border:   'border-pink-200 dark:border-pink-800/50',
    category: 'tools',
  },
]

// ── Skill Card Component (Used for filtered view) ──────────────────────────
function SkillItem({ skill, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 10 }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ y: -3, x: 2, transition: { duration: 0.2 } }}
      className={`flex items-center gap-3 p-4 rounded-2xl border ${skill.border} bg-white dark:bg-gray-800/50 hover:shadow-md transition-all group`}
    >
      <div className={`w-12 h-12 rounded-xl ${skill.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
        <skill.icon className={`text-2xl ${skill.color}`} />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-bold text-gray-800 dark:text-gray-100">
          {skill.name}
        </span>
        <span className="text-[10px] text-gray-500 uppercase tracking-tight capitalize">{skill.category}</span>
      </div>
    </motion.div>
  )
}

// ── Skill Category Column (Used for 'All' view) ─────────────────────────────
function SkillCategory({ title, number, skills, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      className="glass-card rounded-[2rem] p-8 flex flex-col gap-8 h-full"
    >
      <div className="flex items-start justify-between">
        <div>
          <span className="text-primary-500 font-mono text-sm font-bold tracking-widest block mb-2">
            {number}
          </span>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>
        <span className="px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-bold">
          {skills.length}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay + (idx * 0.05) }}
            className={`flex items-center gap-3 p-3 rounded-2xl border ${skill.border} bg-white dark:bg-gray-800/50 hover:shadow-sm transition-all group`}
          >
            <div className={`w-9 h-9 rounded-xl ${skill.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
              <skill.icon className={`text-lg ${skill.color}`} />
            </div>
            <span className="text-[11px] font-bold text-gray-700 dark:text-gray-200 truncate">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

// ── Main Skills ────────────────────────────────────────────────────────────
export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all')

  const frontendSkills = SKILLS.filter(s => s.category === 'frontend')
  const backendSkills  = SKILLS.filter(s => s.category === 'backend')
  const toolsSkills    = SKILLS.filter(s => s.category === 'tools')

  const filteredSkills = activeCategory === 'all' 
    ? SKILLS 
    : SKILLS.filter(s => s.category === activeCategory)

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <div className="container-max">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full
            bg-primary-50 dark:bg-primary-900/30
            border border-primary-200 dark:border-primary-800/50
            text-primary-600 dark:text-primary-400
            text-sm font-bold mb-4">
            <HiCode className="text-base" />
            Abilities
          </span>
          <h2 className="section-title">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
        </motion.div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map(cat => {
            const isActive = activeCategory === cat.id
            return (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.96 }}
                className={`relative flex items-center gap-2 px-6 py-3 rounded-2xl
                  text-sm font-bold transition-all duration-300 overflow-hidden
                  ${isActive
                    ? 'text-white shadow-lg shadow-primary-500/25'
                    : 'text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="tab-bg"
                    className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-600 -z-0"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <cat.icon className={`text-base relative z-10 ${isActive ? 'text-white' : ''}`} />
                <span className="relative z-10">{cat.label}</span>
              </motion.button>
            )
          })}
        </div>

        {/* Dynamic Content */}
        <AnimatePresence mode="wait">
          {activeCategory === 'all' ? (
            <motion.div
              key="all-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <SkillCategory title="Frontend" number="0 1" skills={frontendSkills} delay={0.1} />
              <SkillCategory title="Backend"  number="0 2" skills={backendSkills}  delay={0.2} />
              <SkillCategory title="Tools"    number="0 3" skills={toolsSkills}    delay={0.3} />
            </motion.div>
          ) : (
            <motion.div
              key="filtered-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {filteredSkills.map((skill, i) => (
                <SkillItem key={skill.name} skill={skill} delay={i * 0.05} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          
        </motion.div>
      </div>
    </section>
  )
}