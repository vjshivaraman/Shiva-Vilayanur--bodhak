<script lang="ts">
	import '@fontsource-variable/inter';
	import '@fontsource/tiro-devanagari-sanskrit';
	import '../app.css';
	import { onMount } from 'svelte';
	import { profile } from '$lib/data';

	let { children, data } = $props();

	const jsonLdPerson = $derived({
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: profile.name,
		jobTitle: profile.title,
		description: profile.tagline,
		url: data?.seo?.canonicalUrl ?? undefined,
		image: data?.seo?.ogImage ?? undefined,
		sameAs: [profile.linkedin],
		email: profile.email,
		address: { '@type': 'PostalAddress', addressLocality: profile.location }
	});
	const jsonLdScript = $derived(
		`<script type="application/ld+json">${JSON.stringify(jsonLdPerson)}<\/script>`
	);

	onMount(() => {
		// Check for saved theme preference or default to light mode
		const savedTheme = localStorage.getItem('theme');
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

		if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	});
</script>

<svelte:head>
	<title>{data?.seo?.title ?? `${profile.name} - ${profile.title}`}</title>
	<meta name="description" content={data?.seo?.description ?? profile.tagline} />
	<meta name="robots" content="index, follow" />

	<!-- Open Graph -->
	<meta property="og:title" content={data?.seo?.title ?? `${profile.name} - ${profile.title}`} />
	<meta property="og:description" content={data?.seo?.description ?? profile.tagline} />
	<meta property="og:type" content="website" />
	{#if data?.seo?.canonicalUrl}
		<meta property="og:url" content={data.seo.canonicalUrl} />
		<link rel="canonical" href={data.seo.canonicalUrl} />
	{/if}
	{#if data?.seo?.ogImage}
		<meta property="og:image" content={data.seo.ogImage} />
	{/if}
	<meta property="og:locale" content="en_US" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={data?.seo?.title ?? `${profile.name} - ${profile.title}`} />
	<meta name="twitter:description" content={data?.seo?.description ?? profile.tagline} />
	{#if data?.seo?.ogImage}
		<meta name="twitter:image" content={data.seo.ogImage} />
	{/if}

	<meta name="format-detection" content="telephone=no" />

	<!-- JSON-LD Person -->
	{@html jsonLdScript}
</svelte:head>

{@render children()}
