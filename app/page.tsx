"use client"

import { useEffect, useState } from "react"
import { Gamepad2, Code2, MonitorSmartphone, Palette } from "lucide-react"
import { BackgroundFX } from "@/components/background-fx"
import GamingCursor from "@/components/gaming/cursor"

const ANCHORS = ["profile", "about", "skills", "projects", "contact"]

export default function GamingPortfolioPage() {
  const [active, setActive] = useState<string>("profile")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (vis?.target?.id) setActive(vis.target.id)
      },
      { rootMargin: "0px 0px -55% 0px", threshold: [0.1, 0.25, 0.5, 0.75] },
    )
    ANCHORS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <main className="relative min-h-screen text-pretty">
      {/* Animated Background */}
      <BackgroundFX />

      {/* Interactive Cursor */}
      <GamingCursor />

      {/* Profile / Hero */}
      <section id="profile" className="section pt-28">
        <div className="glass rounded-2xl p-6 md:p-10">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h1 className="font-mono text-3xl md:text-5xl leading-tight text-balance">
                <span className="text-gray-200">Tanuj Kumar Singh</span>
                <span className="block text-sky-400 drop-shadow-[0_0_12px_rgba(56,189,248,0.45)]">
                  Frontend Developer
                </span>
              </h1>
              <p className="mt-4 text-gray-300 max-w-prose">
                Building fast, polished web interfaces with a gamer’s eye for responsiveness, feedback, and fun. I craft
                accessible, modern UI with clean architectures and smooth animations.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#projects" className="badge hover:bg-white/10">
                  View Projects
                </a>
                <a href="#contact" className="badge hover:bg-white/10">
                  Contact Me
                </a>
                <a
                  href="https://github.com/tanuj-ui"
                  target="_blank"
                  rel="noreferrer"
                  className="badge hover:bg-white/10"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="justify-self-center">
              <img
                src="/images/krotos-profile.jpg"
                alt="Kratos-like profile portrait"
                className="h-40 w-40 rounded-full ring-2 ring-sky-500/60 shadow-[0_0_24px_rgba(56,189,248,0.35)] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2 className="section-title flex items-center gap-2">
          <svg className="text-sky-400" width="0" height="0" aria-hidden="true" />
          About Me
        </h2>
        <div className="mt-5 grid md:grid-cols-2 gap-6">
          <div className="glass rounded-xl p-6">
            <p className="text-gray-300">
              I’m a frontend developer focused on high-performance, immersive UIs. From component systems and design
              tokens to animation and accessibility, I build products that feel great on every device. I love turning
              complex ideas into intuitive interfaces with clean code.
            </p>
          </div>
          <div className="glass rounded-xl p-6">
            <ul className="text-gray-300 list-disc pl-5 space-y-2">
              <li>Specialties: React, Next.js, TypeScript, Tailwind CSS</li>
              <li>UI: shadcn/ui, accessibility, component-driven design</li>
              <li>Animations: motion-first UX, micro-interactions</li>
              <li>Tooling: SWR, Vercel, performance tuning</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2 className="section-title flex items-center gap-2">
          <svg className="text-sky-400" width="0" height="0" aria-hidden="true" />
          Skills
        </h2>
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {[
            { icon: <Code2 size={16} />, label: "TypeScript" },
            { icon: <MonitorSmartphone size={16} />, label: "React / Next.js" },
            { icon: <Palette size={16} />, label: "Tailwind CSS" },
            { icon: <Gamepad2 size={16} />, label: "UI Animation" },
            { icon: <Code2 size={16} />, label: "SWR / Data" },
          ].map((s) => (
            <span
              key={s.label}
              className="badge hover:bg-sky-600/15 hover:border-sky-500/40 transition"
              title={s.label}
            >
              {s.icon}
              {s.label}
            </span>
          ))}
        </div>
      </section>

      {/* Projects as Achievements */}
      <section id="projects" className="section">
        <h2 className="section-title flex items-center gap-2">
          <svg className="text-sky-400" width="0" height="0" aria-hidden="true" />
          Projects · Achievements
        </h2>
        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              title: "Futuristic UI Kit",
              desc: "A modular component kit with glassmorphism and neon effects.",
            },
            {
              title: "Realtime Dashboard",
              desc: "SWR-powered dashboards with animated charts and live states.",
            },
            {
              title: "Animation Lab",
              desc: "Micro-interactions and transitions focused on UX delight.",
            },
          ].map((p, i) => (
            <article key={p.title} className="glass rounded-xl overflow-hidden group">
              <div className="aspect-video bg-black/50 relative">
                <img
                  src={`/.jpg?height=200&width=400&query=${encodeURIComponent(p.title)}`}
                  alt={`${p.title} preview`}
                  className="absolute inset-0 h-full w-full object-cover opacity-80 group-hover:opacity-100 transition"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-mono text-lg text-gray-100">{p.title}</h3>
                  <span className="badge">
                    <svg className="text-sky-400" width="0" height="0" aria-hidden="true" />
                    Unlocked
                  </span>
                </div>
                <p className="mt-2 text-gray-300 text-sm">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2 className="section-title flex items-center gap-2">
          <svg className="text-sky-400" width="0" height="0" aria-hidden="true" />
          Contact
        </h2>
        <div className="mt-5 glass rounded-xl p-6">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              const fd = new FormData(e.currentTarget as HTMLFormElement)
              const name = fd.get("name")
              console.log("[v0] Contact form submitted:", Object.fromEntries(fd.entries()))
              alert(`Thanks${name ? `, ${name}` : ""}! I’ll get back to you soon.`)
              ;(e.target as HTMLFormElement).reset()
            }}
            className="grid md:grid-cols-2 gap-4"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm text-gray-300">
                Name
              </label>
              <input
                id="name"
                name="name"
                className="rounded-md bg-black/30 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500/60"
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm text-gray-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="rounded-md bg-black/30 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500/60"
                placeholder="you@example.com"
              />
            </div>
            <div className="md:col-span-2 flex flex-col gap-2">
              <label htmlFor="message" className="text-sm text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="rounded-md bg-black/30 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500/60"
                placeholder="Tell me about your project..."
              />
            </div>
            <div className="md:col-span-2 flex items-center justify-between gap-3 flex-wrap">
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-sky-600/80 hover:bg-sky-600 text-white border border-sky-500/50"
              >
                Send
              </button>
              <div className="flex items-center gap-2">
                <a
                  className="badge hover:bg-white/10"
                  href="https://github.com/tanuj-ui"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="badge hover:bg-white/10"
                  href="https://www.linkedin.com/in/tanuj-kumar-singh-303aa6320?original_referer=https%3A%2F%2Ftanuj-ui.github.io%2F"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="badge hover:bg-white/10"
                  href="https://www.instagram.com/tanuj_._singh/#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
                <a className="badge hover:bg-white/10" href="mailto:tanujkumar14122005@gmail.com">
                  Email
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>

      <div className="section pt-0">{/* GamingFooter remains unchanged */}</div>
    </main>
  )
}
