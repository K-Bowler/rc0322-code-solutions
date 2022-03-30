function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name:', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name:', event.target.name);
}

function handleInput(event) {
  console.log('event.target.name:', event.target.name);
  console.log('event.target.value', event.target.value);
}

var $inputUser = document.querySelector('#user-name');
$inputUser.addEventListener('focus', handleFocus);
$inputUser.addEventListener('blur', handleBlur);
$inputUser.addEventListener('input', handleInput);

var $inputEmail = document.querySelector('#user-email');
$inputEmail.addEventListener('focus', handleFocus);
$inputEmail.addEventListener('blur', handleBlur);
$inputEmail.addEventListener('input', handleInput);

var $textArea = document.querySelector('textarea');
$textArea.addEventListener('focus', handleFocus);
$textArea.addEventListener('blur', handleBlur);
$textArea.addEventListener('input', handleInput);
