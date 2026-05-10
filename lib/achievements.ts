// ─────────────────────────────────────────────────────────────────────────────
// Achievements & Recognitions — Section 05 / Receipts
// Two parallel columns. Each column renders the empty-state placeholder from
// §8.4 when the corresponding array is empty.
// ─────────────────────────────────────────────────────────────────────────────

export type LeadershipRole = {
  year: string; // "2024–"  for ongoing,  "2023" for completed
  role: string; // uppercase, mono ("PRESIDENT")
  organisation: string; // Fraunces
  description: string; // one line
};

export type Recognition = {
  year: string;
  title: string; // uppercase, mono
  body: string; // issuing body, Fraunces
  description: string;
};

export const leadership: LeadershipRole[] = [];
export const recognitions: Recognition[] = [];
