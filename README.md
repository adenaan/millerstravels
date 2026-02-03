
# Miller's Travel & Tours — React + Vite + Tailwind (Glossy White/Gold)

A modern, light, brochure-inspired UI with Tailwind CSS. Netlify-ready with SPA routing and imported assets (no 404s).

## Build & Run
```bash
npm install
npm run dev
npm run build
```

## Netlify
- Publish directory: `dist`
- Build command: `npm run build`
- SPA routing: `public/_redirects` with `/* /index.html 200` (required for client-side routes like `/admin`).

## Notes
- Images are imported in components so Vite fingerprints them correctly.
- Demo admin: `admin@millerstravels.co.za` / `demo123`
- Data persists in LocalStorage (temporary until backend).
