<script lang="ts">
	import type { Item, External } from '$lib/types';

	type Props = External<Pick<Item, 'title' | 'url'>> & any;
	const { title, url, isLoading, ...others }: Props = $props();
</script>

{#if title}
	<div {...others}>
		<a href={url} class="hover:underline">
			<h3 class="text-xl font-serif font-bold">{title}</h3>
		</a>
	</div>
{:else if isLoading}
	<p {...others}>Loading...</p>
{/if}
