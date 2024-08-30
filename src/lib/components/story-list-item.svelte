<script lang="ts">
	import Time from 'svelte-time';

	const { story, rank, brief, ...other } = $props();
</script>
<article class="flex flex-col items-stretch" {...other}>
	{#if story.metadata?.image && !brief}
		<img src="{story.metadata.image}" alt="{story.title}" class="max-h-[20em] w-full object-cover mb-4" />
	{/if}

	<sup class="uppercase py-4">
		{#if rank}Nº{rank} |{/if}
		{#if story.time}
			<Time timestamp={new Date(story.time)} relative />
			|
		{/if}
		{#if story.by}by <a href="/user/{story.by}" class="hover:underline">{story.by}</a> |{/if}
		{#if story.score} ⬆ {story.score} |{/if}
		<!--todo: Add button to upvote -->
		{#if story.descendants} <a href="/item/{story.id}" class="hover:underline ">💬 {story.descendants}</a> {/if}
	</sup>

	<a href="{story.url}" class="hover:underline py-2	font-serif">
		<h3>{story.title}</h3>
	</a>

	{#if !brief}
		{#if story.text}
			<p class="font-serif text-lg">{story.text}</p>
		{/if}
		<a href="{story.url}" class="hover:underline">
			<sub class="font-mono">READ MORE</sub>
		</a>
	{/if}

</article>