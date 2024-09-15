<script lang="ts">
	import { Shimmer } from '$lib/components';
	import type { Item, External } from '$lib/types';
	type Props = External<Pick<Item, 'url' | 'id'>> & any;
	export const { url, id, isLoading, ...others }: Props = $props();
</script>

{#if !isLoading}
	<div {...others}>
		<p class="text-xs font-bold">
			{#if url}
				<a href={url} class="hover:underline flex-grow flex flex-col justify-end">
					<span>READ MORE <span class="text-black/50">({new URL(url).host})</span></span>
				</a>
			{:else}
				<a href="/item/{id}" class="hover:underline flex-grow flex flex-col justify-end">
					<span>READ MORE</span>
				</a>
			{/if}
		</p>
	</div>
{:else}
	<div {...others}>
		<p class="flex flex-row gap-2">
			<Shimmer>READ MORE</Shimmer>
			<Shimmer>(links for hn posts are hidden but external links are shown)</Shimmer>
		</p>
	</div>
{/if}
