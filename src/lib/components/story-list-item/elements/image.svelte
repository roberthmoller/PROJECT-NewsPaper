<script lang="ts">
	import type { External, Metadata } from '$lib/types';
	type Props = External<Pick<Metadata, 'image' | 'alt'>> & { style: 'row' | 'col' } & any;
	export const { image, alt, style, isLoading, ...others }: Props = $props();
</script>

{#if image}
	<div {...others}>
		<img
			src={image}
			alt={alt}
			class="max-h-[20em] {style === 'row' ? 'order-2 w-64' : 'w-full'} object-cover"
		/>
	</div>
{:else if isLoading}
	<p {...others}>Loading...</p>
{/if}
