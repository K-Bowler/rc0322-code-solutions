var $body = document.querySelector('body');
var $button = document.querySelector('button');
function lightSwitch() {
  if ($body.className === 'switch-on') {
    $body.className = 'switch-off';
  } else $body.className = 'switch-on';
  if ($button.className === 'light') {
    $button.className = 'dark';
  } else $button.className = 'light';
}
$button.addEventListener('click', lightSwitch);
