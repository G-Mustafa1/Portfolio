import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useTypewriter } from '../hooks/useTypewriter'
import { ROLES } from '../data/heroData'
import { HeroAvatar } from '../components/hero/HeroAvatar'
import HeroButtons from '../components/hero/HeroButtons'
import TechMarquee from '../components/hero/TechMarquee'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}


export default function Hero() {
  const role = useTypewriter(ROLES, 75, 2000)
  const sectionRef = useRef(null)

  const handlePointerMove = (e) => {
    const el = sectionRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--hx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--hy', `${e.clientY - rect.top}px`)
  }

  return (
    <motion.section
      id="hero"
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden"
    >
      {/* Background: dot-grid, mouse spotlight, 2 dheemi orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="hero-dots absolute inset-0" />
        <div className="hero-spotlight absolute inset-0 hidden md:block" />
        <div className="hero-orb -top-48 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2" />
        <div className="hero-orb hero-orb--slow -bottom-56 -right-40 h-[32rem] w-[32rem] opacity-70" />
      </div>

      {/* Content */}
      <div className="section-padding flex flex-1 items-center pt-28 lg:pt-24">
        <div className="container-max w-full">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            {/* Left: text */}
            <div className="flex flex-col items-start">
              {/* Status pill */}
              <motion.span
                variants={itemVariants}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 font-mono text-xs text-[var(--text-secondary)]"
              >
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
                />
                Full Stack Developer
              </motion.span>

              {/* Headline: masked line reveal */}
              <motion.h1
                variants={itemVariants}
                className="mb-4 text-5xl font-semibold leading-[1.05] tracking-tight text-[var(--text-primary)] sm:text-6xl lg:text-7xl"
              >
                <span className="block text-[var(--text-muted)]">Hi, I’m</span>
                Ghulam Mustafa
              </motion.h1>

              {/* Typewriter role */}
              <motion.div
                variants={itemVariants}
                className="mb-6 flex min-h-9 items-center gap-1 font-mono text-lg sm:text-xl"
              >
                <span className="sr-only">Full Stack Developer</span>
                <span aria-hidden="true" className="text-[var(--accent)]">
                  {'>'}
                </span>
                <span aria-hidden="true" className="ml-2 text-[var(--text-primary)]">
                  {role}
                </span>
                <motion.span
                  aria-hidden="true"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="inline-block h-5 w-[2px] bg-[var(--accent)]"
                />
              </motion.div>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="mb-8 max-w-xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg sm:leading-8"
              >
                I’m a Full Stack Developer building responsive web applications,
                from user-friendly interfaces to backend APIs using the MERN stack.
              </motion.p>

              {/* Buttons */}
              <motion.div variants={itemVariants}>
                <HeroButtons />
              </motion.div>
            </div>

            {/* Right: avatar */}
            <motion.div
              variants={itemVariants}
              className="relative flex items-center justify-center"
            >
              <HeroAvatar />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Tech marquee */}
      <motion.div variants={itemVariants} className="pb-8 sm:pb-10">
        <TechMarquee />
      </motion.div>
    </motion.section>
  )
}