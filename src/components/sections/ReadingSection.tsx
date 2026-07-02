import type { Book } from "@/data/site";
import { books, readingStats } from "@/data/site";
import Container from "@/components/layout/Container";
import BorderedCard from "@/components/ui/BorderedCard";
import SectionHeader from "@/components/ui/SectionHeader";

const statusLabels: Record<Book["status"], string> = {
  reading: "Currently reading",
  queued: "On the list",
  finished: "Recently finished",
};

function BookCard({ book }: { book: Book }) {
  return (
    <BorderedCard>
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="font-medium text-fg">{book.title}</p>
          <p className="mt-0.5 text-sm text-muted">{book.author}</p>
        </div>
        <div className="flex items-center gap-2">
          {book.rating !== undefined && (
            <span className="font-mono text-xs text-accent">
              ★ {book.rating.toFixed(1)}/5
            </span>
          )}
          {book.category && (
            <span className="rounded-full border border-border bg-bg px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">
              {book.category}
            </span>
          )}
        </div>
      </div>
      {book.status === "reading" && book.progress !== undefined && (
        <div className="mt-4">
          <div className="mb-1.5 flex items-center justify-between font-mono text-xs text-muted">
            <span>Progress</span>
            <span className="text-primary">{book.progress}%</span>
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
      {book.note && <p className="mt-2 text-sm text-muted">{book.note}</p>}
    </BorderedCard>
  );
}

function BookGroup({ items, status }: { items: Book[]; status: Book["status"] }) {
  if (items.length === 0) return null;

  return (
    <div>
      <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">
        {statusLabels[status]}
      </h3>
      <div className="flex flex-col gap-3">
        {items.map((book) => (
          <BookCard key={`${book.title}-${book.author}`} book={book} />
        ))}
      </div>
    </div>
  );
}

export default function ReadingSection() {
  const reading = books.filter((b) => b.status === "reading");
  const queued = books.filter((b) => b.status === "queued");
  const finished = books.filter((b) => b.status === "finished");

  return (
    <section id="reading" className="py-16 sm:py-24">
      <Container>
        <SectionHeader
          index="05"
          eyebrow="Reading"
          title="Books on my radar"
          description="What I'm reading and what I want to pick up next."
        />
        <div className="flex flex-col gap-8">
          <BookGroup items={reading} status="reading" />
          <BookGroup items={queued} status="queued" />
          <BookGroup items={finished} status="finished" />
          <div>
            <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">
              Reading stats
            </h3>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {readingStats.map((stat) => (
                <div
                  key={stat.label}
                  className="card-hover rounded-md border border-border bg-surface px-4 py-4 text-center"
                >
                  <p className="text-2xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
