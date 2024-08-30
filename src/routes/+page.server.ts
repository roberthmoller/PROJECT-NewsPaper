import { HackerNewsAPI } from '$lib';

export const load = async ({ fetch, setHeaders }) => {
	const newsAPI = new HackerNewsAPI(fetch, true, false);
	return {
		topStories: await newsAPI.topStories(),
		bestStories: await newsAPI.bestStories(),
		newStories: await newsAPI.newStories(),
	};
};