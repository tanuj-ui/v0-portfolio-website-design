"use client"

import { useEffect, useRef } from "react"

/**
 * Full-screen bluish→purple gradient with subtle particle field on canvas
 * Colors used (limit 3-5 total): Blue, Indigo/Purple, White, Slate/Black
 */
export function BackgroundFX() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext("2d")!
    const DPR = Math.min(2, window.devicePixelRatio || 1)

    let width = (canvas.width = window.innerWidth * DPR)
    let height = (canvas.height = window.innerHeight * DPR)
    canvas.style.width = `${window.innerWidth}px`
    canvas.style.height = `${window.innerHeight}px`

    const onResize = () => {
      width = canvas.width = window.innerWidth * DPR
      height = canvas.height = window.innerHeight * DPR
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
    }
    window.addEventListener("resize", onResize)

    type Particle = { x: number; y: number; vx: number; vy: number; r: number; a: number; h: number }
    const PARTICLE_COUNT = Math.floor((window.innerWidth * window.innerHeight) / 20000)
    const palette = [180, 220, 300] // cyan, blue-violet, magenta hues
    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.15 * DPR,
      vy: (Math.random() - 0.5) * 0.15 * DPR,
      r: Math.random() * 1.2 * DPR + 0.6,
      a: Math.random() * 0.5 + 0.2,
      h: palette[Math.floor(Math.random() * palette.length)],
    }))

    function tick() {
      // gradient background
      const g = ctx.createLinearGradient(0, 0, width, height)
      // Colors: near-black gray -> deeper gray
      g.addColorStop(0, "oklch(0.14 0 0)")
      g.addColorStop(1, "oklch(0.11 0 0)")
      ctx.fillStyle = g
      ctx.fillRect(0, 0, width, height)

      // subtle noise/particles
      ctx.save()
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.h}, 100%, 60%, ${p.a * 0.22})`
        ctx.fill()
      }
      ctx.restore()

      rafRef.current = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      cancelAnimationFrame(rafRef.current!)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <canvas ref={canvasRef} className="h-full w-full" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="animated-lobe lobe-1" />
        <div className="animated-lobe lobe-2" />
        <div className="animated-lobe lobe-3" />
      </div>
      <style jsx>{`
        .animated-lobe {
          position: absolute;
          width: 60vw;
          height: 60vw;
          border-radius: 9999px;
          filter: blur(90px);
          opacity: 0.25;
          mix-blend-mode: screen;
        }
        .lobe-1 {
          left: -12vw;
          top: -10vh;
          background: radial-gradient(circle at 50% 50%, rgba(34, 211, 238, 0.25), transparent 60%); /* cyan */
          animation: lobe1Move 22s ease-in-out infinite alternate;
        }
        .lobe-2 {
          right: -14vw;
          bottom: -14vh;
          background: radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.20), transparent 60%); /* violet */
          animation: lobe2Move 26s ease-in-out infinite alternate;
        }
        .lobe-3 {
          left: 30vw;
          top: 58vh;
          background: radial-gradient(circle at 50% 50%, rgba(244, 63, 94, 0.16), transparent 60%); /* pink */
          animation: lobe3Move 28s ease-in-out infinite alternate;
        }
        @keyframes lobe1Move {
          0% { transform: translate(-6vw, -2vh) scale(1.00); }
          100% { transform: translate(22vw, 14vh) scale(1.10); }
        }
        @keyframes lobe2Move {
          0% { transform: translate(6vw, 0vh) scale(0.95); }
          100% { transform: translate(-22vw, -12vh) scale(1.10); }
        }
        @keyframes lobe3Move {
          0% { transform: translate(-10vw, 0vh) scale(0.92); }
          100% { transform: translate(10vw, -16vh) scale(1.05); }
        }
      `}</style>
      {/* subtle noise/particles */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(800px 600px at 15% 10%, rgba(255, 42, 79, 0.08), transparent 60%), radial-gradient(700px 500px at 85% 90%, rgba(255, 42, 79, 0.06), transparent 60%)",
        }}
      />
      {/* glass overlay vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
      {/* top glow strip */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/15 to-transparent" />
      {/* subtle scanlines for gaming HUD vibe */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.10] mix-blend-soft-light"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 3px, transparent 6px)",
        }}
      />
      {/* faint grid overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, rgba(255,255,255,0.06) 0 1px, transparent 1px 40px), repeating-linear-gradient(to bottom, rgba(255,255,255,0.06) 0 1px, transparent 1px 40px)",
        }}
      />

      <div className="absolute inset-0 opacity-[0.35]">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.00) 28%)",
            maskImage: "radial-gradient(100% 50% at 50% 0%, black, transparent 70%)",
          }}
        />
      </div>
    </div>
  )
}
