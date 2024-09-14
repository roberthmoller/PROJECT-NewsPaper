<script lang="ts">
	import type { External, Item, Metadata } from '$lib/types';
	import { Description, Image, ReadMore, Title } from '../elements';

	const { story, metadata }: { story: External<Item>; metadata: External<Metadata> } = $props();
</script>

<article class="flex flex-row items-stretch border-b inset-0">
    <Image style="row" {...metadata} />
	<div class="flex flex-col flex-grow">
		<Title {...story} />
		<ReadMore {...story} />
		<Description {...metadata} />
		<ReadMore {...story} />
	</div>
</article>
