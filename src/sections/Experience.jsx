
import { useRef } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from 'framer-motion'
import { EXPERIENCES } from '../data/experienceData'

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

function ExperienceItem({ item, index }) {
  return (
    <motion.li
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="relative grid gap-4 pb-10 pl-8 last:pb-0 sm:pl-10 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-10"
    >
      {/* Timeline dot */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-1.5 flex h-3 w-3 -translate-x-1/2 items-center justify-center"
      >
        {item.current && (
          <span className="absolute h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-40" />
        )}

        <span
          className={`relative h-3 w-3 rounded-full border-2 ${
            item.current
              ? 'border-[var(--accent)] bg-[var(--accent)]'
              : 'border-[var(--text-muted)] bg-[var(--page-bg)]'
          }`}
        />
      </span>

      {/* Date */}
      <div className="md:pt-1">
        <p className="font-mono text-sm font-medium text-[var(--text-primary)]">
          {item.period}
        </p>

        <p className="mt-1 text-xs text-[var(--text-muted)]">
          {item.meta}
        </p>
      </div>

      {/* Experience Card */}
      <article className="glass-card min-w-0 p-5 sm:p-7">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">
              {item.role}
            </h3>

            <p className="mt-1 text-sm font-medium text-[var(--accent)]">
              {item.company}
            </p>
          </div>

          {item.current && (
            <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--text-secondary)]">
              Present
            </span>
          )}
        </div>

        <ul className="mt-4">
          {item.points.map((point) => (
            <li
              key={point}
              className="flex gap-3 text-sm leading-7 text-[var(--text-secondary)]"
            >
              <span
                aria-hidden="true"
                className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
              />
              {point}
            </li>
          ))}
        </ul>

        {item.tech?.length > 0 && (
          <ul
            className="mt-6 flex flex-wrap gap-2"
            aria-label="Technologies used"
          >
            {item.tech.map((tech) => (
              <li key={tech} className="tech-pill !px-2.5 !py-1 font-mono !text-xs">
                {tech}
              </li>
            ))}
          </ul>
        )}
      </article>
    </motion.li>
  )
}

function ExperienceTimeline() {
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
      {/* Timeline background */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 top-0 w-px bg-[var(--border)]"
      />

      {/* Scroll animated timeline */}
      <motion.span
        aria-hidden="true"
        style={{ scaleY: reduceMotion ? 1 : fill }}
        className="absolute left-0 top-0 h-full w-px origin-top bg-[var(--accent)]"
      />

      <ol>
        {EXPERIENCES.map((item, index) => (
          <ExperienceItem
            key={item.id}
            item={item}
            index={index}
          />
        ))}
      </ol>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-max">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-12 sm:mb-14"
        >
          <span className="section-eyebrow">Experience</span>

          <h2 className="section-title max-w-2xl">
            Experience & Education
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
            My professional experience and technical training in full-stack development.
          </p>
        </motion.div>

        <ExperienceTimeline />

      </div>
    </section>
  )
}
