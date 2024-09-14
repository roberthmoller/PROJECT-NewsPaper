import { HackerNewsApi, type Item, OpenGraphApi } from '$lib';
import { error, redirect } from '@sveltejs/kit';
import type { RouteParams } from './$types';
import { goto } from '$app/navigation';

const PAGE_SIZE = { MIN: 1, MAX: 100 };
const DEFAULT_LIMIT = 10;

export const load = async ({ fetch, url, params }) => {
	const newsApi = new HackerNewsApi(fetch);
	const { page, limit, category } = parseStoriesParams({ url, params });

	console.log('category', category, 'page', page + 1);
	switch (category) {
		case 'top':
			return { stories: await newsApi.topStories({ page, limit }), category };
		case 'new':
			return { stories: await newsApi.newStories({ page, limit }), category };
		case 'best':
			return { stories: await newsApi.bestStories({ page, limit }), category };
		default:
			error(400, { message: 'No such category was found. Available categories are' });
	}
};

function parseStoriesParams(request: { url: URL, params: RouteParams }) {
	const { url, params } = request;
	const page = Math.max(parseInt(url.searchParams.get('page') ?? '1') - 1, 1);
	const limit = Math.min(Math.max(parseInt(url.searchParams.get('limit') ?? '10'), PAGE_SIZE.MIN), PAGE_SIZE.MAX);
	const category = params.category.toLowerCase().trim();
	return { page, limit, category };
}

export const actions = {
	next({ url, params }) {
		const { page, limit, category } = parseStoriesParams({ url, params });
		console.log('got', page + 1 , url.searchParams);
		const pageParam = page + 2 == 0 ? undefined : `page=${page + 2}`;
		const limitParam = limit == DEFAULT_LIMIT ? undefined : `limit=${limit}`;
		const queryParams = [pageParam, limitParam].filter(param => param != undefined).join('&');
		console.log('going to ', `/stories/${category}?${queryParams}`);
		redirect(303,`/stories/${category}?${queryParams}`);
	},
	previous({ url, params }) {
		const { page, limit, category } = parseStoriesParams({ url, params });

		if (page == 0) return;

		const pageParam = page == 0 ? undefined : `page=${page}`;
		const limitParam = limit == DEFAULT_LIMIT ? undefined : `limit=${limit}`;
		const queryParams = [pageParam, limitParam].filter(param => param != undefined).join('&');
		redirect(303,`/stories/${category}?${queryParams}`);
	}
};