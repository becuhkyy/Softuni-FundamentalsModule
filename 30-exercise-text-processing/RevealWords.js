function revealWords(words, sentence) {
  let template = sentence.split(" ");
  words = words.split(", ");

  for (const word of words) {
    template = template.map((w) =>
      w.startsWith("*") && w.length === word.length ? word : w
    );
  }

  console.log(template.join(" "));
}

revealWords(
  "great",
  "softuni is ***** place for learning new programming languages"
);

revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
