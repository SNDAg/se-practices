const assert = require('node:assert');
const { test, mock } = require('node:test');
const objectToTest = require('./objectToTest');

test('testing with a mock', (t) => {
    // 1. Setup fake data for the mock
    const fakeInput = ['aaa', 'bbb', 'cccc'];
    // proxy is now responsible for "fetch" method calls. all the calls will go to proxy.
    const proxy = mock.method(objectToTest, 'fetch');
    // 3. Force 'fetch' to return our fake data instead of real data
    proxy.mock.mockImplementation(() => fakeInput);

    // 4. Run the function that we want to test
    const result = objectToTest.decorateFetchedList();
    
    // 5. Assert the result matches the mocked behavior
    assert.strictEqual(result[0], '*aaa*');
    assert.strictEqual(result[1], '*bbb*');
    assert.strictEqual(result[2], '*cccc*');
});