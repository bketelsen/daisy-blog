import { renderMarkdown } from '@astrojs/markdown-remark';
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { astroImageTools } from "astro-imagetools";
import svelte from "@astrojs/svelte";
import robotsTxt from 'astro-robots-txt';

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig(
/** @type {import('astro').AstroUserConfig} */
{
  markdown: {
    render: [renderMarkdown, {
      remarkPlugins: [],
      rehypePlugins: ['rehype-slug', ['rehype-autolink-headings', {
        behavior: 'wrap'
      }]],
      shikiConfig: {
        theme: 'poimandres',
        langs: [],
        wrap: false
      }
    }]
  },
  site: 'https://brian.dev',
  integrations: [astroImageTools, svelte(), sitemap(), tailwind(), robotsTxt(), compress({			img: false,
  })]
});
