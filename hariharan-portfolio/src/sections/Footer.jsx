import { Icon } from '../ui.jsx'
import { CONTACT } from '../data.js'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/50 py-10 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <span className="mono accent-grad bg-clip-text text-sm font-black tracking-wider text-transparent">
          HARIHARAN BALAJI
        </span>
        <p className="mono text-[10px] font-bold tracking-wider text-slate-400">
          © 2026 · Custom-engineered portfolio & freelance platform
        </p>
        <div className="flex gap-4">
          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
            className="text-slate-400 transition hover:[color:var(--accent-color)]"><Icon name="github" className="h-5 w-5" /></a>
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            className="text-slate-400 transition hover:[color:var(--accent-color)]"><Icon name="linkedin" className="h-5 w-5" /></a>
          <a href={`mailto:${CONTACT.email}`} aria-label="Email"
            className="text-slate-400 transition hover:[color:var(--accent-color)]"><Icon name="envelope" className="h-5 w-5" /></a>
        </div>
      </div>
    </footer>
  )
}
