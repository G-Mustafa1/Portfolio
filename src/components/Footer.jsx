import React from 'react'
import { motion } from 'framer-motion'
import {
  FaGithub,
  FaLinkedinIn,
  FaReact,
  FaHeart,
} from 'react-icons/fa'
import {
  SiTailwindcss,
  SiFramer,
  SiVite,
} from 'react-icons/si'
import {
  HiMail,
  HiCode,
  HiArrowUp,
  HiExternalLink,
  HiChevronRight
} from 'react-icons/hi'

const QUICK_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const TECH_STACK = [
  { icon: FaReact, label: 'React', color: 'text-cyan-500', href: 'https://react.dev' },
  { icon: SiVite, label: 'Vite', color: 'text-purple-500', href: 'https://vitejs.dev' },
  { icon: SiTailwindcss, label: 'Tailwind', color: 'text-cyan-400', href: 'https://tailwindcss.com' },
  { icon: SiFramer, label: 'Framer', color: 'text-pink-500', href: 'https://www.framer.com/motion' },
]

const SOCIALS = [
  {
    icon: FaGithub,
    href: 'https://github.com/G-Mustafa1',
    label: 'GitHub',
    color: 'hover:bg-gray-700 hover:text-white',
  },
  {
    icon: FaLinkedinIn,
    href: 'https://www.linkedin.com/in/ghulam-mustufa-',
    label: 'LinkedIn',
    color: 'hover:bg-blue-600 hover:text-white',
  },
  {
    icon: HiMail,
    href: 'mailto:gmustufa1255@gmail.com',
    label: 'Email',
    color: 'hover:bg-red-500 hover:text-white',
  },
]

// ── Scroll to top button ───────────────────────────────────────────────────
function ScrollTopButton() {
  return (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Scroll to top"
      className="w-10 h-10 rounded-xl
        bg-gradient-to-br from-primary-500 to-accent-500
        text-white flex items-center justify-center
        shadow-lg shadow-primary-500/30
        hover:shadow-xl hover:shadow-primary-500/40
        transition-shadow duration-300"
    >
      <HiArrowUp className="text-base" />
    </motion.button>
  )
}

// ── Main Footer ────────────────────────────────────────────────────────────
export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (href) => {
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden
      bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl
      border-t border-gray-200/50 dark:border-white/10">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0">
        <div className="absolute -top-32 left-1/4 w-96 h-96
          bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute -top-32 right-1/4 w-80 h-80
          bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto  px-6 md:px-[45px]">

        {/* ── Top section ── */}
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl
                bg-gradient-to-br from-primary-500 to-accent-500
                flex items-center justify-center
                shadow-lg shadow-primary-500/30">
                <HiCode className="text-white text-lg" />
              </div>
              <div>
                <span className="font-bold text-xl text-gray-900 dark:text-white">
                  Ghulam{' '}
                  <span className="gradient-text">Mustafa</span>
                </span>
                <p className="text-xs text-gray-500 font-mono mt-0.5 uppercase tracking-wider">
                  MERN Stack Developer
                </p>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-sm">
              Passionate front-end developer from Karachi, building clean,
              scalable, and accessible web applications with modern technologies.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {SOCIALS.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-9 h-9 rounded-xl
                    bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400
                    border border-gray-200 dark:border-gray-700/50
                    flex items-center justify-center
                    ${s.color}
                    transition-all duration-200`}
                >
                  <s.icon className="text-base" />
                </motion.a>
              ))}
            </div>

            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
              bg-gray-100 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/50
              text-gray-600 dark:text-gray-300 text-xs font-bold w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full
                  rounded-full bg-accent-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2
                  bg-green-500" />
              </span>
              AVAILABLE FOR NEW PROJECTS
            </div>
          </div>

          {/* Quick links column */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold text-sm mb-5 uppercase tracking-widest
              flex items-center gap-2">
              <span className="w-1.5 h-4 rounded-full
                bg-gradient-to-b from-primary-500 to-accent-500 inline-block" />
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <motion.button
                    onClick={() => scrollTo(link.href)}
                    whileHover={{ x: 4 }}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400
                      transition-colors duration-200 flex items-center gap-2 group font-medium"
                  >
                    <HiChevronRight className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-primary-500" />
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack + contact column */}
          <div className="flex flex-col gap-7">
            {/* Built with */}
            <div>
              <h4 className="text-gray-900 dark:text-white font-bold text-sm mb-5 uppercase tracking-widest
                flex items-center gap-2">
                <span className="w-1.5 h-4 rounded-full
                  bg-gradient-to-b from-primary-500 to-accent-500 inline-block" />
                Built With
              </h4>
              <div className="flex flex-col gap-2.5">
                {TECH_STACK.map((t) => (
                  <motion.a
                    key={t.label}
                    href={t.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-2.5 group w-fit"
                  >
                    <t.icon className={`text-base ${t.color}
                      group-hover:scale-110 transition-transform duration-200`} />
                    <span className="text-sm text-gray-600 dark:text-gray-400
                      group-hover:text-primary-600 dark:group-hover:text-gray-200 transition-colors duration-200 font-medium">
                      {t.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div>
              <h4 className="text-gray-900 dark:text-white font-bold text-sm mb-4 uppercase tracking-widest
                flex items-center gap-2">
                <span className="w-1.5 h-4 rounded-full
                  bg-gradient-to-b from-primary-500 to-accent-500 inline-block" />
                Contact
              </h4>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:gmustufa1255@gmail.com"
                  className="text-sm text-gray-600 dark:text-gray-400
                    hover:text-primary-500 transition-colors duration-200
                    flex items-center gap-2 group font-medium"
                >
                  <HiMail className="text-base text-red-500" />
                  gmustufa1255@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-gradient-to-r
          from-transparent via-gray-300 dark:via-gray-700/60 to-transparent" />

        {/* ── Bottom bar ── */}
        <div className="py-8 flex flex-col sm:flex-row items-center
          justify-between gap-6">

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm text-gray-500 font-medium"
          >
            © {year} <span className="text-gray-900 dark:text-gray-200">Ghulam Mustafa</span>. All rights reserved.
          </motion.p>

          {/* Right side: stack badges + scroll top */}
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-3">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Built with</span>
              <div className="flex gap-2">
                {[FaReact, SiTailwindcss, SiFramer].map((Icon, i) => (
                  <div key={i} className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 
                    border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-400">
                    <Icon className="text-sm" />
                  </div>
                ))}
              </div>
            </div>

            <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 hidden sm:block" />

            <ScrollTopButton />
          </div>
        </div>
      </div>
    </footer>
  )
}