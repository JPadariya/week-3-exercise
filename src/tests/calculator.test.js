/**
 * Comprehensive Unit Tests for Calculator Functions
 * Tests all basic arithmetic operations with various scenarios
 */

const { add, subtract, multiply, divide, calculate } = require('../calculatorModule');

describe('Calculator Functions', () => {
    
    // ========== Addition Tests ==========
    describe('Addition', () => {
        test('should correctly add two positive numbers (2 + 3)', () => {
            expect(add(2, 3)).toBe(5);
        });

        test('should correctly add two positive numbers (10 + 15)', () => {
            expect(add(10, 15)).toBe(25);
        });

        test('should correctly add positive and negative numbers', () => {
            expect(add(10, -5)).toBe(5);
        });

        test('should correctly add two negative numbers', () => {
            expect(add(-10, -5)).toBe(-15);
        });

        test('should correctly add zero to a number', () => {
            expect(add(10, 0)).toBe(10);
        });

        test('should correctly add decimal numbers', () => {
            expect(add(1.5, 2.3)).toBeCloseTo(3.8);
        });

        test('should correctly add large numbers', () => {
            expect(add(1000000, 2000000)).toBe(3000000);
        });
    });

    // ========== Subtraction Tests ==========
    describe('Subtraction', () => {
        test('should correctly subtract two positive numbers (10 - 4)', () => {
            expect(subtract(10, 4)).toBe(6);
        });

        test('should correctly subtract smaller from larger number', () => {
            expect(subtract(20, 8)).toBe(12);
        });

        test('should correctly subtract larger from smaller number', () => {
            expect(subtract(5, 10)).toBe(-5);
        });

        test('should correctly subtract negative numbers', () => {
            expect(subtract(10, -5)).toBe(15);
        });

        test('should correctly subtract two negative numbers', () => {
            expect(subtract(-10, -5)).toBe(-5);
        });

        test('should correctly subtract zero from a number', () => {
            expect(subtract(10, 0)).toBe(10);
        });

        test('should correctly subtract decimal numbers', () => {
            expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
        });

        test('should return zero when subtracting number from itself', () => {
            expect(subtract(100, 100)).toBe(0);
        });
    });

    // ========== Multiplication Tests ==========
    describe('Multiplication', () => {
        test('should correctly multiply two positive numbers (45 * 2)', () => {
            expect(multiply(45, 2)).toBe(90);
        });

        test('should correctly multiply small positive numbers', () => {
            expect(multiply(6, 7)).toBe(42);
        });

        test('should correctly multiply positive and negative numbers', () => {
            expect(multiply(5, -3)).toBe(-15);
        });

        test('should correctly multiply two negative numbers', () => {
            expect(multiply(-5, -3)).toBe(15);
        });

        test('should return zero when multiplying by zero', () => {
            expect(multiply(100, 0)).toBe(0);
        });

        test('should correctly multiply decimal numbers', () => {
            expect(multiply(2.5, 4)).toBe(10);
        });

        test('should correctly multiply large numbers', () => {
            expect(multiply(1000, 1000)).toBe(1000000);
        });

        test('should return the same number when multiplying by one', () => {
            expect(multiply(42, 1)).toBe(42);
        });
    });

    // ========== Division Tests ==========
    describe('Division', () => {
        test('should correctly divide two positive numbers (20 / 5)', () => {
            expect(divide(20, 5)).toBe(4);
        });

        test('should correctly divide evenly divisible numbers', () => {
            expect(divide(100, 4)).toBe(25);
        });

        test('should correctly divide numbers with decimal result', () => {
            expect(divide(10, 4)).toBe(2.5);
        });

        test('should correctly divide positive by negative number', () => {
            expect(divide(10, -2)).toBe(-5);
        });

        test('should correctly divide negative by positive number', () => {
            expect(divide(-10, 2)).toBe(-5);
        });

        test('should correctly divide two negative numbers', () => {
            expect(divide(-10, -2)).toBe(5);
        });

        test('should return 1 when dividing number by itself', () => {
            expect(divide(42, 42)).toBe(1);
        });

        test('should throw error when dividing by zero', () => {
            expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
        });

        test('should throw error when dividing zero by zero', () => {
            expect(() => divide(0, 0)).toThrow('Division by zero is not allowed');
        });

        test('should correctly divide decimal numbers', () => {
            expect(divide(7.5, 2.5)).toBe(3);
        });
    });

    // ========== Calculate Function Tests (Integration) ==========
    describe('Calculate Function', () => {
        test('should correctly calculate addition using + operator (2 + 3)', () => {
            expect(calculate(2, '+', 3)).toBe(5);
        });

        test('should correctly calculate subtraction using - operator (10 - 4)', () => {
            expect(calculate(10, '-', 4)).toBe(6);
        });

        test('should correctly calculate multiplication using * operator (45 * 2)', () => {
            expect(calculate(45, '*', 2)).toBe(90);
        });

        test('should correctly calculate division using / operator (20 / 5)', () => {
            expect(calculate(20, '/', 5)).toBe(4);
        });

        test('should throw error for unknown operation', () => {
            expect(() => calculate(10, '%', 3)).toThrow("Unknown operation '%'");
        });

        test('should throw error for division by zero through calculate', () => {
            expect(() => calculate(10, '/', 0)).toThrow('Division by zero is not allowed');
        });

        test('should handle negative numbers in all operations', () => {
            expect(calculate(-5, '+', 3)).toBe(-2);
            expect(calculate(-5, '-', 3)).toBe(-8);
            expect(calculate(-5, '*', 3)).toBe(-15);
            expect(calculate(-10, '/', 2)).toBe(-5);
        });
    });

    // ========== Edge Cases and Special Scenarios ==========
    describe('Edge Cases', () => {
        test('should handle very large numbers in addition', () => {
            expect(add(Number.MAX_SAFE_INTEGER - 1, 1)).toBe(Number.MAX_SAFE_INTEGER);
        });

        test('should handle very small decimal numbers', () => {
            expect(add(0.1, 0.2)).toBeCloseTo(0.3);
        });

        test('should handle zero in all operations', () => {
            expect(add(0, 0)).toBe(0);
            expect(subtract(0, 0)).toBe(0);
            expect(multiply(0, 5)).toBe(0);
        });

        test('should handle negative zero', () => {
            expect(add(-0, 5)).toBe(5);
            expect(multiply(-0, 5)).toBe(-0);
        });
    });

    // ========== Tests Based on calc-basic-operations.png Image ==========
    describe('Image Test Cases (calc-basic-operations.png)', () => {
        test('Image Test 1: 2 + 3 = 5', () => {
            expect(calculate(2, '+', 3)).toBe(5);
        });

        test('Image Test 2: 10 - 4 = 6', () => {
            expect(calculate(10, '-', 4)).toBe(6);
        });

        test('Image Test 3: 45 * 2 = 90', () => {
            expect(calculate(45, '*', 2)).toBe(90);
        });

        test('Image Test 4: 20 / 5 = 4', () => {
            expect(calculate(20, '/', 5)).toBe(4);
        });
    });
});
