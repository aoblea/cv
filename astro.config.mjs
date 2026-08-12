// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Serves at the domain root, so no `base` is needed — this requires the repo
  // to be named `aoblea.github.io`. On a custom domain, change `site` to it.
  site: 'https://aoblea.github.io',
});
