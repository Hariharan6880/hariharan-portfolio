import { useRef } from 'react'
import {
  motion, AnimatePresence, useMotionValue, useSpring, useTransform,
} from 'framer-motion'
import { Icon, Reveal, useToast, HeroMedia } from '../ui.jsx'
import { PERSONAS, PERSONA_ORDER } from '../data.js'

const STAT_TONE = {
  accent: 'accent-text',
  violet: 'text-violet-600',
  emerald: 'text-emerald-600',
}

function go(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero({ persona, setPersona }) {
  const toast = useToast()

  const onSwitch = (id) => {
    if (id === persona.id) return
    setPersona(id)
    toast(`View swapped → ${PERSONAS[id].tab} mode`)
  }

  return (
    <section id="about" className="relative overflow-hidden pb-28 pt-36">
      {/* ambient orbs */}
      <div className="anim-pulse-soft pointer-events-none absolute -top-24 left-1/4 h-[600px] w-[600px] rounded-full blur-[150px]"
        style={{ background: 'rgba(var(--accent-rgb), 0.10)' }} />
      <div className="anim-pulse-soft pointer-events-none absolute right-[-60px] top-[35%] h-[500px] w-[500px] rounded-full bg-indigo-400/10 blur-[130px]" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Persona switch deck */}
        <Reveal className="mb-14 flex flex-col items-center text-center">
          <span className="mono mb-4 flex items-center gap-2 text-[11px] uppercase tracking-widest text-slate-500">
            <Icon name="network" className="h-3.5 w-3.5 accent-text" /> Customize workspace · toggle profile views
          </span>
          <div className="relative inline-flex rounded-3xl border border-slate-200 bg-white/80 p-1.5 shadow-lg backdrop-blur">
            {PERSONA_ORDER.map(id => {
              const p = PERSONAS[id]
              const active = id === persona.id
              return (
                <button key={id} onClick={() => onSwitch(id)}
                  className={`relative z-10 flex items-center gap-2 rounded-2xl px-4 py-3 text-[11px] font-bold uppercase tracking-widest transition-colors sm:px-6
                    ${active ? 'accent-text' : 'text-slate-500 hover:text-slate-800'}`}>
                  {active && (
                    <motion.span layoutId="persona-pill"
                      className="absolute inset-0 -z-10 rounded-2xl border border-slate-200 bg-slate-100 shadow-md"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }} />
                  )}
                  <Icon name={p.icon} className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">{p.tab}</span>
                </button>
              )
            })}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left content — re-animates on persona change */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div key={persona.id}
                initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.45 }}
                className="flex flex-col space-y-7">

                <span className="flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm">
                  <span className="accent-bg h-2.5 w-2.5 animate-pulse rounded-full" />
                  {persona.status}
                </span>

                <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  {persona.headlineLead}{' '}
                  <span className="accent-grad bg-clip-text text-transparent">{persona.headlineAccent}</span>{' '}
                  {persona.headlineTail}
                </h1>

                <p className="max-w-xl text-base leading-relaxed text-slate-600">
                  <strong className="accent-text font-bold">Hariharan Balaji</strong> — {persona.description}
                </p>

                {/* stat tiles */}
                <div className="grid grid-cols-2 gap-3 pt-1 sm:grid-cols-3">
                  {persona.stats.map((s, i) => (
                    <motion.div key={s.label}
                      initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + i * 0.08 }}
                      className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                      <div className={`mono text-2xl font-black ${STAT_TONE[s.tone]}`}>
                        {s.val}{s.unit && <span className="ml-0.5 text-xs font-normal text-slate-400">{s.unit}</span>}
                      </div>
                      <div className="mt-1.5 text-[9px] font-extrabold uppercase tracking-widest text-slate-500">{s.label}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col gap-3 pt-1 sm:flex-row">
                  <button onClick={() => go(persona.primaryCta.href.slice(1))}
                    className="accent-bg shimmer inline-flex items-center justify-center gap-2.5 rounded-xl px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-lg transition hover:opacity-90">
                    {persona.primaryCta.label} <Icon name={persona.primaryCta.icon} className="h-4 w-4" />
                  </button>
                  <button onClick={() => go('projects')}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-4 text-xs font-bold uppercase tracking-widest text-slate-700 shadow-sm transition hover:bg-slate-50">
                    View Case Studies
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right — 3D tilt holographic deck */}
          <Reveal delay={0.15} className="lg:col-span-7">
            <TiltDeck persona={persona} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function TiltDeck({ persona }) {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 18 })
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 18 })
  const coordRef = useRef(null)

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    mx.set(px - 0.5); my.set(py - 0.5)
    if (coordRef.current)
      coordRef.current.textContent = `X:${Math.round(px * r.width)}, Y:${Math.round(py * r.height)}`
  }
  const onLeave = () => { mx.set(0); my.set(0) }

  return (
    <div ref={ref} className="perspective relative min-h-[480px]"
      onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="accent-grad anim-pulse-soft absolute -inset-2 rounded-[2rem] opacity-20 blur-2xl" />
      <motion.div
        style={{ rotateX: rx, rotateY: ry }}
        className="tilt-inner relative flex h-full min-h-[480px] flex-col justify-between rounded-[1.75rem] border border-slate-200 bg-white/90 p-5 shadow-2xl backdrop-blur-md sm:p-6">

        {/* diagnostic top bar */}
        <div className="mb-4 flex items-center justify-between border-b border-slate-200/60 pb-3">
          <div className="flex items-center gap-2">
            <span className="flex gap-1.5">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            </span>
            <span className="mono ml-2 text-[10px] text-slate-400">{persona.file}</span>
          </div>
          <span className="mono accent-border anim-pulse-soft rounded-md border px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider accent-text"
            style={{ background: 'rgba(var(--accent-rgb),0.08)' }}>
            Interactive Deck
          </span>
        </div>

        {/* art stage */}
        <div className="scanlines relative h-[320px] overflow-hidden rounded-2xl border border-slate-200/60 bg-slate-100 shadow-inner">
          <HeroMedia persona={persona} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/45 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-5">
            <span className="mono block text-[10px] tracking-widest text-cyan-200">// {persona.telemetry}</span>
            <h4 className="mt-1 text-sm font-bold text-white">Hariharan Balaji · {persona.tab}</h4>
          </div>
          <div className="mono absolute right-4 top-4 flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white/95 px-3 py-1.5 text-[9px] font-bold accent-text shadow-md">
            <span className="accent-bg h-1.5 w-1.5 animate-pulse rounded-full" /> LIVE
          </div>
        </div>

        {/* telemetry footer */}
        <div className="mono mt-4 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-xs text-slate-500 shadow-inner">
          <span className="flex items-center gap-2 text-[10px] font-bold text-slate-700">
            <span className="accent-bg h-2.5 w-2.5 animate-ping rounded-full" /> Active layer: {persona.file}
          </span>
          <span className="text-[9.5px]">
            COORD <span ref={coordRef} className="accent-text font-bold">X:0, Y:0</span>
          </span>
        </div>
      </motion.div>
    </div>
  )
}
