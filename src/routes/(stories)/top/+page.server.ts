import { HackerNewsAPI } from '$lib';

export const load = async ({ fetch, setHeaders }) => {
	const newsAPI = new HackerNewsAPI(fetch, true, false);
	return {
		stories: await newsAPI.topStories(),
	};
};