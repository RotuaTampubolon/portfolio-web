"use client"

import { certifications } from "@/data/certifications"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { Award, ExternalLink } from "lucide-react"

export default function Certifications() {
  const ref = useScrollAnimation()

  return (
    <section className="bg-background-secondary py-16 md:py-24" ref={ref}>
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="animate-ready mb-10" data-delay="0">
          <h2 className="text-3xl font-bold text-foreground">Certifications</h2>
        </div>

        <div className="flex flex-col gap-4">
          {certifications.map((cert, i) => (
            <div
              key={cert.credentialId}
              className="animate-ready flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:shadow-sm"
              data-delay={String((i + 1) * 80)}
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-background-secondary">
                <Award className="h-5 w-5 text-accent" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-base font-semibold text-foreground">{cert.title}</h3>
                <p className="mt-1 text-sm text-text-secondary">
                  {cert.issuer} &middot; {cert.date}
                </p>
                <p className="mt-1 font-mono text-xs text-text-tertiary">
                  {cert.credentialId}
                </p>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex w-fit items-center gap-1 text-sm text-accent transition-colors hover:opacity-80"
                >
                  View Certificate
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
