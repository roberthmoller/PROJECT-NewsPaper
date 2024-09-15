<script lang="ts">
	import { Shimmer } from '$lib/components';
	import type { External, Metadata } from '$lib/types';
	type Props = External<Pick<Metadata, 'image' | 'alt'>>  & any;
	export const { image, alt, style, isLoading, ...others }: Props = $props();
</script>

{#if image}
	<img src={image} {alt} {...others} />
{:else if isLoading}
	<div {...others}>
		<Shimmer shrink={false}>
			<div class="h-64">Images goes here</div>
		</Shimmer>
	</div>
{/if}
