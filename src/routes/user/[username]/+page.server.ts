import { HackerNewsApi, OpenGraphApi } from '$lib';

export const load = async ({ fetch, params: { username } }) => {
	const newsAPI = new HackerNewsApi(fetch);

	return {
		user: await newsAPI.user(username)
	};
};