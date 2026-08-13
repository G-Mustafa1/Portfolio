import React, { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll()

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.2,
  })

  const [ready, setReady] = useState(false)

  useEffect(() => {
    // wait for layout + splash screen + images
    const raf = requestAnimationFrame(() => {
      setReady(true)
    })

    return () => cancelAnimationFrame(raf)
  }, [])

  // IMPORTANT: force 0 until ready
  const scale = ready ? smoothProgress : 0

  return (
    <motion.div
      style={{
        scaleX: scale,
        transformOrigin: '0%',
      }}
      className="
        fixed top-0 left-0 right-0
        h-[3px]
        z-[9999]

        bg-gradient-to-r from-primary-500 via-primary-400 to-primary-600
        shadow-[0_0_10px_rgba(14,165,233,0.35)]
      "
    />
  )
}

export default ScrollProgressBar