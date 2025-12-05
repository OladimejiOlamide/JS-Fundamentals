// 1. Get and convert the first argument to an integer
const size = parseInt(process.argv[2]);

// 2. Check for the "Not a number" condition
if (isNaN(size) || size <= 0) {
    console.log("Missing size");
} else {
    // 3. Success: Create a row of 'X's with the required width
    const row = 'X'.repeat(size);

    // 4. Use a while loop to print the row 'size' times (for the height)
    let i = 0;
    while (i < size) {
        console.log(row);
        i++;
    }
}
