
# Miller's Travel & Tours — React + Vite + Tailwind — V2 (Glossy White/Gold)

Polished brochure-style design with premium white/gold theme, Tailwind CSS, hero + trust row, refined package cards, CTA, and improved Admin (with preview). Netlify-ready.

## Build & Run
```bash
npm install
npm run dev
npm run build
```

## Netlify
- Build command: `npm run build`
- Publish directory: `dist`
- SPA routing: `public/_redirects` contains `/* /index.html 200`
- Optional config: `netlify.toml`

## Features
- Tailwind with fonts: Playfair Display (display) + Inter (body)
- Image imports ensure correct Vite asset paths after build
- Demo Admin auth (LocalStorage): `admin@millerstravels.co.za` / `demo123`
- Admin → Packages: CRUD + live preview
- Admin → Settings: site text & colors + Reset Demo Data
- WhatsApp CTA + email link

## Structure
src/
  assets/            # logo + hero image
  components/        # Header, Hero, PackageCard, TrustRow, CTASection, Footer
  pages/             # Home, Packages, Contact, Admin*
  store/             # auth + storage
  utils/             # format helpers
