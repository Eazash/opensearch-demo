<script lang="ts">
	import { page } from '$app/stores';
	import Search from '../../lib/search.svelte';
	import type { PageData } from './$types';
	import ProductCard from './product_card.svelte';

	export let data: PageData;
	$: query = $page.url.searchParams.get('q');
	$: console.log(data.products);
</script>

<div class="flex flex-col items-center justify-center gap-4 py-4">
	<div class="w-10/12">
		<Search value={query} />
	</div>
	{#if data.products.length === 0}
		<p class="text-gray-500">No products found matching the search input</p>
	{:else}
		<div class="flex flex-col items-center gap-2">
			{#each data.products as product (product.id)}
				<ProductCard {product} />
			{/each}
		</div>
	{/if}
</div>
