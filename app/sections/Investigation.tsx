"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { investigation } from "@/lib/content";

export default function Investigation() {
  return (
    <section
      id="investigation"
      className="relative py-32 md:py-48 border-t border-ink-300 bg-ink-50"
    >
      {/* Decorative top frame */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent" />

      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-20"
        >
          <div className="section-marker mb-6 text-accent-blue">
            02 / {investigation.kicker}
          </div>
          <h2 className="font-display text-display font-light leading-[0.95] text-bone mb-6">
            {investigation.title}
            <span className="block italic text-bone-dim mt-2">
              {investigation.subtitle}
            </span>
          </h2>
          <div className="font-mono text-xs text-bone-mute uppercase tracking-[0.2em]">
            {investigation.byline}
          </div>
        </motion.div>

        {/* Lede */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-24 md:mb-32 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12"
        >
          <div className="md:col-span-1">
            <div className="font-display text-7xl md:text-8xl font-light text-accent-blue leading-none">
              ¶
            </div>
          </div>
          <p className="md:col-span-11 font-display text-2xl md:text-3xl font-light leading-snug text-bone">
            {investigation.lede}
          </p>
        </motion.div>

        {/* Sections with charts */}
        <article className="space-y-24 md:space-y-32">
          {investigation.sections.map((sec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
            >
              {/* Left rail with section number */}
              <div className="lg:col-span-2">
                <div className="lg:sticky lg:top-32">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-mute">
                    Part {String(i + 1).padStart(2, "0")}
                  </div>
                  {sec.heading && (
                    <div className="mt-3 h-px w-12 bg-accent-blue" />
                  )}
                </div>
              </div>

              {/* Content column */}
              <div className="lg:col-span-10 max-w-3xl">
                {sec.heading && (
                  <h3 className="font-display text-3xl md:text-4xl font-light text-bone mb-8">
                    {sec.heading}
                  </h3>
                )}

                {sec.paragraphs.map((p, pi) => (
                  <p
                    key={pi}
                    className="text-lg md:text-xl text-bone-dim leading-relaxed mb-6"
                  >
                    {p}
                  </p>
                ))}

                {sec.chart && (
                  <motion.figure
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.9 }}
                    className="my-12 md:my-16"
                  >
                    <div className="relative bg-bone rounded-sm overflow-hidden glow-border">
                      <Image
                        src={sec.chart.src}
                        alt={sec.chart.alt}
                        width={1400}
                        height={900}
                        className="w-full h-auto"
                      />
                    </div>
                    <figcaption className="mt-4 flex items-start gap-4">
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent-blue mt-1 shrink-0">
                        Fig. {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm text-bone-mute italic">
                        {sec.chart.caption}
                      </span>
                    </figcaption>
                  </motion.figure>
                )}

                {sec.followup.map((p, pi) => (
                  <p
                    key={pi}
                    className="text-lg md:text-xl text-bone-dim leading-relaxed mb-6"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </article>

        {/* Footnote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 pt-12 border-t border-ink-300 max-w-3xl mx-auto"
        >
          <p className="font-mono text-xs text-bone-mute leading-relaxed text-center italic">
            {investigation.footnote}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
