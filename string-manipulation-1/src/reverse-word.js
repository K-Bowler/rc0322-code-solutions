/* exported reverseWord */
function reverseWord(word) {
  var reverse = [];
  var lastIndex = word.length - 1;
  for (var i = lastIndex; i >= 0; i--) {
    reverse.push(word[i]);
  }
  return reverse.join('');
}
