var $text = document.querySelector('.countdown-display');

function countdown() {
  if ($text.textContent === '4') {
    $text.textContent = '3';
  } else if ($text.textContent === '3') {
    $text.textContent = '2';
  } else if ($text.textContent === '2') {
    $text.textContent = '1';
  } else if ($text.textContent === '1') {
    $text.textContent = '~Earth Beeeelooowww Us~';
  } else {
    clearInterval(interval);
  }
}
var interval = setInterval(countdown, 1000);
