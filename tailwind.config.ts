import type { Config } from 'tailwindcss';

/**
 * TailwindCSS v4.1 Configuration
 * 
 * Note: In TailwindCSS v4.1, theme configuration is primarily done via CSS using the @theme directive
 * in your CSS file (see src/app.css). This config file is kept minimal for:
 * - Content paths (file scanning)
 * - Plugin configuration (typography)
 * - Dark mode strategy
 * 
 * Custom colors are defined in src/app.css using @theme directive.
 */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [require('@tailwindcss/typography')],
	darkMode: 'class',
} satisfies Config;
