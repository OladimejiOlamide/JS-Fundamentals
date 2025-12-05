const userArgsCount = process.argv.length - 2;

if (userArgsCount === 0) {
    console.log("No argument");
} else if (userArgsCount === 1) {
    console.log("Argument found");
} else {
    console.log("Arguments found");
}

