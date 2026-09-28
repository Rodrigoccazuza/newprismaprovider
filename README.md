# Prisma Provider

Prisma Provider's immigration-services website, built with Vite, GSAP and the Dark Prism visual system.

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Structure

| File | Role |
| --- | --- |
| `index.html` | All page content and semantic markup (English is the source copy) |
| `src/styles.css` | Dark Prism tokens, components, sections, motion states |
| `src/main.js` | Nav, process journey, FAQ, reviews, scroll UI, GSAP motion system |
| `src/hero.js` | Hero stories slider |
| `src/wizard.js` | Consultation request wizard → WhatsApp + Google Calendar |
| `src/i18n.js` | EN / PT / ES switching, keyed by English strings |
| `src/translations*.json` | PT / ES dictionaries |
| `public/img/` | Optimized WebP assets |

See `docs/redesign-v2.md` for the audit and design decisions.
