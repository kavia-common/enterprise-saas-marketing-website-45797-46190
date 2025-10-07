# OmniCI Marketing Website (Remix + Tailwind)

A Remix-based single-page marketing site for an enterprise CI/CD platform following the "Ocean Professional" style (blue primary, amber accents, modern, clean, rounded corners, gradients, sticky nav, responsive).

## Quick start

- Install dependencies: `npm install`
- Run development server: `npm run dev`
- Build: `npm run build`
- Start production server: `npm start`

## Structure

- `app/root.tsx` — Global layout, fonts, meta, and favicon. Adds Open Graph/Twitter meta and smooth scrolling.
- `app/tailwind.css` — Theme tokens and component utilities for Ocean Professional
- `tailwind.config.ts` — Tailwind configuration and theme extensions

### Components (app/components)
- `Navbar.tsx` — Sticky nav with anchor links and CTA
- `Hero.tsx` — Headline, subtext, CTAs, product mock area
- `FeatureGrid.tsx` — 6 feature cards using `app/data/features.ts`
- `Integrations.tsx` — Logo grid using `app/data/integrations.ts`
- `CaseStudies.tsx` — 2–3 case study cards using `app/data/caseStudies.ts`
- `Testimonials.tsx` — Testimonial cards using `app/data/testimonials.ts`
- `Pricing.tsx` — Three tiers using `app/data/pricing.ts`
- `CTASection.tsx` — Full-width CTA band
- `ContactForm.tsx` — Client-only validation; fake submit with success notice
- `Footer.tsx` — Company info, links, basic social placeholders

### Route
- `app/routes/_index.tsx` — Composes the single-page sections: Hero → Features → Integrations → Case Studies → Testimonials → Pricing → CTA → Contact → Footer

### Data (app/data)
- `features.ts`, `integrations.ts`, `caseStudies.ts`, `testimonials.ts`, `pricing.ts` — Mock data to populate sections

## Editing content

- Update copy or structure inside component files in `app/components`.
- Replace placeholder logos/images with real assets.
- Adjust theme colors in `app/tailwind.css` or `tailwind.config.ts`.
- SEO tags can be adjusted via the `meta` exports in `app/root.tsx` or `app/routes/_index.tsx`.

## Accessibility and UX

- Semantic sections and landmarks (header, section, footer)
- Keyboard-focus styles via Tailwind focus-visible utilities
- Color contrast based on Ocean Professional palette
- Responsive grid/flex layouts for mobile → desktop

## Notes

- The contact form is client-only and does not submit to a backend. Hook up your provider or API as needed.
- No external services or environment variables are required.
