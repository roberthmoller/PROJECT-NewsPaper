import { HackerNewsApi, OpenGraphApi } from '$lib';

export const load = async ({ fetch, params: { itemId } }) => {
	const newsApi = new HackerNewsApi(fetch);
	const openGraphApi = new OpenGraphApi(fetch, { shouldProxy: false });

	const story = await newsApi.item(parseInt(itemId))
	const metadata = await openGraphApi.get(story.url);
	return { story, metadata };
};