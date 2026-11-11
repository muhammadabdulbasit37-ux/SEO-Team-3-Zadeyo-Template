/** Default Open Graph / Twitter preview (first hero slide). */
export const DEFAULT_OG_GAMEPLAY_IMAGE = '/images/gameplay/modern-warfare-4-match-esp.webp';

export const DEFAULT_OG_GAMEPLAY_ALT =
  'First-person rifle view on a snowy rooftop, with player names, distances, and green brackets.';

/** Intrinsic size of the default OG master (1024x576). */
export const DEFAULT_OG_GAMEPLAY_WIDTH = 1024;
export const DEFAULT_OG_GAMEPLAY_HEIGHT = 576;

/** Homepage + product gallery use the same masters, once each per slider. */
export const SHOWCASE_GALLERY_KEYS = [
  'gpMatchEsp',
  'gpAimbotMenu',
  'gpEspMenu',
] as const;
