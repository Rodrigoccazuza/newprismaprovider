---
name: emil-design-eng
description: Project-local application of Emil Kowalski's design-engineering principles for Prisma Provider UI polish, interaction quality, motion, and responsive component behavior. Use for frontend interaction, motion, micro-interaction, component-polish, and animation decisions.
---

# Emil Kowalski Design Engineering — Prisma Provider

Upstream source: https://github.com/emilkowalski/skills/tree/main/skills/emil-design-eng

Use this skill together with `.agents/skills/prisma-design/SKILL.md`. Prisma product truth, accessibility, brand, and functional requirements always take precedence.

## Core standard

Build interfaces that feel immediate, deliberate, and quietly polished. Invisible interaction details should compound into a better experience rather than call attention to themselves.

## Animation decision framework

Before adding motion, decide whether it improves spatial understanding, communicates state, provides feedback, explains a feature, or prevents a jarring change. Do not animate simply because animation is possible.

- Very frequent interactions should be instant or nearly instant.
- Prefer `ease-out` for entrances and exits that need immediate response.
- Prefer `ease-in-out` for movement or morphing that stays on screen.
- Prefer linear timing for continuous motion such as marquees.
- Avoid ordinary UI entrances that use `ease-in`.
- Keep normal UI motion under roughly 300ms unless the motion is explanatory/marketing content.
- Prefer strong custom easing curves rather than weak browser defaults.
- Prefer CSS transitions for interruptible UI; use keyframes for predetermined sequences.
- Prefer `transform` and `opacity` for performant animation.
- Never use broad `transition: all` when exact properties can be named.
- Respect `prefers-reduced-motion`.

Recommended project easing tokens when no existing Prisma token is more appropriate:

```css
--ease-out: cubic-bezier(0.23, 1, 0.32, 1);
--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
--ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);
```

## Interaction craft

- Give pressable controls subtle immediate feedback, usually around `scale(0.97)` where appropriate.
- Do not animate from `scale(0)`; subtle scale plus opacity is more natural.
- Popovers should transform from their trigger/origin. Centered modals should remain centered.
- Tooltips may use an initial delay, but subsequent adjacent tooltip exploration should feel immediate.
- Keep hover effects gated to devices that actually support hover: `(hover: hover) and (pointer: fine)`.
- Gesture-driven interactions should remain interruptible and preserve momentum where practical.
- Do not block navigation or input while decorative motion is running.

## Prisma-specific application

- Use motion to clarify booking steps, selected states, navigation changes, expandable content, and scroll-driven storytelling only where it materially helps.
- Keep booking and form interactions faster and quieter than marketing-page moments.
- Do not let animation obscure legal/service information or reduce readability.
- Maintain the current Prisma visual language; do not introduce unrelated motion styles just to demonstrate technique.

## Review format

When reviewing UI, use a markdown table:

| Before | After | Why |
| --- | --- | --- |

Prioritize interaction purpose, duration, easing, interruption behavior, reduced-motion support, and perceived responsiveness.
