import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
	output: 'server',
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
		imageService: 'cloudflare',
	}),
	site: 'https://iit-journey.pages.dev/',
	redirects: {
		'/.well-known/change-password': '/account?edit=password',
	},
	markdown: {
		shikiConfig: {
			theme: 'monokai',
		},
	},
	/**
	 * @todo Check to make sure Cloudflare Pages Functions supports node:crypto
	 */
	vite: {
		ssr: {
			external: ['node:crypto'],
		},
	},
});
