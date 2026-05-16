"use client"

import { useState, useRef, useEffect } from "react"
import { projects, categories } from "@/data/projects"
import ProjectCard from "./ProjectCard"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 })
  const tabsRef = useRef<HTMLDivElement>(null)
  const ref = useScrollAnimation()

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  const featuredProjects = filteredProjects.filter((p) => p.featured)
  const standardProjects = filteredProjects.filter((p) => !p.featured)

  useEffect(() => {
    if (!tabsRef.current) return
    const activeTab = tabsRef.current.querySelector<HTMLButtonElement>(
      `[data-tab="${activeFilter}"]`
    )
    if (activeTab) {
      setUnderlineStyle({
        left: activeTab.offsetLeft,
        width: activeTab.offsetWidth,
      })
    }
  }, [activeFilter])

  return (
    <section id="projects" className="bg-background-secondary py-16 md:py-24" ref={ref}>
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="animate-ready mb-10 text-center" data-delay="0">
          <h2 className="text-3xl font-bold text-foreground">{"Things I've Built"}</h2>
          <p className="mt-3 text-base text-text-secondary">
            Projects spanning software development, system analysis, QA, and product design
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="animate-ready sticky top-[72px] z-30 -mx-6 mb-8 border-b border-border bg-background px-6 py-3" data-delay="60">
          <div className="relative" ref={tabsRef}>
            <div className="flex gap-1 overflow-x-auto scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  data-tab={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`relative whitespace-nowrap px-3 py-2 text-sm transition-colors duration-150 ${
                    activeFilter === cat
                      ? "font-medium text-foreground"
                      : "text-text-secondary hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            {/* Animated underline */}
            <div
              className="absolute bottom-0 h-0.5 bg-accent transition-all duration-300"
              style={{
                left: underlineStyle.left,
                width: underlineStyle.width,
              }}
            />
          </div>
        </div>

        {/* Featured */}
        {featuredProjects.length > 0 && (
          <div className="mb-6 grid grid-cols-1 gap-5 md:grid-cols-2">
            {featuredProjects.map((project, i) => (
              <div
                key={project.id}
                className="animate-ready"
                data-delay={String((i + 1) * 60 + 120)}
              >
                <ProjectCard project={project} featured />
              </div>
            ))}
          </div>
        )}

        {/* Standard */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {standardProjects.map((project, i) => (
            <div
              key={project.id}
              className="animate-ready"
              data-delay={String((i + 1) * 60 + 180)}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="py-12 text-center text-text-secondary">
            No projects in this category yet.
          </p>
        )}

        {/* Links note */}
        <p className="mt-10 text-center text-sm text-text-tertiary">
          Repository and project documentation can be accessed by clicking the links below each project card.
        </p>
      </div>
    </section>
  )
}
