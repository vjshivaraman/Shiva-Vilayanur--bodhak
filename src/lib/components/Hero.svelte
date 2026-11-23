<script lang="ts">
	import { profile } from '../data';

	let { imageSrc } = $props<{ imageSrc?: string }>();

	let copied = $state(false);
	let copyTimer: ReturnType<typeof setTimeout> | null = null;

	async function copyEmail() {
		try {
			await navigator.clipboard.writeText(profile.email);
		} catch {
			// Fallback for browsers without clipboard API access
			const ta = document.createElement('textarea');
			ta.value = profile.email;
			ta.setAttribute('readonly', '');
			ta.style.position = 'absolute';
			ta.style.left = '-9999px';
			document.body.appendChild(ta);
			ta.select();
			document.execCommand('copy');
			document.body.removeChild(ta);
		}
		copied = true;
		if (copyTimer) clearTimeout(copyTimer);
		copyTimer = setTimeout(() => (copied = false), 2000);
	}
</script>

<section
	id="hero"
	class="hero-gradient-bg min-h-screen flex items-center justify-center bg-hero-bg pt-20 md:pt-24"
>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
		<div class="max-w-4xl mx-auto text-center">
			<!-- Profile Image -->
			{#if imageSrc}
				<div class="mb-8 flex justify-center">
					<img
						src={imageSrc}
						alt="{profile.name}"
						class="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-hero-border shadow-2xl"
						loading="eager"
					/>
				</div>
			{/if}

			<!-- Name and Title -->
			<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-text mb-4 text-balance">
				{profile.name}
			</h1>
			<p class="text-xl md:text-2xl lg:text-3xl text-hero-text-secondary font-semibold mb-6 text-balance">
				{profile.title}
			</p>

			<!-- Tagline -->
			<p class="text-lg md:text-xl text-hero-text-tertiary mb-8 max-w-2xl mx-auto text-balance">
				{profile.tagline}
			</p>

			<!-- Personal Statement -->
			<blockquote class="text-xl md:text-2xl font-medium text-hero-text-secondary mb-12 italic max-w-3xl mx-auto text-balance">
				"{profile.personalStatement}"
			</blockquote>

			<!-- Contact Buttons -->
			<div
				class="flex flex-col sm:flex-row gap-4 justify-center items-center"
				role="group"
				aria-label="Contact options"
			>
				<a
					href={profile.linkedin}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 px-6 py-3 bg-primary-dark text-white rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary shadow-md hover:shadow-lg"
					aria-label="Connect on LinkedIn"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="currentColor"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path
							d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
						/>
					</svg>
					LinkedIn
				</a>

				<a
					href="mailto:{profile.email}"
					class="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary shadow-md hover:shadow-lg"
					aria-label="Send email"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
						/>
					</svg>
					Email
				</a>

				<a
					href={profile.calendlyUrl || '#'}
					class="inline-flex items-center gap-2 px-6 py-3 bg-surface text-text border-2 border-primary rounded-lg text-lg font-semibold hover:bg-primary/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary shadow-md hover:shadow-lg"
					aria-label={profile.calendlyUrl ? 'Book a call' : 'Book a call (link coming soon)'}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
						/>
					</svg>
					Book a call
				</a>
			</div>

			<!-- Visible email address with copy -->
			<div class="mt-6 flex flex-wrap items-center justify-center gap-3 text-hero-text-secondary">
				<a
					href="mailto:{profile.email}"
					class="text-lg md:text-xl font-medium tracking-wide underline decoration-hero-border underline-offset-4 hover:decoration-hero-text-secondary select-all"
				>
					{profile.email}
				</a>
				<button
					type="button"
					onclick={copyEmail}
					class="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-semibold rounded-md border border-hero-border text-hero-text hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
					aria-label="Copy email address"
				>
					{#if copied}
						<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
						</svg>
						Copied
					{:else}
						<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
						</svg>
						Copy
					{/if}
				</button>
				<span class="sr-only" aria-live="polite">{copied ? 'Email address copied' : ''}</span>
			</div>
		</div>
	</div>
</section>
