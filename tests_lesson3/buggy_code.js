// Function without parameters
function buggyFunction() {
    throw new Error('oops!');
}

// Function with parameters (like the calculator example from slide 1)
function safeDivide(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}

module.exports = { buggyFunction, safeDivide };