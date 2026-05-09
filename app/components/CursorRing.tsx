"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CursorRing() {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const x = useSpring(cursorX, { damping: 25, stiffness: 300 });
  const y = useSpring(cursorY, { damping: 25, stiffness: 300 });

  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return;
    setIsTouch(false);

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovered(!!t.closest("a, button, [data-cursor='hover']"));
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
    };
  }, [cursorX, cursorY, visible]);

  if (isTouch) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999]"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        animate={{
          width:           hovered ? 40 : 24,
          height:          hovered ? 40 : 24,
          backgroundColor: hovered ? "rgba(29, 78, 216, 0.2)" : "transparent",
          opacity:         visible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="rounded-full border border-bone"
        style={{ mixBlendMode: "difference" }}
      />
    </motion.div>
  );
}
