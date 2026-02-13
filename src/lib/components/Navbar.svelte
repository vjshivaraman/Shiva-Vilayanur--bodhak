<script lang="ts">
	import { onMount } from 'svelte';

	let { sections = [] } = $props<{ sections?: Array<{ id: string; label: string }> }>();

	let isScrolled = $state(false);
	let isMobileMenuOpen = $state(false);
	let darkMode = $state(false);

	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 20;
		};

		const checkDarkMode = () => {
			darkMode = document.documentElement.classList.contains('dark');
		};

		window.addEventListener('scroll', handleScroll);
		checkDarkMode();

		// Watch for theme changes
		const observer = new MutationObserver(checkDarkMode);
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['class'],
		});

		return () => {
			window.removeEventListener('scroll', handleScroll);
			observer.disconnect();
		};
	});

	function toggleDarkMode() {
		darkMode = !darkMode;
		if (darkMode) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}

	function scrollToSection(id: string) {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
			isMobileMenuOpen = false;
		}
	}

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		isMobileMenuOpen = false;
	}
</script>

<nav
	aria-label="Main navigation"
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {isScrolled
		? 'bg-background/95 backdrop-blur-md shadow-md'
		: 'bg-transparent'}"
>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-16 md:h-20">
			<!-- Logo/Brand -->
			<button
				onclick={scrollToTop}
				class="text-xl md:text-2xl font-bold text-primary hover:opacity-80 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
				aria-label="Scroll to top"
			>
				SV
			</button>

			<!-- Desktop Navigation -->
			<div class="hidden md:flex items-center space-x-1 lg:space-x-2">
				{#each sections as section}
					<button
						onclick={() => scrollToSection(section.id)}
						class="px-3 lg:px-4 py-2 text-sm lg:text-base text-text hover:text-primary transition-colors rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary {isScrolled ? '' : 'text-text'}"
						aria-label={`Navigate to ${section.label}`}
					>
						{section.label}
					</button>
				{/each}

				<!-- Dark Mode Toggle -->
				<button
					onclick={toggleDarkMode}
					class="ml-4 p-2 rounded-md text-text hover:bg-surface transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
					aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
					aria-pressed={darkMode}
				>
					{#if darkMode}
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
								d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
							/>
						</svg>
					{:else}
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
								d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
							/>
						</svg>
					{/if}
				</button>
			</div>

			<!-- Mobile Menu Button -->
			<div class="md:hidden flex items-center space-x-2">
				<button
					onclick={toggleDarkMode}
					class="p-2 rounded-md text-text hover:bg-surface transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
					aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
					aria-pressed={darkMode}
				>
					{#if darkMode}
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
								d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
							/>
						</svg>
					{:else}
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
								d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
							/>
						</svg>
					{/if}
				</button>

				<button
					onclick={() => (isMobileMenuOpen = !isMobileMenuOpen)}
					class="p-2 rounded-md text-text hover:bg-surface transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
					aria-label="Toggle mobile menu"
					aria-expanded={isMobileMenuOpen}
					aria-controls="mobile-menu"
				>
					{#if isMobileMenuOpen}
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
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					{:else}
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
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					{/if}
				</button>
			</div>
		</div>

		<!-- Mobile Menu -->
		{#if isMobileMenuOpen}
			<div
				id="mobile-menu"
				class="md:hidden pb-4 space-y-2"
				role="menu"
			>
				{#each sections as section}
					<button
						onclick={() => scrollToSection(section.id)}
						class="w-full text-left px-4 py-2 text-base text-text hover:bg-surface rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary bg-background/95"
						role="menuitem"
					>
						{section.label}
					</button>
				{/each}
			</div>
		{/if}
	</div>
</nav>
