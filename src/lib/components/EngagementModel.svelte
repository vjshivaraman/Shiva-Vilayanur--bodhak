<script lang="ts">
	import { engagementModels, methodology } from '../data';
</script>

<section
	id="engagement-model"
	class="py-16 md:py-24 bg-background"
>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-text mb-4">
			Engagement Model
		</h2>
		<p class="text-xl text-center text-text-secondary mb-12 max-w-2xl mx-auto">
			3 Ways We Can Engage
		</p>

		<!-- Engagement Models -->
		<div class="grid md:grid-cols-3 gap-8 mb-16">
			{#each engagementModels as model}
				<article
					class="bg-surface p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
				>
					<div class="text-4xl md:text-5xl font-bold text-primary mb-4">
						{model.number}
					</div>
					<h3 class="text-xl md:text-2xl font-semibold text-text mb-4">
						{model.title}
					</h3>
					<p class="text-text-secondary mb-4">
						{model.description}
					</p>
					{#if model.deliverable}
						<p class="text-sm font-medium text-primary">
							Deliverable: {model.deliverable}
						</p>
					{/if}
				</article>
			{/each}
		</div>

		<!-- Methodology -->
		<div class="max-w-4xl mx-auto">
			<h3 class="text-2xl md:text-3xl font-bold text-center text-text mb-8">
				My Methodology (Embed within & Solve)
			</h3>
			<div class="grid md:grid-cols-3 gap-6">
				{#each methodology as item}
					<div class="text-center">
						<div class="text-5xl md:text-6xl font-bold text-primary mb-4">
							{item.number}
						</div>
						<h4 class="text-xl font-semibold text-text mb-2">
							{item.title}
						</h4>
						<p class="text-text-secondary">
							{item.description}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
