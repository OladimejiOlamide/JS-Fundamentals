// Define the required messages using a constant array
const languages = ["C is fun", "Python is cool", "JavaScript is amazing"];

let outputString = "";

// Use a loop to iterate over the array and build a single string
for (let i = 0; i < languages.length; i++) {
    outputString += languages[i];

    // Add a newline character, but only if it's NOT the last element
    if (i < languages.length - 1) {
        outputString += "\n";
    }
}

// Use a single console.log call to print the entire multi-line string
console.log(outputString);
