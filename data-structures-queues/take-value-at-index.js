/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) return;
  for (var i = 0; i < index; i++) {
    const firstInQueue = queue.dequeue();
    queue.enqueue(firstInQueue);
  }
  return queue.dequeue();
}
