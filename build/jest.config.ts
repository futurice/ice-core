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
			'\\.(css|less)$': '<rootDir>/../tests/__mocks__/css-mock.ts',
			'^(\\.{1,2}/.*)\\.js$': '$1',
		},
		'preset': 'ts-jest',
		'testEnvironment': 'jsdom',
		'transform': {
			'node_modules/variables/.+\\.(j|t)sx?$': 'ts-jest'
		},
		'transformIgnorePatterns': [
			'node_modules/(?!variables/.*)'
		]
	};
};