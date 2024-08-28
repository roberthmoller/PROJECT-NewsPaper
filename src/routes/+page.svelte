<script>
    const {data} = $props();
    const {topStories} = data;
</script>
<h1 class="font-serif">The Newspaper</h1>
<code>
    <ul>

        {#each topStories as story}
            <li>
                <a href="{story.url}">
                    <p>{story.title}</p>
                    <sup>by {story.by}</sup>
                    <small>{story.text ?? '-'}</small>
                    {story.score}
                </a>
            </li>
        {/each}
    </ul>
</code>