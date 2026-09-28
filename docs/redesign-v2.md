# Redesign v2: Dark Prism, consolidated

This version keeps the Dark Prism identity: void black, optical glass, silver chrome, a single lime signal, and the spectrum used only for light. It rebuilds the layouts, the motion and the codebase around that identity.

## Architecture

| Before | After | Why |
| --- | --- | --- |
| `#app` was filled by JS, then 19 scripts rewrote it (`final-tweaks`, `language-switcher-fix`, `prisma-finalization`, …), plus 2 override stylesheets | Semantic `index.html` with 4 modules: `main.js`, `hero.js`, `wizard.js`, `i18n.js`, and one `styles.css` | Content now exists before JS runs, which helps SEO and first paint. Nothing overrides anything else, so each rule has one home. |
| React, Motion, Tailwind, Bootstrap Icons and Line Awesome loaded for a few components and icons | GSAP only, plus an inline SVG icon sprite | Less JS and CSS to download, and no mixed DOM ownership between React and the DOM translator. |
| The i18n text walker fought React-owned nodes and needed a guard and a fix layer | One walker keyed by English strings, with `[data-i18n-skip]` for nodes a module renders through `t()` | Predictable. PT and ES now cover 100% of visible and ARIA text (checked in the browser). |
| Hero and editorial images shipped as 2–3 MB JPG/PNG files | WebP at 1200/2400 widths with `srcset` (hero set about 480 KB total) | Faster loading on mobile. |

## Functionality

| Before | After | Why |
| --- | --- | --- |
| The booking wizard showed "you will receive a confirmation email", but sent nothing | The wizard (service → contact → details → review) opens WhatsApp with the request prefilled, and a second button opens Prisma's live Google Calendar schedule | Leads were being lost, and the confirmation made a false promise. |
| The contact form said "This prototype is ready to connect…" | Merged into the wizard, and the contact channels are listed beside it | Two forms collected the same data. |
| A fake date/time grid | Real availability comes from Google Calendar | The old grid showed times that didn't correspond to real availability. |
| Service cards linked to `#contact` | Service cards preselect that service in the wizard | Saves a step and keeps the visitor's context. |

## Composition

| Before | After | Why |
| --- | --- | --- |
| Section headings slid under the fixed nav, and the nav stayed pinned | The nav hides while you scroll down and returns when you scroll up; `scroll-padding` added | Headings are no longer covered. |
| Four closing blocks in a row (Instagram, "You do not have to…", "Ready for your next step?", footer) | Instagram → one closing CTA (founders over the prism light) → silver footer | Removes repetition, so one ask carries the ending. |
| A 9-step zigzag of light-silver cards on black | A sticky glass "Your case" panel (big step number, spectrum progress bar, 9 dots) next to steps that brighten as you reach them; a vertical spectrum rail on mobile | The whole process stays readable, and the light cards no longer break the dark theme. |
| The "Why Prisma" bento had empty cells | A 3×2 grid with no empty cells; the lime 100% tile moves first on smaller screens | Avoids a broken-looking grid. |
| Eight service cards stacked on phones (about 5 screens of scrolling) | A swipeable snap rail on phones, 2 columns on tablet, 4 on desktop | Cuts mobile scroll length and keeps each card legible. |
| Testimonials used React marquee columns | CSS columns moving in opposite directions, pause on hover or focus, a pause button, and clones hidden from screen readers; static on mobile and with reduced motion | Same effect, accessible, and no framework. |
| Labels at 7–9px, body text reduced to 11px in places | Labels at least 12px, body 16–20px, `--quiet` raised to #858a92 (5.6:1) | Readability and WCAG AA. |

## Motion (GSAP + ScrollTrigger, `prefers-reduced-motion` respected)

- **Hero:** one entrance timeline. The image settles from a 1.12 scale, the copy rises in reading order, then the rating card and controls appear. Slides crossfade with a slow scale, and the copy transitions in the direction you move. Autoplay pauses when the hero is off-screen, when the tab is hidden, or when you press the pause button.
- **Reveals:** `ScrollTrigger.batch` staggers sibling elements together. There are no per-element delays.
- **About headline:** words light up as you scroll, at reading pace.
- **Founder portraits:** the clip-path opens from the centre and the image settles into place.
- **Parallax:** only inside fixed frames (the paperwork photo, the closing prism, and the service art on desktop).
- **Process:** the active step is computed from scroll position, so it stays correct after jumping to an anchor. The step number rolls in the direction of travel.
- **Controls:** press feedback at `scale(.97)`. Hover effects are gated behind `(hover: hover) and (pointer: fine)`. The prism border only animates on hover or focus, so nothing loops by default.
- **Reduced motion:** content is never hidden, autoplay is off, the marquee is static, and FAQ panels open instantly.

## Open items

1. Confirm the stats (200+ cases, **100% approval rate**, 50+ states). A 100% approval claim sits awkwardly next to the FAQ answer "No immigration service can guarantee a USCIS decision".
2. Have a native speaker review the new PT/ES strings in `src/translations-extra.json`.
3. Optional cleanup: the original JPG/PNG sources in `public/images/{hero,footer,social,editorial}` are no longer referenced, but Vite still copies them to `dist/`.
