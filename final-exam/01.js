function passwordValidator(inputArr) {
  let [password, ...commands] = inputArr;

  password = String(password);

  for (const command of commands) {
    let [action, token1, token2] = command.split(" ");

    switch (action) {
      case "Insert":
        const insertIndex = Number(token1);
        if (insertIndex >= 0 && insertIndex < password.length) {
          password = password.split("");
          password.splice(insertIndex, 0, token2);
          password = password.join("");
          console.log(password);
        }
        break;
      case "Replace":
        const replaceChar = Number(token2) + token1.charCodeAt();

        if (
          replaceChar >= 0 &&
          replaceChar <= 255 &&
          password.includes(token1)
        ) {
          //Should have used map here in the previous submit. Not sure if anyone is watching this
          password = password
            .split("")
            .map((c) => (c === token1 ? String.fromCharCode(replaceChar) : c))
            .join("");

          console.log(password);
        }

        break;
      case "Make":
        password = password.split("");

        token2 = Number(token2);

        if (token1 === "Upper") {
          password[token2] = password[token2].toUpperCase();
        } else if (token1 === "Lower") {
          password[token2] = password[token2].toLowerCase();
        }

        password = password.join("");

        console.log(password);
        break;
      case "Validation":
        if (password.length < 8) {
          console.log("Password must be at least 8 characters long!");
        }

        const pattern = /^[a-zA-Z0-9_]+$/;
        if (!pattern.test(password))
          console.log("Password must consist only of letters, digits and _!");

        const upperCasePattern = /[A-Z]/;
        if (!upperCasePattern.test(password))
          console.log("Password must consist at least one uppercase letter!");

        const lowerCasePattern = /[a-z]/;
        if (!lowerCasePattern.test(password))
          console.log("Password must consist at least one lowercase letter!");

        const digitPattern = /\d/;
        if (!digitPattern.test(password))
          console.log("Password must consist at least one digit!");

        break;

      case "Complete":
        return;
    }
  }
}

passwordValidator([
  "invalidpassword*",
  "Add 2 p",
  "Replace i -50",
  "Replace * 10",
  "Make Upper 2",
  "Validation",
  "Complete",
]);

passwordValidator([
  "123456789",
  "Insert 3 R",
  "Replace 5 15",
  "Validation",
  "Make Lower 3",
  "Complete",
]);
