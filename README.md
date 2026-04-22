# Beyond22

**Forged in the Battle. United in Purpose. Save the 22.**

Veteran-founded 501(c)(3) preventing veteran suicide through the Patriot Alert response network, peer intervention, and family support.

---

## Local Development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Deploy (Vercel)

Push to `main` — Vercel auto-deploys. Preview URLs generated for every branch.

First deploy: connect this repo in the Vercel dashboard and set environment variables (see below).

---

## Content Updates

All content lives in `/content/`. Update TypeScript files there — no CMS required at this stage.

| File | What it controls |
|---|---|
| `content/board.ts` | Board of Directors grid (6 seats, fill `filled: true` + data when ready) |
| `content/mission.ts` | Mission statement, slogan |
| `content/programs.ts` | Program cards, descriptions, referral flags |
| `content/caseManagement.ts` | Phase 2 case management block |

### Adding Joe's Story
1. Open `content/mission.ts`
2. Set `joesStory` to the narrative text
3. Update `components/sections/JoesStory.tsx` — replace the placeholder block with the real content

### Adding a Board Member
In `content/board.ts`, find the matching position slot and update:
```ts
{
  name: "Jane Smith",
  position: "President",
  bio: "Bio text here.",
  why: "Why I serve quote.",
  headshot: "/images/board/jane-smith.jpg",
  filled: true,
}
```
Drop headshot photos in `public/images/board/`.

### Swapping in the Logo
Drop `beyond22-logo.svg` in `public/logo/`. The nav and footer reference it automatically.

---

## Wiring Donations
The donate page (`app/donate/page.tsx`) has stub donation buttons. Wire to:
- **Stripe** — recommended for card processing
- **PayPal Giving Fund** — for nonprofit verification + fee waiver
- **Fiscal sponsor portal** — if operating under fiscal sponsorship

## Wiring the Battle Buddy Form
`components/sections/BattleBuddyForm.tsx` — the `onSubmit` handler currently logs to console. Wire to:
- An API route (`app/api/apply/route.ts`) that sends via Resend/SendGrid
- Or directly to a form backend (Formspree, Airtable)

## Wiring the Legislator Contact Tool
`components/sections/LegislatorContactTool.tsx` — ZIP lookup currently shows a placeholder. Wire to:
- Google Civic Information API
- OpenStates API (openstates.org/api/)
- Cicero API (cicero.azavea.com/)

---

## Remotion Video

Hero sequence and 22-viz compositions live in `/remotion/`.

**Render MP4 fallback for hero:**
```bash
npx remotion render remotion/Root.tsx HeroSequence public/videos/hero.mp4
```

**Preview in browser:**
```bash
npx remotion preview remotion/Root.tsx
```

---

## Analytics (Plausible)

Plausible is the chosen analytics provider (privacy-respecting, GDPR-compliant).

1. Create account at plausible.io
2. Add site domain
3. Add to `app/layout.tsx` via `next/script` with `strategy="afterInteractive"`

**No Google Analytics. No tracking pixels.**

---

## Environment Variables

Create `.env.local` for local development:

```env
NEXT_PUBLIC_SITE_URL=https://beyond22.org
RESEND_API_KEY=
FORM_RECIPIENT_EMAIL=contact@beyond22.org
CIVIC_API_KEY=
```

---

## Project Structure

```
beyond22/
├── app/                     All routes (Next.js App Router)
│   ├── layout.tsx           Root layout, fonts, CrisisBar, Nav, Footer
│   ├── page.tsx             Homepage
│   ├── about/page.tsx       About + Joe's Story + Board + Org chart
│   ├── patriot-alert/       Campaign hub, Battle Buddy form, legislator tool
│   ├── donate/              Donation tiers + allocation breakdown
│   ├── resources/           Crisis resources directory
│   ├── mental-health/       Referral directory (5 sub-pages)
│   ├── programs/            Programs (8 sub-pages)
│   ├── sitemap.ts           Auto-generated sitemap
│   ├── robots.ts            robots.txt
│   └── opengraph-image.tsx  OG image for social sharing
├── components/
│   ├── nav/                 CrisisBar, TopNav (with MegaMenu)
│   ├── hero/                HeroSequence (Remotion), HeroStill (fallback)
│   ├── sections/            Homepage sections, forms
│   └── layout/              Footer, InteriorHero
├── remotion/                HeroSequence + TwentyTwoViz compositions
├── content/                 Typed content data (board, mission, programs)
├── lib/                     utils.ts, placeholderPage.tsx helper
└── public/
    ├── logo/                Drop beyond22-logo.svg here
    ├── images/hero-walk.jpg Hero photograph
    └── images/board/        Board member headshots
```

---

## Crisis Resources

**Veterans Crisis Line: Call or text 988, press 1.**

The CrisisBar renders on every page above the nav. Dismissible per session but never permanently hidden.

---

## Language Guidelines

Per Reporting on Suicide guidelines (reportingonsuicide.org):
- **Use:** "died by suicide" — **Never:** "committed suicide"
- **Use:** "attempt" — **Never:** "failed attempt"

---

## Accessibility

- WCAG 2.2 AA target
- Skip-to-content link on all pages
- `lang="en"` on `<html>`
- Focus rings: `--flare` 2px outline
- All Remotion sequences have text equivalents
- `prefers-reduced-motion` disables all non-essential animation
- Forms have visible labels (no placeholder-as-label pattern)
