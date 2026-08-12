// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // The repo is `cv`, so Pages serves this as a project page under /cv/ rather
  // than at the domain root. Moving to a custom domain, or renaming the repo to
  // `aoblea.github.io`, means dropping `base` and pointing `site` at the root.
  site: 'https://aoblea.github.io',
  base: '/cv',
});
