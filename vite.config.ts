import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';
import { genOpensearchDescription } from './src/plugins/genOpensearch';
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');
	return {
		plugins: [
			sveltekit(),
			genOpensearchDescription({
				baseUrl: `https://${env.VITE_BASE_URL}`,
				fileName: 'opensearch.xml',
				shortName: 'Product Catalog',
				longName: 'Demo Product Catalog with Opensearch spec',
				description:
					'A Product Catalog demo built with sveltekit to showcase the Opensearch Spec',
				searchPath: 'products',
				queryParam: 'q',
				iconFile: 'favicon.png'
			})
		]
	};
});
