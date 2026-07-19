const assert = require('node:assert');
const test = require('node:test');
const { Calculator } = require('./calculator'); 

class TestCalculator {
    constructor() {
        this.calc = new Calculator();
    }

    run() {
        test('Calculator Class Tests', async (t) => {
            
            await t.test('add() - should correctly add two numbers', () => {
                assert.strictEqual(this.calc.add(2, 3), 5);
                assert.strictEqual(this.calc.add(-1, 1), 0);
            });

            await t.test('sub() - should correctly subtract two numbers', () => {
                assert.strictEqual(this.calc.sub(5, 3), 2);
                assert.strictEqual(this.calc.sub(2, 5), -3);
            });

            await t.test('mul() - should correctly multiply two numbers', () => {
                assert.strictEqual(this.calc.mul(3, 4), 12);
                assert.strictEqual(this.calc.mul(5, 0), 0);
            });

            await t.test('div() - should correctly divide two numbers', () => {
                assert.strictEqual(this.calc.div(10, 2), 5);
                assert.strictEqual(this.calc.div(9, 3), 3);
            });

        });
    }
}

const tester = new TestCalculator();
tester.run();