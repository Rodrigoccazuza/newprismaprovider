---
name: prisma-design
description: Apply Prisma Provider's frontend design standards by combining Emil Kowalski design engineering, Taste Skill, and Impeccable. Use for any UI, layout, motion, responsive, accessibility, or visual-polish task in this repository.
---

# Prisma Design Skill

Use this skill before modifying frontend presentation or interaction behavior in this repository.

## Sources

- Emil Kowalski — `emilkowalski/skills`, especially `emil-design-eng`
- Impeccable — `pbakaus/impeccable`
- Taste Skill — `Leonxlnx/taste-skill`, with the GPT/Codex-oriented `gpt-taste` rules preferred for this project

The upstream packages can be installed or refreshed with `npm run skills:install`.

## Decision order

1. Preserve Prisma product truth, content, approved brand identity, functionality, and accessibility.
2. Use Impeccable principles to establish hierarchy, clarity, responsive correctness, accessibility, resilience, and production readiness.
3. Use Emil Kowalski principles to tune interaction behavior, easing, duration, feedback, and motion performance.
4. Use Taste principles to improve composition, typography, visual rhythm, section architecture, density, and originality.

If a more expressive visual idea harms clarity, accessibility, performance, or the existing Prisma identity, do not use it.

## Visual composition

- Avoid generic AI landing-page patterns: identical centered sections, endless cards, nested cards, decorative badges, excessive pill UI, predictable alternating left/right blocks, random gradients, and filler meta-labels such as `SECTION 01`.
- Favor editorial hierarchy, deliberate asymmetry where appropriate, strong whitespace, and a small number of well-composed visual moments.
- Hero headings should remain readable and usually stay within 2–3 lines on desktop. Fix width and type scale instead of allowing narrow six-line wraps.
- Large sections should feel distinct, but do not add empty space purely for spectacle.
- Bento/grid layouts must not leave accidental dead cells or broken alignment.
- Use imagery only when it supports the story or task; do not add random stock-style decoration.
- Preserve existing Prisma green and established visual cues unless the request explicitly changes brand direction.

## Motion and interaction

Before animating, ask whether motion improves spatial understanding, state communication, feedback, or storytelling.

- Frequent interactions should be nearly instant.
- Prefer `ease-out` for entrances and exits that need immediate response.
- Prefer strong custom easing curves over weak default easings when appropriate.
- Avoid `ease-in` for ordinary UI entrances.
- Prefer `transform` and `opacity` for smooth performance.
- Avoid `transition: all`; name the exact properties.
- Prefer transitions for interruptible UI; use keyframes mainly for predetermined sequences.
- Do not animate from `scale(0)`; use subtle scale plus opacity when scaling is appropriate.
- Add subtle press feedback to clickable controls, usually around `scale(0.97)` when it does not cause layout or accessibility issues.
- Gate hover-specific effects behind `(hover: hover) and (pointer: fine)`.
- Respect `prefers-reduced-motion`; reduce positional movement while retaining useful state feedback.
- For GSAP, use ScrollTrigger only where scroll-linked behavior materially improves the experience. Do not add pinned or scrubbed scenes merely to make the page look advanced.
- Never block interaction while decorative stagger animations are running.

## UX and production quality

For every meaningful UI change, check:

- clear visual hierarchy and obvious primary action
- accessible text contrast
- keyboard navigation and visible focus states
- touch target sizing
- responsive layout on mobile and desktop
- overflow and long-content behavior
- loading, empty, disabled, and error states where relevant
- reduced-motion behavior
- asset sizing and performance
- no unexpected horizontal scrolling
- no regressions to existing booking, navigation, forms, or language behavior

## Review protocol

When auditing existing UI, report findings using a table with these columns:

| Before | After | Why |
| --- | --- | --- |

Prioritize issues in this order:

1. Broken functionality or accessibility
2. Responsive/layout defects
3. Hierarchy and comprehension problems
4. Interaction and motion quality
5. Typography, spacing, visual polish, and delight

Do not perform a wholesale redesign when the task only asks for refinement.

## Shipping standard

A change is not finished until it is coherent with neighboring sections, works at mobile and desktop widths, honors reduced motion, and avoids obvious AI-generated design clichés. The goal is not maximum decoration; it is a Prisma interface that feels intentional, fast, clear, and distinctive.