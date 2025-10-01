"use client"

import { useEffect, useRef, useState } from "react"

type Point = { x: number; y: number }

const isInteractive = (el: Element | null) => {
  if (!el) return false
  const target = el as HTMLElement
  if (target.closest("a, button, [role='button'], input, textarea, select, [contenteditable='true'], .interactive"))
    return true
  return false
}

export default function GamingCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const reqRef = useRef<number | null>(null)

  const [enabled, setEnabled] = useState(false)
  const [pressed, setPressed] = useState(false)
  const [hovering, setHovering] = useState(false)

  const pos = useRef<Point>({ x: 0, y: 0 })
  const target = useRef<Point>({ x: 0, y: 0 })

  useEffect(() => {
    // Enable only on precise pointers (desktop / trackpad)
    const supportsFine =
      typeof window !== "undefined" && window.matchMedia && window.matchMedia("(pointer: fine)").matches
    if (!supportsFine) return

    setEnabled(true)
    document.body.classList.add("custom-cursor-active")

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX
      target.current.y = e.clientY

      const el = document.elementFromPoint(e.clientX, e.clientY)
      setHovering(isInteractive(el))
    }

    const onDown = () => setPressed(true)
    const onUp = () => setPressed(false)

    window.addEventListener("mousemove", onMove, { passive: true })
    window.addEventListener("mousedown", onDown)
    window.addEventListener("mouseup", onUp)

    // Animation loop - simple lerp for trailing effect
    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.18
      pos.current.y += (target.current.y - pos.current.y) * 0.18

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) scale(${pressed ? 0.75 : hovering ? 1.15 : 1})`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) scale(${pressed ? 0.9 : hovering ? 1.3 : 1})`
      }
      reqRef.current = requestAnimationFrame(animate)
    }
    reqRef.current = requestAnimationFrame(animate)

    return () => {
      if (reqRef.current) cancelAnimationFrame(reqRef.current)
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mousedown", onDown)
      window.removeEventListener("mouseup", onUp)
      document.body.classList.remove("custom-cursor-active")
    }
  }, [])

  if (!enabled) return null

  const neonColor = pressed
    ? "#e879f9" /* fuchsia-400 */
    : hovering
      ? "#22d3ee" /* cyan-400 */
      : "#60a5fa" /* sky-400 */

  return (
    <>
      <style jsx global>{`
        @media (pointer: fine) {
          body.custom-cursor-active {
            cursor: none;
          }
          body.custom-cursor-active a,
          body.custom-cursor-active button,
          body.custom-cursor-active [role="button"],
          body.custom-cursor-active input,
          body.custom-cursor-active textarea,
          body.custom-cursor-active select {
            cursor: none !important;
          }
        }
      `}</style>

      {/* Outer ring - neon with adaptive color */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={[
          "pointer-events-none fixed left-0 top-0 z-[10000]",
          "h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full",
          "border-2 transition-[transform,opacity] duration-150 ease-out",
          "before:absolute before:inset-0 before:rounded-full before:content-['']",
          "animate-[cursorShimmer_2.4s_ease-in-out_infinite]",
        ].join(" ")}
        style={{
          mixBlendMode: "screen",
          borderColor: neonColor,
          boxShadow: `0 0 8px ${neonColor}, 0 0 16px ${neonColor}, 0 0 32px ${neonColor}`,
        }}
      />

      {/* Inner dot - bright core with adaptive glow */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className={[
          "pointer-events-none fixed left-0 top-0 z-[10001]",
          "h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full",
          "transition-transform duration-100",
        ].join(" ")}
        style={{
          mixBlendMode: "screen",
          backgroundColor: neonColor,
          boxShadow: `0 0 6px ${neonColor}, 0 0 12px ${neonColor}`,
        }}
      />

      {/* Keyframes for subtle shimmer */}
      <style jsx>{`
        @keyframes cursorShimmer {
          0%, 100% { filter: drop-shadow(0 0 6px #ef4444) drop-shadow(0 0 12px #ef4444); }
          50% { filter: drop-shadow(0 0 10px #ef4444) drop-shadow(0 0 22px #ef4444); }
        }
      `}</style>
    </>
  )
}
