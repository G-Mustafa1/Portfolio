import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    const handleHoverStart = () => setIsHovering(true)
    const handleHoverEnd = () => setIsHovering(false)

    window.addEventListener('mousemove', handleMouseMove)

    const updateInteractiveElements = () => {
      const interactiveElements = document.querySelectorAll(
        'button, a, .hover-trigger'
      )

      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleHoverStart)
        el.addEventListener('mouseleave', handleHoverEnd)
      })
    }

    updateInteractiveElements()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      {/* MAIN DOT (FIXED - NO BLUE GRADIENT) */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999] hidden md:block
        bg-gradient-to-br from-primary-500 to-accent-500 dark:from-primary-500"
        animate={{
          x: mousePos.x - 6,
          y: mousePos.y - 6,
          scale: isHovering ? 2.2 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 250, mass: 0.5 }}
      />

      {/* OUTER RING (SOFT NEUTRAL BORDER) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] hidden md:block
        border border-gray-400/40 dark:border-white/30"
        animate={{
          x: mousePos.x - 16,
          y: mousePos.y - 16,
          scale: isHovering ? 1.8 : 1,
          opacity: isHovering ? 0.9 : 0.4,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 150, mass: 0.8 }}
      />
    </>
  )
}

export default CustomCursor