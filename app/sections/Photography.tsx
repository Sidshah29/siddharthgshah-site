"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { photography } from "@/lib/content";

export default function Photography() {
  const [open, setOpen] = useState<number | null>(null);

  // Distribute images into 4 columns for a masonry look
  const columns: typeof photography.images[] = [[], [], [], []];
  photography.images.forEach((img, i) => {
    columns[i % 4].push(img);
  });

  // Keyboard nav
  useEffect(() => {
    if (open === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight")
        setOpen((p) => (p !== null ? (p + 1) % photography.images.length : null));
      if (e.key === "ArrowLeft")
        setOpen((p) =>
          p !== null
            ? (p - 1 + photography.images.length) % photography.images.length
            : null
        );
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  return (
    <section
      id="photography"
      className="relative py-32 md:py-48 border-t border-ink-300"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20"
        >
          <div className="lg:col-span-3">
            <div className="section-marker mb-4">05 / Photography</div>
            <div className="font-mono text-xs text-bone-mute">
              {photography.images.length} frames
            </div>
          </div>
          <div className="lg:col-span-9">
            <p className="font-display text-2xl md:text-3xl font-light leading-snug text-bone-dim max-w-2xl">
              {photography.intro}
            </p>
          </div>
        </motion.div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {columns.map((col, ci) => (
            <div key={ci} className="flex flex-col gap-3 md:gap-4">
              {col.map((img, ii) => {
                // Compute the global index across columns
                const globalIdx = ii * 4 + ci;
                const aspect =
                  img.orientation === "tall"
                    ? "aspect-[3/4]"
                    : img.orientation === "wide"
                    ? "aspect-[4/3]"
                    : "aspect-square";

                return (
                  <motion.button
                    key={ii}
                    onClick={() => setOpen(globalIdx)}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.6, delay: (ii * 4 + ci) * 0.02 }}
                    className={`relative group overflow-hidden bg-ink-100 ${aspect}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone bg-ink/80 backdrop-blur-sm px-2 py-1">
                        {String(globalIdx + 1).padStart(2, "0")} / {photography.images.length}
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-ink/95 backdrop-blur-md flex items-center justify-center p-6 md:p-12"
            onClick={() => setOpen(null)}
          >
            {/* Close */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen(null);
              }}
              className="absolute top-6 right-6 z-10 p-2 text-bone hover:text-accent-blue transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Counter */}
            <div className="absolute top-6 left-6 z-10 font-mono text-xs uppercase tracking-[0.25em] text-bone">
              {String(open + 1).padStart(2, "0")} / {String(photography.images.length).padStart(2, "0")}
            </div>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen((p) =>
                  p !== null
                    ? (p - 1 + photography.images.length) % photography.images.length
                    : null
                );
              }}
              className="absolute left-6 z-10 p-3 text-bone hover:text-accent-blue transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Image */}
            <motion.div
              key={open}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-6xl h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photography.images[open].src}
                alt={photography.images[open].alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen((p) =>
                  p !== null ? (p + 1) % photography.images.length : null
                );
              }}
              className="absolute right-6 z-10 p-3 text-bone hover:text-accent-blue transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Caption */}
            {photography.images[open].caption && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 max-w-2xl text-center font-display italic text-bone-dim text-lg">
                {photography.images[open].caption}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
