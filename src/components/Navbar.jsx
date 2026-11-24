import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { useTheme } from '../context/ThemeContext'
import { HiMenuAlt3, HiX, HiSun, HiMoon } from 'react-icons/hi'

const NAV_LINKS = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
]

const SECTION_IDS = NAV_LINKS.map((link) => link.href.replace('#', ''))

function ThemeToggle({ isDark, toggleTheme }) {
    return (
        <button
            type="button"
            onClick={toggleTheme}
            role="switch"
            aria-checked={isDark}
            aria-label="Dark mode"
            className="flex h-10 w-10 shrink-0 items-center justify-center text-[var(--text-secondary)] transition-colors hover:border-[var(--text-muted)] hover:text-[var(--text-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]"
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                    key={isDark ? 'sun' : 'moon'}
                    initial={{ opacity: 0, rotate: -45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.15 }}
                >
                    {isDark
                        ? <HiSun aria-hidden="true" className="text-lg" />
                        : <HiMoon aria-hidden="true" className="text-lg" />}
                </motion.span>
            </AnimatePresence>
        </button>
    )
}

export default function Navbar() {
    const { isDark, toggleTheme } = useTheme()
    const [menuOpen, setMenuOpen] = useState(false)
    const activeSection = useScrollSpy(SECTION_IDS, 120)
    const menuButtonRef = useRef(null)
    const drawerRef = useRef(null)

    useLayoutEffect(() => {
        if (!menuOpen) return undefined

        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'

        drawerRef.current?.querySelector('a[href]')?.focus()

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                event.preventDefault()
                setMenuOpen(false)
                menuButtonRef.current?.focus()
                return
            }

            if (event.key !== 'Tab' || !drawerRef.current) return

            const focusableItems = [...drawerRef.current.querySelectorAll('a[href], button:not(:disabled)')]
                .filter((item) => item.getClientRects().length > 0)
            const firstItem = focusableItems[0]
            const lastItem = focusableItems[focusableItems.length - 1]

            if (!firstItem || !lastItem) return

            if (event.shiftKey && (document.activeElement === firstItem || !drawerRef.current.contains(document.activeElement))) {
                event.preventDefault()
                lastItem.focus()
            } else if (!event.shiftKey && (document.activeElement === lastItem || !drawerRef.current.contains(document.activeElement))) {
                event.preventDefault()
                firstItem.focus()
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.body.style.overflow = previousOverflow
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [menuOpen])

    useEffect(() => {
        const desktopQuery = window.matchMedia('(min-width: 1024px)')
        const handleBreakpointChange = (event) => {
            if (event.matches && menuOpen) {
                setMenuOpen(false)
                document.querySelector('header nav a')?.focus()
            }
        }

        desktopQuery.addEventListener('change', handleBreakpointChange)
        return () => desktopQuery.removeEventListener('change', handleBreakpointChange)
    }, [menuOpen])

    const handleNavClick = (href) => {
        setMenuOpen(false)
        const el = document.getElementById(href.replace('#', ''))
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const closeMenu = () => {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
    }

    return (
        <>
            <motion.header
                initial={{ y: -16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="navbar-glass fixed inset-x-0 top-0 z-50"
            >
                <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10">
                    <div className="flex h-16 items-center justify-between gap-3">
                        {/* Logo */}
                        <a
                            href="#hero"
                            onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
                            className="flex min-h-11 shrink-0 items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]"
                        >
                            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[var(--accent)] font-mono text-xs font-semibold text-[var(--accent-contrast)]">
                                GM
                            </span>
                            <span className="text-sm font-semibold tracking-tight text-[var(--text-primary)] sm:text-[15px]">
                                Ghulam Mustafa
                            </span>
                        </a>

                        {/* Desktop Nav */}
                        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
                            {NAV_LINKS.map((link) => {
                                const sectionId = link.href.replace('#', '')
                                const isActive = activeSection === sectionId
                                return (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                                        aria-current={isActive ? 'location' : undefined}
                                        className={`group flex min-h-11 items-center rounded-md px-3 text-[13px] font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] ${isActive
                                            ? 'text-[var(--text-primary)]'
                                            : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                                            }`}
                                    >
                                        <span className="relative">
                                            {link.label}
                                            <span
                                                aria-hidden="true"
                                                className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[var(--accent)] transition-transform duration-300 ease-out group-hover:scale-x-100"
                                            />
                                        </span>
                                    </a>
                                )
                            })}
                        </nav>

                        {/* Right controls */}
                        <div className="flex shrink-0 items-center gap-2">
                            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

                            {/* Mobile menu button */}
                            <button
                                ref={menuButtonRef}
                                type="button"
                                onClick={() => setMenuOpen((prev) => !prev)}
                                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                                aria-expanded={menuOpen}
                                aria-controls="mobile-navigation"
                                className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--border)] text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] lg:hidden"
                            >
                                <AnimatePresence mode="wait" initial={false}>
                                    {menuOpen ? (
                                        <motion.span
                                            key="close"
                                            initial={{ opacity: 0, rotate: -90 }}
                                            animate={{ opacity: 1, rotate: 0 }}
                                            exit={{ opacity: 0, rotate: 90 }}
                                            transition={{ duration: 0.15 }}
                                        >
                                            <HiX aria-hidden="true" className="text-lg" />
                                        </motion.span>
                                    ) : (
                                        <motion.span
                                            key="menu"
                                            initial={{ opacity: 0, rotate: 90 }}
                                            animate={{ opacity: 1, rotate: 0 }}
                                            exit={{ opacity: 0, rotate: -90 }}
                                            transition={{ duration: 0.15 }}
                                        >
                                            <HiMenuAlt3 aria-hidden="true" className="text-lg" />
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.header>

            {/* Mobile backdrop */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={closeMenu}
                        aria-hidden="true"
                        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-[2px] lg:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Mobile drawer */}
            <motion.aside
                initial={{ x: '100%' }}
                animate={{ x: menuOpen ? 0 : '100%' }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                id="mobile-navigation"
                ref={drawerRef}
                role="dialog"
                aria-modal={menuOpen}
                aria-hidden={!menuOpen}
                inert={!menuOpen}
                aria-label="Mobile navigation"
                className="fixed inset-y-0 right-0 z-50 flex w-[min(20rem,100vw)] flex-col border-l border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] lg:hidden"
            >
                <div className="flex h-16 items-center justify-between border-b border-[var(--border)] px-5">
                    <div className="flex items-center gap-2.5">
                        <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-md bg-[var(--accent)] font-mono text-xs font-semibold text-[var(--accent-contrast)]">GM</span>
                        <span className="text-sm font-semibold">Ghulam Mustafa</span>
                    </div>
                    <button
                        type="button"
                        onClick={closeMenu}
                        aria-label="Close menu"
                        className="flex h-10 w-10 items-center justify-center rounded-md text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]"
                    >
                        <HiX aria-hidden="true" className="text-lg" />
                    </button>
                </div>

                <nav aria-label="Mobile navigation links" className="flex-1 overflow-y-auto p-4">
                    <ul className="flex flex-col">
                        {NAV_LINKS.map((link) => {
                            const sectionId = link.href.replace('#', '')
                            const isActive = activeSection === sectionId
                            return (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                                        aria-current={isActive ? 'location' : undefined}
                                        className={`flex min-h-12 items-center gap-3 border-b border-[var(--border)] px-2 text-[15px] font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] ${isActive
                                            ? 'text-[var(--text-primary)]'
                                            : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                                            }`}
                                    >
                                        <span
                                            aria-hidden="true"
                                            className={`h-1.5 w-1.5 rounded-full transition-colors ${isActive ? 'bg-[var(--accent)]' : 'bg-transparent'}`}
                                        />
                                        {link.label}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                <div className="border-t border-[var(--border)] p-5">
                    <div className="mb-4 flex items-center justify-between">
                        <span className="text-sm font-medium text-[var(--text-secondary)]">Dark mode</span>
                        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
                    </div>
                    <p className="text-center font-mono text-xs text-[var(--text-muted)]">
                        Full Stack Developer · Karachi, PK
                    </p>
                </div>
            </motion.aside>
        </>
    )
}