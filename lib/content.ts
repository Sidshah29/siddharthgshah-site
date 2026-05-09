// ─────────────────────────────────────────────────────────────────────────────
// SITE CONTENT — single source of truth for copy
// v3 — restructured per the migration brief. Edit copy here, not in components.
// ─────────────────────────────────────────────────────────────────────────────

// 1. IDENTITY ────────────────────────────────────────────────────────────────
export const identity = {
  name: "Siddharth Shah",
  email: "shahsid2002@gmail.com",
  linkedin: "https://linkedin.com/in/siddharth29shah",
  linkedinHandle: "/in/siddharth29shah",
  instagram: "https://instagram.com/sidshah29",
  instagramHandle: "@siddharth29shah",
  github: "https://github.com/siddharth29shah",
  cvGeneralUrl: "/cv-general.pdf",
  cvIgrUrl: "/cv-igr.pdf",
};

// 2. HERO ────────────────────────────────────────────────────────────────────
export const hero = {
  // First-line status row above the headline. No location, no "available."
  statusLine: "Open to opportunities",
  statusContext: "Currently building three projects in parallel",
  // Two-line headline. "sharpening" gets italic + ember accent in the component.
  headlineLine1: "Three disciplines.",
  headlineLine2Prefix: "One mind, ",
  headlineLine2Accent: "sharpening",
  headlineLine2Suffix: ".",
  byline:
    "Engineering, finance, and the analytics newsrooms run on — taught at Penn State, applied across three U.S. internships, defended in code that ships.",
  // Three callouts stacked beside the portrait. No "label" prefix above the number.
  callouts: [
    {
      value: "130+",
      body: "credits at Penn State across AI, Computer Engineering, Data Sciences, IST",
    },
    {
      value: "3",
      body: "U.S. internships across enterprise analytics, fintech infrastructure, and university research",
    },
    {
      value: "3+ years",
      body: "in leadership roles. Sustained interests in mathematics, economics, geopolitics, data analytics.",
    },
  ],
};

// 3. EDUCATION SUB-BAND ──────────────────────────────────────────────────────
export const education = {
  marker: "EDUCATION",
  institution: "Penn State University, World Campus",
  degree: "B.S. Information Sciences and Technology",
  priorMajor:
    "with prior major-coursework in Computer Engineering and Applied Data Sciences",
  graduating: "Graduating August 2026",
  domainsLabel: "Domains studied:",
  domains: [
    "Machine Learning",
    "Distributed Systems",
    "Calculus & Linear Algebra",
    "Probability Theory",
    "Microeconomics",
    "Computational Statistics",
    "Data Structures",
    "Database Systems",
    "Network Security",
    "Cloud Architecture",
  ],
  personalLabel: "Sustained personal study:",
  personal: [
    "Geopolitics",
    "Constitutional Law",
    "Indian Fiscal Policy",
    "Behavioral Economics",
    "World History",
  ],
};

// 4. NOW BUILDING (Section 02) ───────────────────────────────────────────────
export const nowBuildingKicker = {
  marker: "SECTION 02 / Now Building",
  title: "In flight, three projects.",
  subtitle:
    "Architecture committed; results pending. The status badges are accurate at the moment they're read — and stale by the time they're acted upon. That's the nature of work.",
};

// 5. THE SLATE (Section 03) ──────────────────────────────────────────────────
export const slateKicker = {
  marker: "SECTION 03 / The Slate",
};

// 6. COURSEWORK (Section 04) ─────────────────────────────────────────────────
export const courseworkKicker = {
  marker: "SECTION 04 / The Foundation",
  subtitle: "What the credit hours actually built.",
  emptyState:
    "Forty-three courses. Filling this list deliberately — only the ones whose work outlived the semester.",
};

// 7. RECEIPTS (Section 05) ───────────────────────────────────────────────────
export const receiptsKicker = {
  marker: "SECTION 05 / Receipts",
  subtitle: "The leadership tracks, and the recognitions that came with showing up.",
  emptyStateBoth:
    "A measured pause here. The roles I've held and the recognitions worth listing are deliberately unmentioned until I've had a chance to write them in my own voice.",
  emptyStateLeadership:
    "The roles I've held are deliberately unmentioned until I've had a chance to write them in my own voice.",
  emptyStateRecognitions:
    "The recognitions worth listing are deliberately unmentioned until I've had a chance to write them in my own voice.",
};

// 8. MIND & MARGIN TEASE (Section 06) ────────────────────────────────────────
export const mindMarginTease = {
  marker: "SECTION 06 / Mind & Margin",
  subtitle:
    "What I read, what I capture, what I write — and why that half of me is louder than the other.",
  // Photography tile uses the first 5 photos.
  photoCount: 5,
  photoLink: "Forty-two more frames live at  Mind & Margin →",
  // Writings tile copy. Period after each subject is deliberate.
  writingsBlurb:
    "I write essays that argue something. Five live; more wait. On McCandless and Rousseau. On India's fiscal architecture. On why the developer paradox isn't actually a paradox. On the photography of waiting.",
  writingsLink: "Read them at  Mind & Margin →",
};

// 9. GET IN TOUCH ────────────────────────────────────────────────────────────
// No section number. The header stands alone (§10.1).
export const getInTouch = {
  heading: "Get In Touch",
  subheadline: "Coffee, then code. In that order.",
  subSubheadline:
    "Reach out, let's talk. The work is the part I'm here for; everything else is logistics.",
  body: "Looking for opportunities in applied AI engineering, financial-data infrastructure, and analytical journalism. Joining immediately is fine; remote, hybrid, or relocated all work. The point is to learn fast, ship things that defend themselves, and find the rooms where the next problems get framed.",
};

export const footer = {
  text: "Siddharth Shah  ·  © 2026",
};

// 10. /igr CONTENT ────────────────────────────────────────────────────────────
// The Letter and the Investigation are unchanged from v2 — verified by the brief.
// Closing line and the new "Voices I Was Built By" section are v3 additions.
export const igrPage = {
  recipient: "Whoever reads this at India Global Review",
  letterParagraphs: [
    "Most people applying to a newsroom tell you what they've read. I'll tell you what I noticed instead: that the sharpest geopolitical analysis in Indian media for the last decade has come not from legacy broadsheets or government-adjacent television, but from one woman with a camera, a script, and an opinion she wasn't afraid to finish. That's not flattery. That's just what the data says.",
    "I'm an engineer by training — U.S. bachelor's at Penn State, completing this August, 130-odd credits across Computer Engineering, Applied Data Sciences, and Information Systems. ML pipelines, LLM-RAG architectures, cloud ETL, three internships in the U.S. The technology isn't decoration on my resume. It's the second language I think in. The first one was always news.",
    "Here's the thing about data journalism that most newsrooms have figured out too late: the story isn't in the chart. The story is in what the chart makes undeniable. I built the investigation you'll find below — India's fiscal federalism crisis, quantified — before submitting this application. Not as a portfolio exercise. As a point of view. It argues something. I'd be happy to defend it.",
    "IGR is, at the time of writing, very new. That's not a weakness I'm tactfully ignoring — it's precisely why this makes sense. The infrastructure a data-first newsroom needs doesn't get retrofitted. It gets built in the first few months, by whoever is in the room. Penn State's IST 495 framework gives me a 12-week window starting May, with full academic oversight, which handles the paperwork. I'd handle the rest.",
    "I am not the applicant who has always wanted to work in media. I'm the one who has spent years building the tools that media needs — and happens to have grown up reading newspapers at the breakfast table since grade three, treating every headline like a crime scene. That combination is either exactly what you're looking for, or it isn't. Either way, the work below makes the case better than this letter can.",
  ],
  signoff: "Siddharth Shah",
  investigation: {
    kicker: "Original investigation  ·  April 2026",
    title: "The States That Pay vs. The States That Receive",
    subtitle: "India's ₹14 Lakh Crore Question",
    byline: "Data Sources: RBI State Finances 2025-26  ·  MoSPI  ·  NFHS-5",
    lede: "Uttar Pradesh, with a GSDP roughly equal to Karnataka's, receives 4.9 times more central money. Not because it produces more. Not because it innovates more. But because it has more people — and in India's fiscal architecture, population is the formula that pays.",
    sections: [
      {
        heading: null,
        paragraphs: [
          "The 15th Finance Commission allocates 41% of the divisible tax pool to states. The formula weights population at 15%, demographic performance at 12.5%, area at 15%, and income distance at 45%. On paper, it looks redistributive and fair. In practice, it has created a machine that quietly punishes the states that did exactly what the Centre asked them to do: control their fertility, grow their economies, and build their own tax bases.",
        ],
        chart: {
          src: "/charts/chart1_devolution_intensity.png",
          alt: "Central transfers as percent of state GSDP",
          caption: "Central transfers as % of state GSDP. The asymmetry is structural, not marginal.",
        },
        followup: [
          "The data is unequivocal. Bihar receives central transfers worth 22.8% of its entire GSDP — nearly a quarter of its economy is simply handed down from New Delhi. Karnataka? 2.9%. Maharashtra, which generates the largest single-state contribution to India's direct tax pool? 3.7%. Tamil Nadu, Gujarat, Telangana — all clustered below 4%. These are not rounding errors. This is a structural transfer of wealth from states that generate revenue to states that generate votes.",
        ],
      },
      {
        heading: "The Demographic Trap",
        paragraphs: [
          "The divergence runs deeper than fiscal formulas. Plot the Total Fertility Rate against per-capita income across India's major states and a pattern emerges so stark it barely needs a regression line.",
        ],
        chart: {
          src: "/charts/chart2_tfr_vs_income.png",
          alt: "TFR vs per-capita income scatter",
          caption: "Northern states upper-left; Southern/Western lower-right.",
        },
        followup: [
          "Northern states — Bihar (TFR 3.0), Uttar Pradesh (2.4), Jharkhand (2.3) — sit in the upper-left quadrant. Southern and Western states — Karnataka, Telangana, Maharashtra (all 1.7), Tamil Nadu, Kerala (1.8) — cluster in the lower-right. The average TFR of the Northern six is 2.25; the Southern/Western six average 1.77.",
          "This matters because the Finance Commission formula rewards population size. States that invested in education, women's empowerment, and family planning — the very policies Delhi's own planners championed — now find themselves fiscally penalised for their success. Every child not born in Tamil Nadu is a fraction of a percentage point lost in the next devolution formula. That is not a policy outcome. That is a perverse incentive encoded into the Constitution.",
        ],
      },
      {
        heading: "The Absolute Numbers",
        paragraphs: [
          "Strip away the ratios and look at the raw transfers. In the 2025-26 Union Budget, the six Northern states are budgeted to receive ₹10.17 lakh crore in central devolution and grants. The six Southern/Western states will receive ₹5.05 lakh crore. The Northern six get twice as much, despite producing half the economic output.",
        ],
        chart: {
          src: "/charts/chart3_absolute_devolution.png",
          alt: "Absolute central transfers bar chart",
          caption: "UP alone receives more than Karnataka, Tamil Nadu, and Gujarat combined.",
        },
        followup: [
          "This is not an argument against redistribution. Every federal democracy transfers resources from richer to poorer regions. Germany does it. The United States does it. But in those systems, the transfer comes with convergence: poorer regions gradually catch up. In India, the data suggests something closer to dependence.",
        ],
      },
      {
        heading: "The Growth Question",
        paragraphs: [
          "If the transfers were working — if Bihar and UP were converging toward Maharashtra and Karnataka — the fiscal architecture would justify itself. But the growth trajectories tell a more complicated story.",
        ],
        chart: {
          src: "/charts/chart4_growth_trajectories.png",
          alt: "GSDP growth trajectories chart",
          caption: "Since 2019-20, the Southern/Western states have grown faster in aggregate.",
        },
        followup: [
          "Karnataka's GSDP has expanded by over 55% in nominal terms; Bihar and Madhya Pradesh sit closer to 45%. The states receiving less from the Centre are not just richer — they are pulling further ahead. The transfers are not closing the gap. They are financing a parallel economy of welfare schemes, infrastructure deficits, and electoral expenditure that generates political returns without proportional economic convergence.",
        ],
      },
      {
        heading: "The Position",
        paragraphs: [
          "The 16th Finance Commission, chaired by Arvind Panagariya, will submit its report by October 2025 with recommendations effective from April 2026. It faces a choice that is ultimately political, not technical: continue a formula that rewards demographic expansion and penalises fiscal discipline, or restructure the compact to incentivise the outcomes India actually needs — lower fertility, higher own-tax revenue, reduced borrowing, and genuine convergence.",
          "The current architecture does not merely redistribute wealth. It redistributes incentives — in the wrong direction. States that built their own prosperity are asked to subsidise states that didn't, while receiving no mechanism to recoup, no timeline for convergence, and no accountability for outcomes. If this asymmetry is not addressed before the next Census reshapes parliamentary constituencies, the question will stop being fiscal and start being existential.",
          "India's federal compact was designed for a young, growing, industrialising nation. The nation that exists today — demographically split, economically divergent, and politically polarised along precisely these fault lines — needs a new one.",
        ],
        chart: null,
        followup: [],
      },
    ],
    footnote:
      "Data and analysis by Siddharth Shah. All datasets are publicly available from the RBI (State Finances 2025-26), MoSPI, and NFHS-5. Charts generated with Python (Pandas, Matplotlib). Methodology available on request.",
  },
  voicesISection: {
    title: "The voices I was built by.",
    subtitle: "The shorthand for what kind of editorial mind I bring.",
    voices: [
      { name: "Fareed Zakaria",      outlet: "GPS, CNN" },
      { name: "Christiane Amanpour", outlet: "Amanpour, CNN" },
      { name: "Sir Mark Tully",      outlet: "BBC, India" },
      { name: "Prannoy Roy",         outlet: "NDTV" },
      { name: "Vinod Dua",           outlet: "The Wire" },
      { name: "Palki Sharma",        outlet: "India Global Review" },
      { name: "Sudhir Chaudhary",    outlet: "Doordarshan" },
      { name: "Rahul Kanwal",        outlet: "India Today" },
    ],
  },
  closingNote: {
    text: "Know me better at",
    linkText: "siddharthgshah.com",
    linkArrow: "→",
    href: "/",
  },
};

// 11. /personal CONTENT ──────────────────────────────────────────────────────
export const personalPage = {
  // Multi-script greeting (§12.1). Order, scripts, and punctuation are deliberate.
  greetings: [
    { text: "Hello.",   lang: "en", fontVar: "noto-latin" },
    { text: "Salut.",   lang: "fr", fontVar: "noto-latin" },
    { text: "नमस्ते।",   lang: "hi", fontVar: "noto-devanagari" },
    { text: "السلام.",  lang: "ar", fontVar: "noto-arabic", dir: "rtl" as const },
    { text: "મજામાં?",  lang: "gu", fontVar: "noto-gujarati" },
  ],
  verbsLine: "I read.  I capture.  I write.  I observe.",
  closingLine: "Hence I thrive.",
  // Section headings used by the page
  writingsHeading: "WRITINGS",
  photographyHeading: "PHOTOGRAPHY",
  mediaLiteratureHeading: "MEDIA & LITERATURE",
  mediaLiteratureSubtitle:
    "The voices, the books, the lenses that taught me to read the world.",
  interestsHeading: "INTERESTS",
};

// 12. PHOTOGRAPHY DATA ───────────────────────────────────────────────────────
// Cell-spans assigned deterministically for the broken-grid layout (§12.4).
// Pattern: sparse-dense-sparse rhythm. Owner can rearrange order as needed.
export type PhotoCell = {
  src: string;
  alt: string;
  span: "wide" | "tall" | "square";  // wide=2col×1row, tall=1col×2row, square=1col×1row
};

const photoSpans: Array<PhotoCell["span"]> = [
  "wide", "tall", "square",   // row 1: dense
  "tall", "square", "wide",   // row 2: sparse
  "square", "tall", "wide",   // row 3: dense
  "wide", "square", "tall",   // row 4
  "tall", "square", "wide",
  "square", "wide", "tall",
  "wide", "tall", "square",
  "square", "wide", "tall", "square",
];

export const photographyHomepage = {
  // Tease tile uses the first 5 photos; no spans needed (rendered as horizontal strip).
  photos: Array.from({ length: 5 }, (_, i) => ({
    src: `/photos/${String(i + 1).padStart(2, "0")}.jpg`,
    alt: `Photograph ${String(i + 1).padStart(2, "0")}`,
  })),
};

export const photographyAll: PhotoCell[] = Array.from({ length: 25 }, (_, i) => ({
  src: `/photos/${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `Photograph ${String(i + 1).padStart(2, "0")}`,
  span: photoSpans[i],
}));
