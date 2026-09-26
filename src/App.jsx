import React, { useState, useEffect, useContext } from 'react'
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
        position="top-center"
        reverseOrder={false}
      />

      {/* Cursor */}
      <CustomCursor />

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
            className="relative min-h-screen bg-slate-50 dark:bg-dark-bg overflow-x-hidden selection:bg-primary-500/30"
          >
            {/* Ambient Background Blobs */}
            <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

              <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary-500/10 dark:bg-primary-500/5 blur-[120px] rounded-full animate-pulse" />
              <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 dark:bg-purple-500/5 blur-[120px] rounded-full animate-pulse delay-1000" />
              <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-accent-500/10 dark:bg-accent-500/5 blur-[120px] rounded-full animate-pulse delay-2000" />
            </div>


            {/* Scroll Progress */}
            <ScrollProgressBar />

            {/* Main Content */}
            <Navbar />

            <main className="relative">
              <Hero />
              <About />
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