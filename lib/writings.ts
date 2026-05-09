// ─────────────────────────────────────────────────────────────────────────────
// Writings — for the WRITINGS section on /personal (Mind & Margin).
// Per §12.3, render ghost cards for missing slots until the owner fills them.
// ─────────────────────────────────────────────────────────────────────────────

export type Writing = {
  title: string;
  excerpt: string;
  date: string;          // "April 2026"
  pdfUrl?: string;       // local PDF
  externalUrl?: string;  // for pieces published elsewhere
};

export const writings: Writing[] = [
  {
    title:
      "Into the Wild — Christopher McCandless and the Cost of Absolute Freedom",
    excerpt:
      "McCandless rejected the gilded confines of liberty for what he believed was its purer form — and discovered, as Rousseau warned, that absolute freedom isolates as surely as it liberates.",
    date: "April 2025",
    pdfUrl: "/writings/into-the-wild.pdf",
  },
  {
    title: "The States That Pay vs. The States That Receive",
    excerpt:
      "Uttar Pradesh, with a GSDP roughly equal to Karnataka's, receives 4.9 times more central money. Not because it produces more.",
    date: "April 2026",
    externalUrl: "/igr",
  },
];

// Target count per §12.2 / §12.3 — render ghost cards for the gap.
export const writingsTarget = 6;
