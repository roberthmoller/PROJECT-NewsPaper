<script lang="ts">
	import type { External, Item } from '$lib/types';
	import { ReadMore, Title } from '../elements';
	const { story }: { story: External<Item> } = $props();
</script>

<article class="flex flex-col items-stretch border-b mt-2 pb-2">
	<Title {...story} class="pb-2"/>
	<ReadMore {...story} />
</article>
