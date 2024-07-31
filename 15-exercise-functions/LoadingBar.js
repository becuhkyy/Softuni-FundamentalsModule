function loadingBar(num) {
  let bar = "[";

  for (let i = 0; i < 10; i++)
    if (i < num / 10) bar += "%";
    else bar += ".";

  bar += "]";

  if (num < 100) {
    console.log(`${num}% ${bar}`);
    console.log(`Still loading...`);
  } else {
    console.log(`${num}% Complete!`);
    console.log(`${bar}`);
  }
}

loadingBar(100);
