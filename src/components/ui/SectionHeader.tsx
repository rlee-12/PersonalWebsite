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
    <div className="mb-8 sm:mb-10">
      <p className="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-widest text-primary">
        {index && <span className="text-accent">{index}</span>}
        <span aria-hidden="true" className="h-px w-6 bg-primary/50" />
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-fg sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
          {description}
        </p>
      )}
    </div>
  );
}
