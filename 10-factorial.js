/*
 * factorial_recursive.js
 * Script that computes the factorial of an integer using a recursive function.
 * Constraints: Must be recursive, must use a function, no 'var'.
 * Special Rule: Factorial of NaN is 1.
 */

/**
 * Computes the factorial of a given non-negative integer recursively.
 * Handles the base cases:
 * - Factorial of 0 or 1 is 1.
 * - Factorial of NaN (via the initial check) is 1.
 * @param {number} n The integer for which to compute the factorial.
 * @returns {number} The factorial result.
 */
function factorial(n) {
    // Base Case 1 & 2: Factorial of 0 is 1. 
    // This also handles the NaN case since the initial call passes 1 if the input is NaN.
    if (n <= 1) {
        return 1;
    }

    // Recursive Step: n! = n * (n-1)!
    return n * factorial(n - 1);
}

// 1. Get the command-line argument (which is a string)
const inputArg = process.argv[2];

// 2. Convert to an integer. If the argument is missing or not a number, num will be NaN.
const num = parseInt(inputArg);

// 3. Handle the 'NaN' case explicitly before calling the function.
// If num is NaN, we set the number to 1 as per the requirement: "Factorial of NaN is 1" (1! = 1).
const resultNum = isNaN(num) ? 1 : num;

// 4. Calculate the factorial using the recursive function.
const finalResult = factorial(resultNum);

// 5. Print the result.
console.log(finalResult);

// Note: If a negative number is passed (e.g., -3), the factorial function will recurse infinitely
// or hit the stack limit. For this simple exercise, we assume valid non-negative integer input,
// but the prompt implies any argument that can be cast to an integer might be passed.