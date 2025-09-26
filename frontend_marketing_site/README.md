# OmniCI Marketing Website (Remix + Tailwind)

A Remix-based single-page marketing site for an enterprise CI/CD platform following the "Ocean Professional" style (blue primary, amber accents, modern, clean, rounded corners, gradients, sticky nav, responsive).

## Quick start

- Install dependencies: `npm install`
- Run development server: `npm run dev`
- Build: `npm run build`
- Start production server: `npm start`

## Structure

- `app/routes/_index.tsx` — Single-page layout with sections:
  - Hero
  - Features
  - Integrations
  - Case Studies
  - Testimonials
  - Pricing
  - Calls to Action
  - Contact
  - Footer

- `app/tailwind.css` — Theme tokens and component utilities for Ocean Professional
- `tailwind.config.ts` — Tailwind configuration and theme extensions
- `app/root.tsx` — Global layout, fonts, meta, and favicon

## Editing content

Replace placeholder text and blocks in `app/routes/_index.tsx`:
- Hero mockups and badges
- Feature cards copy
- Integration logos
- Case studies
- Testimonials
- Pricing details
- Contact form endpoint (currently prevents default submission)

To change theme colors, adjust CSS variables in `app/tailwind.css` or `tailwind.config.ts`.

## Notes

- The contact form is a placeholder. Wire up to your forms provider or backend.
- Placeholder assets are simple blocks; replace with brand images as needed.
- SEO meta tags can be updated in the route `meta` export.
