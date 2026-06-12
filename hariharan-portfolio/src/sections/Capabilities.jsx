import { motion } from 'framer-motion'
import { Icon, Reveal } from '../ui.jsx'
import { stagger, riseItem } from '../motion.js'
import { CAPABILITIES, TOOLS } from '../data.js'

const TONE = {
  accent: { box: 'bg-[rgba(var(--accent-rgb),0.10)] accent-text', hov: 'group-hover:accent-bg' },
  violet: { box: 'bg-violet-50 text-violet-600', hov: 'group-hover:bg-violet-600' },
  emerald: { box: 'bg-emerald-50 text-emerald-600', hov: 'group-hover:bg-emerald-600' },
  amber: { box: 'bg-amber-50 text-amber-600', hov: 'group-hover:bg-amber-500' },
}

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative border-t border-slate-200/60 bg-white/50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mono accent-text mb-3 block text-xs font-bold uppercase tracking-widest">// architectural powerhouses</span>
          <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">What I Deliver</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-500">
            Data science is useless trapped in a notebook. I fuse statistical ML pipelines with high-speed creative UI to ship complete production tools.
          </p>
        </Reveal>

        <motion.div variants={stagger} initial="hidden" whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map(c => {
            const t = TONE[c.tone]
            return (
              <motion.div key={c.title} variants={riseItem}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition-shadow hover:shadow-xl">
                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl shadow-inner transition-colors duration-300 group-hover:text-white ${t.box} ${t.hov}`}>
                  <Icon name={c.icon} className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-base font-extrabold text-slate-900">{c.title}</h3>
                <p className="text-[11px] leading-relaxed text-slate-500">{c.body}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Skills marquee */}
      <div className="relative mt-16 overflow-hidden border-y border-slate-200/60 bg-slate-50/60 py-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#f6f8fc] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#f6f8fc] to-transparent" />
        <div className="flex w-max anim-ticker gap-3">
          {[...TOOLS, ...TOOLS].map((t, i) => (
            <span key={i} className="mono whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] font-bold text-slate-600 shadow-sm">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
