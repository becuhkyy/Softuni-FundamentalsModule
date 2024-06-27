function specialNumbers(num) {
  for (let i = 1; i <= num; i++) {
    const stringifiedNumber = String(i);
    let sum = 0;

    for (let j = 0; j < stringifiedNumber.length; j++) {
      sum += Number(stringifiedNumber[j]);
    }

    console.log(
      `${i} -> ${sum === 5 || sum === 7 || sum === 11 ? "True" : "False"}`
    );
  }
}
