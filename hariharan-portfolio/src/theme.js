import { THEMES } from './data.js'

// Apply a theme's accent palette and full-page background to the document root.
// Called from App whenever the active theme changes; the scene animation itself
// is rendered by <SceneBackground> based on the same theme id.
export function applyTheme(id) {
  const t = THEMES[id] || THEMES.cobalt
  const root = document.documentElement.style
  root.setProperty('--accent-color', t.color)
  root.setProperty('--accent-rgb', t.rgb)
  root.setProperty('--accent-2-rgb', t.rgb2)
  root.setProperty('--accent-glow', `0 14px 40px rgba(${t.rgb}, 0.18)`)
  root.setProperty('--page-bg', t.bg)
}

export function applyFont(f) {
  document.documentElement.style.setProperty('--font-display', f.stack)
}
