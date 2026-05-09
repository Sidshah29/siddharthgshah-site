// ─────────────────────────────────────────────────────────────────────────────
// Media & Literature — Voices and Books on /personal (§12.5).
// Voices: 16 slots target, 8 pre-populated. Books: 16 slots, owner fills.
// Note: Sudhir Chaudhary replaces Siddharth Varadarajan per Improvizations §59.
// Render rule: empty slots show as faint dashed-border placeholders.
// ─────────────────────────────────────────────────────────────────────────────

export type Voice = {
  name: string;
  outlet: string;        // "GPS, CNN" or "The Wire"
  description?: string;  // optional, for hover-reveal
};

export type Book = {
  author: string;
  title: string;
  description?: string;
};

export const voices: Voice[] = [
  { name: "Fareed Zakaria",      outlet: "GPS, CNN" },
  { name: "Christiane Amanpour", outlet: "Amanpour, CNN" },
  { name: "Sir Mark Tully",      outlet: "BBC, India" },
  { name: "Prannoy Roy",         outlet: "NDTV" },
  { name: "Vinod Dua",           outlet: "The Wire" },
  { name: "Palki Sharma",        outlet: "India Global Review" },
  { name: "Sudhir Chaudhary",    outlet: "Doordarshan" },
  { name: "Rahul Kanwal",        outlet: "India Today" },
];

export const books: Book[] = [];

export const voicesTarget = 16;
export const booksTarget = 16;
