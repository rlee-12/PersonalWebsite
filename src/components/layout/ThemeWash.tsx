"use client";

import { type CSSProperties } from "react";
import { createPortal } from "react-dom";
import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const WASH_COLORS: Record<Theme, string> = {
  light: "#f7f5f0",
  dark: "#070a12",
};

const emptySubscribe = () => () => {};

function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

type ThemeWashProps = {
  target: Theme;
  onComplete: () => void;
};

export default function ThemeWash({ target, onComplete }: ThemeWashProps) {
  const mounted = useMounted();

  if (!mounted) return null;

  return createPortal(
    <div
      className={`theme-wash theme-wash--${target}`}
      style={{ "--wash-color": WASH_COLORS[target] } as CSSProperties}
      onAnimationEnd={onComplete}
      aria-hidden="true"
    />,
    document.body,
  );
}
