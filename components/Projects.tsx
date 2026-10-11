"use client";

import { useEffect, useState } from "react";
import { ExternalLink, X } from "lucide-react";
import { GithubIcon } from "./icons";
import { projects, type Project } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function statusLabel(s: Project["status"]) {
  if (s === "live") return "Live";
  if (s === "in-progress") return "In progress";
  return "Code only";
}

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-20 py-12"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Projects"
          title="Project Showcase"
          description="Each project explains the problem, solution and what I learned."
        />
        <h2 id="projects-heading" className="sr-only">
          Project Showcase
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.slug}
              className="flex flex-col rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-lg"
            >
              <div
                aria-hidden
                className="mb-4 flex aspect-video items-center justify-center rounded-xl bg-accent/10 text-3xl font-bold text-accent"
              >
                {p.name.charAt(0)}
              </div>
              <div className="mb-2 flex items-center justify-between gap-2">
                <h3 className="text-base font-bold">{p.name}</h3>
                <span className="shrink-0 rounded-full border border-border px-2.5 py-1 text-xs text-muted">
                  {statusLabel(p.status)}
                </span>
              </div>
              <p className="mb-3 text-sm leading-6 text-muted">
                {p.shortDescription}
              </p>
              <ul aria-label={`${p.name} tech stack`} className="mb-4 flex flex-wrap gap-1.5">
                {p.stack.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-background px-2.5 py-1 text-xs text-muted"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setActive(p)}
                  className="inline-flex h-9 items-center rounded-full bg-accent px-4 text-xs font-semibold text-white hover:bg-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  View details
                </button>
                {p.repoUrl && (
                  <a
                    href={p.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.name} source code on GitHub`}
                    className="inline-flex h-9 items-center gap-1.5 rounded-full border border-border px-4 text-xs font-semibold hover:border-accent focus-visible:outline-2 focus-visible:outline-accent"
                  >
                    <GithubIcon size={14} /> Code
                  </a>
                )}
                {p.demoUrl && (
                  <a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.name} live demo`}
                    className="inline-flex h-9 items-center gap-1.5 rounded-full border border-border px-4 text-xs font-semibold hover:border-accent focus-visible:outline-2 focus-visible:outline-accent"
                  >
                    <ExternalLink size={14} /> Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </Reveal>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-0 sm:items-center sm:p-6"
          onClick={() => setActive(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-background p-6 sm:rounded-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h3 id="project-modal-title" className="text-xl font-bold">
                  {active.name}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {statusLabel(active.status)} · {active.stack.join(" · ")}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close project details"
                autoFocus
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border hover:border-accent focus-visible:outline-2 focus-visible:outline-accent"
              >
                <X size={18} />
              </button>
            </div>
            <div className="space-y-4 text-sm leading-7">
              <div>
                <h4 className="font-semibold">Problem</h4>
                <p className="text-muted">{active.problem}</p>
              </div>
              <div>
                <h4 className="font-semibold">Solution</h4>
                <p className="text-muted">{active.solution}</p>
              </div>
              <div>
                <h4 className="font-semibold">Key features</h4>
                <ul className="list-disc pl-5 text-muted">
                  {active.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Lessons learned</h4>
                <ul className="list-disc pl-5 text-muted">
                  {active.lessons.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {active.repoUrl && (
                  <a
                    href={active.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center gap-2 rounded-full border border-border px-4 text-sm font-semibold hover:border-accent"
                  >
                    <GithubIcon size={16} /> Source code
                  </a>
                )}
                {active.demoUrl && (
                  <a
                    href={active.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center gap-2 rounded-full bg-accent px-4 text-sm font-semibold text-white hover:bg-accent-strong"
                  >
                    <ExternalLink size={16} /> Live demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
