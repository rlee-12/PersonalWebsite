import { GraduationCap } from "lucide-react";
import { education } from "@/data/site";
import Container from "@/components/layout/Container";
import BorderedCard from "@/components/ui/BorderedCard";
import SectionHeader from "@/components/ui/SectionHeader";

export default function EducationSection() {
  return (
    <section id="education" className="py-16 sm:py-24">
      <Container>
        <SectionHeader index="03" eyebrow="Education" title="Where I'm studying" />
        <BorderedCard>
          <div className="flex items-start gap-4">
            <span
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-border bg-bg text-primary"
              aria-hidden="true"
            >
              <GraduationCap size={20} />
            </span>
            <div>
              <h3 className="text-xl font-bold tracking-tight text-fg sm:text-2xl">
                {education.school}
              </h3>
              {education.degree && (
                <p className="mt-1 text-base text-muted">{education.degree}</p>
              )}
              <p className="mt-1 font-mono text-sm text-primary">
                {education.classYear}
              </p>
              {education.details && education.details.length > 0 && (
                <ul className="mt-3 flex flex-col gap-1.5">
                  {education.details.map((detail) => (
                    <li key={detail} className="text-sm text-muted">
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </BorderedCard>
      </Container>
    </section>
  );
}
