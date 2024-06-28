function solve(n) {
  let counter = 0;
  let sum = 0;

  for (let i = 1; counter < n; i += 2) {
    if (i % 2 !== 0) {
      console.log(i);
      sum += i;
      counter++;
    }
  }

  console.log(`Sum: ${sum}`);
}
