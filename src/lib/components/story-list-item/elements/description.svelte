<script lang="ts">
	import type { Description, External } from '$lib/types';

	export const { description, isLoaded, ...others }: External<Description> & any = $props();
</script>

{#if description}
	<div {...others}>
		<p class="font-serif">
			{description?.slice(0, 200)}
			{#if description && description?.length > 200}...{/if}
		</p>
	</div>
{:else if !isLoaded}
	<div {...others}>Loading...</div>
{/if}
