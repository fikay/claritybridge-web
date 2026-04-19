# ClarityBridge Web

Modern, responsive marketing site for **ClarityBridge** — an HR & strategic advisory firm serving nonprofits and small businesses in Canada.

**Live site:** https://claritybridge-fikayo-team.vercel.app  
**GitHub:** https://github.com/fikay/claritybridge-web

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui v4 (Base UI) |
| Fonts | Playfair Display + Plus Jakarta Sans |
| Dark mode | next-themes (system default) |
| Testing | Playwright (e2e) |
| Hosting | Vercel (free tier) |
| CI/CD | GitHub Actions |

---

## Project Structure

```
claritybridge-web/
├── app/
│   ├── page.tsx              # Homepage (all sections)
│   ├── services/page.tsx     # /services — dedicated services page
│   ├── about/page.tsx        # /about    — dedicated about page
│   ├── layout.tsx            # Root layout: fonts, SEO, ThemeProvider
│   └── globals.css           # Design tokens (OKLCH brand palette, dark/light)
├── components/
│   ├── Header.tsx            # Sticky nav, mobile sheet, dark/light toggle
│   ├── Hero.tsx              # Full-viewport hero with dual CTAs
│   ├── WhoWeServe.tsx        # 3-column audience cards
│   ├── Services.tsx          # 4-column service offering cards
│   ├── About.tsx             # 2-column story + trust signals
│   ├── Testimonials.tsx      # Client testimonial cards
│   ├── ContactCTA.tsx        # Calendly stub + mailto contact form
│   ├── Footer.tsx            # Multi-column footer
│   └── ThemeProvider.tsx     # next-themes "use client" wrapper
├── public/
│   └── logo.svg              # SVG wordmark stub (replace with real logo)
├── e2e/
│   └── landing.spec.ts       # 12 Playwright e2e tests
├── .github/
│   └── workflows/
│       └── ci-cd.yml         # CI/CD pipeline (see below)
└── playwright.config.ts
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Available Scripts

```bash
npm run dev        # Start dev server with hot reload
npm run build      # Production build
npm run start      # Serve production build locally
npm run lint       # Run ESLint
npx tsc --noEmit   # TypeScript type-check
npx playwright test # Run e2e tests (requires npm run build first)
```

---

## CI/CD Pipeline

Every push to `master` runs the full pipeline automatically via GitHub Actions:

```
push to master
     │
     ▼
┌─────────────────────┐
│  Type-check & Lint  │  tsc --noEmit + ESLint (blocks everything if it fails)
└────────┬────────────┘
         │
         ▼
┌─────────────────────┐
│       Build         │  next build — verifies the app compiles cleanly
└────────┬────────────┘
         │
         ▼
┌─────────────────────┐
│  Deploy Production  │  Ships to https://claritybridge-web.vercel.app
└─────────────────────┘
```

### Preview Deployments (Pull Requests only)

The **Deploy Preview** job is intentionally skipped on direct pushes to `master` — it only runs when you open a Pull Request:

```
feature branch → open PR on GitHub
                      │
                      ▼
              CI runs all checks
                      │
                      ▼
         Deploys to a unique preview URL
         e.g. claritybridge-web-git-my-feature-fikayo-team.vercel.app
                      │
                      ▼
         Preview URL posted as a PR comment
                      │
              Review → Merge to master
                      │
                      ▼
              Production deploy runs
```

This means you can review any change on a live URL before it goes to production.

### Required GitHub Secrets

| Secret | Where to get it |
|---|---|
| `VERCEL_TOKEN` | https://vercel.com/account/tokens → create a classic token |
| `VERCEL_ORG_ID` | `team_yWdR1YKSunFWby8mz7g3TPMv` (already set) |
| `VERCEL_PROJECT_ID` | `prj_YHUIOp4M3LwTcSNuAPYT3gKqwzNn` (already set) |

---

## Enabling the Hidden Pages

`/services` and `/about` are fully built but currently use anchor scroll links in the nav (`#services`, `#about`). To switch them to dedicated page routes, update **two files**:

**`components/Header.tsx`** and **`components/Footer.tsx`** — change:
```ts
{ label: "Services", href: "#services" },
{ label: "About",    href: "#about"    },
```
to:
```ts
{ label: "Services", href: "/services" },
{ label: "About",    href: "/about"    },
```

---

## Design System

Brand tokens are defined in `app/globals.css` using CSS custom properties:

| Token | Light | Dark |
|---|---|---|
| Primary | Deep navy `oklch(25% 0.06 250)` | Same |
| Accent | Warm amber `oklch(72% 0.15 60)` | Same |
| Background | Off-white | Dark slate |
| Foreground | Near-black | Off-white |

Fonts are loaded via `next/font/google` in `app/layout.tsx`:
- **Playfair Display** → headings (`font-heading` / `var(--font-playfair)`)
- **Plus Jakarta Sans** → body (`font-sans` / `var(--font-jakarta)`)

---

## TODO (Future Improvements)

- [ ] Replace `public/logo.svg` with the real ClarityBridge logo
- [ ] Add real Calendly booking URL in `components/ContactCTA.tsx`
- [ ] Verify `info@claritybridge.ca` email address in `ContactCTA.tsx`
- [ ] Replace placeholder testimonials with real client quotes
- [ ] Connect custom domain `claritybridge.ca` → Vercel dashboard → Settings → Domains
- [ ] Expand `/services` page with detailed case studies / pricing
- [ ] Expand `/about` page with team bios and photos
