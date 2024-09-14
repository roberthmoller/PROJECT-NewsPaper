<script lang="ts">
	import Time from 'svelte-time';
	import type { External, Subtitle } from '$lib/types';

	const {
		rank,
		by,
		id,
		score,
		time,
		type,
		descendants,
		isLoaded,
		...others
	}: External<Subtitle> & { rank?: number } & any = $props();
</script>

<div {...others}>
	{#if !isLoaded}
		<p>
			<span>Loading...</span>
		</p>
	{:else}
		<p class="italic">
			<Time timestamp={new Date(time * 1000)} relative />
			by <a href="/user/{by}" class="hover:underline">{by}</a>
		</p>
		<!-- <div class="grid grid-cols-2">
			<p class="italic">
				<Time timestamp={new Date(time * 1000)} relative />
				by <a href="/user/{by}" class="hover:underline">{by}</a>
			</p>
			<p class="text-right">
				<span class="mr-2">👍 {score}</span>
				<span>💭 <a href="/item/{id}" class="hover:underline">{descendants}</a></span>
			</p>
		</div> -->
	{/if}
</div>

<!-- todo: try splitting this into two sides and ditching the separator	 -->
<!-- <div {...others}>
	{#if !isLoaded}
		<p>
			<span>Loading...</span>
		</p>
	{:else}
		<p class="uppercase text-xs text-black/50 flex flex-row flex-wrap text-wrap gap-2 gap-y-2">
			{#if rank}
				<span>Nº{rank}</span><span>|</span>
			{/if}
			{#if time}
				<span><Time timestamp={new Date(time * 1000)} relative /></span><span>|</span>
			{/if}
			{#if by}
				<span> by <a href="/user/{by}" class="hover:underline text-black">{by}</a></span><span
					>|
				</span>
			{/if}
			{#if score}
				<span class="text-black">👍 {score}</span><span>| </span>
			{/if}
			{#if descendants}
				<span class="text-black">
					💭 <a href="/item/{id}" class="hover:underline text-black">{descendants}</a>
				</span>
			{/if}
		</p>
	{/if}
</div> -->
