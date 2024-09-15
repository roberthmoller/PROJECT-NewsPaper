<script lang="ts">
	import type { External, Item } from '$lib/types';
	import CommentsList from '../comments-list.svelte';
	import { StoryListElements } from '$lib/components';
	import Shimmer from '$lib/components/shimmer/shimmer.svelte';
	type Props = External<Pick<Item, 'text' | 'title' | 'by' | 'time' | 'kids' | 'url' | 'id' | 'dead'>> & any;
	const { text, title, by, time, url, id, kids, dead, isLoading, ...other }: Props = $props();
</script>

{#if !dead}
<div {...other}>
	<div class="comment mb-1">
		<StoryListElements.Title {title} {url} {id} {isLoading} class="mb-1" />
		<StoryListElements.TimeAndUser {by} {time} {isLoading} class="mb-3" />

		{#if text}
			<p class="prose">{@html text}</p>
		{:else if isLoading}
			<Shimmer>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam.</p>
			</Shimmer>
		{/if}

		<!-- <div class="flex gap-2 my-2">
				<p>reply</p>
				<p>upvote</p>
			</div> -->

		<hr class="mt-2" />
		{#if kids && kids.length > 0}
			<div class="replies pl-8 mt-4">
				<CommentsList {kids} />
			</div>
		{/if}
		</div>
	</div>
{/if}
