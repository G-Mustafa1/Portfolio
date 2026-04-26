import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function SplashScreen({ onFinish }) {
  const [progress, setProgress] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsExiting(true), 800)
          return 100
        }
        const jump = Math.floor(Math.random() * 4) + 1
        return Math.min(prev + jump, 100)
      })
    }, 40)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (isExiting) {
      const timer = setTimeout(() => {
        onFinish()
      }, 1200)
      return () => clearTimeout(timer)
    }
  }, [isExiting, onFinish])

  const name = "GHULAM MUSTAFA".split("")

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
        >
          {/* Cyberpunk Grid Background */}
          <div className="absolute inset-0 opacity-[0.15]" 
               style={{ 
                 backgroundImage: `linear-gradient(#1e1e1e 1px, transparent 1px), linear-gradient(90deg, #1e1e1e 1px, transparent 1px)`,
                 backgroundSize: '40px 40px' 
               }} />

          {/* Glitchy Scanline */}
          <motion.div 
            animate={{ top: ['-10%', '110%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="absolute left-0 right-0 h-[2px] bg-primary-500/30 blur-sm z-10"
          />

          <div className="relative flex flex-col items-center">
            {/* Unique Hexagon Loader */}
            <div className="relative w-48 h-48 mb-12 flex items-center justify-center">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    rotate: [i * 60, i * 60 + 360],
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "linear"
                  }}
                  className="absolute w-full h-full border border-primary-500/20"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                />
              ))}

              {/* Central Core */}
              <motion.div 
                animate={{ 
                  boxShadow: ['0 0 20px rgba(99,102,241,0.2)', '0 0 50px rgba(99,102,241,0.5)', '0 0 20px rgba(99,102,241,0.2)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center z-20 shadow-2xl"
              >
                <span className="text-2xl font-black text-white tracking-tighter italic">GM</span>
              </motion.div>
            </div>

            {/* Name Staggered reveal */}
            <div className="flex gap-1.5 mb-6">
              {name.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                  animate={{ 
                    opacity: progress > (i * 7) ? 1 : 0, 
                    y: progress > (i * 7) ? 0 : 10,
                    filter: progress > (i * 7) ? 'blur(0px)' : 'blur(10px)'
                  }}
                  className={`text-sm font-bold tracking-[0.2em] ${char === " " ? 'w-2' : ''} text-white/80`}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Modern Loading Interface */}
            <div className="w-80 space-y-3">
              <div className="flex justify-between items-end text-[10px] font-mono tracking-widest text-primary-500/80">
                <span>SYSTEM_READY</span>
                <span className="text-xl font-black">{progress}%</span>
              </div>
              
              <div className="h-[4px] w-full bg-white/5 rounded-full relative overflow-hidden">
                <motion.div 
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary-500 via-purple-600 to-accent-500"
                  style={{ width: `${progress}%` }}
                />
                {/* Secondary fast bar for effect */}
                <motion.div 
                  animate={{ left: ['-100%', '200%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-y-0 w-20 bg-white/30 skew-x-12 blur-sm"
                />
              </div>

              <div className="flex justify-between text-[8px] font-mono text-gray-600">
                <span>V2.0.4_INITIALIZING</span>
                <span>SECURE_CONNECTION</span>
              </div>
            </div>
          </div>

          {/* Floating Data Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: Math.random() * 100 + '%', 
                  y: Math.random() * 100 + '%',
                  opacity: 0 
                }}
                animate={{ 
                  y: [null, '-20vh'],
                  opacity: [0, 0.5, 0]
                }}
                transition={{ 
                  duration: Math.random() * 5 + 5, 
                  repeat: Infinity, 
                  delay: Math.random() * 5 
                }}
                className="absolute w-px h-10 bg-gradient-to-t from-transparent via-primary-500/40 to-transparent"
              />
            ))}
          </div>

          {/* "Shutter" Close Effect on Exit */}
          {isExiting && (
            <>
              <motion.div 
                initial={{ height: 0 }}
                animate={{ height: '50vh' }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                className="absolute top-0 left-0 right-0 bg-white z-[100] dark:bg-primary-500"
              />
              <motion.div 
                initial={{ height: 0 }}
                animate={{ height: '50vh' }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                className="absolute bottom-0 left-0 right-0 bg-white z-[100] dark:bg-primary-500"
              />
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
