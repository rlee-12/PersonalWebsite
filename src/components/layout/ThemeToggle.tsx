"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";
import { useTheme } from "@/providers/ThemeProvider";

const emptySubscribe = () => () => {};

/** False during SSR/hydration, true after — avoids a theme icon mismatch. */
function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const mounted = useMounted();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="inline-flex h-9 w-9 items-center justify-center border border-border bg-surface text-fg transition-colors hover:border-fg"
    >
      {mounted ? (
        theme === "dark" ? (
          <Sun size={16} />
        ) : (
          <Moon size={16} />
        )
      ) : (
        <span className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}
