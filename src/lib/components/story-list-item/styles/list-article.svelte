<script lang="ts">
	import type { External, Item, Metadata } from '$lib/types';
	import { Description, Image, ReadMore, ScoreAndComments, TimeAndUser, Title } from '../elements';
	type Props = { story: External<Item>; metadata: External<Metadata> };
	const { story, metadata }: Props = $props();
</script>

<article class="flex flex-col">
	<div class="grid grid-cols-12 gap-4">
        <div class="col-span-8 flex flex-col flex-grow ">
            <Title {...story} class="mt-2 mb-1" />
            <TimeAndUser {...story} />
            <Description {...metadata} class="mt-3"/>
        </div>
    
        <Image class="col-span-4 max-h-[20em] w-full h-full object-cover" {...metadata} />
    </div>

    <div class="flex flex-row justify-between mt-3">
        <ReadMore {...story} />
        <ScoreAndComments {...story} class="text-right text-sm" />
    </div>
</article>
