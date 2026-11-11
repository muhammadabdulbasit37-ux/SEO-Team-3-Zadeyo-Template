export type { ForumComment, ForumPost } from './forum/types';
import type { ForumPost } from './forum/types';
import { enForumPosts } from './forum/en-posts';

/** Categories are derived from actual imported posts; no old-game categories are baked in. */
export const forumCategories = [...new Map(enForumPosts.map(p => [p.category, {
  name: p.category, tone: p.categoryTone, icon: 'tag' as const,
}])).values()];
export const forumPosts: ForumPost[] = enForumPosts;
export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}
