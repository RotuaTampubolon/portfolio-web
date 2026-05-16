"use client"

import { useState, useEffect } from "react"
import { personal } from "@/data/personal"
import { useActiveSection } from "@/hooks/useActiveSection"
import { Download, Menu, X } from "lucide-react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

const sectionIds = ["about", "skills", "projects", "experience", "contact"]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  const handleNavClick = () => setMobileOpen(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-background/92 backdrop-blur-xl border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="text-base font-semibold text-foreground">
          Rotua.dev
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors duration-150 ${
                activeSection === link.href.slice(1)
                  ? "font-medium text-foreground"
                  : "text-text-secondary hover:text-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Download CV */}
        <a
          href={personal.cvPath}
          download
          className="hidden items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground transition-all duration-150 hover:border-border-strong hover:bg-muted md:flex"
        >
          <Download className="h-4 w-4 text-accent" />
          Download CV
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center justify-center text-foreground md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className={`text-base transition-colors duration-150 ${
                  activeSection === link.href.slice(1)
                    ? "font-medium text-foreground"
                    : "text-text-secondary hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={personal.cvPath}
              download
              onClick={handleNavClick}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground transition-all duration-150 hover:border-border-strong"
            >
              <Download className="h-4 w-4 text-accent" />
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
