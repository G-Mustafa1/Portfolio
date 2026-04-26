import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  HiArrowDown,
  HiDownload,
  HiMail,
} from 'react-icons/hi'
import {
  FaGithub,
  FaLinkedinIn,
  FaReact,
  FaNodeJs,
} from 'react-icons/fa'
import {
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
} from 'react-icons/si'

// ── Typing animation hook ──────────────────────────────────────────────────
function useTypewriter(words, speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState('')
  const [wordIdx,   setWordIdx]   = useState(0)
  const [charIdx,   setCharIdx]   = useState(0)
  const [deleting,  setDeleting]  = useState(false)

  useEffect(() => {
    const current = words[wordIdx]

    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayed(current.slice(0, charIdx + 1))
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause)
        } else {
          setCharIdx(c => c + 1)
        }
      } else {
        setDisplayed(current.slice(0, charIdx - 1))
        if (charIdx - 1 === 0) {
          setDeleting(false)
          setWordIdx(w => (w + 1) % words.length)
          setCharIdx(0)
        } else {
          setCharIdx(c => c - 1)
        }
      }
    }, deleting ? speed / 2 : speed)

    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return displayed
}

// ── Floating tech badge ────────────────────────────────────────────────────
function FloatingBadge({ icon: Icon, label, color, className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, type: 'spring', bounce: 0.4 }}
      className={`absolute flex items-center gap-2 px-3 py-2 rounded-xl
        glass-card text-xs font-medium whitespace-nowrap
        shadow-lg pointer-events-none select-none
        ${className}`}
      style={{
        animation: `float ${3.5 + delay}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      <Icon className={`text-base ${color}`} />
      <span className="text-gray-700 dark:text-gray-300">{label}</span>
    </motion.div>
  )
}

// ── Avatar component ───────────────────────────────────────────────────────
function Avatar() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
      className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto"
    >
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400 via-purple-500 to-accent-400
        opacity-20 dark:opacity-30 blur-2xl scale-110" />

      {/* Spinning dashed ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-full border-2 border-dashed border-primary-300/50 dark:border-primary-600/50"
        style={{ margin: '-8px' }}
      />

      {/* Gradient border */}
      <div className="absolute inset-0 rounded-full p-1
        bg-gradient-to-br from-primary-400 via-purple-500 to-accent-400">
        <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 p-1">
          {/* Avatar initials fallback — styled as a professional avatar */}
          <div className="w-full h-full rounded-full
            bg-gradient-to-br from-primary-500 via-purple-600 to-accent-500
            flex flex-col items-center justify-center
            text-white select-none overflow-hidden relative">

            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute border border-white rounded-full"
                  style={{
                    width:  `${40 + i * 20}%`,
                    height: `${40 + i * 20}%`,
                    top:    `${30 - i * 10}%`,
                    left:   `${30 - i * 10}%`,
                  }}
                />
              ))}
            </div>

            {/* Initials */}
            <span className="relative z-10 text-5xl sm:text-6xl font-bold tracking-tight drop-shadow-lg">
              GM
            </span>
            <span className="relative z-10 text-xs sm:text-sm font-medium opacity-80 mt-1 tracking-widest uppercase">
              Dev
            </span>
          </div>
        </div>
      </div>

      {/* Status badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="absolute -bottom-3 left-1/2 -translate-x-1/2
          flex items-center gap-2 px-4 py-1.5 rounded-full
          bg-white dark:bg-gray-900
          border border-gray-200 dark:border-gray-700
          shadow-lg text-xs font-medium
          text-gray-700 dark:text-gray-300
          whitespace-nowrap"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500" />
        </span>
        Open to Work
      </motion.div>
    </motion.div>
  )
}

// ── Social icon button ─────────────────────────────────────────────────────
function SocialBtn({ href, icon: Icon, label, color }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={`w-10 h-10 rounded-xl flex items-center justify-center
        border border-gray-200 dark:border-gray-700
        bg-white dark:bg-gray-900
        shadow-sm hover:shadow-md
        transition-all duration-200
        ${color}`}
    >
      <Icon className="text-lg" />
    </motion.a>
  )
}

// ── Stat card ──────────────────────────────────────────────────────────────
function StatCard({ value, label, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="flex flex-col items-center px-4 py-3 rounded-2xl
        bg-gray-50 dark:bg-gray-800/60
        border border-gray-100 dark:border-gray-700/50
        min-w-[80px]"
    >
      <span className="text-2xl font-bold gradient-text">{value}</span>
      <span className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 text-center leading-tight">{label}</span>
    </motion.div>
  )
}

// ── Main Hero ──────────────────────────────────────────────────────────────
const ROLES = [
  'MERN Stack Developer',
  'Front-End Developer',
  'React.js Developer',
  'Next.js Developer',
  'UI / UX Enthusiast',
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  const role = useTypewriter(ROLES, 75, 2000)

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 section-padding overflow-hidden"
    >
      {/* Grid pattern background */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(var(--tw-gradient-from, #6366f1) 1px, transparent 1px),
            linear-gradient(90deg, var(--tw-gradient-from, #6366f1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-max w-full pt-10 md:pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Text content ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
            >
              I'm{' '}
              <span className="gradient-text">
                Ghulam
              </span>
              <br />
              <span className="gradient-text">
                Mustafa
              </span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 mb-6 h-8"
            >
              <span className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 font-mono">
                {role}
              </span>
              <span className="w-0.5 h-6 bg-primary-500 animate-pulse rounded-full" />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
            >
              Passionate about crafting{' '}
              <span className="text-primary-600 dark:text-primary-400 font-medium">
                clean, scalable
              </span>{' '}
              web applications with modern technologies. Based in{' '}
              <span className="text-gray-800 dark:text-gray-200 font-medium">
                Karachi, Pakistan
              </span>{' '}
              — building the web, one component at a time.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 mb-8"
            >
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary"
              >
                <HiMail className="text-base" />
                Hire Me
              </motion.a>

              <motion.a
                href="https://github.com/G-Mustafa1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="btn-secondary"
              >
                <FaGithub className="text-base" />
                View GitHub
              </motion.a>

              <motion.a
                href="/cv.pdf"
                download="Ghulam_Mustafa_CV.pdf"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                  bg-gray-100 dark:bg-gray-800
                  text-gray-700 dark:text-gray-300
                  text-sm font-medium
                  hover:bg-gray-200 dark:hover:bg-gray-700
                  transition-all duration-300 hover:-translate-y-0.5"
              >
                <HiDownload className="text-base" />
                Resume
              </motion.a>
            </motion.div>

            {/* Socials */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mb-10"
            >
              <span className="text-sm text-gray-400 dark:text-gray-500">Find me on</span>
              <SocialBtn
                href="https://github.com/G-Mustafa1"
                icon={FaGithub}
                label="GitHub"
                color="hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-500"
              />
              <SocialBtn
                href="https://www.linkedin.com/in/ghulam-mustufa-"
                icon={FaLinkedinIn}
                label="LinkedIn"
                color="hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-700"
              />
              <SocialBtn
                href="mailto:gmustufa1255@gmail.com"
                icon={HiMail}
                label="Email"
                color="hover:text-red-500 dark:hover:text-red-400 hover:border-red-300 dark:hover:border-red-700"
              />
            </motion.div>
          </motion.div>

          {/* ── Right: Avatar + floating badges ── */}
          <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
            {/* Floating tech badges */}
            <FloatingBadge
              icon={FaReact}
              label="React.js"
              color="text-cyan-500"
              className="-top-2 -left-4 sm:left-0"
              delay={0.5}
            />
            <FloatingBadge
              icon={SiNextdotjs}
              label="Next.js"
              color="text-gray-800 dark:text-gray-200"
              className="top-8 -right-4 sm:right-0"
              delay={0.7}
            />
            <FloatingBadge
              icon={FaNodeJs}
              label="Node.js"
              color="text-green-600"
              className="bottom-16 -left-4 sm:left-4"
              delay={0.9}
            />
            <FloatingBadge
              icon={SiMongodb}
              label="MongoDB"
              color="text-green-500"
              className="bottom-4 -right-4 sm:right-0"
              delay={1.1}
            />
            <FloatingBadge
              icon={SiTailwindcss}
              label="Tailwind"
              color="text-cyan-400"
              className="-top-8 left-1/2 -translate-x-1/2"
              delay={1.3}
            />
            <FloatingBadge
              icon={SiJavascript}
              label="JavaScript"
              color="text-yellow-500"
              className="bottom-28 right-0 sm:right-8"
              delay={1.5}
            />

            <Avatar />
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="flex flex-col items-center gap-2 mt-16 lg:mt-20"
        >
          <span className="text-xs text-gray-400 dark:text-gray-500 tracking-widest uppercase">
            Scroll Down
          </span>
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600
              flex items-center justify-center
              text-gray-400 dark:text-gray-500
              hover:border-primary-400 hover:text-primary-500
              transition-colors duration-200"
          >
            <HiArrowDown className="text-sm" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}