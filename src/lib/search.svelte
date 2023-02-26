<script lang="ts">
	export let value: string | null = '';
</script>

<form method="get" action="/products">
	<label for="q" class="sr-only mb-2 text-sm font-medium text-gray-900">
		Search products
	</label>
	<div class="flex gap-2">
		<input
			bind:value
			type="search"
			name="q"
			id="search"
			class="block grow rounded-lg border border-gray-400 bg-zinc-100 p-4 pl-10 focus:border-blue-500 focus:outline-none focus:ring-blue-400"
			placeholder="Search for products..."
		/>
		<button type="submit" class="rounded-lg bg-blue-500 px-4 py-2 text-white"
			>Search</button
		>
	</div>
</form>
