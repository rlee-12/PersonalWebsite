import { ArrowUpRight } from "lucide-react";

type ExternalLinkProps = {
  href: string;
  label: string;
  description?: string;
};

export default function ExternalLink({
  href,
  label,
  description,
}: ExternalLinkProps) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="group card-hover flex items-center justify-between rounded-md border border-border bg-surface px-4 py-3 sm:px-5 sm:py-4"
    >
      <div>
        <p className="font-medium text-fg group-hover:text-primary">{label}</p>
        {description && (
          <p className="mt-0.5 text-sm text-muted">{description}</p>
        )}
      </div>
      {isExternal && (
        <ArrowUpRight
          size={16}
          className="shrink-0 text-muted transition-colors group-hover:text-primary"
          aria-hidden="true"
        />
      )}
    </a>
  );
}
