<script lang="ts">
	import type { Item, External, Metadata } from '$lib/types';
	import { Description, ReadMore, TimeAndUser,Title, Image , ScoreAndComments} from '../elements';

	const {
		story,
		metadata
	}: {
		story: External<Item>;
		metadata: External<Metadata>;
	} = $props();
</script>

<article class="flex flex-col items-stretch my-2">
	<Image {...metadata} class="max-h-[20em] w-full object-cover"/>
	<div class="flex flex-col flex-grow">
		<Title {...story} class="mt-2 mb-1" />
		<TimeAndUser {...story} class="mb-3" />
		<Description {...metadata} class="mb-3" />
		<div class="flex flex-row justify-between">
			<ReadMore {...story} />
			<ScoreAndComments {...story} class="text-right text-sm"/>
		</div>
	</div>
</article>
