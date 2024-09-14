import { OpenGraphApi } from '$lib';
import { error, json } from '@sveltejs/kit';

export async function GET({ url: { searchParams }, fetch }) {
	const openGraphApi = new OpenGraphApi(fetch, { shouldProxy: false })
	const url = searchParams.get('url') ?? error(400);

	try {
		console.log('proxying to', url);
		const metadata = await openGraphApi.get(url);
		return new Response(JSON.stringify(metadata), {
				status: 200,
				headers: { 'Content-Type': 'application/json' }
			}
		);
	} catch (error) {
		console.error('failed to proxy to', url, error);
		return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
}