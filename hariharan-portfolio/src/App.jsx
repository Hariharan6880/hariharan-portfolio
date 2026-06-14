import { useState, useEffect } from 'react'
import { ToastProvider, CursorGlow } from './ui.jsx'
import SceneBackground from './scenes.jsx'
import { applyTheme } from './theme.js'
import { PERSONAS } from './data.js'
import Navbar from './sections/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import Capabilities from './sections/Capabilities.jsx'
import Projects from './sections/Projects.jsx'
import Timeline from './sections/Timeline.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'

// Theme is fixed (the interactive Theme Engine was removed); the animated
// background stays locked to the constellation scene + cobalt palette.
const THEME_ID = 'cobalt'

export default function App() {
  const [personaId, setPersonaId] = useState('recruiter')
  const persona = PERSONAS[personaId]

  useEffect(() => { applyTheme(THEME_ID) }, [])

  return (
    <ToastProvider>
      <CursorGlow />
      <SceneBackground themeId={THEME_ID} />

      <div className="relative z-10">
        <Navbar persona={persona} />
        <main>
          <Hero persona={persona} setPersona={setPersonaId} />
          <Capabilities />
          <Projects />
          <Timeline />
          <Contact persona={persona} />
        </main>
        <Footer />
      </div>
    </ToastProvider>
  )
}
