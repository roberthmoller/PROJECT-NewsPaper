<script lang="ts">
	import { Shimmer } from '$lib/components';
	import type { External, Item } from '$lib/types';

	type Props = External<Pick<Item, 'id' | 'score' | 'descendants'>> & any;
	const { id, score, descendants, isLoading, ...others }: Props = $props();
</script>

{#if isLoading}
	<div {...others}>
		<p class="flex flex-row gap-2 text-xs">
			<Shimmer>👍 100</Shimmer>
			<Shimmer>💭 100</Shimmer>
		</p>
	</div>
{:else if id}
	<div {...others}>
		<p class="text-xs flex flex-row gap-2 whitespace-nowrap flex-nowrap">
			<a href="https://news.ycombinator.com/item?id={id}" class="hover:underlinewhitespace-nowrap">
				👍 {score ?? 0}
			</a>
			<a href="/item/{id}" class="hover:underline whitespace-nowrap inline-block">
				💭 {descendants ?? 0}
			</a>
		</p>
	</div>
{/if}
