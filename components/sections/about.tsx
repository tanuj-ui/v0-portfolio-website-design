"use client"

import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" data-section className="relative px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto grid w-[min(100%,1000px)] grid-cols-1 items-center gap-8 md:grid-cols-[280px,1fr]"
      >
        <div className="mx-auto aspect-square w-40 overflow-hidden rounded-full border border-white/25 bg-white/10 p-1 backdrop-blur md:w-56">
          <img
            src="/images/krotos-profile.jpg"
            alt="Kratos-like profile portrait"
            className="h-full w-full rounded-full object-cover ring-2 ring-sky-500/50"
          />
        </div>
        <div className="rounded-2xl border border-white/15 bg-white/10 p-6 text-white/90 backdrop-blur">
          <h2 className="text-2xl font-semibold text-white">About Me</h2>
          <p className="mt-3 leading-relaxed">
            I’m a frontend-focused developer who loves crafting sleek, performant interfaces with a futuristic edge. I
            use modern frameworks, thoughtful UX, and subtle motion to deliver premium experiences.
          </p>
          <p className="mt-3 leading-relaxed">
            When I’m not shipping UI, I explore design systems and experiment with animations that make products feel
            alive.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
