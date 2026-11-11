/** Set the four destination URLs in Part 1; do not leave the scaffold destinations on a new site. */
export const CHECKOUT_URLS = {
  primary: 'https://zadeyo.com/go/BASIT?to=%2Fproducts%2Fmw4-cheats',
  hwidSpoofer: 'https://zadeyo.com/go/BASIT?to=%2Fproducts%2Fhwid-spoofer',
  skinChanger: 'https://zadeyo.com/go/BASIT?to=%2Fproducts%2Fskin-changer',
  cloudDma: 'https://zadeyo.com/go/BASIT?to=%2Fproducts%2Fcloud-dma',
};

const PREFIXED_LOCALES = ['es', 'de', 'fr'];
const CHECKOUT_PATHS = {
  primary: '/go/cheats/',
  hwidSpoofer: '/go/hwid-spoofer/',
  skinChanger: '/go/skin-changer/',
  cloudDma: '/go/cloud-dma/',
};

/** Shared across local Astro dev, static checkout fallback, Node and Cloudflare. */
export const CHECKOUT_PATH_REDIRECTS = new Map(
  Object.entries(CHECKOUT_PATHS).flatMap(([key, route]) => [
    [route, CHECKOUT_URLS[key]],
    [route.slice(0, -1), CHECKOUT_URLS[key]],
  ]),
);

export function resolveCheckoutPathRedirect(pathname) {
  let path = pathname;
  for (const locale of [...PREFIXED_LOCALES, 'en']) {
    if (path.startsWith(`/${locale}/go/`)) path = path.slice(locale.length + 1);
  }
  return CHECKOUT_PATH_REDIRECTS.get(path) ?? CHECKOUT_PATH_REDIRECTS.get(`${path}/`) ?? null;
}

/** Do not allow incoming query data to override an affiliate destination's `to=` value. */
export function checkoutDestination(target, search, lifetimeOnly = target === CHECKOUT_URLS.cloudDma) {
  const destination = new URL(target);
  if (lifetimeOnly && destination.searchParams.get('plan') !== 'lifetime') destination.searchParams.delete('plan');
  for (const [name, value] of new URLSearchParams(search)) {
    const key = name.toLowerCase();
    if (key === 'to') continue;
    if (key === 'plan') {
      if ((value === 'lifetime' || (!lifetimeOnly && value === 'monthly')) && !destination.searchParams.has('plan')) {
        destination.searchParams.set('plan', value);
      }
      continue;
    }
    destination.searchParams.append(name, value);
  }
  return destination.href;
}
