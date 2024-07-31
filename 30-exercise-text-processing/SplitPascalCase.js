function splitPascalCase(inputStr) {
  const pattern = /[A-Z][a-z]*/g;

  const allMatches = inputStr.matchAll(pattern);

  const result = [];

  for (const matchArr of allMatches) {
    result.push(matchArr[0]);
  }

  console.log(result.join(", "));
}

splitPascalCase("SplitMeIfYouCanHaHaYouCantOrYouCan");
