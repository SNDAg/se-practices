const assert = require('node:assert');
const { test } = require('node:test');
const { buggyFunction, safeDivide } = require('./buggy_code');

test('Testing Exceptions', async (t) => {

//general exaple of assert throwing exception
    await t.test('catching an error from buggyFunction', () => {
        assert.throws(buggyFunction, Error);
    });

//test to make sure that the real code thrws exception when dividing by zero
    await t.test('catching divide by zero error', () => {
        assert.throws(() => safeDivide(10, 0), Error, "Cannot divide by zero");
    });

});