import { Github, Instagram, Linkedin, Mail } from "lucide-react"

export default function GamingFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto max-w-6xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Tanuj Kumar Singh. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a
            className="badge hover:bg-white/10 transition"
            href="https://github.com/tanuj-ui"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={14} /> GitHub
          </a>
          <a
            className="badge hover:bg-white/10 transition"
            href="https://www.linkedin.com/in/tanuj-kumar-singh-303aa6320?original_referer=https%3A%2F%2Ftanuj-ui.github.io%2F"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={14} /> LinkedIn
          </a>
          <a
            className="badge hover:bg-white/10 transition"
            href="https://www.instagram.com/tanuj_._singh/#"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram size={14} /> Instagram
          </a>
          <a className="badge hover:bg-white/10 transition" href="mailto:tanujkumar14122005@gmail.com">
            <Mail size={14} /> Email
          </a>
        </div>
      </div>
    </footer>
  )
}
