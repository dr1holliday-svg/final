# Earthed Electrical — Website Source

Website for **Earthed Electrical Services Ltd**, owner-operated by David Holliday (Licensed Electrician, EWRB), based in Beckenham, Christchurch.

---

## Tech stack

| Layer | Tool |
|-------|------|
| Framework | React 19 + Vite 7 |
| Routing | wouter |
| Animation | framer-motion |
| Styling | CSS custom properties (design system in `src/index.css`) |
| Type checking | TypeScript 5 |
| Package manager | pnpm (or npm/yarn — see below) |

No backend. Fully static — build and serve anywhere.

---

## Getting started

```bash
# Install dependencies
pnpm install     # or: npm install

# Start dev server (http://localhost:5173)
pnpm dev

# Type-check
pnpm typecheck

# Production build → dist/
pnpm build

# Preview production build locally
pnpm serve
```

---

## Project structure

```
earthed-electrical/
├── public/                  # Static assets served as-is
│   ├── logo-dark.png        # Dark-coloured logo (use on light backgrounds)
│   ├── logo-light.png       # Light-coloured logo (use on dark backgrounds)
│   ├── icon-dark.png        # Icon variant (dark)
│   ├── icon-light.png       # Icon variant (light)
│   ├── about-david.png      # David's photo (About page)
│   ├── opengraph.jpg        # OG / social share image
│   ├── favicon.svg
│   ├── robots.txt
│   └── work/                # Job/service photos
├── src/
│   ├── index.css            # Full design system — CSS vars, type scale, layout
│   ├── main.tsx             # React entry point
│   ├── App.tsx              # Router — five routes
│   ├── components/
│   │   ├── Nav.tsx          # Top navigation (desktop pill nav + mobile hamburger)
│   │   ├── Footer.tsx
│   │   ├── ThemeProvider.tsx  # Dark/light theme toggle (persisted to localStorage)
│   │   ├── home/            # HomePage section components
│   │   └── work/            # WorkPage section components
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── WorkPage.tsx
│   │   └── ContactPage.tsx
│   ├── hooks/
│   └── lib/
└── index.html               # Google Fonts links + CSS font variable declarations
```

---

## Pages

| Route | Page | Notes |
|-------|------|-------|
| `/` | Home | Hero, services preview, manifesto, service area map, FAQ, CTA |
| `/services` | Services | Six service cards with expandable detail |
| `/work` | Work | Same six services, with photo headers |
| `/about` | About | David's background, timeline, values |
| `/contact` | Contact | Phone/email/hours + quote request form |

---

## Design system

All visual tokens live in `src/index.css` as CSS custom properties on `:root` (dark mode) and `[data-theme="light"]`.

Key variables:

| Variable | Use |
|----------|-----|
| `--accent` | Brand green |
| `--bg`, `--bg-2`, `--bg-3` | Background layers |
| `--fg`, `--fg-2`, `--fg-3` | Text hierarchy |
| `--line`, `--line-2` | Border colours |
| `--ff-display` | Archivo — body and headings |
| `--ff-mono` | JetBrains Mono — labels, eyebrows |
| `--font-instrument-serif` | Instrument Serif — italic accents |

---

## Theme

Dark/light mode is toggled via the lightning-bolt button in the nav. The theme is stored in `localStorage` under the key `ee-theme` and applied as `data-theme="dark"` / `data-theme="light"` on the `<html>` element.

---

## Contact form

The form in `src/pages/ContactPage.tsx` currently **simulates a submit** with a 1.2-second delay. Before going live it needs wiring to a real handler. Options:

- **Formspree** — add `action="https://formspree.io/f/YOURCODE"` to the `<form>` tag and remove the `handleSubmit` override
- **EmailJS** — call `emailjs.send()` inside `handleSubmit`
- **Custom endpoint** — POST to your own API and handle the response

---

## Deployment

Build output goes to `dist/`. Because this is a single-page app (client-side routing via wouter), your host must redirect all paths to `index.html`.

**Netlify** — add a `public/_redirects` file:
```
/*  /index.html  200
```

**Vercel** — add to `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

**Nginx**:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

---

## Contact details (hardcoded in source)

| Field | Value |
|-------|-------|
| Phone | 022 630 6654 |
| Email | hello@e-electrical.co.nz |
| Address | Malcolm Avenue, Beckenham, Christchurch |
| Facebook | facebook.com/p/Earthed-Electrical-Services-61577926974943 |

Search for these strings in `src/` if any need updating.
