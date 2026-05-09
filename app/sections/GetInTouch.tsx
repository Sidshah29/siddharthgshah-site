"use client";

import { motion } from "framer-motion";
import { getInTouch, footer, identity } from "@/lib/content";
import CursorToggle from "@/app/components/CursorToggle";

// Get In Touch (per brief §10). No section number, no phone, four channels,
// CursorToggle, footer line. The header reads as plain "Get In Touch" — its
// position alone makes the function clear.

const channels = [
  { label: "EMAIL",     value: identity.email,            href: `mailto:${identity.email}` },
  { label: "LINKEDIN",  value: identity.linkedinHandle,   href: identity.linkedin },
  { label: "INSTAGRAM", value: identity.instagramHandle,  href: identity.instagram },
  { label: "CV",        value: "Download (PDF)",          href: identity.cvGeneralUrl },
];

export default function GetInTouch() {
  return (
    <section id="contact" className="relative py-24 md:py-32 border-t border-ink-300">
      <div className="container-custom max-w-5xl">
        <Header />
        <Body />
        <ChannelGrid />
        <Foot />
      </div>
    </section>
  );
}

function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7 }}
      className="space-y-6 max-w-3xl"
    >
      <h2 className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-mute">
        {getInTouch.heading}
      </h2>
      <p className="font-display font-light text-bone text-[clamp(2rem,4vw,3.25rem)] leading-tight">
        {getInTouch.subheadline}
      </p>
      <p className="font-display italic text-bone-dim text-base md:text-lg leading-relaxed">
        {getInTouch.subSubheadline}
      </p>
    </motion.div>
  );
}

function Body() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="mt-10 max-w-3xl text-bone-dim text-base md:text-lg leading-relaxed"
    >
      {getInTouch.body}
    </motion.p>
  );
}

function ChannelGrid() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: 0.25 }}
      className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-ink-300"
    >
      {channels.map((c) => (
        <a
          key={c.label}
          href={c.href}
          target={c.label === "EMAIL" ? undefined : "_blank"}
          rel={c.label === "EMAIL" ? undefined : "noopener noreferrer"}
          className="group p-6 bg-ink hover:bg-ink-50 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-ember"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-mute mb-3">
            {c.label}
          </p>
          <p className="font-display text-bone text-base md:text-lg break-words group-hover:text-ember transition-colors">
            {c.value}
          </p>
        </a>
      ))}
    </motion.div>
  );
}

function Foot() {
  return (
    <div className="mt-20 flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between">
      <p className="font-mono text-xs text-bone-mute text-center sm:text-left">
        {footer.text}
      </p>
      <CursorToggle />
    </div>
  );
}
