<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';

	let { children } = $props();

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
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="description" content="Shiva Vilayanur - Fractional CFO & Strategic Finance Partner. Transforming financial chaos into investor-ready clarity for high-growth fintechs." />
	
	<!-- Block all search engines and AI crawlers -->
	<meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex, nocache" />
	<meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
	<meta name="bingbot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
	
	<!-- Block AI crawlers specifically -->
	<meta name="GPTBot" content="noindex, nofollow" />
	<meta name="ChatGPT-User" content="noindex, nofollow" />
	<meta name="Google-Extended" content="noindex, nofollow" />
	<meta name="CCBot" content="noindex, nofollow" />
	<meta name="anthropic-ai" content="noindex, nofollow" />
	<meta name="Claude-Web" content="noindex, nofollow" />
	<meta name="PerplexityBot" content="noindex, nofollow" />
	<meta name="Applebot-Extended" content="noindex, nofollow" />
	
	<!-- Additional privacy and security headers -->
	<meta name="referrer" content="no-referrer" />
	<meta name="format-detection" content="telephone=no" />
	
	<title>Shiva Vilayanur - Fractional CFO</title>
</svelte:head>

{@render children()}
