---
name: gpt-taste
description: Project-local application of Leonxlnx Taste Skill for Prisma Provider. Use for composition, typography, section architecture, expressive frontend presentation, GSAP opportunities, and avoiding generic AI-generated landing-page patterns.
---

# Taste Skill — Prisma Provider

Upstream source: https://github.com/Leonxlnx/taste-skill/tree/main/skills/gpt-tasteskill

Use this skill together with `.agents/skills/prisma-design/SKILL.md`. Prisma product truth, accessibility, brand, and usability take precedence over expressive rules.

## Composition

- Avoid narrow, over-wrapped hero headings. Keep important headings broad, readable, and usually within 2–3 lines on desktop.
- Favor strong editorial hierarchy, deliberate asymmetry, and meaningful negative space over repetitive centered sections.
- Do not fall into automatic left/right alternation from section to section.
- Avoid empty/dead cells in bento or grid layouts; verify spans and density intentionally.
- Prefer 3–5 intentional cards/components over a large field of repetitive cards.
- Do not add generic meta-labels such as `SECTION 01` unless the content system genuinely requires them.
- Do not use decorative pills, badges, floating stamps, or data blocks by default.

## Typography and visual rhythm

- Preserve Prisma's established typography unless a redesign task explicitly authorizes a new stack.
- Use wide text measures for display type and tighter measures for body copy.
- Create distinct visual chapters with spacing, but do not add theatrical empty space that makes the site cumbersome.
- Button contrast must remain unambiguous in every state.

## Motion and GSAP

Static does not mean lifeless, but motion must remain purposeful.

Good opportunities include:
- pinned explanatory sections where pinning materially improves comprehension
- image scale/fade tied to scroll when it supports storytelling
- scrubbed text reveals for selected editorial moments
- card stacking where the interaction remains understandable and performant
- horizontal galleries when the content naturally reads as a sequence

Do not add GSAP pinning, scrub, or stacking merely to make a section look advanced. Booking and task-oriented surfaces should remain straightforward.

## Assets

- Use imagery that supports the real Prisma story and audience.
- Prefer existing project assets before introducing random stock imagery.
- If new images are requested, ensure they fit the established Prisma brand and legal-services context.
- Avoid decorative image treatment that compromises readability or perceived trust.

## Anti-slop sweep

Before shipping, explicitly check for:

- generic AI landing-page composition
- repeated centered sections with identical rhythm
- excessive cards or nested cards
- meaningless badges or pills
- headings wrapping into 5–6 narrow lines
- inconsistent button contrast
- accidental grid holes
- arbitrary gradients or glow effects
- motion with no explanatory or interaction purpose
- horizontal overflow caused by off-screen animation

## Prisma adaptation

Taste should make Prisma feel distinctive, modern, and editorially confident without turning a legal-services website into an experimental portfolio. Expressiveness should reinforce trust, clarity, multilingual accessibility, and conversion.
