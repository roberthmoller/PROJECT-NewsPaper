<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children, shrink = true, ...others }: { children: Snippet } & any = $props();
</script>

<div {...others}>
	<div class="relative overflow-hidden rounded {shrink ? 'w-fit h-fit' : 'w-full h-full'}">
		<div
			class="absolute inset-0 animate-shimmer bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%]"
		></div>
		<div class="invisible">
			{@render children()}
		</div>
	</div>
</div>

<style>
	@keyframes shimmer {
		0% {
			background-position: -200% 0;
		}
		100% {
			background-position: 200% 0;
		}
	}

	.animate-shimmer {
		animation: shimmer 1.5s infinite;
	}
</style>
