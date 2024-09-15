<script>

	import { SkeletonLoader,  StoryListStyles } from "$lib/components";

    const loadingStory = {isLoading: true};
    const loadedStory = {
        title: "Hello World",
        url: "https://picsum.photos/200/300",
        time: 13456789,
        by: "John Doe",
    };

    const loadingMetadata = {isLoading: true};
    const loadedMetadata = {
        description: "This is a test",
        image: "https://picsum.photos/1000/500",
        alt: "This is a test",
    };

</script>


<section class="mx-2 py-2">
    <StoryListStyles.FullArticle story={loadedStory} metadata={loadedMetadata} />
    <hr />
    <StoryListStyles.FullArticle story={loadingStory} metadata={loadingMetadata} />
    <hr />
    <StoryListStyles.ListArticle story={loadedStory} metadata={loadedMetadata} />
    <hr />
    <StoryListStyles.ListArticle story={loadingStory} metadata={loadingMetadata} />
    <!-- <SkeletonLoader width="100%" height="100px" /> -->
</section>