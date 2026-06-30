<script lang="ts">
	import '../app.scss';
	import Time from 'svelte-time';
	import { ThemeToggle } from '$lib/components/theme-toggle';
	import { initTheme } from '$lib/theme';
	import { onMount } from 'svelte';

	onMount(() => initTheme());
</script>

<header class="max-w-7xl mx-auto p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
	<small class="flex flex-col justify-center w-full h-full font-georgia">
		<Time format="dddd, MMMM DD, YYYY" />
	</small>
	<ThemeToggle />
</header>
<div class="max-w-7xl mx-auto bg-surface">
	<h1 class="font-playfair font-bold text-4xl sm:text-6xl py-12 text-center uppercase">
		<a href="/">
			<span class="text-5xl sm:text-7xl">H</span>acker
			<span class="text-5xl sm:text-7xl">N</span>ews
		</a>
	</h1>
	<nav class="max-w-3xl mx-auto">
		<ul
			class="grid grid-cols-7 mx-auto text-center py-2 font-arial uppercase text-sm font-semibold tracking-wide"
		>
			<li><a href="/new?page=1" target="_self" class="hover:underline">New</a></li>
			<li><a href="/top?page=1" target="_self" class="hover:underline">Top</a></li>
			<li><a href="/best?page=1" target="_self" class="hover:underline">Best</a></li>
			<span class="text-subtle">|</span>
			<li><a href="/ask?page=1" target="_self" class="hover:underline">Ask</a></li>
			<li><a href="/show?page=1" target="_self" class="hover:underline">Show</a></li>
			<li><a href="/jobs?page=1" target="_self" class="hover:underline">Jobs</a></li>
		</ul>
	</nav>

	<hr class="mx-4 mb-0.5 border-[0.1px] border-border" />
	<hr class="mx-4 border-[0.5px] border-border" />

	<slot />
</div>

<footer class="max-w-7xl mx-auto">
	<p class="py-4 text-xs text-subtle"></p>
</footer>
