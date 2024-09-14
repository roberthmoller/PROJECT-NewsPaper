<script lang="ts">
	import type { External, Item } from '$lib/types';
	import Time from 'svelte-time';

	type Props = External<Pick<Item, 'by' | 'time'>> & any;
	const { by, time, isLoading, ...others }: Props = $props();
</script>

{#if time && by}
	<div {...others}>
		<p class="italic">
			<Time timestamp={new Date(time * 1000)} relative />
			by <a href="/user/{by}" class="hover:underline">{by}</a>
		</p>
	</div>
{:else if isLoading}
	<p {...others}>Loading...</p>
{/if}
