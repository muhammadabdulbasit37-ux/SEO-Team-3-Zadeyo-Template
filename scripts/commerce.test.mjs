import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';
import { CHECKOUT_URLS } from '../src/config/checkout-redirects.mjs';

const source = fs.readFileSync(new URL('../src/config/checkout.ts', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext } }).outputText
  .replace("'./checkout-redirects.mjs'", JSON.stringify(new URL('../src/config/checkout-redirects.mjs', import.meta.url).href));
const checkout = await import('data:text/javascript;base64,' + Buffer.from(compiled).toString('base64'));

test('ordinary build cannot invoke submission or deployment commands', () => {
  const pkg = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
  assert.doesNotMatch(pkg.scripts.build, /indexnow|wrangler|deploy|submit/);
  assert.match(pkg.scripts['indexnow:submit'], /npm run validate && node scripts\/indexnow.mjs/);
});

test('checkout normalization retains plan/query/hash for every configured product', () => {
  for (const [key, url] of Object.entries(CHECKOUT_URLS)) {
    const expected = checkout.checkoutPath(key);
    for (const plan of ['monthly', 'lifetime']) {
      assert.equal(checkout.resolveCheckoutHref(url + `&plan=${plan}#checkout`), expected + `?plan=${plan}#checkout`);
      assert.equal(checkout.resolveCheckoutHref(expected + `?plan=${plan}#checkout`), expected + `?plan=${plan}#checkout`);
    }
  }
  assert.equal(checkout.resolveCheckoutHref('/go/cheats/?plan=monthly'), checkout.PRIMARY_CHECKOUT_PATH + '?plan=monthly');
  assert.equal(checkout.resolveCheckoutHref('https://zadeyo.com/go/BASIT?to=%2Fproducts%2Funknown&plan=monthly'), 'https://zadeyo.com/go/BASIT?to=%2Fproducts%2Funknown&plan=monthly');
});

test('checkout-only panel has one action and no plan/price controls', () => {
  const panel = fs.readFileSync(new URL('../src/components/product/ProductCheckoutPanel.astro', import.meta.url), 'utf8');
  const mobile = fs.readFileSync(new URL('../src/components/product/ProductMobileBuyBar.astro', import.meta.url), 'utf8');
  const catalog = fs.readFileSync(new URL('../src/pages/products/index.astro', import.meta.url), 'utf8');
  assert.match(panel, /href=\{product\.buyUrl\}/);
  assert.match(panel, /data-checkout-buy/);
  assert.doesNotMatch(panel, /data-sw-radio-group|data-checkout-total|priceUsd|plan=/);
  assert.match(mobile, /href=\{product\.buyUrl\}/);
  assert.doesNotMatch(mobile, /priceUsd|formatPlanPrice|checkoutUrlWithPlan/);
  assert.doesNotMatch(catalog, /catalog-price|priceRow|formatPlanPrice/);
});
