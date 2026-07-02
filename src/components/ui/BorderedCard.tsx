import { cn } from "@/lib/utils";

type BorderedCardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export default function BorderedCard({
  children,
  className,
  hover = true,
}: BorderedCardProps) {
  return (
    <div
      className={cn(
        "rounded-md border border-border bg-surface p-5 sm:p-6",
        hover && "card-hover",
        className,
      )}
    >
      {children}
    </div>
  );
}
