export interface ForumComment {
  author?: string;
  age?: string;
  score?: number;
  published?: string;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  /** Editorial starters identify the publishing organization; absent preserves legacy authors. */
  authorType?: 'Person' | 'Organization';
  authorship?: 'imported';
  originalLanguage?: string;
  sourceId?: string;
  metaTitle?: string;
  resourceLinks?: { href: string; label: string }[];
  age: string;
  /** ISO date for sort / sitemap */
  published: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
}
