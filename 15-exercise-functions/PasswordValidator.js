function passwordValidator(password) {
  function checkLength(password) {
    if (password.length < 6 || password.length > 10) {
      console.log("Password must be between 6 and 10 characters");
      return false;
    }
    return true;
  }

  function checkIfAlphanumeric(password) {
    const pattern = /^[A-Za-z0-9]+$/;

    if (pattern.test(password)) {
      return true;
    }

    console.log("Password must consist only of letters and digits");
    return false;
  }

  function checkDigitCount(password) {
    let digits = 0;

    for (char of password) {
      if (Number(char) >= 0 && Number(char) <= 9) digits++;
    }

    if (digits < 2) {
      console.log("Password must have at least 2 digits");
      return false;
    }

    return true;
  }

  const isValidLength = checkLength(password);
  const isValidAlphanumeric = checkIfAlphanumeric(password);
  const isValidDigitCount = checkDigitCount(password);

  const isValid = isValidLength && isValidAlphanumeric && isValidDigitCount;

  if (isValid) console.log("Password is valid");
}

passwordValidator("logIn22df");
// passwordValidator("MyPass123");
// passwordValidator("Pa$s$s");
