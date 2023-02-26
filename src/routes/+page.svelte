<script>
	import Search from '../lib/search.svelte';
</script>

<svelte:head>
	<link
		type="application/opensearchdescription+xml"
		rel="search"
		href="/opensearch.xml"
		title="Product Catalog"
	/>
</svelte:head>

<div class="flex h-screen flex-col items-center justify-center gap-2">
	<h1 class="text-2xl">
		Welcome to my demo for the opensearch description format
	</h1>
	<p class="text-lg">
		Visit <a
			href="https://developer.mozilla.org/en-US/docs/Web/OpenSearch"
			class="text-blue-500">this MDN entry</a
		> to learn more
	</p>
	<div class="w-10/12"><Search /></div>
</div>
