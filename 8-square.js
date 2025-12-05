/*
 * square_printer.js
 * Script that prints a square of size X, where X is the first command line argument.
 * Constraints: No 'var', must use 'X' character, must use a loop.
 */

// 1. Get the argument and attempt to convert it to an integer
const sizeArg = process.argv[2];
const size = parseInt(sizeArg);

// 2. Validation Check
// Check if no argument was provided or if the argument cannot be converted to a number.
if (sizeArg === undefined || isNaN(size)) {
    console.log("Missing size");
} else {
    // 3. Build the row string efficiently
    // String.prototype.repeat() simplifies creating a row of 'X's.
    const row = "X".repeat(size);
    let square = "";

    // 4. Use a loop (for) to construct the entire square (rows)
    for (let i = 0; i < size; i++) {
        // Append the row, followed by a newline character
        square += row + "\n";
    }

    // 5. Print the result using console.log (only runs if validation passed)
    // We use .slice(0, -1) to remove the unnecessary trailing newline character.
    if (size > 0) {
        console.log(square.slice(0, -1));
    }
}