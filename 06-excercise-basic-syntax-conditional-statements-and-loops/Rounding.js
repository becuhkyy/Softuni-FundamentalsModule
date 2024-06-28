function Rounding(number, precision) {
  if (precision > 15) precision = 15;

  number = parseFloat(number);
  number = number.toFixed(precision);
  number = parseFloat(number);
  console.log(number);
}
