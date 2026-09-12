---
name: impeccable
description: Project-local application of Impeccable for Prisma Provider frontend design, critique, accessibility, responsive behavior, hierarchy, resilience, performance, UX copy, edge cases, and final polish.
metadata:
  upstream: pbakaus/impeccable
---

# Impeccable — Prisma Provider

Upstream source: https://github.com/pbakaus/impeccable

Use this skill together with `.agents/skills/prisma-design/SKILL.md`. The brief and Prisma product truth win. Preserve functionality, content, approved brand identity, and accessibility unless the task explicitly asks for redesign.

## Operating mode

For the Prisma marketing/booking website, distinguish between:

- **Persuade:** landing-page and campaign surfaces where design should earn attention and action.
- **Operate:** booking, forms, selectors, navigation, and task-oriented UI where clarity and native expectations outrank expression.
- **Read:** legal, explanatory, FAQ, and service-information areas where comprehension comes first.

Do not apply one visual treatment indiscriminately across all modes.

## Quality floor

Before shipping a meaningful UI change, check all of the following:

- visual hierarchy and an obvious primary action
- text/background contrast
- semantic structure and keyboard navigation
- visible focus states
- touch target sizing
- responsive behavior at mobile and desktop widths
- overflow, long-content, and localization resilience
- loading, empty, disabled, success, and error states where relevant
- reduced-motion behavior
- image sizing and performance
- no accidental horizontal scrolling
- no regression to booking, navigation, forms, language selection, or links

## Design behavior

- The brief wins over generic best-practice aesthetics.
- Refinement should preserve the incumbent visual identity; redesign may replace the visual world but must preserve product truth and function.
- Avoid timid, generic results when the task explicitly asks for a stronger design direction.
- Avoid decoration that does not improve hierarchy, comprehension, identity, or interaction.
- Prefer a small number of strong visual ideas over many weak effects.
- Inspect neighboring sections so a local improvement still feels like one product.

## Prisma-specific guardrails

- Preserve established Prisma green, multilingual/legal-service context, and the site's current design language unless the request explicitly changes them.
- Never sacrifice readability of immigration/legal-service content for visual effects.
- Booking interactions must remain obvious, fast, and accessible.
- Decorative motion must not delay a task.
- New cards, gradients, pills, badges, or effects must have a clear compositional or functional reason.

## Review protocol

When auditing UI, prioritize findings in this order:

1. broken functionality or accessibility
2. responsive/layout defects
3. hierarchy and comprehension problems
4. interaction and motion quality
5. typography, spacing, visual polish, and delight

When presenting a before/after UI review, use:

| Before | After | Why |
| --- | --- | --- |

## Shipping standard

A change is not finished until it works coherently with surrounding sections, behaves correctly on mobile and desktop, honors reduced motion, handles realistic content, and avoids obvious AI-generated design clichés.
