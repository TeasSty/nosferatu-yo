/** Vite `base` for GitHub Pages project site, e.g. `/nosferatu-yo/` */
export const BASE_URL = import.meta.env.BASE_URL;

/** Public asset under `public/` (images, favicon). */
export function asset(path: string): string {
  return `${BASE_URL}${path.replace(/^\//, '')}`;
}

/** In-app path with basename (anchors on home: `homeHash('booking')`). */
export function homeHash(id: string): string {
  return `${BASE_URL}#${id}`;
}
