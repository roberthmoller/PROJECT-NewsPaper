import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		proxy: {
			'/proxy': {
				target: 'http://localhost:5173',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/proxy/, ''),
				configure: (proxy, _options) => {
					proxy.on('proxyReq', (proxyReq, req, _res) => {
						const url = req.url?.replace('/proxy/', '');
						if (url) {
							proxyReq.path = url;
							proxyReq.setHeader('Host', new URL(url).host);
						}
					});
				},
			},
		},
	},
});
