import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon, Reveal, useToast } from '../ui.jsx'
import { CONTACT, BOT_KB, BOT_FALLBACK, BOT_SUGGESTIONS } from '../data.js'

function matchBot(text) {
  const t = text.toLowerCase()
  for (const e of BOT_KB) if (e.keywords.some(k => t.includes(k))) return e.answer
  return BOT_FALLBACK
}

export default function Contact({ persona }) {
  const toast = useToast()

  const onSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    const name = data.get('name') || 'there'
    // POST to Netlify Forms (url-encoded). Works on the deployed site;
    // locally `netlify dev` is needed for delivery, otherwise it 404s harmlessly.
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data).toString(),
    })
      .then(() => {
        toast(`Proposal dispatched! Thanks ${name} — Hari will reply within 12 hours.`)
        form.reset()
      })
      .catch(() => toast('Network hiccup — please email hariharan2002.br@gmail.com directly.'))
  }

  return (
    <section id="contact" className="relative border-t border-slate-200/60 bg-slate-50/40 py-24 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12">

          {/* left — form + details */}
          <Reveal className="flex flex-col justify-between lg:col-span-5">
            <div>
              <span className="mono accent-text mb-3 block text-xs font-bold uppercase tracking-widest">proposal gateway</span>
              <AnimatePresence mode="wait">
                <motion.div key={persona.id}
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}>
                  <h2 className="mb-4 text-3xl font-black text-slate-900 sm:text-4xl">{persona.contactHeadline}</h2>
                  <p className="mb-8 text-sm leading-relaxed text-slate-500">{persona.contactDescription}</p>
                </motion.div>
              </AnimatePresence>

              <form name="contact" method="POST" data-netlify="true"
                netlify-honeypot="bot-field" onSubmit={onSubmit} className="space-y-4">
                {/* Netlify Forms plumbing */}
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>Don’t fill this out: <input name="bot-field" /></label>
                </p>
                <Field label="Your Name" name="name" placeholder="Recruiter or partner name" />
                <Field label="Your Email" name="email" type="email" placeholder="name@company.com" />
                <div>
                  <Lbl>Engagement Objective</Lbl>
                  <select name="type" className="w-full rounded-xl border border-slate-200 bg-white p-3.5 text-xs text-slate-800 shadow-sm focus:border-[rgba(var(--accent-rgb),0.5)] focus:outline-none">
                    <option value="fulltime">Full-time ML Engineer / Data Scientist role</option>
                    <option value="contract">Contract or project engagement</option>
                    <option value="consult">Other / general enquiry</option>
                  </select>
                </div>
                <div>
                  <Lbl>Brief Proposal Details</Lbl>
                  <textarea name="message" rows={4} required placeholder="Briefly explain what you have in mind…"
                    className="w-full rounded-xl border border-slate-200 bg-white p-3.5 text-xs text-slate-800 shadow-sm focus:border-[rgba(var(--accent-rgb),0.5)] focus:outline-none" />
                </div>
                <button type="submit"
                  className="accent-bg shimmer w-full rounded-xl px-6 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-md transition hover:opacity-90">
                  Dispatch Proposal <Icon name="send" className="ml-1 inline h-4 w-4" />
                </button>
              </form>
            </div>

            <div className="mt-10 space-y-2.5 border-t border-slate-200 pt-6">
              <span className="mono block text-[10px] font-bold uppercase tracking-widest text-slate-400">Direct lines</span>
              <div className="mono flex flex-col gap-2 text-[11px] font-bold text-slate-600 sm:flex-row sm:gap-6">
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 transition hover:[color:var(--accent-color)]">
                  <Icon name="envelope" className="h-4 w-4 accent-text" /> {CONTACT.email}
                </a>
                <span className="flex items-center gap-2"><Icon name="phone" className="h-4 w-4 accent-text" /> {CONTACT.phone}</span>
              </div>
            </div>
          </Reveal>

          {/* right — chatbot */}
          <Reveal delay={0.12} className="lg:col-span-7">
            <ChatBot persona={persona} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

const Lbl = ({ children }) => (
  <label className="mono mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-slate-500">{children}</label>
)
function Field({ label, name, type = 'text', placeholder }) {
  return (
    <div>
      <Lbl>{label}</Lbl>
      <input type={type} name={name} required placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-white p-3.5 text-xs text-slate-800 shadow-sm focus:border-[rgba(var(--accent-rgb),0.5)] focus:outline-none" />
    </div>
  )
}

function BotAvatar({ className = 'h-9 w-9' }) {
  return (
    <span className={`accent-grad flex shrink-0 items-center justify-center rounded-full text-white shadow-sm ${className}`}>
      <Icon name="spark" className="h-4 w-4" strokeWidth={2.2} />
    </span>
  )
}

function ChatBot({ persona }) {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Systems online. I've loaded Hariharan's full background — ML engineering, agentic LLM systems, data science and mechatronics. Ask me anything, or tap a prompt below." },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, typing])

  const ask = (text) => {
    if (!text.trim()) return
    setMessages(m => [...m, { sender: 'user', text }])
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages(m => [...m, { sender: 'bot', text: matchBot(text) }])
    }, 650)
  }
  const onSubmit = (e) => { e.preventDefault(); ask(input); setInput('') }

  return (
    <div className="relative h-full">
      <div className="accent-grad absolute -inset-1.5 rounded-3xl opacity-20 blur-lg" />
      <div className="relative flex h-[560px] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
        {/* header */}
        <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-3 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="relative">
              <BotAvatar className="h-10 w-10" />
              <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500" />
            </div>
            <div className="flex flex-col">
              <span className="mono accent-text text-xs font-bold uppercase leading-none tracking-widest">HARI_TWIN_BOT</span>
              <span className="mono mt-1 text-[8px] text-slate-400">Responsive diagnostic agent</span>
            </div>
          </div>
          <span className="mono accent-border accent-text rounded border px-2 py-0.5 text-[9px] font-bold"
            style={{ background: 'rgba(var(--accent-rgb),0.08)' }}>{persona.botMode}</span>
        </div>

        {/* messages */}
        <div ref={scrollRef} className="mono flex-1 space-y-4 overflow-y-auto bg-slate-50/50 p-5 text-xs text-slate-700">
          <AnimatePresence initial={false}>
            {messages.map((m, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={m.sender === 'user' ? 'flex justify-end' : 'flex'}>
                {m.sender === 'bot' && <BotAvatar />}
                <div className={m.sender === 'user'
                  ? 'ml-12 rounded-2xl border border-[rgba(var(--accent-rgb),0.25)] bg-[rgba(var(--accent-rgb),0.06)] p-4 text-right shadow-sm'
                  : 'ml-3 mr-12 rounded-2xl border border-slate-200 bg-white p-4 leading-relaxed shadow-sm'}>
                  <span className={`mb-1 block font-bold ${m.sender === 'user' ? 'text-violet-600' : 'accent-text'}`}>
                    {m.sender === 'user' ? '[You]' : "[Hari's Assistant]"}
                  </span>
                  {m.text}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {typing && (
            <div className="flex">
              <BotAvatar />
              <div className="ml-3 flex items-center gap-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                {[0, 1, 2].map(i => (
                  <motion.span key={i} className="accent-bg h-1.5 w-1.5 rounded-full"
                    animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* suggestions */}
        <div className="flex gap-2 overflow-x-auto whitespace-nowrap border-t border-slate-200 bg-white px-5 py-3">
          {BOT_SUGGESTIONS.map(s => (
            <button key={s.label} onClick={() => ask(s.q)}
              className="mono shrink-0 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-[9px] font-bold text-slate-500 transition hover:bg-slate-100 hover:[color:var(--accent-color)]">
              {s.label}
            </button>
          ))}
        </div>

        {/* input */}
        <form onSubmit={onSubmit} className="flex gap-2 border-t border-slate-200 bg-white p-4">
          <input value={input} onChange={e => setInput(e.target.value)}
            placeholder="Ask Hari's bot anything…"
            className="mono flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs shadow-inner focus:border-[rgba(var(--accent-rgb),0.4)] focus:outline-none" />
          <button type="submit"
            className="accent-bg mono rounded-xl px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition hover:opacity-90">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}
