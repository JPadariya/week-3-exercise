#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * 
 * Supported Operations:
 * - Addition (+): Add two numbers
 * - Subtraction (-): Subtract second number from first
 * - Multiplication (*): Multiply two numbers
 * - Division (/): Divide first number by second
 * - Modulo (%): Get remainder of division
 * - Exponentiation (^ or **): Raise base to power
 * - Square Root (sqrt): Calculate square root of a number
 * 
 * Usage: node calculator.js <number1> <operation> <number2>
 * Example: node calculator.js 10 + 5
 * Special: node calculator.js <number> sqrt (for square root)
 */

const { calculate } = require('./calculatorModule');

// Parse command line arguments
const args = process.argv.slice(2);

// Handle square root special case (single operand)
if (args.length === 2 && args[1] === 'sqrt') {
    const num = parseFloat(args[0]);
    
    if (isNaN(num)) {
        console.error('Error: Argument must be a valid number');
        process.exit(1);
    }
    
    try {
        const result = calculate(num, 'sqrt');
        console.log(`sqrt(${num}) = ${result}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
    process.exit(0);
}

if (args.length !== 3) {
    console.log('Usage: node calculator.js <number1> <operation> <number2>');
    console.log('       node calculator.js <number> sqrt');
    console.log('Example: node calculator.js 10 + 5');
    console.log('\nSupported operations: +, -, *, /, %, ^, **, sqrt');
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
