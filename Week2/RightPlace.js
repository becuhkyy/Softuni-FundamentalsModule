function rightPlace(str, char, result) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "_") newStr += char;
    else newStr += str[i];
  }

  console.log(newStr === result ? "Matched" : "Not Matched");
}

rightPlace("Str_ng", "i", "String");
