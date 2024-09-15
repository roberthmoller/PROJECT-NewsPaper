<script lang="ts">
	import { Shimmer } from '$lib/components';
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
	<div {...others}>
		<Shimmer>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Voluptates, nemo.</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Repellendus, accusantium.</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Dignissimos, labore.</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Temporibus, mollitia.</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Expedita, consequatur.</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Inventore, culpa.</p>
		</Shimmer>
	</div>
{/if}
