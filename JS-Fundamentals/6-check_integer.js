const argument = process.argv[2];
const myNumber = parseInt(argument);

if (isNaN(myNumber)) {
    console.log("Not a number");
} else {
    console.log(`My number: ${myNumber}`);
}
