<script lang="ts">
	import Time from 'svelte-time/Time.svelte';

	const { data } = $props();
	const { user } = data;
</script>

<article class="mx-4 py-4">
	<h1 class="text-lg font-bold font-serif">{user.id}</h1>
	<div>
		<p class="text-sm text-gray-500">
			Member since <Time timestamp={new Date(user.created * 1000)} relative />
		</p>
		<p class="text-sm text-gray-500">{user.karma} karma</p>
		<p class="text-sm text-gray-500">{user.submitted.length} stories</p>
	</div>
	<p class="mt-2 text-md">{@html user.about}</p>
</article>
