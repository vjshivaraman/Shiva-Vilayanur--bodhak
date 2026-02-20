import { base } from '$app/paths';
import { profile } from '$lib/data';
import { env } from '$env/dynamic/public';

/** @type {import('./$types').LayoutServerLoad} */
export function load({ url }) {
	const origin = (env.PUBLIC_ORIGIN ?? '').replace(/\/$/, '');

	const pathname = url.pathname.replace(/\/$/, '') || '/';
	const fullPath = pathname === '' || pathname === '/' ? base : pathname;
	const canonicalUrl = origin ? `${origin}${fullPath}` : '';
	const ogImage = origin ? `${origin}${base}/profile-photo.png` : '';

	// Route-specific title/description (expand for future routes)
	const isHome = pathname === '' || pathname === '/' || pathname === base;
	const title = isHome ? `${profile.name} - ${profile.title}` : `${profile.name} - ${profile.title}`;
	const description = isHome
		? 'Shiva Vilayanur - Fractional CFO & Strategic Finance Partner. Transforming financial chaos into investor-ready clarity.'
		: profile.tagline;

	return {
		seo: {
			title,
			description,
			canonicalUrl: canonicalUrl || undefined,
			ogImage: ogImage || undefined
		}
	};
}
