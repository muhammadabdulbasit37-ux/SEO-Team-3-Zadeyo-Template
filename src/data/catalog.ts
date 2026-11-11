import type { IconName } from '../components/icons/types';
import { CHEATS_PRIMARY_SLUG, HWID_SPOOFER_SLUG, SKIN_CHANGER_SLUG, CLOUD_DMA_SLUG } from '../config/catalog';
import { CHEAT_PRODUCT_NAME } from '../config/game';
import type { SiteLocale } from '../i18n/locales';
import { productPath } from '../utils/path';
import { getProductPages, type ProductPage } from './products';

export interface CatalogEntry {
  slug: string;
  path: string;
  icon: IconName;
  shortName: string;
  page: ProductPage;
}

const catalogMeta: Record<string, { icon: IconName; shortName: string }> = {
  [CHEATS_PRIMARY_SLUG]: { icon: 'tierElite', shortName: CHEAT_PRODUCT_NAME },
  [HWID_SPOOFER_SLUG]: { icon: 'systemUtility', shortName: 'HWID Spoofer' },
  [CLOUD_DMA_SLUG]: { icon: 'systemUtility', shortName: 'Cloud DMA' },
  [SKIN_CHANGER_SLUG]: { icon: 'cosmetic', shortName: 'Skin Changer' },
};

export function getCatalog(locale: SiteLocale): CatalogEntry[] {
  return getProductPages(locale).map((page) => {
    const meta = catalogMeta[page.slug] ?? { icon: 'package' as IconName, shortName: page.title };
    return { slug: page.slug, path: productPath(page.slug), icon: meta.icon, shortName: meta.shortName, page };
  });
}
