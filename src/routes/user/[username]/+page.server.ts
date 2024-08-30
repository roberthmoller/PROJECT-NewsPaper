import { HackerNewsAPI } from '$lib';

export const load = async ({ fetch, params: { username } }) => {
	const newsAPI = new HackerNewsAPI(fetch, true, false);

	return {
		user: await newsAPI.user(username)
	};
};