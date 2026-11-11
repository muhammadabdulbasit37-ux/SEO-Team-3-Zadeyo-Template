# Minimal source map for Codex (read only what the task touches)

| Task | Source owner(s) |
| --- | --- |
| Domain / brand / primary game | `src/config/site-url.mjs`, `src/config/site.ts`, `src/config/game.ts` |
| Homepage structure + English copy | `src/i18n/en.ts` and existing `src/components/` |
| Localized copy | `src/i18n/dictionaries/{es,de,fr}.json`, `src/data/products/locales/`, localized FAQ/blog files |
| Main and supporting products / descriptive copy | `src/data/products.ts`, `src/data/products/exportCopy.ts`, `src/data/catalogCopy.ts` |
| Checkout CTA (no onsite prices or plan selector) | `src/components/product/ProductCheckoutPanel.astro`, `src/components/product/ProductMobileBuyBar.astro` |
| Checkout destination **source of truth** | `src/config/checkout-redirects.mjs` and `/go/` route helpers in `src/config/checkout.ts` |
| SEO/title/keywords/hreflang | `src/config/pageSeo.ts`, `src/config/keywords.ts`, `src/i18n/pageSeo/`, `src/layouts/BaseLayout.astro` |
| Guide/blog content | `src/data/blog/posts/{en,es,de,fr}-articles.ts` |
| Forum | `src/data/forum/`; preserve supplied submissions, use truthful author/source labels |
| Hero/screenshots/gallery | `src/config/gameplayMedia.ts`, `public/images/gameplay/`, `docs/media-slots.md` |
| CTA translation (shared key) | `products.buyNow` in `src/i18n/en.ts` and `src/i18n/dictionaries/{es,de,fr}.json` |
| Check commands | `npm run doctor`, `npm run check:quick`; comprehensive checks in Part 5 |

**Editing order:** identity → local dev visual confirmation → product facts/checkout referrals → site-owned content → translations → SEO → targeted checks. Preserve existing Astro components and styling rather than rebuilding them. Do not copy old pricing claims, Valorant features, old MW4 art or stale guides to a new domain.

| Visual reference / layout guard | `docs/VISUAL_FIDELITY.md`, `npm run visual:baseline`, `npm run visual:check` |
