<script lang="ts">
	import { whyMe } from '../data';
</script>

<section
	id="why-me"
	class="py-16 md:py-24 bg-surface"
>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-text mb-4">
			Why Me? The Operator + Investor Advantage
		</h2>

		<div class="grid md:grid-cols-3 gap-8 md:gap-12 mt-12">
			<!-- Functional Role Experience -->
			<article class="bg-background p-6 md:p-8 rounded-lg shadow-md">
				<h3 class="text-xl md:text-2xl font-semibold text-primary mb-4">
					{whyMe.functionalRole.title}
				</h3>
				<p class="text-text-secondary mb-4">
					{whyMe.functionalRole.description}
				</p>
				<ul class="space-y-2">
					{#each whyMe.functionalRole.details as detail}
						<li class="text-text-secondary flex items-start">
							<svg
								class="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0"
								fill="currentColor"
								viewBox="0 0 20 20"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>{detail}</span>
						</li>
					{/each}
				</ul>
			</article>

			<!-- Industry Type Experience -->
			<article class="bg-background p-6 md:p-8 rounded-lg shadow-md">
				<h3 class="text-xl md:text-2xl font-semibold text-primary mb-4">
					{whyMe.industryType.title}
				</h3>
				<p class="text-text-secondary mb-4">
					{whyMe.industryType.description}
				</p>
				<ul class="space-y-2">
					{#each whyMe.industryType.details as detail}
						<li class="text-text-secondary flex items-start">
							<svg
								class="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0"
								fill="currentColor"
								viewBox="0 0 20 20"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>{detail}</span>
						</li>
					{/each}
				</ul>
			</article>

			<!-- Work Type Experience -->
			<article class="bg-background p-6 md:p-8 rounded-lg shadow-md">
				<h3 class="text-xl md:text-2xl font-semibold text-primary mb-4">
					{whyMe.workType.title}
				</h3>
				<p class="text-text-secondary mb-4">
					{whyMe.workType.description}
				</p>
				<ul class="space-y-2">
					{#each whyMe.workType.details as detail}
						<li class="text-text-secondary flex items-start">
							<svg
								class="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0"
								fill="currentColor"
								viewBox="0 0 20 20"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>{detail}</span>
						</li>
					{/each}
				</ul>
			</article>
		</div>
	</div>
</section>
