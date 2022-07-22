import path from 'path';
import { defineConfig } from 'vite';
import postcssLit from 'rollup-plugin-postcss-lit';

export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, '../src/lib.ts'),
			formats: ['es'],
			name: 'Ice'
		},
		outDir: 'lib',
		rollupOptions: {
			external: [
				'lit/decorators.js',
				'lit'
			],
			output: {
				dir: 'lib',
				entryFileNames: '[name].js',
				chunkFileNames: '[name].js',
				assetFileNames: '[name].[ext]',
				globals: {
					'lit': 'lit',
					'@lit/reactive-element': 'reactive-element',
					'lit-html': 'lit-html',
					'lit-element': 'lit-element'
				},
				preserveModules: true,
				preserveModulesRoot: 'src/'
			},           
		},
		target: 'modules'
	},
	plugins: [
		postcssLit()
	]
});		