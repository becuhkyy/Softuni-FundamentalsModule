function passwordGenerator(inputArr) {
  const [str1, str2, replacementStr] = inputArr;
  const replacementChars = replacementStr.split("");

  let passBase = str1 + str2;

  const isVowel = /[aeiou]/;

  passBase = passBase.split("").map((char, idx) => {
    if (isVowel.test(char)) {
      const replacementChar = replacementChars.shift();
      replacementChars.push(replacementChar);

      return replacementChar.toUpperCase();
    } else return char;
  });

  console.log(`Your generated password is ${passBase.reverse().join("")}`);
}

passwordGenerator(["ilovepizza", "ihatevegetables", "orange"]);
// passwordGenerator(["easymoneyeazylife", "atleasttencharacters", "absolute"]);
