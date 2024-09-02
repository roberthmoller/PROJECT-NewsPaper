import { HackerNewsAPI, OpenGraphApi } from '$lib';

export const load = async ({ fetch, params: { username } }) => {
	const ogAPI = new OpenGraphApi(fetch);
	const newsAPI = new HackerNewsAPI(fetch, false, false, ogAPI);

	return {
		user: await newsAPI.user(username)
	};
};