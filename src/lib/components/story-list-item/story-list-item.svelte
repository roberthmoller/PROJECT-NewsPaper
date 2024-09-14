<script lang="ts">
	import { HackerNewsApi, OpenGraphApi } from '$lib/apis';
	import type { External, Item, Metadata } from '$lib/types';
	import { onMount } from 'svelte';
	import { FullArticle, ListArticle, BriefArticle, BulletArticle } from './styles';
	const hackerNews = new HackerNewsApi(fetch);
	const openGraph = new OpenGraphApi(fetch);

	type Props = {
		storyId: number;
		style?: 'full' | 'list' | 'brief' | 'bullet';
	};
	const { storyId, style = 'full' }: Props = $props();
	let story: External<Item> = $state({ isLoading: true });
	let metadata: External<Metadata> = $state({ isLoading: true });

	onMount(async () => {
		story = await hackerNews.item(storyId);

		if (['full', 'list'].includes(style) && story.url) {
			metadata = await openGraph.get(story.url);
		} else {
			metadata = { isLoading: false };
		}
	});
</script>

{#if style === 'full'}
	<FullArticle {story} {metadata} />
{:else if style === 'list'}
	<ListArticle {story} {metadata} />
{:else if style === 'brief'}
	<BriefArticle {story} />
{:else if style === 'bullet'}
	<BulletArticle {story} />
{/if}
