"use client";

import { motion } from "framer-motion";
import { beyond } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";

export default function BeyondEngineering() {
  return (
    <section
      id="beyond"
      className="relative py-32 md:py-48 border-t border-ink-300 bg-ink-50"
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
            <div className="section-marker mb-4">04 / {beyond.kicker}</div>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display text-display font-light leading-[1] text-bone mb-8">
              {beyond.title}
            </h2>
            <p className="text-lg md:text-xl text-bone-dim leading-relaxed max-w-2xl">
              {beyond.intro}
            </p>
          </div>
        </motion.div>

        {/* Featured essay block */}
        <motion.a
          href={beyond.featuredEssay.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="group block relative border border-ink-300 hover:border-accent-blue/50 p-8 md:p-12 lg:p-16 mb-20 transition-all duration-500"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent-blue mb-3">
                Featured essay
              </div>
              <div className="font-mono text-xs text-bone-mute uppercase tracking-[0.2em]">
                {beyond.featuredEssay.course}
              </div>
            </div>
            <div className="lg:col-span-8">
              <h3 className="font-display text-2xl md:text-3xl font-light leading-snug text-bone mb-6 group-hover:text-accent-blue transition-colors duration-500">
                {beyond.featuredEssay.title}
                <ArrowUpRight className="inline-block ml-2 w-6 h-6 -translate-y-0.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
              </h3>
              <p className="font-display italic text-lg md:text-xl text-bone-dim leading-relaxed mb-6 border-l-2 border-accent-blue/40 pl-6">
                "{beyond.featuredEssay.excerpt}"
              </p>
              <p className="text-base text-bone-mute leading-relaxed">
                {beyond.featuredEssay.note}
              </p>
            </div>
          </div>
        </motion.a>

        {/* Influences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10"
        >
          <div className="lg:col-span-3">
            <div className="section-marker mb-4">Read · Grasped · Digested</div>
            <p className="text-sm text-bone-mute leading-relaxed max-w-xs">
              The voices that captured a child's mind - built curiosity and
              perspective, imparted character and critical thinking into the man
              - Siddharth.
            </p>
          </div>
          <div className="lg:col-span-9 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6">
            {beyond.influences.map((inf, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="border-t border-ink-300 pt-3"
              >
                <div className="font-display text-lg text-bone leading-tight mb-1">
                  {inf.name}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-bone-mute">
                  {inf.role}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
