<script lang="ts">
	import StoryListItem from '$lib/components/story-list-item.svelte';

	const { data } = $props();
	const { stories } = data;

</script>

<header class="flex flex-row justify-between items-end mx-4 py-4 w-full">
	<h2 class="flex-grow text-2xl font-serif italic">Top Stories</h2>
	<nav class="">
		<ul class="flex flex-row">
			<li>
				<a href="/" class="hover:underline "><sub>HOME</sub></a>
			</li>
			<li><sub>/</sub></li>
			<li><sub>TOP</sub></li>
		</ul>
	</nav>
</header>

<main class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 m-4 gap-4 auto-rows-[8em]">
	<!--highlighted -->
	{#each stories.slice(0, 1) as story}
		{#if story.metadata?.image}
			<StoryListItem {story} class="col-span-1 row-span-3 md:col-span-2 lg:col-span-3 border-b" />
		{:else}
			<StoryListItem {story} class="border-b" />
		{/if}
	{/each}
	<!--the rest-->
	{#each stories.slice(1) as story}
		<StoryListItem {story} class="border-b" />
	{/each}
</main>