import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 py-12"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="Get in Touch"
          description="Open to internships, collaborations and feedback on my projects."
        />
        <h2 id="contact-heading" className="sr-only">
          Get in Touch
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-accent"
          >
            <Mail size={20} className="shrink-0 text-accent" aria-hidden />
            <span>
              <span className="block text-sm font-semibold">Email</span>
              <span className="block truncate text-sm text-muted">
                {profile.email}
              </span>
            </span>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-accent"
          >
            <GithubIcon size={20} className="shrink-0 text-accent" />
            <span>
              <span className="block text-sm font-semibold">GitHub</span>
              <span className="block text-sm text-muted">
                View source code
              </span>
            </span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-accent"
          >
            <LinkedinIcon size={20} className="shrink-0 text-accent" />
            <span>
              <span className="block text-sm font-semibold">LinkedIn</span>
              <span className="block text-sm text-muted">Connect with me</span>
            </span>
          </a>
        </div>
        <div className="mt-4 rounded-2xl border border-border bg-card p-6 text-center">
          <p className="text-sm leading-6 text-muted">
            Prefer email? Click below — no form or account needed in this
            version.
          </p>
          <a
            href={`mailto:${profile.email}?subject=Hello%20Mohammed%20—%20from%20your%20portfolio`}
            className="mt-4 inline-flex h-11 items-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-white hover:bg-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <Mail size={16} /> Email Me
          </a>
        </div>
      </Reveal>
    </section>
  );
}
