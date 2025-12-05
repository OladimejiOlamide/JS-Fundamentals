/*
 * add_integers.js
 * Script that prints the addition of two integers passed as command-line arguments.
 * Constraints: Must define function add(a, b), no 'var'.
 */

/**
 * Adds two integers.
 * @param {number} a The first integer.
 * @param {number} b The second integer.
 * @returns {number} The sum of a and b.
 */
function add(a, b) {
    // The arguments are expected to be numbers by the time they reach the function.
    return a + b;
}

// 1. Get the command-line arguments. They are always strings initially.
const firstArg = process.argv[2];
const secondArg = process.argv[3];

// 2. Convert arguments to integers before calling the function.
// If arguments are missing or invalid, they will result in NaN, which will be handled gracefully 
// by standard Node behavior (printing NaN for the sum), but we'll add a check for completeness.

const num1 = parseInt(firstArg);
const num2 = parseInt(secondArg);

// Simple check to ensure both are valid numbers before proceeding to calculate and print.
if (isNaN(num1) || isNaN(num2)) {
    console.log("Error: Please provide two valid integers.");
} else {
    // 3. Call the defined function and print the result.
    // We are only using one console.log call here, which prints the final result.
    console.log(add(num1, num2));
}