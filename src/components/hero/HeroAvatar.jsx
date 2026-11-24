import { motion, useReducedMotion } from 'framer-motion'

export function HeroAvatar() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      className="relative mx-auto aspect-square w-64 sm:w-72 lg:w-80"
    >
      {/* Static outer ring */}
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-full border border-[var(--border)]"
      />

      {/* Slow rotating accent arc — disabled for reduced-motion users */}
      {!reduceMotion && (
        <motion.div
          aria-hidden="true"
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          className="absolute -inset-4 rounded-full"
          style={{
            willChange: 'transform',
            background:
              'conic-gradient(from 0deg, transparent 0deg, transparent 250deg, var(--accent) 360deg)',
            WebkitMask:
              'radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))',
            mask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))',
          }}
        />
      )}

      {/* Image */}
      <div className="relative h-full w-full overflow-hidden rounded-full border border-[var(--border)] bg-[var(--surface)] shadow-soft">
        <img
          src="/my-image.webp"
          alt="Ghulam Mustafa"
          width="640"
          height="640"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Status badge */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2.5 whitespace-nowrap rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 shadow-soft"
      >
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="font-mono text-xs font-medium text-[var(--text-primary)]">
          Open to Work
        </span>
      </motion.div>
    </motion.div>
  )
}