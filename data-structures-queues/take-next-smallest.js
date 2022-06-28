/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) return;
  let firstInQueue = queue.dequeue();
  while (firstInQueue > queue.peek()) {
    queue.enqueue(firstInQueue);
    firstInQueue = queue.dequeue();
  }
  return firstInQueue;
}
