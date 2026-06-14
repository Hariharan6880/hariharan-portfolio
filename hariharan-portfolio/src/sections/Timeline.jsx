import { motion } from 'framer-motion'
import { Reveal } from '../ui.jsx'
import { TIMELINE } from '../data.js'

const DOT = {
  accent: { ring: 'border-[rgba(var(--accent-rgb),0.5)] bg-[rgba(var(--accent-rgb),0.10)]', dot: 'accent-bg', text: 'accent-text' },
  violet: { ring: 'border-violet-400 bg-violet-50', dot: 'bg-violet-500', text: 'text-violet-600' },
  emerald: { ring: 'border-emerald-400 bg-emerald-50', dot: 'bg-emerald-500', text: 'text-emerald-600' },
}

export default function Timeline() {
  return (
    <section id="journey" className="relative border-t border-slate-200/60 bg-white/50 py-24 backdrop-blur-sm">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal className="mb-16 text-center">
          <span className="mono accent-text mb-3 block text-xs font-bold uppercase tracking-widest">professional history roadmap</span>
          <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">Training & Experience</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-500">
            Advanced computing studies combined with high-fidelity physical automation engineering.
          </p>
        </Reveal>

        <div className="relative ml-4 space-y-12 border-l border-slate-200 md:ml-6">
          {TIMELINE.map((item, i) => {
            const d = DOT[item.tone]
            return (
              <Reveal key={item.role} delay={i * 0.08} className="relative pl-8 md:pl-11">
                <motion.span
                  initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18, delay: i * 0.08 }}
                  className={`absolute -left-[11px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full border ${d.ring}`}>
                  <span className={`h-2.5 w-2.5 rounded-full ${d.dot}`} />
                </motion.span>
                <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                  <div>
                    <span className={`mono text-[9px] font-extrabold uppercase tracking-widest ${d.text}`}>
                      {item.kind === 'work' ? 'Experience' : 'Education'}
                    </span>
                    <h3 className="mt-0.5 text-lg font-bold text-slate-800">{item.role}</h3>
                    <p className="text-sm font-semibold text-slate-600">{item.org}</p>
                  </div>
                  <div className="mono text-xs text-slate-400 md:text-right">{item.period}</div>
                </div>
                <ul className="mt-3.5 space-y-2 text-xs leading-relaxed text-slate-500 sm:text-sm">
                  {item.points.map((p, j) => (
                    <li key={j} className="flex gap-2">
                      <span className={`mt-1 ${d.text}`}>•</span><span>{p}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
