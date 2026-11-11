import { CHEATS_PRIMARY_SLUG, HWID_SPOOFER_SLUG, SKIN_CHANGER_SLUG, CLOUD_DMA_SLUG } from '../config/catalog';
import type { SiteLocale } from '../i18n/locales';
import { deepApplySiteTokens } from '../i18n/brandTokens';
import es from './catalogCopy/locales/es.json';
import de from './catalogCopy/locales/de.json';
import fr from './catalogCopy/locales/fr.json';

/** UI copy for the /products/ catalog page and the header products menu. */
export interface CatalogCopy {
  eyebrow: string;
  title: string;
  subtitle: string;
  trust: string[];
  featuredEyebrow: string;
  from: string;
  priceLabel: string;
  lifetime: string;
  perMonth: string;
  utilitiesEyebrow: string;
  utilitiesTitle: string;
  utilitiesDesc: string;
  chooserEyebrow: string;
  chooserTitle: string;
  chooserDesc: string;
  scenarios: { slug: string; need: string; answer: string }[];
  compareEyebrow: string;
  compareTitle: string;
  compareDesc: string;
  compareRows: { label: string; values: Record<string, string> }[];
  ctaTitle: string;
  ctaDesc: string;
  ctaSupport: string;
  menuHeading: string;
  menuViewAll: string;
  menuTaglines: Record<string, string>;
}

const en: CatalogCopy = {
  eyebrow: 'Store',
  title: '{gameName} cheats and utilities',
  subtitle:
    'Four products for {gameName}. The cheat page lists the menu. Each utility page lists its own license.',
  trust: ['Portal delivery', '24/7 support', 'Choose options at checkout'],
  featuredEyebrow: 'Main product',
  from: 'From',
  priceLabel: 'Price',
  lifetime: 'Lifetime',
  perMonth: '/ month',
  utilitiesEyebrow: 'Utilities',
  utilitiesTitle: 'More tools we sell',
  utilitiesDesc: 'Each utility is a separate license, with its own page and its own checkout.',
  chooserEyebrow: 'Not sure?',
  chooserTitle: 'Which product do I need?',
  chooserDesc: 'Start from the situation. Each line opens the product that matches it.',
  scenarios: [
    { slug: CHEATS_PRIMARY_SLUG, need: 'I want aimbot, silent aimbot, ESP, wallhack, and no recoil in {gameShort}.', answer: '{cheatProduct}' },
    { slug: HWID_SPOOFER_SLUG, need: 'A new account signs in on other PCs and fails at once on this one.', answer: 'HWID Spoofer' },
    { slug: CLOUD_DMA_SLUG, need: 'I need the Cloud DMA layer on one Windows PC.', answer: 'Cloud DMA' },
    { slug: SKIN_CHANGER_SLUG, need: 'I want premium finishes on my screen, and I do not want to pay for each cosmetic.', answer: 'Skin Changer' },
  ],
  compareEyebrow: 'Compare',
  compareTitle: 'Compare products side by side',
  compareDesc: 'Compare features, delivery, and requirements. Product pages explain the details.',
  compareRows: [
    {
      label: 'Best for',
      values: {
        [CHEATS_PRIMARY_SLUG]: 'Aimbot, ESP, and the other listed combat options',
        [HWID_SPOOFER_SLUG]: 'A PC blocked at the hardware layer',
        [CLOUD_DMA_SLUG]: 'Single-PC Hyper-V setup',
        [SKIN_CHANGER_SLUG]: 'Cosmetic previews on this client',
      },
    },
    {
      label: 'Delivery',
      values: {
        [CHEATS_PRIMARY_SLUG]: 'Portal, right after checkout',
        [HWID_SPOOFER_SLUG]: 'Right away, through the portal',
        [CLOUD_DMA_SLUG]: 'Guided Hyper-V installation',
        [SKIN_CHANGER_SLUG]: 'Portal delivery, immediate',
      },
    },
    {
      label: 'Windows',
      values: {
        [CHEATS_PRIMARY_SLUG]: 'Match the live game build',
        [HWID_SPOOFER_SLUG]: '10 / 11, 64-bit, admin',
        [CLOUD_DMA_SLUG]: '10 / 11, 64-bit',
        [SKIN_CHANGER_SLUG]: '10 / 11, 64-bit',
      },
    },
    {
      label: 'Security settings',
      values: {
        [CHEATS_PRIMARY_SLUG]: 'Read the status banner first',
        [HWID_SPOOFER_SLUG]: 'HVCI, TPM, Secure Boot on',
        [CLOUD_DMA_SLUG]: 'Hyper-V and CPU virtualization required',
        [SKIN_CHANGER_SLUG]: 'HVCI, TPM, Secure Boot on',
      },
    },
  ],
  ctaTitle: 'Still deciding?',
  ctaDesc: 'Tell support the goal or the error. They will name the product before you pay.',
  ctaSupport: 'Ask support',
  menuHeading: 'Products',
  menuViewAll: 'Compare all products',
  menuTaglines: {
    [CHEATS_PRIMARY_SLUG]: 'Aim, ESP, wallhack, and movement',
    [HWID_SPOOFER_SLUG]: 'Disk, MAC, and GPU identifier pass',
    [CLOUD_DMA_SLUG]: 'Single-PC infrastructure and encrypted activation',
    [SKIN_CHANGER_SLUG]: 'Skins, outfits, and knives on screen',
  },
};

const byLocale: Record<SiteLocale, CatalogCopy> = {
  en,
  es: es as CatalogCopy,
  de: de as CatalogCopy,
  fr: fr as CatalogCopy,
};

const finalized = Object.fromEntries(
  Object.entries(byLocale).map(([locale, copy]) => [locale, deepApplySiteTokens(copy)]),
) as Record<SiteLocale, CatalogCopy>;

export function getCatalogCopy(locale: SiteLocale): CatalogCopy {
  return finalized[locale];
}
