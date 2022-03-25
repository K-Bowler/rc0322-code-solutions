/* exported capitalize */
function capitalize(word) {
  var lowerCased = word.toLowerCase();
  return lowerCased.charAt(0).toUpperCase() + lowerCased.slice(1);
}
