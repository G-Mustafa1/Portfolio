import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export default function SplashScreen({ onFinish }) {
  const { isDark } = useTheme()
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsComplete(true), 500)
          return 100
        }
        const diff = Math.random() * 15
        return Math.min(prev + diff, 100)
      })
    }, 80)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (isComplete) {
      const timeout = setTimeout(() => {
        onFinish()
      }, 800)
      return () => clearTimeout(timeout)
    }
  }, [isComplete, onFinish])

  const containerVariants = {
    exit: {
      y: "-100%",
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.1
      }
    }
  }

  const name = "GHULAM MUSTAFA"  
  const letters = name.split("")
  

  return (
    <motion.div
      variants={containerVariants}
      exit="exit"
      className={`fixed inset-0 z-9999 flex flex-col items-center justify-center overflow-hidden transition-colors duration-500 ${
        isDark ? 'bg-[#05070a]' : 'bg-white'
      }`}
    >
      {/* Background Subtle Gradient */}
      <div className={`absolute inset-0 bg-linear-to-b from-primary-500/10 to-transparent pointer-events-none`} />
      
      {/* Animated Lines for depth */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className={`absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-transparent ${isDark ? 'via-primary-500/20' : 'via-primary-500/40'} to-transparent`} />
        <div className={`absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-transparent ${isDark ? 'via-primary-500/20' : 'via-primary-500/40'} to-transparent`} />
      </div>

      <div className="relative flex flex-col items-center">
        {/* Modern Logo/Initial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8 relative"
        >
          <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-2xl shadow-primary-500/20 rotate-12">
            <span className="text-3xl font-black text-white -rotate-12">GM</span>
          </div>
          {/* Pulsing ring around logo */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-2xl border-2 border-primary-500/30 -m-2"
          />
        </motion.div>

        {/* Text Reveal */}
        <div className="overflow-hidden mb-4">
          <div className="flex gap-[0.2em]">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.33, 1, 0.68, 1],
                  delay: 0.1 + (i * 0.03)
                }}
                className={`text-2xl md:text-4xl font-bold tracking-tighter ${
                  isDark ? 'text-white' : 'text-gray-900'
                } ${letter === " " ? "w-4" : ""}`}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Progress Bar Container */}
        <div className={`w-48 h-0.5 ${isDark ? 'bg-white/5' : 'bg-gray-100'} rounded-full relative overflow-hidden mt-4`}>
          <motion.div
            className="absolute inset-y-0 left-0 bg-primary-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 flex items-center gap-2"
        >
          <span className="text-[10px] font-mono tracking-[0.3em] text-gray-500 uppercase">
            Initializing
          </span>
          <span className="text-[10px] font-mono text-primary-500 font-bold">
            {Math.round(progress)}%
          </span>
        </motion.div>
      </div>

      {/* Decorative Bottom Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-10 flex flex-col gap-1"
      >
        <span className={`text-[8px] font-mono tracking-widest uppercase ${isDark ? 'text-white' : 'text-gray-900'}`}>Portfolio v2.0</span>
        <span className={`text-[8px] font-mono tracking-widest uppercase ${isDark ? 'text-white' : 'text-gray-900'}`}>System Status: Optimal</span>
      </motion.div>
    </motion.div>
  )
}