# siddharthgshah.com

A single-page interactive site built for the IGR application — and beyond.
Tech-forward modern aesthetic. Editorial typography. Smooth motion.
Engineered for swap-and-deploy.

```
┌────────────────────────────────────────────────────────────────┐
│  Stack:    Next.js 14  ·  TypeScript  ·  Tailwind  ·  Framer   │
│  Fonts:    Fraunces  ·  Bricolage Grotesque  ·  JetBrains Mono │
│  Deploy:   Vercel (one-click from GitHub)                      │
└────────────────────────────────────────────────────────────────┘
```

---

## ⚡ Quick Start (5 minutes to running locally)

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open the site
open http://localhost:3000
```

You should see the site running with placeholder photos and the actual charts/essay
content already wired in.

---

## 📝 Content Swap — Where to Edit What

**Everything that appears on the site lives in one file:**

```
lib/content.ts
```

Open it. It's heavily commented and organized by section:

| Section | What lives there |
|---|---|
| `identity` | Your name, contact details, social links, CV path |
| `hero` | Headline, subline, the three numeric callouts |
| `letter` | Open letter to IGR — paragraphs as an array |
| `investigation` | The full data piece — title, lede, sections, charts, captions |
| `projects` | Three project tiles — name, metric, blurb, stack |
| `beyond` | Featured essay info + list of journalistic influences |
| `photography` | 25 image entries (orientation, captions) |
| `contact` | Final CTA copy |

Edit text. Save. Browser reloads automatically.

---

## 🖼️ Adding Your Real Assets

### Photos (25)
1. Drop your final photos in `public/photos/`
2. Name them `01.jpg` through `25.jpg` (matching the existing placeholders)
3. The masonry layout uses the `orientation` field in `lib/content.ts` —
   set each photo to `"tall"`, `"wide"`, or `"square"` so the grid composes well

### CV
- Replace `public/cv.pdf` with your final resume PDF (keep the filename)

### Into the Wild Essay
- Replace `public/essays/into-the-wild.pdf` with your final PDF (keep the filename)

### Charts
- Already in `public/charts/` — your 4 SVG/PNG charts from the analysis
- If you regenerate them, just overwrite the files with the same names

---

## 🚀 Deployment to Vercel + siddharthgshah.com

### Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/siddharthgshah-site.git
git push -u origin main
```

### Step 2 — Deploy on Vercel
1. Go to **vercel.com** and sign in with GitHub
2. Click **Add New → Project**
3. Select your `siddharthgshah-site` repo
4. Click **Deploy** — Vercel auto-detects Next.js, no config needed
5. Wait ~60 seconds; you'll get a `*.vercel.app` URL

### Step 3 — Connect Your Domain
1. In Vercel project: **Settings → Domains**
2. Add `siddharthgshah.com` and `www.siddharthgshah.com`
3. Vercel shows you DNS records to add

4. In **Namecheap** (where you bought the domain):
   - Go to **Domain List → Manage → Advanced DNS**
   - Add the records Vercel showed you. Typically:
     - **A record**: `@` → `76.76.21.21`
     - **CNAME**: `www` → `cname.vercel-dns.com`
   - Save changes

5. DNS propagation: 5 minutes – 24 hours (usually fast).
   Vercel will auto-issue an SSL certificate once propagated.

### Step 4 — Future Updates
Every `git push` to `main` automatically redeploys. No manual steps.

---

## 🎨 Design System Reference

If you want to tweak the look:

### Colors (`tailwind.config.ts`)
```
ink     #06070A   — page background
bone    #F5F4EE   — primary text
accent.blue   #1D4ED8   — primary accent
accent.red    #DC2626   — secondary accent
accent.amber  #F59E0B   — tertiary accent
```

### Fonts (`app/layout.tsx`)
```
Display:  Fraunces           (editorial serif, headlines & callouts)
Body:     Bricolage Grotesque (geometric sans, body)
Mono:     JetBrains Mono     (data, timestamps, section markers)
```

### Animation tokens (`tailwind.config.ts`)
- `animate-fade-up` — section reveals
- `animate-scroll-cue` — bottom-of-hero cue
- `animate-pulse-soft` — status indicators

---

## 📂 Project Structure

```
siddharthgshah-site/
├── app/
│   ├── components/
│   │   └── Navigation.tsx      ← top nav + side dot navigator + scroll progress
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Letter.tsx
│   │   ├── Investigation.tsx
│   │   ├── Projects.tsx
│   │   ├── BeyondEngineering.tsx
│   │   ├── Photography.tsx     ← masonry gallery + lightbox
│   │   └── Contact.tsx
│   ├── globals.css             ← global styles, grain texture, scrollbar
│   ├── layout.tsx              ← fonts, metadata
│   └── page.tsx                ← composes all sections
├── lib/
│   └── content.ts              ← ★ EDIT HERE ★
├── public/
│   ├── charts/                 ← 4 charts
│   ├── photos/                 ← 25 photos (placeholders for now)
│   ├── essays/                 ← Into the Wild PDF
│   └── cv.pdf                  ← your resume
├── package.json
├── tailwind.config.ts
└── README.md
```

---

## 🛠️ Common Edits

**Change the hero headline:**
`lib/content.ts` → `hero.headline`

**Re-order the influences list:**
`lib/content.ts` → `beyond.influences`

**Add or remove a photo:**
1. Add/remove the file in `public/photos/`
2. Update the array length in `lib/content.ts` → `photography.images`

**Update a project's metric:**
`lib/content.ts` → `projects[i].metric` and `metricLabel`

**Add another section to the investigation essay:**
`lib/content.ts` → `investigation.sections` — push a new object to the array

---

## ❓ Troubleshooting

**Build fails on Vercel because of missing photos:**
The `01.jpg`–`25.jpg` placeholders are committed in `public/photos/`. Don't delete
them until you've replaced them with real files of the same names.

**Fonts look wrong locally:**
First run can take a moment to fetch Google Fonts. Hard refresh once.

**Mobile layout breaks:**
Tailwind breakpoints are `md` (768px) and `lg` (1024px). All sections are
mobile-first — narrow your browser to test.

**Domain not resolving:**
Run `dig siddharthgshah.com` to check propagation. If empty, wait an hour.

---

Built with care.
