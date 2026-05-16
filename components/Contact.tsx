"use client"

import { personal } from "@/data/personal"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard"
import {
  Mail,
  Linkedin,
  Github,
  Copy,
  Check,
  ExternalLink,
  Send,
} from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const ref = useScrollAnimation()
  const { copied, copy } = useCopyToClipboard()
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Opens mailto with pre-filled subject and body
    const subject = `Portfolio Contact from ${formData.name}`
    const body = `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="bg-background py-16 md:py-24" ref={ref}>
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="animate-ready mb-10 text-center" data-delay="0">
          <h2 className="text-3xl font-bold text-foreground">{"Let's Work Together"}</h2>
          <p className="mt-3 text-base text-text-secondary">
            Currently open to internship opportunities. Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left - Contact Cards */}
          <div className="flex flex-col gap-3">
            {/* Email */}
            <button
              onClick={() => copy(personal.email)}
              className="animate-ready flex items-center gap-4 rounded-lg border border-border p-4 text-left transition-all duration-200 hover:border-border-strong hover:shadow-sm"
              data-delay="60"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-background-secondary">
                <Mail className="h-5 w-5 text-accent" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium text-text-tertiary">Email</p>
                <p className="text-sm text-foreground">{personal.email}</p>
              </div>
              {copied ? (
                <Check className="h-4 w-4 text-status-green" />
              ) : (
                <Copy className="h-4 w-4 text-text-tertiary" />
              )}
            </button>

            {/* LinkedIn */}
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-ready flex items-center gap-4 rounded-lg border border-border p-4 transition-all duration-200 hover:border-border-strong hover:shadow-sm"
              data-delay="120"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-background-secondary">
                <Linkedin className="h-5 w-5 text-accent" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium text-text-tertiary">LinkedIn</p>
                <p className="text-sm text-foreground">linkedin.com/in/rotua-immanuela</p>
              </div>
              <ExternalLink className="h-4 w-4 text-text-tertiary" />
            </a>

            {/* GitHub */}
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-ready flex items-center gap-4 rounded-lg border border-border p-4 transition-all duration-200 hover:border-border-strong hover:shadow-sm"
              data-delay="180"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-background-secondary">
                <Github className="h-5 w-5 text-accent" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium text-text-tertiary">GitHub</p>
                <p className="text-sm text-foreground">github.com/RotuaTampubolon</p>
              </div>
              <ExternalLink className="h-4 w-4 text-text-tertiary" />
            </a>
          </div>

          {/* Right - Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="animate-ready flex flex-col gap-4"
            data-delay="120"
          >
            <div>
              <input
                type="text"
                placeholder="Your name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-text-tertiary focus:border-border-strong focus:outline-none"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="your@email.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-text-tertiary focus:border-border-strong focus:outline-none"
              />
            </div>
            <div>
              <textarea
                placeholder="Tell me about the opportunity..."
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full resize-none rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-text-tertiary focus:border-border-strong focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-150 hover:opacity-90"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>
            <p className="text-center text-xs text-text-tertiary">
              I usually respond within 24 hours.
            </p>
          </form>
        </div>
      </div>

      {/* Toast for clipboard */}
      {copied && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 animate-fade-up rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground shadow-lg">
          Email copied to clipboard
        </div>
      )}
    </section>
  )
}
