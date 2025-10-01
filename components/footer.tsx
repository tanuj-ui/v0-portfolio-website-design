"use client"

import { Github, Linkedin, Instagram } from "lucide-react" // add icons

export function Footer() {
  return (
    <footer className="relative border-t border-white/15 bg-white/5 py-8 backdrop-blur">
      <div className="mx-auto flex w-[min(100%,1000px)] flex-col items-center justify-between gap-3 px-4 text-center text-sm text-white/70 md:flex-row">
        <p>© {new Date().getFullYear()} Tanuj Kumar Singh. All rights reserved.</p>
        <div className="text-white/60">Built with Next.js + Tailwind + framer-motion</div>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/tanuj-ui"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub - tanuj-ui"
            className="rounded-full border border-white/15 bg-white/10 p-2 text-white/85 hover:bg-white/20"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/tanuj-kumar-singh-303aa6320?original_referer=https%3A%2F%2Ftanuj-ui.github.io%2F"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn - Tanuj Kumar Singh"
            className="rounded-full border border-white/15 bg-white/10 p-2 text-white/85 hover:bg-white/20"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://www.instagram.com/tanuj_._singh/#"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram - tanuj_._singh"
            className="rounded-full border border-white/15 bg-white/10 p-2 text-white/85 hover:bg-white/20"
          >
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
