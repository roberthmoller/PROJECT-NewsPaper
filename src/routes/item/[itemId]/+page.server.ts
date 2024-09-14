import { HackerNewsApi } from '$lib';

export const load = async ({ fetch, params: { itemId } }) => {
	const newsAPI = new HackerNewsApi(fetch);

	return {
		item: await newsAPI.item(parseInt(itemId))
	};
};