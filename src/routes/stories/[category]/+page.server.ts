import { HackerNewsAPI, type Item, OpenGraphApi } from '$lib';
import { error } from '@sveltejs/kit';

const PAGE_SIZE = { MIN: 1, MAX: 100 };

export const load = async ({ fetch, url, params }) => {
	const ogAPI = new OpenGraphApi(fetch);
	const newsAPI = new HackerNewsAPI(fetch, false, true, ogAPI);

	const page = Math.max(parseInt(url.searchParams.get('page') ?? '0') - 1, 0);
	const limit = Math.min(Math.max(parseInt(url.searchParams.get('limit') ?? '10'), PAGE_SIZE.MIN), PAGE_SIZE.MAX);
	const category = params.category.toLowerCase().trim();

	console.log('category', category);
	const categories: { [key: string]: Promise<Item[]> } = {
		"top": newsAPI.topStories({ page, limit }),
		"new": newsAPI.newStories({ page, limit }),
		"best": newsAPI.bestStories({ page, limit })
	};

	if (!Object.keys(categories).includes(category)) {
		error(400, { message: 'No such category was found. Available categories are' });
	}

	return {
		stories: await categories[category],
		category,
	};
};