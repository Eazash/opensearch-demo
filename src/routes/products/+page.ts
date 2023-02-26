import type { Product } from '../../types/product';
import type { PageLoad } from './$types';

export const load = (async ({ url, fetch }) => {
	const query = url.searchParams.get('q') ?? '';
	const res = await fetch(`/api/search?q=${query}`);
	return {
		products: ((await res.json()) as Product[]) || []
	};
}) satisfies PageLoad;
