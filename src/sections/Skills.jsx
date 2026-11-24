
import { useState } from 'react'
import { motion } from 'framer-motion'
import { CATEGORIES, SKILLS, LEARNING_NOW } from '../data/sikllsData'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
      delay: i * 0.08,
    },
  }),
}

const viewport = { once: true, amount: 0.15 }


function SkillCard({ children, className = '', index = 0 }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={`glass-card group relative overflow-hidden p-6 sm:p-7 ${className}`}
    >
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}


function SkillChip({ skill }) {
  const Icon = skill.icon

  return (
    <li className="tech-pill group/chip cursor-default transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--surface-elevated)]">
      <Icon
        aria-hidden="true"
        className="shrink-0 text-base transition-transform duration-200 group-hover/chip:scale-110"
        style={{ color: skill.color }}
      />
      <span>{skill.name}</span>
    </li>
  )
}

export default function Skills() {
  const [active, setActive] = useState(
    CATEGORIES[0]?.id || ''
  )

  return (
    <section id="skills" className="section-padding">
      <div className="container-max">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-10 sm:mb-14"
        >
          <span className="section-eyebrow">Skills</span>

          <h2 className="section-title max-w-2xl">
            The tools I use to build full-stack applications.
          </h2>
        </motion.div>

        {/* Mobile tabs */}
        <div
          role="tablist"
          aria-label="Skill categories"
          className="mb-6 flex border-b border-[var(--border)] lg:hidden"
        >
          {CATEGORIES.map((cat) => {
            const isActive = active === cat.id

            const count = SKILLS.filter(
              (s) => s.category === cat.id
            ).length

            return (
              <button
                key={cat.id}
                id={`skill-tab-${cat.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`skill-panel-${cat.id}`}
                onClick={() => setActive(cat.id)}
                className={`relative flex-1 py-3 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] ${isActive
                  ? 'text-[var(--text-primary)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                  }`}
              >
                {cat.label}

                <span className="ml-1.5 font-mono text-[11px] text-[var(--text-muted)]">
                  {count}
                </span>

                {isActive && (
                  <motion.span
                    layoutId="skill-tab-indicator"
                    className="absolute inset-x-0 -bottom-px h-px bg-[var(--accent)]"
                  />
                )}
              </button>
            )
          })}
        </div>


        {/* Skill categories */}
        <div className="grid items-stretch gap-4 lg:grid-cols-3">
          {CATEGORIES.map((cat, i) => {
            const items = SKILLS.filter(
              (skill) => skill.category === cat.id
            )

            const isActive = active === cat.id

            return (
              <SkillCard
                key={cat.id}
                index={i}
                className={`${isActive ? 'block' : 'hidden'} lg:block`}
              >
                {/* Card header */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[var(--accent)]">
                      0{i + 1}
                    </span>

                    <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                      {cat.label}
                    </h3>
                  </div>

                  <span className="font-mono text-xs text-[var(--text-muted)]">
                    {String(items.length).padStart(2, '0')}
                  </span>
                </div>

                <div className="mb-5 h-px bg-[var(--border)]" />

                {/* Desktop: show all skills, Mobile: show active category */}
                <ul
                  className="flex flex-wrap gap-2"
                  aria-label={`${cat.label} skills`}
                >
                  {items.map((skill) => (
                    <SkillChip key={skill.name} skill={skill} />
                  ))}
                </ul>
              </SkillCard>
            )
          })}
        </div>


        {/* Currently learning */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="glass-card mt-5 p-6 sm:p-7"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            {/* Section heading */}
            <div className="shrink-0">
              <h3 className="text-base font-semibold text-[var(--text-primary)]">
                Currently Learning
              </h3>
              <p className="mt-1 text-sm text-[var(--text-muted)]">
                Technologies I'm currently exploring.
              </p>
            </div>

            {/* Technologies */}
            <ul className="flex flex-wrap gap-2">
              {LEARNING_NOW.map((item) => {
                const Icon = item.icon

                return (
                  <li
                    key={item.name}
                    className="tech-pill transition-colors duration-200 hover:border-[var(--accent)]"
                  >
                    <Icon
                      aria-hidden="true"
                      className="text-base"
                      style={{ color: item.color || 'var(--accent)' }}
                    />
                    <span>{item.name}</span>
                  </li>
                )
              })}
            </ul>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
