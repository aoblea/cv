/**
 * Joins a root-relative path onto the configured `base`.
 *
 * Astro rewrites the URLs it generates itself — bundled CSS, `<Image>`, page
 * routes — but not paths typed by hand into markup, so hard-coded links and
 * anything served straight out of `public/` have to go through here or they
 * 404 on the project page under /cv/.
 */
export function withBase(path: string): string {
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}
