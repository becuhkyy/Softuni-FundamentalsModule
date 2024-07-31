function modernTimesOfHashtag(input) {
  const words = input.split(" ");

  const hashWords = words.filter((w) => w.startsWith("#") && w.length > 1);
  // Word boundaries
  const pattern = /\b[a-zA-Z]+\b/;

  for (let word of hashWords) {
    word = word.substring(1);

    if (pattern.test(word)) console.log(word);
  }
}

modernTimesOfHashtag(
  "Nowadays everyone uses # to tag a #special word in #socialMedia"
);
