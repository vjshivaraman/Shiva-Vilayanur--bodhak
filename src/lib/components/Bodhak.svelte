<script lang="ts">
	import { bodhak } from '../data';

	const pronunciationParts = $derived(bodhak.pronunciation.split(bodhak.sanskrit));
</script>

<section
	id="bodhak"
	class="py-16 md:py-24 bg-surface"
>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-4xl mx-auto text-center">
			<p class="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-4 font-sanskrit">
				{bodhak.sanskrit}
			</p>

			<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-3 tracking-wide">
				{bodhak.name}
			</h2>

			<p class="text-sm md:text-base text-text-secondary tracking-widest uppercase mb-8">
				{pronunciationParts[0] ?? ''}<span class="font-sanskrit">{bodhak.sanskrit}</span>{pronunciationParts[1] ?? ''}
			</p>

			<blockquote class="text-xl md:text-2xl font-medium text-text italic mb-12 max-w-2xl mx-auto text-balance">
				"{bodhak.meaning}"
			</blockquote>
		</div>

		<div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
			{#each bodhak.pillars as pillar, i (pillar.title)}
				<article class="text-center bg-background p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
					<div class="flex justify-center mb-4">
						{#if i === 0}
							<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
							</svg>
						{:else if i === 1}
							<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
							</svg>
						{:else}
							<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						{/if}
					</div>
					<h3 class="text-xl font-semibold text-primary mb-2">
						{pillar.title}
					</h3>
					<p class="text-text-secondary">
						{pillar.description}
					</p>
				</article>
			{/each}
		</div>

		<p class="text-center text-text-secondary italic max-w-3xl mx-auto text-balance">
			{bodhak.statement}
		</p>
	</div>
</section>
