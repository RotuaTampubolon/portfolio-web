"use client"

import Image from "next/image"
import { personal } from "@/data/personal"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { Download } from "lucide-react"

export default function About() {
  const ref = useScrollAnimation()

  return (
    <section id="about" className="bg-background-secondary py-16 md:py-24" ref={ref}>
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[40%_60%]">
          {/* Left - Identity Card */}
          <div className="animate-ready" data-delay="0">
            <div className="rounded-xl border border-border bg-card p-7 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)]">
              <div className="mb-5 overflow-hidden rounded-lg border border-border bg-background-secondary">
                <div className="relative aspect-[4/5] w-full">
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground">{personal.name}</h3>
              <p className="mt-1 text-sm text-text-secondary">{personal.role}</p>
              <p className="text-sm text-text-secondary">{personal.university}</p>
              <p className="mt-1 font-mono text-sm text-foreground">{personal.gpa}</p>
              <p className="text-sm text-text-secondary">{personal.location}</p>

              <hr className="my-5 border-border" />

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#bbf7d0] bg-[#f0fdf4] px-3 py-1.5">
                <span className="animate-pulse-dot inline-block h-2 w-2 rounded-full bg-status-green" />
                <span className="text-sm font-medium text-[#166534]">Open to Internship</span>
              </div>

              <hr className="my-5 border-border" />

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                {personal.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-xl font-semibold text-foreground">{stat.value}</div>
                    <div className="text-xs text-text-secondary">{stat.label}</div>
                  </div>
                ))}
              </div>

              <hr className="my-5 border-border" />

              {/* Download CV link */}
              <div className="text-sm text-text-secondary">
                {"Prefer a resume?"}
                <a
                  href={personal.cvPath}
                  download
                  className="group ml-1 inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-accent"
                  title="Updated May 2026"
                >
                  <Download className="h-3.5 w-3.5" />
                  Download CV
                </a>
              </div>
            </div>
          </div>

          {/* Right - Bio */}
          <div className="flex flex-col gap-5">
            {personal.bio.map((paragraph, i) => (
              <p
                key={i}
                className="animate-ready text-base leading-[1.7] text-text-secondary"
                data-delay={String((i + 1) * 60)}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
