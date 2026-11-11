import fs from 'node:fs';
import path from 'node:path';
import { SITE_DOMAIN } from '../src/config/site-url.mjs';
const [domain, brand, oldWords = ''] = process.argv.slice(2);
if (!domain || !brand) {
  console.error("Usage: npm run check:conversion -- example.com 'BRAND NAME' 'MW4|Modern Warfare 4|mw4cheat.net'");
  process.exit(2);
}
const errors = [], notices = [];
if (SITE_DOMAIN.toLowerCase() !== domain.toLowerCase()) errors.push(`site domain: expected ${domain} but source has ${SITE_DOMAIN}`);
const site = fs.readFileSync('src/config/site.ts', 'utf8');
if (!site.includes(brand)) errors.push(`src/config/site.ts is missing brand ${brand}`);
const files = [];
for (const folder of ['src', 'public']) {
 const walk = (dir) => {
  for (const item of fs.readdirSync(dir,{withFileTypes:true})) {
   const full = path.join(dir,item.name);
   if (item.isDirectory()) walk(full);
   else if (/\.(?:astro|ts|mjs|js|json|txt|xml|html|webmanifest)$/i.test(full) || path.basename(full)==='robots.txt') files.push(full);
  }
 };
 walk(folder);
}
const patterns = oldWords.split('|').map(s=>s.trim()).filter(Boolean);
for (const f of files) {
 const lines = fs.readFileSync(f,'utf8').split(/\r?\n/);
 for (let n=0;n<lines.length;n++) {
  for (const pattern of patterns) if (lines[n].toLowerCase().includes(pattern.toLowerCase())) {
   errors.push(`${f}:${n+1}: contains old term ${JSON.stringify(pattern)}`);
   break;
  }
 }
}
if (patterns.length===0) notices.push('No old scaffold terms supplied; stale-brand scan skipped.');
console.log(JSON.stringify({ok:errors.length===0,domain,brand,checkedFiles:files.length,errors:errors.slice(0,150),additionalErrors:Math.max(0,errors.length-150),notices},null,2));
if(errors.length) process.exitCode=1;
