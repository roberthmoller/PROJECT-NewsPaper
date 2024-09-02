<script lang="ts">
	import Time from 'svelte-time';

	const { story, rank, brief, ...other } = $props();
</script>
<article class="flex flex-col items-stretch" {...other}>
	{#if story.metadata?.image && !brief}
		<img src="{story.metadata.image}" alt="{story.metadata['image:alt'] ?? ''}"
				 class="max-h-[20em] w-full object-cover mb-4" />
	{/if}

	<sup class="uppercase pt-4 pb-2 text-black/60">
		{#if rank}Nº{rank} |{/if}
		{#if story.time}
			<Time timestamp={new Date(story.time)} relative />
			|
		{/if}
		{#if story.type}<a href="/{story.type}" class="hover:underline">{story.type}</a> |{/if}
		{#if story.by}by <a href="/user/{story.by}" class="hover:underline">{story.by}</a> |{/if}
		{#if story.score} ⬆ {story.score} |{/if}
		<!--todo: Add button to upvote -->
		{#if story.descendants} <a href="/item/{story.id}" class="hover:underline ">💬 {story.descendants}</a> {/if}
	</sup>

	<a href="{story.url}" class="hover:underline pb-1.5	font-serif">
		<h3 class="text-xl">{story.title}</h3>
	</a>

	{#if !brief}
		{#if story.metadata?.description}
			<p class="font-serif text-black/60">
				{story.metadata?.description?.slice(0, 200)}
				{#if story.metadata.description.length > 200}...{/if}
			</p>
		{/if}
		<a href="{story.url}" class="hover:underline">
			<sub><b>READ MORE <span class="text-black/50">({story.url})</span></b></sub>

		</a>
	{/if}

</article>