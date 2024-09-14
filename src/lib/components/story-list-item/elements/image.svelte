<script lang="ts">
	import type { External, Metadata } from '$lib/types';
	type Props = External<Pick<Metadata, 'image' | 'alt'>>  & any;
	export const { image, alt, style, isLoading, ...others }: Props = $props();
</script>

{#if image}
	<img src={image} {alt} {...others} />
{:else if isLoading}
	<p {...others}>Loading...</p>
{/if}
