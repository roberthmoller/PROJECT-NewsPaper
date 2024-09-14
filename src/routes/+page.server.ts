import { HackerNewsAPI } from '$lib/hacker-news-api';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const api = new HackerNewsAPI(fetch);
	return {
		topStories: await api.topStories(),
		bestStories: await api.bestStories(),
		newStories: await api.newStories(),
	};
};