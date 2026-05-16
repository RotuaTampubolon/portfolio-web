"use client"

import { skillCategories } from "@/data/skills"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import {
  Code2,
  LayoutGrid,
  Database,
  ShieldCheck,
  PencilRuler,
  Blocks,
} from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  code: <Code2 className="h-5 w-5 text-accent" />,
  squares: <Blocks className="h-5 w-5 text-accent" />,
  database: <Database className="h-5 w-5 text-accent" />,
  shield: <ShieldCheck className="h-5 w-5 text-accent" />,
  layout: <LayoutGrid className="h-5 w-5 text-accent" />,
  pencil: <PencilRuler className="h-5 w-5 text-accent" />,
}

export default function Skills() {
  const ref = useScrollAnimation()

  return (
    <section id="skills" className="bg-background py-16 md:py-24" ref={ref}>
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="animate-ready mb-12 text-center" data-delay="0">
          <h2 className="text-3xl font-bold text-foreground">What I Work With</h2>
          <p className="mt-3 text-base text-text-secondary">
            Technologies, tools, and methods I use across development, analysis, and testing
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.name}
              className="animate-ready rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:border-border-strong hover:shadow-md"
              data-delay={String((i + 1) * 60)}
            >
              <div className="mb-4 flex items-center gap-2.5">
                {iconMap[cat.icon]}
                <h3 className="font-semibold text-foreground">{cat.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-background-secondary px-2.5 py-1 font-mono text-[13px] text-text-secondary transition-all duration-150 hover:border-border-strong hover:bg-[#f1f3f9]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
