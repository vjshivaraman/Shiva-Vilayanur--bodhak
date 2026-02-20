import type { Handle } from '@sveltejs/kit';

/**
 * Server-side hooks for security and cache headers
 */
export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);

	response.headers.set('X-Content-Type-Options', 'nosniff');
	response.headers.set('Permissions-Policy', 'interest-cohort=()');

	return response;
};
