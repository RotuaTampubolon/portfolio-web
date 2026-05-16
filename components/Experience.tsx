"use client"

import { experience } from "@/data/experience"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export default function Experience() {
  const ref = useScrollAnimation()

  return (
    <section id="experience" className="bg-background py-16 md:py-24" ref={ref}>
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="animate-ready mb-12" data-delay="0">
          <h2 className="text-3xl font-bold text-foreground">Experience</h2>
        </div>

        {/* Timeline */}
        <div className="relative ml-3 border-l border-border pl-8">
          {experience.map((item, i) => (
            <div
              key={i}
              className="animate-ready relative pb-10 last:pb-0"
              data-delay={String((i + 1) * 80)}
            >
              {/* Timeline node */}
              <div
                className={`absolute -left-[calc(2rem+5px)] top-1 h-2.5 w-2.5 rounded-full border-2 bg-card ${
                  item.isLatest ? "border-accent" : "border-border"
                }`}
              />

              {/* Card */}
              <div className="rounded-lg border border-border bg-card p-5 transition-all duration-200 hover:shadow-sm">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm text-text-secondary">{item.period}</span>
                  <span className="rounded-md bg-background-secondary px-2 py-0.5 font-mono text-[11px] text-text-secondary">
                    {item.type}
                  </span>
                </div>
                <h3 className="mt-2 text-base font-semibold text-foreground">{item.role}</h3>
                <p className="text-sm text-text-secondary">{item.org}</p>
                {item.gpa && (
                  <p className="mt-1 font-mono text-sm text-foreground">
                    GPA: {item.gpa}
                  </p>
                )}
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
