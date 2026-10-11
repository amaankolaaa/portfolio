import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { skillCategories } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-20 py-12">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          title="Technical Skills"
          description="Only technologies I can explain and demonstrate — updated as I learn."
        />
        <h2 id="skills-heading" className="sr-only">
          Technical Skills
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
                {cat.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-border bg-background px-3 py-1.5 text-sm"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
