function solve(a, b) {
  function min(a, b) {
    if (a < b) {
      return a;
    }
    return b;
  }

  function max(a, b) {
    if (a > b) {
      return a;
    }
    return b;
  }

  const asciiA = a.charCodeAt();
  const asciiB = b.charCodeAt();
  const middleChars = [];

  for (let i = min(asciiA, asciiB) + 1; i < max(asciiA, asciiB); i++)
    middleChars.push(String.fromCharCode(i));

  console.log(middleChars.join(" "));
}

solve("a", "d");
solve("#", ":");
