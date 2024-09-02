import { HackerNewsAPI, OpenGraphApi } from '$lib';

export const load = async ({ fetch, setHeaders }) => {
	const ogAPI = new OpenGraphApi(fetch);
	const newsAPI = new HackerNewsAPI(fetch ,true, false, ogAPI);
	return {
		stories: await newsAPI.topStories()
	};
};