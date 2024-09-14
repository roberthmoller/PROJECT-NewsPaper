import { HackerNewsAPI } from '$lib';

export const load = async ({ fetch, params: { itemId } }) => {
	const newsAPI = new HackerNewsAPI(fetch);

	return {
		item: await newsAPI.item(parseInt(itemId))
	};
};