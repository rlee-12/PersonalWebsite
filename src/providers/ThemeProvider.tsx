"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggleTheme: () => {},
});

const STORAGE_KEY = "theme";

function readThemeFromDom(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(readThemeFromDom);

  const toggleTheme = useCallback(() => {
    const next: Theme = readThemeFromDom() === "dark" ? "light" : "dark";
    localStorage.setItem(STORAGE_KEY, next);

    const apply = () => {
      applyTheme(next);
      setTheme(next);
    };

    // Animate the real page repaint as a top-to-bottom gradient reveal.
    if (document.startViewTransition && !prefersReducedMotion()) {
      document.documentElement.classList.add("theme-washing");
      const transition = document.startViewTransition(apply);
      transition.finished.finally(() => {
        document.documentElement.classList.remove("theme-washing");
      });
    } else {
      apply();
    }
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
