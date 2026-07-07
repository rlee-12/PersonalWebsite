"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import ThemeWash from "@/components/layout/ThemeWash";

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
  const [washTarget, setWashTarget] = useState<Theme | null>(null);

  const completeWash = useCallback(() => {
    if (!washTarget) return;
    localStorage.setItem(STORAGE_KEY, washTarget);
    applyTheme(washTarget);
    setTheme(washTarget);
    setWashTarget(null);
  }, [washTarget]);

  const toggleTheme = useCallback(() => {
    const next: Theme = theme === "dark" ? "light" : "dark";

    if (prefersReducedMotion()) {
      localStorage.setItem(STORAGE_KEY, next);
      applyTheme(next);
      setTheme(next);
      return;
    }

    setWashTarget(next);
  }, [theme]);

  const displayTheme = washTarget ?? theme;

  const value = useMemo(
    () => ({ theme: displayTheme, toggleTheme }),
    [displayTheme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
      {washTarget ? (
        <ThemeWash target={washTarget} onComplete={completeWash} />
      ) : null}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
