function palindromeIntegers(numArr) {
  function isPalindrome(number) {
    const stringified = number.toString();

    for (let i = 0; i < stringified.length / 2; i++)
      if (stringified[i] !== stringified[stringified.length - 1 - i])
        return false;

    return true;
  }

  for (let i = 0; i < numArr.length; i++) console.log(isPalindrome(numArr[i]));
}
