import type { Book } from "@/data/site";
import { books, readingStats } from "@/data/site";
import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const statusLabels: Record<Book["status"], string> = {
  reading: "Currently reading",
  queued: "On the list",
  finished: "Recently finished",
};

function BookCard({ book }: { book: Book }) {
  return (
    <div className="card-hover panel p-4">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="text-sm font-semibold text-fg">{book.title}</p>
          <p className="mt-0.5 text-xs text-muted">{book.author}</p>
        </div>
        <div className="flex items-center gap-2">
          {book.rating !== undefined && (
            <span className="font-mono text-[11px] text-accent">
              ★ {book.rating.toFixed(1)}
            </span>
          )}
          {book.category && (
            <span className="border border-border bg-bg px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-muted">
              {book.category}
            </span>
          )}
        </div>
      </div>
      {book.status === "reading" && book.progress !== undefined && (
        <div className="mt-4">
          <div className="mb-1.5 flex items-center justify-between font-mono text-[10px] text-muted">
            <span>Progress</span>
            <span className="text-accent">{book.progress}%</span>
          </div>
          <div
            className="progress-track"
            role="progressbar"
            aria-valuenow={book.progress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${book.title} reading progress`}
          >
            <div
              className="progress-fill"
              style={{ width: `${book.progress}%` }}
            />
          </div>
        </div>
      )}
      {book.note && <p className="mt-2 text-xs text-muted">{book.note}</p>}
    </div>
  );
}

export default function ReadingSection() {
  const groups = (["reading", "queued", "finished"] as const)
    .map((status) => ({
      status,
      items: books.filter((b) => b.status === status),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <section
      id="reading"
      className="border-y border-border bg-surface/30 py-20 sm:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeader
            index="04"
            eyebrow="Reading"
            title="Books on my radar"
            description="What I'm reading and what I want to pick up next."
          />
        </Reveal>
        <div className="grid gap-8 lg:grid-cols-[1fr_260px]">
          <div className="flex flex-col gap-7">
            {groups.map((group, gi) => (
              <Reveal key={group.status} delay={gi * 0.06}>
                <div>
                  <h3 className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                    {statusLabels[group.status]}
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {group.items.map((book) => (
                      <BookCard
                        key={`${book.title}-${book.author}`}
                        book={book}
                      />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div className="panel hud-corners h-fit p-5">
              <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                Reading stats
              </h3>
              <div className="flex flex-col gap-4">
                {readingStats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-2xl font-semibold text-fg">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
