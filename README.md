# Reusable Astro + Codex Website Template — Efficient Edition

Astro 7 source starter with the existing purple UI, responsive product pages, checkout CTAs and redirect flows, blog, FAQ, forum, EN/ES/DE/FR, and Cloudflare integration. It includes five repository-local Codex skills under **`.agents/skills/`**. This is a **scaffold**: MW4 data, copy, assets, and checkout destinations must be replaced/verified for each new website. The product CTA labels and the external support-card layout are already configured; keep them unchanged during conversion. It is not publish-ready as-is.

## Reuse workflow

1. Push this **source repository** to a separate GitHub template repository, preserving the hidden `.agents` folder. Mark as a GitHub template, then **Use this template** for a new site; don't modify the master in place.
2. Clone the new site, open its root folder in Codex, and run `npm ci` with **Node 22.19+**.
3. Start **one** `npm run dev -- --host 127.0.0.1` and open the URL Astro prints (normally `http://127.0.0.1:4321/`). Changes to `src/` hot-reload. `npm run preview`, `npm start` and `dist/` do **not** show live edits until rebuilt.
4. Supply the six external prompt TXT files sequentially. **They are intentionally not committed inside this template.** Part 1 accepts a game-specific product summary and four referral destinations; Part 6 is the only authorized Git push.
5. Part 1 researches verified product facts/search intent **once**, drafts English first, then localizes into ES/DE/FR. Record the small decision summary in ignored `.content/handoff.md` (format: `docs/CODEX_HANDOFF.md`). Parts 2–4 read that handoff and do only focused checks and dev preview. Part 5 performs the single comprehensive build, tests, SEO/link/browser audit; fix failures before Part 6.

## Commercial copy and prices

- No onsite pricing or plan selection: product CTAs route to checkout for up-to-date options and prices. Part 1 must remove inherited price claims from all visible content and metadata.
- Final purchase CTAs use localized **View Purchase Options** wording. Navbar primary CTA and the hero "View products" button go directly to the configured main checkout referral URL, not an internal product page. `/go/cheats/`, `/go/hwid-spoofer/`, `/go/skin-changer/`, `/go/cloud-dma/` map to destinations in `src/config/checkout-redirects.mjs`; Cloud DMA supports lifetime-only. Describe checkout/support fulfillment truthfully and observe any applicable commercial transparency requirements; no generic supplier or commission copy is required in unrelated marketing sections.
- There is no review-import stage or product-review display; do not introduce review sections, review schema or fake ratings. The remaining workflow is: conversion → forum → media → internal links → final audit → GitHub push.
- Preserve page architecture and visual components. Create useful, specific copy for each new audience; simply swapping game names does not produce valuable uniqueness. Maintain accurate factual specs and full translations.

## Quick checks and full audit

```bash
npm run doctor
npm run check:quick    # lightweight Node-only checkout/CTA/config smoke checks
# Part 5 (once converted, and after relevant fixes)
npm run typecheck
npm test
npm run build
npm run validate        # once: prepares the validation output used by smoke checks
npm run smoke:runtime   # does NOT rerun validate
```

Optional `npm run smoke:browser`, `npm run smoke:pages`, `npm run smoke:lighthouse`, and `npm run smoke:cloudflare` use the same validated build; browser/Lighthouse/Cloudflare tooling must be available. Existing `validate:*` wrappers remain for standalone checks but rerun validation, so avoid chaining them in the full audit. Do not claim a pass without running the check. Node 22.19+ and `npm ci` required for a complete build. `npm run check:conversion -- yoursite.com 'YOUR BRAND' 'MW4|Modern Warfare 4|mw4cheat.net'` checks for old site remnants.

See **`AGENTS.md`**, **`docs/CODEX_MAP.md`**, and **`docs/CODEX_HANDOFF.md`** for brief workflow guardrails, source locations and compact stage handoffs. No content installer, release approval system or draft mode is included. This downloadable ZIP omits Git history; extract over a clean clone to preserve your own Git remote. Never commit `node_modules`, `.env`, `.astro`, `.content`, or `dist`.

## GitHub initial push (one time)

```bash
git init
git branch -M main
git add -A
git status --short
git commit -m "Initialize reusable Astro template"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-TEMPLATE-REPO.git
git push -u origin main
```

Create the destination as an empty repository. Confirm `.agents/skills/` is tracked before pushing. No upstream GitHub account or repository is included in the ZIP. For an existing GitHub repository, copy the updated source files into the existing clone instead of reinitializing Git.

**Updating an existing clone:** Back up/stash any local work, copy the new ZIP's files into the current clone (preserve its `.git/`), and delete these obsolete review-only files if they remain: `src/components/product/ProductReviews.astro`, `src/components/ReviewList.astro`, `src/data/reviews.ts`, `src/data/reviews.json`, `src/i18n/reviews.ts`, `scripts/import-reviews.mjs`, and `scripts/reviews.test.mjs`. Run `npm run check:quick`, review `git status` and diff, then commit/push to your existing remote. Do not upload old `.git` metadata from a ZIP.

## Visual fidelity — reference layout

The **original Astro design is the visual specification**. See `docs/VISUAL_FIDELITY.md` for what must stay fixed and the content-length rules for existing slots. With Chrome installed, capture the clone's initial geometry before conversion, then check it after conversion:

```bash
# Start the existing Astro dev server in another terminal. Use the URL Astro prints.
npm run visual:baseline -- http://127.0.0.1:4321
# After conversion and localization (Part 5):
npm run visual:check -- http://127.0.0.1:4321
```

This optional test checks the mobile/desktop structural layout, section order, alignment anchor positions, missing elements, heading clipping, and horizontal page overflow. It saves screenshots/measurements in ignored `.astro/visual-qa/`. Do **not** compare screenshot pixels: translated/rewritten copy changes page heights. Review representative before/after screenshots visually. If Chrome/Playwright is unavailable, manually check the original and converted pages at 390px, 768px, and 1440px and record the limitation. These checks help detect regressions but cannot guarantee perfect rendering on every device.

### Intentional checkout-only layout exception

The original two-column product layout, card styles, responsive grid and hero/gallery structure are retained. The ONLY intentional commercial layout change is removing the old onsite price/plan selector and price comparison rows. Product detail pages instead keep a styled right-column checkout panel with one localized “View Purchase Options” button. The external destination displays current options and pricing. Do not reintroduce price/plan UI during Codex conversions.

## Restart rules — current approved storefront

The checkout card UI, hero layout, comparison X/check icon columns and native localized CTA labels are **not** to be rewritten by Codex. Navbar/hero CTAs go directly to the configured main referral, while product checkout panels use the four existing `/go/` destinations. The comparison X's explanatory tooltip and screen-reader label say **Varies**; this is not a factual assertion that all competitors lack a feature. The mobile header is compact on narrow screens. Old Limited/scarcity labels were removed. Review pages/import tools remain removed.

**Issue handling:** The six prompts and `AGENTS.md` now require automatic repair of proven source, responsive, accessibility, or SEO defects, with minimal changes and targeted retesting. Only owner-rule conflicts, missing essential business facts, and destructive operations need approval. This is not permission to redesign the page or rewrite protected components.
