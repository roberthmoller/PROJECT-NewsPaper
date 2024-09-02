import { HackerNewsAPI, OpenGraphApi } from '$lib';

export const load = async ({ fetch, params: { itemId } }) => {
	const ogAPI = new OpenGraphApi(fetch);
	const newsAPI = new HackerNewsAPI(fetch ,true, false, ogAPI);

	return {
		item: await newsAPI.item(itemId)
	};
};