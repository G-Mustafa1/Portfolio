/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

const STORAGE_KEY = 'theme'
const COLORS = { dark: '#09090b', light: '#f8fafc' }

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) !== 'light'
    } catch {
      return true
    }
  })

  useEffect(() => {
    const theme = isDark ? 'dark' : 'light'
    const root = document.documentElement

    root.classList.toggle('dark', isDark)
    root.style.colorScheme = theme
    root.style.backgroundColor = COLORS[theme]
    document
      .getElementById('theme-color')
      ?.setAttribute('content', COLORS[theme])

    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // storage unavailable
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark((prev) => !prev)
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}