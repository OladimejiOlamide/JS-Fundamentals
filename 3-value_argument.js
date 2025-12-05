/*
 * print_first_arg_v2.js
 * Script that prints the first argument passed to it.
 * If no arguments are passed to the script, prints “No argument”.
 * Constraints: Must use console.log, cannot use 'var' or 'length'.
 */

// process.argv structure: [nodePath, scriptPath, firstArg, ...]
// We use array destructuring to access the third element (index 2) directly.
// If the argument is missing, 'firstArg' will automatically be set to 'undefined'.
const [nodePath, scriptPath, firstArg] = process.argv;

// Check if the argument is undefined (meaning it was not provided on the command line).
if (firstArg === undefined) {
    console.log("No argument");
} else {
    // If the argument exists, print its value.
    console.log(firstArg);
}