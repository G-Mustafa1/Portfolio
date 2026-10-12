import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        transformOrigin: '0%',
      }}
      className="
        fixed top-0 left-0 right-0
        h-0.75
        z-9999
        bg-primary-500
        origin-left
        transform-gpu
        will-change-transform
        pointer-events-none
      "
    />
  )
}

export default ScrollProgressBar