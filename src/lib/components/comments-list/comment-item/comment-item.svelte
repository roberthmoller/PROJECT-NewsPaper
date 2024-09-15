<script lang="ts">
	import { HackerNewsApi } from '$lib/apis';
	import type { Item, External } from '$lib/types';
	import { onMount } from 'svelte';
	import CommentBody from './comment-body.svelte';

	const newsApi = new HackerNewsApi(fetch);
	const { commentId, ...other }: { commentId: number } & any = $props();
	let comment: External<Item> = $state({ isLoading: true });

	onMount(async () => {
		comment = await newsApi.item(commentId);
	});
</script>

{#if !comment.deleted}
	<div {...other}>
		<CommentBody {...comment} />
	</div>
{/if}
