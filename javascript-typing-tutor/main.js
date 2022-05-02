var $typingText = document.querySelectorAll('span');
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

document.addEventListener('keydown', function (event) {
  for (var i = 0; i < $typingText.length; i++) {
    for (var l = 0; l < letters.length; l++) {
      if (event.key === $typingText[i].classList = 'active') {
      }
    }
  }
});
