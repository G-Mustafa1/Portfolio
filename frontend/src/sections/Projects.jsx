import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from 'react-icons/fa'
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiNextdotjs,
  SiFirebase,
  SiRedux,
  SiJsonwebtokens,
  SiBootstrap,
} from 'react-icons/si'
import {
  HiCode,
  HiFilter,
  HiStar,
  HiEye,
  HiExternalLink,
  HiSparkles,
} from 'react-icons/hi'

// ── Tech icon map ──────────────────────────────────────────────────────────
const TECH_ICONS = {
  'React':       { icon: FaReact,       color: 'text-cyan-500'   },
  'Node.js':     { icon: FaNodeJs,      color: 'text-green-600'  },
  'MongoDB':     { icon: SiMongodb,     color: 'text-green-500'  },
  'Express':     { icon: SiExpress,     color: 'text-gray-600 dark:text-gray-400' },
  'Tailwind':    { icon: SiTailwindcss, color: 'text-cyan-400'   },
  'Next.js':     { icon: SiNextdotjs,   color: 'text-gray-800 dark:text-gray-200' },
  'Firebase':    { icon: SiFirebase,    color: 'text-orange-400' },
  'Redux':       { icon: SiRedux,       color: 'text-purple-500' },
  'JWT':         { icon: SiJsonwebtokens, color: 'text-pink-500' },
  'HTML':        { icon: FaHtml5,       color: 'text-orange-500' },
  'CSS':         { icon: FaCss3Alt,     color: 'text-blue-500'   },
  'JavaScript':  { icon: FaJs,          color: 'text-yellow-500' },
  'Bootstrap':   { icon: SiBootstrap,   color: 'text-purple-600' },
}

// ── Project data ───────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id:          1,
    title:       'Near Sign-Up',
    description: 'A full-stack component of many web applications, providing users with access to personalized services. Built for mobile accounts. Features include form validation, authentication flow, and a clean responsive UI.',
    longDesc:    'A production-ready sign-up flow with email verification, form validation with real-time feedback, password strength indicator, and seamless UX. Integrated with backend APIs for account creation.',
    tech:        ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Tailwind'],
    github:      'https://github.com/G-Mustafa1',
    live:        '#',
    category:    'fullstack',
    stars:       3,
    gradient:    'from-primary-500 via-purple-500 to-pink-500',
    bgGlow:      'from-primary-500/20 to-purple-500/20',
    featured:    true,
    icon:        '🔐',
  },
  {
    id:          2,
    title:       'Todo List App',
    description: 'A clean, minimal task management application with CRUD operations, local persistence, and a beautiful UI. Supports task prioritization and filtering.',
    longDesc:    'Fully featured todo app with drag-and-drop reordering, task categories, due dates, and local storage persistence. Smooth animations on add/remove actions.',
    tech:        ['React', 'Tailwind', 'JavaScript'],
    github:      'https://github.com/G-Mustafa1',
    live:        '#',
    category:    'frontend',
    stars:       2,
    gradient:    'from-cyan-500 via-blue-500 to-indigo-500',
    bgGlow:      'from-cyan-500/20 to-blue-500/20',
    featured:    false,
    icon:        '✅',
  },
  {
    id:          3,
    title:       'Hi August Countdown',
    description: 'An elegant countdown timer app featuring animated countdown displays, custom event setup, and real-time date/time tracking with a visually appealing interface.',
    longDesc:    'Beautiful countdown timer with animated flip cards, multiple event support, confetti on completion, and timezone awareness. Fully responsive with dark mode.',
    tech:        ['HTML', 'CSS', 'JavaScript'],
    github:      'https://github.com/G-Mustafa1',
    live:        '#',
    category:    'frontend',
    stars:       1,
    gradient:    'from-amber-400 via-orange-500 to-rose-500',
    bgGlow:      'from-amber-400/20 to-orange-500/20',
    featured:    false,
    icon:        '⏰',
  },
  {
    id:          4,
    title:       'G-Mustafa1 Portfolio',
    description: 'Personal GitHub profile README with animated stats, language breakdowns, trophy showcase, and contribution graphs. A creative developer identity page.',
    longDesc:    'A fully designed GitHub profile README featuring dynamic stats cards, language pie charts, GitHub trophies, streak counters, and a professional bio layout.',
    tech:        ['HTML', 'CSS', 'JavaScript'],
    github:      'https://github.com/G-Mustafa1',
    live:        'https://github.com/G-Mustafa1',
    category:    'frontend',
    stars:       5,
    gradient:    'from-green-400 via-emerald-500 to-teal-500',
    bgGlow:      'from-green-400/20 to-emerald-500/20',
    featured:    true,
    icon:        '🧑‍💻',
  },
  {
    id:          5,
    title:       'MERN Auth System',
    description: 'A complete authentication system with JWT tokens, refresh token rotation, protected routes, role-based access control, and a polished login/register UI.',
    longDesc:    'Enterprise-grade auth system with access tokens, refresh tokens, email verification, password reset via email, rate limiting, and role-based route guards.',
    tech:        ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Tailwind'],
    github:      'https://github.com/G-Mustafa1',
    live:        '#',
    category:    'fullstack',
    stars:       4,
    gradient:    'from-violet-500 via-purple-600 to-indigo-600',
    bgGlow:      'from-violet-500/20 to-purple-600/20',
    featured:    true,
    icon:        '🔑',
  },
  {
    id:          6,
    title:       'Static Pages UI Kit',
    description: 'A collection of beautifully designed, fully responsive static web pages and UI components built with HTML, CSS, and vanilla JavaScript — ready to use.',
    longDesc:    'A growing library of static pages including landing pages, pricing tables, hero sections, feature grids, and testimonial layouts — all pixel-perfect and mobile-first.',
    tech:        ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    github:      'https://github.com/G-Mustafa1',
    live:        '#',
    category:    'frontend',
    stars:       11,
    gradient:    'from-rose-400 via-pink-500 to-fuchsia-500',
    bgGlow:      'from-rose-400/20 to-pink-500/20',
    featured:    false,
    icon:        '🎨',
  },
]

const FILTERS = [
  { id: 'all',      label: 'All Projects' },
  { id: 'featured', label: 'Featured'     },
  { id: 'fullstack',label: 'Full Stack'   },
  { id: 'frontend', label: 'Front-End'    },
]

// ── Tech pill ──────────────────────────────────────────────────────────────
function TechPill({ name }) {
  const tech = TECH_ICONS[name]
  if (!tech) {
    return (
      <span className="text-xs px-2 py-1 rounded-lg
        bg-gray-100 dark:bg-gray-800
        text-gray-600 dark:text-gray-400
        border border-gray-200 dark:border-gray-700 font-medium">
        {name}
      </span>
    )
  }
  const { icon: Icon, color } = tech
  return (
    <span className="flex items-center gap-1 text-xs px-2 py-1 rounded-lg
      bg-gray-100 dark:bg-gray-800
      text-gray-600 dark:text-gray-400
      border border-gray-200 dark:border-gray-700
      font-medium hover:border-primary-300 dark:hover:border-primary-700
      transition-colors duration-200">
      <Icon className={`text-sm ${color}`} />
      {name}
    </span>
  )
}

// ── Project card ───────────────────────────────────────────────────────────
function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0  }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.07, ease: 'easeOut' }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={()   => setHovered(false)}
      className="group relative glass-card rounded-2xl overflow-hidden
        hover:shadow-2xl transition-all duration-500
        flex flex-col"
    >
      {/* Card top — gradient banner */}
      <div className={`relative h-44 bg-gradient-to-br ${project.gradient}
        flex items-center justify-center overflow-hidden`}>

        {/* Animated background glow orbs */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGlow}
          opacity-60`} />
        <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full
          bg-white/10 blur-2xl" />
        <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full
          bg-white/10 blur-2xl" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(white 1px, transparent 1px),
              linear-gradient(90deg, white 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Project emoji icon */}
        <motion.div
          animate={{ scale: hovered ? 1.15 : 1, rotate: hovered ? 5 : 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 text-6xl select-none filter drop-shadow-lg"
        >
          {project.icon}
        </motion.div>

        {/* Featured badge */}
        {project.featured && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute top-3 right-3 flex items-center gap-1
              px-2.5 py-1 rounded-full
              bg-white/20 backdrop-blur-sm
              border border-white/30
              text-white text-xs font-medium"
          >
            <HiSparkles className="text-yellow-300 text-xs" />
            Featured
          </motion.div>
        )}

        {/* Stars */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1
          px-2.5 py-1 rounded-full
          bg-black/20 backdrop-blur-sm
          border border-white/20
          text-white text-xs font-medium">
          <HiStar className="text-yellow-300 text-xs" />
          {project.stars}
        </div>

        {/* Category tag */}
        <div className="absolute bottom-3 right-3
          px-2.5 py-1 rounded-full
          bg-black/20 backdrop-blur-sm
          border border-white/20
          text-white text-xs font-medium capitalize">
          {project.category === 'fullstack' ? 'Full Stack' : 'Front-End'}
        </div>

        {/* Hover overlay with quick links */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{    opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm
                flex items-center justify-center gap-4 z-20"
            >
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1,   opacity: 1 }}
                transition={{ delay: 0.05 }}
                onClick={e => e.stopPropagation()}
                className="flex items-center gap-2 px-4 py-2 rounded-xl
                  bg-white/90 text-gray-900
                  text-sm font-medium
                  hover:bg-white transition-colors duration-200
                  shadow-lg"
              >
                <FaGithub className="text-base" />
                Code
              </motion.a>
              {project.live !== '#' && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1,   opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  onClick={e => e.stopPropagation()}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl
                    bg-white/20 backdrop-blur-sm
                    border border-white/40
                    text-white text-sm font-medium
                    hover:bg-white/30 transition-colors duration-200"
                >
                  <HiEye className="text-base" />
                  Live
                </motion.a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5 gap-4">
        {/* Title */}
        <div>
          <h3 className="font-bold text-base text-gray-800 dark:text-gray-100
            group-hover:text-primary-600 dark:group-hover:text-primary-400
            transition-colors duration-200 mb-1 leading-snug">
            {project.title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed
            line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map(t => (
            <TechPill key={t} name={t} />
          ))}
          {project.tech.length > 4 && (
            <span className="text-xs px-2 py-1 rounded-lg
              bg-primary-50 dark:bg-primary-900/30
              text-primary-600 dark:text-primary-400
              border border-primary-200 dark:border-primary-800/50 font-medium">
              +{project.tech.length - 4} more
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 mt-auto pt-1
          border-t border-gray-100 dark:border-gray-800">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2
              py-2 rounded-xl text-sm font-medium
              text-gray-700 dark:text-gray-300
              bg-gray-100 dark:bg-gray-800
              hover:bg-gray-200 dark:hover:bg-gray-700
              transition-colors duration-200"
          >
            <FaGithub className="text-base" />
            GitHub
          </a>
          {project.live !== '#' ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2
                py-2 rounded-xl text-sm font-medium
                text-white
                bg-gradient-to-r from-primary-500 to-purple-600
                hover:opacity-90 transition-opacity duration-200
                shadow-md shadow-primary-500/25"
            >
              <FaExternalLinkAlt className="text-xs" />
              Live Demo
            </a>
          ) : (
            <span
              className="flex-1 flex items-center justify-center gap-2
                py-2 rounded-xl text-sm font-medium
                text-gray-400 dark:text-gray-600
                bg-gray-50 dark:bg-gray-900
                border border-dashed border-gray-200 dark:border-gray-800
                cursor-not-allowed select-none"
            >
              <HiExternalLink className="text-xs" />
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

// ── GitHub CTA banner ──────────────────────────────────────────────────────
function GitHubBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-16 relative overflow-hidden rounded-3xl
        bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
        dark:from-gray-800 dark:via-gray-900 dark:to-black
        border border-gray-700/50 p-8 sm:p-10"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72
        bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56
        bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(white 1px, transparent 1px),
            linear-gradient(90deg, white 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 flex flex-col sm:flex-row
        items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start
            gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-white/10
              flex items-center justify-center">
              <FaGithub className="text-white text-xl" />
            </div>
            <span className="text-white font-bold text-lg">
              More on GitHub
            </span>
          </div>
          <p className="text-gray-400 text-sm max-w-md leading-relaxed">
            Explore all my repositories, open-source contributions, and daily
            coding activity. With{' '}
            <span className="text-primary-400 font-medium">701 contributions</span>{' '}
            in the last year and growing.
          </p>
          {/* Mini stats */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start
            gap-4 mt-4">
            {[
              { label: 'Repositories', value: '10+' },
              { label: 'Stars Earned',  value: '548' },
              { label: 'Followers',     value: '383' },
            ].map(s => (
              <div key={s.label} className="flex flex-col items-center sm:items-start">
                <span className="text-white font-bold text-base">{s.value}</span>
                <span className="text-gray-500 text-xs">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <motion.a
          href="https://github.com/G-Mustafa1"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{  scale: 0.97 }}
          className="flex-shrink-0 flex items-center gap-2
            px-7 py-3.5 rounded-xl
            bg-white text-gray-900
            font-semibold text-sm
            hover:bg-gray-100
            transition-colors duration-200
            shadow-xl shadow-black/20"
        >
          <FaGithub className="text-lg" />
          Visit GitHub Profile
        </motion.a>
      </div>
    </motion.div>
  )
}

// ── Main Projects ──────────────────────────────────────────────────────────
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all'
    ? PROJECTS
    : activeFilter === 'featured'
      ? PROJECTS.filter(p => p.featured)
      : PROJECTS.filter(p => p.category === activeFilter)

  return (
    <section
      id="projects"
      className="section-padding bg-gray-50/50 dark:bg-gray-900/50"
    >
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
            text-sm font-medium mb-4">
            <HiCode className="text-base" />
            My Work
          </span>
          <h2 className="section-title">
            Featured{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of projects I've built — from full-stack applications to
            polished front-end experiences.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {FILTERS.map(f => {
            const isActive = activeFilter === f.id
            const count = f.id === 'all'
              ? PROJECTS.length
              : f.id === 'featured'
                ? PROJECTS.filter(p => p.featured).length
                : PROJECTS.filter(p => p.category === f.id).length

            return (
              <motion.button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.96 }}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl
                  text-sm font-medium transition-all duration-300 overflow-hidden
                  ${isActive
                    ? 'text-white shadow-lg shadow-primary-500/25'
                    : 'text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                  }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="project-tab-bg"
                    className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-600"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <HiFilter className={`text-sm ${isActive ? 'text-white' : ''}`} />
                  {f.label}
                  <span className={`text-xs px-1.5 py-0.5 rounded-md font-mono
                    ${isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                    }`}>
                    {count}
                  </span>
                </span>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        <AnimatePresence>
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20 text-gray-400 dark:text-gray-500"
            >
              <HiCode className="text-5xl mx-auto mb-3 opacity-30" />
              <p className="text-sm">No projects in this category yet.</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* GitHub banner */}
        {/* <GitHubBanner /> */}
      </div>
    </section>
  )
}