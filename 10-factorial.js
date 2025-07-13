function factorialRecursive(n) {
  if (n < 0) {
    console.log("Factorial is not defined for negative numbers.");
    return;
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorialRecursive(n - 1);
}

function isNumeric(input) {
  return !isNaN(Number(input));
}

if (isNumeric(process.argv[2]) === true) {
  console.log(factorialRecursive(Number(process.argv[2])));
} else {
  console.log(factorialRecursive(0));
}
