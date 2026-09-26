import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll()

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.2,
  })

  return (
    <motion.div
      style={{
        scaleX: smoothProgress,
        transformOrigin: '0%',
      }}
      className="
        fixed top-0 left-0 right-0
        h-0.75
        z-9999
        bg-primary-500
      "
    />
  )
}

export default ScrollProgressBar