<script lang="ts">
	import { CommentsList, Shimmer, StoryListElements } from '$lib/components';
	import 'prismjs/themes/prism.min.css';
	import * as Prism from 'prismjs';
	import { onMount } from 'svelte';
	import type { External } from '$lib/types';
	import * as showdown from 'showdown';
	const { data } = $props();
	const { story, metadata } = data;
	let tldr: External<{ summary: string }> = $state({ isLoading: false });

	const htmlToMarkdown = new showdown.Converter()

	onMount(() => {
		Prism.highlightAll();
	});

	async function loadSummary() {
		if (tldr.summary) return;

		tldr = { isLoading: true };
		const response = await fetch(`/item/${story.id}/tldr`)
		tldr = await response.json();
	}
</script>

<article class="mx-4 py-4">
	<StoryListElements.Title {...story} class="mb-1" />
	<StoryListElements.TimeAndUser {...story} class="mb-3" />
	{#if story.text}
		<p class="mb-3 prose">{@html story.text}</p>
	{/if}
	{#if story.url}
		<StoryListElements.ReadMore {...story} class="mb-3" />

		<section class="mb-3 bg-black/5 p-4 rounded-md flex flex-col gap-4">
			<details>
				<summary class="text-xs text-black/50 cursor-pointer hover:underline" onclick={loadSummary}
					>View article summary</summary
				>
				<blockquote class="mt-2 bg-black/5 p-4 rounded-md">
					{#if tldr.isLoading}
						<p>Generating summary...</p>
						<Shimmer class="my-2">
							<p>Generating text to summarise the article...</p>
						</Shimmer>
					{:else if tldr.summary}
					<div class="prose">
						{@html htmlToMarkdown.makeHtml(tldr.summary)}
					</div>
					{/if}
				</blockquote>
			</details>
			<sub class="text-xs mt-auto whitespace-nowrap overflow-hidden text-ellipsis block font-bold">
				<span class="text-black/50">TL;DR from </span>
				<a
					href="https://console.groq.com/"
					target="_blank"
					class="text-black hover:underline"
					title="TL;DR">Groq</a
				>
			</sub>
		</section>
	{/if}

	{#if metadata.description}
		<section class="mb-3 bg-black/5 p-4 rounded-md grid grid-cols-12 gap-4">
			<div class="{metadata.image ? 'col-span-8' : 'col-span-12'} flex flex-col gap-1">
				{#if metadata.title}
					<p class="text-sm text-black/50">
						<a href={story.url} target="_blank" class="hover:underline" title={story.url}
							>{metadata.title}</a
						>
					</p>
				{/if}
				<StoryListElements.Description {...metadata} />
				<details class="mt-2">
					<summary class="text-xs text-black/50 cursor-pointer hover:underline"
						>View raw metadata</summary
					>
					<pre class="mt-1 text-xs !bg-black/5 rounded-md overflow-x-auto"><code
							class="language-javascript !text-xs">{JSON.stringify(metadata, null, 2)}</code
						></pre>
				</details>
				<sub
					class="text-xs mt-auto whitespace-nowrap overflow-hidden text-ellipsis block font-bold"
				>
					<span class="text-black/50">OpenGraph data from</span>
					<a href={story.url} target="_blank" class="hover:underline" title={story.url}
						>{story.url}</a
					>
				</sub>
			</div>
			{#if metadata.image}
				<StoryListElements.Image {...metadata} class="col-span-4" />
			{/if}
		</section>
	{/if}
</article>

<section class="mx-4">
	<h1 class="text-lg font-bold font-serif">Comments</h1>
	<div class="flex flex-col gap-4">
		<CommentsList kids={story.kids} />
	</div>
</section>

<style>
	.token.operator {
		background-color: transparent !important;
	}
</style>
