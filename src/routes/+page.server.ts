import type {Item} from "$lib";

type Fetch = (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;

/**
 * [Documentation](https://github.com/HackerNews/API?tab=readme-ov-file)
 */
class HackerNewsAPI {
    private readonly cache = {
        topStories: [
            41375548, 41371106, 41376044
        ],
        item: {
            41375548: {
                "by": "jmorgan",
                "descendants": 73,
                "id": 41375548,
                "kids": [41375657, 41375667, 41375719, 41376434, 41375811, 41376371, 41375678, 41375765, 41376249, 41375704, 41376166, 41376001, 41376036, 41375701, 41376183, 41375925, 41375846, 41376004, 41376518, 41376333, 41375861, 41376132, 41375911, 41376269],
                "score": 308,
                "time": 1724813980,
                "title": "Diffusion Models Are Real-Time Game Engines",
                "type": "story",
                "url": "https://gamengen.github.io"
            } as unknown as Item,
            41371106: {
                "by": "itherseed",
                "descendants": 292,
                "id": 41371106,
                "kids": [41371554, 41372411, 41372065, 41371340, 41373252, 41372556, 41371797, 41372113, 41375017, 41374228, 41373004, 41373545, 41371265, 41375362, 41375497, 41371655, 41371331, 41371525, 41372007, 41374293, 41375005, 41373892, 41373265, 41372086, 41372585, 41371740, 41372917, 41374206, 41371647, 41373316, 41372222, 41375323, 41373956, 41371537, 41371268, 41371256, 41372638],
                "score": 970,
                "time": 1724783649,
                "title": "Microsoft donates the Mono Project to the Wine team",
                "type": "story",
                "url": "https://www.mono-project.com/"
            },
            41376044: {
                "by": "iscream26",
                "descendants": 23,
                "id": 41376044,
                "kids": [41376540, 41376352],
                "score": 42,
                "time": 1724820404,
                "title": "Are We Anti-Cheat Yet?",
                "type": "story",
                "url": "https://areweanticheatyet.com/"
            },
        }
    }

    public constructor(
        private readonly fetch: Fetch,
        private readonly useCache: boolean = false,
        private readonly endpoint: string = 'https://hacker-news.firebaseio.com'
    ) {
    }

    async topStories(): Promise<Item[]> {
        const storiesResponse = this.useCache ? this.cache.topStories : await this.fetch(`${this.endpoint}/v0/topstories.json`);
        const stories: number[] = storiesResponse instanceof Response ? await storiesResponse.json() : storiesResponse;

        return Promise.all(stories.map(id => this.item(id)));
    }

    async item(id: number): Promise<Item> {
        if (this.useCache) {
            return this.cache.item[id as keyof typeof this.cache.item] as unknown as Item;
        }
        const itemResponse = await this.fetch(`${this.endpoint}/v0/item/${id}.json`);
        return await itemResponse.json();
    }
}

export const load = async ({fetch, setHeaders}) => {
    const newsAPI = new HackerNewsAPI(fetch, true);
    return {
        topStories: await newsAPI.topStories()
    }
}