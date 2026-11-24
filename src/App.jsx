import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import MainLayout from './layout/MainLayout'
import SplashScreen from './components/SplashScreen'

import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

const SPLASH_KEY = 'splash-seen'

function shouldShowSplash() {
  try {
    return !sessionStorage.getItem(SPLASH_KEY)
  } catch {
    return false
  }
}

export default function App() {
  const [showSplash, setShowSplash] = useState(shouldShowSplash)

  const handleFinish = () => {
    try {
      sessionStorage.setItem(SPLASH_KEY, '1')
    } catch {
      // storage unavailable
    }
    setShowSplash(false)
  }

  return (
    <AnimatePresence mode="wait">
      {showSplash ? (
        <SplashScreen key="splash" onFinish={handleFinish} />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <MainLayout>
            <Hero />
            <About />
            <Experience />
            <Education />
            <Skills />
            <Projects />
            <Contact />
          </MainLayout>
        </motion.div>
      )}
    </AnimatePresence>
  )
}