/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var wordsArray = [];
  for (var i = 0; i < words.length; i++) {
    wordsArray.push(words[i] += suffix);
  }
  return wordsArray;
}
