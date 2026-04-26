import React from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SplashScreen from './components/SplashScreen'
import { Toaster } from 'react-hot-toast'

export default function App() {
  const [loading, setLoading] = React.useState(true)

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <AnimatePresence mode="wait">
        {loading && <SplashScreen onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      <div className={`relative min-h-screen bg-white dark:bg-gray-950 overflow-x-hidden ${loading ? 'h-screen overflow-hidden' : ''}`}>
        {/* Global ambient blobs */}
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full
              bg-primary-400/10 dark:bg-primary-600/10 animate-blob blur-3xl"
          />
          <div
            className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full
              bg-purple-400/10 dark:bg-purple-600/10 animate-blob animation-delay-2000 blur-3xl"
          />
          <div
            className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full
              bg-accent-400/10 dark:bg-accent-600/10 animate-blob animation-delay-4000 blur-3xl"
          />
        </div>

        {!loading && (
          <>
            <Navbar />
            <main>
              <Hero />
              {/* <About /> */}
              <Skills />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </>
        )}
      </div>
    </>
  )
}