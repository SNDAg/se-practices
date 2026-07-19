const assert = require('node:assert');
const { test } = require('node:test');
const { buggyFunction, safeDivide } = require('./buggy_code');

test('Testing Exceptions', async (t) => {

    // 1. Testing function without parameters (Exactly like the slide)
    // Note: Pass the function reference 'buggyFunction', do NOT call it with ()
    await t.test('catching an error from buggyFunction', () => {
        assert.throws(buggyFunction, Error);
    });

    // 2. Testing function WITH parameters (Bonus useful flow)
    // Note: Wrap it inside an anonymous arrow function () => ...
    await t.test('catching divide by zero error', () => {
        assert.throws(
            () => safeDivide(10, 0), 
            Error
        );
    });

});