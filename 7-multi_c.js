const process = require("process");

function isNumeric(input) {
  return !isNaN(Number(input));
}

if (isNumeric(process.argv[2]) === true) {
  for (let i = 0; i < Number(process.argv[2]); i++) {
    console.log("C is fun");
  }
} else {
  console.log("Missing number of occurrences");
}
