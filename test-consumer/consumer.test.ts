import assert from 'node:assert/strict';
import test from 'node:test';
import { Image } from '@node-3d/image';

test('constructs a packed native image', () => {
	const image = new Image();
	try {
		assert.equal(image.width, 0);
		assert.equal(image.height, 0);
		assert.equal(image.isDestroyed, false);
	} finally {
		image.destroy();
	}
});
