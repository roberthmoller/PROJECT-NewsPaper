<script lang="ts">
	import type { External, Metadata } from '$lib/types';
	type Props = External<Pick<Metadata, 'description'>> & any;
	export const { description, isLoading, ...others }: Props = $props();
</script>

{#if description}
	<div {...others}>
		<p class="font-serif">
			{description?.slice(0, 200)}
			{#if description && description?.length > 200}...{/if}
		</p>
	</div>
{:else if isLoading}
	<div {...others}>Loading...</div>
{/if}
