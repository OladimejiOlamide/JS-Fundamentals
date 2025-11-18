// Define the required function prototype to perform addition
function add(a, b) {
    return a + b;
}

// Get the first two arguments and convert them to integers
const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);

// Calculate the result using the function
const result = add(num1, num2);

// Print the final result
console.log(result);
