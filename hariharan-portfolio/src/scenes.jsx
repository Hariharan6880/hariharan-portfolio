import { useRef, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { THEMES } from './data.js'

// ─────────────────────────────────────────────────────────────────────────────
// SceneBackground — fixed, full-page animated layer behind the (translucent)
// content. Cross-fades between scenes when the active theme changes; only the
// mounted scene runs an animation loop, so just one RAF is alive at a time.
// ─────────────────────────────────────────────────────────────────────────────
const SCENES = { constellation: Constellation, solar: SolarSystem, aurora: Aurora }

export default function SceneBackground({ themeId }) {
  const scene = (THEMES[themeId] || THEMES.cobalt).scene
  const Active = SCENES[scene] || Constellation

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={scene}
          className="absolute inset-0"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
        >
          <Active />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// Live accent reader (re-evaluated each frame so canvases match the palette).
const accentRGB = () =>
  getComputedStyle(document.documentElement).getPropertyValue('--accent-rgb').trim() || '59,130,246'
const accent2RGB = () =>
  getComputedStyle(document.documentElement).getPropertyValue('--accent-2-rgb').trim() || '99,102,241'

// ─── Scene 1: Constellation (drifting nodes + linking lines + mouse repel) ────
function Constellation() {
  const canvasRef = useRef(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf = 0
    let particles = []
    const mouse = { x: null, y: null }

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
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const color = accentRGB()
      for (const p of particles) {
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
        if (!reduce) { p.x += p.dx; p.y += p.dy }
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
    const tick = () => { draw(); raf = requestAnimationFrame(tick) }
    const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY }
    const onLeave = () => { mouse.x = null; mouse.y = null }

    resize()
    if (reduce) draw()
    else tick()
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

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-80" />
}

// ─── Scene 2: Solar system (sun + orbiting planets + orbit rings + stars) ─────
function SolarSystem() {
  const canvasRef = useRef(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf = 0
    let stars = []
    // radius fraction of min(w,h), size px, angular speed, base angle, palette pick
    const planets = [
      { rf: 0.13, size: 5, spd: 0.011, ang: 0.4, pal: 0 },
      { rf: 0.21, size: 8, spd: 0.0072, ang: 2.1, pal: 1 },
      { rf: 0.30, size: 6, spd: 0.0051, ang: 4.0, pal: 2 },
      { rf: 0.40, size: 10, spd: 0.0034, ang: 5.2, pal: 0 },
    ]

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      stars = Array.from({ length: 70 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.3 + 0.3,
        tw: Math.random() * Math.PI * 2,
      }))
    }

    const draw = (t) => {
      const w = canvas.width, h = canvas.height
      const cx = w * 0.5, cy = h * 0.46
      const base = Math.min(w, h)
      const c1 = accentRGB(), c2 = accent2RGB()
      ctx.clearRect(0, 0, w, h)

      // stars
      for (const s of stars) {
        const a = 0.25 + 0.35 * (0.5 + 0.5 * Math.sin(t * 0.002 + s.tw))
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(100, 116, 139, ${a * 0.5})`
        ctx.fill()
      }

      // orbit rings
      for (const p of planets) {
        ctx.beginPath()
        ctx.arc(cx, cy, base * p.rf, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(${c1}, 0.10)`
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // sun glow + core
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, base * 0.12)
      g.addColorStop(0, `rgba(${c1}, 0.55)`)
      g.addColorStop(0.4, `rgba(${c1}, 0.18)`)
      g.addColorStop(1, `rgba(${c1}, 0)`)
      ctx.fillStyle = g
      ctx.beginPath(); ctx.arc(cx, cy, base * 0.12, 0, Math.PI * 2); ctx.fill()
      ctx.fillStyle = `rgba(${c1}, 0.9)`
      ctx.beginPath(); ctx.arc(cx, cy, base * 0.022, 0, Math.PI * 2); ctx.fill()

      // planets
      for (const p of planets) {
        const angle = p.ang + (reduce ? 0 : t * p.spd)
        const r = base * p.rf
        const x = cx + Math.cos(angle) * r
        const y = cy + Math.sin(angle) * r
        const col = p.pal === 0 ? c1 : p.pal === 1 ? c2 : '148, 163, 184'
        const pg = ctx.createRadialGradient(x, y, 0, x, y, p.size * 2.4)
        pg.addColorStop(0, `rgba(${col}, 0.85)`)
        pg.addColorStop(1, `rgba(${col}, 0)`)
        ctx.fillStyle = pg
        ctx.beginPath(); ctx.arc(x, y, p.size * 2.4, 0, Math.PI * 2); ctx.fill()
        ctx.fillStyle = `rgba(${col}, 0.95)`
        ctx.beginPath(); ctx.arc(x, y, p.size, 0, Math.PI * 2); ctx.fill()
      }
    }

    let start = performance.now()
    const tick = (now) => { draw(now - start); raf = requestAnimationFrame(tick) }

    resize()
    if (reduce) draw(0)
    else { start = performance.now(); raf = requestAnimationFrame(tick) }
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [reduce])

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-90" />
}

// ─── Scene 3: Aurora (CSS blurred ribbons drifting/morphing) ──────────────────
function Aurora() {
  const reduce = useReducedMotion()
  const a = (op) => `rgba(var(--accent-rgb), ${op})`
  const a2 = (op) => `rgba(var(--accent-2-rgb), ${op})`
  return (
    <div className="absolute inset-0">
      <div
        className={`absolute -left-1/4 top-[-10%] h-[40rem] w-[55rem] rounded-[45%] blur-[110px] ${reduce ? '' : 'anim-blob anim-float'}`}
        style={{ background: `radial-gradient(circle at 40% 40%, ${a(0.30)}, transparent 65%)`, transform: 'rotate(-12deg)' }} />
      <div
        className={`absolute right-[-20%] top-[20%] h-[34rem] w-[50rem] rounded-[45%] blur-[120px] ${reduce ? '' : 'anim-blob anim-float-rev'}`}
        style={{ background: `radial-gradient(circle at 60% 50%, ${a2(0.28)}, transparent 65%)` }} />
      <div
        className={`absolute bottom-[-15%] left-1/4 h-[32rem] w-[48rem] rounded-[45%] blur-[120px] ${reduce ? '' : 'anim-blob anim-pulse-soft'}`}
        style={{ background: `radial-gradient(circle at 50% 50%, ${a(0.22)}, transparent 60%)`, transform: 'rotate(8deg)' }} />
    </div>
  )
}
