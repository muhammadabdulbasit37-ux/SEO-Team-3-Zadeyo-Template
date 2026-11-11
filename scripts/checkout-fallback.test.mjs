import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { test } from 'node:test';
import { CHECKOUT_PATH_REDIRECTS } from '../src/config/checkout-redirects.mjs';
import { SUPPORT_CHANNELS } from '../src/config/outbound-redirects.mjs';

test('generated fallbacks preserve configured checkout and support destinations', t => {
  const fixturePrefix = path.join(os.tmpdir(), 'template-checkout-');
  const dir = fs.mkdtempSync(fixturePrefix);
  t.after(() => {
    assert.ok(path.resolve(dir).startsWith(path.resolve(fixturePrefix)));
    fs.rmSync(dir, { recursive: true, force: true });
  });
  fs.mkdirSync(path.join(dir, 'public'));
  execFileSync(process.execPath, [fileURLToPath(new URL('./generate-static-redirects.mjs', import.meta.url))], { cwd: dir });
  const redirects = fs.readFileSync(path.join(dir, 'public/_redirects'), 'utf8');
  assert.doesNotMatch(redirects, /^\/go\//m);
  for (const [route, target] of CHECKOUT_PATH_REDIRECTS) {
    if (!route.endsWith('/')) continue;
    const html = fs.readFileSync(path.join(dir, 'public', route, 'index.html'), 'utf8');
    assert.match(html, /name="robots" content="noindex/);
    const script = html.match(/<script>(.*?)<\/script>/s)[1];
    for (const plan of ['monthly', 'lifetime']) {
      const query = '?to=override&%74o=duplicate&TO=uppercase&plan=bad&PLAN=' + plan + '&plan=monthly&campaign=a?b&campaign=c';
      let location;
      vm.runInNewContext(script, {
        URL, URLSearchParams, location: { search: query, replace: url => { location = new URL(url); } },
      });
      assert.equal(location.origin + location.pathname, new URL(target).origin + new URL(target).pathname);
      assert.deepEqual(location.searchParams.getAll('to'), new URL(target).searchParams.getAll('to'));
      const expectedPlans = route === '/go/cloud-dma/' && plan === 'monthly' ? [] : [plan];
      assert.deepEqual(location.searchParams.getAll('plan'), expectedPlans);
      assert.deepEqual(location.searchParams.getAll('campaign'), ['a?b', 'c']);
    }
  }
  for (const { path: route, destination } of Object.values(SUPPORT_CHANNELS)) {
    const html = fs.readFileSync(path.join(dir, 'public', route, 'index.html'), 'utf8');
    assert.match(html, /name="robots" content="noindex/);
    assert.ok(html.includes(`href="${destination}"`));
    const script = html.match(/<script>(.*?)<\/script>/s)[1];
    let target;
    vm.runInNewContext(script, { location: { search: '?to=override&plan=monthly', replace: url => { target = url; } } });
    assert.equal(target, destination);
  }
});
