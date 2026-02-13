<script lang="ts">
	import { professionalHistory } from '../data';
</script>

<section
	id="professional-history"
	class="py-16 md:py-24 bg-surface"
>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-text mb-12">
			Professional History
		</h2>

		<div class="max-w-4xl mx-auto">
			<div class="relative">
				<!-- Timeline Line -->
				<div
					class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary"
					aria-hidden="true"
				></div>

				<!-- Timeline Items -->
				<div class="space-y-12">
					{#each professionalHistory as item, index}
						<div class="relative flex items-start md:items-center">
							<!-- Timeline Dot -->
							<div
								class="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-background z-10"
								aria-hidden="true"
							></div>

							<!-- Content -->
							<div
								class="ml-12 md:ml-0 md:w-1/2 {index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'} bg-background p-6 rounded-lg shadow-md"
							>
								<div class="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
									<div>
										<h3 class="text-xl font-semibold text-text">
											{item.role}
										</h3>
										<p class="text-lg font-medium text-primary">
											{item.company}
										</p>
									</div>
									<div class="text-sm text-text-secondary mt-2 md:mt-0">
										{item.period}
									</div>
								</div>

								{#if item.location}
									<p class="text-sm text-text-secondary mb-2">
										{item.location}
									</p>
								{/if}

								{#if item.description}
									<p class="text-text-secondary mb-4">
										{item.description}
									</p>
								{/if}

								{#if item.accomplishments}
									<ul class="space-y-2 mb-4">
										{#each item.accomplishments as accomplishment}
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
												<span>{accomplishment}</span>
											</li>
										{/each}
									</ul>
								{/if}

								{#if item.currentEngagements}
									<div class="mt-4">
										<p class="font-semibold text-text mb-2">Current engagements:</p>
										<ul class="space-y-2">
											{#each item.currentEngagements as engagement}
												<li class="text-text-secondary flex items-start">
													<svg
														class="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0"
														fill="currentColor"
														viewBox="0 0 20 20"
														aria-hidden="true"
													>
														<path
															fill-rule="evenodd"
															d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
															clip-rule="evenodd"
														/>
													</svg>
													<span>{engagement}</span>
												</li>
											{/each}
										</ul>
									</div>
								{/if}

								{#if item.investments}
									<div class="mt-4">
										<p class="font-semibold text-text mb-2">Investments:</p>
										<ul class="space-y-2">
											{#each item.investments as investment}
												<li class="text-text-secondary flex items-start">
													<svg
														class="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0"
														fill="currentColor"
														viewBox="0 0 20 20"
														aria-hidden="true"
													>
														<path
															fill-rule="evenodd"
															d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
															clip-rule="evenodd"
														/>
													</svg>
													<span>{investment}</span>
												</li>
											{/each}
										</ul>
									</div>
								{/if}
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
