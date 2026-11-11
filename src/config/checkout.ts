import { CHECKOUT_URLS } from './checkout-redirects.mjs';

/** Checkout targets come from one source and are routed through /go/ on all supported hosts. */
export const CHECKOUT = CHECKOUT_URLS;
export type CheckoutProduct = keyof typeof CHECKOUT;
export const CHECKOUT_SLUGS: Record<CheckoutProduct, string> = {
  primary: 'cheats',
  hwidSpoofer: 'hwid-spoofer',
  skinChanger: 'skin-changer',
  cloudDma: 'cloud-dma',
};
export const CHECKOUT_SLUG_TO_PRODUCT = Object.fromEntries(
  Object.entries(CHECKOUT_SLUGS).map(([key, slug]) => [slug, key as CheckoutProduct]),
) as Record<string, CheckoutProduct>;

export function checkoutPath(product: CheckoutProduct): string {
  return `/go/${CHECKOUT_SLUGS[product]}/`;
}
export const PRIMARY_CHECKOUT_PATH = checkoutPath('primary');
export const HWID_CHECKOUT_PATH = checkoutPath('hwidSpoofer');
export const SKIN_CHANGER_CHECKOUT_PATH = checkoutPath('skinChanger');
export const CLOUD_DMA_CHECKOUT_PATH = checkoutPath('cloudDma');
export function checkoutForSlug(slug: string): string {
  return checkoutPath(CHECKOUT_SLUG_TO_PRODUCT[slug] ?? 'primary');
}

/** Convert recognized product destination links to this site's own /go/ routes. */
export function resolveCheckoutHref(href: string): string {
  const suffix = href.match(/[?#].*$/)?.[0] ?? '';
  if (!/^https?:\/\//i.test(href)) {
    const normalized = href.startsWith('/') ? href : `/${href}`;
    // Site-owned paths are already safe; never rewrite arbitrary old-game paths.
    return normalized;
  }
  let incoming: URL;
  try { incoming = new URL(href); } catch { return href; }
  for (const [product, url] of Object.entries(CHECKOUT) as [CheckoutProduct, string][]) {
    const target = new URL(url);
    if (incoming.origin !== target.origin || incoming.pathname !== target.pathname) continue;
    if (![...target.searchParams].every(([key, value]) => incoming.searchParams.get(key) === value)) continue;
    for (const key of target.searchParams.keys()) incoming.searchParams.delete(key);
    const query = incoming.searchParams.toString();
    return checkoutPath(product) + (query ? `?${query}` : '') + incoming.hash;
  }
  return href;
}
