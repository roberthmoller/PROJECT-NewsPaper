<script lang="ts">
	import { Shimmer } from '$lib/components';
	import { DESCRIPTION_OVERVIEW_MAX_LENGTH } from '$lib/constants';
	import type { External, Metadata } from '$lib/types';
	type Props = External<Pick<Metadata, 'description'>> & { isTruncated?: boolean } & any;
	export const { description, isLoading, isTruncated, ...others }: Props = $props();

	const displayDescription = $derived(
		isTruncated && description && description.length > DESCRIPTION_OVERVIEW_MAX_LENGTH
			? `${description.slice(0, DESCRIPTION_OVERVIEW_MAX_LENGTH)}...`
			: description
	);
</script>

{#if description}
	<div {...others}>
		<p class="font-georgia text-base text-muted leading-relaxed">
			{displayDescription}
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
