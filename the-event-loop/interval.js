let currentCount = 3;
const interval = setInterval(countDown, 1000);

function countDown() {
  if (currentCount > 0) {
    console.log(currentCount);
    currentCount--;
  } else {
    console.log('Blast off!');
    clearInterval(interval);
  }
}
