import type { IconName } from '../components/icons/types';
import { normalizeInternalPath, ROUTES } from '../utils/path';
import type { SiteLocale } from '../i18n/locales';
import { getSiteFaqs as getSiteFaqsForLocale } from './faq/locale';
import { isUtilityEnabled } from '../config/catalog';
import { applySiteTokens } from '../i18n/brandTokens';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'aim'
  | 'safety'
  | 'products'
  | 'blog'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
  /** Utility slugs the answer talks about; the item is hidden when any of them is not sold. */
  requires?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const cheats = link('{cheatProduct}', ROUTES.cheats);
const hwid = link('HWID Spoofer', ROUTES.hwidSpoofer);
const cloudDma = link('Cloud DMA', ROUTES.cloudDma);
const skinChanger = link('Skin Changer', ROUTES.skinChanger);
const allProducts = link('products page', ROUTES.productsHub);
const faqPage = link('full FAQ', ROUTES.faq);
const blog = link('blog guides', ROUTES.blog);

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I check if Modern Warfare 4 cheats are online?',
    a: a('The status banner is on {siteDomain}. Read it after a Modern Warfare 4 update and after an anti-cheat update.'),
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I buy?',
    a: a('After checkout, open the portal for the loader, setup guide, and saved configs. Read the guide before you start Modern Warfare 4.'),
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can I get banned using third-party Modern Warfare 4 cheats?',
    a: a('Yes. A third-party modification can lead to an account penalty. Anti-cheat rules change. Read the banner before you use the menu.'),
    aHtml:
      'Yes. A third-party modification can lead to an account penalty. Anti-cheat rules change. Read the banner before you use the menu.',
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which platforms are supported?',
    a: a('Modern Warfare 4 on 64-bit Windows 10 or Windows 11. macOS and Linux are outside that list.'),
  },
  {
    id: 'license-move',
    topic: 'setup',
    icon: 'faqLicenseMove',
    q: 'Can I move my license to a new PC?',
    a: a('Use the HWID reset in the portal, or open a support ticket. The number of moves depends on the tier.'),
  },
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Where are products and utilities listed?',
    a: `Every product is on the ${allProducts}: {productList}. Each product page lists its features and links to checkout.`,
  },
  {
    id: 'cloud-dma-what',
    topic: 'products',
    icon: 'accountRecovery',
    q: 'What does Cloud DMA install?',
    a: `${cloudDma} sets up a Hyper-V virtual environment on one Windows PC and activates it over an encrypted connection.`,
    scopes: ['cloud-dma'],
    requires: ['cloud-dma'],
  },
  {
    id: 'cloud-dma-requires',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'What else do I need to buy?',
    a: `GREENWARD, Static Server and AWS are all required. Each is a separate purchase.`,
    scopes: ['cloud-dma'],
    requires: ['cloud-dma'],
  },
  {
    id: 'cloud-dma-license',
    topic: 'products',
    icon: 'faqHwidWhen',
    q: 'What does the Cloud DMA license cost?',
    a: `Current options, access terms and pricing are shown at checkout.`,
    scopes: ['cloud-dma'],
    requires: ['cloud-dma'],
  },
  {
    id: 'skin-visible',
    topic: 'products',
    icon: 'cosmetic',
    q: 'Will Skin Changer put cosmetics into my inventory?',
    a: `No. ${skinChanger} draws the cosmetic on your client only. The inventory stays empty. A trade stays impossible. Other players are not expected to see the finish.`,
    scopes: ['skin-changer'],
    requires: ['skin-changer'],
  },
  {
    id: 'skin-games',
    topic: 'products',
    icon: 'faqPlatforms',
    q: 'Which games does Skin Changer list?',
    a: a('Major games are named on the product page. A patch can drop that support. Email support and name your title before checkout.'),
    scopes: ['skin-changer'],
    requires: ['skin-changer'],
  },
  {
    id: 'utility-requirements',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'What Windows setup do the utilities need?',
    a: a('Windows 10 or 11. HVCI and Core Isolation on. TPM and Secure Boot on, in Windows Security and in firmware. HWID Spoofer also needs administrator rights. Each utility page lists the rest.'),
    scopes: ['hwid-spoofer', 'cloud-dma', 'skin-changer'],
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What is Modern Warfare 4 ESP?',
    a: `ESP and wallhack show enemy position, health, and distance on Modern Warfare 4. ${cheats} also includes aimbot, silent aimbot, no recoil, God Mode, infinite ammo, and speedhack.`,
    scopes: ['elite'],
  },
  {
    id: 'esp-vs-aim',
    topic: 'esp',
    icon: 'faqEspVsScripts',
    q: 'What is the difference between ESP and aimbot?',
    a: `ESP and wallhack draw information. They leave the crosshair where you put it. Aimbot, silent aimbot, and no recoil are separate switches on ${cheats}.`,
  },
  {
    id: 'elite-slots',
    topic: 'plans',
    icon: 'faqEliteSlots',
    q: 'Why is the cheat sold as a private build?',
    a: `The build is private, with direct developer support and priority patch delivery. A cap on slots keeps those patch cycles short. Read the banner before you pay.`,
    scopes: ['elite'],
  },
  {
    id: 'stream-proof',
    topic: 'esp',
    icon: 'faqStreamProof',
    q: 'Can OBS capture my overlay?',
    a: `The option list on ${cheats} has no capture filter. Make a local recording before a live session.`,
  },
  {
    id: 'build-status',
    topic: 'safety',
    icon: 'faqUndetected',
    q: 'Will the build stay online after every patch?',
    a: a('No. The banner and the product page show status at the time you look. If the build says updating, testing, or offline after an anti-cheat update, wait.'),
  },
  {
    id: 'esp-safer',
    topic: 'safety',
    icon: 'faqEspSafer',
    q: 'Is ESP lower-profile than aimbot?',
    a: a('ESP can be less obvious than a maxed aimbot. It is still a cheat. Leaving aim assist off does not remove it from anti-cheat review.'),
  },
  {
    id: 'hwid-when',
    topic: 'products',
    icon: 'faqHwidWhen',
    q: 'When is the HWID Spoofer the product to open?',
    a: `${hwid} is for a hardware ID flag: other PCs accept the login and this one refuses it. Disk serials are refreshed. MAC addresses, GPU IDs, and related values are refreshed too. A cleaner is included. An account that stays sanctioned is not cleared.`,
    scopes: ['hwid-spoofer'],
    requires: ['hwid-spoofer'],
  },
  {
    id: 'external-loader',
    topic: 'products',
    icon: 'faqExternalLoader',
    q: 'Is the loader injected into the game folder?',
    a: `{siteName} runs an external loader and syncs configs from the portal. It does not place files in the Modern Warfare 4 directory. Account penalties can still follow. See ${cheats}.`,
  },
  {
    id: 'blog-vs-cheats',
    topic: 'blog',
    icon: 'faqBlogVsCheats',
    q: 'Does this article replace the live status banner?',
    a: `No. Guides explain a topic. A live Modern Warfare 4 session still uses ${cheats} when the banner on {siteDomain} says online.`,
  },
  {
    id: 'blog-setup',
    topic: 'blog',
    icon: 'faqBlogSetup',
    q: 'Where do blog setup guides point for purchase?',
    a: `Guides link to product pages such as ${cheats}. Use the checkout link on the product page and download the loader from the portal.`,
  },
  {
    id: 'who-cheats',
    topic: 'plans',
    icon: 'faqWhoElite',
    q: 'Who should buy Modern Warfare 4 Cheats?',
    a: `People who want aimbot, silent aimbot, ESP, wallhack, and the other listed options while playing Modern Warfare 4.`,
    scopes: ['elite'],
  },
  {
    id: 'vac-update',
    topic: 'safety',
    icon: 'faqVacUpdate',
    q: 'What should I do after an anti-cheat update?',
    a: a('Read the status on {siteDomain}. Wait until the banner says online. After a patch, start with the quieter aim and ESP settings.'),
  },
  {
    id: 'discord-help',
    topic: 'setup',
    icon: 'headphones',
    q: 'How do I get install help?',
    a: a('After you pay, open a ticket with the order email, the Windows version, and the Modern Warfare 4 client build. Support walks through the loader from there.'),
  },
  {
    id: 'pmc-scav-raids',
    topic: 'plans',
    icon: 'faqTurboRanked',
    q: 'Do modules work across Modern Warfare 4 game modes?',
    a: `The same option list is what the menu shows in each mode. Set the ESP distance and aim smoothness before the first match on ${cheats}.`,
  },
  {
    id: 'zoom-hack',
    topic: 'esp',
    icon: 'faqZoomHack',
    q: 'Which options cover ESP and wallhack?',
    a: `ESP and wallhack are part of ${cheats}. They show enemy position, health, and distance.`,
    scopes: ['elite'],
  },
  {
    id: 'trigger-bot',
    topic: 'aim',
    icon: 'faqAutoFarm',
    q: 'Does the product include silent aimbot?',
    a: `Aimbot, silent aimbot, and no recoil are on ${cheats}. Each one has a switch in the menu.`,
    scopes: ['elite'],
  },
  {
    id: 'private-cheats',
    topic: 'safety',
    icon: 'faqPrivateCheats',
    q: 'What are private Modern Warfare 4 cheats?',
    a: a('Private means a per-user key and a maintained build, delivered in the portal for the Modern Warfare 4 menu on one license.'),
  },
  {
    id: 'faq-more',
    topic: 'all',
    icon: 'faqMore',
    q: 'Where is the full FAQ?',
    a: `Short answers sit on the homepage and on each product page. The ${faqPage} holds the full set, and ${blog} is where longer guides go when they are published.`,
  },
];

/** Shared FAQ block copy + filters (home, /faq/, products, blog). */
export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'All topics',
  title: 'Faq: Browse by category',
  subtitle: 'Plans, ESP, aim, products, setup, and the longer answers.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = [
  'all',
  'plans',
  'esp',
  'aim',
  'safety',
  'products',
  'blog',
  'setup',
];

/** Section copy when FAQ list is scoped to the current page (not /faq/). */
export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Questions about this page',
  subtitle: 'Answers for this page. The FAQ page holds the rest.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export { getProductFaqs, getSiteFaqs, getLandingFaqs, getAllFaqs } from './faq/locale';

const blogTopicFaqs: Record<string, SiteFaqItem[]> = {
  'Buyer Guides': [
    {
      id: 'blog-buyer-start',
      topic: 'blog',
      icon: 'faqBlogGuideStart',
      q: 'Do buyer guides replace the live product page?',
      a: a('No. Guides explain what to check before checkout. Live Modern Warfare 4 play still uses the product on {siteDomain} when status shows online.'),
    },
    {
      id: 'blog-buyer-tier',
      topic: 'blog',
      icon: 'faqBlogGuideTier',
      q: 'Which product matches a buyer guide checklist?',
      a: `Feature checklists map to ${cheats}. Recovery or hardware topics point to the matching utility on the ${allProducts}.`,
    },
    {
      id: 'blog-buyer-status',
      topic: 'blog',
      icon: 'faqBlogGuideStatus',
      q: 'Is this buyer guide still valid after a patch?',
      a: a('Check the article date and the live status banner. Patch-day notes on {siteDomain} override older screenshots.'),
    },
  ],
  Features: [
    {
      id: 'blog-features-esp',
      topic: 'blog',
      icon: 'faqBlogSlugEsp',
      q: 'Which product includes ESP from this article?',
      a: `${cheats} lists aimbot, silent aimbot, ESP, wallhack, and no recoil for Modern Warfare 4 when status is online.`,
    },
    {
      id: 'blog-features-docs',
      topic: 'blog',
      icon: 'faqBlogGuideTier',
      q: 'Where is the authoritative feature list?',
      a: `Articles summarize options. The live module list on ${cheats} is what checkout covers.`,
    },
  ],
  Comparisons: [
    {
      id: 'blog-compare-paid',
      topic: 'blog',
      icon: 'faqBlogGuideStart',
      q: 'Do comparison articles change enforcement risk?',
      a: a('No. Comparisons explain tradeoffs. Any third-party tool can still lead to enforcement. Read status before you launch.'),
    },
    {
      id: 'blog-compare-checkout',
      topic: 'blog',
      icon: 'faqBlogSetup',
      q: 'Where do comparison guides link for purchase?',
      a: `Guides link to product pages such as ${cheats}. Use the checkout link on the product page.`,
    },
  ],
  Tools: [
    {
      id: 'blog-tools-hwid',
      topic: 'blog',
      icon: 'faqBlogSlugHwid',
      q: 'Can a spoofer article replace the HWID product page?',
      a: `Articles teach ideas only. Pricing, requirements, and workflow scope stay on ${hwid}.`,
      requires: ['hwid-spoofer'],
    },
    {
      id: 'blog-tools-support',
      topic: 'blog',
      icon: 'faqBlogSetupLoader',
      q: 'Need help after reading a tools article?',
      a: a('Open a support ticket with your order email and the article slug. Staff reference the same portal steps as product pages.'),
    },
  ],
  Troubleshooting: [
    {
      id: 'blog-trouble-status',
      topic: 'blog',
      icon: 'faqBlogSecVac',
      q: 'Does this troubleshooting article mean the build is online?',
      a: a('No article replaces the live status banner. Check {siteDomain} after every patch before you launch.'),
    },
    {
      id: 'blog-trouble-support',
      topic: 'blog',
      icon: 'headphones',
      q: 'Still stuck after the checklist?',
      a: a('Contact support with your game build, Windows version and the exact error text. Include what you already tried from the article.'),
    },
  ],
  Guides: [
    {
      id: 'blog-guide-start',
      topic: 'blog',
      icon: 'faqBlogGuideStart',
      q: 'Does this guide replace the live status banner?',
      a: a('No. Guides explain a topic. Live play still uses the product on {siteDomain} when the banner says online.'),
    },
    {
      id: 'blog-guide-tier',
      topic: 'blog',
      icon: 'faqBlogGuideTier',
      q: 'Which tier matches this guide?',
      a: `Setup and feature guides map to modules on ${cheats}. Ban recovery articles point to the matching utility on the ${allProducts}.`,
    },
    {
      id: 'blog-guide-status',
      topic: 'blog',
      icon: 'faqBlogGuideStatus',
      q: 'Is this guide still valid after a patch?',
      a: a('Check the article date and the live status banner. Patch-day articles note when modules change. The status banner has the latest build notes.'),
    },
  ],
  Setup: [
    {
      id: 'blog-setup-loader',
      topic: 'blog',
      icon: 'faqBlogSetupLoader',
      q: 'Where do I download the loader?',
      a: a('Only from your operator portal after checkout, not from third-party links in comments or DMs.'),
    },
    {
      id: 'blog-setup-lobby',
      topic: 'blog',
      icon: 'faqBlogSetupLobby',
      q: 'Should I test settings before a live Modern Warfare 4 session?',
      a: a('Yes. Load conservative ESP and aim presets offline or in a quiet area first. Raise FOV, smoothing, and ESP distance caps over several sessions.'),
    },
  ],
  Security: [
    {
      id: 'blog-sec-vac',
      topic: 'blog',
      icon: 'faqBlogSecVac',
      q: 'Does this article mean the build stays online?',
      a: a('No article replaces the live status banner. Check {siteDomain} after every patch before you launch.'),
    },
  ],
};

const defaultBlogFaqs: SiteFaqItem[] = [
  {
    id: 'blog-default-1',
    topic: 'blog',
    icon: 'faqBlogDefault1',
    q: 'Are blog guides official product documentation?',
    a: `Articles explain workflows and link to product pages such as ${cheats}. Feature lists on those pages are authoritative for checkout.`,
  },
  {
    id: 'blog-default-2',
    topic: 'blog',
    icon: 'faqBlogDefault2',
    q: 'Need help applying this guide?',
    a: a('Open a support ticket with your order email and the article slug. Staff reference the same portal presets mentioned in guides.'),
  },
  {
    id: 'blog-default-3',
    topic: 'blog',
    icon: 'faqBlogDefault3',
    q: 'Will settings in this article work next patch?',
    a: a('Re-check status after every Modern Warfare 4 update. Portal presets update with patch notes, reload configs instead of copying old sliders.'),
  },
];

const BLOG_FAQ_IDS: Record<string, string[]> = {
  'buy-modern-warfare-4-cheats': ['after-buy', 'platforms', 'products-page', 'blog-setup', 'status'],
  'modern-warfare-4-anti-cheat-explained': ['status', 'vac-update', 'ban-risk', 'platforms', 'blog-vs-cheats'],
  'how-to-enable-tpm-2-and-secure-boot-for-modern-warfare-4': [
    'platforms',
    'utility-requirements',
    'status',
    'blog-setup',
    'after-buy',
  ],
  'modern-warfare-4-hwid-spoofer': ['hwid-when', 'license-move', 'after-buy', 'platforms'],
  'modern-warfare-4-skin-changer': ['skin-visible', 'skin-games', 'after-buy', 'ban-risk', 'platforms'],
  'modern-warfare-4-ban-appeal-account-recovery': [
    'after-buy',
    'hwid-when',
  ],
  'are-modern-warfare-4-cheats-safe': ['ban-risk', 'vac-update', 'build-status', 'external-loader', 'status'],
};

const DEFAULT_BLOG_FAQ_IDS = ['blog-vs-cheats', 'blog-setup', 'status', 'after-buy', 'platforms'];

function pickFaqItems(ids: string[], locale: SiteLocale): SiteFaqItem[] {
  const localized = getSiteFaqsForLocale(locale);
  const seen = new Set<string>();
  return ids
    .map((id) => localized.find((item) => item.id === id))
    .filter((item): item is SiteFaqItem => Boolean(item))
    .filter((item) => (item.requires ?? []).every(isUtilityEnabled))
    .filter((item) => {
      if (seen.has(item.id)) return false;
      seen.add(item.id);
      return true;
    })
    .slice(0, 5)
    .map((item) => ({ ...item, q: applySiteTokens(item.q), a: applySiteTokens(item.a) }));
}

export function getBlogFaqs(_tag: string, slug: string, locale: SiteLocale = 'en'): SiteFaqItem[] {
  return pickFaqItems(BLOG_FAQ_IDS[slug] ?? DEFAULT_BLOG_FAQ_IDS, locale);
}

export function getForumFaqs(slug: string, locale: SiteLocale = 'en'): SiteFaqItem[] {
  const ids = ['status', 'after-buy', 'ban-risk', 'platforms'];
  if (slug.includes('hwid')) ids.unshift('hwid-when');
  if (slug.includes('skin')) ids.unshift('skin-visible');
  if (slug.includes('esp') || slug.includes('minimap')) ids.unshift('what-is-esp');
  if (slug.includes('aim')) ids.unshift('esp-vs-aim');
  if (slug.includes('license') || slug.includes('lifetime')) ids.unshift('elite-slots');
  if (slug.includes('ban-risk') || slug.includes('cheat-ban')) ids.unshift('build-status');
  return pickFaqItems(ids, locale);
}

