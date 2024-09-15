<script lang="ts">
	import { Shimmer } from '$lib/components';
	import type { Item, External } from '$lib/types';
	type Props = { story: External<Pick<Item, 'title' | 'url'>> } & any;
	export const { story, ...others }: Props = $props();
</script>

{#if story.title && story.url}
	<div {...others}>
		<article>
			<p>
				<a href={story.url} class="hover:underline">
					{story.title}
				</a>
			</p>
		</article>
	</div>
{:else if story.isLoading}
	<Shimmer {...others}>
		<p>The bullet articles</p>
		<p>are usually two lines</p>
	</Shimmer>
{/if}
