<script lang="ts">
	import { Shimmer } from '$lib/components';
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
	<div {...others}>
		<p class="flex flex-row gap-2">
			<Shimmer>x days ago</Shimmer>
			<Shimmer>by usernme</Shimmer>
		</p>
	</div>
{/if}
