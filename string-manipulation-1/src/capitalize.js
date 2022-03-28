/* exported capitalize */
function capitalize(word) {
  var lowerCased = word.toLowerCase();
  return lowerCased.charAt(0).toUpperCase() + lowerCased.slice(1);
}

// Define a new function capitalize  with one parameter (word)
// Within the function use the toLowerCase method on the word parameter and
// assign that value to the lowerCased variable
// return the lowerCased variable at the first index with the charAt method
// then the toUpperCase method to capitalize the first letter in the word
// add the rest of the given parameter with the slice method at 1 of the
// lowercased object
