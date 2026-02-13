import type { Handle } from '@sveltejs/kit';

/**
 * Server-side hooks to add security headers that block AI crawlers and bots
 */
export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);

	// Add headers to block AI crawlers and bots
	response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive, nosnippet, noimageindex');
	response.headers.set('X-Content-Type-Options', 'nosniff');
	response.headers.set('Referrer-Policy', 'no-referrer');
	
	// Block specific AI crawlers via headers
	response.headers.set('Permissions-Policy', 'interest-cohort=()');

	return response;
};
