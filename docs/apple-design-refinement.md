# Apple-inspired refinement applied to Prisma Provider

This pass adapts Apple Human Interface Guideline principles to the existing Prisma brand rather than copying iOS visual chrome wholesale.

## Applied principles

- **Purpose and simplicity:** preserve the existing information architecture and emphasize the primary consultation/service paths instead of adding decorative UI.
- **Familiarity and wayfinding:** current-section navigation state, keyboard-operable hero tabs, predictable button states, and standard form autocomplete metadata.
- **Selective materials:** translucent glass is reserved for overlapping UI such as the hero navigation, rating panel, mobile menu, and secondary overlay buttons. Reading surfaces are calmer solid dark panels.
- **Unified surfaces:** the FAQ is treated as one grouped surface with hairline dividers rather than a stack of isolated cards.
- **Semantic visual tokens:** reusable label, surface, hairline, radius, shadow, touch-target, and motion tokens centralize the refinement layer.
- **Typography craft:** platform system fonts are preferred with Inter as fallback, display tracking is tightened by size, and numeric UI uses tabular numerals.
- **Responsive feedback:** hover is subtle, press feedback is immediate, and transitions use spring-like curves instead of generic easing where appropriate.
- **Accessibility:** hero tabs and controls meet a 44px minimum target, focus states are more visible, form fields receive useful autocomplete/input-mode hints, and reduced-motion/reduced-transparency preferences are respected.
- **Responsive craft:** mobile navigation behaves as a floating material sheet while keeping controls comfortably tappable.

## Files

- `public/apple-refinement.css` — additive design-token and component refinement layer.
- `src/apple-refinement.js` — accessibility, wayfinding, tab semantics, and lightweight interaction enhancements.
- `index.html` — loads the refinement stylesheet and behavior after the existing site modules.

The refinement intentionally preserves Prisma's dark palette, signal-green accent, content, imagery, and existing GSAP storytelling.
