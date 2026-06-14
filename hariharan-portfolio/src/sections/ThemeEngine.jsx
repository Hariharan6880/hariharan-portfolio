import { useState } from 'react'
import { motion } from 'framer-motion'
import { Icon, Reveal, useToast } from '../ui.jsx'
import { THEMES, FONTS } from '../data.js'

function applyTheme(t) {
  const root = document.documentElement.style
  root.setProperty('--accent-color', t.color)
  root.setProperty('--accent-rgb', t.rgb)
  root.setProperty('--accent-2-rgb', t.rgb2)
  root.setProperty('--accent-glow', `0 14px 40px rgba(${t.rgb}, 0.18)`)
}

function applyFont(f) {
  document.documentElement.style.setProperty('--font-display', f.stack)
}

export default function ThemeEngine() {
  const toast = useToast()
  const [theme, setTheme] = useState('cobalt')
  const [font, setFont] = useState('sans')

  const pickTheme = (id) => {
    setTheme(id); applyTheme(THEMES[id]); toast(`Color engine → ${THEMES[id].name}`)
  }
  const pickFont = (id) => {
    setFont(id); applyFont(FONTS[id]); toast(`Typography → ${FONTS[id].label}`)
  }

  return (
    <section id="theme-engine" className="relative border-t border-slate-200/60 bg-white/40 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mono accent-text mb-3 block text-xs font-bold uppercase tracking-widest">design expertise, live</span>
          <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">Dynamic Visual Theme Engine</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-500">
            Proof I can build stunning client-facing systems. Recolour and re-typeset this entire site in real time — every accent across the page reacts instantly.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
            <span className="mono absolute right-4 top-4 select-none text-[9px] text-slate-300">THEME_CONTROLLER_v2</span>
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">

              {/* colour swatches */}
              <div className="space-y-5">
                <h4 className="mono flex items-center gap-2 border-b border-slate-100 pb-2.5 text-xs font-bold uppercase tracking-widest text-slate-500">
                  <Icon name="palette" className="h-4 w-4 accent-text" /> 1 · Pick a colour system
                </h4>
                <div className="grid grid-cols-2 gap-3.5">
                  {Object.values(THEMES).map(t => {
                    const active = theme === t.id
                    return (
                      <motion.button key={t.id} onClick={() => pickTheme(t.id)} whileTap={{ scale: 0.96 }}
                        className={`flex items-center gap-3 rounded-2xl border bg-slate-50 p-3.5 text-left text-xs transition hover:bg-slate-100/60
                          ${active ? 'accent-border ring-1 ring-[rgba(var(--accent-rgb),0.4)]' : 'border-slate-200'}`}>
                        <span className="h-4 w-4 shrink-0 rounded-full" style={{ background: t.swatch }} />
                        <span className="flex flex-col">
                          <span className="text-[11px] font-bold text-slate-800">{t.name}</span>
                          <span className="text-[9px] text-slate-400">{t.sub}</span>
                        </span>
                      </motion.button>
                    )
                  })}
                </div>
              </div>

              {/* typography */}
              <div className="space-y-5">
                <h4 className="mono flex items-center gap-2 border-b border-slate-100 pb-2.5 text-xs font-bold uppercase tracking-widest text-slate-500">
                  <Icon name="font" className="h-4 w-4 accent-text" /> 2 · Switch typography
                </h4>
                <div className="flex flex-col gap-3">
                  {Object.values(FONTS).map(f => {
                    const active = font === f.id
                    return (
                      <motion.button key={f.id} onClick={() => pickFont(f.id)} whileTap={{ scale: 0.98 }}
                        className={`rounded-xl border bg-slate-50 p-3.5 text-left transition
                          ${active ? 'accent-border ring-1 ring-[rgba(var(--accent-rgb),0.4)]' : 'border-slate-200'}`}>
                        <span className="block text-xs font-bold text-slate-800" style={{ fontFamily: f.stack }}>{f.label}</span>
                        <span className="mt-0.5 block text-[10px] text-slate-500">{f.note}</span>
                      </motion.button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
