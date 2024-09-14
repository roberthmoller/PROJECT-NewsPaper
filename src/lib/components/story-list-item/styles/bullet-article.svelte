<script lang="ts">
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
	<p {...others}>Loading...</p>
{/if}
