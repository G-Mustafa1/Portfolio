import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {  
  const [isDark, setIsDark] = useState(() => {
    const storedTheme = localStorage.getItem('theme')

    if (storedTheme === 'dark') return true
    if (storedTheme === 'light') return false

    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const root = document.documentElement
    const theme = isDark ? 'dark' : 'light'

    root.classList.toggle('dark', isDark)
    localStorage.setItem('theme', theme)
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(prev => !prev)
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {  
  return useContext(ThemeContext)
}