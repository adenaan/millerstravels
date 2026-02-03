
# Miller's Travel & Tours — React + Vite

A modern, mobile‑responsive website for Miller's Travel & Tours with a **demo Admin** area that writes to **`localStorage`** (temporary). Later, you can plug this into a real backend/API.

## ✨ Features
- Vite + React (fast dev server)
- Clean, responsive UI using CSS (no heavy UI libs)
- Dynamic Packages (create/read/update/delete) via Admin
- Site settings editor (hero text, tagline, contact info, theme colors)
- Demo Login: `admin@millerstravels.co.za` / `demo123`
- Data stored in browser Local Storage (`mt_*` keys)

## 📦 Getting Started
```bash
# 1) Install deps
npm install

# 2) Start dev server
npm run dev

# 3) Build for production
npm run build
npm run preview
```

## 🗂 Project Structure
```
src/
  assets/            # logo + brochure background
  components/        # shared UI pieces
  pages/             # route pages (Home, Packages, Contact, Admin)
  store/             # localStorage + auth helpers
  utils/             # formatting utils
```

## 🔐 Admin
- Visit `/admin` to access the dashboard. If not logged in, you'll be redirected to `/admin/login`.
- This uses a simple demo auth stored in LocalStorage. Replace with a real auth provider later.

## 🎨 Theme
Theme colors taken from your brochure:
- Primary (gold): `#d4af37`
- Accent (purple): `#8a2be2`
You can change these in **Admin → Site Settings**.

## 📝 Seeded Demo Packages
Two packages are preloaded based on your details.
Edit or add more packages under **Admin → Packages**.

---
Built with ❤️ for Miller's Travel & Tours.
