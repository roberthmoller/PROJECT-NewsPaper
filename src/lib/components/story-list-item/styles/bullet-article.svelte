<script lang="ts">
	import type { Item, Title, External } from '$lib/types';

	export const { story, ...others }: { story: External<Item> } = $props();
	const { title, url, isLoaded } = story;
</script>

<div {...others}>
	{#if !isLoaded && !title}
		<p>Loading...</p>
	{:else}
		<a href={url} class="hover:underline">
			<article>{title}</article>
		</a>
	{/if}
</div>
