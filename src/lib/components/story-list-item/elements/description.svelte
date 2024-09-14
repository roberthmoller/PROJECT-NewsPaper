<script lang="ts">
	import type { External, Metadata } from '$lib/types';
	type Props = External<Pick<Metadata, 'description'>> & { isTruncated?: boolean } & any;
	export const { description, isLoading, isTruncated, ...others }: Props = $props();
</script>

{#if description}
	<div {...others}>
		<p class="font-serif overflow-ellipsis">
			{#if isTruncated}
				{description?.slice(0, 200)}
				{#if description && description?.length > 200}...{/if}
			{:else}
				{description}
			{/if}
		</p>
	</div>
{:else if isLoading}
	<div {...others}>Loading...</div>
{/if}
