import type { Rating } from './rating';

export type Product = {
	id: number;
	category: string;
	description: string;
	image: string;
	price: number;
	title: string;
	rating: Rating;
};
