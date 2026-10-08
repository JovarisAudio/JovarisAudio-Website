import { defineConfig } from 'astro/config';
const site = process.env.PUBLIC_SITE_URL;
if (site && !/^https:\/\/[a-zA-Z0-9-]+\.github\.io\/?$/.test(site)) throw new Error('Use the approved GitHub Pages origin.');
export default defineConfig({site:site || undefined, base:process.env.PUBLIC_BASE_PATH || '/', output:'static', trailingSlash:'always'});
