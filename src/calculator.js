#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * 
 * Supported Operations:
 * - Addition (+): Add two numbers
 * - Subtraction (-): Subtract second number from first
 * - Multiplication (*): Multiply two numbers
 * - Division (/): Divide first number by second
 * 
 * Usage: node calculator.js <number1> <operation> <number2>
 * Example: node calculator.js 10 + 5
 */

const { calculate } = require('./calculatorModule');

// Parse command line arguments
const args = process.argv.slice(2);

if (args.length !== 3) {
    console.log('Usage: node calculator.js <number1> <operation> <number2>');
    console.log('Example: node calculator.js 10 + 5');
    console.log('\nSupported operations: +, -, *, /');
    process.exit(1);
}

const num1 = parseFloat(args[0]);
const operation = args[1];
const num2 = parseFloat(args[2]);

// Validate inputs
if (isNaN(num1) || isNaN(num2)) {
    console.error('Error: Both arguments must be valid numbers');
    process.exit(1);
}

try {
    const result = calculate(num1, operation, num2);
    console.log(`${num1} ${operation} ${num2} = ${result}`);
} catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
}
