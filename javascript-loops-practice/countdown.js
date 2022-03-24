/* exported countdown */
function countdown(number) {
  var array = [];
  var currentNumber = 0;
  while (number >= currentNumber) {
    array.push(number);
    number--;
  }
  return array;
}
