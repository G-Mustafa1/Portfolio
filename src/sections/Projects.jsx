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
import { FILTERS, PROJECTS, TECH_ICONS } from '../data/projectData'


// ── Tech pill
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
  const [isDescExpanded, setIsDescExpanded] = useState(false)
  const [isTechExpanded, setIsTechExpanded] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.07, ease: 'easeOut' }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative glass-card rounded-2xl overflow-hidden
        hover:shadow-2xl transition-all duration-500
        flex flex-col"
    >
      {/* Card top — Project Image */}
      <div className="relative h-48 overflow-hidden group/img">
        <motion.img
          src={project.image}
          alt={project.title}
          animate={{
            scale: hovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="w-full h-full object-cover"
        />

        {/* Overlay gradient for badge readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

        {/* Project emoji icon badge */}
  
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
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm
                flex items-center justify-center gap-4 z-20"
            >
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
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
                  animate={{ scale: 1, opacity: 1 }}
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
          <div className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            {isDescExpanded ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {project.longDesc || project.description}
                <button
                  onClick={() => setIsDescExpanded(false)}
                  className="text-primary-500 dark:text-primary-400 font-semibold ml-2 hover:underline focus:outline-none inline-flex items-center gap-0.5 cursor-pointer text-xs"
                >
                  Show Less
                </button>
              </motion.div>
            ) : (
              <div>
                <span>
                  {project.description.length > 110
                    ? `${project.description.slice(0, 110)}`
                    : project.description}
                </span>
                {project.description.length > 110 && (
                  <button
                    onClick={() => setIsDescExpanded(true)}
                    className="text-primary-500 dark:text-primary-400 font-extrabold hover:text-primary-600 dark:hover:text-primary-300 focus:outline-none ml-1 cursor-pointer transition-colors duration-150 inline-flex items-center"
                    title="Read More"
                  >
                    ...
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5 items-center">
          {(isTechExpanded ? project.tech : project.tech.slice(0, 4)).map(t => (
            <TechPill key={t} name={t} />
          ))}
          {project.tech.length > 4 && (
            <button
              onClick={() => setIsTechExpanded(!isTechExpanded)}
              className={`text-xs px-2.5 py-1 rounded-lg font-medium border cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 ${
                isTechExpanded
                  ? 'bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 border-red-200 dark:border-red-900/50 hover:bg-red-100 dark:hover:bg-red-950/50'
                  : 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 border-primary-200 dark:border-primary-800/50 hover:bg-primary-100 dark:hover:bg-primary-900/50'
              }`}
            >
              {isTechExpanded ? 'Show Less' : `+${project.tech.length - 4} more`}
            </button>
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
                bg-gradient-to-br from-primary-500  to-accent-500
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
                    className="absolute inset-0 bg-gradient-to-br from-primary-500  to-accent-500"
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
      </div>
    </section>
  )
}