import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => {
	return {
		'extensionsToTreatAsEsm': ['.ts'],
		'globals': {
			'ts-jest': {
				'useESM': true
			}
		},
		'moduleNameMapper': {
			'(.+)\\.js': '$1'
		},
		'preset': 'ts-jest',
		'testEnvironment': 'node',
		'transform': {
			'node_modules/variables/.+\\.(j|t)sx?$': 'ts-jest'
		},
		'transformIgnorePatterns': [
			'node_modules/(?!variables/.*)'
		]
	};
};