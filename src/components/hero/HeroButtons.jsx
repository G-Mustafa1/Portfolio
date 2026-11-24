
import { HiDownload, HiMail } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href="#contact"
        className="btn-primary"
      >
        <HiMail aria-hidden="true" className="text-base" />
        Contact Me
      </a>

      <a
        href="/Ghulam_Mustafa_CV.pdf"
        download="Ghulam_Mustafa_CV.pdf"
        className="btn-secondary"
      >
        <HiDownload aria-hidden="true" className="text-base" />
        Download CV
      </a>

      <a
        href="https://github.com/G-Mustafa1"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my GitHub profile"
        className="btn-secondary"
      >
        <FaGithub aria-hidden="true" className="text-base" />
        GitHub
      </a>
    </div>
  )
}
