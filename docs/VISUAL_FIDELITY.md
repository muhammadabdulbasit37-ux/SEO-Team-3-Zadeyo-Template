# Visual fidelity contract — preserve the template as the example

The supplied original Astro website is the **reference for alignment and styling**. Site conversion is primarily a **data, content, metadata and media replacement**, not a redesign. Keep the same DOM/component architecture and established UI: header/footer, page hierarchy, section order, maximum container width (`max-w-6xl` and `px-5` where already used), column counts and responsive breakpoints, card/bento placement, grid/flex gap, section padding, fonts/type scale, color palette, border radii, shadows, buttons, icons, carousel controls, scroll/reveal effects and sticky checkout controls. Preserve existing logo/favicon and protected utility media unless the owner asks otherwise.

## Rules for content without breaking alignment

- **Hero:** retain eyebrow above H1, split H1/accent styling, a compact supporting paragraph, primary button, image slider, and stat tiles; don't add extra lines of CTA text, badges or buttons that distort its two-column grid.
- **Features:** keep the number, order and bento/grid span classes of cards unless actual game features make a slot irrelevant; put concise copy in compact cards, with long explanations on product/detail pages. Never cut substantial detail from the site simply to shorten cards.
- **Products & checkout:** preserve card order, consistent card heights, headings, checkout panel position and final CTA alignment. Replace the old pricing/plan controls with a compact checkout explanation and one CTA; do not restore visible prices or subscription pickers. Localize CTA text as configured. No hardcoded CSS widths to make one language fit.
- **Product detail:** preserve gallery/checkout two-column hierarchy, image aspect ratios, highlights, feature list, long-form description, setup/requirements, related content and FAQ. Length belongs in rich text sections, not the hero or checkout buttons.
- **Footer/blog/forum:** use existing cards, text columns, image slots, lists and pagination; do not replace or reorganize layouts for SEO copy.
- **Translations:** inspect longest EN/ES/DE/FR labels, avoid forced `whitespace-nowrap` on long translated content, keep responsive wrapping and equal card alignment. Change wording first for fit; if a legitimate UI defect remains, make a narrowly scoped responsive CSS fix that does not change the desktop reference.
- **Media:** preserve aspect ratio, container dimensions, focal point and object-fit behavior; do not enlarge/shift surrounding text columns to accommodate an image.
- **No layout shortcuts:** no global `overflow-x:hidden` to hide overflow, no arbitrary heights/margins/transforms for a single screenshot, no component duplication, no replacing the design system, no spacing drift.

## Lightweight verification sequence

1. **Before Part 1 source changes**, while the clean scaffold dev server is running, run `npm run visual:baseline -- <actual-local-url>` once. Screenshots and geometry are stored at `.astro/visual-qa/baseline/` (ignored by Git). Don't commit them.
2. **During Parts 1–4**, preview only the affected page(s) on mobile and desktop, fix content fit and avoid repeated full audits.
3. **Part 5**, run `npm run visual:check -- <actual-local-url>` once after conversion; review any failures and before/after screenshots for the homepage, main product, and supporting products. Check one tablet viewport (768px), plus other locales for long-word issues. Fix source problems and rerun only necessary checks.
4. Prioritize unchanged **component hierarchy, section order, alignment axes, container widths, responsive behavior**, then copy depth, readability and performance. Different copy may legitimately change vertical page length; that's not a layout regression.

The visual checker is a regression aid, not pixel-perfect certification. If browser tools aren't present, perform manual screenshot comparison and clearly report unverified checks.

## Protected, owner-approved differences (do not "improve" away)

- Keep the original comparison with green checks for this storefront and **X** icons for **Other providers**. Localized **Varies** is the explanatory tooltip/accessibility label; never replace the X with a generic neutral card or assert specific competitor deficiencies without evidence.
- Keep the current mobile header uncluttered, including the compact wordmark treatment under narrow viewports. Preserve the catalog's concise heading and keep obsolete Limited/scarcity badges out. Align marquee/stat icons to what their localized labels actually mean.
- Navbar CTA and hero primary CTA use the **direct** main-product referral (`CHECKOUT_URLS.primary`); product cards/details continue using their defined routes. The localized product CTA text is a fixed design feature.
- Only ask approval when a needed fix would change these protected decisions or another explicit user rule. Routine overflow/functional bugs should be fixed and retested without asking.
