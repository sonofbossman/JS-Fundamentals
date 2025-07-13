const process = require("process");

function isNumeric(input) {
  return !isNaN(Number(input));
}

if (isNumeric(process.argv[2]) === true) {
  console.log(`My number: ${parseInt(process.argv[2])}`);
} else {
  console.log("Not a number");
}
