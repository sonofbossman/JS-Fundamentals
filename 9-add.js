const process = require("process");
function add(a, b) {
  return a + b;
}

function isNumeric(input) {
  return !isNaN(Number(input));
}

if (
  isNumeric(process.argv[2]) === true &&
  isNumeric(process.argv[3]) === true
) {
  console.log(add(Number(process.argv[2]), Number(process.argv[3])));
} else {
  console.log("NaN");
}
