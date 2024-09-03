<script lang="ts">
	import '../app.scss';
	import Time from 'svelte-time';
</script>

<header class="max-w-5xl mx-auto p-4">
	<small class="flex flex-col justify-center w-full h-full font-georgia">
		<Time format="dddd, MMMM DD, YYYY" />
	</small>
</header>
<div class="max-w-6xl mx-auto bg-white">
	<h1 class="font-playfair font-bold text-4xl sm:text-6xl py-12 text-center uppercase"><span class="text-5xl sm:text-7xl">H</span>ackernews</h1>
	<nav class="max-w-2xl mx-auto">
		<ul class="grid grid-cols-6 mx-auto text-center py-2 font-arial uppercase  text-xs font-semibold">
			<li><a href="/stories/new" class="hover:underline">New</a></li>
			<li><a href="/stories/top" class="hover:underline">Top</a></li>
			<li><a href="/stories/best" class="hover:underline">Best</a></li>
			<!--			&lt;!&ndash;&ndash;&gt; <span class="text-black/30">|</span>-->
			<li><a href="/ask" class="hover:underline">Ask</a></li>
			<li><a href="/show" class="hover:underline">Show</a></li>
			<li><a href="/jobs" class="hover:underline">Jobs</a></li>
		</ul>
	</nav>

	<hr class="mx-4 mb-0.5 border-[0.1px] border-black/30" />
	<hr class="mx-4 border-[0.5px] border-black/30" />

	<slot />

	<footer>

	</footer>
</div>