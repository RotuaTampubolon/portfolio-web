"use client"

import { type Project, isPlaceholder, isLiveUrl } from "@/data/projects"
import { Github, ExternalLink, FileText, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(featured)

  return (
    <article
      className={`group flex flex-col rounded-xl border bg-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md ${
        featured ? "border-border-strong col-span-1 md:col-span-2" : "border-border"
      }`}
    >
      {/* Top row */}
      <div className="flex items-center justify-between">
        <span className="rounded-md bg-background-secondary px-2 py-0.5 font-mono text-[11px] text-text-secondary">
          {project.category}
        </span>
        <div className="flex items-center gap-2">
          {featured && (
            <span className="rounded-md border border-border bg-background-secondary px-2 py-0.5 font-mono text-[11px] text-text-secondary">
              Featured
            </span>
          )}
          <span className="rounded-md bg-background-secondary px-2 py-0.5 font-mono text-[11px] text-text-secondary">
            {project.status}
          </span>
        </div>
      </div>

      {/* Title */}
      <h3 className="mt-3 text-lg font-semibold text-foreground">{project.title}</h3>
      <p className="mt-0.5 text-sm text-text-tertiary">{project.subtitle}</p>

      {/* Description */}
      <p className="mt-3 text-sm leading-relaxed text-text-secondary">
        {project.description}
      </p>

      {/* Highlights */}
      {project.highlights.length > 0 && (
        <div className="mt-3">
          {!featured && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 text-xs text-text-tertiary transition-colors hover:text-text-secondary"
            >
              {expanded ? "Hide details" : "Show details"}
              {expanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
            </button>
          )}
          {expanded && (
            <ul className="mt-2 space-y-1.5">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-text-tertiary" />
                  {h}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Tech Stack */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded bg-background-secondary px-2 py-0.5 font-mono text-[12px] text-text-secondary"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Bottom row */}
      <div className="mt-auto flex items-center justify-end pt-4">

        <div className="flex items-center gap-2">
          {/* GitHub button */}
          {isLiveUrl(project.repoUrl) && (
            <a
              href={project.repoUrl!}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1 text-xs text-foreground transition-all duration-150 hover:border-border-strong hover:bg-muted"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
            </a>
          )}
          {isPlaceholder(project.repoUrl) && (
            <span
              className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-md border border-border px-2.5 py-1 text-xs text-text-tertiary opacity-50"
              title="Repository coming soon"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
            </span>
          )}

          {/* Docs button */}
          {isLiveUrl(project.docUrl) && (
            <a
              href={project.docUrl!}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1 text-xs text-foreground transition-all duration-150 hover:border-border-strong hover:bg-muted"
            >
              <FileText className="h-3.5 w-3.5" />
              Docs
            </a>
          )}
          {isPlaceholder(project.docUrl) && (
            <span
              className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-md border border-border px-2.5 py-1 text-xs text-text-tertiary opacity-50"
              title="Documentation coming soon"
            >
              <FileText className="h-3.5 w-3.5" />
              Docs
            </span>
          )}

          {/* Demo button */}
          {isLiveUrl(project.demo) && (
            <a
              href={project.demo!}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1 text-xs text-foreground transition-all duration-150 hover:border-border-strong hover:bg-muted"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
