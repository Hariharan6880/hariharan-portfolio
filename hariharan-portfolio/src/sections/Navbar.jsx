import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '../ui.jsx'

const LINKS = [
  { id: 'about', label: 'Bio', icon: 'user' },
  { id: 'capabilities', label: 'Capabilities', icon: 'cubes' },
  { id: 'projects', label: 'Case Studies', icon: 'code' },
  { id: 'journey', label: 'Journey', icon: 'briefcase' },
  { id: 'contact', label: 'Contact', icon: 'envelope' },
]

function go(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar({ persona }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <motion.header
      initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300
        ${scrolled ? 'border-slate-200 bg-white/80 backdrop-blur-md shadow-sm' : 'border-transparent bg-white/40 backdrop-blur-sm'}`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-left">
          <span className="relative flex h-3.5 w-3.5">
            <span className="accent-bg absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" />
            <span className="accent-bg relative inline-flex h-3.5 w-3.5 rounded-full" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="mono accent-grad bg-clip-text text-sm font-black tracking-wider text-transparent">
              HARIHARAN BALAJI
            </span>
            <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-500">
              Data Scientist & Visual Architect
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-7 text-xs font-bold uppercase tracking-widest text-slate-600 lg:flex">
          {LINKS.map(l => (
            <button key={l.id} onClick={() => go(l.id)}
              className="flex items-center gap-1.5 transition-colors hover:[color:var(--accent-color)]">
              <Icon name={l.icon} className="h-3 w-3" /> {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button onClick={() => go('contact')}
            className="accent-bg shimmer hidden items-center gap-2 rounded-xl px-6 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-md transition hover:opacity-90 sm:inline-flex">
            {persona.headerCta} <Icon name="arrow" className="h-3 w-3" />
          </button>
          <button onClick={() => setOpen(o => !o)} aria-label="Toggle menu"
            className="p-2 text-slate-700 transition hover:[color:var(--accent-color)] lg:hidden">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
            className="overflow-hidden border-b border-slate-200 bg-white/95 lg:hidden">
            <div className="flex flex-col gap-1 px-6 py-5 text-xs font-bold uppercase tracking-widest">
              {LINKS.map(l => (
                <button key={l.id} onClick={() => { go(l.id); setOpen(false) }}
                  className="flex items-center gap-2 border-b border-slate-100 py-3 text-left text-slate-600">
                  <Icon name={l.icon} className="h-3.5 w-3.5 accent-text" /> {l.label}
                </button>
              ))}
              <button onClick={() => { go('contact'); setOpen(false) }}
                className="accent-bg mt-3 rounded-xl py-4 text-center text-white">
                {persona.headerCta}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
