<script lang="ts">
	import { HackerNewsApi } from '$lib/apis';
	import { StoryListElements, CommentsList, Shimmer } from '$lib/components';

	const { data } = $props();
	const { story, metadata } = data;
</script>

<article class="mx-4 py-4">
	<StoryListElements.Title {...story} class="mb-1" />
	<StoryListElements.TimeAndUser {...story} class="mb-3" />
	{#if story.text}
		<p class="mb-3">{@html story.text}</p>
	{/if}
	{#if story.url}
		<StoryListElements.ReadMore {...story} class="mb-3" />
	{/if}

	{#if metadata.description}
		<blockquote class="mb-3 bg-black/5 p-4 rounded-md grid grid-cols-12 gap-4">
			<div class="{metadata.image ? 'col-span-8' : 'col-span-12' } flex flex-col gap-1">
				{#if metadata.title}
					<p class="text-sm text-black/50"><a href={story.url} target="_blank" class="hover:underline" title={story.url}>{metadata.title}</a></p>
				{/if}
				<StoryListElements.Description {...metadata} />
				<details class="mt-2">
					<summary class="text-xs text-black/50 cursor-pointer hover:underline">View raw metadata</summary>
					<pre class="mt-1 text-xs bg-black/10 p-2 rounded-md overflow-x-auto">{JSON.stringify(metadata, null, 2)}</pre>
				</details>
				<sub class="text-xs mt-auto whitespace-nowrap overflow-hidden text-ellipsis block font-bold">
					<span class="text-black/50">OpenGraph data from</span> 
					<a href={story.url} target="_blank" class="hover:underline" title={story.url}>{story.url}</a>
				</sub>
			</div>
			{#if metadata.image}
				<StoryListElements.Image {...metadata} class="col-span-4" />
			{/if}
		</blockquote>
	{/if}

</article>

<section class="mx-4">
	<h1 class="text-lg font-bold font-serif">Comments</h1>
	<div class="flex flex-col gap-4">
		<CommentsList kids={story.kids} />
	</div>
</section>
