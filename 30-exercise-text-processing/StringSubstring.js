function stringSubstring(word, text) {
  const lowercaseWord = word.toLowerCase();
  const lowercaseTextArr = text.toLowerCase().split(" ");

  if (lowercaseTextArr.includes(lowercaseWord)) console.log(word);
  else console.log(`${word} not found!`);
}

stringSubstring("javascript", "Javascript is the best programming language");
