<script lang="ts">
	import type { External, Image } from '$lib/types';
	export const { image, alt, isBrief, style, isLoaded }: External<Image> & { isBrief: boolean, style: 'row' | 'col' } = $props();
</script>

{#if !isLoaded}
	Loading...
{:else if image && !isBrief}
	<img
		src={image}
		alt={alt ?? ''}
		class="max-h-[20em] {style === 'row' ? 'order-2 w-64' : 'w-full'} object-cover"
        />
{/if}
