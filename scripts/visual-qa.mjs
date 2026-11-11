// Baseline vs converted layout metrics + screenshots, using the project's existing playwright-core.
// Runs against an already running LOCAL Astro dev server. Does not modify site files.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { chromium } from 'playwright-core';

const [mode, rawUrl = 'http://127.0.0.1:4321'] = process.argv.slice(2);
assert.ok(['baseline', 'check'].includes(mode), 'Use npm run visual:baseline or visual:check -- http://127.0.0.1:4321');
const origin = new URL(rawUrl);
assert.ok(['localhost', '127.0.0.1', '[::1]'].includes(origin.hostname), 'Visual QA may only visit local addresses');
const root = path.resolve('.astro/visual-qa');
const outDir = path.join(root, mode);
const baselineFile = path.join(root, 'baseline.json');
const reportFile = path.join(root, 'comparison.json');
const paths = ['/', '/cheats/', '/hwid-spoofer/', '/skin-changer/', '/cloud-dma/'];
const widths = [390, 1440];
const records = {};
const failures = [];
const browser = await chromium.launch({ channel: process.env.QA_BROWSER_CHANNEL || 'chrome', headless: true });
fs.mkdirSync(outDir, { recursive: true });
try {
  for (const width of widths) {
    const context = await browser.newContext({ viewport: { width, height: 900 }, reducedMotion: 'reduce' });
    await context.route('**/*', route => {
      const u = new URL(route.request().url());
      return u.origin === origin.origin ? route.continue() : route.abort();
    });
    for (const currentPath of paths) {
      const page = await context.newPage();
      const key = `${width}:${currentPath}`;
      try {
        const response = await page.goto(new URL(currentPath, origin).href, { waitUntil: 'domcontentloaded', timeout: 25000 });
        if (!response || response.status() !== 200) { failures.push(`${key}: HTTP ${response?.status() ?? 'no response'}`); continue; }
        await page.locator('h1').first().waitFor({ state: 'visible', timeout: 10000 });
        await page.evaluate(() => document.fonts.ready);
        // Short stabilization delay for existing page reveal scripts; no need for a network-idle wait.
        await page.waitForTimeout(350);
        records[key] = await page.evaluate(() => {
          const selectors = ['header', '#main-content', 'h1', '#hero', '#features', '#products', '#why-us', '#blog', '#faq', '.product-detail', '.product-detail-hero__grid', 'footer'];
          const measure = el => {
            const r = el.getBoundingClientRect();
            return { left: Math.round(r.left), width: Math.round(r.width), top: Math.round(r.top), height: Math.round(r.height) };
          };
          const anchors = Object.fromEntries(selectors.map(selector => [selector, (document.querySelector(selector) && measure(document.querySelector(selector)))]).filter(([, box]) => box));
          const headingsClipped = [...document.querySelectorAll('h1,h2,h3')]
            .filter(el => el.getClientRects().length && getComputedStyle(el).visibility !== 'hidden')
            .filter(el => el.scrollWidth > el.clientWidth + 4 && ['hidden', 'clip'].includes(getComputedStyle(el).overflowX))
            .slice(0, 8).map(el => el.textContent.trim().slice(0, 65));
          return {
            width: innerWidth, scrollWidth: document.documentElement.scrollWidth,
            h1Count: document.querySelectorAll('h1').length,
            anchors,
            headingsClipped,
            homepageSectionOrder: [...document.querySelectorAll('main section[id]')].map(el => el.id),
          };
        });
        await page.screenshot({ path: path.join(outDir, `${width}-${currentPath.replaceAll('/', '-') || 'home'}.png`), fullPage: true, animations: 'disabled' });
        if (records[key].scrollWidth > width + 2) failures.push(`${key}: horizontal overflow ${records[key].scrollWidth}px > ${width}px`);
        if (records[key].h1Count !== 1) failures.push(`${key}: expected exactly one H1`);
        if (records[key].headingsClipped.length) failures.push(`${key}: clipped headings: ${records[key].headingsClipped.join(' / ')}`);
      } catch (error) {
        failures.push(`${key}: ${error.message.split('\n')[0]}`);
      } finally { await page.close(); }
    }
    await context.close();
  }
} finally { await browser.close(); }

if (mode === 'baseline') {
  fs.writeFileSync(baselineFile, JSON.stringify(records, null, 2));
  console.log(`Saved ${Object.keys(records).length} reference page/viewport measures and screenshots in ${outDir}`);
} else {
  if (!fs.existsSync(baselineFile)) {
    failures.push('Missing baseline; capture the original template BEFORE editing with npm run visual:baseline');
  } else {
    const baseline = JSON.parse(fs.readFileSync(baselineFile, 'utf8'));
    for (const [key, old] of Object.entries(baseline)) {
      const now = records[key];
      if (!now) { failures.push(`${key}: no current data`); continue; }
      for (const selector of ['header', '#main-content', 'h1', '#hero', '#features', '#products', '#why-us', '#blog', '#faq', '.product-detail', '.product-detail-hero__grid', 'footer']) {
        const o = old.anchors[selector], n = now.anchors[selector];
        if (Boolean(o) !== Boolean(n)) { failures.push(`${key}: required layout anchor changed: ${selector}`); continue; }
        if (o && n && (Math.abs(o.left - n.left) > 8 || Math.abs(o.width - n.width) > 8))
          failures.push(`${key}: ${selector} moved horizontally or changed width (before x=${o.left} w=${o.width}; after x=${n.left} w=${n.width})`);
      }
      if (JSON.stringify(old.homepageSectionOrder) !== JSON.stringify(now.homepageSectionOrder))
        failures.push(`${key}: section order changed`);
    }
  }
  fs.writeFileSync(reportFile, JSON.stringify({ checked: Object.keys(records).length, failures }, null, 2));
  console.log(`Visual QA: ${Object.keys(records).length} views; ${failures.length} issues. Review reference/current screenshots in ${root}`);
}
if (failures.length) { console.error(failures.join('\n')); process.exitCode = 1; }
