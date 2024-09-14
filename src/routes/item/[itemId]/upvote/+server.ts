export async function POST({ params: { itemId } }): Promise<Response> {
	console.log('upvoting', itemId);
	return Response.json({});
}