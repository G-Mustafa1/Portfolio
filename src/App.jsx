import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import MainLayout from './layout/MainLayout'
import SplashScreen from './components/SplashScreen'

import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

export default function App() {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <AnimatePresence mode="wait">
      {showSplash ? (
        <SplashScreen
          key="splash"
          onFinish={() => setShowSplash(false)}
        />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <MainLayout>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </MainLayout>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
