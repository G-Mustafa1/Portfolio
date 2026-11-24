import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiMail, HiArrowUp } from 'react-icons/hi'

const EMAIL = 'gmustufa1255@gmail.com'

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const SOCIALS = [
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/G-Mustafa1' },
  {
    icon: FaLinkedinIn,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ghulam-mustufa',
  },
  { icon: HiMail, label: 'Email', href: `mailto:${EMAIL}` },
]

const focusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (e, href) => {
    e.preventDefault()
    document
      .getElementById(href.replace('#', ''))
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--page-bg)]">
      <div className="container-max max-w-[1240px] px-5 sm:px-8 lg:px-10">
        {/* Top */}
        <div className="grid gap-10 py-12 sm:py-14 md:grid-cols-[1.4fr_1fr_1fr] md:gap-12">
          {/* Brand */}
          <div>
            <a
              href="#hero"
              onClick={(e) => scrollTo(e, '#hero')}
              className={`inline-flex items-center gap-2.5 rounded-lg ${focusRing}`}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[var(--accent)] font-mono text-xs font-semibold text-[var(--accent-contrast)]">
                GM
              </span>
              <span className="text-[15px] font-semibold tracking-tight text-[var(--text-primary)]">
                Ghulam Mustafa
              </span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--text-secondary)]">
              Full Stack Developer from Karachi, building fast, responsive web
              applications with the MERN stack.
            </p>

            <p className="mt-5 inline-flex items-center gap-2 font-mono text-xs text-[var(--text-muted)]">
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-50" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              </span>
              Available for new opportunities
            </p>
          </div>

          {/* Navigate */}
          <nav aria-label="Footer navigation">
            <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
              Navigate
            </h2>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 md:grid-cols-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className={`text-sm text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-primary)] ${focusRing}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div>
            <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
              Connect
            </h2>

            <ul className="flex items-center gap-2">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={label}
                    className={`flex h-10 w-10 items-center justify-center rounded-md border border-[var(--border)] text-[var(--text-secondary)] transition-colors duration-200 hover:border-[var(--text-muted)] hover:text-[var(--text-primary)] ${focusRing}`}
                  >
                    <Icon aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={`mailto:${EMAIL}`}
              className={`mt-4 block break-all text-sm text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--accent)] ${focusRing}`}
            >
              {EMAIL}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-[var(--border)] py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-sm text-[var(--text-secondary)]">
              © {year} Ghulam Mustafa. All rights reserved.
            </p>
            <p className="font-mono text-xs text-[var(--text-muted)]">
              Built with React, Vite, Tailwind CSS and Framer Motion.
            </p>
          </div>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`inline-flex w-fit items-center gap-2 rounded-md border border-[var(--border)] px-3.5 py-2 text-sm text-[var(--text-secondary)] transition-colors duration-200 hover:border-[var(--text-muted)] hover:text-[var(--text-primary)] ${focusRing}`}
          >
            Back to top
            <HiArrowUp aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  )
}