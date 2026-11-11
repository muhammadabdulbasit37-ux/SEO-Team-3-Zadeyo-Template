import {
  ALL_UTILITY_PRODUCT_SLUGS,
  CHEAT_PRODUCT_SLUGS,
  CHEATS_PRIMARY_SLUG,
  HWID_SPOOFER_SLUG,
  SKIN_CHANGER_SLUG,
  CLOUD_DMA_SLUG,
  UTILITY_PRODUCT_PATHS,
  UTILITY_PRODUCT_SLUGS,
  type UtilityProductSlug,
} from '../config/catalog';
import { PRODUCT_BASE } from '../config/site';
import { CHEAT_PRODUCT_NAME } from '../config/game';
import { getTranslations } from '../i18n';
import { deepApplySiteTokens } from '../i18n/brandTokens';
import type { SiteLocale } from '../i18n/locales';
import type { Translations } from '../i18n/types';
import { checkoutForSlug } from '../config/checkout';
import { SHOWCASE_GALLERY_KEYS } from '../config/gameplayMedia';
import { HWID_GALLERY_KEYS } from '../config/hwidMedia';
import type { IconName } from '../components/icons/types';
import { getProductCopyBundle, registerProductCopyBundle, type ProductCopyBundle } from './products/exportCopy';
import esProductCopy from './products/locales/es.json';
import deProductCopy from './products/locales/de.json';
import frProductCopy from './products/locales/fr.json';

export interface ProductSlide {
  /** Still image, or the poster frame when `videoSrc` is set. */
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
  width?: number;
  height?: number;
  /** `image` unless a clip is attached. */
  kind?: 'image' | 'video';
  /** MP4 or WebM. The slider shows this instead of the still; `src` stays the poster. */
  videoSrc?: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
  relatedForumSlugs: string[];
}

/** Guides paired with each product detail page */
export const productRelatedBlogSlugs: Record<string, string[]> = {
  elite: [
    'buy-modern-warfare-4-cheats',
    'are-modern-warfare-4-cheats-safe',
    'modern-warfare-4-anti-cheat-explained',
    'how-to-enable-tpm-2-and-secure-boot-for-modern-warfare-4',
    'modern-warfare-4-ban-appeal-account-recovery',
    'modern-warfare-4-hwid-spoofer',
  ],
  'hwid-spoofer': [
    'modern-warfare-4-hwid-spoofer',
    'modern-warfare-4-anti-cheat-explained',
    'are-modern-warfare-4-cheats-safe',
    'how-to-enable-tpm-2-and-secure-boot-for-modern-warfare-4',
  ],
  'cloud-dma': ['how-to-enable-tpm-2-and-secure-boot-for-modern-warfare-4'],
  'skin-changer': [
    'modern-warfare-4-skin-changer',
    'buy-modern-warfare-4-cheats',
    'how-to-enable-tpm-2-and-secure-boot-for-modern-warfare-4',
  ],
};

/** Community threads paired with each product detail page */
export const productRelatedForumSlugs: Record<string, string[]> = {
  elite: [
    'modern-warfare-4-cheats-working-after-launch',
    'before-buying-modern-warfare-4-tool',
    'compare-mw4-cheat-listings',
    'mw4-third-party-cheat-ban-risk',
    'mw4-october-25-update-tool-compatibility',
    'mw4-esp-vs-minimap',
  ],
  'hwid-spoofer': ['hwid-spoofer-what-it-changes'],
  'skin-changer': [
    'mw4-skin-changer-cosmetic-visibility',
    'skin-changer-hvci-core-isolation-tpm-secure-boot',
    'monthly-vs-lifetime-cheat-license',
  ],
};

const productBase = PRODUCT_BASE;

const hwidAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Match your title to the list',
    desc: 'Published coverage names Riot Vanguard. Easy Anti-Cheat sits with BattlEye on that list. Ricochet is there with related families. Compare your title with the list and with the banner on {siteDomain} before you pay.',
  },
  {
    num: '02',
    title: 'Review available access options',
    desc: 'Either license includes the operator panel and the trace cleaner.',
  },
  {
    num: '03',
    title: 'Set Windows before the first spoof',
    desc: 'In Windows Security, turn HVCI and Core Isolation on. In firmware, turn TPM and Secure Boot on. Do both before the first session. Administrator rights on this PC are also required for the spoof and the cleaner.',
  },
  {
    num: '04',
    title: 'Change IDs, clean, then launch',
    desc: 'The portal guide order is the identifier change, then the bundled cleanup, then the game client.',
  },
];

const cloudDmaAcquisitionSteps: AcquisitionStep[] = [
  { num: '01', title: 'Check Windows and firmware', desc: 'Confirm that your Windows edition supports Hyper-V and turn on CPU virtualization in firmware.' },
  { num: '02', title: 'Check the separate purchases', desc: 'You also need GREENWARD, Static Server and AWS. Each is purchased separately.' },
  { num: '03', title: 'Review checkout terms', desc: 'Current options, access terms and pricing are shown at checkout.' },
  { num: '04', title: 'Run the guided setup', desc: 'Install the Hyper-V environment and activate it over a stable internet connection.' },
];

const skinChangerAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Ask if your game is still listed',
    desc: 'Major titles are covered, and a patch can move that list. Email support the game name before checkout and ask if those cosmetics are still listed.',
  },
  {
    num: '02',
    title: 'Review cosmetic access terms',
    desc: 'The library itself does not change with the term. Current options, access terms and pricing are shown at checkout.',
  },
  {
    num: '03',
    title: 'Prepare Windows for the cosmetic client',
    desc: 'Before the first session, Windows Security needs HVCI and Core Isolation. Firmware needs TPM and Secure Boot.',
  },
  {
    num: '04',
    title: 'Choose looks inside the client',
    desc: 'When the portal has delivered access, open the lightweight client. For that session, choose a weapon skin, an outfit, or a knife variant.',
  },
];

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Review current status',
    desc: 'Read the banner on {siteDomain} before you pay, and again after a Modern Warfare 4 or anti-cheat update.',
  },
  {
    num: '02',
    title: 'Choose your access tier',
    desc: 'Choose Modern Warfare 4 Cheats or the utility that matches the job. Review its features before checkout.',
  },
  {
    num: '03',
    title: 'Contact the team',
    desc: 'Write to support with the order email ready if you need availability, Windows setup, or payment details confirmed.',
  },
  {
    num: '04',
    title: 'Follow guided setup',
    desc: 'Follow the setup guide after you pay. Ask support if the install stalls. Match the current game build before you launch.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: defaultAcquisitionSteps,
  };
}

const sharedGoodToKnow =
  'A new game build or an anti-cheat update can change which options still run. Read the banner on {siteDomain} before you pay or launch.';

const sharedLimitations =
  'Third-party cheat software can be detected, can stop after a game update, and can lead to account penalties. Compatibility can change before this page is edited.';

const mainProductSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Confirm the current game version before launch.' },
  { icon: 'reqSettings', text: 'Patches and anti-cheat updates can change compatibility.' },
];

const galleryRaw = {
  gpMatchEsp: {
    width: 1024,
    height: 576,
    src: '/images/gameplay/modern-warfare-4-match-esp.webp',
    alt: 'First-person rifle view on a snowy rooftop, with player names, distances, and green brackets.',
    caption: 'Match overlays',
    captionDesc: 'Player names, distances, and brackets on a Modern Warfare 4 rooftop fight.',
  },
  gpAimbotMenu: {
    width: 1024,
    height: 627,
    src: '/images/gameplay/modern-warfare-4-aimbot-menu.webp',
    alt: 'Aimbot panel with Aim Key M2, Nearest bone, Check Visibility on, FOV 100, and smoothing sliders.',
    caption: 'Aimbot menu',
    captionDesc: 'Aim key, bone choice, smoothing, FOV, and max distance on the aimbot tab.',
  },
  gpEspMenu: {
    width: 1024,
    height: 627,
    src: '/images/gameplay/modern-warfare-4-esp-menu.webp',
    alt: 'ESP Players tab with Enable ESP and Show Team on, plus name, distance, health, bones, and box.',
    caption: 'ESP menu',
    captionDesc:
      'Name, distance, health bar, bones, and box toggles on the players tab.',
  },
} satisfies Record<
  string,
  {
    src: string;
    alt: string;
    caption: string;
    captionDesc: string;
    width: number;
    height: number;
    videoSrc?: string;
  }
>;

type GalleryKey = keyof typeof galleryRaw;

function slide(...keys: GalleryKey[]): ProductSlide[] {
  return keys.map((key) => {
    const item: ProductSlide = galleryRaw[key];
    if (!item) throw new Error(`Missing gallery key: ${String(key)}`);
    const { src, alt, caption, captionDesc, width, height, videoSrc } = item;
    return {
      src,
      alt,
      caption,
      captionDesc,
      width,
      height,
      ...(videoSrc ? { videoSrc, kind: 'video' as const } : {}),
    };
  });
}

const showcaseSlides = slide(...SHOWCASE_GALLERY_KEYS);

const hwidGalleryRaw = {
  hwidSerialCheck: {
    src: '/images/hwid-spoofer/hwid-spoofer-serial-check-panel.webp',
    width: 1024,
    height: 576,
    alt: 'Device window listing DISK, MOBO, Display, UUID, GPU, and Network as changed or unchanged.',
    caption: 'Serial check rows',
    captionDesc: 'After a spoof cycle, each row says whether that hardware value changed.',
  },
  hwidUefiSpoof: {
    src: '/images/hwid-spoofer/hwid-spoofer-uefi-spoof-panel.webp',
    width: 1024,
    height: 576,
    alt: 'Device window with Permanent Spoof, GPU spoof on, ethernet spoof off, and a seed field.',
    caption: 'Firmware controls',
    captionDesc: 'From this firmware screen you can switch GPU or ethernet spoofing, type a seed, and apply a permanent change.',
  },
} satisfies Record<
  string,
  { src: string; alt: string; caption: string; captionDesc: string; width: number; height: number; videoSrc?: string }
>;

type HwidGalleryKey = keyof typeof hwidGalleryRaw;

function hwidSlide(...keys: HwidGalleryKey[]): ProductSlide[] {
  return keys.map((key) => {
    const item: ProductSlide = hwidGalleryRaw[key];
    const { src, alt, caption, captionDesc, width, height, videoSrc } = item;
    return {
      src,
      alt,
      caption,
      captionDesc,
      width,
      height,
      ...(videoSrc ? { videoSrc, kind: 'video' as const } : {}),
    };
  });
}

const hwidShowcaseSlides = hwidSlide(...HWID_GALLERY_KEYS);

const skinChangerShowcaseSlides: ProductSlide[] = [
  {
    src: '/images/skin-changer/skin-changer.webp',
    width: 1213,
    height: 682,
    alt: 'Shield mark labeled Skin Changer, with crossed rifles, revolvers, and star highlights.',
    caption: 'Cosmetic mark',
    captionDesc: 'Weapon finishes, character outfits, and knife styles are drawn on your screen alone.',
  },
];

function slugFromHref(href: string): string {
  const normalized = href.replace(/^\//, '').replace(/\/$/, '');
  for (const slug of ALL_UTILITY_PRODUCT_SLUGS) {
    if (normalized === slug || normalized.endsWith(`/${slug}`)) return slug;
  }
  const segment = href.replace(productBase, '').replace(/^\//, '').replace(/\/$/, '');
  if (!segment || segment === 'cheats' || segment === 'product') {
    return CHEATS_PRIMARY_SLUG;
  }
  return segment;
}

const tierAbout: Record<string, ProductPage['about']> = {
  elite: [
    {
      type: 'p',
      text: 'Each menu switch covers one option: aimbot or silent aimbot, ESP or wallhack, God Mode, infinite ammo, no recoil, or speedhack.',
    },
    { type: 'h2', text: 'Configuration and support' },
    {
      type: 'p',
      text: 'The menu turns each option on or off and shows the settings that option has. Setup notes ship in the portal. A patch can change which settings remain.',
    },
  ],
};

const tierBodies: Record<string, ProductPage['body']> = {
  elite: [
    { type: 'h2', text: 'Checkout and delivery' },
    {
      type: 'p',
      text: 'The checkout page confirms the available access options. The portal provides delivery instructions after purchase. Read the status banner before a session.',
    },
    { type: 'h2', text: 'Updates and compatibility' },
    {
      type: 'p',
      text: 'Compatibility can shift after a Modern Warfare 4 update or an anti-cheat change. Check the game version and the banner on {siteDomain} before you launch.',
    },
  ],
};

const utilityBodies: Record<string, ProductPage['body']> = {
  'hwid-spoofer': [
    { type: 'h2', text: 'Flags that stay with the machine' },
    {
      type: 'p',
      text: 'A hardware flag follows the PC. Changing the username does not move it. If other rigs accept a sign-in and this one rejects every new account, refresh the identifiers. Disk serials are rewritten in the panel. MAC addresses, GPU IDs, and related fingerprints are in that same pass. Sign-in can then use a clean hardware profile. A sanction that remains on the account is not lifted.',
    },
    { type: 'h2', text: 'Anti-cheat families written on this page' },
    {
      type: 'p',
      text: 'Riot Vanguard (Valorant) is one note on this page. Easy Anti-Cheat is another. BattlEye is listed too. Ricochet (Call of Duty) is listed with ACE and with Javelin. Comparable stacks are included. Spoofing can conflict with publisher terms. It can bring new penalties. After a vendor update, a listed anti-cheat note can end without notice. Detection rules change at the vendor. Read this page and confirm the title before checkout.',
    },
    { type: 'h2', text: 'Cleanup that ships with the license' },
    {
      type: 'p',
      text: 'A cleaner is included and it removes leftover traces after the spoof. Finish the identifier changes, run that cleanup, and start the game in the order the current portal guide gives.',
    },
    { type: 'h2', text: 'Requirements on this PC' },
    {
      type: 'p',
      text: 'Windows 10 or 11, 64-bit, is the OS here. The spoof and the cleaner need administrator rights. In Windows Security, HVCI and Core Isolation stay on. Internet stays up for activation and updates. In firmware, TPM and Secure Boot stay on.',
    },
  ],
  'cloud-dma': [
    { type: 'h2', text: 'Hyper-V setup on one PC' },
    { type: 'p', text: 'The installer provisions a virtual environment on your gaming PC. Activation uses an encrypted service connection.' },
    { type: 'h2', text: 'What you need before checkout' },
    { type: 'p', text: 'Cloud DMA is the infrastructure layer. GREENWARD, Static Server and AWS are three separate required purchases.' },
  ],
  'skin-changer': [
    { type: 'h2', text: 'What the client draws' },
    {
      type: 'p',
      text: 'This lightweight client draws premium weapon skins. Character outfits are drawn too. Rare knife variants are drawn in supported games. Those cosmetics do not each need a separate purchase. A finish is not a real good.',
    },
    { type: 'h2', text: 'Seen on your display alone' },
    {
      type: 'p',
      text: 'The look stays on your display. Inventories do not gain items. Trading stays impossible. Closing the client removes the visuals. Other players are not expected to see the finish.',
    },
    { type: 'h2', text: 'The supported list can move' },
    {
      type: 'p',
      text: 'Major games are listed today. A patch can take an entry off that list. A Windows update can change that list too. Before a purchase, ask support whether your title is still on that list. A cosmetic client can still conflict with game terms. It can lead to account action.',
    },
    { type: 'h2', text: 'PC setup for the cosmetic client' },
    {
      type: 'p',
      text: 'Windows 10 or 11 is required, with HVCI and Core Isolation on, and with TPM and Secure Boot on. After purchase you also need loader access.',
    },
  ],
};

const productContent: Record<
  string,
  Pick<ProductPage, 'overview' | 'images' | 'fullFeatures' | 'goodToKnow' | 'limitations' | 'systemRequirements'>
> = {
  elite: {
    images: showcaseSlides,
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: mainProductSystemRequirements,
    fullFeatures: [
      'Aimbot',
      'Silent aimbot',
      'Aim smoothness',
      'Target bone priority',
      'Maximum targeting distance',
      'ESP',
      'Wallhack',
      'Enemy position',
      'Health',
      'Distance',
      'God Mode',
      'Infinite ammo',
      'No recoil',
      'Speedhack',
      'Menu toggles for each option',
    ],
    overview: {
      title: 'Modern Warfare 4 cheat suite',
      paragraphs: [
        'These warfare 4 hacks group aimbot with silent aimbot, then ESP with wallhack. God Mode sits with infinite ammo. No recoil sits with speedhack.',
        'Wallhack and ESP print enemy position with health and distance. After a patch, read the banner on {siteDomain} before you start the game.',
      ],
    },
  },
  'hwid-spoofer': {
    images: hwidShowcaseSlides,
    goodToKnow:
      'Run the identifier change and the cleaner, in the portal guide order, before you open the game that raised the hardware flag. Read the anti-cheat notes on the status banner again before you pay.',
    limitations:
      'This product is for hardware ID flags. An account sanction that is still active stays active. Spoofing can conflict with publisher terms and can bring new penalties. A vendor update can end a listed anti-cheat note without a warning on this page first.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10 or 11, 64-bit.' },
      { icon: 'reqShieldGuide', text: 'In Windows Security, HVCI and Core Isolation on.' },
      { icon: 'reqSettings', text: 'Administrator rights for the spoof and the cleaner.' },
      { icon: 'reqWifi', text: 'Internet that stays up for activation and updates.' },
      { icon: 'reqSettings', text: 'TPM and Secure Boot on, in BIOS/UEFI.' },
    ],
    fullFeatures: [
      'Disk serial rewrite',
      'MAC address rewrite',
      'GPU identifier rewrite',
      'Related hardware fingerprints',
      'Trace cleaner in the license',
      'ACE, Javelin, and comparable stacks',
      'Riot Vanguard (Valorant)',
      'BattlEye',
      'Easy Anti-Cheat',
      'Ricochet (Call of Duty)',
    ],
    overview: {
      title: 'A refresh when the block is this PC',
      paragraphs: [
        'Start here after a hardware flag. Refresh disk serials on this machine. The same work covers MAC addresses and GPU IDs, plus related fingerprints, so sign-in can proceed. The coverage notes name Vanguard. They also name Easy Anti-Cheat and BattlEye. Ricochet is named with similar stacks. A cleaner is in the package.',
        'Other computers can take a new login while this one stops it at once. That is the case for this product. A sanction stored on the account record stays. Tooling on the two licenses is the same.',
      ],
    },
  },
  'cloud-dma': {
    images: [{
      src: '/images/cloud-dma/product.webp',
      width: 400,
      height: 400,
      alt: 'Cloud DMA icon with a glowing purple and blue cloud',
      caption: 'Single-PC setup',
      captionDesc: 'Hyper-V runs on the gaming PC and connects to the service for activation.',
    }],
    goodToKnow: 'GREENWARD, Static Server and AWS are each required and purchased separately.',
    limitations: 'Cloud DMA is the infrastructure layer. It is designed for one PC. Setups that require an external DMA device or a second physical computer are outside its scope.',
    systemRequirements: [
      { icon: 'reqWindows', text: '64-bit Windows 10 or 11 with Hyper-V available. Pro, Enterprise or Education is recommended.' },
      { icon: 'reqSettings', text: 'Intel VT-x or AMD-V enabled in firmware, with TPM and Secure Boot on.' },
      { icon: 'reqShieldGuide', text: 'HVCI and Core Isolation enabled in Windows Security.' },
      { icon: 'reqSettings', text: 'At least 8 GB RAM. 16 GB is recommended.' },
      { icon: 'reqWifi', text: 'Stable broadband for activation and ongoing connectivity.' },
    ],
    fullFeatures: ['Single-PC setup', 'Guided Hyper-V installation', 'Encrypted activation', 'Lifetime access'],
    overview: {
      title: 'Cloud DMA on one Windows PC',
      paragraphs: [
        'Cloud DMA runs its virtual environment on your gaming PC. The installer sets up Hyper-V and activates the service over an encrypted connection.',
        'Cloud DMA may require GREENWARD, Static Server and AWS as separate purchases. Check the full requirements and current price at checkout.',
      ],
    },
  },
  'skin-changer': {
    images: skinChangerShowcaseSlides,
    goodToKnow:
      'The cosmetic shows inside your local client only. The inventory does not receive the item. Ask staff whether the title is covered before checkout.',
    limitations:
      'A cosmetic client can still conflict with game terms and can lead to account action. A finish is not a real good. It cannot be traded. It leaves when the client exits. A patch or a Windows update can change which games and items are listed.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10 or 11, 64-bit.' },
      { icon: 'reqShieldGuide', text: 'Core Isolation and HVCI enabled in Windows Security.' },
      { icon: 'reqSettings', text: 'Secure Boot and TPM enabled in BIOS/UEFI.' },
      { icon: 'reqWifi', text: 'Internet, plus loader access, after you purchase.' },
    ],
    fullFeatures: [
      'Presets for premium weapon finishes',
      'Presets for character outfits',
      'Presets for rare knife styles',
      'Coverage across major titles',
      'A lightweight client on this PC',
      'Cosmetic drawing on this screen only',
      'Monthly and lifetime cosmetic licenses',
      'Windows 10 and Windows 11 support',
    ],
    overview: {
      title: 'Finishes drawn here, not bought one by one',
      paragraphs: [
        'Skin Changer draws premium weapon skins onto supported games. Outfits and knife variants are in that same library. You do not buy each cosmetic on its own.',
        'The picture stays on your machine. It is not written to the account inventory. One library is shared by both plans. Before you purchase, ask support to confirm the title.',
      ],
    },
  },
};

const utilityAcquisitionSteps: Record<UtilityProductSlug, AcquisitionStep[]> = {
  [HWID_SPOOFER_SLUG]: hwidAcquisitionSteps,
  [CLOUD_DMA_SLUG]: cloudDmaAcquisitionSteps,
  [SKIN_CHANGER_SLUG]: skinChangerAcquisitionSteps,
};

const utilityAcquisitionTitles: Record<UtilityProductSlug, string> = {
  [HWID_SPOOFER_SLUG]: 'Order for this HWID license',
  [CLOUD_DMA_SLUG]: 'Setting up Cloud DMA',
  [SKIN_CHANGER_SLUG]: 'Before the cosmetic client',
};

function buildTierPages(t: Translations): ProductPage[] {
  return t.cheats.items.map((cheat) => {
    const slug = slugFromHref(cheat.href);
    const content = productContent[slug];
    const displayName = CHEAT_PRODUCT_NAME;
    return {
      slug,
      kind: 'tier',
      badge: cheat.badge,
      tier: cheat.tier,
      name: cheat.name,
      title: cheat.title,
      subtitle: cheat.heroDesc ?? cheat.desc,
      desc: cheat.desc,
      features: cheat.features,
      more: cheat.more,
      variant: cheat.variant,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: acquisitionFor(displayName),
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      about: tierAbout[slug],
      body: tierBodies[slug] ?? [],
      relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
      relatedForumSlugs: productRelatedForumSlugs[slug] ?? [],
    };
  });
}

function findProductCard(t: Translations, slug: UtilityProductSlug) {
  const match = (items: Translations['products']['items']) =>
    items.find((item) => slugFromHref(item.href) === slug);
  return match(t.products.items) ?? match(getTranslations('en').products.items);
}

function buildUtilityPages(t: Translations): ProductPage[] {
  return UTILITY_PRODUCT_SLUGS.flatMap((slug) => {
    const product = findProductCard(t, slug);
    const content = productContent[slug];
    if (!product || !content) return [];

    return [
      {
        slug,
        kind: 'utility' as const,
        badge: product.badge,
        category: product.category,
        name: product.title,
        title: product.title,
        subtitle: product.subtitle,
        desc: product.desc,
        features: product.features,
        more: Math.max(0, content.fullFeatures.length - product.features.length),
        buyUrl: checkoutForSlug(slug),
        images: content.images,
        overview: content.overview,
        acquisition: {
          title: utilityAcquisitionTitles[slug],
          steps: utilityAcquisitionSteps[slug],
        },
        goodToKnow: content.goodToKnow,
        limitations: content.limitations,
        fullFeatures: content.fullFeatures,
        systemRequirements: content.systemRequirements,
        body: utilityBodies[slug] ?? [],
        relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
        relatedForumSlugs: productRelatedForumSlugs[slug] ?? [],
      },
    ];
  });
}

export function getProductPages(locale: SiteLocale): ProductPage[] {
  const t = getTranslations(locale);
  return [...buildTierPages(t), ...buildUtilityPages(t)].map((page) =>
    deepApplySiteTokens(applyProductCopy(page, locale)),
  );
}

export function getCheatPages(locale: SiteLocale) {
  return getProductPages(locale).filter((p) => p.kind === 'tier');
}

export function getProductPage(slug: string, locale: SiteLocale) {
  return getProductPages(locale).find((p) => p.slug === slug);
}

/** Tier slugs for sitemap extras, store lives at `PRODUCT_BASE` only. */
export function getAllProductSlugs(): string[] {
  const slugs = getAllCheatSlugs();
  const catalog = new Set<string>(CHEAT_PRODUCT_SLUGS);
  for (const slug of slugs) {
    if (!catalog.has(slug as (typeof CHEAT_PRODUCT_SLUGS)[number])) {
      throw new Error(`Cheat slug "${slug}" missing from CHEAT_PRODUCT_SLUGS in src/config/catalog.ts`);
    }
  }
  return [];
}

export function getHwidSpooferPage(locale: SiteLocale) {
  return getProductPage(HWID_SPOOFER_SLUG, locale);
}

export function getUtilityPages(locale: SiteLocale) {
  return getProductPages(locale).filter((p) => p.kind === 'utility');
}

export function utilityProductPath(slug: UtilityProductSlug): string {
  return UTILITY_PRODUCT_PATHS[slug];
}

export function getAllCheatSlugs() {
  return getCheatPages('en').map((p) => p.slug);
}

export function getHeroSlides(locale: SiteLocale): ProductSlide[] {
  if (locale === 'en') return showcaseSlides;
  const gallery = productCopyByLocale[locale].gallery;
  return showcaseSlides.map((slide, index) => {
    const copy = gallery[index];
    if (!copy) return slide;
    return { ...slide, alt: copy.alt, caption: copy.caption, captionDesc: copy.captionDesc };
  });
}

const productCopyByLocale: Record<Exclude<SiteLocale, 'en'>, ProductCopyBundle> = {
  es: esProductCopy as ProductCopyBundle,
  de: deProductCopy as ProductCopyBundle,
  fr: frProductCopy as ProductCopyBundle,
};

function acquisitionTitleFor(productName: string) {
  return `How to get ${productName}`;
}

function buildEnglishProductCopyBundle(): ProductCopyBundle {
  const tierSlugs = ['elite'] as const;
  const utilitySlugs = ALL_UTILITY_PRODUCT_SLUGS;

  const tiers = Object.fromEntries(
    tierSlugs.map((slug) => {
      const content = productContent[slug];
      const displayName = CHEAT_PRODUCT_NAME;
      return [
        slug,
        {
          about: tierAbout[slug],
          body: tierBodies[slug] ?? [],
          overview: content.overview,
          goodToKnow: content.goodToKnow,
          limitations: content.limitations,
          acquisitionTitle: acquisitionTitleFor(displayName),
        },
      ];
    }),
  ) as ProductCopyBundle['tiers'];

  const utilities = Object.fromEntries(
    utilitySlugs.map((slug) => {
      const content = productContent[slug];
      return [
        slug,
        {
          body: utilityBodies[slug] ?? [],
          overview: content.overview,
          goodToKnow: content.goodToKnow,
          limitations: content.limitations,
          acquisitionTitle: utilityAcquisitionTitles[slug],
          acquisitionSteps: utilityAcquisitionSteps[slug],
          systemRequirements: content.systemRequirements.map((r) => r.text),
        },
      ];
    }),
  ) as ProductCopyBundle['utilities'];

  return {
    sharedGoodToKnow,
    sharedLimitations,
    acquisitionSteps: defaultAcquisitionSteps.map(({ num, title, desc }) => ({ num, title, desc })),
    systemRequirements: mainProductSystemRequirements.map((r) => r.text),
    gallery: Object.values(galleryRaw).map(({ alt, caption, captionDesc }) => ({
      alt,
      caption,
      captionDesc,
    })),
    tiers,
    utilities,
  };
}

registerProductCopyBundle(buildEnglishProductCopyBundle());

export const heroSlides = getHeroSlides('en');

function productCopyFor(locale: SiteLocale): ProductCopyBundle {
  if (locale === 'en') return getProductCopyBundle();
  return productCopyByLocale[locale];
}

function applyProductCopy(page: ProductPage, locale: SiteLocale): ProductPage {
  if (locale === 'en') return page;
  const copy = productCopyFor(locale);
  const bucket = page.kind === 'tier' ? copy.tiers[page.slug] : copy.utilities[page.slug];
  if (!bucket) return page;

  const isTier = page.kind === 'tier';
  const localizedSteps = isTier ? copy.acquisitionSteps : 'acquisitionSteps' in bucket ? bucket.acquisitionSteps : undefined;
  const localizedRequirements = isTier
    ? copy.systemRequirements
    : 'systemRequirements' in bucket
      ? bucket.systemRequirements
      : undefined;

  const acquisition: ProductAcquisition = {
    title: bucket.acquisitionTitle,
    steps: localizedSteps?.map((step) => ({ ...step })) ?? page.acquisition.steps,
  };

  const localizedGallery = isTier ? copy.gallery : 'gallery' in bucket ? bucket.gallery : undefined;
  const images = localizedGallery
    ? page.images.map((slide, index) => {
        const g = localizedGallery[index];
        if (!g) return slide;
        return { ...slide, alt: g.alt, caption: g.caption, captionDesc: g.captionDesc };
      })
    : page.images;
  const fullFeatures =
    'fullFeatures' in bucket && bucket.fullFeatures?.length ? bucket.fullFeatures : page.fullFeatures;

  const systemRequirements = page.systemRequirements.map((req, index) => ({
    ...req,
    text: localizedRequirements?.[index] ?? req.text,
  }));

  return {
    ...page,
    overview: bucket.overview,
    body: bucket.body,
    about: 'about' in bucket ? bucket.about : page.about,
    goodToKnow: bucket.goodToKnow,
    limitations: bucket.limitations,
    acquisition,
    images,
    fullFeatures,
    systemRequirements,
  };
}
