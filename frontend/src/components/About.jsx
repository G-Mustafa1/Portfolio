import React from 'react'
import { motion } from 'framer-motion'
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
  SiTypescript,
} from 'react-icons/si'
import {
  HiAcademicCap,
  HiLocationMarker,
  HiMail,
  HiCode,
  HiLightningBolt,
  HiHeart,
  HiExternalLink,
} from 'react-icons/hi'

// ── Reusable fade-up variant ───────────────────────────────────────────────
const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.1 },
  }),
}

// ── Info row ──────────────────────────────────────────────────────────────
function InfoRow({ icon: Icon, label, value, link }) {
  return (
    <div className="flex items-start gap-3 py-3
      border-b border-gray-100 dark:border-gray-800 last:border-0">
      <div className="w-8 h-8 rounded-lg bg-primary-50 dark:bg-primary-900/30
        flex items-center justify-center flex-shrink-0 mt-0.5">
        <Icon className="text-primary-500 dark:text-primary-400 text-sm" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-gray-400 dark:text-gray-500 mb-0.5 uppercase tracking-wide font-medium">
          {label}
        </p>
        {link ? (
          <a
            href={link}
            target={link.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="text-sm text-primary-600 dark:text-primary-400
              hover:underline flex items-center gap-1 font-medium truncate"
          >
            {value}
            <HiExternalLink className="text-xs flex-shrink-0" />
          </a>
        ) : (
          <p className="text-sm text-gray-700 dark:text-gray-300 font-medium truncate">
            {value}
          </p>
        )}
      </div>
    </div>
  )
}

// ── Highlight card ─────────────────────────────────────────────────────────
function HighlightCard({ icon: Icon, title, description, color, delay }) {
  return (
    <motion.div
      custom={delay}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="glass-card rounded-2xl p-5 flex flex-col gap-3
        hover:border-primary-300/50 dark:hover:border-primary-700/50
        transition-all duration-300 group"
    >
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center
        ${color} transition-transform duration-300 group-hover:scale-110`}>
        <Icon className="text-lg text-white" />
      </div>
      <div>
        <h4 className="font-semibold text-gray-800 dark:text-gray-100 text-sm mb-1">
          {title}
        </h4>
        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

// ── Social profile card ────────────────────────────────────────────────────
function ProfileCard({ href, icon: Icon, platform, username, stats, color, bgColor, delay }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      custom={delay}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.2 } }}
      className="glass-card rounded-2xl p-5 flex flex-col gap-4
        hover:border-primary-300/40 dark:hover:border-primary-700/40
        transition-all duration-300 group cursor-pointer"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${bgColor}`}>
            <Icon className={`text-xl ${color}`} />
          </div>
          <div>
            <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wide font-medium">
              {platform}
            </p>
            <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">
              {username}
            </p>
          </div>
        </div>
        <HiExternalLink className="text-gray-400 dark:text-gray-500
          group-hover:text-primary-500 transition-colors duration-200" />
      </div>

      {/* Avatar initials circle */}
      <div className="flex items-center gap-3">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center
          text-white font-bold text-sm flex-shrink-0 ${bgColor}`}>
          GM
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">
            Ghulam Mustafa
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {platform === 'GitHub' ? 'Frontend Developer' : 'MERN Stack Developer'}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 pt-1 border-t border-gray-100 dark:border-gray-800">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center">
            <span className={`text-base font-bold ${color}`}>{s.value}</span>
            <span className="text-xs text-gray-400 dark:text-gray-500 text-center leading-tight mt-0.5">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </motion.a>
  )
}

// ── Timeline item ──────────────────────────────────────────────────────────
function TimelineItem({ year, title, place, current, delay }) {
  return (
    <motion.div
      custom={delay}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex gap-4"
    >
      {/* Dot + line */}
      <div className="flex flex-col items-center">
        <div className={`w-3 h-3 rounded-full flex-shrink-0 mt-1 ring-4
          ${current
            ? 'bg-primary-500 ring-primary-100 dark:ring-primary-900/50'
            : 'bg-gray-300 dark:bg-gray-600 ring-gray-100 dark:ring-gray-800'
          }`}
        />
        <div className="w-0.5 flex-1 bg-gray-100 dark:bg-gray-800 mt-2 mb-0 min-h-[2rem]" />
      </div>

      {/* Content */}
      <div className="pb-6">
        <span className={`text-xs font-mono font-medium px-2 py-0.5 rounded-md mb-2 inline-block
          ${current
            ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
            : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
          }`}>
          {year}
        </span>
        <h4 className="font-semibold text-gray-800 dark:text-gray-100 text-sm leading-snug">
          {title}
        </h4>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
          {place}
        </p>
        {current && (
          <span className="inline-flex items-center gap-1 text-xs text-accent-600 dark:text-accent-400
            font-medium mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse" />
            Currently enrolled
          </span>
        )}
      </div>
    </motion.div>
  )
}

// ── Main About ─────────────────────────────────────────────────────────────
export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container-max">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full
            bg-primary-50 dark:bg-primary-900/30
            border border-primary-200 dark:border-primary-800/50
            text-primary-600 dark:text-primary-400
            text-sm font-medium mb-4">
            <HiCode className="text-base" />
            About Me
          </span>
          <h2 className="section-title">
            Crafting{' '}
            <span className="gradient-text">Digital Experiences</span>
          </h2>
          <p className="section-subtitle">
            A passionate front-end developer from Karachi who loves turning ideas into
            beautiful, functional web applications.
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">

          {/* ── Left column (3/5) ── */}
          <div className="lg:col-span-3 flex flex-col gap-8">

            {/* Bio card */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.1 }}
              className="glass-card rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-start gap-4 mb-6">
                {/* Big initials avatar */}
                <div className="w-16 h-16 rounded-2xl flex-shrink-0
                  bg-gradient-to-br from-primary-500 via-purple-600 to-accent-500
                  flex items-center justify-center text-white font-bold text-xl
                  shadow-lg shadow-primary-500/30">
                  GM
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                    Ghulam Mustafa
                  </h3>
                  <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                    MERN Stack Developer
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                    gmustufa1255@gmail.com
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                <p>
                  Hi there! I'm <span className="text-gray-900 dark:text-gray-100 font-semibold">Ghulam Mustafa</span>,
                  a Front-End Web Developer specializing in the{' '}
                  <span className="text-primary-600 dark:text-primary-400 font-semibold">MERN Stack</span>.
                  I'm currently training at{' '}
                  <span className="text-gray-900 dark:text-gray-100 font-semibold">
                    Saylani Mass I.T Training (S.M.I.T)
                  </span>{' '}
                  in Karachi, where I'm sharpening my skills every single day.
                </p>
                <p>
                  My passion lies in building{' '}
                  <span className="text-primary-600 dark:text-primary-400 font-semibold">
                    clean, scalable, and accessible
                  </span>{' '}
                  web applications. I love working with modern JavaScript frameworks
                  like <strong className="text-gray-800 dark:text-gray-200">React</strong> and{' '}
                  <strong className="text-gray-800 dark:text-gray-200">Next.js</strong>, and
                  I'm currently expanding into Web and Mobile App Development.
                </p>
                <p>
                  Beyond coding, I enjoy collaborating on open-source projects and
                  constantly exploring new tools and technologies to stay ahead in this
                  ever-evolving field.{' '}
                  <span className="text-gray-900 dark:text-gray-100 font-medium">
                    Fun fact: I am funny 😄
                  </span>
                </p>
              </div>
            </motion.div>

            {/* Highlight cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              <HighlightCard
                icon={HiCode}
                title="Clean Code"
                description="Writing readable, maintainable, and well-structured code is my priority."
                color="bg-gradient-to-br from-primary-500 to-purple-600"
                delay={1}
              />
              <HighlightCard
                icon={HiLightningBolt}
                title="Performance"
                description="Optimizing for speed and smooth user experiences across all devices."
                color="bg-gradient-to-br from-amber-400 to-orange-500"
                delay={2}
              />
              <HighlightCard
                icon={HiHeart}
                title="Passion"
                description="Deeply passionate about UI design and modern front-end technologies."
                color="bg-gradient-to-br from-pink-500 to-rose-500"
                delay={3}
              />
            </div>

            {/* Social profile cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <ProfileCard
                href="https://github.com/G-Mustafa1"
                icon={FaGithub}
                platform="GitHub"
                username="G-Mustafa1"
                stats={[
                  { value: '701',  label: 'Contributions' },
                  { value: '548',  label: 'Stars Earned'  },
                  { value: '274',  label: 'Commits'       },
                ]}
                color="text-gray-800 dark:text-gray-100"
                bgColor="bg-gray-100 dark:bg-gray-800"
                delay={4}
              />
              <ProfileCard
                href="https://www.linkedin.com/in/ghulam-mustufa-"
                icon={FaLinkedinIn}
                platform="LinkedIn"
                username="ghulam-mustufa-"
                stats={[
                  { value: '500+', label: 'Connections'  },
                  { value: 'KHI',  label: 'Location'     },
                  { value: 'Open', label: 'To Work'      },
                ]}
                color="text-blue-600 dark:text-blue-400"
                bgColor="bg-blue-50 dark:bg-blue-900/30"
                delay={5}
              />
            </div>
          </div>

          {/* ── Right column (2/5) ── */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Personal info card */}
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.1 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="text-base font-bold text-gray-800 dark:text-gray-100 mb-4
                flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-primary-50 dark:bg-primary-900/30
                  flex items-center justify-center">
                  <HiCode className="text-primary-500 text-xs" />
                </span>
                Personal Info
              </h3>

              <div className="divide-y divide-gray-100 dark:divide-gray-800">
                <InfoRow
                  icon={HiLocationMarker}
                  label="Location"
                  value="Karachi Division, Sindh, Pakistan"
                />
                <InfoRow
                  icon={HiMail}
                  label="Email"
                  value="gmustufa1255@gmail.com"
                  link="mailto:gmustufa1255@gmail.com"
                />
                <InfoRow
                  icon={FaGithub}
                  label="GitHub"
                  value="github.com/G-Mustafa1"
                  link="https://github.com/G-Mustafa1"
                />
                <InfoRow
                  icon={FaLinkedinIn}
                  label="LinkedIn"
                  value="linkedin.com/in/ghulam-mustufa-"
                  link="https://www.linkedin.com/in/ghulam-mustufa-"
                />
                <InfoRow
                  icon={HiAcademicCap}
                  label="Training"
                  value="S.M.I.T — Saylani Mass I.T"
                />
              </div>
            </motion.div>

            {/* Education timeline */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.1 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="text-base font-bold text-gray-800 dark:text-gray-100 mb-5
                flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-primary-50 dark:bg-primary-900/30
                  flex items-center justify-center">
                  <HiAcademicCap className="text-primary-500 text-xs" />
                </span>
                Education
              </h3>

              <div>
                <TimelineItem
                  year="2024 – Present"
                  title="MERN Stack Web Development"
                  place="Saylani Mass I.T Training (S.M.I.T)"
                  current={true}
                  delay={3}
                />
                <TimelineItem
                  year="2023"
                  title="Web Development Fundamentals"
                  place="Self-taught & Online Courses"
                  current={false}
                  delay={4}
                />
                <TimelineItem
                  year="2022"
                  title="HTML · CSS · JavaScript Basics"
                  place="YouTube & Free Resources"
                  current={false}
                  delay={5}
                />
              </div>
            </motion.div>

            {/* Currently learning card */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.1 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="text-base font-bold text-gray-800 dark:text-gray-100 mb-4
                flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-accent-500/10
                  flex items-center justify-center">
                  <HiLightningBolt className="text-accent-500 text-xs" />
                </span>
                Currently Learning
              </h3>

              <div className="flex flex-wrap gap-2">
                {[
                  { icon: SiNextdotjs,   label: 'Next.js',    color: 'text-gray-700 dark:text-gray-300' },
                  { icon: SiTypescript,  label: 'TypeScript',  color: 'text-blue-500'                   },
                  { icon: FaNodeJs,      label: 'Node.js',     color: 'text-green-600'                  },
                  { icon: SiMongodb,     label: 'MongoDB',     color: 'text-green-500'                  },
                  { icon: SiExpress,     label: 'Express.js',  color: 'text-gray-600 dark:text-gray-400'},
                ].map(({ icon: Icon, label, color }) => (
                  <span
                    key={label}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                      bg-gray-50 dark:bg-gray-800
                      border border-gray-200 dark:border-gray-700
                      text-xs font-medium text-gray-700 dark:text-gray-300"
                  >
                    <Icon className={`text-sm ${color}`} />
                    {label}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}