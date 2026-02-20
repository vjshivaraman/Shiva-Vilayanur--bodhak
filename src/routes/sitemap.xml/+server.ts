import { base } from '$app/paths';
import { env } from '$env/dynamic/public';

export const prerender = true;

/** @type {import('./$types').RequestHandler} */
export function GET() {
	// Sitemap requires absolute URLs; fallback for build when PUBLIC_ORIGIN unset
	const origin = (env.PUBLIC_ORIGIN ?? '').replace(/\/$/, '') || 'https://example.com';
	const baseUrl = `${origin}${base}`.replace(/\/$/, '');
	const homepage = `${baseUrl}/`;
	const lastmod = new Date().toISOString().slice(0, 10);

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<url>
		<loc>${homepage}</loc>
		<lastmod>${lastmod}</lastmod>
		<changefreq>monthly</changefreq>
		<priority>1.0</priority>
	</url>
</urlset>`.trim();

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}
