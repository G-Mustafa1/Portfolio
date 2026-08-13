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
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
} from 'react-icons/si'
import { useTypewriter } from '../hooks/useTypewriter'
import { ROLES, TECH_STACK } from '../data/heroData'
import { FloatingBadge } from '../components/hero/FloatingBadge'
import { HeroAvatar } from '../components/hero/HeroAvatar'
import HeroButtons from '../components/hero/HeroButtons'

// ── Float keyframe injection (fixes missing @keyframes float) ──────────────
const floatKeyframes = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-10px); }
  }
`

function InjectFloatStyle() {
  useEffect(() => {
    const id = 'hero-float-style'
    if (!document.getElementById(id)) {
      const style = document.createElement('style')
      style.id = id
      style.textContent = floatKeyframes
      document.head.appendChild(style)
    }
    return () => {
      const el = document.getElementById('hero-float-style')
      el?.remove()
    }
  }, [])
  return null
}



const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Hero() {
  const role = useTypewriter(ROLES, 75, 2000)

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.section
      id="hero"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative min-h-screen flex items-center pt-16 section-padding overflow-hidden"
    >
      {/* Inject @keyframes float into <head> */}
      <InjectFloatStyle />

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
            className="flex flex-col items-start"
          >

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
            >
              I'm{' '}
              <span className="gradient-text">Ghulam</span>
              <br />
              <span className="gradient-text">Mustafa</span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 mb-6 h-8"
            >
              <span className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 font-mono">
                {role}
              </span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                className="w-0.5 h-6 bg-primary-500 rounded-full inline-block"
              />
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
            <HeroButtons />
          </motion.div>

          {/* ── Right: Avatar + floating badges ── */}
          <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
            {/* Floating tech badges */}
            {TECH_STACK.map((item, index) => (
              <FloatingBadge
                key={index}
                {...item}
              />
            ))}
            <HeroAvatar />
          </div>
        </div>
      </div>
    </motion.section>
  )
}