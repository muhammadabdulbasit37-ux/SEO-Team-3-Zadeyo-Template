import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
import * as checkout from '../src/config/checkout-redirects.mjs';
import { resolveOutboundRedirect, SUPPORT_CHANNELS } from '../src/config/outbound-redirects.mjs';
import * as locale from '../src/config/locale-routing.mjs';
import * as paths from './redirects.mjs';

test('Astro development middleware preserves checkout and support destinations', async () => {
  const source = fs.readFileSync(new URL('../src/middleware.ts', import.meta.url), 'utf8');
  const js = ts.transpileModule(source, { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext } }).outputText
    .replace(/^import .*;\r?\n/gm, '').replace('export const onRequest', 'const onRequest');
  const context = { URL, Response, defineMiddleware: (handler) => handler, resolveOutboundRedirect, ...locale, ...paths };
  vm.runInNewContext(js + '\nglobalThis.handler = onRequest;', context);
  for (const route of ['/go/cheats/', '/go/hwid-spoofer/', '/go/cloud-dma/', '/go/skin-changer/']) {
    for (const prefix of ['', '/es', '/de', '/fr']) for (const plan of ['monthly', 'lifetime']) {
      const pathname = prefix + route;
      const query = `?to=override&%74o=duplicate&TO=uppercase&plan=invalid&plan=${plan}&plan=monthly&campaign=keep`;
      const response = await context.handler({ request: new Request(`https://example.test${pathname}${query}`) }, () => assert.fail('Checkout must redirect'));
      const destination = new URL(response.headers.get('location'));
      const expected = new URL(checkout.resolveCheckoutPathRedirect(pathname));
      if (route !== '/go/cloud-dma/' || plan === 'lifetime') expected.searchParams.set('plan', plan);
      expected.searchParams.set('campaign', 'keep');
      assert.equal(destination.href, expected.href);
      assert.equal(response.status, 302);
      assert.equal(response.headers.get('cache-control'), 'no-store');
      assert.equal(response.headers.get('x-robots-tag'), 'noindex, follow');
    }
  }
  for (const { path, destination } of Object.values(SUPPORT_CHANNELS)) {
    const response = await context.handler({ request: new Request(`https://example.test/fr${path}?to=override&plan=monthly`) }, () => assert.fail('Support must redirect'));
    assert.equal(response.status, 302);
    assert.equal(response.headers.get('location'), destination);
    assert.equal(response.headers.get('cache-control'), 'no-store');
    assert.equal(response.headers.get('x-robots-tag'), 'noindex, follow');
  }
});
