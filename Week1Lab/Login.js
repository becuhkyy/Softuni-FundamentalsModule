function login(input) {
  const username = input[0];
  const correctPass = username.split("").reverse("").join("");

  for (let i = 1; i <= input.length; i++) {
    if (input[i] === correctPass) {
      console.log(`User ${username} logged in.`);
      break;
    }

    if (i === 4) {
      console.log(`User ${username} blocked!`);
      break;
    } else {
      console.log("Incorrect password. Try again.");
    }
  }
}
