"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { mindMarginTease, photographyHomepage } from "@/lib/content";

// Section 06 / Mind & Margin tease (per brief §9).
// Two compact tiles: 5-photo strip with focus-zoom centre treatment, and
// a writings tease. Both link to /personal.

export default function MindMarginTease() {
  return (
    <section id="mind-margin" className="relative py-24 md:py-32">
      <div className="container-custom">
        <Header />
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          <PhotographyTile />
          <WritingsTile />
        </div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="max-w-3xl"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-mute">
        {mindMarginTease.marker}
      </p>
      <p className="mt-4 font-display italic text-bone-dim text-base md:text-lg leading-relaxed">
        {mindMarginTease.subtitle}
      </p>
    </motion.div>
  );
}

function PhotographyTile() {
  // Five photos in a horizontal strip. Centre photo gets focus-zoom treatment
  // (slightly larger, sharper) — the other four sit one rung quieter.
  const photos = photographyHomepage.photos.slice(0, 5);
  const centreIndex = 2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7 }}
      className="space-y-4"
    >
      <div className="grid grid-cols-5 gap-2 items-center">
        {photos.map((photo, i) => {
          const isCentre = i === centreIndex;
          return (
            <div
              key={photo.src}
              className={`relative overflow-hidden ${
                isCentre
                  ? "aspect-[3/4] z-10"
                  : "aspect-square opacity-70 grayscale-[0.2] scale-[0.92]"
              } transition-all duration-500`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 20vw, 18vw"
                className="object-cover"
              />
            </div>
          );
        })}
      </div>
      <Link
        href="/personal"
        className="inline-block font-display italic text-bone-dim hover:text-ember transition-colors text-sm md:text-base focus:outline-none focus-visible:ring-1 focus-visible:ring-ember"
      >
        {mindMarginTease.photoLink}
      </Link>
    </motion.div>
  );
}

function WritingsTile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="space-y-6"
    >
      <p className="font-display italic text-bone-dim text-lg md:text-xl leading-relaxed">
        {mindMarginTease.writingsBlurb}
      </p>
      <Link
        href="/personal"
        className="inline-block font-display italic text-bone-dim hover:text-ember transition-colors text-sm md:text-base focus:outline-none focus-visible:ring-1 focus-visible:ring-ember"
      >
        {mindMarginTease.writingsLink}
      </Link>
    </motion.div>
  );
}
