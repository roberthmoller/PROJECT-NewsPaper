<!-- Inspo: https://preview.themeforest.net/item/the-newspaper-news-magazine-editorial-wordpress-theme/full_screen_preview/20706986?_ga=2.260276040.47790824.1724824750-1272869346.1724824750-->
<script>
	import Time from 'svelte-time';
	import StoryListItem from '$lib/components/story-list-item/story-list-item.svelte';

	const { data } = $props();
	const { topStories, bestStories, newStories } = data;
</script>


<main class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 p-4 gap-8">
	<!--	-->
	<section id="new-stories" class="order-3 lg:order-1 col-span-1 sm:col-span-3 lg:col-span-1">
		<h2 class="italic text-2xl font-playfair font-semibold py-2">New Stories</h2>
		<hr>
		<small>
			<ul class="list-disc font-serif px-6 py-4 gap-2 flex flex-col">
				{#each newStories as storyId}
					<li>
						<StoryListItem {storyId} style="bullet"/>
					</li>
				{/each}
			</ul>
		</small>
		<a href="/new" class="hover:underline">
			<sub>MORE STORIES</sub>
		</a>
	</section>
	<!--	-->
	<section id="top-stories" class="order-1 lg:order-2 -col-span-1 sm:col-span-2 lg:col-span-3">
		<h2 class="italic text-2xl font-playfair font-semibold py-2">Top Stories</h2>
		<hr>
		<ul class="py-4">
			{#each topStories as storyId}
				<li>
					<StoryListItem {storyId} style='full'/>
				</li>
				<li><hr></li>
			{/each}
		</ul>
		<a href="/top?page=2" class="hover:underline">
			<sub>MORE STORIES</sub>
		</a>
	</section>
	<!--	-->
	<section id="best-stories" class="col-span-1 lg:col-span-2 order-2 lg:order-3">
		<h2 class="italic text-2xl font-playfair font-semibold py-2">Best Stories</h2>
		<hr>
		<!--todo: Carousel of between best, jobs, show -->
		<ol>
			{#each bestStories as storyId, index}
				<li>
					<StoryListItem {storyId} rank={index + 1} style='brief' />
				</li>
			{/each}
		</ol>
		<a href="/best?page=2" class="hover:underline">
			<sub>MORE STORIES</sub>
		</a>
	</section>
</main>
