/* exported tail */
function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// define a new function named tail with one paramenter (array)
// within the function define a new variable newArray to hold a new empty array
// define a for loop with the initaial expression with a new variable i at 1
// conditional statement that checks if the current value of i is less than
// the array length
// then pushes the value of the array at the current index to the newArray array
// returns the newArray
