type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  index?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  index,
}: SectionHeaderProps) {
  return (
    <div className="mb-10 sm:mb-12">
      <div className="rule flex items-baseline justify-between gap-4 pt-3">
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-accent">
          {index && <span className="mr-2 text-muted">No. {index}</span>}
          {eyebrow}
        </p>
      </div>
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-fg sm:text-[2.6rem] sm:leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl font-display text-lg italic leading-relaxed text-muted">
          {description}
        </p>
      )}
    </div>
  );
}
