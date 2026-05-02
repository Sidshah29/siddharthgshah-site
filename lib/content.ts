/**
 * ════════════════════════════════════════════════════════════════════════════
 *  SITE CONTENT — single source of truth
 *  ────────────────────────────────────────────────────────────────────────────
 *  Edit this file to swap in your final content.
 *  Everything that appears on the site reads from here.
 *
 *  Sections in this file:
 *    1.  IDENTITY        — name, tagline, contact
 *    2.  HERO            — hero section copy
 *    3.  LETTER          — open letter to IGR
 *    4.  INVESTIGATION   — the data journalism piece (essay + charts)
 *    5.  PROJECTS        — three project tiles
 *    6.  BEYOND          — "Beyond the Engineering" — Into the Wild + writing
 *    7.  PHOTOGRAPHY     — gallery image list
 *    8.  CONTACT         — final CTA
 * ════════════════════════════════════════════════════════════════════════════
 */

// ─────────────────────────────────────────────────────────────────────────────
// 1. IDENTITY
// ─────────────────────────────────────────────────────────────────────────────
export const identity = {
  name: "Siddharth Shah",
  tagline: "Data journalist & newsroom technologist",
  location: "Vadodara, India  ·  Open to relocation",
  email: "shahsid2002@gmail.com",
  phone: "+91 9274081326",
  linkedin: "https://linkedin.com/in/siddharth29shah",
  instagram: "https://instagram.com/sidshah29", // TODO: confirm handle
  github: "https://github.com/Sidshah29", // TODO: confirm handle
  cvUrl: "/cv.pdf", // place your CV PDF in /public as cv.pdf
};

// ─────────────────────────────────────────────────────────────────────────────
// 2. HERO
// ─────────────────────────────────────────────────────────────────────────────
export const hero = {
  // Massive type — keep short
  headline: "Engineer by training.\nJournalistic Analyst by instinct.",
  // The pitch under the headline
  subline:
    "I build the data infrastructure and write the analytical storytelling that the next generation of newsrooms will run on.",
  // Three rotating data callouts beside the hero
  callouts: [
    { value: "130+", label: "credits — Penn State" },
    { value: "3", label: "U.S. internships" },
    { value: "3", label: "+ years in student leadership and service" },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 3. THE LETTER (to whoever reads this at IGR)
// ─────────────────────────────────────────────────────────────────────────────
export const letter = {
  recipient: "The Respected reader at India Global Review",
  // Each item becomes one paragraph. Use empty strings for breathing room.
  paragraphs: [
    "Most people applying to a newsroom tell you what they've read. I'll tell you what I noticed instead: that the sharpest geopolitical analysis in Indian media for the last decade has come not from legacy broadsheets or government-adjacent television, but from one woman with a camera, a script, and an opinion she wasn't afraid to finish. That's not flattery. That's just what the data says.",
    "I'm an engineer by training — U.S. bachelor's of science in IST at Penn State with a 3.7/4.0 GPA, graduating this August, 130-odd credits across Computer Engineering, Applied Data Sciences, and Information Systems. ML pipelines, LLM-RAG architectures, cloud ETL, three internships in the U.S. The technology isn't decoration on my resume. It's the second language I think in. The first one was always news.",
    "Here's the thing about data journalism that most newsrooms have figured out too late: the story isn't in the chart. The story is in what the chart makes undeniable. I built an analytical report you'll find below — India's fiscal federalism crisis, quantified, before submitting this application. Not as a portfolio exercise. As a point of view. It argues something. I'd be happy to defend it.",
    "IGR is, at the time of writing, very new. In essence it is THE new age media startup, an environment where innovation, free thought and experimentation would reside and my critical thinking and creativity would thrive. The infrastructure a data-first newsroom needs doesn't get retrofitted. It gets built in the first few months, by whoever is in the room. Penn State's IST 495 framework gives me a 12-week window starting May, with full academic oversight, which handles the paperwork. I'd handle the rest.",
    "I am not the applicant who has always wanted to work in media. I'm the one who has spent years building the tools that media needs and happens to have grown up reading newspapers at the breakfast table since grade three, treating every headline like a crime scene. That combination is either exactly what you're looking for, or it isn't. Either way, the work below makes the case better than this letter can.",
  ],
  signoff: "Siddharth Shah",
};

// ─────────────────────────────────────────────────────────────────────────────
// 4. THE INVESTIGATION — the data journalism demo piece
// ─────────────────────────────────────────────────────────────────────────────
export const investigation = {
  kicker: "Base Study  ·  April 2026",
  title: "The States That Pay vs. The States That Receive",
  subtitle: "India's ₹14 Lakh Crore Question",
  byline: "Data Sources: RBI State Finances 2025-26  ·  MoSPI  ·  NFHS-5",
  // Lede paragraph (rendered in larger type)
  lede: "Uttar Pradesh, with a GSDP roughly equal to Karnataka's, receives 4.9 times more central money. Not because it produces more. Not because it innovates more. But because it has more people, and in India's fiscal architecture, population is the formula that pays.",
  // Body — split into sections; each section can have a heading and chart
  sections: [
    {
      heading: null,
      paragraphs: [
        "The 15th Finance Commission allocates 41% of the divisible tax pool to states. The formula weights population at 15%, demographic performance at 12.5%, area at 15%, and income distance at 45%. On paper, it looks redistributive and fair. In practice, it has created a machine that quietly punishes the states that did exactly what the Centre asked them to do: control their fertility, grow their economies, and build their own tax bases.",
      ],
      chart: {
        src: "/charts/chart1_devolution_intensity.png",
        alt: "Central transfers as percent of state GSDP, Bihar at 22.8% leading, Karnataka at 2.9% trailing",
        caption:
          "Central transfers as % of state GSDP. The asymmetry is structural, not marginal.",
      },
      followup: [
        "The data is unequivocal. Bihar receives central transfers worth 22.8% of its entire GSDP, nearly a quarter of its economy is simply handed down from New Delhi. Karnataka? 2.9%. Maharashtra, which generates the largest single-state contribution to India's direct tax pool? 3.7%. Tamil Nadu, Gujarat, Telangana — all clustered below 4%. These are not rounding errors. This is a structural transfer of wealth from states that generate revenue to states that generate votes.",
      ],
    },
    {
      heading: "The Demographic Trap",
      paragraphs: [
        "The divergence runs deeper than fiscal formulas. Plot the Total Fertility Rate against per-capita income across India's major states and a pattern emerges so stark it barely needs a regression line.",
      ],
      chart: {
        src: "/charts/chart2_tfr_vs_income.png",
        alt: "Scatter plot: TFR vs per-capita income, with Northern states clustered upper-left and Southern/Western states lower-right",
        caption:
          "Northern states sit upper-left: high fertility, low income. Southern/Western states cluster lower-right.",
      },
      followup: [
        "Northern states including Bihar (TFR 3.0), Uttar Pradesh (2.4), Jharkhand (2.3) sit in the upper-left quadrant. Southern and Western states - Karnataka, Telangana, Maharashtra (all 1.7), Tamil Nadu, Kerala (1.8) cluster in the lower-right. The average TFR of the Northern six is 2.25; the Southern/Western six average 1.77. One group is still adding people above replacement rate. The other stopped a generation ago.",
        "This matters because the Finance Commission formula rewards population size. States that invested in education, women's empowerment, and family planning, the very policies Delhi's own planners championed, now find themselves fiscally penalised for their success. Every child not born in Tamil Nadu is a fraction of a percentage point lost in the next devolution formula. That is not a policy outcome. That is a perverse incentive encoded into the Constitution.",
      ],
    },
    {
      heading: "The Absolute Numbers",
      paragraphs: [
        "Strip away the ratios and look at the raw transfers. In the 2025-26 Union Budget, the six Northern states are budgeted to receive ₹10.17 lakh crore in central devolution and grants. The six Southern/Western states will receive ₹5.05 lakh crore. The Northern six get twice as much, despite producing half the economic output.",
      ],
      chart: {
        src: "/charts/chart3_absolute_devolution.png",
        alt: "Bar chart of absolute central transfers — UP at ₹366K crore leading the field",
        caption:
          "Uttar Pradesh alone receives more than Karnataka, Tamil Nadu, and Gujarat combined.",
      },
      followup: [
        "This is not an argument against redistribution. Every federal democracy transfers resources from richer to poorer regions. Germany does it. The United States does it. But in those systems, the transfer comes with convergence: poorer regions gradually catch up. In India, the data suggests something closer to dependence.",
      ],
    },
    {
      heading: "The Growth Question",
      paragraphs: [
        "If the transfers were working, if Bihar and UP were converging toward Maharashtra and Karnataka, the fiscal architecture would justify itself. But the growth trajectories tell a more complicated story.",
      ],
      chart: {
        src: "/charts/chart4_growth_trajectories.png",
        alt: "Line chart showing GSDP growth trajectories with Southern/Western average pulling ahead of Northern average",
        caption:
          "Since 2019-20, the Southern/Western states have grown faster in aggregate.",
      },
      followup: [
        "Karnataka's GSDP has expanded by over 55% in nominal terms; Bihar and Madhya Pradesh sit closer to 45%. The states receiving less from the Centre are not just richer, they are pulling further ahead. The transfers are not closing the gap. They are financing a parallel economy of welfare schemes, infrastructure deficits, and electoral expenditure that generates political returns without proportional economic convergence.",
      ],
    },
    {
      heading: "The Position",
      paragraphs: [
        "The 16th Finance Commission, chaired by Arvind Panagariya, will submit its report by October 2025 with recommendations effective from April 2026. It faces a choice that is ultimately political, not technical: continue a formula that rewards demographic expansion and penalises fiscal discipline, or restructure the compact to incentivise the outcomes India actually needs stable and distributed fertility, higher own-tax revenue, reduced borrowing, and genuine convergence.",
        "The current architecture does not merely redistribute wealth. It redistributes incentives — in the wrong direction. States that built their own prosperity are asked to subsidise states that didn't, while receiving no mechanism to recoup, no timeline for convergence, and no accountability for outcomes. If this asymmetry is not addressed before the next Census reshapes parliamentary constituencies, the question will stop being fiscal and start being existential.",
        "India's federal compact was designed for a young, growing, industrialising nation. The nation that exists today stands demographically split, economically divergent, and politically polarised along precisely these fault lines, needs a framework.",
      ],
      chart: null,
      followup: [],
    },
  ],
  footnote:
    "Data and analysis by Siddharth Shah. All datasets are publicly available from the RBI (State Finances 2025-26), MoSPI, and NFHS-5. Charts generated with Python (Pandas, Matplotlib). Methodology available on request.",
};

// ─────────────────────────────────────────────────────────────────────────────
// 5. PROJECTS — three tiles
// ─────────────────────────────────────────────────────────────────────────────
export const projects = [
  {
    name: "Complalg",
    tagline: "AI-native fintech compliance platform",
    period: "Dec 2025 – Present",
    stack: ["NestJS", "FastAPI", "LLM/RAG", "pgvector", "Knowledge Graph"],
    blurb:
      "Knowledge-graph + LLM-RAG backend for automated regulatory filing and trade surveillance. Chrome Extension cut form-submission time by 40% and surfaced 25% more high-risk events in QA.",
    metric: "40%",
    metricLabel: "submission time reduced",
  },
  {
    name: "Predictive Cardio Health",
    tagline: "Real-time cardio-risk prediction API",
    period: "May – Aug 2023",
    stack: ["TensorFlow", "Scikit-learn", "Flask", "REST API"],
    blurb:
      "End-to-end ML pipeline with automated data cleaning. 65% classification accuracy in production. Reduced analyst review workload by 30% versus manual baseline.",
    metric: "65%",
    metricLabel: "classification accuracy",
  },
  {
    name: "AI Forensic Image Analysis",
    tagline: "Tamper detection & object recognition",
    period: "Sep – Dec 2022",
    stack: ["CNN", "TensorFlow", "Keras", "Deep Learning"],
    blurb:
      "Led 10-engineer team to ship a deep-learning forensic pipeline. 77% detection accuracy across large-scale image datasets. Cut investigation triage time by 35%.",
    metric: "77%",
    metricLabel: "detection accuracy",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 6. BEYOND THE ENGINEERING — Into the Wild + writing
// ─────────────────────────────────────────────────────────────────────────────
export const beyond = {
  kicker: "Beyond the engineering",
  title: "I write. I read. I observe.",
  intro:
    "Engineering is half of how I see. The other half was built before I learned to code — in newsprint, in late-night news debates, in essays my professors thought were worth keeping.",
  // Featured essay
  featuredEssay: {
    title:
      "Helming nous in the autarkic inner tempest - Into the Wild (Alexander Supertramp)",
    course: "PHIL 13  ·  Penn State University",
    note: "An essay on autonomy, alienation, and a singular human dilemma with societal existence - to be or not to be, recognised by faculty and currently displayed in Penn State's Dept of Philosophy.",
    excerpt:
      "McCandless rejected the gilded confines of liberty for what he believed was its purer form — and discovered, as Rousseau warned, that absolute freedom isolates as surely as it liberates.",
    pdfUrl: "/essays/into-the-wild.pdf", // place PDF here when ready
  },
  // What I read / watch — keep short, real
  influences: [
    { name: "Fareed Zakaria", role: "GPS, CNN" },
    { name: "Christiane Amanpour", role: "Amanpour, CNN" },
    { name: "Sir Mark Tully", role: "BBC, India" },
    { name: "Prannoy Roy", role: "NDTV" },
    { name: "Vinod Dua", role: "The Wire" },
    { name: "Palki Sharma", role: "India Global Review" },
    { name: "Sudhir Chaudhary", role: "Doordarshan" },
    { name: "Rahul Kanwal", role: "India Today" },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 7. PHOTOGRAPHY — 25 images
//    Drop your images in /public/photos/ as 01.jpg, 02.jpg, … 25.jpg
//    Edit captions/orientation here.
// ─────────────────────────────────────────────────────────────────────────────
export const photography = {
  intro:
    "I shoot what I notice. The pattern in the noise. The moment before the frame composes itself.",
  // 25 entries — replace src and captions as needed
  images: [
    {
      src: "/photos/01.jpg",
      alt: "Photograph 01",
      caption: "",
      orientation: "wide",
    },
    {
      src: "/photos/02.jpg",
      alt: "Photograph 02",
      caption: "",
      orientation: "tall",
    },
    {
      src: "/photos/03.jpg",
      alt: "Photograph 03",
      caption: "",
      orientation: "square",
    },
    {
      src: "/photos/04.jpg",
      alt: "Photograph 04",
      caption: "",
      orientation: "tall",
    },
    {
      src: "/photos/05.jpg",
      alt: "Photograph 05",
      caption: "",
      orientation: "wide",
    },
    {
      src: "/photos/06.jpg",
      alt: "Photograph 06",
      caption: "",
      orientation: "tall",
    },
    {
      src: "/photos/07.jpg",
      alt: "Photograph 07",
      caption: "",
      orientation: "square",
    },
    {
      src: "/photos/08.jpg",
      alt: "Photograph 08",
      caption: "",
      orientation: "tall",
    },
    {
      src: "/photos/09.jpg",
      alt: "Photograph 09",
      caption: "",
      orientation: "square",
    },
    {
      src: "/photos/10.jpg",
      alt: "Photograph 10",
      caption: "",
      orientation: "wide",
    },
    {
      src: "/photos/11.jpg",
      alt: "Photograph 11",
      caption: "",
      orientation: "tall",
    },
    {
      src: "/photos/12.jpg",
      alt: "Photograph 12",
      caption: "",
      orientation: "tall",
    },
    {
      src: "/photos/13.jpg",
      alt: "Photograph 13",
      caption: "",
      orientation: "wide",
    },
    {
      src: "/photos/14.jpg",
      alt: "Photograph 14",
      caption: "",
      orientation: "wide",
    },
    {
      src: "/photos/15.jpg",
      alt: "Photograph 15",
      caption: "",
      orientation: "tall",
    },
    {
      src: "/photos/16.jpg",
      alt: "Photograph 16",
      caption: "",
      orientation: "tall",
    },
    {
      src: "/photos/17.jpg",
      alt: "Photograph 17",
      caption: "",
      orientation: "tall",
    },
    {
      src: "/photos/18.jpg",
      alt: "Photograph 18",
      caption: "",
      orientation: "wide",
    },
    {
      src: "/photos/19.jpg",
      alt: "Photograph 19",
      caption: "",
      orientation: "tall",
    },
    {
      src: "/photos/20.jpg",
      alt: "Photograph 20",
      caption: "",
      orientation: "tall",
    },
    {
      src: "/photos/21.jpg",
      alt: "Photograph 21",
      caption: "",
      orientation: "tall",
    },
    {
      src: "/photos/22.jpg",
      alt: "Photograph 22",
      caption: "",
      orientation: "wide",
    },
    {
      src: "/photos/23.jpg",
      alt: "Photograph 23",
      caption: "",
      orientation: "square",
    },
    {
      src: "/photos/24.jpg",
      alt: "Photograph 24",
      caption: "",
      orientation: "tall",
    },
    {
      src: "/photos/25.jpg",
      alt: "Photograph 25",
      caption: "",
      orientation: "tall",
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 8. CONTACT — final CTA
// ─────────────────────────────────────────────────────────────────────────────
export const contact = {
  kicker: "Get in touch",
  headline: "Hire me. Test me. Or just debate and deliberate.",
  body: "I am available immediately for a 12-week summer internship starting May 2026, transitioning to full-time. Work remains a precondition - pay can be discussed. I am eager to design and deploy an improved IGR site soon;)",
};
