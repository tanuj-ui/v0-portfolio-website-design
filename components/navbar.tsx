"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { cn } from "@/lib/utils"

const SECTIONS = [
  { id: "profile", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
] as const

export function Navbar() {
  const [active, setActive] = useState<string>("profile")
  const [open, setOpen] = useState(false) // mobile menu state
  const indicatorRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id")
            if (id) setActive(id)
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    )
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onHash = () => setOpen(false)
    window.addEventListener("hashchange", onHash)
    return () => window.removeEventListener("hashchange", onHash)
  }, [])

  const indicatorStyle = useMemo(() => {
    const el = itemRefs.current[active]
    if (!el) return { transform: "translateX(0)", width: 0, left: 0 }
    const rect = el.getBoundingClientRect()
    const parentRect = el.parentElement?.getBoundingClientRect()
    const left = parentRect ? rect.left - parentRect.left : 0
    return { transform: `translateX(${left}px)`, width: rect.width }
  }, [active])

  return (
    <header className="fixed inset-x-0 top-0 z-40" role="banner">
      <nav
        className="mx-auto mt-4 w-[min(100%-1rem,1000px)] rounded-full border border-white/15 bg-white/10 px-3 py-2 backdrop-blur supports-[backdrop-filter]:bg-white/10"
        aria-label="Primary"
        role="navigation"
      >
        <div className="relative flex items-center justify-between">
          <a
            href="#profile"
            className="select-none rounded-full px-3 py-2 text-sm font-semibold tracking-wide text-white/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            Tanuj
          </a>

          {/* desktop links */}
          <div className="relative hidden gap-1 md:flex">
            <div
              ref={indicatorRef}
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-0.5 h-8 rounded-full bg-white/15 transition-transform duration-300 motion-reduce:transition-none"
              style={{
                width: indicatorStyle.width as number,
                transform: indicatorStyle.transform as string,
              }}
            />
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                ref={(el) => (itemRefs.current[s.id] = el)}
                href={`#${s.id}`}
                aria-current={active === s.id ? "page" : undefined}
                className={cn(
                  "relative z-10 rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
                  active === s.id ? "text-white" : "text-white/80 hover:text-white",
                )}
              >
                {s.label}
              </a>
            ))}
          </div>

          {/* mobile hamburger */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
            className="rounded-full bg-white/15 px-3 py-2 text-sm font-medium text-white/90 ring-1 ring-inset ring-white/20 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 md:hidden"
          >
            Menu
          </button>
        </div>

        {/* mobile panel */}
        {open && (
          <div id="mobile-menu" role="dialog" aria-modal="true" className="mt-2 grid gap-1 md:hidden">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
                  active === s.id ? "bg-white/20 text-white" : "text-white/80 hover:bg-white/10 hover:text-white",
                )}
                onClick={() => setOpen(false)}
              >
                {s.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
