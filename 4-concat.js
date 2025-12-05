/*
 * print_args.js
 * Script that prints two arguments passed to it in the format: "arg1 is arg2".
 * Arguments are accessed via process.argv, where:
 * process.argv[0] is the node executable path
 * process.argv[1] is the script file path
 * process.argv[2] is the first user argument
 * process.argv[3] is the second user argument
 */

// We must use 'const' or 'let' (no 'var')

// 1. Get the first argument (at index 2) and the second argument (at index 3)
// We use array destructuring for clean extraction
const [nodePath, scriptPath, firstArg, secondArg] = process.argv;

// 2. Check if both required arguments were provided
if (firstArg === undefined || secondArg === undefined) {
    // If arguments are missing, log an error message instead of crashing
    console.log("Error: Please provide exactly two arguments.");
    console.log("Usage: node print_args.js <argument1> <argument2>");
} else {
    // 3. Print the arguments in the specified format: "arg1 is arg2"
    console.log(`${firstArg} is ${secondArg}`);
}

// Example usage: node print_args.js Hello World
// Output: Hello is World