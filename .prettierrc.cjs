module.exports = {
	useTabs: true,
	singleQuote: true,
	trailingComma: 'none',
	printWidth: 100,
	plugins: [require('prettier-plugin-svelte'), require('prettier-plugin-tailwindcss')],
	pluginSearchDirs: false,
	tailwindConfig: './tailwind.config.cjs',
	overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }]
};
