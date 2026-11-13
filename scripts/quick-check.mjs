import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { CHECKOUT_URLS, resolveCheckoutPathRedirect, checkoutDestination } from '../src/config/checkout-redirects.mjs';

// Fast, read-only confidence check. No browser, network, npm install or Astro build required.
const keys = ['primary', 'hwidSpoofer', 'skinChanger', 'cloudDma'];
const paths = ['/go/cheats/', '/go/hwid-spoofer/', '/go/skin-changer/', '/go/cloud-dma/'];
for (let i = 0; i < keys.length; i++) {
  const value = CHECKOUT_URLS[keys[i]];
  assert.equal(new URL(value).protocol, 'https:', `${keys[i]} needs HTTPS referral URL`);
  assert.equal(resolveCheckoutPathRedirect(paths[i]), value, `${paths[i]} missing redirect`);
}
const dma = new URL(checkoutDestination(CHECKOUT_URLS.cloudDma, '?plan=monthly&campaign=demo'));
assert.notEqual(dma.searchParams.get('plan'), 'monthly', 'Cloud DMA must not accept monthly');
const en = readFileSync('src/i18n/en.ts', 'utf8');
assert.match(en, /buyNow: 'View Purchase Options'/);
for (const [lang, expected] of Object.entries({es:'Ver opciones de compra',de:'Kaufoptionen ansehen',fr:'Voir les options d’achat'})) {
  const v = JSON.parse(readFileSync(`src/i18n/dictionaries/${lang}.json`, 'utf8'));
  assert.equal(v.products.buyNow, expected, `${lang}: checkout CTA missing`);
}
assert.ok(!existsSync('src/data/productPricing.ts'), 'Old plan selector module must be removed');
const panel = readFileSync('src/components/product/ProductCheckoutPanel.astro', 'utf8');
assert.ok(!panel.includes('data-sw-radio-group') && !panel.includes('checkoutTotal') && !panel.includes('priceUsd'), 'Checkout panel must not contain a plan/price selector');
assert.ok(panel.includes('href={product.buyUrl}') && panel.includes('data-checkout-buy'), 'Checkout panel must link directly to /go/');
assert.ok(existsSync('.agents/skills/copywriting/SKILL.md'), 'Skills folder missing');

const agentRules = readFileSync('AGENTS.md', 'utf8');
const readme = readFileSync('README.md', 'utf8');
assert.match(agentRules, /six external prompts/, 'AGENTS.md must name the six-part workflow');
assert.match(readme, /six external prompt/, 'README.md must name the six-part workflow');
assert.match(agentRules, /View Purchase Options/, 'AGENTS.md must preserve the live CTA');
for (const removed of [
  'src/components/product/ProductReviews.astro', 'src/components/ReviewList.astro',
  'src/data/reviews.ts', 'src/data/reviews.json', 'src/i18n/reviews.ts',
  'scripts/import-reviews.mjs', 'scripts/reviews.test.mjs',
]) {
  assert.ok(!existsSync(removed), `${removed} is obsolete and must not be restored`);
}
const { resolveOutboundRedirect, SUPPORT_CHANNELS } = await import('../src/config/outbound-redirects.mjs');
for (const { path, destination } of Object.values(SUPPORT_CHANNELS)) {
  assert.equal(resolveOutboundRedirect(path, ''), destination, `${path}: support redirect mismatch`);
}


// Owner-approved UI contract for the reusable starter.
const navbar = readFileSync('src/components/Header.astro', 'utf8');
const hero = readFileSync('src/components/HeroSection.astro', 'utf8');
assert.match(navbar, /const productUrl = CHECKOUT_URLS\.primary;/, 'Navbar must use direct main referral');
assert.match(hero, /href=\{CHECKOUT_URLS\.primary\}/, 'Hero CTA must use direct main referral');
assert.ok(!hero.includes('data-scroll-target="products"'), 'Hero direct CTA must not be intercepted by product-section scroll logic');
const comparison = readFileSync('src/components/WhySetupSection.astro', 'utf8');
assert.match(comparison, /Icon name="x"/, 'Comparison must keep X icons');
assert.match(comparison, /why\.variesLabel/, 'Comparison must retain localized Varies tooltip/accessibility text');
const productHeader = readFileSync('src/components/product/ProductDetailHeader.astro', 'utf8');
assert.ok(!productHeader.includes('Limited</Badge>'), 'Obsolete Limited badge must stay removed');
assert.ok(!en.includes('Limited slots'), 'Do not restore unconfirmed scarcity copy');
for (const l of ['es', 'de', 'fr']) {
  const copy = JSON.parse(readFileSync(`src/i18n/dictionaries/${l}.json`, 'utf8'));
  assert.ok(copy.whyUs.variesLabel && copy.whyUs.otherLabel, `${l}: comparison labels missing`);
  assert.notEqual(copy.cheats.items[0].variant, 'limited', `${l}: obsolete Limited variant`);
}

console.log('Quick check passed: 4 checkout routes, 3 support routes, lifetime-only DMA, localized CTAs, checkout-only UI, 6-part workflow, no reviews, Codex skills.');
console.log('Note: this is NOT a full build, live browser, SEO, price-verification or deployment audit.');
