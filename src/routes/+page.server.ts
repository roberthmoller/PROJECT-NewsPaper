import { HackerNewsApi } from '$lib/apis';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const api = new HackerNewsApi(fetch);
	return {
		topStories: await api.topStories(),
		bestStories: await api.bestStories(),
		newStories: await api.newStories(),
	};
};