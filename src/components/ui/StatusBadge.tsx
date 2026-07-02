type StatusBadgeProps = {
  label: string;
  value: string;
};

export default function StatusBadge({ label, value }: StatusBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-xs text-muted">
      <span
        className="status-pulse h-2 w-2 rounded-full bg-accent"
        aria-hidden="true"
      />
      <span>
        {label}{" "}
        <span className="font-medium text-primary">{value}</span>
      </span>
    </div>
  );
}
