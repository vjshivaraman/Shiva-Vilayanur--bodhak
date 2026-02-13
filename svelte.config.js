import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// GitHub Pages requires a 404.html fallback for client-side routing
			fallback: '404.html',
			// Output directory for static files
			pages: 'build',
			assets: 'build',
			// Precompress files for better performance
			precompress: false,
			// Strict mode ensures all pages are prerendered
			strict: true
		}),
		// Configure base path for GitHub Pages
		// If repo name is 'your-username.github.io', set base to ''
		// Otherwise, set base to '/repo-name'
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH || ''
		}
	}
};

export default config;
