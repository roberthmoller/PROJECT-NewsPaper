<script lang="ts">
	import Time from 'svelte-time';
	import type { Item } from '$lib';
	import { OpenGraphApi } from '$lib/open-graph-api';
	import { onMount } from 'svelt
	import { enhance } from '$app/forms';

	const openGraph = new OpenGraphApi(fetch);

	type Props = { story: Item, rank?: number, brief?: boolean, isRow?: boolean };
	const { story, rank, brief = false, isRow = false, ...other }: Props = $props();
	let metadata: { [p: string]: string } = $state(undefined);
	let isMetadataLoading = $state(false);

	onMount(async () => {
		if (story.url) {
			metadata = await openGraph.get(story.url);
			console.log('got metadata', metadata);
		}
		isMetadataLoading = false;
	});
</script>

<article class="flex flex-{isRow ? 'row' : 'col'} items-stretch border-b inset-0">
	{#if isMetadataLoading}
		Loading...
	{:else if metadata?.image && !brief}
		<img src="{metadata.image}" alt="{metadata['image:alt'] ?? ''}"
				 class="max-h-[20em] {isRow ? 'order-2 w-64' : 'w-full'} object-cover" />
	{/if}

	<div class="flex flex-col flex-grow">
		<sup class="uppercase mt-8 mb-2 text-black/60 flex flex-row flex-wrap text-wrap gap-2 gap-y-5">
			{#if rank}
				<span>Nº{rank}</span><span>|</span>
			{/if}
			{#if story.time}
				<span><Time timestamp={new Date(story.time * 1000)} relative /></span><span>|</span>
			{/if}
			{#if story.type}
				<span><a href="/{story.type}" class="hover:underline">{story.type}</a></span><span>|</span>
			{/if}
			{#if story.by}
				<span>by <a href="/user/{story.by}" class="hover:underline">{story.by}</a></span><span>|</span>
			{/if}
			{#if story.score}
				<!--todo: Add button to upvote -->
				<form method="POST" action="/item/{story.id}/upvote" use:enhance>
					<button>⬆</button>
				</form>
				<span>{story.score}</span><span>|</span>
			{/if}
			{#if story.descendants}
				<span><a href="/item/{story.id}" class="hover:underline ">💬 {story.descendants}</a></span>
			{/if}
		</sup>

		<a href="{story.url}" class="hover:underline pb-1.5	font-serif">
			<h3 class="text-xl">{story.title}</h3>
		</a>

		{#if !brief}
			{#if isMetadataLoading}
				Loading...
			{:else if metadata?.description}
				<p class="font-serif text-black/60 mb-1">
					{metadata?.description?.slice(0, 200)}
					{#if metadata.description.length > 200}...{/if}
				</p>
			{/if}
			{#if story.url}
				<a href="{story.url}" class="hover:underline flex-grow flex flex-col justify-end py-4">
					<sup><b>READ MORE <span class="text-black/50">({new URL(story.url).host})</span></b></sup>
				</a>
			{:else}
				<a href="/item/{story.id}" class="hover:underline flex-grow flex flex-col justify-end py-4">
					<sup><b>READ MORE</b></sup>
				</a>
			{/if}
		{/if}
	</div>
</article>