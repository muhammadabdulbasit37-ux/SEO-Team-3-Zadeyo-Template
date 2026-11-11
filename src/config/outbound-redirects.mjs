import { checkoutDestination, resolveCheckoutPathRedirect } from './checkout-redirects.mjs';
import { stripPrefixedLocaleFromGo } from './locale-routing.mjs';

export const SUPPORT_CHANNELS = {
  tickets: { path: '/go/support/', destination: 'https://zadeyo.com/support', label: 'Support tickets' },
  documentation: { path: '/go/setup-guides/', destination: 'https://zadeyo.com/docs', label: 'Setup guides' },
  faq: { path: '/go/support-faq/', destination: 'https://zadeyo.com/faq', label: 'Frequently asked questions' },
};

const supportTargets = new Map(Object.values(SUPPORT_CHANNELS).map(({ path, destination }) => [path, destination]));

export function resolveOutboundRedirect(pathname, search) {
  const checkout = resolveCheckoutPathRedirect(pathname);
  if (checkout) return checkoutDestination(checkout, search);

  const path = pathname.startsWith('/en/go/') ? pathname.slice(3) : stripPrefixedLocaleFromGo(pathname) ?? pathname;
  return supportTargets.get(path.endsWith('/') ? path : `${path}/`) ?? null;
}
