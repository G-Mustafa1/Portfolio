import { Toaster } from 'react-hot-toast'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollProgressBar from '../components/ScrollProgressbar'
import CustomCursor from '../components/CustomCursor'
import { useSpotlight } from '../hooks/useSpotlight'

export default function MainLayout({ children }) {
  useSpotlight()
  return (
    <>
      <Toaster
        position="top-center"
        containerStyle={{ top: 76 }}
        toastOptions={{
          style: {
            background: 'var(--surface)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border)',
            borderRadius: '0.5rem',
            fontSize: '14px',
          },
          success: {
            iconTheme: {
              primary: 'var(--accent)',
              secondary: 'var(--accent-contrast)',
            },
          },
        }}
      />

      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <CustomCursor />
      <ScrollProgressBar />

      <div className="page-shell relative min-h-screen overflow-x-clip">
        <Navbar />

        <main id="main-content" className="relative">
          {children}
        </main>

        <Footer />
      </div>
    </>
  )
}