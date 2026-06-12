import { useState } from 'react'
import {
  ToastProvider, CursorGlow, ParticleField,
} from './ui.jsx'
import { PERSONAS } from './data.js'
import Navbar from './sections/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import Capabilities from './sections/Capabilities.jsx'
import ThemeEngine from './sections/ThemeEngine.jsx'
import Projects from './sections/Projects.jsx'
import Timeline from './sections/Timeline.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'

export default function App() {
  const [personaId, setPersonaId] = useState('recruiter')
  const persona = PERSONAS[personaId]

  return (
    <ToastProvider>
      <CursorGlow />
      <ParticleField />

      <div className="relative z-10">
        <Navbar persona={persona} />
        <main>
          <Hero persona={persona} setPersona={setPersonaId} />
          <Capabilities />
          <ThemeEngine />
          <Projects />
          <Timeline />
          <Contact persona={persona} />
        </main>
        <Footer />
      </div>
    </ToastProvider>
  )
}
