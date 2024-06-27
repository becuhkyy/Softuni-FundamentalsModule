function intAndFloat(a, b, c) {
  const sum = a + b + c;
  console.log(`${sum} - ${sum % 1 === 0 ? "Integer" : "Float"}`);
}
