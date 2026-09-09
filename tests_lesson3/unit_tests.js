const assert = require('node:assert');
const test = require('node:test');

test('my first test', (t) => {
    assert.strictEqual(4, 2+2, "Expected 2 + 2 to equal 4");
});