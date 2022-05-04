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
    // console.log('CONDITION:', currentIndex < $typingText.length);
    if (currentIndex < $typingText.length) {
      $typingText[currentIndex].classList.add('active');
    } else {
    // console.log('Reached the END!');
      $resetBtn.classList.remove('hidden');
    }
  } else {
    $typingText[currentIndex].classList.add('incorrect');
  }
  $accuracy.textContent = (totalCorrect / totalPresses).toFixed(2) * 100 + '%';

  // console.log('EVENT:', typedLetter);
  // console.log('ELEMENT:', ele);
  // console.log('MATCH:', ele.textContent === typedLetter);
});

$resetBtn.addEventListener('click', function (event) {
  // console.log('hi');
  for (var i = 0; i < $typingText.length; i++) {
  // console.log('index:', i);
    $typingText[i].classList.remove('incorrect', 'correct');
  }
  currentIndex = 0;
  totalPresses = 0;
  totalCorrect = 0;
  $accuracy.textContent = '';
  $resetBtn.classList.add('hidden');
  $typingText[currentIndex].classList.add('active');
});
