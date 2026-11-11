import type { SiteLocale } from '../../i18n/locales';
import type { ForumPost } from './types';
import { enForumPosts } from './en-posts';
import { esForumPosts } from './es-posts';
import { deForumPosts } from './de-posts';
import { frForumPosts } from './fr-posts';

const forumPostsByLocale: Record<SiteLocale, ForumPost[]> = {
  en: enForumPosts,
  es: esForumPosts,
  de: deForumPosts,
  fr: frForumPosts,
};

export function getForumCategories(locale: SiteLocale) {
  return [...new Map(getForumPosts(locale).map(p => [p.category, {
    name: p.category,
    tone: p.categoryTone,
    icon: 'tag' as const,
  }])).values()];
}

export function getForumPosts(locale: SiteLocale): ForumPost[] {
  return forumPostsByLocale[locale] ?? enForumPosts;
}

export function getForumPost(slug: string, locale: SiteLocale): ForumPost | undefined {
  return getForumPosts(locale).find((p) => p.slug === slug);
}

export function getForumPostsBySlugs(slugs: string[], locale: SiteLocale = 'en'): ForumPost[] {
  return slugs
    .map((slug) => getForumPost(slug, locale))
    .filter((p): p is ForumPost => Boolean(p));
}
