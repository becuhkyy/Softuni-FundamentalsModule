function replaceRepeatingChars(text) {
  let nonRepeatingChars = "";
  let lastChar = "";

  for (const char of text) {
    if (lastChar !== char) {
      nonRepeatingChars += char;
      lastChar = char;
    }
  }

  console.log(nonRepeatingChars);
}

replaceRepeatingChars("aaaaabbbbbcdddeeeedssaa");
