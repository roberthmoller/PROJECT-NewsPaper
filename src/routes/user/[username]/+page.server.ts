import { HackerNewsAPI, OpenGraphApi } from '$lib';

export const load = async ({ fetch, params: { username } }) => {
	const newsAPI = new HackerNewsAPI(fetch);

	return {
		user: await newsAPI.user(username)
	};
};