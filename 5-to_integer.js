// Get the first argument from the command line (after node and script name)
const arg = process.argv[2];

// Convert to integer
const num = Number(arg);

// Check if it's a valid number and an integer
if (!isNaN(num) && Number.isInteger(num)) {
    console.log(`My number: ${num}`);
} else {
    console.log("Not a number");
}
