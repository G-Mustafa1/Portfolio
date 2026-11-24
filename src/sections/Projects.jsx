import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { HiExternalLink, HiArrowRight } from 'react-icons/hi'
import { FILTERS, PROJECTS, TECH_ICONS } from '../data/projectData'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 },
  }),
}

const viewport = { once: true, amount: 0.1 }
const MAX_TECH = 4
const MOBILE_COUNT = 3
const DESKTOP_COUNT = 6
const GITHUB_PROFILE = 'https://github.com/G-Mustafa1'

const hasLink = (url) => Boolean(url) && url !== '#'


function TechPill({ name }) {
  const Icon = TECH_ICONS[name]?.icon
  const color = TECH_ICONS[name]?.color

  return (
    <li className="tech-pill group !px-2.5 !py-1.5 !text-xs">
      {Icon && (
        <Icon
          aria-hidden="true"
          className="shrink-0 text-sm transition-transform duration-200 group-hover:scale-110"
          style={{ color: color || 'var(--text-muted)' }}
        />
      )}
      <span>{name}</span>
    </li>
  )
}


function ProjectCard({ project, index, hiddenOnMobile }) {
  const [showDescription, setShowDescription] = useState(false)
  const [showAllTech, setShowAllTech] = useState(false)
  const categoryLabel = project.category === 'fullstack' ? 'Full Stack' : 'Front-End'

  return (
    <motion.article
      custom={Math.min(index, 3)}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={`${hiddenOnMobile ? 'hidden sm:flex' : 'flex'} glass-card group flex-col overflow-hidden`}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--border)] bg-[var(--surface-elevated)]">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            width="800"
            height="500"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
          />
        ) : (
          <div className="flex h-full items-center justify-center font-mono text-sm text-[var(--text-muted)]">
            {project.title}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-3 font-mono text-xs">
          <span className="text-[var(--text-muted)]">{categoryLabel}</span>
          {project.featured && (
            <span className="inline-flex items-center gap-1.5 text-[var(--accent)]">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
              />
              Featured
            </span>
          )}
        </div>

        <h3 className="text-lg font-semibold leading-snug text-[var(--text-primary)]">
          {project.title}
        </h3>

        <div>
          <p
            className={`mt-2 text-sm leading-6 text-[var(--text-secondary)] ${showDescription ? '' : 'line-clamp-3'
              }`}
          >
            {project.longDesc || project.description}
          </p>

          {(project.longDesc || project.description || '').length > 150 && (
            <button
              type="button"
              onClick={() => setShowDescription((prev) => !prev)}
              aria-expanded={showDescription}
              className="mt-2 text-xs font-semibold text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]"
            >
              {showDescription ? 'Read less' : 'Read more'}
            </button>
          )}
        </div>

        <ul
          className="mt-5 flex flex-wrap gap-1.5"
          aria-label="Technologies used"
        >
          {(showAllTech ? project.tech : project.tech.slice(0, MAX_TECH))
            .map((t) => (
              <TechPill key={t} name={t} />
            ))}

          {project.tech.length > MAX_TECH && (
            <li>
              <button
                type="button"
                onClick={() => setShowAllTech(prev => !prev)}
                className="tech-pill !px-2 !py-1 !text-xs cursor-pointer"
              >
                {showAllTech
                  ? 'Show less'
                  : `+${project.tech.length - MAX_TECH}`}
              </button>
            </li>
          )}
        </ul>


        {/* Links */}
        <div className="mt-auto pt-6">
          <div className="flex items-center gap-5 border-t border-[var(--border)] pt-4">
            {hasLink(project.github) && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} source code on GitHub`}
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
              >
                <FaGithub aria-hidden="true" />
                Code
              </a>
            )}

            {hasLink(project.live) ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]"
              >
                Live demo
                <HiExternalLink aria-hidden="true" />
              </a>
            ) : (
              <span className="text-sm text-[var(--text-muted)]">
                Live demo coming soon
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [expanded, setExpanded] = useState(false)

  const matches = (project, id) =>
    id === 'all'
      ? true
      : id === 'featured'
        ? project.featured
        : project.category === id

  const filtered = PROJECTS.filter((p) => matches(p, activeFilter))
  const visible = expanded ? filtered : filtered.filter((_, i) => i < DESKTOP_COUNT)
  const changeFilter = (id) => {
    setActiveFilter(id)
    setExpanded(false)
  }

  return (
    <section id="projects" className="section-padding section-tint">
      <div className="container-max">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-10 sm:mb-14"
        >
          <span className="section-eyebrow">Projects</span>
          <h2 className="section-title max-w-2xl">
            Selected work, from full-stack apps to polished interfaces.
          </h2>
        </motion.div>

        {/* Filters */}
        <div className="mb-10 overflow-x-auto">
          <div
            role="group"
            aria-label="Project filters"
            className="flex w-max min-w-full gap-6 border-b border-[var(--border)]"
          >
            {FILTERS.map((f) => {
              const isActive = activeFilter === f.id
              const count = PROJECTS.filter((p) => matches(p, f.id)).length
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => changeFilter(f.id)}
                  aria-pressed={isActive}
                  className={`relative shrink-0 whitespace-nowrap pb-3 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] ${isActive
                    ? 'text-[var(--text-primary)]'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                    }`}
                >
                  {f.label}
                  <span className="ml-1.5 font-mono text-[11px] text-[var(--text-muted)]">
                    {count}
                  </span>
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 -bottom-px h-px bg-[var(--accent)]"
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div key={activeFilter} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                hiddenOnMobile={!expanded && i >= MOBILE_COUNT}
              />
            ))}
          </div>
        ) : (
          <p className="py-16 text-center text-sm text-[var(--text-muted)]">
            No projects in this category yet.
          </p>
        )}

        {/* Show all */}

        {filtered.length > MOBILE_COUNT && (
          <div
            className={`mt-8 flex justify-center ${filtered.length <= DESKTOP_COUNT ? 'sm:hidden' : ''
              }`}
          >
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className="btn-secondary"
            >
              {expanded ? 'Show less projects' : 'Show all projects'}
            </button>
          </div>
        )}


        {/* GitHub link */}
        <div className="mt-12 flex sm:justify-center">
          <a
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
          >
            <FaGithub aria-hidden="true" />
            More on GitHub
            <HiArrowRight
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  )
}