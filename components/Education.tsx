import { GraduationCap, Award } from "lucide-react";
import { education, achievements } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="scroll-mt-20 py-12"
    >
      <Reveal>
        <SectionHeading eyebrow="Background" title="Education & Achievements" />
        <h2 id="education-heading" className="sr-only">
          Education and Achievements
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-3 flex items-center gap-2 text-accent">
              <GraduationCap size={20} aria-hidden />
              <h3 className="text-sm font-semibold uppercase tracking-wider">
                Education
              </h3>
            </div>
            <p className="text-lg font-bold">
              {education.degree} · {education.year}
            </p>
            <dl className="mt-3 space-y-2 text-sm leading-6">
              <div className="flex gap-2">
                <dt className="w-32 shrink-0 text-muted">Institution</dt>
                <dd>{education.institution}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-32 shrink-0 text-muted">Branch</dt>
                <dd>{education.branch}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-32 shrink-0 text-muted">Graduation</dt>
                <dd>Expected {education.expectedGraduation}</dd>
              </div>
            </dl>
            <p className="mt-3 text-sm leading-6 text-muted">{education.notes}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-3 flex items-center gap-2 text-accent">
              <Award size={20} aria-hidden />
              <h3 className="text-sm font-semibold uppercase tracking-wider">
                Achievements
              </h3>
            </div>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-6">
              {achievements.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
