import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://islami00.github.io/islami00-site',
  integrations: [mdx(), sitemap()],
  base: '/islami00-site'
});
