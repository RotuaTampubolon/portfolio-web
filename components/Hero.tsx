"use client"

import { personal } from "@/data/personal"
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-[72px]">
      <div className="mx-auto flex w-full max-w-[1100px] items-center px-6 py-24 md:py-0">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[55%_45%]">
          {/* Left Column - Text */}
          <div className="flex flex-col">
            {/* Availability badge */}
            <div
              className="animate-fade-up mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border px-3.5 py-1.5 font-mono text-[13px] text-text-secondary"
              style={{ animationDelay: "0ms" }}
            >
              <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-status-green" />
              Open for Internship &middot; 2026
            </div>

            {/* Headline */}
            <h1
              className="animate-fade-up text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-[56px]"
              style={{ animationDelay: "80ms" }}
            >
              {"Hi, I'm Rotua Immanuela"}
            </h1>

            {/* Subheadline */}
            <p
              className="animate-fade-up mt-4 text-lg text-text-secondary md:text-xl"
              style={{ animationDelay: "160ms" }}
            >
              Information Systems Student
              <br />
              Building Structured Digital Solutions
            </p>

            {/* Body */}
            <p
              className="animate-fade-up mt-6 max-w-[480px] text-base leading-relaxed text-text-secondary"
              style={{ animationDelay: "240ms" }}
            >
              4th semester student at Institut Teknologi Del with hands-on experience in
              software development, system analysis, database design, and quality assurance.
              I build structured, real-world systems with a focus on clean architecture and
              professional deliverables.
            </p>

            {/* Buttons */}
            <div
              className="animate-fade-up mt-8 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "320ms" }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-150 hover:opacity-90"
              >
                View My Projects
                <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href={personal.cvPath}
                download
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-150 hover:border-border-strong hover:bg-muted"
              >
                <Download className="h-4 w-4 text-accent" />
                Download CV
              </a>
            </div>

            {/* Social */}
            <div
              className="animate-fade-up mt-8 flex items-center gap-4"
              style={{ animationDelay: "400ms" }}
            >
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary transition-colors duration-150 hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary transition-colors duration-150 hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="text-text-secondary transition-colors duration-150 hover:text-foreground"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Column - Profile Photo */}
          <div
            className="animate-fade-up hidden items-center justify-center lg:flex"
            style={{ animationDelay: "200ms" }}
          >
            <div className="relative aspect-square w-[340px] overflow-hidden rounded-2xl border border-border bg-background-secondary">
              <div className="flex h-full w-full items-center justify-center">
                <img
                  src={personal.avatarPath}
                  alt={personal.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


