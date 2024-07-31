function lowerOrUpper(char) {
  char.codePointAt() < 97
    ? console.log("upper-case")
    : console.log("lower-case");
}
