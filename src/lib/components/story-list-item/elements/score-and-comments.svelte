<script lang="ts">
	import type { External, Subtitle } from '$lib/types';

	const {
		id,
		score,
		descendants,
		isLoaded,
		...others
	}: External<Subtitle> & { rank?: number } & any = $props();
</script>

{#if score && descendants}
	<div {...others}>
		<p class="text-right">
			<span class="mr-2">👍 {score}</span>
			<span>💭 <a href="/item/{id}" class="hover:underline">{descendants}</a></span>
		</p>
	</div>
{:else if !isLoaded}
	<div {...others}>
		<p>Loading...</p>
	</div>
{/if}
