<script lang="ts">
	import StoryListItem from '$lib/components/story-list-item.svelte';
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';

	const { data } = $props();
	const { stories, category } = data;
	// derived(page, (value) => )
	const pageNumber = parseInt($page.url.searchParams.get('page') ?? '0');
	const pageSize = parseInt($page.url.searchParams.get('limit') ?? '1');
</script>

<header class="flex flex-row justify-between items-end mx-4 py-4 w-full">
	<h2 class="flex-grow text-2xl font-serif italic">{category.slice(0,1).toUpperCase() + category.slice(1).toLowerCase()} Stories</h2>
	<nav class="">
		<ul class="flex flex-row">
<!--			<li>-->
<!--				<a href="/" class="hover:underline "><sub>HOME</sub></a>-->
<!--			</li>-->
<!--			<li><sub>/</sub></li>-->
<!--			<li><sub>{category.toUpperCase()}</sub></li>-->
		</ul>
	</nav>
</header>

<main class="flex flex-col m-4 gap-4">
	{#each stories as story}
		<StoryListItem {story} isRow />
	{/each}

	<nav class="grid-cols-4 mx-auto my-2">
		<form method="POST">
			<sup>
				<!--				<a href="/stories/{category}?page={pageNumber}" class="hover:underline"><b>previous</b></a>-->
				<button class="hover:underline uppercase" formaction="?/previous&page={pageNumber}"><b>previous</b></button>
				|
				Page Nº{pageNumber}
				|
				<button class="hover:underline uppercase" formaction="?/next&page={pageNumber}"><b>next</b></button>
				<!--				<a href="/stories/{category}?page={pageNumber+2}" class="hover:underline"><b>next</b></a>-->
			</sup>
		</form>
	</nav>
</main>