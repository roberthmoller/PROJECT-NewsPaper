<script lang="ts">
	import Time from 'svelte-time/Time.svelte';

	const { data } = $props();
	const { user } = data;
</script>

<article class="mx-4 py-4">
	<h1 class="text-lg font-bold font-georgia">{user.id}</h1>
	<div>
		<p class="text-sm text-muted">
			Member since <Time timestamp={new Date(user.created * 1000)} relative />
		</p>
		<p class="text-sm text-muted">{user.karma} karma</p>
		<p class="text-sm text-muted">{user.submitted.length} stories</p>
	</div>
	<p class="mt-2 text-md font-georgia leading-relaxed">{@html user.about}</p>
</article>
