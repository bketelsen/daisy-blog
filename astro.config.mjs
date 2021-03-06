import { renderMarkdown } from '@astrojs/markdown-remark';
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { astroImageTools } from "astro-imagetools";
import svelte from "@astrojs/svelte";

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

		integrations: [astroImageTools, svelte(), sitemap()]
	});
