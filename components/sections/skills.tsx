"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Braces, Database, Server } from "lucide-react"

const skills = [
  { title: "TypeScript", icon: Braces, desc: "Typesafe, scalable code for complex apps." },
  { title: "React / Next.js", icon: Code2, desc: "Modern UX with RSC, app router, and SWR." },
  { title: "APIs & Backend", icon: Server, desc: "REST and server actions, secure patterns." },
  { title: "Databases", icon: Database, desc: "Supabase / Neon with SQL best practices." },
] as const

export function SkillsSection() {
  return (
    <section id="skills" data-section className="relative px-4 py-24">
      <div className="mx-auto w-[min(100%,1000px)]">
        <motion.h2
          className="text-center text-2xl font-semibold text-white"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <Card className="group h-full border-white/15 bg-white/10 text-white/90 backdrop-blur transition-colors hover:bg-white/15">
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="rounded-xl border border-white/20 bg-white/10 p-2">
                    <s.icon className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-white">{s.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-white/80">{s.desc}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
