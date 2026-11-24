import { useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const PROGRESS_SECONDS = 0.9

export default function SplashScreen({ onFinish }) {
  const reduceMotion = useReducedMotion()
  const finishRef = useRef(onFinish)

  useEffect(() => {
    finishRef.current = onFinish
  }, [onFinish])

  useEffect(() => {
    const delay = reduceMotion ? 300 : PROGRESS_SECONDS * 1000 + 300
    const timer = setTimeout(() => finishRef.current?.(), delay)
    return () => clearTimeout(timer)
  }, [reduceMotion])

  return (
    <motion.div
      role="status"
      aria-label="Loading portfolio"
      exit={
        reduceMotion
          ? { opacity: 0, transition: { duration: 0.2 } }
          : {
              y: '-100%',
              transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
            }
      }
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[var(--page-bg)]"
    >
      {/* Halka accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(50% 40% at 50% 45%, color-mix(in srgb, var(--accent) 10%, transparent), transparent)',
        }}
      />

      <div className="relative flex flex-col items-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--accent)] font-mono text-xl font-semibold text-[var(--accent-contrast)]"
        >
          GM
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="mt-6 text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl"
        >
          Ghulam Mustafa
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="mt-2 font-mono text-xs text-[var(--text-muted)]"
        >
          Full Stack Developer
        </motion.p>

        {/* Progress line */}
        <div className="mt-8 h-px w-40 overflow-hidden bg-[var(--border)]">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: reduceMotion ? 0 : PROGRESS_SECONDS,
              ease: [0.4, 0, 0.2, 1],
              delay: 0.1,
            }}
            className="h-full origin-left bg-[var(--accent)]"
          />
        </div>
      </div>
    </motion.div>
  )
}