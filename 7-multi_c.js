/*
 * c_is_fun_x_times.js
 * Script that prints "C is fun" X times, where X is the first command line argument.
 * Constraints: No 'var', max two console.log calls, must use a loop.
 */

// process.argv[2] holds the first user argument
const firstArg = process.argv[2];

// Use the parseInt function to attempt to convert the argument to an integer.
// isNaN checks if the result of parseInt is Not a Number (i.e., the argument wasn't a valid integer).
// Note: We also check if firstArg is undefined (no argument passed at all).
if (firstArg === undefined || isNaN(parseInt(firstArg))) {
    // 1st console.log call: Error message
    console.log("Missing number of occurrences");

} else {
    // Convert the valid argument to an integer
    const x = parseInt(firstArg);

    // Initialize an empty string to build the output
    let output = "";
    
    // Use a for loop to repeat the phrase 'x' times
    for (let i = 0; i < x; i++) {
        output += "C is fun\n";
    }

    // 2nd console.log call: Print the accumulated string (remove trailing newline)
    // The loop logic ensures we only hit this path if 'x' is a valid number.
    console.log(output.slice(0, -1));
}