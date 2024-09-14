<script lang="ts">
	import type { External, Subtitle } from '$lib/types';

	type Props = External<Pick<Subtitle, 'id' | 'score' | 'descendants'>> & any;
	const { id, score, descendants, isLoading, ...others }: Props = $props();
</script>

{#if score && descendants}
	<div {...others}>
		<p class="text-right">
			<span class="mr-2">👍 {score}</span>
			<span>💭 <a href="/item/{id}" class="hover:underline">{descendants}</a></span>
		</p>
	</div>
{:else if isLoading}
	<div {...others}>
		<p>Loading...</p>
	</div>
{/if}
