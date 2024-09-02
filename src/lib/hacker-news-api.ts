import type { Item } from '$lib';
import type { Fetch } from '$lib/types';
import type { OpenGraphApi } from '$lib';


// todo: Search API: https://hn.algolia.com/api

/**
 * [Documentation](https://github.com/HackerNews/API?tab=readme-ov-file)
 */
export class HackerNewsAPI {
	private readonly cache = {
		size: 3,
		topStories: [
			41375548, 41371106, 41376044, 41371106, 41376044, 41371106, 41376044
		],
		maxItem: 41375548,
		item: {
			41375548: {
				by: 'jmorgan',
				descendants: 73,
				id: 41375548,
				kids: [41375657, 41375667, 41375719, 41376434, 41375811, 41376371, 41375678, 41375765, 41376249, 41375704, 41376166, 41376001, 41376036, 41375701, 41376183, 41375925, 41375846, 41376004, 41376518, 41376333, 41375861, 41376132, 41375911, 41376269],
				score: 308,
				time: 1724813980,
				title: 'Diffusion Models Are Real-Time Game Engines',
				type: 'story',
				url: 'https://gamengen.github.io',
				metadata: {
					image: '/example1.jpg'
				}
			} as unknown as Item,
			41371106: {
				'by': 'itherseed',
				'descendants': 412,
				'id': 41371106,
				'kids': [41371554, 41372411, 41372065, 41371340, 41379681, 41373252, 41372556, 41380579, 41371797, 41372113, 41374228, 41373545, 41375017, 41373004, 41375362, 41378313, 41371265, 41378541, 41378689, 41375497, 41371655, 41371331, 41371525, 41372007, 41379831, 41374293, 41373265, 41373892, 41372086, 41371740, 41375005, 41372585, 41372917, 41371647, 41374206, 41373316, 41372222, 41375323, 41373956, 41371537, 41371268, 41371256, 41372638],
				'score': 1258,
				'time': 1724783649,
				'title': 'Microsoft donates the Mono Project to the Wine team',
				'type': 'story',
				'url': 'https://www.mono-project.com/'
			},
			41376044: {
				'by': 'iscream26',
				'descendants': 23,
				'id': 41376044,
				'kids': [41376540, 41376352],
				'score': 42,
				'time': 1724820404,
				'title': 'Are We Anti-Cheat Yet?',
				'type': 'story',
				'url': 'https://areweanticheatyet.com/'
			}
		},
		user: {
			jl: {
				'about': 'This is a test',
				'created': 1173923446,
				'id': 'jl',
				'karma': 2937,
				'submitted': [8265435, 8168423, 8090946, 8090326, 7699907, 7637962, 7596179, 7596163, 7594569, 7562135, 7562111, 7494708, 7494171, 7488093, 7444860, 7327817, 7280290, 7278694, 7097557, 7097546, 7097254, 7052857, 7039484, 6987273, 6649999, 6649706, 6629560, 6609127, 6327951, 6225810, 6111999, 5580079, 5112008, 4907948, 4901821, 4700469, 4678919, 3779193, 3711380, 3701405, 3627981, 3473004, 3473000, 3457006, 3422158, 3136701, 2943046, 2794646, 2482737, 2425640, 2411925, 2408077, 2407992, 2407940, 2278689, 2220295, 2144918, 2144852, 1875323, 1875295, 1857397, 1839737, 1809010, 1788048, 1780681, 1721745, 1676227, 1654023, 1651449, 1641019, 1631985, 1618759, 1522978, 1499641, 1441290, 1440993, 1436440, 1430510, 1430208, 1385525, 1384917, 1370453, 1346118, 1309968, 1305415, 1305037, 1276771, 1270981, 1233287, 1211456, 1210688, 1210682, 1194189, 1193914, 1191653, 1190766, 1190319, 1189925, 1188455, 1188177, 1185884, 1165649, 1164314, 1160048, 1159156, 1158865, 1150900, 1115326, 933897, 924482, 923918, 922804, 922280, 922168, 920332, 919803, 917871, 912867, 910426, 902506, 891171, 807902, 806254, 796618, 786286, 764412, 764325, 642566, 642564, 587821, 575744, 547504, 532055, 521067, 492164, 491979, 383935, 383933, 383930, 383927, 375462, 263479, 258389, 250751, 245140, 243472, 237445, 229393, 226797, 225536, 225483, 225426, 221084, 213940, 213342, 211238, 210099, 210007, 209913, 209908, 209904, 209903, 170904, 165850, 161566, 158388, 158305, 158294, 156235, 151097, 148566, 146948, 136968, 134656, 133455, 129765, 126740, 122101, 122100, 120867, 120492, 115999, 114492, 114304, 111730, 110980, 110451, 108420, 107165, 105150, 104735, 103188, 103187, 99902, 99282, 99122, 98972, 98417, 98416, 98231, 96007, 96005, 95623, 95487, 95475, 95471, 95467, 95326, 95322, 94952, 94681, 94679, 94678, 94420, 94419, 94393, 94149, 94008, 93490, 93489, 92944, 92247, 91713, 90162, 90091, 89844, 89678, 89498, 86953, 86109, 85244, 85195, 85194, 85193, 85192, 84955, 84629, 83902, 82918, 76393, 68677, 61565, 60542, 47745, 47744, 41098, 39153, 38678, 37741, 33469, 12897, 6746, 5252, 4752, 4586, 4289]
			}
		}
	};

	private readonly DEFAULT_PAGINATION = {
		limit: 10,
		page: 0
	};

	public constructor(
		private readonly fetch: Fetch,
		private readonly useCache: boolean = false,
		private readonly useOpenGraph: boolean = false,
		private readonly openGraph: OpenGraphApi,
		private readonly endpoint: string = 'https://hacker-news.firebaseio.com',
	) {
	}


	async topStories({ limit, page } = this.DEFAULT_PAGINATION): Promise<Item[]> {
		const storiesResponse = this.useCache ? this.cache.topStories : await this.fetch(`${this.endpoint}/v0/topstories.json`);
		const stories: number[] = storiesResponse instanceof Response ? await storiesResponse.json() : storiesResponse;
		const pageStart = limit * page;
		const pageEnd = pageStart + limit;
		return Promise.all(stories.slice(pageStart, pageEnd).map(id => this.item(id)));
	}


	async newStories({ limit, page } = this.DEFAULT_PAGINATION): Promise<Item[]> {
		const storiesResponse = this.useCache ? this.cache.topStories : await this.fetch(`${this.endpoint}/v0/newstories.json`);
		const stories: number[] = storiesResponse instanceof Response ? await storiesResponse.json() : storiesResponse;
		const pageStart = limit * page;
		const pageEnd = pageStart + limit;
		return Promise.all(stories.slice(pageStart, pageEnd).map(id => this.item(id)));
	}

	async bestStories({ limit, page } = this.DEFAULT_PAGINATION): Promise<Item[]> {
		const storiesResponse = this.useCache ? this.cache.topStories : await this.fetch(`${this.endpoint}/v0/beststories.json`);
		const stories: number[] = storiesResponse instanceof Response ? await storiesResponse.json() : storiesResponse;
		const pageStart = limit * page;
		const pageEnd = pageStart + limit;
		return Promise.all(stories.slice(pageStart, pageEnd).map(id => this.item(id)));
	}

	async askStories({ limit, page } = this.DEFAULT_PAGINATION): Promise<Item[]> {
		const storiesResponse = this.useCache ? this.cache.topStories : await this.fetch(`${this.endpoint}/v0/askstories.json`);
		const stories: number[] = storiesResponse instanceof Response ? await storiesResponse.json() : storiesResponse;
		const pageStart = limit * page;
		const pageEnd = pageStart + limit;
		return Promise.all(stories.slice(pageStart, pageEnd).map(id => this.item(id)));
	}

	async showStories({ limit, page } = this.DEFAULT_PAGINATION): Promise<Item[]> {
		const storiesResponse = this.useCache ? this.cache.topStories : await this.fetch(`${this.endpoint}/v0/showstories.json`);
		const stories: number[] = storiesResponse instanceof Response ? await storiesResponse.json() : storiesResponse;
		const pageStart = limit * page;
		const pageEnd = pageStart + limit;
		return Promise.all(stories.slice(pageStart, pageEnd).map(id => this.item(id)));
	}

	async jobStories({ limit, page } = this.DEFAULT_PAGINATION): Promise<Item[]> {
		const storiesResponse = this.useCache ? this.cache.topStories : await this.fetch(`${this.endpoint}/v0/jobstories.json`);
		const stories: number[] = storiesResponse instanceof Response ? await storiesResponse.json() : storiesResponse;
		const pageStart = limit * page;
		const pageEnd = pageStart + limit;
		return Promise.all(stories.slice(pageStart, pageEnd).map(id => this.item(id)));
	}

	async item(id: number): Promise<Item> {
		if (this.useCache) {
			return this.cache.item[id as keyof typeof this.cache.item] as unknown as Item;
		}
		const itemResponse = await this.fetch(`${this.endpoint}/v0/item/${id}.json`);
		const itemData = await itemResponse.json();
		// todo: Get OG from url body
		if (this.useOpenGraph) {
			itemData.metadata = await this.openGraph.get(itemData.url);
		}
		return itemData;
	}

	async user(username: string): Promise<Item> {
		if (this.useCache) {
			return this.cache.user[username as keyof typeof this.cache.user] as unknown as Item;
		}
		const itemResponse = await this.fetch(`${this.endpoint}/v0/user/${username}.json`);
		return await itemResponse.json();
	}

	async maxItem(): Promise<Item> {
		if (this.useCache) {
			return this.cache.item[this.cache.maxItem] as unknown as Item;
		}
		const itemResponse = await this.fetch(`${this.endpoint}/v0/item/maxitem.json`);
		let maxItemId = await itemResponse.json();
		return this.item(maxItemId);
	}
}
