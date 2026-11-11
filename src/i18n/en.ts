import type { Translations } from './types';
import {
  HWID_SPOOFER_PATH,
  PRODUCT_BASE,
  PRODUCTS_HUB_PATH,
  SITE_DOMAIN,
  SITE_NAME,
  SKIN_CHANGER_PATH,
  CLOUD_DMA_PATH,
} from '../config/site';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: SITE_NAME,
    domain: SITE_DOMAIN,
    title: 'Modern Warfare 4 Cheats | Aimbot, Player ESP and Radar',
    description:
      'Aimbot, silent aimbot, ESP, wallhack, no recoil, God Mode, infinite ammo, and speedhack for Modern Warfare 4.',
  },
  nav: [
    {
      id: 'products',
      href: PRODUCTS_HUB_PATH,
      label: 'Products',
      shortLabel: 'Products',
      sheetLabel: 'Browse products',
    },
    { id: 'blog', href: '/blog/', label: 'Blog', sheetLabel: 'Read the blog' },
    { id: 'forum', href: '/forum/', label: 'Forum', sheetLabel: 'Open the forum' },
    { id: 'faq', href: '/faq/', label: 'FAQ', sheetLabel: 'Pre-purchase questions' },
    { id: 'support', href: '/support/', label: 'Support', sheetLabel: 'Get support' },
  ],
  hero: {
    status: 'Read the Modern Warfare 4 banner on this site before you launch.',
    eyebrow: 'Dominate Every Match',
    titleLead: 'Modern Warfare 4 ',
    titleAccent: 'Cheats',
    subtitle:
      'Aimbot, ESP, and radar tools for Modern Warfare 4 on PC, plus wallhack. Browse the products below for features and setup requirements.',
    ctaPrimary: 'View products',
    metrics: [
      { label: 'Silent aimbot', strong: 'Listed' },
      { label: 'Patch speed', strong: '<24h' },
      { label: 'Users', strong: '300+' },
      { label: 'Live support', strong: '24/7' },
    ],
    statusPills: [
      'Aimbot',
      'Silent aimbot',
      'ESP',
      'Wallhack',
      'No recoil',
      'God Mode',
      'Infinite ammo',
      'Speedhack',
      'Menu toggles',
      '24/7 Support',
      'Live Status',
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'Everything you need in one package',
    subtitle:
      'mw4 cheats lists aimbot, silent aimbot, ESP, wallhack, no recoil, God Mode, infinite ammo, and speedhack for Modern Warfare 4.',
    items: [
      {
        title: 'ESP',
        subtitle: 'Position, health, distance.',
        desc: 'In a Modern Warfare 4 fight, ESP marks enemy position and adds a health value plus a distance value.',
        bullets: ['Enemy position', 'Health value', 'Distance value', 'Players tab switch', 'Separate from aim'],
        tags: ['esp', 'health', 'distance'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Wallhack',
        subtitle: 'See past cover.',
        desc: 'Wallhack uses the same position, health, and distance readouts as ESP when a player is behind cover.',
        bullets: ['Paired with ESP', 'Position behind cover', 'Health and distance', 'Own menu switch'],
        tags: ['wallhack', 'esp', 'position'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Aimbot',
        subtitle: 'Target controls.',
        desc: 'The aimbot tab sets smoothness, which bone to prefer, and how far a target can be.',
        bullets: ['Silent aimbot', 'Smoothness slider', 'Bone choice', 'Distance cap'],
        tags: ['aimbot', 'silent aimbot', 'smoothness'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'No recoil',
        subtitle: 'Weapon handling.',
        desc: 'No recoil is a weapon handling switch for Modern Warfare 4 guns, separate from the aimbot tab.',
        bullets: ['Weapon switch', 'Not on the aim tab', 'Leave the switch off', 'Open it again after a patch'],
        tags: ['no recoil', 'weapon handling', 'menu'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'God Mode',
        subtitle: 'Combat option.',
        desc: 'God Mode is a combat switch in the same menu. A patch can take it off the list.',
        bullets: ['Combat switch', 'Independent of aim', 'Turn the switch off', 'Confirm it after a patch'],
        tags: ['god mode', 'combat', 'menu'],
        bento:
          'sm:col-span-2 lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-4',
      },
      {
        title: 'Infinite ammo',
        subtitle: 'Ammo option.',
        desc: 'Infinite ammo changes magazine limits in a Modern Warfare 4 fight and sits apart from no recoil.',
        bullets: ['Ammo switch', 'Apart from no recoil', 'Turn the switch off', 'Confirm it after a patch'],
        tags: ['infinite ammo', 'combat', 'menu'],
        bento:
          'sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-4',
      },
      {
        title: 'Speedhack',
        subtitle: 'Movement option.',
        desc: 'Speedhack changes movement speed. Switch it off before the next round if you do not want it.',
        bullets: ['Movement switch', 'Not an aim setting', 'Turn the switch off', 'Confirm it after a patch'],
        tags: ['speedhack', 'movement', 'menu'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-6',
      },
      {
        title: 'Silent aimbot',
        subtitle: 'Aim option.',
        desc: 'Silent aimbot shares the aimbot tab: smoothness, bone priority, and a maximum distance.',
        bullets: ['Shares the aim tab', 'Smoothness', 'Bone priority', 'Maximum distance'],
        tags: ['silent aimbot', 'aimbot', 'bone priority'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-6',
      },
      {
        title: 'Menu toggles',
        subtitle: 'Each option.',
        desc: 'Every listed option has its own switch. A Modern Warfare 4 patch can change which switches still work.',
        bullets: ['One switch each', 'Aim tab in that menu', 'Players tab in that menu', 'Read the banner after a patch'],
        tags: ['menu', 'toggles', 'patch'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why us',
    title: 'Modern Warfare 4 tooling backed by patches, not promises',
    subtitle:
      '{siteDomain} ships loader builds on patch day. ESP shows position, health, and distance. Operators work a 24/7 shift.',
    usLabel: '{siteName}',
    otherLabel: 'Typical provider',
    rows: [
      {
        title: 'Patch-day loader updates',
        desc: 'A loader build goes out within hours of a Modern Warfare 4 update. Read the status banner before you queue.',
      },
      {
        title: 'Aim settings',
        desc: 'Smoothness, bone priority, and maximum distance are on the aimbot tab. ESP shows position, health, and distance.',
      },
      {
        title: 'Live operators',
        desc: 'Engineers handle loader setup, ESP configs, and HWID resets across a 24/7 shift.',
      },
      {
        title: 'Menu options',
        desc: 'Flip each listed option on or off. After a patch, open the menu and see which switches remain.',
      },
      {
        title: 'Compatibility',
        desc: 'Match the current Modern Warfare 4 build before you launch. An anti-cheat update can change what still runs.',
      },
      {
        title: 'HWID reset & license moves',
        desc: 'Support handles HWID clears and a move to another PC. Other shops often lock one machine or bill every swap.',
      },
    ],
    metrics: [
      {
        value: '<24h',
        title: 'Patch turnaround',
        desc: 'How long a loader build takes after a major Modern Warfare 4 or anti-cheat change.',
      },
      {
        value: '24/7',
        title: 'Operator support',
        desc: 'People on shift for loader setup, menu configs, and account questions.',
      },
      {
        value: '300+',
        title: 'Active operators',
        desc: 'Windows players on {siteDomain} using the cheat menu and the utilities.',
      },
    ],
  },
  setup: {
    eyebrow: 'Setup guide',
    titleLead: 'From checkout to your first match in just',
    titleHighlight: 'three simple steps',
    intro:
      'The mw4 private cheat arrives in the operator portal. Download the loader, set the menu, then launch Modern Warfare 4.',
    ctaPrimary: 'View product',
    ctaSecondary: 'Read the setup FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Open the portal and download the loader',
        desc: 'Finish checkout, open the operator dashboard, and download the current loader for Windows.',
      },
      {
        step: 'Step 2',
        title: 'Launch & configure modules',
        desc: 'Start the external loader and set aimbot, ESP, and the other menu options for Modern Warfare 4.',
      },
      {
        step: 'Step 3',
        title: 'Verify status & launch Modern Warfare 4',
        desc: 'Read the status banner, start the game client, and keep the profile stored in the portal.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform support',
    title: 'Runs on your rig.',
    subtitle: 'Read the status banner before you start Modern Warfare 4 after an update.',
    items: ['Windows 10 & 11', 'Modern Warfare 4', 'anti-cheat client', 'Auto updater', 'Config cloud sync', 'HWID reset', 'External loader'],
  },
  cheats: {
    eyebrow: 'Main product',
    title: 'Modern Warfare 4 Cheats',
    subtitle: 'Aimbot, silent aimbot, ESP, wallhack, and the rest of the listed options.',
    viewAll: 'View product details',
    explore: 'Explore',
    items: [
      {
        badge: 'Limited slots',
        tier: 'Private',
        name: 'Modern Warfare 4 Cheats',
        title: 'Modern Warfare 4 Hacks for Windows',
        desc: 'Aimbot, silent aimbot, ESP, wallhack, no recoil, God Mode, infinite ammo, and speedhack.',
        homeDesc:
          'When you buy mw4 cheats you get aimbot, silent aimbot, ESP, wallhack, no recoil, God Mode, infinite ammo, and speedhack.',
        heroDesc:
          'Aimbot controls here are smoothness, target bone priority, and maximum distance. Silent aimbot sits on the same tab. Confirm the game build on {siteDomain} before you launch.',
        features: ['Aimbot', 'Silent aimbot', 'ESP', 'Wallhack', 'No recoil', 'Speedhack'],
        more: 9,
        href: productBase,
        variant: 'limited',
      },
    ],
  },
  products: {
    eyebrow: 'Store',
    title: 'Our products',
    subtitle:
      'Compare the cheat menu and the utilities on this grid. Open a product page for the feature list and checkout.',
    viewAll: 'View all cheats',
    backToCheats: 'Back to product',
    showcaseHeading: 'Product Overview',
    experience: {
      eyebrow: 'Experience',
      title: 'Menu layers · After checkout',
      subtitle:
        'The shots above are the Modern Warfare 4 menu. The notes below say what each group does, and how the portal opens after checkout.',
      previewLabel: 'In-game layers',
      accessDividerTop: 'Preview',
      accessDividerBottom: 'Access',
    },
    hwidPage: {
      showcaseHeading: 'Panel captures',
      overviewSubtitle:
        'Which IDs the panel rewrites, which anti-cheat families are listed, and how a machine flag differs from an account sanction.',
      highlights: {
        eyebrow: 'At a glance',
        title: 'Hwid Spoofer: What a hardware refresh covers',
        desc: 'After a hardware flag, the panel can rewrite disk IDs. It can rewrite MAC IDs and GPU IDs, and related IDs. The aim is a sign-in on this PC. Tables lower on the page list the rows.',
      },
      featuresSection: {
        eyebrow: 'Listed rows',
        title: 'IDs and the published families',
        desc: 'A row names a fingerprint field the panel edits, or an anti-cheat family written on this page.',
      },
      experience: {
        eyebrow: 'After checkout',
        title: 'Panel notes, then portal order',
        subtitle:
          'Callouts for the panel are on the left. License delivery and the setup order are on the right.',
        previewLabel: 'Panel shots',
        accessDividerTop: 'Panel',
        accessDividerBottom: 'Order',
      },
      highlightsMore: '{count} further rows are in the feature table lower on the page.',
    },
    utilityPages: {
      'cloud-dma': {
        showcaseHeading: 'Cloud DMA setup',
        overviewSubtitle: 'Check Windows, Hyper-V and the separate purchases before ordering.',
        highlights: { eyebrow: 'In short', title: 'A Hyper-V environment on one PC', desc: 'The guided installer sets up the virtual environment and activates the service over an encrypted connection.' },
        featuresSection: { eyebrow: 'Included', title: 'Cloud DMA features', desc: 'The lifetime license covers the Cloud DMA infrastructure layer.' },
        experience: { eyebrow: 'Setup', title: 'From purchase to activation', subtitle: 'Follow the Windows and Hyper-V checks before you run the installer.', previewLabel: 'Setup', accessDividerTop: 'Setup', accessDividerBottom: 'Order' },
        highlightsMore: '{count} more capability rows are further down this page.',
      },
      'skin-changer': {
        showcaseHeading: 'Client frames',
        overviewSubtitle:
          'Where the finish is drawn, what stays out of your inventory, and how to check a title before checkout.',
        highlights: {
          eyebrow: 'Library',
          title: 'The finish library on this PC',
          desc: 'Premium weapon skins are in the library. So are outfits and knife styles, inside supported games. Each item is not its own purchase.',
        },
        featuresSection: {
          eyebrow: 'Groups',
          title: 'Cosmetic groups',
          desc: 'These finish types are available once the cosmetic license is active.',
        },
        experience: {
          eyebrow: 'When access arrives',
          title: 'Shots, then portal access',
          subtitle: 'Shot notes stay on the left side. The right side covers portal access, then how the menu is set up.',
          previewLabel: 'Shots',
          accessDividerTop: 'Frames',
          accessDividerBottom: 'Order',
        },
        highlightsMore: '{count} cosmetic rows continue lower on this page.',
      },
    },
    swipeHint: 'Swipe for more screenshots',
    checkoutEyebrow: 'Checkout',
    checkoutSelect: 'Select subscription',
    checkoutSingle: 'Purchase option',
    checkoutTotal: 'Total',
    bestValue: 'Best value',
    planWeekly: '1 Week',
    planWeeklyNote: '7 days',
    planMonthly: 'Monthly',
    planLifetime: 'Lifetime',
    planOneTime: 'One-time access',
    planPerMonth: '31 days of access',
    planOneTimeNote: 'Unlimited access',
    get: 'Get',
    explore: 'Explore',
    buyNow: 'View Purchase Options',
    viewDetails: 'View details',
    items: [
      {
        badge: 'Available',
        category: 'Hardware utility',
        title: 'HWID Spoofer for Modern Warfare 4 PCs',
        subtitle:
          'Disk serials, MAC addresses, and GPU IDs get a new pass. The cleaner in the license runs before the next sign-in.',
        desc: 'After a hardware flag, this license rewrites disk serials. It also rewrites MAC addresses, GPU IDs, and related fingerprints. Trace cleanup is in the same license.',
        features: ['Disk serial rewrite', 'MAC rewrite', 'GPU ID rewrite', 'Cleaner in the license'],
        more: 0,
        href: HWID_SPOOFER_PATH,
      },
      {
        badge: 'Available',
        category: 'Single-PC infrastructure',
        title: 'Cloud DMA',
        subtitle: 'A Hyper-V environment for one Windows PC with guided installation and encrypted activation.',
        desc: 'Cloud DMA may require GREENWARD, Static Server and AWS as separate purchases. Check the full requirements and current price at checkout.',
        features: ['Single-PC setup', 'Guided Hyper-V installation', 'Encrypted activation', 'Lifetime access'],
        more: 0,
        href: CLOUD_DMA_PATH,
      },
      {
        badge: 'Available',
        category: 'On-screen cosmetics',
        title: 'Client Skin Changer for Supported Titles',
        subtitle:
          'Weapon skins and outfits, drawn on this PC, without a separate purchase for each cosmetic.',
        desc: 'A small client paints premium weapon skins on your screen. Outfits and knife variants are included, across the major titles it lists.',
        features: ['Weapon finish looks', 'Outfit looks', 'Knife style looks', 'Major titles covered'],
        more: 0,
        href: SKIN_CHANGER_PATH,
      },
    ],
  },
  blog: {
    eyebrow: 'Blog',
    title: 'Guides and updates',
    subtitle: 'ESP and aimbot setup, menu tuning and patch-day checks for Modern Warfare 4.',
    latestTitle: 'Guides: Modern Warfare 4 Cheat and Patch-Day Notes',
    latestSubtitle: 'Filter by topic to find setup guides, feature deep-dives, and patch-day notes.',
    filterAll: 'All articles',
    emptyFilter: 'No articles match this filter.',
    emptyArchive: 'No articles yet. New guides will show up here.',
    viewAll: 'View all articles',
    read: 'Read full article',
    articleActionsAria: 'Continue reading',
    buyCta: 'Buy Modern Warfare 4 Cheats',
    buyHwidCta: 'Buy the HWID license',
    moreArticles: 'More articles',
    sidebarAria: 'Article sidebar',
    tocTitle: 'In this article',
    relatedTitle: 'Related guides',
    filterToolbarAria: 'Filter articles by topic',
    items: [],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 easy steps',
    titleBefore: 'From status check to',
    titleHighlight: 'saved profile.',
    subtitle: 'Four steps from the status banner to a portal profile you can load next time.',
    ctaLabel: 'View product',
    ctaHref: productBase,
    ctaSecondary: 'Setup FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Check live status',
        desc: 'Open {siteDomain} and read the banner before you pay or start the game.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Choose your product',
        desc: 'Pick the cheat suite, or a utility when the issue is this PC or an account limit.',
      },
      {
        num: '03',
        phase: 'Loader',
        title: 'Launch & configure',
        desc: 'Download the loader from the portal, turn modules on, and set ESP and aim before a live match.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Save your profile',
        desc: 'Save the menu profile in the portal so the next session starts from those settings.',
      },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'Modern Warfare 4 Cheats Support',
    subtitle: 'Get help with an order, find setup instructions, or look up a common question.',
    channels: [
      {
        id: 'tickets',
        title: 'Support tickets',
        desc: 'Sign in to get help with an order, account, or installation and track replies in one place.',
        linkLabel: 'Open a ticket',
      },
      {
        id: 'documentation',
        title: 'Setup guides',
        desc: 'Find installation instructions, learn where to find your license key, and troubleshoot common errors.',
        linkLabel: 'View setup guides',
      },
      {
        id: 'faq',
        title: 'Common questions',
        desc: 'Find answers about payment, delivery, account access, and order status.',
        linkLabel: 'Read the FAQ',
      },
    ],
    ticketTitle: 'What to include in a ticket',
    ticketItems: [
      { title: 'Order number', desc: 'Include your order number for payment or delivery questions.' },
      { title: 'Setup details', desc: 'For technical issues, include the product name and your Windows version.' },
      { title: 'What happened', desc: 'Describe the step that failed and include the exact error or a screenshot.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Straight answers before checkout.',
    subtitle: 'Platform, account penalties, plans, and how a license moves to a new PC.',
    items: [
      {
        num: '01',
        q: 'Where do I check if Modern Warfare 4 cheats are online?',
        a: 'The status banner is on {siteDomain}. Read it after a Modern Warfare 4 update and after an anti-cheat update.',
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'After checkout, open the portal for the loader, setup guide, and saved configs. Read the guide before you start Modern Warfare 4.',
      },
      {
        num: '03',
        q: 'Can I get banned using third-party Modern Warfare 4 cheats?',
        a: 'Yes. A third-party modification can lead to an account penalty. Anti-cheat rules change. Read the banner before you use the menu.',
      },
      {
        num: '04',
        q: 'Which platforms are supported?',
        a: 'Modern Warfare 4 on 64-bit Windows 10 or Windows 11. macOS and Linux are outside that list.',
      },
      {
        num: '05',
        q: 'Can I move my license to a new PC?',
        a: 'Use the HWID reset in the portal, or open a support ticket. The number of moves depends on the tier.',
      },
      {
        num: '06',
        q: 'Where are products and utilities listed?',
        a: 'The mw4 cheat shop is {siteDomain}/products/. Each product page lists its features and links to checkout.',
      },
    ],
  },
  footer: {
    homeLink: '{siteName}',
    tagline: 'Aimbot, ESP, and wallhack for Modern Warfare 4. Purchase options are shown at checkout.',
    trademark: '{game} is a trademark of its respective owner. {siteDomain} is not affiliated with or endorsed by that owner.',
    explore: 'Explore',
    exploreLinks: [
      { id: 'products', href: '/', label: 'Feature overview', ariaLabel: 'Features', scrollTarget: 'features' },
      { id: 'products', href: PRODUCTS_HUB_PATH, label: 'All products', ariaLabel: 'All products' },
      { id: 'products', href: productBase, label: 'Cheat features and modules', ariaLabel: '{cheatProduct}' },
      { id: 'hwidSpoofer', href: HWID_SPOOFER_PATH, label: 'HWID panel', ariaLabel: 'HWID Spoofer' },
      { id: 'products', href: CLOUD_DMA_PATH, label: 'Cloud DMA', ariaLabel: 'Cloud DMA' },
      { id: 'products', href: SKIN_CHANGER_PATH, label: 'Skin client', ariaLabel: 'Skin Changer' },
      { id: 'blog', href: '/blog/', label: 'Guides and articles', ariaLabel: 'Blog' },
      { id: 'forum', href: '/forum/', label: 'Community forum', ariaLabel: 'Forum' },
    ],
    supportLinks: [
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
      { href: '/support/', label: 'Contact support', ariaLabel: 'Support' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About {siteName}',
      description:
        '{siteName} publishes {cheatProduct}, the utility pages, and support notes at {siteDomain}.',
      sections: [
        {
          heading: 'Mw4 Cheat: Who we are',
          paragraphs: [
            '{siteName} is a PC catalog for Modern Warfare 4 tools. The site lists the cheat menu, HWID Spoofer, Cloud DMA, and Skin Changer.',
            'Setup notes and the status banner are here so you can judge {cheatProduct} before you pay. Product names identify the software. They are not a claim of ownership.',
          ],
        },
        {
          heading: 'What we publish',
          paragraphs: [
            'The main product lists aimbot, silent aimbot, ESP, wallhack, no recoil, God Mode, infinite ammo, and speedhack.',
            'Current prices are shown at checkout. Articles cover menu setup, patch-day checks, and what an anti-cheat update changes.',
            'Pages change when a patch lands or a menu option moves. Read the homepage banner before a session.',
          ],
        },
        {
          heading: 'How setup works',
          paragraphs: [
            'After payment, the operator portal opens. Download the current Windows loader there.',
            'Set the menu, then read the status banner. Launch Modern Warfare 4 only after that check. Patches and anti-cheat updates can change what still runs.',
          ],
        },
        {
          heading: 'Requirements',
          paragraphs: [
            'The cheat is listed for 64-bit Windows 10 or Windows 11. macOS and Linux are not on that list.',
            'Utilities also ask for HVCI, Core Isolation, TPM, and Secure Boot where their pages say so.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Use the Support page to open a ticket for order or setup issues. Include your order number or the exact error, depending on the issue.',
            'The FAQ and the read-only forum archive cover setup notes too. Read the homepage banner before a session.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      description:
        'Analytics, cookies, and the email you send with a support ticket on {siteDomain}.',
      sections: [
        {
          heading: 'Information we collect',
          paragraphs: [
            'If Google Analytics is on, it can record page views, device type, browser, and an approximate region. Payment and license delivery run on external checkout pages. {siteDomain} does not keep payment card numbers.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Those analytics show which guides and product pages get used, so broken links and thin pages can be fixed. A support ticket can keep the email and the message until that issue is closed.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'Cookies on this site are limited to analytics. Block them in the browser and the pages still load.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Privacy questions go through the Support page. Purchase and refund rules are in the Terms & Conditions.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      description:
        'What you buy, how licenses work, when a refund can be considered, and the account penalty you accept on {siteDomain}.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: September 2026. Using {siteDomain}, or finishing checkout for a product listed here, means you accept these Terms & Conditions and the Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'The products are {cheatProduct} and the utilities on the products page. Delivery is an operator portal and a loader on Windows.',
            'Each product page states what that purchase includes at the time you pay. A Modern Warfare 4 update or an anti-cheat update can change the modules.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and the license are handled on external checkout pages. {siteDomain} does not process or store payment card numbers.',
            'After you pay, open the operator portal from the order flow and download the current loader and setup guide before you start Modern Warfare 4.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'A license is for you alone. Do not share loader files, portal logins, or license keys. HWID and device limits follow the tier and are enforced in the portal.',
          ],
        },
        {
          heading: 'Refunds and purchases',
          paragraphs: [
            'A sale is final when checkout completes. There is no refund for a change of mind, an account penalty, an anti-cheat penalty, or a problem caused by skipping the setup guide or running modules while the banner says offline.',
            'If the product fails on the setup it describes, Modern Warfare 4 on Windows 10 or 11, the current portal loader, and the banner showing online when you started, use the Support page. Include the order email, Windows version, game build, and a screenshot or the exact loader error.',
            'Support may offer a fix, replacement access, or a partial or full refund when the fault is on our side. Support does not have to approve every request.',
          ],
        },
        {
          heading: 'Availability and risk',
          paragraphs: [
            'Third-party tools for Modern Warfare 4 can stop working after a game update or an anti-cheat update. Using them can lead to account action.',
            'Read the homepage banner before a session. Stay out of a match while the banner says the modules are offline or still being aligned after a patch.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'These terms can be updated. The Last updated date at the top changes when that happens. Using the site after that date means you accept the revised terms.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Terms, billing, and loader questions go through the buttons on the Support page. The Privacy Policy covers how site data is handled.',
          ],
        },
      ],
    },
    support: {
      title: '{siteName} Support',
      description:
        'Loader errors, HWID resets, and checkout questions are handled from {siteDomain}.',
    },
  },
  common: {
    breadcrumbHome: 'Home',
    breadcrumbProducts: 'Products',
    breadcrumbBlog: 'Blog',
    breadcrumbForum: 'Forum',
    breadcrumbFaq: 'FAQ',
    breadcrumbAbout: 'About',
    breadcrumbPrivacy: 'Privacy',
    breadcrumbTerms: 'Terms',
    breadcrumbSupport: 'Support',
    contactSupport: 'Contact support',
  },
  notFound: {
    metaDescription:
      'This address is not a page on {siteDomain}. Open the homepage or the product list to keep browsing.',
    title: 'Page not found',
    documentTitle: 'This address is not a page',
    body: 'That address is missing. Go back to the homepage or open the product list.',
    backHome: 'Back to home',
    viewProducts: 'View products',
    viewElite: 'View product page',
  },
  pages: {
    faq: {
      eyebrow: 'Help center',
      title: 'Faq: Setup, plans and anti-cheat answers',
      description:
        'This faq covers setup steps, the 30 day and lifetime plans, ESP and aim options, and what to do after an anti-cheat update.',
      schemaName: 'Modern Warfare 4 Cheats FAQ',
      schemaDescription:
        'Setup, plan length, ESP, aimbot, loader delivery, and checkout answers for Modern Warfare 4 on {siteDomain}.',
    },
    forum: {
      eyebrow: 'Modern Warfare 4 community forum',
      title: 'Forum: Modern Warfare 4 Community Archive',
      description:
        'Forum: Archived, read-only threads on loader setup, ESP configs, patch status, and HWID bans. Replies are closed.',
      exploreGuides: 'Explore the guides',
      postsAria: 'Community posts',
      sortAria: 'Post sorting',
      sortPopular: 'Popular',
      sortLatest: 'Latest',
      sortTop: 'Most discussed',
      filterAria: 'Filter discussions by topic',
      filterAll: 'All topics',
      resultsCount: 'guide discussions',
      voteAria: 'Discussion voting',
      upvoteAria: 'Upvote this discussion',
      downvoteUnavailableAria: 'Downvoting is unavailable',
      guideTeam: '{siteName} guide team',
      guideBasedQa: 'Guide-based Q&A',
      fromGuide: 'From the guide:',
      comments: 'comments',
      closedThread: 'Closed thread',
      closedBy: 'Closed by archive',
      repliesClosed: 'Replies are closed',
      readDiscussion: 'Read discussion',
      empty: 'No discussions match. Try another search or topic.',
      emptyArchive: 'No discussions yet. New threads will show up here.',
      categoryGeneral: 'General',
      categoryGuides: 'Guides & Builds',
      categoryPatch: 'Patch Talk',
      categoryCommunity: 'Community',
      categoryLabels: {
        'MW4 Discussion': 'MW4 Discussion',
        'Gameplay Questions': 'Gameplay Questions',
        'Product Questions': 'Product Questions',
        'Setup & Support': 'Setup & Support',
        'Game Updates': 'Game Updates',
        'Features & Customization': 'Features & Customization',
        'Account & PC Questions': 'Account & PC Questions',
        'PC Performance & Support': 'PC Performance & Support',
      },
      paginationAria: 'Discussion pages',
      pagePrevious: 'Previous',
      pageNext: 'Next',
      sidebarTitle: '{siteName} Community',
      sidebarIntro: 'Read-only archive. Threads stay up for reference, you cannot start a thread or reply.',
      statsDiscussions: 'guide discussions',
      statsTopics: 'topics',
      exploreAllGuides: 'Explore all guides',
      communitiesHeading: 'Communities',
      browseRelated: 'Browse related Q&A',
      browseAllCommunities: 'Browse all communities',
      guidelinesHeading: 'Community guidelines',
      guideline1: 'Keep it friendly and constructive',
      guideline2: 'Stay on topic and add context',
      guideline3: 'Mark spoilers and sensitive content',
      readFullGuidelines: 'Read the full guidelines',
      sidebarFoot: 'About · Guidelines · Privacy · Terms',
    },
    utilities: {
      title: 'HWID Spoofer',
      description: 'Hardware identifiers are refreshed when other PCs accept a login and this one rejects it at once.',
      viewDetails: 'Open the utility page',
      includes: 'In the license:',
      schemaName: 'HWID Spoofer',
    },
  },
  pageSeo: {
    '/': {
      title: 'Modern Warfare 4 Cheats | Aimbot, ESP and Radar on PC',
      description:
        'Modern Warfare 4 Cheats with aimbot, player ESP, and radar on Windows. Review purchase options at checkout.',
    },
    '/cheats/': {
      title: 'Modern Warfare 4 Hacks | Menu Modules and Checkout Plans',
      description:
        'Modern Warfare 4 Hacks with player ESP, aimbot, and radar on Windows. Review menu options and requirements on {siteDomain}.',
    },
    '/hwid-spoofer/': {
      title: 'Modern Warfare 4 HWID Spoofer | Rotate Disk and MAC IDs',
      description:
        'Modern Warfare 4 HWID Spoofer rotates disk, MAC, and GPU IDs when this PC fails login. Cleaner included. See purchase options at checkout.',
    },
    '/products/': {
      title: 'Cheats | Modern Warfare 4 Product List',
      description:
        'Compare {cheatProduct} with HWID Spoofer, Cloud DMA, and Skin Changer. Check delivery and requirements on each product page.',
    },
    '/cloud-dma/': {
      title: 'Cloud DMA | Single-PC Hyper-V Setup',
      description:
        'Cloud DMA provides guided Hyper-V setup on one Windows PC. Current options, access terms and pricing are shown at checkout.',
    },
    '/skin-changer/': {
      title: 'Modern Warfare 4 Skin Changer | Local Cosmetic Previews',
      description:
        'Modern Warfare 4 Skin Changer previews weapon skins and outfits client-side in supported titles. See purchase options at checkout.',
    },
    '/blog/': {
      title: 'Guides | Modern Warfare 4 ESP, Aimbot and Patch Notes',
      description:
        'Guides: Modern Warfare 4 preset walkthroughs, ESP and aim tuning, radar setup, and anti-cheat status checklists on {siteDomain}.',
    },
    '/forum/': {
      title: 'Forum | Modern Warfare 4 Archive | Setup and ESP',
      description:
        'Forum: Read-only Modern Warfare 4 threads on loader setup, ESP configs, patches, and HWID notes. New threads and replies are closed.',
    },
    '/faq/': {
      title: 'Faq | Modern Warfare 4 Plans, Setup and Status',
      description:
        'Faq: Windows support, the 30 day and lifetime plans, status checks, and checkout help for Modern Warfare 4 on {siteDomain}.',
    },
    '/terms/': {
      title: 'Terms of Sale | Licenses and Refunds',
      description:
        'Sales are final after checkout. License limits, refund exceptions, and account penalties for products on {siteDomain}.',
    },
    '/privacy/': {
      title: 'Privacy Policy | Analytics, Cookies and Tickets',
      description:
        'What {siteDomain} collects in analytics, which cookies it sets, and how long a support ticket keeps your email.',
    },
    '/about/': {
      title: 'About {siteName} | Status Notes and Support',
      description:
        '{siteName} publishes Modern Warfare 4 Cheats notes, product status, and support resources on {siteDomain}.',
    },
    '/support/': {
      title: 'Support | Loader, Orders and Setup Help',
      description:
        'Open a support ticket for order or setup issues, find installation guides, and read common questions about payment and account access.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheatsNav: 'Try Now',
    browseCheatsNavMobile: 'View product',
    homeAria: 'Modern Warfare 4 Cheats home',
    menuOpen: 'Open menu',
    themeLight: 'Switch to light mode',
    languageSwitcherLabel: 'Language',
    languageNames: {
      en: 'English',
      es: 'Español',
      de: 'Deutsch',
      fr: 'Français',
    },
  },
};
