"use client"

import { useEffect, useRef } from "react"

export function Cursor() {
  const bigRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const big = bigRef.current!
    const dot = dotRef.current!
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let tx = x
    let ty = y

    const onMove = (e: MouseEvent) => {
      tx = e.clientX
      ty = e.clientY
      dot.style.transform = `translate(${tx - 2}px, ${ty - 2}px)`
    }

    const animate = () => {
      x += (tx - x) * 0.15
      y += (ty - y) * 0.15
      big.style.transform = `translate(${x - 16}px, ${y - 16}px)`
      requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    const id = requestAnimationFrame(animate)
    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(id)
    }
  }, [])

  return (
    <>
      {/* glow ring */}
      <div
        ref={bigRef}
        className="pointer-events-none fixed left-0 top-0 z-50 h-8 w-8 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.15)_45%,rgba(255,255,255,0)_60%)] mix-blend-screen blur-[1px]"
        aria-hidden="true"
      />
      {/* center dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-50 h-1.5 w-1.5 rounded-full bg-white"
        aria-hidden="true"
      />
    </>
  )
}
