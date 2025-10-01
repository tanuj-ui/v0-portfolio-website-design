"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Instagram } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sent">("idle")

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    console.log("[v0] Contact form submitted:", Object.fromEntries(data.entries()))
    setStatus("sent")
    form.reset()
    setTimeout(() => setStatus("idle"), 2500)
  }

  return (
    <section id="contact" data-section className="relative px-4 py-24">
      <motion.div
        className="mx-auto grid w-[min(100%,900px)] grid-cols-1 gap-8 md:grid-cols-[1fr,320px]"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur">
          <h2 className="text-2xl font-semibold text-white">Contact</h2>
          <p className="mt-2 text-white/80">Let’s collaborate. Send a message and I’ll get back to you shortly.</p>
          <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message"
                className="min-h-[140px] border-white/20 bg-white/10 text-white placeholder:text-white/50"
                required
              />
            </div>
            <div className="flex items-center gap-3">
              <Button type="submit" className="rounded-full bg-white/20 text-white hover:bg-white/30">
                {status === "sent" ? "Sent!" : "Send Message"}
              </Button>
              <p className="text-sm text-white/60">or reach me here</p>
              <div className="ml-auto flex items-center gap-3">
                <a
                  href="mailto:tanujkumar14122005@gmail.com"
                  aria-label="Email"
                  className="rounded-full border border-white/15 bg-white/10 p-2 text-white/90 hover:bg-white/20"
                >
                  <Mail className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com/tanuj-ui"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub - tanuj-ui"
                  className="rounded-full border border-white/15 bg-white/10 p-2 text-white/90 hover:bg-white/20"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/tanuj-kumar-singh-303aa6320?original_referer=https%3A%2F%2Ftanuj-ui.github.io%2F"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn - Tanuj Kumar Singh"
                  className="rounded-full border border-white/15 bg-white/10 p-2 text-white/90 hover:bg-white/20"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://www.instagram.com/tanuj_._singh/#"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram - tanuj_._singh"
                  className="rounded-full border border-white/15 bg-white/10 p-2 text-white/90 hover:bg-white/20"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </form>
        </div>

        <aside className="rounded-2xl border border-white/15 bg-white/10 p-6 text-white/85 backdrop-blur">
          <h3 className="font-semibold text-white">Let’s build something premium.</h3>
          <p className="mt-2 text-sm text-white/80">
            I focus on modern UX, performance, and animations that make interfaces feel alive.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>• Available for freelance & full-time</li>
            <li>• Remote-first collaboration</li>
            <li>• Timezone-friendly communication</li>
          </ul>
        </aside>
      </motion.div>
    </section>
  )
}
