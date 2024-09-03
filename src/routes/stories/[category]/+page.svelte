<script lang="ts">
	import StoryListItem from '$lib/components/story-list-item.svelte';
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';

	const { data } = $props();
	const { stories, category } = data;
	// derived(page, (value) => )
	const pageNumber = parseInt($page.url.searchParams.get('page') ?? '0');
	const pageSize = parseInt($page.url.searchParams.get('limit') ?? '1');
</script>

<header class="flex flex-row justify-between items-end mx-4 py-4 w-full">
	<h2 class="flex-grow text-2xl font-serif italic">{category.toLocaleUpperCase()} Stories</h2>
	<nav class="">
		<ul class="flex flex-row">
			<li>
				<a href="/" class="hover:underline "><sub>HOME</sub></a>
			</li>
			<li><sub>/</sub></li>
			<li><sub>{category.toUpperCase()}</sub></li>
		</ul>
	</nav>
</header>

<main class="flex flex-col m-4 gap-4">
	{#each stories as story}
		<StoryListItem {story} isRow />
	{/each}

	<nav class="grid-cols-4 mx-auto uppercase ">
		<sup>
			<a href="/stories/{category}?page={pageNumber}" class="hover:underline"><b>previous</b></a>
			|
			Page Nº{pageNumber + 1}
			|
			<a href="/stories/{category}?page={pageNumber+2}" class="hover:underline"><b>next</b></a>
		</sup>
	</nav>
</main>