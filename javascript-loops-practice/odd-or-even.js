/* exported oddOrEven */
function oddOrEven(numbers) {
  var evenOrOdd = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenOrOdd.push('even');
    } else evenOrOdd.push('odd');
  }
  return evenOrOdd;
}
