import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Toaster } from 'react-hot-toast'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SplashScreen from './components/SplashScreen'
import CustomCursor from './components/CustomCursor'

// Sections
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import ScrollProgressBar from './components/ScrollProgressbar'

export default function App() {
  // const [loading, setLoading] = useState(true)
  const [showSplash, setShowSplash] = useState(true)

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false)
  //   }, 2000)

  //   return () => clearTimeout(timer)
  // }, [])

  return (
    <>
      {/* Toast */}
      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />

      {/* Cursor */}
      <CustomCursor />

      {/* Scroll Progress */}
      <ScrollProgressBar />

      {/* Animate Screens */}
      <AnimatePresence mode="wait">
        {showSplash ? (
          <SplashScreen
            key="splash"
            onFinish={() => setShowSplash(false)}
          />
        ) : (
          <motion.div
            key="content"
            className="relative min-h-screen bg-white dark:bg-gray-950 overflow-x-hidden selection:bg-purple-500/30"
          >
            {/* Ambient Background Blobs */}
            <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
              
              {/* Blob 1 */}
              <div
                className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full
                bg-primary-400/10 dark:bg-primary-600/10
                animate-blob blur-3xl"
              />

              {/* Blob 2 */}
              <div
                className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full
                bg-purple-400/10 dark:bg-purple-600/10
                animate-blob animation-delay-2000 blur-3xl"
              />

              {/* Blob 3 */}
              <div
                className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full
                bg-accent-400/10 dark:bg-accent-600/10
                animate-blob animation-delay-4000 blur-3xl"
              />
            </div>

            {/* Main Content */}
            <Navbar />

            <main className="relative">
              <Hero />
              {/* <About /> */}
              <Skills />
              <Projects />
              <Contact />
            </main>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}