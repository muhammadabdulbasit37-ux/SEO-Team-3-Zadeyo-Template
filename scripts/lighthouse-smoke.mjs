import fs from 'node:fs/promises';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { withLocalServer } from './qa-server.mjs';

const run = promisify(execFile);
const sample = new Map([
  ['/', 'homepage'],
  ['/cheats/', 'main-product'],
  ['/es/hwid-spoofer/', 'es-hwid-gallery'],
]);
const requested = process.argv.slice(2);
const routes = requested.length ? [...new Set(requested)] : [...sample.keys()];
for (const route of routes) {
  if (!sample.has(route)) throw new Error(`Choose a Lighthouse sample route: ${[...sample.keys()].join(', ')}`);
}

const outputRoot = path.resolve('.astro/lighthouse-qa');
await fs.mkdir(outputRoot, { recursive: true });
const outputDir = await fs.mkdtemp(path.join(outputRoot, new Date().toISOString().replace(/[:.]/g, '-') + '-'));
const { version } = JSON.parse(await fs.readFile('node_modules/lighthouse/package.json', 'utf8'));
const summary = {
  lighthouseVersion: version,
  profile: 'Mobile, simulated throttling, local production build',
  fieldCoreWebVitals: 'Not measured',
  pages: routes.map(route => ({
    route, url: null, status: 'missing', lcpMs: null, cls: null, tbtMs: null, accessibilityFindings: null,
  })),
};

try {
  await withLocalServer(() => ['scripts/serve.mjs'], { ENABLE_CANONICAL_REDIRECT: '0' }, async origin => {
    for (const page of summary.pages) page.url = origin + page.route;
    for (const page of summary.pages) {
      const reportBase = path.join(outputDir, sample.get(page.route));
      console.log(`Lighthouse ${version} mobile: ${page.url}`);
      try {
        const response = await fetch(page.url, { redirect: 'manual', signal: AbortSignal.timeout(10000) });
        await response.body?.cancel();
        if (response.status !== 200) throw new Error(`Expected HTTP 200, received ${response.status}`);

        // Use a fresh headless Chrome for each page and keep network requests on loopback.
        await run(process.execPath, [
          'node_modules/lighthouse/cli/index.js', page.url, '--quiet',
          '--form-factor=mobile', '--throttling-method=simulate', '--only-categories=performance,accessibility',
          '--output=json', '--output=html', `--output-path=${reportBase}`,
          '--chrome-flags=--headless --proxy-server=http://127.0.0.1:9 --proxy-bypass-list=127.0.0.1',
        ], { windowsHide: true });

        const report = JSON.parse(await fs.readFile(reportBase + '.report.json', 'utf8'));
        page.reports = ['json', 'html'].map(ext => path.basename(reportBase) + '.report.' + ext);
        if (report.runtimeError) throw new Error(report.runtimeError.message);
        if (report.finalDisplayedUrl !== page.url) throw new Error(`Unexpected final URL: ${report.finalDisplayedUrl}`);

        const metric = id => Number.isFinite(report.audits[id]?.numericValue) ? report.audits[id].numericValue : null;
        page.lcpMs = metric('largest-contentful-paint');
        page.cls = metric('cumulative-layout-shift');
        page.tbtMs = metric('total-blocking-time');
        const accessibility = report.categories.accessibility;
        if (accessibility && accessibility.score !== null) {
          page.accessibilityFindings = accessibility.auditRefs.flatMap(({ id }) => {
            const audit = report.audits[id];
            if (audit?.score !== 0 && audit?.scoreDisplayMode !== 'error') return [];
            return [{
              id, title: audit.title, error: audit.errorMessage,
              nodes: (audit.details?.items ?? []).flatMap(({ node }) => node ? [{
                selector: node.selector, explanation: node.explanation,
              }] : []),
            }];
          });
        }
        if ([page.lcpMs, page.cls, page.tbtMs, page.accessibilityFindings].includes(null)) {
          throw new Error('Lighthouse did not produce all requested measurements');
        }
        page.status = 'measured';
      } catch (error) {
        page.error = error.stderr?.trim() || error.message;
        console.error(`${page.url}: ${page.error}`);
        process.exitCode = 1;
      }
    }
  });
} catch (error) {
  summary.error = error.message;
  process.exitCode = 1;
} finally {
  await fs.writeFile(path.join(outputDir, 'summary.json'), JSON.stringify(summary, null, 2) + '\n');
  console.log(JSON.stringify(summary, null, 2));
  console.log(`Reports: ${path.relative(process.cwd(), outputDir)}`);
}
