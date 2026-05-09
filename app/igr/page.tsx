"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { igrPage } from "@/lib/content";
import Navigation from "@/app/components/Navigation";

function InvestigationSection({
  section,
  index,
}: {
  section: typeof igrPage.investigation.sections[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-16 border-t border-ink-300"
    >
      {/* Left rail */}
      <div className="lg:col-span-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-mute">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Content */}
      <div className="lg:col-span-10">
        {section.heading && (
          <h3 className="font-display font-light text-2xl md:text-3xl text-bone mb-6">
            {section.heading}
          </h3>
        )}

        {section.paragraphs.map((p, i) => (
          <p key={i} className="text-bone-dim leading-relaxed mb-6 last:mb-0">
            {p}
          </p>
        ))}

        {section.chart && (
          <figure className="my-10 glow-border">
            <div className="relative w-full">
              <Image
                src={section.chart.src}
                alt={section.chart.alt}
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-bone-mute text-center">
              {section.chart.caption}
            </figcaption>
          </figure>
        )}

        {section.followup.map((p, i) => (
          <p key={i} className="text-bone-dim leading-relaxed mt-6">
            {p}
          </p>
        ))}
      </div>
    </motion.div>
  );
}

export default function IgrPage() {
  const inv = igrPage.investigation;

  return (
    <main className="bg-ink text-bone">
      <Navigation variant="igr" />

      {/* Letter section */}
      <section className="relative pt-40 pb-32 border-b border-ink-300">
        <div className="container-custom max-w-4xl">
          {/* Recipient */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-mute mb-2">
              To,
            </div>
            <div className="font-display text-xl text-bone-dim">
              {igrPage.recipient}
            </div>
          </motion.div>

          {/* Letter paragraphs */}
          {igrPage.letterParagraphs.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
              className={`leading-relaxed mb-8 last:mb-0 ${
                i === 0
                  ? "font-display text-xl md:text-2xl text-bone font-light"
                  : "text-bone-dim text-lg"
              }`}
            >
              {para}
            </motion.p>
          ))}

          {/* Signoff */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-16 pt-10 border-t border-ink-300"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-mute mb-2">
              Signed,
            </div>
            <div className="font-display text-2xl text-bone">{igrPage.signoff}</div>
          </motion.div>
        </div>
      </section>

      {/* Investigation */}
      <section className="relative py-32 bg-ink-50">
        <div className="container-custom max-w-4xl">
          {/* Investigation header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="section-marker mb-4 text-accent-blue">{inv.kicker}</div>
            <h2 className="font-display font-light text-display text-bone leading-tight mb-4">
              {inv.title}
            </h2>
            <div className="font-display italic text-xl text-bone-dim mb-6">{inv.subtitle}</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-mute">
              {inv.byline}
            </div>
          </motion.div>

          {/* Lede */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="border-l-2 border-accent-blue/40 pl-8 mb-16"
          >
            <p className="font-display text-xl md:text-2xl text-bone font-light leading-relaxed">
              <span className="text-accent-blue/60 mr-2">¶</span>
              {inv.lede}
            </p>
          </motion.div>

          {/* Sections */}
          {inv.sections.map((section, i) => (
            <InvestigationSection key={i} section={section} index={i} />
          ))}

          {/* Footnote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-20 pt-10 border-t border-ink-300"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-mute text-center italic">
              {inv.footnote}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Closing note — full Voices section + new closing line land in step 7 */}
      <section className="py-16 border-t border-ink-300">
        <div className="container-custom max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-lg text-bone-dim italic"
          >
            {igrPage.closingNote.text}{" "}
            <a href={igrPage.closingNote.href} className="link-underline text-ember">
              {igrPage.closingNote.linkText} {igrPage.closingNote.linkArrow}
            </a>
          </motion.p>
        </div>
      </section>
    </main>
  );
}
