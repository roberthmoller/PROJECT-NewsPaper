<script lang="ts">
	import { Shimmer } from '$lib/components';
	import type { Item, External } from '$lib/types';
	type Props = External<Pick<Item, 'url' | 'id'>> & any;
	const { url, id, isLoading, ...others }: Props = $props();
</script>

{#if !isLoading}
	<div {...others}>
		<p class="text-xs font-bold whitespace-nowrap">
			{#if url}
				<a href={url} target="_blank" title={url} class="hover:underline flex-grow flex flex-col justify-end">
					<span class="flex flex-row gap-1">
						READ MORE
						<span class="text-black/50 flex-shrink">
							(<span class="whitespace-nowrap text-ellipsis">{new URL(url).host}</span>)
						</span>
					</span>
				</a>
			{:else}
				<a
					href="/item/{id}"
					target="_blank"
					title={url}
					class="hover:underline flex-grow flex flex-col justify-end"
				>
					<span>READ MORE</span>
				</a>
			{/if}
		</p>
	</div>
{:else}
	<div {...others}>
		<p class="flex flex-row gap-2">
			<Shimmer>READ MORE</Shimmer>
			<Shimmer>(hide hn links but not external)</Shimmer>
		</p>
	</div>
{/if}
