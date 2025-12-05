// Define the recursive function to calculate factorial
function factorial(n) {
    // Base case: handles n=0, n=1, negative numbers, and the required NaN case.
    // parseInt(invalid_string) results in NaN, and isNaN(NaN) is true.
    if (isNaN(n) || n <= 1) {
        return 1;
    }

    // Recursive step: n * factorial(n - 1)
    return n * factorial(n - 1);
}

// Get the argument and convert it to an integer
const num = parseInt(process.argv[2]);

// Print the result by calling the function
console.log(factorial(num));
