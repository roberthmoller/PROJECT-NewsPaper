<script lang="ts">
	import { HackerNewsApi } from '$lib/apis';
	import { StoryListElements, CommentsList } from '$lib/components';
	
	const {data} = $props();
	const {story, metadata} = data;

</script>

<article class="mx-4 py-4">
	<StoryListElements.Title {...story} class="mb-1"/>
	<StoryListElements.TimeAndUser {...story} class="mb-3"/>
	<StoryListElements.Description {...metadata} class="mb-3"/>
	<StoryListElements.ReadMore {...story} />
	{#if story.text}
		<p>{@html story.text}</p>
	{/if}
</article>

<section class="mx-4">
	<h1 class="text-lg font-bold font-serif">Comments</h1>
	<div class="flex flex-col gap-4">
		<CommentsList kids={story.kids}/>
	</div>
</section>
