import { useState } from 'react'
import toast from 'react-hot-toast'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import {
  HiMail,
  HiLocationMarker,
  HiClipboardCopy,
  HiCheck,
  HiExternalLink,
} from 'react-icons/hi'

const EMAIL = 'gmustufa1255@gmail.com'

const LINKS = [
  {
    label: 'GitHub',
    value: 'github.com/G-Mustafa1',
    href: 'https://github.com/G-Mustafa1',
    icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/ghulam-mustufa',
    href: 'https://www.linkedin.com/in/ghulam-mustufa',
    icon: FaLinkedinIn,
  },
]

function InfoRow({ icon: Icon, label, children }) {
  return (
    <li className="flex items-center gap-4 border-b border-[var(--border)] py-4 last:border-0">
      <span
        aria-hidden="true"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--accent)]"
      >
        <Icon />
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
          {label}
        </p>
        {children}
      </div>
    </li>
  )
}

export default function ContactInfo() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      toast.success('Email copied')
      setTimeout(() => setCopied(false), 2000)
    } catch {
      toast.error('Could not copy. Please copy it manually.')
    }
  }

  return (
    <ul className="border-t border-[var(--border)]">
      {/* Email + copy */}
      <InfoRow icon={HiMail} label="Email">
        <div className="mt-0.5 flex items-center justify-between gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="truncate text-[15px] font-medium text-[var(--text-primary)] transition-colors hover:text-[var(--accent)]"
          >
            {EMAIL}
          </a>
          <button
            type="button"
            onClick={handleCopy}
            aria-label="Copy email address"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[var(--border)] text-[var(--text-secondary)] transition-colors hover:border-[var(--text-muted)] hover:text-[var(--text-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]"
          >
            {copied ? (
              <HiCheck aria-hidden="true" className="text-[var(--accent)]" />
            ) : (
              <HiClipboardCopy aria-hidden="true" />
            )}
          </button>
        </div>
      </InfoRow>

      {/* Social links */}
      {LINKS.map(({ label, value, href, icon }) => (
        <InfoRow key={label} icon={icon} label={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-0.5 inline-flex max-w-full items-center gap-1.5 text-[15px] font-medium text-[var(--text-primary)] transition-colors hover:text-[var(--accent)]"
          >
            <span className="truncate">{value}</span>
            <HiExternalLink
              aria-hidden="true"
              className="shrink-0 text-sm opacity-0 transition-opacity group-hover:opacity-100"
            />
          </a>
        </InfoRow>
      ))}

      {/* Location */}
      <InfoRow icon={HiLocationMarker} label="Location">
        <p className="mt-0.5 text-[15px] font-medium text-[var(--text-primary)]">
          Karachi, Pakistan
        </p>
      </InfoRow>
    </ul>
  )
}