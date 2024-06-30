function solve(a, b, c) {
  function min(a, b) {
    if (a < b) {
      return a;
    }
    return b;
  }

  console.log(min(min(a, b), c));
}
