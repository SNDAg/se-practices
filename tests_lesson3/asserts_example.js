const assert = require('node:assert');
const test = require('node:test');

test('Examples of different assertions', (t) => {
    
    // 1. assert.strictEqual
    // Check exact match (===) for simple types like numbers or strings
    assert.strictEqual(4, 2 + 2);
    assert.strictEqual('hello', 'hel' + 'lo');


    // 2. assert.notStrictEqual
    // Make sure they are not equal. Good to check if something changed
    assert.notStrictEqual(5, 2 + 2);
    assert.notStrictEqual('5', 5);


    // 3. assert.deepStrictEqual
    // Check if objects or arrays have the exact same inside content
    const objA = { x: 1, y: [2, 3] };
    const objB = { x: 1, y: [2, 3] };
    
    assert.deepStrictEqual(objA, objB);


    // 4. assert.notDeepStrictEqual
    // Make sure objects/arrays are different. Good for updates
    assert.notDeepStrictEqual({ a: 1 }, { a: 2 });


    // 5. assert.ok
    // Check if the value is truthy (not null, not empty, exists)
    const isReady = true;
    const name = 'יוסי';
    assert.ok(isReady);
    assert.ok(name);


    // 6. assert.fail
    // Kill the test immediately. Put it where code should never go
    // assert.fail('Should not reach here');


    // 7. assert.throws
    // Expect the function to throw an error. Good for testing bad flows
    const throwErrorFunc = () => { throw new Error('Something went wrong'); };
    assert.throws(throwErrorFunc, Error);


    // 8. assert.doesNotThrow
    // Make sure the function runs smooth with zero errors
    const safeFunc = () => 10 / 2;
    assert.doesNotThrow(safeFunc);
});