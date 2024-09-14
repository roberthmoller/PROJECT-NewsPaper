<script lang="ts">
	import type { External, Item } from '$lib/types';

	type Props = External<Pick<Item, 'id' | 'score' | 'descendants'>> & any;
	const { id, score, descendants, isLoading, ...others }: Props = $props();
</script>

{#if score && descendants}
	<p {...others}>
		<a class="text-xs mr-2" href="https://news.ycombinator.com/item?id={id}">👍 {score}</a>
		<a href="/item/{id}" class="text-xs hover:underline">💭 {descendants}</a>
	</p>
{:else if isLoading}
	<p {...others}>Loading...</p>
{/if}
