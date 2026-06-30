<script lang="ts">
  import { onMount } from 'svelte';
  import { getStoredTheme, setTheme, type Theme } from '$lib/theme';

  const options: { value: Theme; label: string }[] = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'system', label: 'System' },
  ];

  let selected = $state<Theme>('system');

  onMount(() => {
    selected = getStoredTheme();
  });

  function selectTheme(theme: Theme) {
    selected = theme;
    setTheme(theme);
  }
</script>

<div class="flex items-center gap-1 font-arial text-xs uppercase tracking-wide">
  {#each options as option}
    <button
      type="button"
      class="px-2 py-1 rounded transition-colors {selected === option.value
        ? 'bg-panel text-foreground font-semibold'
        : 'text-subtle hover:text-muted'}"
      aria-pressed={selected === option.value}
      onclick={() => selectTheme(option.value)}
    >
      {option.label}
    </button>
  {/each}
</div>
