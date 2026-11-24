
import { motion } from 'framer-motion'
import {
  HiArrowRight,
  HiLocationMarker,
  HiBriefcase,
} from 'react-icons/hi'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const viewport = { once: true, amount: 0.15 }

const TECH_STACK = [
  'JavaScript',
  'TypeScript',
  'React.js',
  'Next.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Redux Toolkit',
  'Tailwind CSS',
  'REST APIs',
  'Git & GitHub',
  'Firebase',
]

function InfoCard({ icon: Icon, label, value }) {
  return (
    <div className="glass-card flex items-center gap-4 p-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--accent)]">
        <Icon className="text-xl" aria-hidden="true" />
      </span>

      <div>
        <p className="text-xs text-[var(--text-muted)]">
          {label}
        </p>
        <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
          {value}
        </p>
      </div>
    </div>
  )
}

export default function About() {
  const scrollToContact = (e) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <section id="about" className="section-padding section-tint">
      <div className="container-max">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-10 sm:mb-14"
        >
          <span className="section-eyebrow">About Me</span>

          <h2 className="section-title max-w-2xl">
            A little about me and what I do.
          </h2>
        </motion.div>

        {/* Main Cards */}
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Introduction */}
          <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="glass-card flex flex-col p-6 sm:p-8"
          >
            <p className="mb-5 font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
              Introduction
            </p>

            <h3 className="mb-4 text-xl font-semibold text-[var(--text-primary)]">
              Ghulam Mustafa
            </h3>

            <div className="max-w-2xl space-y-4 text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
              <p>
                I'm a Full Stack Developer based in Karachi,
                Pakistan, specializing in the MERN stack. I build
                responsive web applications with modern frontend
                interfaces and reliable backend functionality.
              </p>

              <p>
                My work includes developing REST APIs, implementing
                authentication, managing databases and integrating
                third-party services. I've also contributed to
                collaborative projects involving AI integration
                and real-time features.
              </p>
            </div>

            <a
              href="#contact"
              onClick={scrollToContact}
              className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]"
            >
              Get in touch
              <HiArrowRight aria-hidden="true" />
            </a>
          </motion.article>

          {/* Technologies */}
          <motion.aside
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="glass-card p-6 sm:p-8"
          >
            <p className="mb-5 font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
              Technical Skills
            </p>

            <h3 className="mb-5 text-lg font-semibold text-[var(--text-primary)]">
              Technologies I work with
            </h3>

            <ul className="flex flex-wrap gap-2">
              {TECH_STACK.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </motion.aside>
        </div>

        {/* Quick Information */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-5 grid gap-4 sm:grid-cols-2"
        >
          <InfoCard
            icon={HiBriefcase}
            label="Specialization"
            value="Full Stack Development · MERN"
          />

          <InfoCard
            icon={HiLocationMarker}
            label="Location"
            value="Karachi, Pakistan"
          />
        </motion.div>

      </div>
    </section>
  )
}
