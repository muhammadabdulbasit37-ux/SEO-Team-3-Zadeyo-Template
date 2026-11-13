# Codex stage handoff (compact, local, reusable)

After Part 1, create/update **`.content/handoff.md`** (already ignored by Git) in the converted website clone. Every subsequent prompt reads this **first** and updates only changed fields; it should **not** reread the entire project or repeat finished product/SEO research. Keep this file approximately 30–60 lines, not a transcript or full audit dump. Record verified facts and source references briefly, not full product summaries or entire forum submissions. Do not store passwords, access tokens, private keys or secrets.

## Suggested format

```md
# Conversion handoff
Target: [domain] | [brand] | [game] | current working branch: [branch]
Current stage: [1–6] | dev URL: [actual printed URL or not running]
Verified facts: [short reference to supplied product summary, verified caveats, dependencies]
Research/intent decisions: [homepage target; /cheats/ target; utility intents; chosen guide intents; factual/source caveats]
URLs: [canonical target and four /go/ mappings checked; support routes unchanged]
English source: [complete/partial; source files or sections]
ES/DE/FR: [each complete/partial; untranslated sections]
Forum: [imported/held counts or pending]
Media: [placed/missing slots]
Internal linking: [inventoried/fixed/pending]
Checks: [command + PASS/FAIL/BLOCKED + current source state/date; do not treat old passes as fresh after edits]
Auto-fixed defects: [small list of files and evidence; no transcript]
Approval-needed conflicts: [only owner-rule conflicts, material facts, or destructive decisions]
Open blockers/questions: [only unresolved decisions]
Next stage: [number + shortest next action]
```

## Stage boundaries and efficient verification

- **Part 1:** One product-fact and SEO research pass. Draft substantial **English source content first**, then localize that approved structure into ES/DE/FR. Record the intent-to-URL map and verified facts once. Start one Astro dev server and use focused checks.
- **Parts 2–4:** Reuse the handoff; modify only the forum, media, or internal links respectively. Do not repeat competitor research, copy conversion, or full builds. Check affected routes and functions only.
- **Part 5:** One complete audit sequence on final source: `npm run check:quick`, `npm run typecheck`, `npm test`, `npm run build`, **`npm run validate` once**, then `npm run smoke:runtime` (plus only applicable optional `smoke:browser`, `smoke:pages`, `smoke:lighthouse`, or `smoke:cloudflare`). The `smoke:*` commands deliberately **do not rerun validate**; the older `validate:*` entry points remain available for standalone use. For post-fix source changes, rerun only impacted checks and rebuild/revalidate once at the end if rendered output changed. Record actual results rather than assuming a pass.
- **Part 6:** Use Part 5's handoff/results for the *same exact source revision*; do not rerun audits unless there were later source changes. Keep the local handoff out of Git.

The source template is the visual reference. Preserve its exact existing localized purchase CTA wording, checkout-only UI, support routes, page structure, and five Codex skills. Do not trade useful content or translated-page quality for token savings.
