import { useEffect, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

const INTERACTIVE = 'a, button, [role="button"], label, summary, .hover-trigger'
const TEXT_INPUT =
  'input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]), textarea, select'

const RING_IDLE = 'border-[color-mix(in_srgb,var(--text-muted)_55%,transparent)]'
const RING_ACTIVE =
  'border-[var(--accent)] bg-[color-mix(in_srgb,var(--accent)_12%,transparent)]'

export default function CustomCursor() {
  const reduceMotion = useReducedMotion()

  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [pressed, setPressed] = useState(false)
  const [overText, setOverText] = useState(false)
  const [outside, setOutside] = useState(true)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { damping: 28, stiffness: 220, mass: 0.6 })
  const ringY = useSpring(y, { damping: 28, stiffness: 220, mass: 0.6 })

  // Only enable on fine pointer devices (desktop mouse)
  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setEnabled(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!enabled) return undefined

    const root = document.documentElement
    root.classList.add('has-custom-cursor')

    const onMove = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setOutside(false)
    }

    const onOver = (e) => {
      const target = e.target
      if (!(target instanceof Element)) return
      setOverText(Boolean(target.closest(TEXT_INPUT)))
      setHovering(Boolean(target.closest(INTERACTIVE)))
    }

    const onDown = () => setPressed(true)
    const onUp = () => setPressed(false)
    const onLeave = () => setOutside(true)

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver, { passive: true })
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    root.addEventListener('mouseleave', onLeave)

    return () => {
      root.classList.remove('has-custom-cursor')
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      root.removeEventListener('mouseleave', onLeave)
    }
  }, [enabled, x, y])

  if (!enabled) return null

  const invisible = outside || overText

  return (
    <>
      {/* Dot */}
      <motion.div
        aria-hidden="true"
        style={{ x, y }}
        animate={{ opacity: invisible ? 0 : 1, scale: hovering ? 0.5 : 1 }}
        transition={{ duration: 0.15 }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-1 -mt-1 h-2 w-2 rounded-full bg-[var(--accent)]"
      />

      {/* Ring */}
      <motion.div
        aria-hidden="true"
        style={{ x: reduceMotion ? x : ringX, y: reduceMotion ? y : ringY }}
        animate={{
          opacity: invisible ? 0 : 1,
          scale: pressed ? 0.85 : hovering ? 1.6 : 1,
        }}
        transition={{
          opacity: { duration: 0.15 },
          scale: { type: 'spring', stiffness: 300, damping: 22 },
        }}
        className={`pointer-events-none fixed left-0 top-0 z-[9998] -ml-[18px] -mt-[18px] h-9 w-9 rounded-full border transition-[border-color,background-color] duration-200 ${
          hovering ? RING_ACTIVE : RING_IDLE
        }`}
      />
    </>
  )
}