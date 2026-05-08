## Goal

Replace the current `src/routes/index.tsx` landing page with a faithful React port of the attached `noble_dental_website_updated.html`, preserving its layout, content, sections, animations, and Noble Dental Care branding (Poppins font, teal/gold palette).

## Scope

- Single page: `/` (homepage). No new routes.
- Pure presentational rewrite — no backend, no data layer changes.
- Keep all external links (booking URL, phone, social) and JSON-LD schema from the HTML.

## Plan

1. **Design tokens (`src/styles.css`)**
   - Switch display + body font from Cormorant/Inter to **Poppins** (300–800) via Google Fonts in `__root.tsx`.
   - Update CSS variables to match the HTML's palette: `--teal`, `--teal-dark`, `--teal-deep`, `--gold`, `--gold-light`, `--gold-dark`, `--off-white`, `--text-body`, plus shadow + radius tokens. Map these onto the existing semantic tokens (`--primary`, `--accent`, `--background`, etc.) so shadcn components stay themed.
   - Add the shared utility classes used across sections (`.reveal`, `.gold-bar`, `.section-label`, `.styled-list`, `.btn-*` variants, hero shapes) in `@layer components` so the JSX can use them directly.

2. **Root layout (`src/routes/__root.tsx`)**
   - Add Poppins Google Fonts `<link>` tags in the head.
   - Keep existing JSON-LD; move the `Dentist` + `FAQPage` graph from the HTML into the index route's `head()` so SEO metadata (title, description, OG tags) match the attached file.

3. **Index route (`src/routes/index.tsx`)** — full rewrite, structured as small components:
   - `Header` (sticky, logo, phone, "Book Appointment" CTA, mobile hamburger + menu)
   - `Hero` (headline, subcopy, dual CTAs, trust badges, video card)
   - `PatientFirst` (doctor card + intro copy)
   - `WhyChoose` (feature grid)
   - `ImplantOptions` (single vs multi-tooth, two-column)
   - `Yomi` (dark section, robotic implant tech)
   - `FullMouth` (All-on-4 / full-arch)
   - `Comprehensive` (services grid)
   - `Location` (address, hours, map embed/link)
   - `FAQ` (radix accordion, questions from HTML)
   - `FinalCTA` + `Footer` (3-column: brand, services, contact/social)
   - Implement the `.reveal` scroll-in animation with a small `useReveal` hook using `IntersectionObserver`.
   - Mobile menu state via `useState`; sticky-header shadow toggled on scroll.

4. **Constants**
   - `PHONE = "+1-510-493-2130"`, `BOOK = https://bookit.dentrixascend.com/...`, address, social URLs — top of file, reused everywhere.
   - Logo URL hotlinked from nobledentalcares.com (same as current).

5. **Verification**
   - Visual QA at 1051px viewport (current preview) and a mobile width.
   - Confirm no console/build errors; check that all sections from the HTML render in order.

## Out of scope

- No video player wiring (hero video card stays a static play-button poster, matching the HTML).
- No CMS / form backend.
- No new dependencies — uses existing Tailwind + Radix accordion.

## Technical notes

- Keep using semantic Tailwind tokens in shadcn components; raw teal/gold are exposed as `bg-brand`, `text-gold`, etc. via `@theme inline` so we don't sprinkle hex values in JSX.
- `direction: rtl` trick from the HTML's `.two-col.reverse` will be replaced with Tailwind `lg:flex-row-reverse` for clarity.
- `IntersectionObserver` runs only on the client; guard with `typeof window !== "undefined"` to stay SSR-safe.
