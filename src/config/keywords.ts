/**
 * Keyword homes. The full assignment is in ../_conversion-notes/keyword-map.md.
 * Primary is the homepage H1 only. These constants are not rendered.
 */
export const PRIMARY_KEYWORD = 'Modern Warfare 4 Cheats';

/** One representative angle per page that has one. */
export const SECONDARY_KEYWORD_BY_PATH: Record<string, string> = {
  '/': 'mw4 cheats',
  '/cheats/': 'best mw4 aimbot',
};

/** Each mapped angle points at one existing page. Unsupported angles are included so later copy does not invent a page. */
export const SECONDARY_KEYWORD_HOME: Record<string, string> = {
  'mw4 cheats': '/',
  'buy mw4 cheats': '/',
  'mw4 cheat shop': '/',
  'mw4 private cheat': '/',
  'best mw4 cheats': '/',
  'best mw4 aimbot': '/cheats/',
  'mw4 undetected esp': '/cheats/',
  'undetected mw4 cheats': '/cheats/',
  'undetected mw4 cheat': '/cheats/',
  'mw4 dma cheat': '/cheats/',
  'mw4 soft aim': '/cheats/',
  'mw4 radar hack': '/cheats/',
};
