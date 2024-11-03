// src/factorial.js

function factorial(n) {
  if (n < 0) return 'Factorial not defined for negative numbers';
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

module.exports = factorial;
