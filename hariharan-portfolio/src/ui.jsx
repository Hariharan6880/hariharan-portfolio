import {
  createContext, useContext, useState, useCallback, useRef, useEffect,
} from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

// ─────────────────────────────────────────────────────────────────────────────
// Icon set — lightweight inline strokes (lucide-flavoured), no icon-font CDN.
// ─────────────────────────────────────────────────────────────────────────────
const PATHS = {
  badge: 'M9 7h6m-6 4h6m-7 8h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z',
  store: 'M3 9 4 4h16l1 5M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9M4 9h16',
  cubes: 'm12 2 8 4.5v9L12 20l-8-4.5v-9L12 2Zm0 0v18m8-13.5L12 11 4 6.5',
  brain: 'M9 3a3 3 0 0 0-3 3 3 3 0 0 0-1 5.8A3 3 0 0 0 7 17a3 3 0 0 0 5 1 3 3 0 0 0 5-1 3 3 0 0 0 2-5.2A3 3 0 0 0 18 6a3 3 0 0 0-3-3 3 3 0 0 0-3 1.5A3 3 0 0 0 9 3Z',
  curve: 'M3 17c4 0 5-10 9-10s5 6 9 6M3 21h18',
  branch: 'M6 3v12m0 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm12-9a3 3 0 1 0 0-.001M18 6c0 7-12 3-12 9',
  vr: 'M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-4l-3-3-3 3H5a2 2 0 0 1-2-2V8Z',
  contract: 'M8 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2M9 3h6v3H9zM9 12h6m-6 4h4',
  magic: 'm5 19 9-9m0 0 2-2-2-2-2 2 2 2ZM19 5l1-2M5 5 4 3m15 16 1 2',
  gamepad: 'M6 12h4m-2-2v4m6-1h.01M18 11h.01M7 18a4 4 0 0 1-4-4l1-5a3 3 0 0 1 3-2h10a3 3 0 0 1 3 2l1 5a4 4 0 0 1-7 1H10a4 4 0 0 1-3 3Z',
  arrow: 'M5 12h14m-6-6 6 6-6 6',
  envelope: 'M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm0 1 8 6 8-6',
  phone: 'M5 4h4l2 5-3 2a14 14 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2Z',
  github: 'M9 19c-4 1.5-4-2-6-2m12 4v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.5 1.3a12 12 0 0 0-6 0C6.5 2.8 5.5 3.1 5.5 3.1a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21',
  linkedin: 'M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-9h4v1.5A4 4 0 0 1 16 8ZM6 9H2v9h4V9Zm-2-5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z',
  send: 'M22 2 11 13M22 2 15 22l-4-9-9-4 20-7Z',
  palette: 'M12 3a9 9 0 0 0 0 18 2 2 0 0 0 2-2 2 2 0 0 1 2-2h1a4 4 0 0 0 4-4 9 9 0 0 0-9-8Zm-5 9a1 1 0 1 1 0-.01M9.5 7.5a1 1 0 1 1 0-.01M14.5 7.5a1 1 0 1 1 0-.01',
  font: 'M5 20V6h14M9 20V6m4 14h-4m9 0-2-6m-4 6 3-9 3 9m-5.5-2h5',
  user: 'M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z',
  briefcase: 'M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Zm6-2V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1M3 12h18',
  code: 'm8 6-6 6 6 6m8-12 6 6-6 6',
  bolt: 'M13 2 4 14h7l-1 8 9-12h-7l1-8Z',
  check: 'm5 12 4 4L19 7',
  spark: 'M12 3v4m0 10v4M3 12h4m10 0h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18',
  network: 'M5 7a2 2 0 1 0 0-.01M19 7a2 2 0 1 0 0-.01M12 19a2 2 0 1 0 0-.01M6.5 8 11 17m6.5-9L13 17M7 6h10',
}

export function Icon({ name, className = 'w-4 h-4', strokeWidth = 1.8 }) {
  const d = PATHS[name]
  if (!d) return null
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      <path d={d} />
    </svg>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Toast
// ─────────────────────────────────────────────────────────────────────────────
const ToastCtx = createContext(() => {})
// eslint-disable-next-line react-refresh/only-export-components
export const useToast = () => useContext(ToastCtx)

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null)
  const timer = useRef(null)

  const show = useCallback((message) => {
    setToast({ message, id: Date.now() })
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setToast(null), 3600)
  }, [])

  useEffect(() => () => clearTimeout(timer.current), [])

  return (
    <ToastCtx.Provider value={show}>
      {children}
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.id}
            initial={{ y: 40, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 320, damping: 26 }}
            className="fixed bottom-6 right-6 z-[60] glass accent-border max-w-sm rounded-2xl
                       px-5 py-4 text-xs text-slate-600 shadow-2xl pointer-events-none"
          >
            <span className="accent-text mono mb-1 block text-[10px] font-extrabold uppercase tracking-widest">
              System Core Event
            </span>
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>
    </ToastCtx.Provider>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Reveal — scroll-triggered entrance using framer-motion + viewport detection
// ─────────────────────────────────────────────────────────────────────────────
export function Reveal({ children, delay = 0, y = 26, className = '', as = 'div' }) {
  const reduce = useReducedMotion()
  const M = motion[as] || motion.div
  return (
    <M
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </M>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// CursorGlow — ambient spotlight that follows the pointer (desktop only)
// ─────────────────────────────────────────────────────────────────────────────
export function CursorGlow() {
  const ref = useRef(null)
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const el = ref.current
    let raf = 0
    const move = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        if (el) el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      })
    }
    window.addEventListener('mousemove', move)
    return () => { window.removeEventListener('mousemove', move); cancelAnimationFrame(raf) }
  }, [])
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 hidden lg:block"
      style={{ marginLeft: '-400px', marginTop: '-400px' }}
    >
      <div
        className="h-[800px] w-[800px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(var(--accent-rgb),0.06) 0%, transparent 62%)' }}
      />
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// ParticleField — connected node network on a canvas, tinted by the live theme
// ─────────────────────────────────────────────────────────────────────────────
export function ParticleField() {
  const canvasRef = useRef(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf = 0
    let particles = []
    const mouse = { x: null, y: null }

    const rgb = () =>
      getComputedStyle(document.documentElement).getPropertyValue('--accent-rgb').trim() || '59,130,246'

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      build()
    }
    const build = () => {
      particles = []
      const count = Math.min(90, Math.floor((canvas.width * canvas.height) / 14000))
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: (Math.random() - 0.5) * 0.4,
          dy: (Math.random() - 0.5) * 0.4,
          s: Math.random() * 1.8 + 1,
        })
      }
    }
    const tick = () => {
      raf = requestAnimationFrame(tick)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const color = rgb()
      for (const p of particles) {
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
        p.x += p.dx; p.y += p.dy
        if (mouse.x != null) {
          const d = Math.hypot(mouse.x - p.x, mouse.y - p.y)
          if (d < 130) { p.x -= (mouse.x - p.x) * 0.012; p.y -= (mouse.y - p.y) * 0.012 }
        }
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.s, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${color}, 0.5)`
        ctx.fill()
      }
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const dist = Math.hypot(dx, dy)
          if (dist < 120) {
            ctx.strokeStyle = `rgba(${color}, ${(1 - dist / 120) * 0.12})`
            ctx.lineWidth = 0.7
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }
    }
    const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY }
    const onLeave = () => { mouse.x = null; mouse.y = null }

    resize()
    tick()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [reduce])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-80"
    />
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// PersonaArt — animated SVG scene per persona, with an <img> slot that fades in
// automatically if you drop a file at  public/personas/<file>.
// ─────────────────────────────────────────────────────────────────────────────
export function PersonaArt({ persona }) {
  const src = `/personas/${persona.file}`
  const [loaded, setLoaded] = useState(null)   // src of an image confirmed to load
  const reduce = useReducedMotion()

  // Probe the matching image; only flip to it once it actually loads (else SVG).
  useEffect(() => {
    let active = true
    const probe = new Image()
    probe.onload = () => { if (active) setLoaded(src) }
    probe.src = src
    return () => { active = false }
  }, [src])

  const showImg = loaded === src

  return (
    <div className="absolute inset-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={persona.id + (showImg ? '-img' : '-svg')}
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          {showImg
            ? <img src={src} alt={`${persona.tab} illustration`}
                   className="h-full w-full object-cover" />
            : <PersonaScene id={persona.id} />}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// HeroMedia — chooses the hero visual, in priority order:
//   1. intro video      (public/intro.mp4)   — auto-loop, muted, mobile-safe
//   2. animated figure   (public/hari.png)    — floating cut-out + data cards
//   3. procedural SVG    (PersonaArt fallback)
// Drop a file in and it takes over automatically; no code changes needed.
// ─────────────────────────────────────────────────────────────────────────────
const HERO_VIDEO_SRC = '/intro.mp4'
const HERO_FIGURE_SRC = '/hari.png'

export function HeroMedia({ persona }) {
  const [videoFailed, setVideoFailed] = useState(false)

  if (!videoFailed) {
    return (
      <motion.video
        key="hero-video"
        src={HERO_VIDEO_SRC}
        autoPlay muted loop playsInline preload="metadata"
        onError={() => setVideoFailed(true)}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
        className="absolute inset-0 h-full w-full object-cover"
        aria-label="Intro video of Hariharan Balaji"
      />
    )
  }
  return <FigureOrArt persona={persona} />
}

function FigureOrArt({ persona }) {
  const [state, setState] = useState('probing') // probing | figure | art
  useEffect(() => {
    let active = true
    const probe = new Image()
    probe.onload = () => active && setState('figure')
    probe.onerror = () => active && setState('art')
    probe.src = HERO_FIGURE_SRC
    return () => { active = false }
  }, [])

  if (state === 'figure') return <HeroFigure />
  if (state === 'art') return <PersonaArt persona={persona} />
  return null
}

// Animated standing figure surrounded by drifting holographic data cards.
function HeroFigure() {
  const reduce = useReducedMotion()
  const bob = reduce ? {} : { y: [-7, 7, -7] }

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* layered backdrop */}
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(120% 95% at 50% 25%, #ffffff 0%, #eef2f8 58%, #dbe3ee 100%)' }} />
      <div className="holo-grid absolute inset-0 opacity-25" />
      <motion.div
        className="absolute left-1/2 top-1/4 h-60 w-60 -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: 'rgba(var(--accent-rgb), 0.20)' }}
        animate={reduce ? {} : { scale: [1, 1.18, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} />
      {/* white halo to dissolve the PNG's white box edges */}
      <div className="absolute left-1/2 top-1/2 h-[125%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-white opacity-85 blur-2xl" />

      {/* drifting data cards */}
      <DataCard className="left-2 top-6" delay={0}>
        <MiniLine />
        <span className="mono mt-1 block text-[8px] font-bold text-slate-500">+53% MAE</span>
      </DataCard>
      <DataCard className="right-2 top-16" delay={1.1}>
        <MiniBars />
        <span className="mono mt-1 block text-[8px] font-bold text-slate-500">FORECAST</span>
      </DataCard>
      <DataCard className="left-3 bottom-16" delay={0.6}>
        <span className="mono block text-[11px] font-black accent-text">0.98</span>
        <span className="mono block text-[8px] font-bold text-slate-500">ROC-AUC</span>
      </DataCard>
      <DataCard className="right-3 bottom-24" delay={1.6}>
        <MiniDonut />
      </DataCard>

      {/* the figure */}
      <motion.img
        src={HERO_FIGURE_SRC} alt="Hariharan Balaji"
        className="absolute inset-x-0 bottom-0 mx-auto h-[96%] w-auto object-contain"
        style={{ filter: 'drop-shadow(0 22px 22px rgba(15,23,42,0.22))' }}
        animate={bob}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} />

      {/* soft ground shadow */}
      <motion.div
        className="absolute bottom-3 left-1/2 h-3 w-32 -translate-x-1/2 rounded-[50%] bg-slate-900/25 blur-md"
        animate={reduce ? {} : { scaleX: [1, 0.88, 1], opacity: [0.3, 0.22, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} />
    </motion.div>
  )
}

function DataCard({ className = '', delay = 0, children }) {
  return (
    <motion.div
      className={`glass absolute z-10 rounded-xl border border-white/60 p-2 shadow-lg ${className}`}
      animate={{ y: [-6, 6, -6] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay }}>
      {children}
    </motion.div>
  )
}

function MiniLine() {
  return (
    <svg viewBox="0 0 60 28" className="h-6 w-16">
      <motion.polyline points="2,22 14,14 26,18 38,6 50,12 58,4"
        fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }} />
    </svg>
  )
}
function MiniBars() {
  return (
    <svg viewBox="0 0 60 28" className="h-6 w-16">
      {[0, 1, 2, 3].map(i => (
        <motion.rect key={i} x={4 + i * 15} width="9" rx="2" fill="var(--accent-color)" fillOpacity={0.5 + i * 0.12}
          animate={{ height: [8, 22, 8], y: [20, 6, 20] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }} />
      ))}
    </svg>
  )
}
function MiniDonut() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8">
      <circle cx="16" cy="16" r="11" fill="none" stroke="#e2e8f0" strokeWidth="5" />
      <motion.circle cx="16" cy="16" r="11" fill="none" stroke="var(--accent-color)" strokeWidth="5"
        strokeLinecap="round" strokeDasharray="69" transform="rotate(-90 16 16)"
        initial={{ strokeDashoffset: 69 }} animate={{ strokeDashoffset: 18 }}
        transition={{ duration: 1.6, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }} />
    </svg>
  )
}

// The three procedural fallback scenes.
function PersonaScene({ id }) {
  const A = 'var(--accent-color)'
  const common = 'h-full w-full'
  if (id === 'freelancer') {
    return (
      <svg viewBox="0 0 400 320" className={common} preserveAspectRatio="xMidYMid slice">
        <SceneBg />
        {/* browser window being built */}
        <motion.g initial={{ y: 6 }} animate={{ y: [-4, 6, -4] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}>
          <rect x="70" y="70" width="260" height="180" rx="14" fill="#fff" stroke={A} strokeOpacity="0.4" />
          <rect x="70" y="70" width="260" height="30" rx="14" fill={A} fillOpacity="0.08" />
          <circle cx="90" cy="85" r="4" fill="#f87171" /><circle cx="104" cy="85" r="4" fill="#fbbf24" /><circle cx="118" cy="85" r="4" fill="#34d399" />
          <motion.rect x="88" y="118" width="120" height="14" rx="4" fill={A} fillOpacity="0.5"
            initial={{ width: 0 }} animate={{ width: [0, 120, 120] }} transition={{ duration: 3, repeat: Infinity }} />
          <rect x="88" y="142" width="200" height="8" rx="4" fill="#cbd5e1" />
          <rect x="88" y="158" width="170" height="8" rx="4" fill="#e2e8f0" />
          <rect x="88" y="186" width="90" height="40" rx="8" fill={A} fillOpacity="0.85" />
          <rect x="190" y="186" width="98" height="40" rx="8" fill="#e2e8f0" />
        </motion.g>
        <FloatChip x="280" y="60" label="UI" />
        <FloatChip x="48" y="210" label="CSS" delay={1.5} />
      </svg>
    )
  }
  if (id === 'creator') {
    const nodes = [[110, 90], [200, 60], [290, 110], [150, 180], [260, 200], [200, 130]]
    const edges = [[0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [0, 1], [2, 4]]
    return (
      <svg viewBox="0 0 400 320" className={common} preserveAspectRatio="xMidYMid slice">
        <SceneBg />
        {edges.map(([a, b], i) => (
          <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]}
            stroke={A} strokeOpacity="0.45" strokeWidth="1.6" className="svg-flow" />
        ))}
        {nodes.map(([cx, cy], i) => (
          <motion.circle key={i} cx={cx} cy={cy} r={i === 5 ? 16 : 9}
            fill={i === 5 ? A : '#fff'} stroke={A} strokeWidth="2"
            animate={{ scale: [1, 1.18, 1] }}
            transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.25 }}
            style={{ transformOrigin: `${cx}px ${cy}px` }} />
        ))}
        <FloatChip x="56" y="60" label="AGENT" />
        <FloatChip x="300" y="230" label="SIM" delay={1.2} />
      </svg>
    )
  }
  // recruiter / default — analytics dashboard
  const bars = [60, 110, 80, 150, 120, 175]
  return (
    <svg viewBox="0 0 400 320" className={common} preserveAspectRatio="xMidYMid slice">
      <SceneBg />
      <rect x="60" y="60" width="280" height="200" rx="16" fill="#fff" stroke={A} strokeOpacity="0.35" />
      {/* line chart */}
      <motion.polyline
        points="80,150 130,120 180,134 230,86 280,104 320,70"
        fill="none" stroke={A} strokeWidth="3" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 2.4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }} />
      {[[130, 120], [230, 86], [320, 70]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="4.5" fill={A} />
      ))}
      {/* bars */}
      {bars.map((h, i) => (
        <motion.rect key={i} x={80 + i * 42} width="24" rx="5" fill={A}
          fillOpacity={0.35 + i * 0.1}
          initial={{ height: 0, y: 250 }}
          animate={{ height: [0, h * 0.55], y: [250, 250 - h * 0.55] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', delay: i * 0.15 }} />
      ))}
      <FloatChip x="288" y="48" label="+53%" />
      <FloatChip x="44" y="210" label="ROC" delay={1.4} />
    </svg>
  )
}

function SceneBg() {
  return (
    <>
      <rect width="400" height="320" fill="#f1f5f9" />
      <g className="holo-grid" opacity="0.5"><rect width="400" height="320" fill="none" /></g>
      <motion.circle cx="320" cy="70" r="60" fill="var(--accent-color)" fillOpacity="0.08"
        animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 6, repeat: Infinity }} />
    </>
  )
}

function FloatChip({ x, y, label, delay = 0 }) {
  return (
    <motion.g
      animate={{ y: [-5, 5, -5] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay }}>
      <rect x={x} y={y} width={label.length * 9 + 18} height="26" rx="8"
        fill="#fff" stroke="var(--accent-color)" strokeOpacity="0.4" />
      <text x={x + 12} y={y + 17} fontSize="11" fontFamily="Fira Code, monospace"
        fontWeight="700" fill="var(--accent-color)">{label}</text>
    </motion.g>
  )
}
