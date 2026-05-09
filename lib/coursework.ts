// ─────────────────────────────────────────────────────────────────────────────
// Coursework — owner populates as semesters wrap and projects survive them.
// Render rule: when empty, the section shows the placeholder copy from §7.3.
// ─────────────────────────────────────────────────────────────────────────────

export type CourseworkEntry = {
  courseCode: string;        // "CMPSC 221"
  title: string;             // "Object-Oriented Programming Final"
  description: string;       // one sentence
  stack: string[];           // 1–3 keywords
  github?: string;
};

export const coursework: CourseworkEntry[] = [];
