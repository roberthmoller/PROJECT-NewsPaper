import { parseHTML } from 'linkedom';
import type { Fetch } from '$lib/types';

export class OpenGraphApi {
	private readonly RELATIVE_URL_REGEXP = new RegExp('^(?!www\\.|(?:http|ftp)s?://|[A-Za-z]:\\\\|//).*');

	public constructor(
		private readonly fetch: Fetch
	) {
	}

	async get(url: string) {
		const metadata: { [key: string]: string } = {};
		if (url == undefined) return metadata;
		const request = await this.fetch(url);
		if (!request.ok) return metadata;
		const html = await request.text();
		const { document } = parseHTML(html);
		const metaTags = document.head.querySelectorAll('meta[property^="og:"]');
		for (const item of metaTags) {
			const property = item.getAttribute('property');
			const content = item.getAttribute('content');

			if (property?.startsWith('og:') && content != null && this.filter(property, content)) {
				metadata[property.substring(3)] = this.transform(property, content, url);
			}
		}
		return metadata;
	}

	private transform(property: string, content: string, url: string) {
		switch (property) {
			case 'og:image':
				if (content.startsWith('/') || this.RELATIVE_URL_REGEXP.test(content)) {
					return url + content;
				}
		}
		return content;
	}

	private filter(property: string, content: string) {
		switch (property) {
			case 'og:image':
				if (content.includes('://localhost')) return false;
		}
		return true;
	}
}