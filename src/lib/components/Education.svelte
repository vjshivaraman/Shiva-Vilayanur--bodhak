<script lang="ts">
	import { education, honors } from '../data';
</script>

<section
	id="education"
	class="py-16 md:py-24 bg-background"
>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-text mb-12">
			Education and Qualifications
		</h2>

		<div class="max-w-3xl mx-auto">
			<!-- Education Timeline -->
			<div class="space-y-8 mb-12">
				{#each education as item}
					<article class="bg-surface p-6 md:p-8 rounded-lg shadow-md">
						<div class="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
							<div>
								<h3 class="text-xl md:text-2xl font-semibold text-text mb-2">
									{item.institution}
								</h3>
								<p class="text-lg text-primary">
									{item.degree}
								</p>
							</div>
							<time class="text-sm md:text-base text-text-secondary mt-2 md:mt-0" datetime={item.period}>
								{item.period}
							</time>
						</div>
					</article>
				{/each}
			</div>

			<!-- Honors and Awards -->
			{#if honors.length > 0}
				<div>
					<h3 class="text-2xl md:text-3xl font-bold text-center text-text mb-8">
						Honors & Awards
					</h3>
					<div class="space-y-4">
						{#each honors as honor}
							<div class="bg-surface p-6 rounded-lg shadow-md">
								<div class="flex items-start">
									<svg
										class="h-6 w-6 text-accent mr-3 mt-1 shrink-0"
										fill="currentColor"
										viewBox="0 0 20 20"
										aria-hidden="true"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
									</svg>
									<p class="text-text-secondary">
										{honor}
									</p>
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>
