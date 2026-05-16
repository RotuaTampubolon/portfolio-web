import { personal } from "@/data/personal"
import { Github, Linkedin, Mail } from "lucide-react"

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1100px] px-6 py-10">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Left */}
          <p className="text-sm text-text-secondary">
            {personal.name} &middot; {personal.role}
          </p>

          {/* Center */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary transition-colors duration-150 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary transition-colors duration-150 hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-[18px] w-[18px]" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary transition-colors duration-150 hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-[18px] w-[18px]" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="text-text-secondary transition-colors duration-150 hover:text-foreground"
              aria-label="Email"
            >
              <Mail className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 text-center">
          <p className="text-[13px] text-text-tertiary">
            &copy; 2026 &middot; Built with care
          </p>
        </div>
      </div>
    </footer>
  )
}
