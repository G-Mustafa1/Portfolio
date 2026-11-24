import { useEffect, useState } from 'react'

export function useScrollSpy(sectionIds, offset = 120) {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0

      const line = Math.max(offset, window.innerHeight * 0.3)

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4
      if (atBottom) {
        setActiveSection(sectionIds[sectionIds.length - 1])
        return
      }

      let current = ''
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) {
          current = id
        }
      }
      setActiveSection(current)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [sectionIds, offset])

  return activeSection
}