<script lang="ts">
	import type { External, Item } from '$lib/types';
	import CommentsList from '../comments-list.svelte';
	import { StoryListElements } from '$lib/components';
	type Props = External<Pick<Item, 'text' | 'title' | 'by' | 'time' | 'kids' | 'url' | 'id'>> & any;
	const { text, title, by, time, url, id, kids, isLoading, ...other }: Props = $props();
</script>

{#if text || by || time || kids}
	<div {...other}>
		<div class="comment mb-1">
			<StoryListElements.Title {title} {url} {id} {isLoading} class="mb-1" />
			<StoryListElements.TimeAndUser {by} {time} {isLoading} class="mb-3" />
			{#if text}
				<p>{@html text}</p>
			{/if}

			<!-- <div class="flex gap-2 my-2">
				<p>reply</p>
				<p>upvote</p>
			</div> -->

			{#if kids && kids.length > 0}
				<hr class="mt-2" />
				<div class="replies pl-8 mt-4">
					<CommentsList {kids} />
				</div>
			{/if}
		</div>
	</div>
{:else if isLoading}
	<p>Loading...</p>
{/if}
