const $typingText = document.querySelectorAll('span');
const $resetBtn = document.querySelector('.reset-btn');
const $accuracy = document.querySelector('#accuracy');
let currentIndex = 0;
let totalPresses = 0;
let totalCorrect = 0;

document.addEventListener('keydown', function (event) {
  if (currentIndex === $typingText.length) {
    return;
  }
  totalPresses++;
  const ele = $typingText[currentIndex];
  const typedLetter = event.key;

  if (ele.textContent === typedLetter) {
    $typingText[currentIndex].classList.remove('incorrect', 'active');
    $typingText[currentIndex].classList.add('correct');
    currentIndex++;
    totalCorrect++;
    if (currentIndex < $typingText.length) {
      $typingText[currentIndex].classList.add('active');
    } else {
      $resetBtn.classList.remove('hidden');
    }
  } else {
    $typingText[currentIndex].classList.add('incorrect');
  }
  $accuracy.textContent = (totalCorrect / totalPresses).toFixed(2) * 100 + '%';
});

$resetBtn.addEventListener('click', function (event) {
  for (var i = 0; i < $typingText.length; i++) {
    $typingText[i].classList.remove('incorrect', 'correct');
  }
  currentIndex = 0;
  totalPresses = 0;
  totalCorrect = 0;
  $accuracy.textContent = '';
  $resetBtn.classList.add('hidden');
  $typingText[currentIndex].classList.add('active');
});
