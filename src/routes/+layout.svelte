<script lang="ts">
	import '../app.scss';
</script>


<a href="/">
	<h1 class="font-dm text-4xl sm:text-6xl py-4 text-center ">Y Combinator News</h1>
</a>
<nav class="max-w-2xl mx-auto">
	<ul class="grid grid-cols-7 mx-auto text-center py-2 font-serif">
		<li><a href="/new" class="hover:underline">New</a></li>
		<li><a href="/top" class="hover:underline">Top</a></li>
		<li><a href="/best" class="hover:underline">Best</a></li>
		<!----> <span class="text-black/30">|</span>
		<li><a href="/ask" class="hover:underline">Ask</a></li>
		<li><a href="/show" class="hover:underline">Show</a></li>
		<li><a href="/jobs" class="hover:underline">Jobs</a></li>
	</ul>
</nav>

<hr class="mx-4 mb-0.5 border-[0.25px] border-black" />
<hr class="mx-4 border-[0.5px] border-black" />

<slot />

<footer>

</footer>
