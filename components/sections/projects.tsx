"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type Project = {
  title: string
  desc: string
  image: string
  link?: string
}
const projects: Project[] = [
  {
    title: "Neon UI Dashboard",
    desc: "A glassy admin dashboard with animated charts and smooth routing.",
    image: "/futuristic-neon-dashboard-ui.jpg",
    link: "#",
  },
  {
    title: "Portfolio Engine",
    desc: "A modular portfolio system with MDX content, themes, and motion.",
    image: "/premium-portfolio-website-glassmorphism.jpg",
    link: "#",
  },
  {
    title: "Commerce Prototype",
    desc: "Fast product browsing with smart search and elegant checkout.",
    image: "/minimal-ecommerce-interface.jpg",
    link: "#",
  },
  {
    title: "AI Playground",
    desc: "Experimenting with generation UX, prompts, and streaming UI.",
    image: "/ai-playground-interface.jpg",
    link: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" data-section className="relative px-4 py-24">
      <div className="mx-auto w-[min(100%,1100px)]">
        <motion.h2
          className="text-center text-2xl font-semibold text-white"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
            >
              <Card className="group overflow-hidden border-white/15 bg-white/10 backdrop-blur">
                <div className="relative">
                  <img
                    src={p.image || "/placeholder.svg"}
                    alt={`${p.title} preview`}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <CardHeader className="flex items-center justify-between gap-3">
                  <CardTitle className="text-white">{p.title}</CardTitle>
                  {p.link && (
                    <Button asChild size="sm" className="rounded-full bg-white/20 text-white hover:bg-white/30">
                      <a href={p.link} target="_blank" rel="noreferrer">
                        Live
                      </a>
                    </Button>
                  )}
                </CardHeader>
                <CardContent className="pb-6 text-white/80">{p.desc}</CardContent>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
