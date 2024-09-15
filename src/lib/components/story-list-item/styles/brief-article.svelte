<script lang="ts">
	import type { External, Item } from '$lib/types';
	import { ReadMore, Title } from '../elements';
	import ScoreAndComments from '../elements/score-and-comments.svelte';
	const { story }: { story: External<Item> } = $props();
</script>

<article class="flex flex-col items-stretch border-b mt-2 pb-2">
	<Title {...story} class="pb-2"/>
	<div class="flex flex-row w-full gap-2 justify-between text-xs">
		<ReadMore {...story} class="flex-shrink" />
		<ScoreAndComments {...story} class="items-end" />
	</div>
</article>
