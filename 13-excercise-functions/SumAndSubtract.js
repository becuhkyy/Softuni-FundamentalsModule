function solve(a, b, c) {
  function sum(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    return a - b;
  }

  console.log(subtract(sum(a, b), c));
}
