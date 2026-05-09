"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { personalPage } from "@/lib/content";
import {
  voices,
  books,
  voicesTarget,
  booksTarget,
  type Voice,
  type Book,
} from "@/lib/media-and-literature";

// Media & Literature (per brief §12.5). Two sub-tabs (Voices / Books).
// Empty slots render as dashed-border placeholders so the structure reads
// as intentional even before the owner fills them.

type Tab = "voices" | "books";

export default function MediaLiterature() {
  const [tab, setTab] = useState<Tab>("voices");

  return (
    <section className="space-y-10">
      <div className="space-y-3">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-mute">
          {personalPage.mediaLiteratureHeading}
        </h2>
        <p className="font-display italic text-bone-dim text-base md:text-lg max-w-2xl">
          {personalPage.mediaLiteratureSubtitle}
        </p>
      </div>

      <div className="flex gap-6 border-b border-ink-300">
        <TabButton label="Voices" active={tab === "voices"} onClick={() => setTab("voices")} />
        <TabButton label="Books"  active={tab === "books"}  onClick={() => setTab("books")} />
      </div>

      <AnimatePresence mode="wait">
        {tab === "voices" ? (
          <motion.div
            key="voices"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <VoicesGrid />
          </motion.div>
        ) : (
          <motion.div
            key="books"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <BooksGrid />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function TabButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative pb-3 font-mono text-xs uppercase tracking-[0.25em] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-ember ${
        active ? "text-bone" : "text-bone-mute hover:text-bone"
      }`}
      aria-pressed={active}
    >
      {label}
      {active && (
        <motion.span
          layoutId="medialit-tab"
          className="absolute -bottom-px left-0 right-0 h-px bg-ember"
        />
      )}
    </button>
  );
}

function VoicesGrid() {
  const ghosts = Math.max(0, voicesTarget - voices.length);
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
      {voices.map((v, i) => (
        <VoiceRow key={i} voice={v} />
      ))}
      {Array.from({ length: ghosts }, (_, i) => (
        <GhostRow key={`gv-${i}`} />
      ))}
    </ul>
  );
}

function VoiceRow({ voice }: { voice: Voice }) {
  return (
    <li className="flex items-baseline gap-4 group">
      <p className="font-display text-bone text-base md:text-lg group-hover:text-ember transition-colors">
        {voice.name}
      </p>
      <span className="flex-1 border-b border-dotted border-ink-300/60" aria-hidden="true" />
      <p className="font-sans text-xs md:text-sm text-bone-dim">{voice.outlet}</p>
    </li>
  );
}

function BooksGrid() {
  const ghosts = Math.max(0, booksTarget - books.length);
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
      {books.map((b, i) => (
        <BookRow key={i} book={b} />
      ))}
      {Array.from({ length: ghosts }, (_, i) => (
        <GhostRow key={`gb-${i}`} />
      ))}
    </ul>
  );
}

function BookRow({ book }: { book: Book }) {
  return (
    <li className="space-y-1">
      <p className="font-display text-bone text-base md:text-lg">{book.title}</p>
      <p className="font-sans text-xs md:text-sm text-bone-dim">{book.author}</p>
      {book.description && (
        <p className="font-sans text-xs text-bone-mute italic">{book.description}</p>
      )}
    </li>
  );
}

function GhostRow() {
  return (
    <li
      className="border border-dashed border-ink-300/60 rounded-[2px] h-8"
      aria-hidden="true"
    />
  );
}
