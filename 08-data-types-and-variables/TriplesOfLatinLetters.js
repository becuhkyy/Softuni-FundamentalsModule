function tripplesOfLatinLetters(numStr) {
  for (let j = 0; j < Number(numStr); j++) {
    for (let k = 0; k < Number(numStr); k++) {
      for (let l = 0; l < Number(numStr); l++) {
        const first = String.fromCharCode(97 + j);
        const second = String.fromCharCode(97 + k);
        const third = String.fromCharCode(97 + l);
        console.log(`${first}${second}${third}`);
      }
    }
  }
}
