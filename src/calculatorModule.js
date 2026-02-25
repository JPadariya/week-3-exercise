/**
 * Calculator Module
 * 
 * Provides basic arithmetic operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 */

/**
 * Add two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
    return a + b;
}

/**
 * Subtract second number from first
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Difference of a and b
 */
function subtract(a, b) {
    return a - b;
}

/**
 * Multiply two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 */
function multiply(a, b) {
    return a * b;
}

/**
 * Divide first number by second
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} Quotient of a and b
 * @throws {Error} If divisor is zero
 */
function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return a / b;
}

/**
 * Calculate modulo (remainder) of division
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} Remainder of a divided by b
 * @throws {Error} If divisor is zero
 */
function modulo(a, b) {
    if (b === 0) {
        throw new Error('Modulo by zero is not allowed');
    }
    return a % b;
}

/**
 * Raise base to the power of exponent
 * @param {number} base - Base number
 * @param {number} exponent - Exponent (power)
 * @returns {number} Base raised to the exponent
 */
function power(base, exponent) {
    return Math.pow(base, exponent);
}

/**
 * Calculate square root of a number
 * @param {number} n - Number to find square root of
 * @returns {number} Square root of n
 * @throws {Error} If number is negative
 */
function squareRoot(n) {
    if (n < 0) {
        throw new Error('Square root of negative number is not allowed');
    }
    return Math.sqrt(n);
}

/**
 * Calculate result based on operation
 * @param {number} num1 - First number
 * @param {string} operation - Operation symbol (+, -, *, /, %, ^, sqrt)
 * @param {number} num2 - Second number (optional for sqrt)
 * @returns {number} Result of the operation
 * @throws {Error} If operation is invalid
 */
function calculate(num1, operation, num2) {
    switch (operation) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        case '%':
            return modulo(num1, num2);
        case '^':
        case '**':
            return power(num1, num2);
        case 'sqrt':
            return squareRoot(num1);
        default:
            throw new Error(`Unknown operation '${operation}'`);
    }
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    modulo,
    power,
    squareRoot,
    calculate
};
