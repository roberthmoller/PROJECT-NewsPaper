import { HackerNewsAPI, OpenGraphApi } from '$lib';

export const load = async ({ fetch, setHeaders }) => {
	const ogAPI = new OpenGraphApi(fetch);
	const newsAPI = new HackerNewsAPI(fetch, true, true, ogAPI);
	return {
		topStories: await newsAPI.topStories(),
		bestStories: await newsAPI.bestStories(),
		newStories: await newsAPI.newStories(),
		// bestStories: [],
		// newStories: [],
	};
};