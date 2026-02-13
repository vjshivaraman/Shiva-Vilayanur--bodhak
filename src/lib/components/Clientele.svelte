<script lang="ts">
	import { clientele } from '../data';
	import { onMount } from 'svelte';

	let currentIndex = $state(0);
	let autoplayInterval: ReturnType<typeof setInterval> | null = null;
	let isPaused = $state(false);

	onMount(() => {
		startAutoplay();
		return () => {
			if (autoplayInterval) {
				clearInterval(autoplayInterval);
			}
		};
	});

	function startAutoplay() {
		if (autoplayInterval) {
			clearInterval(autoplayInterval);
		}
		autoplayInterval = setInterval(() => {
			if (!isPaused) {
				currentIndex = (currentIndex + 1) % clientele.length;
			}
		}, 5000);
	}

	function goToSlide(index: number) {
		currentIndex = index;
		startAutoplay();
	}

	function pauseAutoplay() {
		isPaused = true;
	}

	function resumeAutoplay() {
		isPaused = false;
	}
</script>

<section
	id="clientele"
	class="py-16 md:py-24 bg-background"
	onmouseenter={pauseAutoplay}
	onmouseleave={resumeAutoplay}
	aria-label="Client engagements carousel"
>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-text mb-12">
			Relevant Fractional CFO Engagements
		</h2>

		<!-- Carousel Container -->
		<div class="relative max-w-4xl mx-auto">
			<!-- Carousel Items -->
			<div class="overflow-hidden">
				<div
					class="flex transition-transform duration-500 ease-in-out"
					style:transform="translateX(-{currentIndex * 100}%)"
					role="group"
					aria-label="Client testimonials carousel"
				>
					{#each clientele as client, index}
						<div
							class="min-w-full px-4"
							role="group"
							aria-roledescription="slide"
							aria-label="Slide {index + 1} of {clientele.length}"
						>
							<article class="bg-surface p-6 md:p-8 rounded-lg shadow-lg">
								<h3 class="text-xl md:text-2xl font-semibold text-primary mb-4">
									{#if client.confidential}
										{client.name} (Confidential)
									{:else}
										{client.name}
									{/if}
								</h3>
								{#if client.description}
									<p class="text-text-secondary mb-4 italic">
										{client.description}
									</p>
								{/if}
								<div class="space-y-4">
									<div>
										<h4 class="font-semibold text-text mb-2">Crisis:</h4>
										<p class="text-text-secondary">{client.crisis}</p>
									</div>
									<div>
										<h4 class="font-semibold text-text mb-2">Action:</h4>
										<p class="text-text-secondary">{client.action}</p>
									</div>
									<div>
										<h4 class="font-semibold text-text mb-2">Outcome:</h4>
										<p class="text-text-secondary">{client.outcome}</p>
									</div>
									{#if client.testimonial}
										<blockquote class="border-l-4 border-primary pl-4 italic text-text-secondary">
											{client.testimonial.text}
											<footer class="mt-2 text-sm font-semibold text-text">
												— {client.testimonial.author}
											</footer>
										</blockquote>
									{/if}
								</div>
							</article>
						</div>
					{/each}
				</div>
			</div>

			<!-- Navigation Buttons -->
			<button
				onclick={() => goToSlide((currentIndex - 1 + clientele.length) % clientele.length)}
				class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-primary-dark text-white p-2 rounded-full hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
				aria-label="Previous slide"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 19l-7-7 7-7"
					/>
				</svg>
			</button>

			<button
				onclick={() => goToSlide((currentIndex + 1) % clientele.length)}
				class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-primary-dark text-white p-2 rounded-full hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
				aria-label="Next slide"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 5l7 7-7 7"
					/>
				</svg>
			</button>

			<!-- Indicators -->
			<div
				class="flex justify-center gap-2 mt-8"
				role="tablist"
				aria-label="Slide indicators"
			>
				{#each clientele as _, index}
					<button
						onclick={() => goToSlide(index)}
						class="w-3 h-3 rounded-full transition-[background-color,width] {currentIndex === index
							? 'bg-primary-dark w-8'
							: 'bg-text-secondary'}"
						aria-label="Go to slide {index + 1}"
						aria-selected={currentIndex === index}
						role="tab"
					></button>
				{/each}
			</div>
		</div>
	</div>
</section>
