import React from 'react'
import { motion } from 'framer-motion'
import {
  FaGithub,
  FaLinkedinIn,
  FaNodeJs,
} from 'react-icons/fa'

import {
  SiMongodb,
  SiExpress,
  SiNextdotjs,
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

// ─────────────────────────────────────────────────────────────
// Animation Variant
// ─────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay: i * 0.1,
    },
  }),
}

// ─────────────────────────────────────────────────────────────
// Info Row
// ─────────────────────────────────────────────────────────────
function InfoRow({ icon: Icon, label, value, link }) {
  return (
    <div
      className="flex items-start gap-3 py-3
      border-b border-gray-100 dark:border-gray-800 last:border-0"
    >
      <div
        className="w-9 h-9 rounded-xl
        bg-primary-50 dark:bg-primary-900/30
        flex items-center justify-center flex-shrink-0"
      >
        <Icon className="text-primary-500 dark:text-primary-400 text-sm" />
      </div>

      <div className="flex-1 min-w-0">
        <p
          className="text-xs uppercase tracking-wide
          text-gray-400 dark:text-gray-500 mb-1 font-medium"
        >
          {label}
        </p>

        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-sm text-gray-700 dark:text-gray-300
            hover:text-primary-500 transition-colors duration-200
            flex items-center gap-1 break-all"
          >
            {value}
            <HiExternalLink className="text-xs flex-shrink-0" />
          </a>
        ) : (
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {value}
          </p>
        )}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// Highlight Card
// ─────────────────────────────────────────────────────────────
function HighlightCard({
  icon: Icon,
  title,
  description,
  color,
  delay,
}) {
  return (
    <motion.div
      custom={delay}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{
        y: -4,
        transition: { duration: 0.2 },
      }}
      className="glass-card rounded-2xl p-5
      transition-all duration-300"
    >
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${color}`}
      >
        <Icon className="text-white text-lg" />
      </div>

      <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100 mb-2">
        {title}
      </h4>

      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────
// Social Card
// ─────────────────────────────────────────────────────────────
function SocialCard({
  href,
  icon: Icon,
  platform,
  username,
  role,
  color,
  bgColor,
  delay,
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${platform}`}
      custom={delay}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{
        y: -4,
        transition: { duration: 0.2 },
      }}
      className="glass-card rounded-2xl p-5
      flex items-center justify-between
      transition-all duration-300
      hover:border-primary-300/40 dark:hover:border-primary-700/40"
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center ${bgColor}`}
        >
          <Icon className={`text-xl ${color}`} />
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100">
            {platform}
          </h4>

          <p className="text-xs text-gray-500 dark:text-gray-400">
            {username}
          </p>

          <p className="text-xs text-primary-500 mt-1">
            {role}
          </p>
        </div>
      </div>

      <HiExternalLink
        className="text-gray-400 dark:text-gray-500"
      />
    </motion.a>
  )
}

// ─────────────────────────────────────────────────────────────
// Timeline Item
// ─────────────────────────────────────────────────────────────
function TimelineItem({
  year,
  title,
  place,
  current,
  delay,
}) {
  return (
    <motion.div
      custom={delay}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex gap-4"
    >
      <div className="flex flex-col items-center">
        <div
          className={`w-3 h-3 rounded-full mt-1 ring-4
          ${
            current
              ? 'bg-primary-500 ring-primary-100 dark:ring-primary-900/50'
              : 'bg-gray-300 dark:bg-gray-600 ring-gray-100 dark:ring-gray-800'
          }`}
        />

        <div className="w-0.5 flex-1 bg-gray-100 dark:bg-gray-800 mt-2" />
      </div>

      <div className="pb-6">
        <span
          className={`text-xs font-medium px-2 py-1 rounded-md inline-block mb-2
          ${
            current
              ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
          }`}
        >
          {year}
        </span>

        <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100">
          {title}
        </h4>

        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {place}
        </p>

        {current && (
          <span
            className="inline-flex items-center gap-1
            text-xs text-accent-500 mt-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse" />
            Currently Learning
          </span>
        )}
      </div>
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────
// Main About Component
// ─────────────────────────────────────────────────────────────
export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-gray-50/50 dark:bg-gray-900/50"
    >
      <div className="container-max">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-flex items-center gap-2
            px-4 py-2 rounded-full
            bg-primary-50 dark:bg-primary-900/30
            border border-primary-200 dark:border-primary-800/50
            text-primary-600 dark:text-primary-400
            text-sm font-medium mb-4"
          >
            <HiCode className="text-base" />
            About Me
          </span>

          <h2 className="section-title">
            Building Modern{' '}
            <span className="gradient-text">
              Web Experiences
            </span>
          </h2>

          <p className="section-subtitle">
            Passionate MERN Stack Developer focused on creating
            responsive, scalable, and user-friendly applications.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid lg:grid-cols-5 gap-8">

          {/* Left Side */}
          <div className="lg:col-span-3 flex flex-col gap-8">

            {/* Bio */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-center gap-4 mb-6">

                <div
                  className="w-16 h-16 rounded-2xl
                  bg-gradient-to-br from-primary-500  to-accent-500
                  flex items-center justify-center
                  text-white font-bold text-xl
                  shadow-lg shadow-primary-500/20"
                >
                  GM
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                    Ghulam Mustafa
                  </h3>

                  <p className="text-primary-500 text-sm font-medium">
                    MERN Stack Developer
                  </p>

                  <p className="text-xs text-gray-400 mt-1">
                    Karachi, Pakistan
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  I'm Ghulam Mustafa, a MERN Stack Developer
                  focused on building modern, responsive,
                  and user-friendly web applications using
                  React, Next.js, Node.js, and MongoDB.
                </p>

                <p>
                  Currently training at SMIT Karachi,
                  I enjoy creating clean UI experiences,
                  scalable frontend architectures,
                  and full-stack applications with
                  modern technologies.
                </p>
              </div>
            </motion.div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-4">

              <HighlightCard
                icon={HiCode}
                title="Clean Code"
                description="Building scalable and maintainable applications with modern development practices."
                color="bg-gradient-to-br from-primary-500  to-accent-500"
                delay={1}
              />

              <HighlightCard
                icon={HiLightningBolt}
                title="Performance"
                description="Focused on responsive design, optimization, and smooth user experiences."
                color="bg-gradient-to-br from-orange-400 to-orange-500"
                delay={2}
              />

              <HighlightCard
                icon={HiHeart}
                title="UI & UX"
                description="Passionate about crafting visually appealing and intuitive interfaces."
                color="bg-gradient-to-br from-pink-500 to-rose-500"
                delay={3}
              />
            </div>

            {/* Social Cards */}
            <div className="grid sm:grid-cols-2 gap-4">

              <SocialCard
                href="https://github.com/G-Mustafa1"
                icon={FaGithub}
                platform="GitHub"
                username="@G-Mustafa1"
                role="Projects & Open Source"
                color="text-gray-800 dark:text-gray-100"
                bgColor="bg-gray-100 dark:bg-gray-800"
                delay={4}
              />

              <SocialCard
                href="https://www.linkedin.com/in/ghulam-mustufa"
                icon={FaLinkedinIn}
                platform="LinkedIn"
                username="@ghulam-mustufa"
                role="Professional Network"
                color="text-blue-600"
                bgColor="bg-blue-50 dark:bg-blue-900/30"
                delay={5}
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Personal Info */}
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6"
            >
              <h3
                className="text-base font-bold
                text-gray-800 dark:text-gray-100
                mb-4 flex items-center gap-2"
              >
                <HiCode className="text-primary-500" />
                Personal Info
              </h3>

              <div>
                <InfoRow
                  icon={HiLocationMarker}
                  label="Location"
                  value="Karachi, Pakistan"
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
                  value="linkedin.com/in/ghulam-mustufa"
                  link="https://www.linkedin.com/in/ghulam-mustufa"
                />

                <InfoRow
                  icon={HiAcademicCap}
                  label="Training"
                  value="Saylani Mass IT Training (SMIT)"
                />
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6"
            >
              <h3
                className="text-base font-bold
                text-gray-800 dark:text-gray-100
                mb-5 flex items-center gap-2"
              >
                <HiAcademicCap className="text-primary-500" />
                Education & Learning
              </h3>

              <div>
                <TimelineItem
                  year="2024 – Present"
                  title="MERN Stack Development"
                  place="Saylani Mass IT Training (SMIT)"
                  current={true}
                  delay={1}
                />

                <TimelineItem
                  year="2023"
                  title="Practical Projects & Online Certifications"
                  place="Independent Learning"
                  current={false}
                  delay={2}
                />

                <TimelineItem
                  year="2022"
                  title="Frontend Development Fundamentals"
                  place="HTML, CSS & JavaScript"
                  current={false}
                  delay={3}
                />
              </div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6"
            >
              <h3
                className="text-base font-bold
                text-gray-800 dark:text-gray-100
                mb-4 flex items-center gap-2"
              >
                <HiLightningBolt className="text-accent-500" />
                Tech Stack
              </h3>

              <div className="flex flex-wrap gap-2">
                {[
                  {
                    icon: SiNextdotjs,
                    label: 'Next.js',
                    color: 'text-gray-700 dark:text-gray-300',
                  },
                  {
                    icon: SiTypescript,
                    label: 'TypeScript',
                    color: 'text-blue-500',
                  },
                  {
                    icon: FaNodeJs,
                    label: 'Node.js',
                    color: 'text-green-500',
                  },
                  {
                    icon: SiMongodb,
                    label: 'MongoDB',
                    color: 'text-green-600',
                  },
                  {
                    icon: SiExpress,
                    label: 'Express.js',
                    color: 'text-gray-500',
                  },
                ].map(({ icon: Icon, label, color }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2
                    px-3 py-2 rounded-xl
                    bg-gray-50 dark:bg-gray-800
                    border border-gray-200 dark:border-gray-700"
                  >
                    <Icon className={`text-sm ${color}`} />

                    <span
                      className="text-xs font-medium
                      text-gray-700 dark:text-gray-300"
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}