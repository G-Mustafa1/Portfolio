import { motion } from 'framer-motion'

export function FloatingBadge({ icon: Icon, label, color, className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, type: 'spring', bounce: 0.4 }}
      className={`absolute flex items-center gap-2 px-3 py-2 rounded-xl
        glass-card text-xs font-medium whitespace-nowrap
        shadow-lg pointer-events-none select-none
        ${className}`}
      style={{
        animation: `float ${3.5 + delay}s ease-in-out ${delay}s infinite`,
      }}
    >
      <Icon className={`text-base ${color}`} />
      <span className="text-gray-700 dark:text-gray-300">{label}</span>
    </motion.div>
  )
}