import React, { useState, useEffect, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { useTheme } from '../context/ThemeContext'
import {
    HiSun,
    HiMoon,
    HiMenuAlt3,
    HiX,
    HiCode,
} from 'react-icons/hi'

const NAV_LINKS = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
]

const SECTION_IDS = ['hero', 'about', 'skills', 'projects', 'contact']

export default function Navbar() {
    const { isDark, toggleTheme } = useTheme()
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const activeSection = useScrollSpy(SECTION_IDS, 120)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    const handleNavClick = (href) => {
        setMenuOpen(false)
        const id = href.replace('#', '')
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <>
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all shadow-sm duration-500 border-b backdrop-blur-lg ${scrolled
                    ? 'bg-white/70 dark:bg-gray-950/70 border-gray-200/50 dark:border-white/10 shadow-lg shadow-black/5'
                    : 'bg-white/70 dark:bg-gray-800/70 border-transparent shadow-2xl'
                    }`}
            >
                <div className="max-w-7xl mx-auto  px-6 md:px-11.25">                    
                    <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.a
                        href="#hero"
                        onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 group"
                    >
                        <div className="w-8 h-8 rounded-lg bg-linear-to-br from-primary-500  to-accent-500 flex items-center justify-center shadow-md shadow-primary-500/30">
                            <HiCode className="text-white text-base" />
                        </div>
                        <span className="font-bold text-lg">
                            <span className="gradient-text">GM</span>
                            <span className="text-gray-400 dark:text-gray-500 font-light ml-0.5">.</span>
                        </span>
                    </motion.a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {NAV_LINKS.map((link, index) => {
                            const sectionId = link.href.replace('#', '')
                            const isActive = activeSection === sectionId

                            return (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        handleNavClick(link.href)
                                    }}

                                    initial={{ opacity: 0, y: -30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: 0.6 + (index * 0.05),
                                        duration: 0.4,
                                        ease: "easeOut"
                                    }}
                                    whileHover={{
                                        y: -2,
                                        transition: { duration: 0.2 },
                                    }}
                                    whileTap={{ scale: 0.96 }}

                                    className={`relative group px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                                        ? 'text-primary-600 dark:text-primary-400'
                                        : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                                        }`}
                                >
                                    {/* Hover Underline */}
                                    {!isActive && (
                                        <span className="absolute -bottom-[2px] left-4 right-4 h-0.5 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                    )}

                                    <span className="relative z-10">
                                        {link.label}
                                    </span>
                                </motion.a>
                            )
                        })}
                    </nav>

                    {/* Right controls */}
                    <div className="flex items-center gap-2">
                        {/* Theme toggle */}
                        <motion.button
                            onClick={toggleTheme}

                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.4 }}

                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.9, rotate: 15 }}

                            aria-label="Toggle theme"
                            className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-200"
                        >
                            <AnimatePresence mode="wait">
                                {isDark ? (
                                    <motion.span
                                        key="sun"

                                        /* FIRST NAVBAR ICON ANIMATION */
                                        initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                        exit={{ opacity: 0, rotate: 90, scale: 0.5 }}

                                        transition={{ duration: 0.2 }}
                                    >
                                        <HiSun className="text-amber-400 text-lg" />
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="moon"

                                        /* FIRST NAVBAR ICON ANIMATION */
                                        initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                        exit={{ opacity: 0, rotate: -90, scale: 0.5 }}

                                        transition={{ duration: 0.2 }}
                                    >
                                        <HiMoon className="text-primary-600 text-lg" />
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.button>

                        {/* Mobile menu button */}
                        <motion.button
                            onClick={() => setMenuOpen(prev => !prev)}

                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.4 }}

                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}

                            aria-label="Toggle menu"
                            className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center
    bg-gray-100 dark:bg-gray-800
    text-gray-600 dark:text-gray-300
    hover:bg-gray-200 dark:hover:bg-gray-700
    transition-colors duration-200"
                        >
                            <AnimatePresence mode="wait">
                                {menuOpen ? (
                                    <motion.span
                                        key="close"

                                        /* FIRST NAVBAR ICON SWITCH ANIMATION */
                                        initial={{ opacity: 0, rotate: -90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: 90 }}

                                        transition={{ duration: 0.15 }}
                                    >
                                        <HiX className="text-lg" />
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="menu"

                                        /* FIRST NAVBAR ICON SWITCH ANIMATION */
                                        initial={{ opacity: 0, rotate: 90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: -90 }}

                                        transition={{ duration: 0.15 }}
                                    >
                                        <HiMenuAlt3 className="text-lg" />
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => setMenuOpen(false)}
                            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
                        />

                        {/* Drawer */}
                        <motion.div
                            key="drawer"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 260 }}
                            className="fixed top-0 right-0 bottom-0 z-50 w-72 md:hidden
                bg-white dark:bg-gray-900
                border-l border-gray-200 dark:border-gray-800
                shadow-2xl flex flex-col"
                        >
                            {/* Drawer header */}
                            <div className="flex items-center justify-between p-5 border-b border-gray-100 dark:border-gray-800">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center">
                                        <HiCode className="text-white text-base" />
                                    </div>
                                    <span className="font-bold text-lg gradient-text">Ghulam Mustafa</span>
                                </div>
                                <button
                                    onClick={() => setMenuOpen(false)}
                                    className="w-8 h-8 rounded-lg flex items-center justify-center
                    text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                >
                                    <HiX />
                                </button>
                            </div>

                            {/* Drawer links */}
                            <nav className="flex-1 p-5 flex flex-col gap-1">
                                {NAV_LINKS.map((link, i) => {
                                    const sectionId = link.href.replace('#', '')
                                    const isActive = activeSection === sectionId
                                    return (
                                        <motion.a
                                            key={link.href}
                                            href={link.href}
                                            onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                                            initial={{ opacity: 0, x: 30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.06 }}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${isActive
                                                ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                                                }`}
                                        >
                                            <span className={`w-1.5 h-1.5 rounded-full transition-colors ${isActive ? 'bg-primary-500' : 'bg-gray-300 dark:bg-gray-600'
                                                }`} />
                                            {link.label}
                                        </motion.a>
                                    )
                                })}
                            </nav>

                            {/* Drawer footer */}
                            <div className="p-5 border-t border-gray-100 dark:border-gray-800">
                                <p className="text-xs text-gray-400 dark:text-gray-500 text-center">
                                    MERN Stack Developer · Karachi, PK
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}