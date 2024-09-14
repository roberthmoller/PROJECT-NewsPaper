<script lang="ts">
	import type { External, Item } from '$lib/types';
	import { CommentItem } from './comment-item';

	type Props = {kids: number[]} & any;
	const { kids, ...other }: Props = $props();
</script>

<div {...other}>
	{#each (kids ?? []).sort((a: number, b: number) => b - a) as commentId}
		<CommentItem {commentId} class="mb-4"/>
	{/each}
</div>
