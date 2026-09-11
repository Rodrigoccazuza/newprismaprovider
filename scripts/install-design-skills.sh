#!/usr/bin/env bash
set -euo pipefail

printf '\nInstalling Emil Kowalski design-engineering skills...\n'
npx skills@latest add emilkowalski/skills

printf '\nInstalling Taste Skill for GPT/Codex...\n'
npx skills@latest add https://github.com/Leonxlnx/taste-skill --skill gpt-taste

printf '\nInstalling Impeccable for project-local Codex use...\n'
npx impeccable install --providers=codex --scope=project

printf '\nDesign skills installed. Restart/reload your coding agent so project-local skills are discovered.\n'
