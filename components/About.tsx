import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-20 py-12">
      <Reveal>
        <SectionHeading eyebrow="About" title="About Me" />
        <div id="about-heading" className="sr-only">
          About Me
        </div>
        <div className="grid gap-6 rounded-2xl border border-border bg-card p-6 leading-7 sm:p-8">
          <p>
            I&apos;m a second-year BTech student learning software development
            through small, practical projects. I enjoy turning ideas into clean,
            responsive web interfaces and understanding how things work under
            the hood.
          </p>
          <p className="text-muted">
            Right now I&apos;m focused on JavaScript/TypeScript, React and
            Next.js, plus the fundamentals — Git, REST APIs and databases. My
            goal is to earn an internship where I can contribute real code,
            learn from experienced developers, and keep improving with every
            project.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
