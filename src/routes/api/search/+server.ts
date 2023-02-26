import { json } from '@sveltejs/kit';
import type { Product } from '../../../types/product';
import type { RequestHandler } from './$types';

export const GET = (async ({ fetch, url }) => {
	const query = url.searchParams.get('q') ?? '';
	const products = await fetch('https://fakestoreapi.com/products')
		.then((res) => res.json() as Promise<Product[]>)
		.then((products) => {
			return products.filter((product) =>
				product.title.toLowerCase().includes(query.toLowerCase())
			);
		});
	return json(products, {
		headers: {
			'cache-control': 'public, max-age=1200'
		}
	});
}) satisfies RequestHandler;
