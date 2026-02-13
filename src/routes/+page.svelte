<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import EngagementModel from '$lib/components/EngagementModel.svelte';
	import WhyMe from '$lib/components/WhyMe.svelte';
	import Clientele from '$lib/components/Clientele.svelte';
	import ProfessionalHistory from '$lib/components/ProfessionalHistory.svelte';
	import Education from '$lib/components/Education.svelte';

	const navSections = [
		{ id: 'hero', label: 'Home' },
		{ id: 'engagement-model', label: 'Engagement Model' },
		{ id: 'why-me', label: 'Why Me' },
		{ id: 'clientele', label: 'Clientele' },
		{ id: 'professional-history', label: 'Experience' },
		{ id: 'education', label: 'Education' },
	];
</script>

<svelte:head>
	<title>Shiva Vilayanur - Fractional CFO & Strategic Finance Partner</title>
	<meta
		name="description"
		content="Shiva Vilayanur - Fractional CFO & Strategic Finance Partner. Transforming financial chaos into investor-ready clarity."
	/>
</svelte:head>

<Navbar sections={navSections} />

<main>
	<Hero />
	<EngagementModel />
	<WhyMe />
	<Clientele />
	<ProfessionalHistory />
	<Education />
</main>

<footer class="bg-surface py-8 border-t border-border">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<p class="text-text-secondary">
			© {new Date().getFullYear()} Shiva Vilayanur. All rights reserved.
		</p>
	</div>
</footer>
