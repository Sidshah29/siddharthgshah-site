"use client";

import { useEffect, useState } from "react";

// One-line toggle for the custom cursor (lives in Get In Touch section, §13.3).
// Persists in sessionStorage; resets per browser session by design.
export default function CursorToggle() {
  const [enabled, setEnabled] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const stored = sessionStorage.getItem("cursor-enabled");
    if (stored === "false") setEnabled(false);
  }, []);

  const toggle = () => {
    const next = !enabled;
    setEnabled(next);
    sessionStorage.setItem("cursor-enabled", String(next));
    // Hard reload so CursorRing re-evaluates on mount — simpler than a context.
    window.location.reload();
  };

  if (!isMounted) return null;

  return (
    <button
      type="button"
      onClick={toggle}
      className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone-mute hover:text-bone transition-colors inline-flex items-center gap-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-ember"
      aria-label={enabled ? "Disable custom cursor" : "Enable custom cursor"}
    >
      <span>Use custom cursor</span>
      <span
        className={`inline-flex h-3 w-3 items-center justify-center border ${
          enabled ? "border-ember" : "border-bone-mute"
        }`}
      >
        {enabled ? <span className="text-ember leading-none">×</span> : null}
      </span>
    </button>
  );
}
