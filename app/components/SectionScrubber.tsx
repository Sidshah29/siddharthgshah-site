"use client";

import { motion } from "framer-motion";

export default function SectionScrubber() {
  return (
    <div className="relative h-px w-full overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-ink-400 to-transparent origin-left"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
}
