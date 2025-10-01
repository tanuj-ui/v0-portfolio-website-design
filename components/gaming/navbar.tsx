"use client"

import { useEffect, useState } from "react"

export default function GamingNavbar({
  active,
  anchors,
}: {
  active: string
  anchors: string[]
}) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onHash = () => setOpen(false)
    window.addEventListener("hashchange", onHash)
    return () => window.removeEventListener("hashchange", onHash)
  }, [])

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <nav className="mx-auto max-w-6xl px-4">
        <div className="mt-4 glass neon-glow rounded-xl border border-white/10 backdrop-blur flex items-center justify-between px-4 py-3">
          <a href="#profile" className="font-mono tracking-wider">
            TKS<span className="text-red-600">_</span>DEV
          </a>
          <button
            className="md:hidden rounded-md px-3 py-1 border border-white/10 hover:bg-white/5"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            Menu
          </button>
          <ul className="hidden md:flex items-center gap-2">
            {anchors.map((a) => (
              <li key={a}>
                <a
                  href={`#${a}`}
                  className={`px-3 py-1 rounded-md transition ${
                    active === a
                      ? "bg-red-600/20 border border-red-600/40"
                      : "hover:bg-white/5 border border-transparent"
                  }`}
                >
                  {a}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {open && (
          <ul className="md:hidden mt-2 glass neon-glow rounded-xl p-2 flex flex-col">
            {anchors.map((a) => (
              <li key={a}>
                <a
                  href={`#${a}`}
                  className={`block px-3 py-2 rounded-md transition ${
                    active === a
                      ? "bg-red-600/20 border border-red-600/40"
                      : "hover:bg-white/5 border border-transparent"
                  }`}
                >
                  {a}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}
