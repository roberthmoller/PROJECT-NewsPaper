<script lang="ts">
    import { StoryListItem } from '$lib/components';
    import Article from '$lib/components/story-list-item/styles/full-article.svelte';
</script>

<!-- <StoryListItem storyId={1} /> -->
<Article
    story={{
        title: 'Hello',
        url: 'https://www.google.com',
        time: 1234567890,
        type: 'story',
        by: 'John Doe',
        score: 24,
        descendants: 140,
        id: 1,
        isLoaded: true,
    }}

    metadata={{
        image: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
        description: 'This is a test description',
        alt: 'This is a test alt',
        isLoaded: true,
    }}

    rank={1}
    isBrief={false}
    isRow={false}
/>
