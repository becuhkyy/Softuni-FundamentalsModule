function factorialDivision(a, b) {
  let factorialOfA = a;
  let factorialOfB = b;

  for (let i = Math.max(a, b) - 1; i >= 1; i--) {
    if (i < a) factorialOfA *= i;
    if (i < b) factorialOfB *= i;
  }

  console.log((factorialOfA / factorialOfB).toFixed(2));
}

factorialDivision(6, 2);
