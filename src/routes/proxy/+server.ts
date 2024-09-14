import { error } from '@sveltejs/kit';

export async function GET({ url: { searchParams }, fetch }) {
	const url = searchParams.get('url') ?? error(400);

	try {
		console.log('proxying to', url);
		const response = await fetch(new URL(url));
		return new Response(
			await response.text(), {
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