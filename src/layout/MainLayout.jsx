import React from 'react'
import { Toaster } from 'react-hot-toast'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CustomCursor from '../components/CustomCursor'
import ScrollProgressBar from '../components/ScrollProgressbar'

export default function MainLayout({ children }) {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />

      <CustomCursor />
      <ScrollProgressBar />

      <div className="relative min-h-screen bg-slate-50 dark:bg-dark-bg overflow-x-hidden selection:bg-primary-500/30">

        {/* Background - optimized with radial gradients instead of heavy blur filters to eliminate mobile GPU lag */}
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden transform-gpu will-change-transform">
          <div className="absolute -top-[10%] -right-[10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.12)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(14,165,233,0.08)_0%,transparent_70%)] md:animate-pulse" />
          <div className="absolute top-[20%] -left-[10%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.10)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(168,85,247,0.06)_0%,transparent_70%)] md:animate-pulse md:delay-1000" />
          <div className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.10)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(56,189,248,0.06)_0%,transparent_70%)] md:animate-pulse md:delay-2000" />
        </div>

        <Navbar />

        <main className="relative">
          {children}
        </main>

        <Footer />

      </div>
    </>
  )
}
