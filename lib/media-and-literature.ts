// ─────────────────────────────────────────────────────────────────────────────
// Media & Literature — Voices and Books on /personal (§12.5).
// Voices: 16 slots target, 8 pre-populated. Books: 16 slots, owner fills.
// Note: Sudhir Chaudhary replaces Siddharth Varadarajan per Improvizations §59.
// Render rule: empty slots show as faint dashed-border placeholders.
// ─────────────────────────────────────────────────────────────────────────────

export type Voice = {
  name: string;
  outlet: string; // "GPS, CNN" or "The Wire"
  description?: string; // optional, for hover-reveal
};

export type Book = {
  author: string;
  title: string;
  description?: string;
};

export const voices: Voice[] = [
  { name: "Fareed Zakaria", outlet: "GPS, CNN" },
  { name: "Christiane Amanpour", outlet: "Amanpour, CNN" },
  { name: "Sir Mark Tully", outlet: "BBC, India" },
  { name: "Prannoy Roy", outlet: "NDTV" },
  { name: "Vinod Dua", outlet: "The Wire" },
  { name: "Palki Sharma", outlet: "India Global Review" },
  { name: "Sudhir Chaudhary", outlet: "Doordarshan" },
  { name: "Rahul Kanwal", outlet: "India Today" },
  { name: "Jimmy Kimmel", outlet: "Jimmy Kimmel Live!, ABC" },
  { name: "Stephen Colbert", outlet: "The Late Show, CBS" },
];

export const books: Book[] = [
  { author: "Leo Tolstoy", title: "War and Peace" },
  { author: "Isaac Asimov", title: "NightFall" },
  { author: "H.G. Wells", title: "The Time Machine" },
  { author: "Jules Verne", title: "Twenty thousand leagues under the sea" },
  { author: "Homer", title: "Odyssey-unabridged" },
  { author: "Ernest Hemingway", title: "The Old Man and the Sea" },
  { author: "Viktor Frankl", title: "Man's Search for Meaning " },
  { author: "Martin Heidegger", title: "Being and Time" },
  { author: "Virgil", title: "The Aeneid" },
  { author: "Erich Maria Remarque", title: "All quiet on the western front" },
];

export const voicesTarget = 10;
export const booksTarget = 10;
