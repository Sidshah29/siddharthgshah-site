"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { photographyAll, type PhotoCell } from "@/lib/content";
import Lightbox from "@/app/components/Lightbox";

// Broken modular grid (per brief §12.4) — a manuscript/archival grid.
// Cell-spans assigned deterministically per photo. No captions, no descriptions.
// Click to open lightbox; arrow keys cycle.

const spanClass: Record<PhotoCell["span"], string> = {
  wide: "col-span-2 row-span-1",
  tall: "col-span-1 row-span-2",
  square: "col-span-1 row-span-1",
};

export default function BrokenGrid() {
  const [open, setOpen] = useState<number | null>(null);

  const lightboxImages = photographyAll.map((p) => ({
    src: p.src,
    alt: p.alt,
  }));

  return (
    <section className="space-y-10">
      <h2 className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-mute">
        Photography
      </h2>

      <div
        className="
          grid gap-3
          grid-cols-2 auto-rows-[140px]
          md:grid-cols-4 md:auto-rows-[180px]
          lg:grid-cols-6 lg:auto-rows-[200px]
        "
      >
        {photographyAll.map((photo, i) => (
          <motion.button
            key={photo.src}
            type="button"
            onClick={() => setOpen(i)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 8) * 0.04 }}
            className={`relative overflow-hidden bg-ink-100 group focus:outline-none focus-visible:ring-2 focus-visible:ring-ember ${spanClass[photo.span]}`}
            aria-label={`Open ${photo.alt}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 16vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </motion.button>
        ))}
      </div>

      <Lightbox
        images={lightboxImages}
        open={open}
        onClose={() => setOpen(null)}
        onNext={() => setOpen((o) => (o === null ? null : (o + 1) % lightboxImages.length))}
        onPrev={() =>
          setOpen((o) =>
            o === null ? null : (o - 1 + lightboxImages.length) % lightboxImages.length
          )
        }
      />
    </section>
  );
}
