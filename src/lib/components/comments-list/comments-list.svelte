<script lang="ts">
	import type { External, Item } from '$lib/types';
	import { CommentItem } from './comment-item';

	type Props = External<Pick<Item, 'kids'>> & any;
	const { kids, ...other }: Props = $props();
</script>

<div {...other}>
	{#each (kids ?? []).slice(0, 2) as commentId}
		<CommentItem {commentId} class="mb-4"/>
		<hr/>
	{/each}
</div>
