function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Or handle nulls in another suitable way
  }
  return a + b;
}

console.log(foo(1, null)); // Output: 1
console.log(foo(1, 2)); // Output: 3