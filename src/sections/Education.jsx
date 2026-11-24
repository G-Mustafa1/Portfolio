import { useRef } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from 'framer-motion'
import {
  HiAcademicCap,
  HiLocationMarker,
} from 'react-icons/hi'
import { EDUCATION, LEARNING_PATH } from '../data/experienceData'

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

/* Education Card */

function EducationItem({ item, index }) {
  return (
    <motion.li
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="relative pb-8 pl-8 last:pb-0 sm:pl-10"
    >
      {/* Timeline dot */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-2 flex h-3 w-3 -translate-x-1/2 items-center justify-center"
      >
        {item.current && (
          <span className="absolute h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-40" />
        )}
        <span
          className={`relative h-3 w-3 rounded-full border-2 bg-[var(--page-bg)] ${item.current
              ? 'border-[var(--accent)] bg-[var(--accent)]'
              : 'border-[var(--text-muted)]'
            }`}
        />
      </span>

      {/* Education Card */}
      <div
        className="glass-card relative overflow-hidden p-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-sm font-medium text-[var(--accent)]">
            {item.period}
          </p>

          {item.status && (
            <span className="rounded-full border border-[var(--border)] px-2.5 py-1 font-mono text-[11px] text-[var(--text-secondary)]">
              {item.status}
            </span>
          )}
        </div>

        <div className="mt-4 flex gap-4">
          <span
            aria-hidden="true"
            className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] text-xl text-[var(--accent)] sm:flex"
          >
            <HiAcademicCap />
          </span>

          <div className="min-w-0">
            <h3 className="text-lg font-semibold leading-snug text-[var(--text-primary)]">
              {item.title}
            </h3>

            <p className="mt-1.5 text-[15px] font-medium text-[var(--text-secondary)]">
              {item.institution}
            </p>

            {item.location && (
              <p className="mt-2 flex items-center gap-1.5 text-sm text-[var(--text-muted)]">
                <HiLocationMarker aria-hidden="true" />
                {item.location}
              </p>
            )}

            {item.description && (
              <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--text-secondary)]">
                {item.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.li>
  )
}

/* Education Timeline */

function EducationTimeline() {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 75%', 'end 65%'],
  })

  const fill = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  })

  return (
    <div ref={ref} className="relative ml-1.5">
      {/* Background line */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 top-0 w-px bg-[var(--border)]"
      />

      {/* Animated line */}
      <motion.span
        aria-hidden="true"
        style={{ scaleY: reduceMotion ? 1 : fill }}
        className="absolute left-0 top-0 h-full w-px origin-top bg-[var(--accent)]"
      />

      <ol>
        {EDUCATION.map((item, index) => (
          <EducationItem
            key={item.id}
            item={item}
            index={index}
          />
        ))}
      </ol>
    </div>
  )
}

/* Learning Path */

function LearningPath() {
  return (
    <motion.aside
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="glass-card h-fit p-5 lg:sticky lg:top-24"
    >
      <h3 className="mb-7 font-mono text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
        Learning path
      </h3>

      <ol>
        {LEARNING_PATH.map((step, index) => {
          const isLast = index === LEARNING_PATH.length - 1

          return (
            <motion.li
              key={step.id}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="relative flex gap-4 pb-8 last:pb-0"
            >
              {!isLast && (
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-4 top-8 w-px -translate-x-1/2 bg-[var(--border)]"
                />
              )}

              <span
                aria-hidden="true"
                className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-[var(--surface)] font-mono text-[11px] ${step.current
                    ? 'border-[var(--accent)] text-[var(--accent)]'
                    : 'border-[var(--border)] text-[var(--text-muted)]'
                  }`}
              >
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="min-w-0 pt-0.5">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-mono text-xs text-[var(--text-muted)]">
                    {step.period}
                  </p>

                  {step.current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] px-2 py-0.5 font-mono text-[10px] text-[var(--text-secondary)]">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--accent)]" />
                      Learning now
                    </span>
                  )}
                </div>

                <h4 className="mt-1 text-[15px] font-semibold leading-snug text-[var(--text-primary)]">
                  {step.title}
                </h4>

                <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
                  {step.place}
                </p>
              </div>
            </motion.li>
          )
        })}
      </ol>
    </motion.aside>
  )
}

/* Main Section */

export default function Education() {
  return (
    <section id="education" className="section-padding section-tint">
      <div className="container-max">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-12 sm:mb-16"
        >
          <span className="section-eyebrow">
            Education
          </span>

          <h2 className="section-title max-w-2xl">
            Academic background and how I learned to build.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--text-secondary)]">
            My academic journey and continuous learning
            experiences that shape my development skills.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid items-start gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-16">

          {/* Education Timeline */}
          <div>
            <EducationTimeline />
          </div>

          {/* Learning Path */}
          <div>
            <LearningPath />
          </div>

        </div>
      </div>
    </section>
  )
}