const process = require("process");

function isNumeric(input) {
  return !isNaN(Number(input));
}

if (isNumeric(process.argv[2]) === true) {
  for (let i = 0; i < Number(process.argv[2]); i++) {
    for (let j = 0; j < Number(process.argv[2]); j++) {
      process.stdout.write("X");
    }
    console.log();
  }
} else {
  console.log("Missing size");
}
