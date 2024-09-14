<script lang="ts">
	import type { Item, External, Metadata } from '$lib/types';
	import { Description, ReadMore, TimeAndUser,Title, Image } from '../elements';

	const {
		story,
		metadata
	}: {
		story: External<Item>;
		metadata: External<Metadata>;
	} = $props();
</script>

<article class="flex flex-col items-stretch my-2">
	<Image style="col" {...metadata} />
	<div class="flex flex-col flex-grow">
		<Title {...story} class="mt-2 mb-1" />
		<TimeAndUser {...story} class="mb-3" />
		<Description {...metadata} class="mb-3" />
		<ReadMore {...story} />
	</div>
</article>
