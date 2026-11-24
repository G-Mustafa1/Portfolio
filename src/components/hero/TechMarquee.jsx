import { FaReact, FaNodeJs, FaJs, FaGitAlt } from 'react-icons/fa'
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
} from 'react-icons/si'

const ITEMS = [
  { name: 'React', icon: FaReact },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Express', icon: SiExpress },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'JavaScript', icon: FaJs },
  { name: 'Redux', icon: SiRedux },
  { name: 'Git', icon: FaGitAlt },
]

function Row({ hidden = false }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-10 pr-10"
      aria-hidden={hidden || undefined}
    >
      {ITEMS.map(({ name, icon: Icon }) => (
        <li
          key={name}
          className="flex items-center gap-2.5 font-mono text-sm text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--text-primary)]"
        >
          <Icon aria-hidden="true" className="text-xl" />
          {name}
        </li>
      ))}
    </ul>
  )
}

export default function TechMarquee() {
  return (
    <div className="marquee" role="region" aria-label="Technologies I work with">
      <div className="marquee-track">
        <Row />
        <Row hidden />
      </div>
    </div>
  )
}