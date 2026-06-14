import { useState } from 'react'
import { motion } from 'framer-motion'
import { Icon, Reveal, Lightbox } from '../ui.jsx'
import { stagger, riseItem } from '../motion.js'
import { PROJECTS } from '../data.js'

const TONE = {
  accent: { text: 'group-hover:accent-text', tag: 'accent-text bg-[rgba(var(--accent-rgb),0.08)] accent-border', c: 'var(--accent-color)' },
  violet: { text: 'group-hover:text-violet-600', tag: 'text-violet-600 bg-violet-50 border-violet-200', c: '#8b5cf6' },
  rose: { text: 'group-hover:text-rose-600', tag: 'text-rose-600 bg-rose-50 border-rose-200', c: '#f43f5e' },
  emerald: { text: 'group-hover:text-emerald-600', tag: 'text-emerald-600 bg-emerald-50 border-emerald-200', c: '#10b981' },
}

export default function Projects() {
  const [lb, setLb] = useState(null)   // { items, index } | null

  return (
    <section id="projects" className="border-t border-slate-200/60 bg-slate-50/40 py-24 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mono accent-text mb-3 block text-xs font-bold uppercase tracking-widest">scientific portfolio case studies</span>
          <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">Featured Projects & Systems</h2>
          <p className="mt-3 text-sm text-slate-500">
            Deep structural pipelines built to solve real data-modeling and automation problems.
          </p>
        </Reveal>

        <motion.div variants={stagger} initial="hidden" whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map(p => {
            const t = TONE[p.tone]
            return (
              <motion.article key={p.title} variants={riseItem} whileHover={{ y: -6 }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition-shadow hover:shadow-xl">
                <div className="group/cover relative h-28 overflow-hidden border-b border-slate-100 bg-slate-50">
                  <ProjectArt kind={p.art} color={t.c} />
                  {p.gallery && (
                    <button type="button" onClick={() => setLb({ items: p.gallery, index: 0 })}
                      aria-label={`Open ${p.title} gallery`}
                      className="absolute inset-0 flex items-center justify-center bg-slate-900/0 transition hover:bg-slate-900/40">
                      <span className="mono flex items-center gap-1.5 rounded-md bg-slate-900/80 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-wider text-white opacity-0 backdrop-blur-sm transition group-hover/cover:opacity-100">
                        <Icon name="images" className="h-3 w-3" /> View gallery ({p.gallery.length})
                      </span>
                    </button>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <span className={`mono rounded-md border px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider ${t.tag}`}>{p.tag}</span>
                    <span className="mono text-xs text-slate-400">{p.year}</span>
                  </div>
                  <h3 className={`mb-2.5 text-lg font-bold leading-snug text-slate-800 transition-colors ${t.text}`}>{p.title}</h3>
                  <p className="mb-4 text-xs leading-relaxed text-slate-500">{p.desc}</p>
                  <ul className="mono space-y-2.5 border-t border-slate-100 pt-4 text-[11px] text-slate-600">
                    {p.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span style={{ color: t.c }} className="mt-0.5 font-bold">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                    {p.stack.map(s => (
                      <span key={s} className="mono rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-[9px] font-bold text-slate-500">{s}</span>
                    ))}
                  </div>
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    className="mono mt-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 transition hover:[color:var(--accent-color)]">
                    <Icon name="github" className="h-3.5 w-3.5" /> View on GitHub
                  </a>
                </div>
              </motion.article>
            )
          })}
        </motion.div>

        <Reveal delay={0.1} className="mt-12 text-center">
          <a href="https://github.com/Hariharan6880" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 text-xs font-bold uppercase tracking-widest text-slate-700 shadow-sm transition hover:bg-slate-50">
            View All on GitHub <Icon name="arrow" className="h-4 w-4" />
          </a>
        </Reveal>
      </div>

      {lb && (
        <Lightbox
          items={lb.items}
          index={lb.index}
          onIndex={(i) => setLb(s => ({ ...s, index: i }))}
          onClose={() => setLb(null)}
        />
      )}
    </section>
  )
}

// Animated header art per project type.
function ProjectArt({ kind, color }) {
  if (kind === 'grid') {
    return (
      <svg viewBox="0 0 300 80" className="h-full w-full px-4" preserveAspectRatio="none">
        <motion.path d="M10,60 L50,40 L90,65 L130,12 L170,55 L210,15 L250,68 L290,22"
          fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
          transition={{ duration: 1.6, ease: 'easeInOut' }} />
        <line x1="130" y1="12" x2="130" y2="80" stroke="#f43f5e" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="130" cy="12" r="4" fill="#f43f5e" />
      </svg>
    )
  }
  if (kind === 'graph') {
    return (
      <svg viewBox="0 0 300 80" className="h-full w-full px-4">
        {[20, 130, 240].map((x, i) => (
          <rect key={i} x={x} y="26" width="42" height="30" rx="6" fill="#faf5ff" stroke={color} strokeWidth="1.5" />
        ))}
        <path d="M62,41 H130 M172,41 H240" stroke={color} strokeWidth="1.5" className="svg-flow" />
        <motion.path d="M261,26 C261,8 151,8 151,24" fill="none" stroke="#f43f5e" strokeWidth="1.5"
          animate={{ pathLength: [0, 1, 1] }} transition={{ duration: 2.5, repeat: Infinity }} />
        <circle cx="206" cy="9" r="3" fill="#f43f5e" />
      </svg>
    )
  }
  if (kind === 'radar') {
    return (
      <svg viewBox="0 0 300 80" className="h-full w-full">
        <g transform="translate(150 40)">
          {[14, 24, 34].map(r => <circle key={r} r={r} fill="none" stroke={color} strokeOpacity="0.3" />)}
          <motion.line x1="0" y1="0" x2="34" y2="0" stroke={color} strokeWidth="2"
            animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '0px 0px' }} />
          <circle r="3" fill={color} />
          <circle cx="20" cy="-12" r="3" fill="#f43f5e" />
        </g>
      </svg>
    )
  }
  // pulse
  return (
    <svg viewBox="0 0 300 80" className="h-full w-full px-4" preserveAspectRatio="none">
      {[0, 1, 2, 3, 4].map(i => (
        <motion.rect key={i} x={30 + i * 56} width="34" rx="5" fill={color} fillOpacity={0.4 + i * 0.1}
          animate={{ height: [20, 50, 20], y: [50, 20, 50] }}
          transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.2 }} />
      ))}
    </svg>
  )
}
