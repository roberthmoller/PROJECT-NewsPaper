<script lang="ts">
	import type { Item, External } from '$lib/types';

	type Props = External<Pick<Item, 'title' | 'url'>> & any;
	const { title, url, id, isLoading, ...others }: Props = $props();
</script>

{#if title}
	<div {...others}>
		<a href={url ?? `/item/${id}` } class="hover:underline">
			<h3 class="text-xl font-serif font-bold">{@html title}</h3>
		</a>
	</div>
{:else if isLoading}
	<p {...others}>Loading...</p>
{/if}
