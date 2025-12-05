/*
 * multi_languages_loop.js
 * Script that prints three specific lines using an array, a loop, and only one console.log call.
 * Constraints: No 'var', no 'if/else', use only one console.log, must use a loop.
 */

// 1. Define the array of strings using 'const'
const languages = [
    "C is fun",
    "Python is cool",
    "JavaScript is amazing"
];

// 2. Use a loop (for...of is concise) to build a single output string.
// We'll use a constant for the final string builder.
let outputString = "";

// Using the for...of loop as requested by "use a loop"
for (const phrase of languages) {
    // Append the phrase followed by a newline character (\n)
    // This accumulates all phrases into one string.
    outputString += phrase + "\n";
}

// 3. Use only one console.log call to print the entire accumulated string.
// We use slice(0, -1) to remove the trailing newline character for clean output.
console.log(outputString.slice(0, -1));