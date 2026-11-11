import fs from 'node:fs';
import path from 'node:path';
import { SITE_DOMAIN, SITE_URL } from '../src/config/site-url.mjs';
import { CHECKOUT_PATH_REDIRECTS } from '../src/config/checkout-redirects.mjs';
const root = process.cwd();
for (const file of ['package.json', 'astro.config.mjs', 'src/pages/index.astro']) {
  if (!fs.existsSync(path.join(root,file))) {
    console.error(`Not at Astro repo root (${file} missing): ${root}`);
    process.exit(1);
  }
}
console.log(`Root: ${root}`);
console.log(`Configured source canonical: ${SITE_URL} (${SITE_DOMAIN})`);
console.log(`Checkout routes: ${[...new Set([...CHECKOUT_PATH_REDIRECTS.keys()].filter(x=>x.endsWith('/')))].join(', ')}`);
console.log(`Build snapshot dist/: ${fs.existsSync('dist')?'present (STALE until rebuilt)':'not built'}`);
console.log('LIVE preview: npm run dev -- --host 127.0.0.1 (read actual URL from terminal).');
console.log('npm start / npm run preview serve BUILT output, not live edits. Git staging does not affect HMR.');
