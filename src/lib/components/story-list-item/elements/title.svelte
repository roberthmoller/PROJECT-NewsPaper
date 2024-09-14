<script lang="ts">
	import type { Title } from '$lib/types';

	const { title, url, ...others}: Title & any = $props();
</script>

<div {...others}>
	<a href={url} class="hover:underline">
		<h3 class="text-xl font-serif font-bold">{title}</h3>
	</a>
</div>
