module.exports = {
	useTabs: true,
	singleQuote: true,
	trailingComma: 'none',
	printWidth: 80,
	plugins: [require('prettier-plugin-svelte'), require('prettier-plugin-tailwindcss')],
	pluginSearchDirs: false,
	tailwindConfig: './tailwind.config.cjs',
	overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }]
};
