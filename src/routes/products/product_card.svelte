<script lang="ts">
	import type { Product } from '../../types/product';

	export let product: Product;
</script>

<div
	class="grid max-w-xl auto-cols-auto grid-flow-row auto-rows-min grid-cols-3 place-items-start gap-2 rounded-lg border border-gray-200 py-2 px-4"
>
	<div class="col-span-2">
		<p class="w-full border-b font-bold text-blue-400">
			<a href={`/products/${product.id}`}>{product.title}</a>
		</p>
	</div>
	<div class="col-span-2 col-start-1"><p>{product.description}</p></div>
	<div class="col-start-3 row-span-2 row-start-1 place-self-center">
		<img src={product.image} class="h-48" alt={product.title} />
	</div>
</div>
