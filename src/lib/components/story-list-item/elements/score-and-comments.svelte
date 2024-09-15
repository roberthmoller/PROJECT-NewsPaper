<script lang="ts">
	import { Shimmer } from '$lib/components';
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
	<div {...others}>
		<p class="flex flex-row gap-2">
			<Shimmer>👍 100</Shimmer>
			<Shimmer>💭 100</Shimmer>
		</p>
	</div>
{/if}
