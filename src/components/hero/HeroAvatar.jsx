import { motion } from 'framer-motion'

export function HeroAvatar() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
      className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto"
    >
      {/* Glow */}
      <div
        className="absolute inset-0 rounded-full
        bg-gradient-to-br from-primary-500  to-accent-500
        opacity-20 dark:opacity-30 blur-2xl scale-110"
      />

      {/* Rotating ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute -inset-3 rounded-full
        border-2 border-dashed
        border-primary-300/40 dark:border-primary-700/40"
      />

      {/* Main Avatar */}
      <div
        className="relative w-full h-full rounded-full p-[5px]
        bg-gradient-to-br from-primary-500  to-accent-500"
      >
        <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-900">

          {/* Image */}
          <img
            src="/my-image.png"
            alt="Ghulam Mustafa"
            className="w-full h-full object-cover rounded-full"
          />

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
          text-gray-700 dark:text-gray-300 whitespace-nowrap"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
        </span>

        Open to Work
      </motion.div>
    </motion.div>
  )
}