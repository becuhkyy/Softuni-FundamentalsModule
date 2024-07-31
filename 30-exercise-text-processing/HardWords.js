function hardWords(inputArr) {
  let letter = inputArr[0];
  words = inputArr[1];

  const letterWords = letter.split(/[.,!?:]? /);
  const templates = letterWords.filter((w) => w.includes("_"));

  for (const template of templates) {
    const rightWord = words.find((w) => w.length === template.length);
    letter = letter.replace(template, rightWord);
  }

  console.log(letter);
}

hardWords([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);
