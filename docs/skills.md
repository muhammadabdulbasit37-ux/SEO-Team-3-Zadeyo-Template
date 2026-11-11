# Bundled Codex skills

All five original reusable skills are restored in the GitHub-ready template at `.agents/skills/`. Each folder includes its original `SKILL.md`, supporting references, and original license; these are the skills from the supplied source repository, not new generated skill implementations.

| Codex skill | Use in the six-part workflow |
| --- | --- |
| [`copywriting`](../.agents/skills/copywriting/SKILL.md) | Part 1: original, verified commercial copy and homepage/product positioning |
| [`copy-editing`](../.agents/skills/copy-editing/SKILL.md) | Parts 1 and 5: clean up native site copy and remove templated language |
| [`site-architecture`](../.agents/skills/site-architecture/SKILL.md) | Parts 1 and 4: distinct search intents, useful page architecture and internal links |
| [`web-design-guidelines`](../.agents/skills/web-design-guidelines/SKILL.md) | Parts 3 and 5: mobile, typography, image crop, interaction and accessibility checks |
| [`debug-optimize-lcp`](../.agents/skills/debug-optimize-lcp/SKILL.md) | Part 5, only if a measured Largest Contentful Paint issue warrants investigation |

Codex loads repository-local skills from `.agents/skills/`. To apply a particular skill, invoke its name in Codex or ask Codex to read its `SKILL.md`. Skills are optional aids, not a website conversion installer: edit the actual Astro source files and use the live `npm run dev` server. No content packs, approval manifests, draft gates or special staging procedures are required.

The upstream skill authors' license and reference files have been retained. Use only tools actually available in the Codex session. Do not let a browser-only performance skill block Part 5 when Chrome DevTools MCP tools are not connected; report the limitation instead.
