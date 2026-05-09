"use client";

import { useEffect, useRef, useState } from "react";

// v3 Cursor Ring (per brief §13).
// Bug fixes vs v2: hydration guard so the ring never appears during SSR mismatch,
// matchMedia check so touch devices see no flicker, sessionStorage-persisted
// disable toggle (some environments forbid localStorage), strict two-state animation.

export default function CursorRing() {
  const [isMounted, setIsMounted] = useState(false);
  const [hasHover, setHasHover] = useState(false);
  const [cursorEnabled, setCursorEnabled] = useState(true);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);

    const matchMedia = window.matchMedia("(hover: hover) and (pointer: fine)");
    setHasHover(matchMedia.matches);

    const stored = sessionStorage.getItem("cursor-enabled");
    if (stored === "false") setCursorEnabled(false);
  }, []);

  useEffect(() => {
    if (!isMounted || !hasHover || !cursorEnabled) {
      document.body.classList.remove("cursor-active");
      return;
    }

    document.body.classList.add("cursor-active");

    const move = (e: MouseEvent) => {
      if (!ringRef.current) return;
      ringRef.current.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`;
    };

    const isInteractive = (target: EventTarget | null) => {
      if (!(target instanceof Element)) return false;
      return Boolean(target.closest("a, button, [data-cursor='hover']"));
    };

    const enter = (e: MouseEvent) => {
      if (!ringRef.current) return;
      if (isInteractive(e.target)) ringRef.current.classList.add("cursor-ring--hover");
    };

    const leave = (e: MouseEvent) => {
      if (!ringRef.current) return;
      if (isInteractive(e.target)) ringRef.current.classList.remove("cursor-ring--hover");
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", enter);
    document.addEventListener("mouseout", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", enter);
      document.removeEventListener("mouseout", leave);
      document.body.classList.remove("cursor-active");
    };
  }, [isMounted, hasHover, cursorEnabled]);

  if (!isMounted || !hasHover || !cursorEnabled) return null;

  return <div ref={ringRef} className="cursor-ring" aria-hidden="true" />;
}
