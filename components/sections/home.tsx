"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HomeSection() {
  return (
    <section id="home" data-section className="relative grid min-h-[100svh] place-items-center px-4 pt-28">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto w-[min(100%,950px)] text-center motion-reduce:transition-none motion-reduce:transform-none"
      >
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium text-white/90 backdrop-blur">
          <Sparkles className="h-4 w-4 text-white/80" />
          <span>Gaming Mode • Glass UI</span>
        </div>
        <h1 className="text-balance text-4xl font-semibold leading-tight md:text-6xl">
          <span className="bg-gradient-to-r from-sky-200 via-white to-fuchsia-300 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]">
            Hi, I&apos;m Tanuj Kumar Singh
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-white/80">
          Frontend developer with a futuristic, gaming-inspired style—premium motion, glassmorphism, and crisp UX.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button asChild className="rounded-full bg-white/20 text-white hover:bg-white/30">
            <a href="#projects">View Projects</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-white/30 bg-white/10 text-white hover:bg-white/20"
          >
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
