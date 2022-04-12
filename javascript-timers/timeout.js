var $text = document.querySelector('.message');

function hello() {
  $text.textContent = 'Hello There!';
}
setTimeout(hello, 1000);
