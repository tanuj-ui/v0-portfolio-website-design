"use client"

import { useEffect, useState } from "react"
import Image from "next/image" // use next/image to reduce CLS and enable lazy-loading
import { Gamepad2, Code2, MonitorSmartphone, Palette, ArrowUp } from "lucide-react"
import { BackgroundFX } from "@/components/background-fx"
import GamingCursor from "@/components/gaming/cursor"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const ANCHORS = ["profile", "about", "skills", "projects", "faq", "contact"]

export default function GamingPortfolioPage() {
  const [active, setActive] = useState<string>("profile")
  const [showTop, setShowTop] = useState(false)

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

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <main id="content" role="main" className="relative min-h-screen text-pretty">
      {/* Global Navbar */}
      <Navbar />
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
                <span className="text-gray-100">Tanuj Kumar Singh</span>
                <span className="block text-sky-400 drop-shadow-[0_0_12px_rgba(56,189,248,0.45)]">
                  Frontend Developer
                </span>
              </h1>
              <p className="mt-4 text-gray-200 max-w-prose">
                Based in India. I’m available for internships and select freelance work. I build fast, polished web
                interfaces with a gamer’s eye for responsiveness, feedback, and fun—accessible, modern UI with clean
                architecture and smooth animations.
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
              <Image
                src="/images/krotos-profile.jpg"
                alt="Portrait of Tanuj Kumar Singh"
                width={160}
                height={160}
                priority
                className="h-40 w-40 rounded-full ring-2 ring-sky-500/60 shadow-[0_0_24px_rgba(56,189,248,0.35)] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* About */}
      <section id="about" className="section" aria-labelledby="about-heading">
        <h2 id="about-heading" className="section-title flex items-center gap-2">
          <svg className="text-sky-400" width="0" height="0" aria-hidden="true" />
          About Me
        </h2>
        <div className="mt-5 grid md:grid-cols-2 gap-6">
          <div className="glass rounded-xl p-6">
            <p className="text-gray-300 leading-relaxed">
              I’m a frontend developer who loves building interfaces that feel fast, responsive, and purposeful. My
              portfolio highlights projects where I turn complex requirements into clean, reliable{" "}
              <a href="#projects" className="underline underline-offset-4 hover:text-white">
                user interfaces
              </a>{" "}
              with modern web technology. I specialize in React, Next.js, TypeScript, and Tailwind CSS, and I obsess
              over the details that make experiences memorable: performance budgets, focus states, micro-interactions,
              and layout systems that scale. I approach each build like a product, combining design thinking with solid
              engineering to ensure accessibility, clarity, and real-world usefulness.
              <br />
              <br />
              I’m based in India and collaborate remotely across time zones. I’m open to internships and freelance
              engagements. If you’re looking for a frontend developer who can ship polished{" "}
              <strong>portfolio-grade projects</strong> with <em>unique designs</em> and practical UX, I’d love to
              collaborate. Jump to{" "}
              <a href="#skills" className="underline underline-offset-4 hover:text-white">
                skills
              </a>{" "}
              or head to{" "}
              <a href="#contact" className="underline underline-offset-4 hover:text-white">
                contact
              </a>{" "}
              to start a conversation.
            </p>
          </div>
          <div className="glass rounded-xl p-6">
            <ul className="text-gray-300 list-disc pl-5 space-y-2">
              <li>Specialties: React, Next.js, TypeScript, Tailwind CSS</li>
              <li>UI: shadcn/ui, accessibility, component-driven design</li>
              <li>Animations: motion-first UX, micro-interactions</li>
              <li>Tooling: SWR, Vercel, performance tuning</li>
            </ul>
            <p className="mt-4 text-sm text-gray-400">
              P.S. This site uses a bluish–purple glassmorphic theme with smooth animations for a modern, premium look.
            </p>
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
      <section id="projects" className="section" aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="section-title flex items-center gap-2">
          <svg className="text-sky-400" width="0" height="0" aria-hidden="true" />
          Projects · Achievements
        </h2>
        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              title: "Futuristic UI Kit",
              desc: "A modular component kit with glassmorphism and neon effects.",
              meta: {
                problem: "Teams needed consistent, premium UI with fast iteration.",
                tools: "React, TypeScript, Tailwind, shadcn/ui",
                challenge: "Balancing neon glow with accessibility and contrast.",
                outcome: "Reusable patterns reduced build time and improved visual consistency.",
              },
            },
            {
              title: "Realtime Dashboard",
              desc: "SWR-powered dashboards with animated charts and live states.",
              meta: {
                problem: "Stakeholders needed instant feedback on changing data.",
                tools: "Next.js, SWR, Recharts, Vercel",
                challenge: "Smoothing loading states without jank or layout shift.",
                outcome: "Live dashboards with optimistic updates and great perceived performance.",
              },
            },
            {
              title: "Animation Lab",
              desc: "Micro-interactions and transitions focused on UX delight.",
              meta: {
                problem: "Interfaces felt static and lacked meaningful motion.",
                tools: "Framer Motion, Tailwind, CSS keyframes",
                challenge: "Creating expressive motion while staying subtle and purposeful.",
                outcome: "Increased engagement and clarity with micro-interactions.",
              },
            },
          ].map((p) => (
            <article key={p.title} className="glass rounded-xl overflow-hidden group">
              <div className="aspect-video bg-black/50 relative">
                <Image
                  src={
                    p.title === "Futuristic UI Kit"
                      ? "/premium-portfolio-website-glassmorphism.jpg"
                      : p.title === "Realtime Dashboard"
                        ? "/futuristic-neon-dashboard-ui.jpg"
                        : "/premium-portfolio-website.jpg"
                  }
                  alt={`${p.title} — project preview`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover opacity-80 transition group-hover:opacity-100 motion-reduce:transition-none"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-mono text-lg text-gray-100">{p.title}</h3>
                  <a
                    href="#contact"
                    className="badge hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                    aria-label={`Discuss ${p.title}`}
                  >
                    Discuss
                  </a>
                </div>
                <p className="mt-2 text-gray-200 text-sm">{p.desc}</p>
                <ul className="mt-3 space-y-1 text-sm text-gray-200">
                  <li>
                    <strong>Problem:</strong> {p.meta.problem}
                  </li>
                  <li>
                    <strong>Tools:</strong> {p.meta.tools}
                  </li>
                  <li>
                    <strong>Challenges:</strong> {p.meta.challenge}
                  </li>
                  <li>
                    <strong>Outcome:</strong> {p.meta.outcome}
                  </li>
                </ul>
              </div>
            </article>
          ))}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  name: "Tanuj Kumar Singh",
                  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
                },
                ...[
                  {
                    name: "Futuristic UI Kit",
                    description: "A modular component kit with glassmorphism and neon effects.",
                    url: "#projects",
                  },
                  {
                    name: "Realtime Dashboard",
                    description: "SWR-powered dashboards with animated charts and live states.",
                    url: "#projects",
                  },
                  {
                    name: "Animation Lab",
                    description: "Micro-interactions and transitions focused on UX delight.",
                    url: "#projects",
                  },
                ].map((project) => ({
                  "@type": "CreativeWork",
                  ...project,
                  author: { "@type": "Person", name: "Tanuj Kumar Singh" },
                })),
              ],
            }),
          }}
        />
      </section>
      <section id="faq" className="section" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="section-title flex items-center gap-2">
          <svg className="text-sky-400" width="0" height="0" aria-hidden="true" />
          FAQ
        </h2>
        <div className="mt-5 glass rounded-xl p-6">
          <details className="group">
            <summary className="cursor-pointer text-white/90 hover:text-white transition-colors">
              What’s your primary focus as a frontend developer?
            </summary>
            <p className="mt-2 text-gray-300">
              Building performant, accessible UIs with clean architecture and thoughtful motion. I balance aesthetics
              and usability.
            </p>
          </details>
          <details className="group mt-4">
            <summary className="cursor-pointer text-white/90 hover:text-white transition-colors">
              Which tools do you prefer?
            </summary>
            <p className="mt-2 text-gray-300">
              React, Next.js, TypeScript, Tailwind CSS, and shadcn/ui for components. I deploy on Vercel.
            </p>
          </details>
          <details className="group mt-4">
            <summary className="cursor-pointer text-white/90 hover:text-white transition-colors">
              Can you help with design and micro-interactions?
            </summary>
            <p className="mt-2 text-gray-300">
              Yes—glassmorphism, subtle glow, and motion are part of my workflow, always with high contrast and
              readability.
            </p>
          </details>
          <details className="group mt-4">
            <summary className="cursor-pointer text-white/90 hover:text-white transition-colors">
              How can I start a project with you?
            </summary>
            <p className="mt-2 text-gray-300">
              Send a message via the{" "}
              <a className="underline underline-offset-4" href="#contact">
                Contact
              </a>{" "}
              section with a brief about scope and timeline.
            </p>
          </details>
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
              alert(`Thanks${name ? `, ${name}` : ""}! I’ll get back to you soon.`)
              ;(e.target as HTMLFormElement).reset()
            }}
            className="grid md:grid-cols-2 gap-4"
            noValidate
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm text-gray-200">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="peer rounded-md bg-black/30 border border-white/15 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-sky-500/60"
                placeholder="Your name"
              />
              <p aria-live="polite" className="mt-1 hidden text-sm text-red-300 peer-[&:user-invalid]:block">
                Please enter your name.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm text-gray-200">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="peer rounded-md bg-black/30 border border-white/15 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-sky-500/60"
                placeholder="you@example.com"
              />
              <p aria-live="polite" className="mt-1 hidden text-sm text-red-300 peer-[&:user-invalid]:block">
                Enter a valid email address.
              </p>
            </div>
            <div className="md:col-span-2 flex flex-col gap-2">
              <label htmlFor="message" className="text-sm text-gray-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="peer rounded-md bg-black/30 border border-white/15 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-sky-500/60"
                placeholder="Tell me about your project..."
              />
              <p aria-live="polite" className="mt-1 hidden text-sm text-red-300 peer-[&:user-invalid]:block">
                Please add a short message.
              </p>
            </div>
            <div className="md:col-span-2 flex items-center justify-between gap-3 flex-wrap">
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-sky-600 text-white hover:bg-sky-500 border border-sky-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                Send
              </button>
              <p className="text-sm text-gray-200">
                Available for internships/freelance — based in India. Email:{" "}
                <a className="underline underline-offset-4" href="mailto:tanujkumar14122005@gmail.com">
                  tanujkumar14122005@gmail.com
                </a>
              </p>
            </div>
          </form>
        </div>
      </section>
      {/* Back-to-top floating button */}
      {showTop && (
        <a
          href="#profile"
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 rounded-full border border-white/20 bg-white/15 p-3 text-white/90 backdrop-blur transition hover:bg-white/25 focus-visible:outline-none"
        >
          <ArrowUp className="h-5 w-5" />
        </a>
      )}
      {/* Global Footer */}
      <Footer />
    </main>
  )
}
