function kingJoserPyramid(base, increment) {
  let stone = 0;
  let marble = 0;
  let lapisLazuli = 0;
  let gold = 0;

  let step = 1;
  while (base - 2 > 0) {
    stone += Math.pow(base - 2, 2);

    if (step % 5 === 0) lapisLazuli += 4 * base - 4;
    else marble += 4 * base - 4;

    base -= 2;
    step++;
  }

  gold = Math.pow(base, 2);

  console.log(`Stone required: ${Math.ceil(stone * increment)}`);
  console.log(`Marble required: ${Math.ceil(marble * increment)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli * increment)}`);
  console.log(`Gold required: ${Math.ceil(gold * increment)}`);
  console.log(`Final pyramid height: ${Math.floor(step * increment)}`);
}
