# Prisma Provider — Design Agent Guidance

For any frontend/UI task in this repository, load the project skill at `.agents/skills/prisma-design/SKILL.md` first, then use the three supporting project-local skills as relevant:

- `.agents/skills/impeccable/SKILL.md`
- `.agents/skills/emil-design-eng/SKILL.md`
- `.agents/skills/gpt-taste/SKILL.md`

These are adapted project-local applications of:

1. Emil Kowalski Design Engineering — interaction polish, purposeful motion, easing, responsiveness, reduced-motion handling, and invisible details.
2. Taste Skill (GPT/Codex-oriented) — stronger composition, editorial hierarchy, anti-generic layouts, cinematic spacing, deliberate GSAP use, and anti-slop constraints.
3. Impeccable — systematic UX/UI critique, accessibility, responsive behavior, design-system consistency, edge cases, performance, and final polish.

## Precedence

When the systems disagree, follow this order:

1. Existing Prisma product truth, brand, content, accessibility, and functional requirements.
2. Impeccable for usability, accessibility, responsive correctness, and production readiness.
3. Emil Kowalski for interaction behavior, timing, easing, and motion quality.
4. Taste for visual composition, layout variance, typography, density, and expressive presentation.

Do not redesign a stable area merely because a skill suggests a more expressive alternative. Preserve existing approved Prisma identity unless the task explicitly asks for redesign.

## Required behavior

- Prefer purposeful motion over decorative motion.
- Keep frequent UI interactions fast; avoid sluggish `ease-in` entrances and broad `transition: all` rules.
- Respect `prefers-reduced-motion`.
- Use motion primarily on `transform` and `opacity` when possible.
- Avoid generic AI design tells: excessive pills, nested cards, repeated centered sections, arbitrary gradient blobs, narrow six-line hero headings, meaningless section labels, and repetitive left/right alternation.
- Maintain strong text/background contrast and keyboard-visible focus states.
- Test desktop and mobile behavior after meaningful layout changes.
- Reuse the existing Prisma design language before introducing new tokens or component styles.
- Keep animations interruptible and responsive; button press states should provide subtle immediate feedback.
- Do not add motion if it obscures content, delays navigation, or harms usability.
- For booking/forms/task UI, favor clarity and speed over spectacle.
- For marketing/storytelling sections, stronger editorial composition and motion are allowed when they support comprehension and conversion.

## Review standard

For UI audits and meaningful refinements, prioritize:

1. functionality and accessibility
2. responsive/layout correctness
3. hierarchy and comprehension
4. interaction/motion quality
5. typography, spacing, polish, and delight

When showing UI review changes, use a markdown table with `Before | After | Why`.

For upstream installation/update commands, run `npm run skills:install` from the project root. The checked-in project-local skills remain the repository-specific source of truth for how those upstream systems are applied to Prisma.
