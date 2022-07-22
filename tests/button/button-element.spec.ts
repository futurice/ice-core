import IceButtonElement from '../../src/components/button/button-element';

describe('Tests IceButtonElement', () => {
	test('IceButtonElement can be created', async () => {
		const element = new IceButtonElement();

		expect(element).toBeDefined();
	});
});