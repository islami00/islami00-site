import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';
const { DEPLOY_SITE_URL } = loadEnv(process.env.NODE_ENV, process.cwd(), '');
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: DEPLOY_SITE_URL,
  integrations: [mdx(), sitemap()],
  output: 'server',
  adapter: netlify()
});