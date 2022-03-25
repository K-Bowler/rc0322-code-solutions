/* exported isVowel */
function isVowel(char) {
  var vowelArray = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < vowelArray.length; i++) {
    if (char === vowelArray[i]) {
      return true;
    }
  }
  return false;
}
