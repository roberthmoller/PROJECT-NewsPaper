import { HackerNewsAPI } from '$lib';

export const load = async ({ fetch, params: { itemId } }) => {
	const newsAPI = new HackerNewsAPI(fetch, true, false);

	return {
		item: await newsAPI.item(itemId)
	};
};