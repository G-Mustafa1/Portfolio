import { motion } from 'framer-motion'

export function FloatingBadge({ icon: Icon, label, color, className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, type: 'spring', bounce: 0.4 }}
      className={`absolute flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2
        text-xs font-semibold whitespace-nowrap shadow-md shadow-slate-900/5
        pointer-events-none select-none will-change-transform transform-gpu
        ${className}`}
      style={{
        animation: `float ${3.5 + delay}s ease-in-out ${delay}s infinite`,
      }}
    >
      <Icon className={`text-base ${color}`} />
      <span className="text-[var(--text-secondary)]">{label}</span>
    </motion.div>
  )
}